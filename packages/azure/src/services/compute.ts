/**
 * Azure Compute API
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
const DiagnosticPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  supportedResourceTypes: Schema.optional(Schema.Array(Schema.String)),
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
const ResourceSizeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sku: Schema.optional(Schema.String),
});
const PlacementScoreSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sku: Schema.optional(Schema.String),
  region: Schema.optional(Schema.String),
  availabilityZone: Schema.optional(Schema.String),
  score: Schema.optional(Schema.String),
  isQuotaAvailable: Schema.optional(Schema.Boolean),
});
const AvailabilitySetSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const CapacityReservationGroupSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const DedicatedHostGroupSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const ImageSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const VirtualMachineImageResourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  });
const VirtualMachineImagePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    plan: Schema.optional(Schema.suspend(() => PurchasePlanSchema)),
    osDiskImage: Schema.optional(Schema.suspend(() => OSDiskImageSchema)),
    dataDiskImages: Schema.optional(
      Schema.Array(Schema.suspend(() => DataDiskImageSchema)),
    ),
    automaticOSUpgradeProperties: Schema.optional(
      Schema.suspend(() => AutomaticOSUpgradePropertiesSchema),
    ),
    hyperVGeneration: Schema.optional(
      Schema.suspend(() => HyperVGenerationTypesSchema),
    ),
    disallowed: Schema.optional(
      Schema.suspend(() => DisallowedConfigurationSchema),
    ),
    features: Schema.optional(
      Schema.Array(Schema.suspend(() => VirtualMachineImageFeatureSchema)),
    ),
    architecture: Schema.optional(
      Schema.suspend(() => ArchitectureTypesSchema),
    ),
    imageDeprecationStatus: Schema.optional(
      Schema.suspend(() => ImageDeprecationStatusSchema),
    ),
  });
const PurchasePlanSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  publisher: Schema.String,
  name: Schema.String,
  product: Schema.String,
});
const OSDiskImageSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  operatingSystem: Schema.suspend(() => Common_OperatingSystemTypesSchema),
});
const Common_OperatingSystemTypesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Windows", "Linux"]);
const DataDiskImageSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  lun: Schema.optional(Schema.Number),
});
const AutomaticOSUpgradePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    automaticOSUpgradeSupported: Schema.Boolean,
  });
const HyperVGenerationTypesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(
  ["V1", "V2"],
);
const DisallowedConfigurationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    vmDiskType: Schema.optional(Schema.suspend(() => VmDiskTypesSchema)),
  },
);
const VmDiskTypesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "None",
  "Unmanaged",
]);
const VirtualMachineImageFeatureSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  });
const ArchitectureTypesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "x64",
  "Arm64",
]);
const ImageDeprecationStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  imageState: Schema.optional(Schema.suspend(() => ImageStateSchema)),
  scheduledDeprecationTime: Schema.optional(Schema.String),
  alternativeOption: Schema.optional(
    Schema.suspend(() => AlternativeOptionSchema),
  ),
});
const ImageStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Active",
  "ScheduledForDeprecation",
  "Deprecated",
]);
const AlternativeOptionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.suspend(() => AlternativeTypeSchema)),
  value: Schema.optional(Schema.String),
});
const AlternativeTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "None",
  "Offer",
  "Plan",
]);
const ExtendedLocationTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "EdgeZone",
]);
const IntervalInMinsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "ThreeMins",
  "FiveMins",
  "ThirtyMins",
  "SixtyMins",
]);
const LogAnalyticsOutputSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  output: Schema.optional(Schema.String),
});
const VirtualMachineExtensionImageSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const VirtualMachineExtensionImagePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operatingSystem: Schema.String,
    computeRole: Schema.String,
    handlerSchema: Schema.String,
    vmScaleSetEnabled: Schema.optional(Schema.Boolean),
    supportsMultipleExtensions: Schema.optional(Schema.Boolean),
  });
const RunCommandDocumentBaseSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  $schema: Schema.String,
  id: Schema.String,
  osType: Schema.suspend(() => Common_OperatingSystemTypesSchema),
  label: Schema.String,
  description: Schema.String,
});
const RunCommandParameterDefinitionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    type: Schema.String,
    defaultValue: Schema.optional(Schema.String),
    required: Schema.optional(Schema.Boolean),
  });
const UsageSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  unit: Schema.Literals(["Count"]),
  currentValue: Schema.Number,
  limit: Schema.Number,
  name: Schema.suspend(() => UsageNameSchema),
});
const UsageNameSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.String),
  localizedValue: Schema.optional(Schema.String),
});
const VirtualMachineScaleSetSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const VirtualMachineSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const VirtualMachineSizeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  numberOfCores: Schema.optional(Schema.Number),
  osDiskSizeInMB: Schema.optional(Schema.Number),
  resourceDiskSizeInMB: Schema.optional(Schema.Number),
  memoryInMB: Schema.optional(Schema.Number),
  maxDataDiskCount: Schema.optional(Schema.Number),
});
const ProximityPlacementGroupSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
const RestorePointCollectionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const SshPublicKeyResourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const AvailabilitySetPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    platformUpdateDomainCount: Schema.optional(Schema.Number),
    platformFaultDomainCount: Schema.optional(Schema.Number),
    virtualMachines: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
    proximityPlacementGroup: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
      }),
    ),
    statuses: Schema.optional(
      Schema.Array(Schema.suspend(() => InstanceViewStatusSchema)),
    ),
    scheduledEventsPolicy: Schema.optional(
      Schema.suspend(() => ScheduledEventsPolicySchema),
    ),
    virtualMachineScaleSetMigrationInfo: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetMigrationInfoSchema),
    ),
  });
const InstanceViewStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  code: Schema.optional(Schema.String),
  level: Schema.optional(Schema.suspend(() => StatusLevelTypesSchema)),
  displayStatus: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
  time: Schema.optional(Schema.String),
});
const StatusLevelTypesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Info",
  "Warning",
  "Error",
]);
const ScheduledEventsPolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userInitiatedRedeploy: Schema.optional(
    Schema.suspend(() => UserInitiatedRedeploySchema),
  ),
  userInitiatedReboot: Schema.optional(
    Schema.suspend(() => UserInitiatedRebootSchema),
  ),
  scheduledEventsAdditionalPublishingTargets: Schema.optional(
    Schema.suspend(() => ScheduledEventsAdditionalPublishingTargetsSchema),
  ),
  allInstancesDown: Schema.optional(
    Schema.suspend(() => AllInstancesDownSchema),
  ),
});
const UserInitiatedRedeploySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  automaticallyApprove: Schema.optional(Schema.Boolean),
});
const UserInitiatedRebootSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  automaticallyApprove: Schema.optional(Schema.Boolean),
});
const ScheduledEventsAdditionalPublishingTargetsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventGridAndResourceGraph: Schema.optional(
      Schema.suspend(() => EventGridAndResourceGraphSchema),
    ),
  });
const EventGridAndResourceGraphSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enable: Schema.optional(Schema.Boolean),
    scheduledEventsApiVersion: Schema.optional(Schema.String),
  });
const AllInstancesDownSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  automaticallyApprove: Schema.optional(Schema.Boolean),
});
const VirtualMachineScaleSetMigrationInfoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    defaultVirtualMachineScaleSetInfo: Schema.optional(
      Schema.suspend(() => DefaultVirtualMachineScaleSetInfoSchema),
    ),
    migrateToVirtualMachineScaleSet: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
      }),
    ),
  });
const DefaultVirtualMachineScaleSetInfoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    constrainedMaximumCapacity: Schema.optional(Schema.Boolean),
    defaultVirtualMachineScaleSet: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
      }),
    ),
  });
const SkuSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  tier: Schema.optional(Schema.String),
  capacity: Schema.optional(Schema.Number),
});
const CapacityReservationGroupPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    capacityReservations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
    virtualMachinesAssociated: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
    instanceView: Schema.optional(
      Schema.suspend(() => CapacityReservationGroupInstanceViewSchema),
    ),
    sharingProfile: Schema.optional(
      Schema.suspend(() => ResourceSharingProfileSchema),
    ),
    reservationType: Schema.optional(
      Schema.suspend(() => ReservationTypeSchema),
    ),
  });
const CapacityReservationGroupInstanceViewSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    capacityReservations: Schema.optional(
      Schema.Array(
        Schema.suspend(() => CapacityReservationInstanceViewWithNameSchema),
      ),
    ),
    sharedSubscriptionIds: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
const CapacityReservationInstanceViewWithNameSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    utilizationInfo: Schema.optional(
      Schema.suspend(() => CapacityReservationUtilizationSchema),
    ),
    statuses: Schema.optional(
      Schema.Array(Schema.suspend(() => InstanceViewStatusSchema)),
    ),
  });
const CapacityReservationUtilizationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currentCapacity: Schema.optional(Schema.Number),
    virtualMachinesAllocated: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
const ResourceSharingProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionIds: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
      }),
    ),
  ),
});
const ReservationTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Targeted",
  "Block",
]);
const CapacityReservationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const CapacityReservationPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reservationId: Schema.optional(Schema.String),
    platformFaultDomainCount: Schema.optional(Schema.Number),
    virtualMachinesAssociated: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
    provisioningTime: Schema.optional(Schema.String),
    provisioningState: Schema.optional(Schema.String),
    instanceView: Schema.optional(
      Schema.suspend(() => CapacityReservationInstanceViewSchema),
    ),
    timeCreated: Schema.optional(Schema.String),
    scheduleProfile: Schema.optional(
      Schema.suspend(() => ScheduleProfileSchema),
    ),
  });
const CapacityReservationInstanceViewSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    utilizationInfo: Schema.optional(
      Schema.suspend(() => CapacityReservationUtilizationSchema),
    ),
    statuses: Schema.optional(
      Schema.Array(Schema.suspend(() => InstanceViewStatusSchema)),
    ),
  });
const ScheduleProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  start: Schema.optional(Schema.String),
  end: Schema.optional(Schema.String),
});
const DedicatedHostGroupPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    platformFaultDomainCount: Schema.Number,
    hosts: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
    instanceView: Schema.optional(
      Schema.suspend(() => DedicatedHostGroupInstanceViewSchema),
    ),
    supportAutomaticPlacement: Schema.optional(Schema.Boolean),
    additionalCapabilities: Schema.optional(
      Schema.suspend(
        () => DedicatedHostGroupPropertiesAdditionalCapabilitiesSchema,
      ),
    ),
  });
const DedicatedHostGroupInstanceViewSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hosts: Schema.optional(
      Schema.Array(
        Schema.suspend(() => DedicatedHostInstanceViewWithNameSchema),
      ),
    ),
  });
const DedicatedHostInstanceViewWithNameSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assetId: Schema.optional(Schema.String),
    availableCapacity: Schema.optional(
      Schema.suspend(() => DedicatedHostAvailableCapacitySchema),
    ),
    statuses: Schema.optional(
      Schema.Array(Schema.suspend(() => InstanceViewStatusSchema)),
    ),
  });
const DedicatedHostAvailableCapacitySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allocatableVMs: Schema.optional(
      Schema.Array(Schema.suspend(() => DedicatedHostAllocatableVMSchema)),
    ),
  });
const DedicatedHostAllocatableVMSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vmSize: Schema.optional(Schema.String),
    count: Schema.optional(Schema.Number),
  });
const DedicatedHostGroupPropertiesAdditionalCapabilitiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ultraSSDEnabled: Schema.optional(Schema.Boolean),
  });
const DedicatedHostSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const DedicatedHostPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    platformFaultDomain: Schema.optional(Schema.Number),
    autoReplaceOnFailure: Schema.optional(Schema.Boolean),
    hostId: Schema.optional(Schema.String),
    virtualMachines: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
    licenseType: Schema.optional(
      Schema.suspend(() => DedicatedHostLicenseTypesSchema),
    ),
    provisioningTime: Schema.optional(Schema.String),
    provisioningState: Schema.optional(Schema.String),
    instanceView: Schema.optional(
      Schema.suspend(() => DedicatedHostInstanceViewSchema),
    ),
    timeCreated: Schema.optional(Schema.String),
  },
);
const DedicatedHostLicenseTypesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "None",
    "Windows_Server_Hybrid",
    "Windows_Server_Perpetual",
  ]);
const DedicatedHostInstanceViewSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assetId: Schema.optional(Schema.String),
    availableCapacity: Schema.optional(
      Schema.suspend(() => DedicatedHostAvailableCapacitySchema),
    ),
    statuses: Schema.optional(
      Schema.Array(Schema.suspend(() => InstanceViewStatusSchema)),
    ),
  });
const ImagePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sourceVirtualMachine: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
    }),
  ),
  storageProfile: Schema.optional(
    Schema.suspend(() => ImageStorageProfileSchema),
  ),
  provisioningState: Schema.optional(Schema.String),
  hyperVGeneration: Schema.optional(
    Schema.suspend(() => HyperVGenerationTypesSchema),
  ),
});
const ImageStorageProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  osDisk: Schema.optional(Schema.suspend(() => ImageOSDiskSchema)),
  dataDisks: Schema.optional(
    Schema.Array(Schema.suspend(() => ImageDataDiskSchema)),
  ),
  zoneResilient: Schema.optional(Schema.Boolean),
});
const ImageOSDiskSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  snapshot: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
    }),
  ),
  managedDisk: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
    }),
  ),
  blobUri: Schema.optional(Schema.String),
  caching: Schema.optional(Schema.suspend(() => CachingTypesSchema)),
  diskSizeGB: Schema.optional(Schema.Number),
  storageAccountType: Schema.optional(
    Schema.suspend(() => StorageAccountTypesSchema),
  ),
  diskEncryptionSet: Schema.optional(
    Schema.suspend(() => DiskEncryptionSetParametersSchema),
  ),
});
const CachingTypesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "None",
  "ReadOnly",
  "ReadWrite",
]);
const StorageAccountTypesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Standard_LRS",
  "Premium_LRS",
  "StandardSSD_LRS",
  "UltraSSD_LRS",
  "Premium_ZRS",
  "StandardSSD_ZRS",
  "PremiumV2_LRS",
]);
const DiskEncryptionSetParametersSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  });
const ImageDataDiskSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  snapshot: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
    }),
  ),
  managedDisk: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
    }),
  ),
  blobUri: Schema.optional(Schema.String),
  caching: Schema.optional(Schema.suspend(() => CachingTypesSchema)),
  diskSizeGB: Schema.optional(Schema.Number),
  storageAccountType: Schema.optional(
    Schema.suspend(() => StorageAccountTypesSchema),
  ),
  diskEncryptionSet: Schema.optional(
    Schema.suspend(() => DiskEncryptionSetParametersSchema),
  ),
});
const ProximityPlacementGroupPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    proximityPlacementGroupType: Schema.optional(
      Schema.suspend(() => ProximityPlacementGroupTypeSchema),
    ),
    virtualMachines: Schema.optional(
      Schema.Array(Schema.suspend(() => SubResourceWithColocationStatusSchema)),
    ),
    virtualMachineScaleSets: Schema.optional(
      Schema.Array(Schema.suspend(() => SubResourceWithColocationStatusSchema)),
    ),
    availabilitySets: Schema.optional(
      Schema.Array(Schema.suspend(() => SubResourceWithColocationStatusSchema)),
    ),
    colocationStatus: Schema.optional(
      Schema.suspend(() => InstanceViewStatusSchema),
    ),
    intent: Schema.optional(
      Schema.suspend(() => ProximityPlacementGroupPropertiesIntentSchema),
    ),
  });
const ProximityPlacementGroupTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Standard", "Ultra"]);
const SubResourceWithColocationStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  });
const ProximityPlacementGroupPropertiesIntentSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vmSizes: Schema.optional(Schema.Array(Schema.String)),
  });
const RestorePointCollectionPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(
      Schema.suspend(() => RestorePointCollectionSourcePropertiesSchema),
    ),
    provisioningState: Schema.optional(Schema.String),
    restorePointCollectionId: Schema.optional(Schema.String),
    restorePoints: Schema.optional(
      Schema.Array(Schema.suspend(() => RestorePointSchema)),
    ),
    instantAccess: Schema.optional(Schema.Boolean),
  });
const RestorePointCollectionSourcePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  });
const RestorePointSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const RestorePointPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  excludeDisks: Schema.optional(
    Schema.Array(Schema.suspend(() => ApiEntityReferenceSchema)),
  ),
  sourceMetadata: Schema.optional(
    Schema.suspend(() => RestorePointSourceMetadataSchema),
  ),
  provisioningState: Schema.optional(Schema.String),
  consistencyMode: Schema.optional(
    Schema.suspend(() => ConsistencyModeTypesSchema),
  ),
  timeCreated: Schema.optional(Schema.String),
  sourceRestorePoint: Schema.optional(
    Schema.suspend(() => ApiEntityReferenceSchema),
  ),
  instanceView: Schema.optional(
    Schema.suspend(() => RestorePointInstanceViewSchema),
  ),
  instantAccessDurationMinutes: Schema.optional(Schema.Number),
});
const ApiEntityReferenceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
});
const RestorePointSourceMetadataSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hardwareProfile: Schema.optional(
      Schema.suspend(() => HardwareProfileSchema),
    ),
    storageProfile: Schema.optional(
      Schema.suspend(() => RestorePointSourceVMStorageProfileSchema),
    ),
    osProfile: Schema.optional(Schema.suspend(() => OSProfileSchema)),
    diagnosticsProfile: Schema.optional(
      Schema.suspend(() => DiagnosticsProfileSchema),
    ),
    licenseType: Schema.optional(Schema.String),
    vmId: Schema.optional(Schema.String),
    securityProfile: Schema.optional(
      Schema.suspend(() => SecurityProfileSchema),
    ),
    location: Schema.optional(Schema.String),
    userData: Schema.optional(Schema.String),
    hyperVGeneration: Schema.optional(
      Schema.suspend(() => HyperVGenerationTypesSchema),
    ),
  });
const HardwareProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vmSize: Schema.optional(Schema.suspend(() => VirtualMachineSizeTypesSchema)),
  vmSizeProperties: Schema.optional(
    Schema.suspend(() => VMSizePropertiesSchema),
  ),
});
const VirtualMachineSizeTypesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
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
    "Standard_B1s",
    "Standard_B1ms",
    "Standard_B2s",
    "Standard_B2ms",
    "Standard_B4ms",
    "Standard_B8ms",
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
    "Standard_D2_v3",
    "Standard_D4_v3",
    "Standard_D8_v3",
    "Standard_D16_v3",
    "Standard_D32_v3",
    "Standard_D64_v3",
    "Standard_D2s_v3",
    "Standard_D4s_v3",
    "Standard_D8s_v3",
    "Standard_D16s_v3",
    "Standard_D32s_v3",
    "Standard_D64s_v3",
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
    "Standard_DS13-4_v2",
    "Standard_DS13-2_v2",
    "Standard_DS14-8_v2",
    "Standard_DS14-4_v2",
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
    "Standard_E32-16_v3",
    "Standard_E32-8s_v3",
    "Standard_E64-32s_v3",
    "Standard_E64-16s_v3",
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
    "Standard_F2s_v2",
    "Standard_F4s_v2",
    "Standard_F8s_v2",
    "Standard_F16s_v2",
    "Standard_F32s_v2",
    "Standard_F64s_v2",
    "Standard_F72s_v2",
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
    "Standard_GS4-8",
    "Standard_GS4-4",
    "Standard_GS5-16",
    "Standard_GS5-8",
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
    "Standard_M64s",
    "Standard_M64ms",
    "Standard_M128s",
    "Standard_M128ms",
    "Standard_M64-32ms",
    "Standard_M64-16ms",
    "Standard_M128-64ms",
    "Standard_M128-32ms",
    "Standard_NC6",
    "Standard_NC12",
    "Standard_NC24",
    "Standard_NC24r",
    "Standard_NC6s_v2",
    "Standard_NC12s_v2",
    "Standard_NC24s_v2",
    "Standard_NC24rs_v2",
    "Standard_NC6s_v3",
    "Standard_NC12s_v3",
    "Standard_NC24s_v3",
    "Standard_NC24rs_v3",
    "Standard_ND6s",
    "Standard_ND12s",
    "Standard_ND24s",
    "Standard_ND24rs",
    "Standard_NV6",
    "Standard_NV12",
    "Standard_NV24",
  ]);
const VMSizePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vCPUsAvailable: Schema.optional(Schema.Number),
  vCPUsPerCore: Schema.optional(Schema.Number),
});
const RestorePointSourceVMStorageProfileSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    osDisk: Schema.optional(
      Schema.suspend(() => RestorePointSourceVMOSDiskSchema),
    ),
    dataDisks: Schema.optional(
      Schema.Array(Schema.suspend(() => RestorePointSourceVMDataDiskSchema)),
    ),
    diskControllerType: Schema.optional(
      Schema.suspend(() => DiskControllerTypesSchema),
    ),
  });
const RestorePointSourceVMOSDiskSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    osType: Schema.optional(Schema.suspend(() => OperatingSystemTypeSchema)),
    encryptionSettings: Schema.optional(
      Schema.suspend(() => DiskEncryptionSettingsSchema),
    ),
    name: Schema.optional(Schema.String),
    caching: Schema.optional(Schema.suspend(() => CachingTypesSchema)),
    diskSizeGB: Schema.optional(Schema.Number),
    managedDisk: Schema.optional(
      Schema.suspend(() => ManagedDiskParametersSchema),
    ),
    diskRestorePoint: Schema.optional(
      Schema.suspend(() => DiskRestorePointAttributesSchema),
    ),
    writeAcceleratorEnabled: Schema.optional(Schema.Boolean),
  });
const OperatingSystemTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Windows",
  "Linux",
]);
const DiskEncryptionSettingsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  diskEncryptionKey: Schema.optional(
    Schema.suspend(() => KeyVaultSecretReferenceSchema),
  ),
  keyEncryptionKey: Schema.optional(
    Schema.suspend(() => KeyVaultKeyReferenceSchema),
  ),
  enabled: Schema.optional(Schema.Boolean),
});
const KeyVaultSecretReferenceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    secretUrl: Schema.String,
    sourceVault: Schema.Struct({
      id: Schema.optional(Schema.String),
    }),
  },
);
const KeyVaultKeyReferenceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  keyUrl: Schema.String,
  sourceVault: Schema.Struct({
    id: Schema.optional(Schema.String),
  }),
});
const ManagedDiskParametersSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
});
const DiskRestorePointAttributesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  });
const RestorePointSourceVMDataDiskSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lun: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    caching: Schema.optional(Schema.suspend(() => CachingTypesSchema)),
    diskSizeGB: Schema.optional(Schema.Number),
    managedDisk: Schema.optional(
      Schema.suspend(() => ManagedDiskParametersSchema),
    ),
    diskRestorePoint: Schema.optional(
      Schema.suspend(() => DiskRestorePointAttributesSchema),
    ),
    writeAcceleratorEnabled: Schema.optional(Schema.Boolean),
  });
const DiskControllerTypesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "SCSI",
  "NVMe",
]);
const OSProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  computerName: Schema.optional(Schema.String),
  adminUsername: Schema.optional(Schema.String),
  adminPassword: Schema.optional(SensitiveOutputString),
  customData: Schema.optional(Schema.String),
  windowsConfiguration: Schema.optional(
    Schema.suspend(() => WindowsConfigurationSchema),
  ),
  linuxConfiguration: Schema.optional(
    Schema.suspend(() => LinuxConfigurationSchema),
  ),
  secrets: Schema.optional(
    Schema.Array(Schema.suspend(() => VaultSecretGroupSchema)),
  ),
  allowExtensionOperations: Schema.optional(Schema.Boolean),
  requireGuestProvisionSignal: Schema.optional(Schema.Boolean),
});
const WindowsConfigurationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provisionVMAgent: Schema.optional(Schema.Boolean),
  enableAutomaticUpdates: Schema.optional(Schema.Boolean),
  timeZone: Schema.optional(Schema.String),
  additionalUnattendContent: Schema.optional(
    Schema.Array(Schema.suspend(() => AdditionalUnattendContentSchema)),
  ),
  patchSettings: Schema.optional(Schema.suspend(() => PatchSettingsSchema)),
  winRM: Schema.optional(Schema.suspend(() => WinRMConfigurationSchema)),
  enableVMAgentPlatformUpdates: Schema.optional(Schema.Boolean),
});
const AdditionalUnattendContentSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    passName: Schema.optional(Schema.suspend(() => PassNamesSchema)),
    componentName: Schema.optional(Schema.suspend(() => ComponentNamesSchema)),
    settingName: Schema.optional(Schema.suspend(() => SettingNamesSchema)),
    content: Schema.optional(Schema.String),
  });
const PassNamesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "OobeSystem",
]);
const ComponentNamesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Microsoft-Windows-Shell-Setup",
]);
const SettingNamesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "AutoLogon",
  "FirstLogonCommands",
]);
const PatchSettingsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  patchMode: Schema.optional(
    Schema.suspend(() => WindowsVMGuestPatchModeSchema),
  ),
  enableHotpatching: Schema.optional(Schema.Boolean),
  assessmentMode: Schema.optional(
    Schema.suspend(() => WindowsPatchAssessmentModeSchema),
  ),
  automaticByPlatformSettings: Schema.optional(
    Schema.suspend(() => WindowsVMGuestPatchAutomaticByPlatformSettingsSchema),
  ),
});
const WindowsVMGuestPatchModeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Manual",
    "AutomaticByOS",
    "AutomaticByPlatform",
  ]);
const WindowsPatchAssessmentModeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "ImageDefault",
    "AutomaticByPlatform",
  ]);
const WindowsVMGuestPatchAutomaticByPlatformSettingsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rebootSetting: Schema.optional(
      Schema.suspend(
        () => WindowsVMGuestPatchAutomaticByPlatformRebootSettingSchema,
      ),
    ),
    bypassPlatformSafetyChecksOnUserSchedule: Schema.optional(Schema.Boolean),
  });
const WindowsVMGuestPatchAutomaticByPlatformRebootSettingSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Unknown",
    "IfRequired",
    "Never",
    "Always",
  ]);
const WinRMConfigurationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  listeners: Schema.optional(
    Schema.Array(Schema.suspend(() => WinRMListenerSchema)),
  ),
});
const WinRMListenerSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  protocol: Schema.optional(Schema.suspend(() => ProtocolTypesSchema)),
  certificateUrl: Schema.optional(Schema.String),
});
const ProtocolTypesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Http",
  "Https",
]);
const LinuxConfigurationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  disablePasswordAuthentication: Schema.optional(Schema.Boolean),
  ssh: Schema.optional(Schema.suspend(() => SshConfigurationSchema)),
  provisionVMAgent: Schema.optional(Schema.Boolean),
  patchSettings: Schema.optional(
    Schema.suspend(() => LinuxPatchSettingsSchema),
  ),
  enableVMAgentPlatformUpdates: Schema.optional(Schema.Boolean),
});
const SshConfigurationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  publicKeys: Schema.optional(
    Schema.Array(Schema.suspend(() => SshPublicKeySchema)),
  ),
});
const SshPublicKeySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  path: Schema.optional(Schema.String),
  keyData: Schema.optional(Schema.String),
});
const LinuxPatchSettingsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  patchMode: Schema.optional(Schema.suspend(() => LinuxVMGuestPatchModeSchema)),
  assessmentMode: Schema.optional(
    Schema.suspend(() => LinuxPatchAssessmentModeSchema),
  ),
  automaticByPlatformSettings: Schema.optional(
    Schema.suspend(() => LinuxVMGuestPatchAutomaticByPlatformSettingsSchema),
  ),
});
const LinuxVMGuestPatchModeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(
  ["ImageDefault", "AutomaticByPlatform"],
);
const LinuxPatchAssessmentModeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "ImageDefault",
    "AutomaticByPlatform",
  ]);
const LinuxVMGuestPatchAutomaticByPlatformSettingsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rebootSetting: Schema.optional(
      Schema.suspend(
        () => LinuxVMGuestPatchAutomaticByPlatformRebootSettingSchema,
      ),
    ),
    bypassPlatformSafetyChecksOnUserSchedule: Schema.optional(Schema.Boolean),
  });
const LinuxVMGuestPatchAutomaticByPlatformRebootSettingSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Unknown",
    "IfRequired",
    "Never",
    "Always",
  ]);
const VaultSecretGroupSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sourceVault: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
    }),
  ),
  vaultCertificates: Schema.optional(
    Schema.Array(Schema.suspend(() => VaultCertificateSchema)),
  ),
});
const VaultCertificateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  certificateUrl: Schema.optional(Schema.String),
  certificateStore: Schema.optional(Schema.String),
});
const DiagnosticsProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bootDiagnostics: Schema.optional(Schema.suspend(() => BootDiagnosticsSchema)),
});
const BootDiagnosticsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
  storageUri: Schema.optional(Schema.String),
});
const SecurityProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uefiSettings: Schema.optional(Schema.suspend(() => UefiSettingsSchema)),
  encryptionAtHost: Schema.optional(Schema.Boolean),
  securityType: Schema.optional(Schema.suspend(() => SecurityTypesSchema)),
  encryptionIdentity: Schema.optional(
    Schema.suspend(() => EncryptionIdentitySchema),
  ),
  proxyAgentSettings: Schema.optional(
    Schema.suspend(() => ProxyAgentSettingsSchema),
  ),
});
const UefiSettingsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  secureBootEnabled: Schema.optional(Schema.Boolean),
  vTpmEnabled: Schema.optional(Schema.Boolean),
});
const SecurityTypesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "TrustedLaunch",
  "ConfidentialVM",
]);
const EncryptionIdentitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userAssignedIdentityResourceId: Schema.optional(Schema.String),
});
const ProxyAgentSettingsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
  mode: Schema.optional(Schema.suspend(() => ModeSchema)),
  keyIncarnationId: Schema.optional(Schema.Number),
  wireServer: Schema.optional(Schema.suspend(() => HostEndpointSettingsSchema)),
  imds: Schema.optional(Schema.suspend(() => HostEndpointSettingsSchema)),
  addProxyAgentExtension: Schema.optional(Schema.Boolean),
});
const ModeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Audit",
  "Enforce",
]);
const HostEndpointSettingsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  mode: Schema.optional(Schema.suspend(() => ModesSchema)),
  inVMAccessControlProfileReferenceId: Schema.optional(Schema.String),
});
const ModesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Audit",
  "Enforce",
  "Disabled",
]);
const ConsistencyModeTypesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "CrashConsistent",
  "FileSystemConsistent",
  "ApplicationConsistent",
]);
const RestorePointInstanceViewSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    diskRestorePoints: Schema.optional(
      Schema.Array(Schema.suspend(() => DiskRestorePointInstanceViewSchema)),
    ),
    statuses: Schema.optional(
      Schema.Array(Schema.suspend(() => InstanceViewStatusSchema)),
    ),
  });
const DiskRestorePointInstanceViewSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    snapshotAccessState: Schema.optional(
      Schema.suspend(() => Common_SnapshotAccessStateSchema),
    ),
    replicationStatus: Schema.optional(
      Schema.suspend(() => DiskRestorePointReplicationStatusSchema),
    ),
  });
const Common_SnapshotAccessStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Unknown",
    "Pending",
    "Available",
    "InstantAccess",
    "AvailableWithInstantAccess",
  ]);
const DiskRestorePointReplicationStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.suspend(() => InstanceViewStatusSchema)),
    completionPercent: Schema.optional(Schema.Number),
  });
const SshPublicKeyResourcePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    publicKey: Schema.optional(Schema.String),
  });
const SshEncryptionTypesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "RSA",
  "Ed25519",
]);
const PlanSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  publisher: Schema.optional(Schema.String),
  product: Schema.optional(Schema.String),
  promotionCode: Schema.optional(Schema.String),
});
const VirtualMachineScaleSetPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    upgradePolicy: Schema.optional(Schema.suspend(() => UpgradePolicySchema)),
    scheduledEventsPolicy: Schema.optional(
      Schema.suspend(() => ScheduledEventsPolicySchema),
    ),
    automaticRepairsPolicy: Schema.optional(
      Schema.suspend(() => AutomaticRepairsPolicySchema),
    ),
    virtualMachineProfile: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetVMProfileSchema),
    ),
    provisioningState: Schema.optional(Schema.String),
    overprovision: Schema.optional(Schema.Boolean),
    doNotRunExtensionsOnOverprovisionedVMs: Schema.optional(Schema.Boolean),
    uniqueId: Schema.optional(Schema.String),
    singlePlacementGroup: Schema.optional(Schema.Boolean),
    zoneBalance: Schema.optional(Schema.Boolean),
    platformFaultDomainCount: Schema.optional(Schema.Number),
    proximityPlacementGroup: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
      }),
    ),
    hostGroup: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
      }),
    ),
    additionalCapabilities: Schema.optional(
      Schema.suspend(() => AdditionalCapabilitiesSchema),
    ),
    scaleInPolicy: Schema.optional(Schema.suspend(() => ScaleInPolicySchema)),
    orchestrationMode: Schema.optional(
      Schema.suspend(() => OrchestrationModeSchema),
    ),
    spotRestorePolicy: Schema.optional(
      Schema.suspend(() => SpotRestorePolicySchema),
    ),
    priorityMixPolicy: Schema.optional(
      Schema.suspend(() => PriorityMixPolicySchema),
    ),
    timeCreated: Schema.optional(Schema.String),
    constrainedMaximumCapacity: Schema.optional(Schema.Boolean),
    resiliencyPolicy: Schema.optional(
      Schema.suspend(() => ResiliencyPolicySchema),
    ),
    zonalPlatformFaultDomainAlignMode: Schema.optional(
      Schema.suspend(() => ZonalPlatformFaultDomainAlignModeSchema),
    ),
    skuProfile: Schema.optional(Schema.suspend(() => SkuProfileSchema)),
    highSpeedInterconnectPlacement: Schema.optional(
      Schema.suspend(() => HighSpeedInterconnectPlacementSchema),
    ),
  });
const UpgradePolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  mode: Schema.optional(Schema.suspend(() => UpgradeModeSchema)),
  rollingUpgradePolicy: Schema.optional(
    Schema.suspend(() => RollingUpgradePolicySchema),
  ),
  automaticOSUpgradePolicy: Schema.optional(
    Schema.suspend(() => AutomaticOSUpgradePolicySchema),
  ),
});
const UpgradeModeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Automatic",
  "Manual",
  "Rolling",
]);
const RollingUpgradePolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  maxBatchInstancePercent: Schema.optional(Schema.Number),
  maxUnhealthyInstancePercent: Schema.optional(Schema.Number),
  maxUnhealthyUpgradedInstancePercent: Schema.optional(Schema.Number),
  pauseTimeBetweenBatches: Schema.optional(Schema.String),
  enableCrossZoneUpgrade: Schema.optional(Schema.Boolean),
  prioritizeUnhealthyInstances: Schema.optional(Schema.Boolean),
  rollbackFailedInstancesOnPolicyBreach: Schema.optional(Schema.Boolean),
  maxSurge: Schema.optional(Schema.Boolean),
});
const AutomaticOSUpgradePolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableAutomaticOSUpgrade: Schema.optional(Schema.Boolean),
    disableAutomaticRollback: Schema.optional(Schema.Boolean),
    useRollingUpgradePolicy: Schema.optional(Schema.Boolean),
    osRollingUpgradeDeferral: Schema.optional(Schema.Boolean),
  });
const AutomaticRepairsPolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
  gracePeriod: Schema.optional(Schema.String),
  repairAction: Schema.optional(Schema.suspend(() => RepairActionSchema)),
});
const RepairActionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Replace",
  "Restart",
  "Reimage",
]);
const VirtualMachineScaleSetVMProfileSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    osProfile: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetOSProfileSchema),
    ),
    storageProfile: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetStorageProfileSchema),
    ),
    networkProfile: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetNetworkProfileSchema),
    ),
    securityProfile: Schema.optional(
      Schema.suspend(() => SecurityProfileSchema),
    ),
    diagnosticsProfile: Schema.optional(
      Schema.suspend(() => DiagnosticsProfileSchema),
    ),
    extensionProfile: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetExtensionProfileSchema),
    ),
    licenseType: Schema.optional(Schema.String),
    priority: Schema.optional(
      Schema.suspend(() => VirtualMachinePriorityTypesSchema),
    ),
    evictionPolicy: Schema.optional(
      Schema.suspend(() => VirtualMachineEvictionPolicyTypesSchema),
    ),
    billingProfile: Schema.optional(Schema.suspend(() => BillingProfileSchema)),
    scheduledEventsProfile: Schema.optional(
      Schema.suspend(() => ScheduledEventsProfileSchema),
    ),
    userData: Schema.optional(Schema.String),
    capacityReservation: Schema.optional(
      Schema.suspend(() => CapacityReservationProfileSchema),
    ),
    applicationProfile: Schema.optional(
      Schema.suspend(() => ApplicationProfileSchema),
    ),
    hardwareProfile: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetHardwareProfileSchema),
    ),
    serviceArtifactReference: Schema.optional(
      Schema.suspend(() => ServiceArtifactReferenceSchema),
    ),
    securityPostureReference: Schema.optional(
      Schema.suspend(() => SecurityPostureReferenceSchema),
    ),
    timeCreated: Schema.optional(Schema.String),
  });
const VirtualMachineScaleSetOSProfileSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    computerNamePrefix: Schema.optional(Schema.String),
    adminUsername: Schema.optional(Schema.String),
    adminPassword: Schema.optional(SensitiveOutputString),
    customData: Schema.optional(Schema.String),
    windowsConfiguration: Schema.optional(
      Schema.suspend(() => WindowsConfigurationSchema),
    ),
    linuxConfiguration: Schema.optional(
      Schema.suspend(() => LinuxConfigurationSchema),
    ),
    secrets: Schema.optional(
      Schema.Array(Schema.suspend(() => VaultSecretGroupSchema)),
    ),
    allowExtensionOperations: Schema.optional(Schema.Boolean),
    requireGuestProvisionSignal: Schema.optional(Schema.Boolean),
  });
const VirtualMachineScaleSetStorageProfileSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageReference: Schema.optional(Schema.suspend(() => ImageReferenceSchema)),
    osDisk: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetOSDiskSchema),
    ),
    dataDisks: Schema.optional(
      Schema.Array(Schema.suspend(() => VirtualMachineScaleSetDataDiskSchema)),
    ),
    diskControllerType: Schema.optional(
      Schema.suspend(() => DiskControllerTypesSchema),
    ),
  });
const ImageReferenceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
});
const VirtualMachineScaleSetOSDiskSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    caching: Schema.optional(Schema.suspend(() => CachingTypesSchema)),
    writeAcceleratorEnabled: Schema.optional(Schema.Boolean),
    createOption: Schema.suspend(() => DiskCreateOptionTypesSchema),
    diffDiskSettings: Schema.optional(
      Schema.suspend(() => DiffDiskSettingsSchema),
    ),
    diskSizeGB: Schema.optional(Schema.Number),
    osType: Schema.optional(
      Schema.suspend(() => Common_OperatingSystemTypesSchema),
    ),
    image: Schema.optional(Schema.suspend(() => VirtualHardDiskSchema)),
    vhdContainers: Schema.optional(Schema.Array(Schema.String)),
    managedDisk: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetManagedDiskParametersSchema),
    ),
    deleteOption: Schema.optional(
      Schema.suspend(() => DiskDeleteOptionTypesSchema),
    ),
  });
const DiskCreateOptionTypesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(
  ["FromImage", "Empty", "Attach", "Copy", "Restore"],
);
const DiffDiskSettingsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  option: Schema.optional(Schema.suspend(() => DiffDiskOptionsSchema)),
  placement: Schema.optional(Schema.suspend(() => DiffDiskPlacementSchema)),
});
const DiffDiskOptionsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Local",
]);
const DiffDiskPlacementSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "CacheDisk",
  "ResourceDisk",
  "NvmeDisk",
]);
const VirtualHardDiskSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uri: Schema.optional(Schema.String),
});
const VirtualMachineScaleSetManagedDiskParametersSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storageAccountType: Schema.optional(
      Schema.suspend(() => StorageAccountTypesSchema),
    ),
    diskEncryptionSet: Schema.optional(
      Schema.suspend(() => DiskEncryptionSetParametersSchema),
    ),
    securityProfile: Schema.optional(
      Schema.suspend(() => VMDiskSecurityProfileSchema),
    ),
  });
const VMDiskSecurityProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  securityEncryptionType: Schema.optional(
    Schema.suspend(() => SecurityEncryptionTypesSchema),
  ),
  diskEncryptionSet: Schema.optional(
    Schema.suspend(() => DiskEncryptionSetParametersSchema),
  ),
});
const SecurityEncryptionTypesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "VMGuestStateOnly",
    "DiskWithVMGuestState",
    "NonPersistedTPM",
  ]);
const DiskDeleteOptionTypesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(
  ["Delete", "Detach"],
);
const VirtualMachineScaleSetDataDiskSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    lun: Schema.Number,
    caching: Schema.optional(Schema.suspend(() => CachingTypesSchema)),
    writeAcceleratorEnabled: Schema.optional(Schema.Boolean),
    createOption: Schema.suspend(() => DiskCreateOptionTypesSchema),
    diskSizeGB: Schema.optional(Schema.Number),
    managedDisk: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetManagedDiskParametersSchema),
    ),
    diskIOPSReadWrite: Schema.optional(Schema.Number),
    diskMBpsReadWrite: Schema.optional(Schema.Number),
    deleteOption: Schema.optional(
      Schema.suspend(() => DiskDeleteOptionTypesSchema),
    ),
  });
const VirtualMachineScaleSetNetworkProfileSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    healthProbe: Schema.optional(
      Schema.suspend(() => ApiEntityReferenceSchema),
    ),
    networkInterfaceConfigurations: Schema.optional(
      Schema.Array(
        Schema.suspend(() => VirtualMachineScaleSetNetworkConfigurationSchema),
      ),
    ),
    networkApiVersion: Schema.optional(
      Schema.suspend(() => NetworkApiVersionSchema),
    ),
  });
const VirtualMachineScaleSetNetworkConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    properties: Schema.optional(
      Schema.suspend(
        () => VirtualMachineScaleSetNetworkConfigurationPropertiesSchema,
      ),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
const VirtualMachineScaleSetNetworkConfigurationPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primary: Schema.optional(Schema.Boolean),
    enableAcceleratedNetworking: Schema.optional(Schema.Boolean),
    disableTcpStateTracking: Schema.optional(Schema.Boolean),
    enableFpga: Schema.optional(Schema.Boolean),
    networkSecurityGroup: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
      }),
    ),
    dnsSettings: Schema.optional(
      Schema.suspend(
        () => VirtualMachineScaleSetNetworkConfigurationDnsSettingsSchema,
      ),
    ),
    ipConfigurations: Schema.Array(
      Schema.suspend(() => VirtualMachineScaleSetIPConfigurationSchema),
    ),
    enableIPForwarding: Schema.optional(Schema.Boolean),
    deleteOption: Schema.optional(Schema.suspend(() => DeleteOptionsSchema)),
    auxiliaryMode: Schema.optional(
      Schema.suspend(() => NetworkInterfaceAuxiliaryModeSchema),
    ),
    auxiliarySku: Schema.optional(
      Schema.suspend(() => NetworkInterfaceAuxiliarySkuSchema),
    ),
  });
const VirtualMachineScaleSetNetworkConfigurationDnsSettingsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dnsServers: Schema.optional(Schema.Array(Schema.String)),
  });
const VirtualMachineScaleSetIPConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    properties: Schema.optional(
      Schema.suspend(
        () => VirtualMachineScaleSetIPConfigurationPropertiesSchema,
      ),
    ),
  });
const VirtualMachineScaleSetIPConfigurationPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subnet: Schema.optional(Schema.suspend(() => ApiEntityReferenceSchema)),
    primary: Schema.optional(Schema.Boolean),
    publicIPAddressConfiguration: Schema.optional(
      Schema.suspend(
        () => VirtualMachineScaleSetPublicIPAddressConfigurationSchema,
      ),
    ),
    privateIPAddressVersion: Schema.optional(
      Schema.suspend(() => IPVersionSchema),
    ),
    applicationGatewayBackendAddressPools: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
    applicationSecurityGroups: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
    loadBalancerBackendAddressPools: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
    loadBalancerInboundNatPools: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
const VirtualMachineScaleSetPublicIPAddressConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    properties: Schema.optional(
      Schema.suspend(
        () =>
          VirtualMachineScaleSetPublicIPAddressConfigurationPropertiesSchema,
      ),
    ),
    sku: Schema.optional(Schema.suspend(() => PublicIPAddressSkuSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
const VirtualMachineScaleSetPublicIPAddressConfigurationPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    idleTimeoutInMinutes: Schema.optional(Schema.Number),
    dnsSettings: Schema.optional(
      Schema.suspend(
        () =>
          VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettingsSchema,
      ),
    ),
    ipTags: Schema.optional(
      Schema.Array(Schema.suspend(() => VirtualMachineScaleSetIpTagSchema)),
    ),
    publicIPPrefix: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
      }),
    ),
    publicIPAddressVersion: Schema.optional(
      Schema.suspend(() => IPVersionSchema),
    ),
    deleteOption: Schema.optional(Schema.suspend(() => DeleteOptionsSchema)),
  });
const VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettingsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domainNameLabel: Schema.String,
    domainNameLabelScope: Schema.optional(
      Schema.suspend(() => DomainNameLabelScopeTypesSchema),
    ),
  });
const DomainNameLabelScopeTypesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "TenantReuse",
    "SubscriptionReuse",
    "ResourceGroupReuse",
    "NoReuse",
  ]);
const VirtualMachineScaleSetIpTagSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ipTagType: Schema.optional(Schema.String),
    tag: Schema.optional(Schema.String),
  });
const IPVersionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "IPv4",
  "IPv6",
]);
const DeleteOptionsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Delete",
  "Detach",
]);
const PublicIPAddressSkuSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.suspend(() => PublicIPAddressSkuNameSchema)),
  tier: Schema.optional(Schema.suspend(() => PublicIPAddressSkuTierSchema)),
});
const PublicIPAddressSkuNameSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Basic", "Standard"]);
const PublicIPAddressSkuTierSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Regional", "Global"]);
const NetworkInterfaceAuxiliaryModeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "None",
    "AcceleratedConnections",
    "Floating",
  ]);
const NetworkInterfaceAuxiliarySkuSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["None", "A1", "A2", "A4", "A8"]);
const NetworkApiVersionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "2020-11-01",
  "2022-11-01",
]);
const VirtualMachineScaleSetExtensionProfileSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    extensions: Schema.optional(
      Schema.Array(Schema.suspend(() => VirtualMachineScaleSetExtensionSchema)),
    ),
    extensionsTimeBudget: Schema.optional(Schema.String),
  });
const VirtualMachineScaleSetExtensionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  });
const VirtualMachinePriorityTypesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Regular", "Low", "Spot"]);
const VirtualMachineEvictionPolicyTypesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Deallocate", "Delete"]);
const BillingProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  maxPrice: Schema.optional(Schema.Number),
});
const ScheduledEventsProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  terminateNotificationProfile: Schema.optional(
    Schema.suspend(() => TerminateNotificationProfileSchema),
  ),
  osImageNotificationProfile: Schema.optional(
    Schema.suspend(() => OSImageNotificationProfileSchema),
  ),
});
const TerminateNotificationProfileSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    notBeforeTimeout: Schema.optional(Schema.String),
    enable: Schema.optional(Schema.Boolean),
  });
const OSImageNotificationProfileSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    notBeforeTimeout: Schema.optional(Schema.String),
    enable: Schema.optional(Schema.Boolean),
  });
const CapacityReservationProfileSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    capacityReservationGroup: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
      }),
    ),
  });
const ApplicationProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  galleryApplications: Schema.optional(
    Schema.Array(Schema.suspend(() => VMGalleryApplicationSchema)),
  ),
});
const VMGalleryApplicationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tags: Schema.optional(Schema.String),
  order: Schema.optional(Schema.Number),
  packageReferenceId: Schema.String,
  configurationReference: Schema.optional(Schema.String),
  treatFailureAsDeploymentFailure: Schema.optional(Schema.Boolean),
  enableAutomaticUpgrade: Schema.optional(Schema.Boolean),
});
const VirtualMachineScaleSetHardwareProfileSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vmSizeProperties: Schema.optional(
      Schema.suspend(() => VMSizePropertiesSchema),
    ),
  });
const ServiceArtifactReferenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  });
const SecurityPostureReferenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    excludeExtensions: Schema.optional(Schema.Array(Schema.String)),
    isOverridable: Schema.optional(Schema.Boolean),
  });
const AdditionalCapabilitiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ultraSSDEnabled: Schema.optional(Schema.Boolean),
  hibernationEnabled: Schema.optional(Schema.Boolean),
  enableFips1403Encryption: Schema.optional(Schema.Boolean),
});
const ScaleInPolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rules: Schema.optional(
    Schema.Array(
      Schema.suspend(() => VirtualMachineScaleSetScaleInRulesSchema),
    ),
  ),
  forceDeletion: Schema.optional(Schema.Boolean),
  prioritizeUnhealthyVMs: Schema.optional(Schema.Boolean),
});
const VirtualMachineScaleSetScaleInRulesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Default",
    "OldestVM",
    "NewestVM",
  ]);
const OrchestrationModeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Uniform",
  "Flexible",
]);
const SpotRestorePolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
  restoreTimeout: Schema.optional(Schema.String),
});
const PriorityMixPolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  baseRegularPriorityCount: Schema.optional(Schema.Number),
  regularPriorityPercentageAboveBase: Schema.optional(Schema.Number),
});
const ResiliencyPolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resilientVMCreationPolicy: Schema.optional(
    Schema.suspend(() => ResilientVMCreationPolicySchema),
  ),
  resilientVMDeletionPolicy: Schema.optional(
    Schema.suspend(() => ResilientVMDeletionPolicySchema),
  ),
  automaticZoneRebalancingPolicy: Schema.optional(
    Schema.suspend(() => AutomaticZoneRebalancingPolicySchema),
  ),
  zoneAllocationPolicy: Schema.optional(
    Schema.suspend(() => ZoneAllocationPolicySchema),
  ),
});
const ResilientVMCreationPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  });
const ResilientVMDeletionPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  });
const AutomaticZoneRebalancingPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    rebalanceStrategy: Schema.optional(
      Schema.suspend(() => RebalanceStrategySchema),
    ),
    rebalanceBehavior: Schema.optional(
      Schema.suspend(() => RebalanceBehaviorSchema),
    ),
  });
const RebalanceStrategySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Recreate",
]);
const RebalanceBehaviorSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "CreateBeforeDelete",
]);
const ZoneAllocationPolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  maxZoneCount: Schema.optional(Schema.Number),
  maxInstancePercentPerZonePolicy: Schema.optional(
    Schema.suspend(() => MaxInstancePercentPerZonePolicySchema),
  ),
});
const MaxInstancePercentPerZonePolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    value: Schema.optional(Schema.Number),
  });
const ZonalPlatformFaultDomainAlignModeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Aligned", "Unaligned"]);
const SkuProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vmSizes: Schema.optional(
    Schema.Array(Schema.suspend(() => SkuProfileVMSizeSchema)),
  ),
  allocationStrategy: Schema.optional(
    Schema.suspend(() => AllocationStrategySchema),
  ),
});
const SkuProfileVMSizeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  rank: Schema.optional(Schema.Number),
});
const AllocationStrategySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "LowestPrice",
  "CapacityOptimized",
  "Prioritized",
]);
const HighSpeedInterconnectPlacementSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["None", "Trunk"]);
const VirtualMachineScaleSetIdentitySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    principalId: Schema.optional(Schema.String),
    tenantId: Schema.optional(Schema.String),
    type: Schema.optional(
      Schema.suspend(() => Common_ResourceIdentityTypeSchema),
    ),
    userAssignedIdentities: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => Common_UserAssignedIdentitiesValueSchema),
      ),
    ),
  });
const Common_ResourceIdentityTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "SystemAssigned",
    "UserAssigned",
    "SystemAssigned, UserAssigned",
    "None",
  ]);
const Common_UserAssignedIdentitiesValueSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    principalId: Schema.optional(Schema.String),
    clientId: Schema.optional(Schema.String),
  });
const PlacementSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  zonePlacementPolicy: Schema.optional(
    Schema.suspend(() => ZonePlacementPolicyTypeSchema),
  ),
  includeZones: Schema.optional(Schema.Array(Schema.String)),
  excludeZones: Schema.optional(Schema.Array(Schema.String)),
});
const ZonePlacementPolicyTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Any", "Auto"]);
const VirtualMachineScaleSetUpdatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    upgradePolicy: Schema.optional(Schema.suspend(() => UpgradePolicySchema)),
    automaticRepairsPolicy: Schema.optional(
      Schema.suspend(() => AutomaticRepairsPolicySchema),
    ),
    virtualMachineProfile: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetUpdateVMProfileSchema),
    ),
    overprovision: Schema.optional(Schema.Boolean),
    doNotRunExtensionsOnOverprovisionedVMs: Schema.optional(Schema.Boolean),
    singlePlacementGroup: Schema.optional(Schema.Boolean),
    additionalCapabilities: Schema.optional(
      Schema.suspend(() => AdditionalCapabilitiesSchema),
    ),
    scaleInPolicy: Schema.optional(Schema.suspend(() => ScaleInPolicySchema)),
    proximityPlacementGroup: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
      }),
    ),
    priorityMixPolicy: Schema.optional(
      Schema.suspend(() => PriorityMixPolicySchema),
    ),
    spotRestorePolicy: Schema.optional(
      Schema.suspend(() => SpotRestorePolicySchema),
    ),
    resiliencyPolicy: Schema.optional(
      Schema.suspend(() => ResiliencyPolicySchema),
    ),
    zonalPlatformFaultDomainAlignMode: Schema.optional(
      Schema.suspend(() => ZonalPlatformFaultDomainAlignModeSchema),
    ),
    skuProfile: Schema.optional(Schema.suspend(() => SkuProfileSchema)),
  });
const VirtualMachineScaleSetUpdateVMProfileSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    osProfile: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetUpdateOSProfileSchema),
    ),
    storageProfile: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetUpdateStorageProfileSchema),
    ),
    networkProfile: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetUpdateNetworkProfileSchema),
    ),
    securityPostureReference: Schema.optional(
      Schema.suspend(() => SecurityPostureReferenceUpdateSchema),
    ),
    securityProfile: Schema.optional(
      Schema.suspend(() => SecurityProfileSchema),
    ),
    diagnosticsProfile: Schema.optional(
      Schema.suspend(() => DiagnosticsProfileSchema),
    ),
    extensionProfile: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetExtensionProfileSchema),
    ),
    licenseType: Schema.optional(Schema.String),
    billingProfile: Schema.optional(Schema.suspend(() => BillingProfileSchema)),
    scheduledEventsProfile: Schema.optional(
      Schema.suspend(() => ScheduledEventsProfileSchema),
    ),
    userData: Schema.optional(Schema.String),
    hardwareProfile: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetHardwareProfileSchema),
    ),
  });
const VirtualMachineScaleSetUpdateOSProfileSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customData: Schema.optional(Schema.String),
    windowsConfiguration: Schema.optional(
      Schema.suspend(() => WindowsConfigurationSchema),
    ),
    linuxConfiguration: Schema.optional(
      Schema.suspend(() => LinuxConfigurationSchema),
    ),
    secrets: Schema.optional(
      Schema.Array(Schema.suspend(() => VaultSecretGroupSchema)),
    ),
  });
const VirtualMachineScaleSetUpdateStorageProfileSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageReference: Schema.optional(Schema.suspend(() => ImageReferenceSchema)),
    osDisk: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetUpdateOSDiskSchema),
    ),
    dataDisks: Schema.optional(
      Schema.Array(Schema.suspend(() => VirtualMachineScaleSetDataDiskSchema)),
    ),
    diskControllerType: Schema.optional(
      Schema.suspend(() => DiskControllerTypesSchema),
    ),
  });
const VirtualMachineScaleSetUpdateOSDiskSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    caching: Schema.optional(Schema.suspend(() => CachingTypesSchema)),
    writeAcceleratorEnabled: Schema.optional(Schema.Boolean),
    diffDiskSettings: Schema.optional(
      Schema.suspend(() => DiffDiskSettingsSchema),
    ),
    diskSizeGB: Schema.optional(Schema.Number),
    image: Schema.optional(Schema.suspend(() => VirtualHardDiskSchema)),
    vhdContainers: Schema.optional(Schema.Array(Schema.String)),
    managedDisk: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetManagedDiskParametersSchema),
    ),
    deleteOption: Schema.optional(
      Schema.suspend(() => DiskDeleteOptionTypesSchema),
    ),
  });
const VirtualMachineScaleSetUpdateNetworkProfileSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    healthProbe: Schema.optional(
      Schema.suspend(() => ApiEntityReferenceSchema),
    ),
    networkInterfaceConfigurations: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => VirtualMachineScaleSetUpdateNetworkConfigurationSchema,
        ),
      ),
    ),
    networkApiVersion: Schema.optional(
      Schema.suspend(() => NetworkApiVersionSchema),
    ),
  });
const VirtualMachineScaleSetUpdateNetworkConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(
        () => VirtualMachineScaleSetUpdateNetworkConfigurationPropertiesSchema,
      ),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
const VirtualMachineScaleSetUpdateNetworkConfigurationPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primary: Schema.optional(Schema.Boolean),
    enableAcceleratedNetworking: Schema.optional(Schema.Boolean),
    disableTcpStateTracking: Schema.optional(Schema.Boolean),
    enableFpga: Schema.optional(Schema.Boolean),
    networkSecurityGroup: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
      }),
    ),
    dnsSettings: Schema.optional(
      Schema.suspend(
        () => VirtualMachineScaleSetNetworkConfigurationDnsSettingsSchema,
      ),
    ),
    ipConfigurations: Schema.optional(
      Schema.Array(
        Schema.suspend(() => VirtualMachineScaleSetUpdateIPConfigurationSchema),
      ),
    ),
    enableIPForwarding: Schema.optional(Schema.Boolean),
    deleteOption: Schema.optional(Schema.suspend(() => DeleteOptionsSchema)),
    auxiliaryMode: Schema.optional(
      Schema.suspend(() => NetworkInterfaceAuxiliaryModeSchema),
    ),
    auxiliarySku: Schema.optional(
      Schema.suspend(() => NetworkInterfaceAuxiliarySkuSchema),
    ),
  });
const VirtualMachineScaleSetUpdateIPConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(
        () => VirtualMachineScaleSetUpdateIPConfigurationPropertiesSchema,
      ),
    ),
  });
const VirtualMachineScaleSetUpdateIPConfigurationPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subnet: Schema.optional(Schema.suspend(() => ApiEntityReferenceSchema)),
    primary: Schema.optional(Schema.Boolean),
    publicIPAddressConfiguration: Schema.optional(
      Schema.suspend(
        () => VirtualMachineScaleSetUpdatePublicIPAddressConfigurationSchema,
      ),
    ),
    privateIPAddressVersion: Schema.optional(
      Schema.suspend(() => IPVersionSchema),
    ),
    applicationGatewayBackendAddressPools: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
    applicationSecurityGroups: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
    loadBalancerBackendAddressPools: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
    loadBalancerInboundNatPools: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
const VirtualMachineScaleSetUpdatePublicIPAddressConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(
        () =>
          VirtualMachineScaleSetUpdatePublicIPAddressConfigurationPropertiesSchema,
      ),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
const VirtualMachineScaleSetUpdatePublicIPAddressConfigurationPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    idleTimeoutInMinutes: Schema.optional(Schema.Number),
    dnsSettings: Schema.optional(
      Schema.suspend(
        () =>
          VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettingsSchema,
      ),
    ),
    publicIPPrefix: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
      }),
    ),
    deleteOption: Schema.optional(Schema.suspend(() => DeleteOptionsSchema)),
  });
const SecurityPostureReferenceUpdateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    excludeExtensions: Schema.optional(Schema.Array(Schema.String)),
    isOverridable: Schema.optional(Schema.Boolean),
  });
const VirtualMachineScaleSetExtensionPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    forceUpdateTag: Schema.optional(Schema.String),
    publisher: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    typeHandlerVersion: Schema.optional(Schema.String),
    autoUpgradeMinorVersion: Schema.optional(Schema.Boolean),
    enableAutomaticUpgrade: Schema.optional(Schema.Boolean),
    settings: Schema.optional(Schema.Unknown),
    protectedSettings: Schema.optional(Schema.Unknown),
    provisioningState: Schema.optional(Schema.String),
    provisionAfterExtensions: Schema.optional(Schema.Array(Schema.String)),
    suppressFailures: Schema.optional(Schema.Boolean),
    protectedSettingsFromKeyVault: Schema.optional(
      Schema.suspend(() => KeyVaultSecretReferenceSchema),
    ),
  });
const VirtualMachineScaleSetInstanceViewStatusesSummarySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    statusesSummary: Schema.optional(
      Schema.Array(Schema.suspend(() => VirtualMachineStatusCodeCountSchema)),
    ),
  });
const VirtualMachineStatusCodeCountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
    count: Schema.optional(Schema.Number),
  });
const VirtualMachineScaleSetVMExtensionsSummarySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    statusesSummary: Schema.optional(
      Schema.Array(Schema.suspend(() => VirtualMachineStatusCodeCountSchema)),
    ),
  });
const OrchestrationServiceSummarySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceName: Schema.optional(
      Schema.suspend(() => OrchestrationServiceNamesSchema),
    ),
    serviceState: Schema.optional(
      Schema.suspend(() => OrchestrationServiceStateSchema),
    ),
    latestOperationStatus: Schema.optional(
      Schema.suspend(() => OrchestrationServiceOperationStatusSchema),
    ),
    lastStatusChangeTime: Schema.optional(Schema.String),
  });
const OrchestrationServiceNamesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "AutomaticRepairs",
    "AutomaticZoneRebalancing",
  ]);
const OrchestrationServiceStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "NotRunning",
    "Running",
    "Suspended",
  ]);
const OrchestrationServiceOperationStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["InProgress", "Completed"]);
const UpgradeOperationHistoricalStatusInfoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(
        () => UpgradeOperationHistoricalStatusInfoPropertiesSchema,
      ),
    ),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  });
const UpgradeOperationHistoricalStatusInfoPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    runningStatus: Schema.optional(
      Schema.suspend(() => UpgradeOperationHistoryStatusSchema),
    ),
    progress: Schema.optional(
      Schema.suspend(() => RollingUpgradeProgressInfoSchema),
    ),
    error: Schema.optional(
      Schema.Struct({
        details: Schema.optional(
          Schema.Array(Schema.suspend(() => ApiErrorBaseSchema)),
        ),
        innererror: Schema.optional(Schema.suspend(() => InnerErrorSchema)),
        code: Schema.optional(Schema.String),
        target: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
    startedBy: Schema.optional(
      Schema.suspend(() => UpgradeOperationInvokerSchema),
    ),
    targetImageReference: Schema.optional(
      Schema.suspend(() => ImageReferenceSchema),
    ),
    rollbackInfo: Schema.optional(
      Schema.suspend(() => RollbackStatusInfoSchema),
    ),
  });
const UpgradeOperationHistoryStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.suspend(() => UpgradeStateSchema)),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  });
const UpgradeStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "RollingForward",
  "Cancelled",
  "Completed",
  "Faulted",
]);
const RollingUpgradeProgressInfoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    successfulInstanceCount: Schema.optional(Schema.Number),
    failedInstanceCount: Schema.optional(Schema.Number),
    inProgressInstanceCount: Schema.optional(Schema.Number),
    pendingInstanceCount: Schema.optional(Schema.Number),
  });
const ApiErrorBaseSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  code: Schema.optional(Schema.String),
  target: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
});
const InnerErrorSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  exceptiontype: Schema.optional(Schema.String),
  errordetail: Schema.optional(Schema.String),
});
const UpgradeOperationInvokerSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Unknown", "User", "Platform"]);
const RollbackStatusInfoSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  successfullyRolledbackInstanceCount: Schema.optional(Schema.Number),
  failedRolledbackInstanceCount: Schema.optional(Schema.Number),
  rollbackError: Schema.optional(
    Schema.Struct({
      details: Schema.optional(
        Schema.Array(Schema.suspend(() => ApiErrorBaseSchema)),
      ),
      innererror: Schema.optional(Schema.suspend(() => InnerErrorSchema)),
      code: Schema.optional(Schema.String),
      target: Schema.optional(Schema.String),
      message: Schema.optional(Schema.String),
    }),
  ),
});
const RollingUpgradeStatusInfoPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy: Schema.optional(Schema.suspend(() => RollingUpgradePolicySchema)),
    runningStatus: Schema.optional(
      Schema.suspend(() => RollingUpgradeRunningStatusSchema),
    ),
    progress: Schema.optional(
      Schema.suspend(() => RollingUpgradeProgressInfoSchema),
    ),
    error: Schema.optional(
      Schema.Struct({
        details: Schema.optional(
          Schema.Array(Schema.suspend(() => ApiErrorBaseSchema)),
        ),
        innererror: Schema.optional(Schema.suspend(() => InnerErrorSchema)),
        code: Schema.optional(Schema.String),
        target: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
  });
const RollingUpgradeRunningStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.suspend(() => RollingUpgradeStatusCodeSchema)),
    startTime: Schema.optional(Schema.String),
    lastAction: Schema.optional(
      Schema.suspend(() => RollingUpgradeActionTypeSchema),
    ),
    lastActionTime: Schema.optional(Schema.String),
  });
const RollingUpgradeStatusCodeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "RollingForward",
    "Cancelled",
    "Completed",
    "Faulted",
  ]);
const RollingUpgradeActionTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Start", "Cancel"]);
const VMScaleSetScaleOutInputPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.optional(Schema.String),
  });
const OrchestrationServiceStateActionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Resume", "Suspend"]);
const VirtualMachineScaleSetSkuSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceType: Schema.optional(Schema.String),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    capacity: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetSkuCapacitySchema),
    ),
  });
const VirtualMachineScaleSetSkuCapacitySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minimum: Schema.optional(Schema.Number),
    maximum: Schema.optional(Schema.Number),
    defaultCapacity: Schema.optional(Schema.Number),
    scaleType: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetSkuScaleTypeSchema),
    ),
  });
const VirtualMachineScaleSetSkuScaleTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Automatic", "None"]);
const VirtualMachineScaleSetVMSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const VirtualMachineScaleSetVMPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latestModelApplied: Schema.optional(Schema.Boolean),
    vmId: Schema.optional(Schema.String),
    instanceView: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetVMInstanceViewSchema),
    ),
    hardwareProfile: Schema.optional(
      Schema.suspend(() => HardwareProfileSchema),
    ),
    resilientVMDeletionStatus: Schema.optional(
      Schema.suspend(() => ResilientVMDeletionStatusSchema),
    ),
    storageProfile: Schema.optional(Schema.suspend(() => StorageProfileSchema)),
    additionalCapabilities: Schema.optional(
      Schema.suspend(() => AdditionalCapabilitiesSchema),
    ),
    osProfile: Schema.optional(Schema.suspend(() => OSProfileSchema)),
    securityProfile: Schema.optional(
      Schema.suspend(() => SecurityProfileSchema),
    ),
    networkProfile: Schema.optional(Schema.suspend(() => NetworkProfileSchema)),
    networkProfileConfiguration: Schema.optional(
      Schema.suspend(
        () => VirtualMachineScaleSetVMNetworkProfileConfigurationSchema,
      ),
    ),
    diagnosticsProfile: Schema.optional(
      Schema.suspend(() => DiagnosticsProfileSchema),
    ),
    availabilitySet: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
      }),
    ),
    provisioningState: Schema.optional(Schema.String),
    licenseType: Schema.optional(Schema.String),
    modelDefinitionApplied: Schema.optional(Schema.String),
    protectionPolicy: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetVMProtectionPolicySchema),
    ),
    userData: Schema.optional(Schema.String),
    timeCreated: Schema.optional(Schema.String),
  });
const VirtualMachineScaleSetVMInstanceViewSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    platformUpdateDomain: Schema.optional(Schema.Number),
    platformFaultDomain: Schema.optional(Schema.Number),
    rdpThumbPrint: Schema.optional(Schema.String),
    vmAgent: Schema.optional(
      Schema.suspend(() => VirtualMachineAgentInstanceViewSchema),
    ),
    maintenanceRedeployStatus: Schema.optional(
      Schema.suspend(() => MaintenanceRedeployStatusSchema),
    ),
    disks: Schema.optional(
      Schema.Array(Schema.suspend(() => DiskInstanceViewSchema)),
    ),
    extensions: Schema.optional(
      Schema.Array(
        Schema.suspend(() => VirtualMachineExtensionInstanceViewSchema),
      ),
    ),
    vmHealth: Schema.optional(
      Schema.suspend(() => VirtualMachineHealthStatusSchema),
    ),
    bootDiagnostics: Schema.optional(
      Schema.suspend(() => BootDiagnosticsInstanceViewSchema),
    ),
    statuses: Schema.optional(
      Schema.Array(Schema.suspend(() => InstanceViewStatusSchema)),
    ),
    assignedHost: Schema.optional(Schema.String),
    placementGroupId: Schema.optional(Schema.String),
    computerName: Schema.optional(Schema.String),
    osName: Schema.optional(Schema.String),
    osVersion: Schema.optional(Schema.String),
    hyperVGeneration: Schema.optional(
      Schema.suspend(() => Common_HyperVGenerationSchema),
    ),
  });
const VirtualMachineAgentInstanceViewSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vmAgentVersion: Schema.optional(Schema.String),
    extensionHandlers: Schema.optional(
      Schema.Array(
        Schema.suspend(() => VirtualMachineExtensionHandlerInstanceViewSchema),
      ),
    ),
    statuses: Schema.optional(
      Schema.Array(Schema.suspend(() => InstanceViewStatusSchema)),
    ),
  });
const VirtualMachineExtensionHandlerInstanceViewSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    typeHandlerVersion: Schema.optional(Schema.String),
    status: Schema.optional(Schema.suspend(() => InstanceViewStatusSchema)),
  });
const MaintenanceRedeployStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isCustomerInitiatedMaintenanceAllowed: Schema.optional(Schema.Boolean),
    preMaintenanceWindowStartTime: Schema.optional(Schema.String),
    preMaintenanceWindowEndTime: Schema.optional(Schema.String),
    maintenanceWindowStartTime: Schema.optional(Schema.String),
    maintenanceWindowEndTime: Schema.optional(Schema.String),
    lastOperationResultCode: Schema.optional(
      Schema.suspend(() => MaintenanceOperationResultCodeTypesSchema),
    ),
    lastOperationMessage: Schema.optional(Schema.String),
  });
const MaintenanceOperationResultCodeTypesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "None",
    "RetryLater",
    "MaintenanceAborted",
    "MaintenanceCompleted",
  ]);
const DiskInstanceViewSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  encryptionSettings: Schema.optional(
    Schema.Array(Schema.suspend(() => DiskEncryptionSettingsSchema)),
  ),
  statuses: Schema.optional(
    Schema.Array(Schema.suspend(() => InstanceViewStatusSchema)),
  ),
});
const VirtualMachineExtensionInstanceViewSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    typeHandlerVersion: Schema.optional(Schema.String),
    substatuses: Schema.optional(
      Schema.Array(Schema.suspend(() => InstanceViewStatusSchema)),
    ),
    statuses: Schema.optional(
      Schema.Array(Schema.suspend(() => InstanceViewStatusSchema)),
    ),
  });
const VirtualMachineHealthStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.suspend(() => InstanceViewStatusSchema)),
  });
const BootDiagnosticsInstanceViewSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    consoleScreenshotBlobUri: Schema.optional(Schema.String),
    serialConsoleLogBlobUri: Schema.optional(Schema.String),
    status: Schema.optional(Schema.suspend(() => InstanceViewStatusSchema)),
  });
const Common_HyperVGenerationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["V1", "V2"]);
const ResilientVMDeletionStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Enabled",
    "Disabled",
    "InProgress",
    "Failed",
  ]);
const StorageProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  imageReference: Schema.optional(Schema.suspend(() => ImageReferenceSchema)),
  osDisk: Schema.optional(Schema.suspend(() => OSDiskSchema)),
  dataDisks: Schema.optional(
    Schema.Array(Schema.suspend(() => DataDiskSchema)),
  ),
  diskControllerType: Schema.optional(
    Schema.suspend(() => DiskControllerTypesSchema),
  ),
  alignRegionalDisksToVMZone: Schema.optional(Schema.Boolean),
});
const OSDiskSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  osType: Schema.optional(
    Schema.suspend(() => Common_OperatingSystemTypesSchema),
  ),
  encryptionSettings: Schema.optional(
    Schema.suspend(() => DiskEncryptionSettingsSchema),
  ),
  name: Schema.optional(Schema.String),
  vhd: Schema.optional(Schema.suspend(() => VirtualHardDiskSchema)),
  image: Schema.optional(Schema.suspend(() => VirtualHardDiskSchema)),
  caching: Schema.optional(Schema.suspend(() => CachingTypesSchema)),
  writeAcceleratorEnabled: Schema.optional(Schema.Boolean),
  diffDiskSettings: Schema.optional(
    Schema.suspend(() => DiffDiskSettingsSchema),
  ),
  createOption: Schema.suspend(() => DiskCreateOptionTypesSchema),
  diskSizeGB: Schema.optional(Schema.Number),
  managedDisk: Schema.optional(
    Schema.suspend(() => ManagedDiskParametersSchema),
  ),
  deleteOption: Schema.optional(
    Schema.suspend(() => DiskDeleteOptionTypesSchema),
  ),
});
const DataDiskSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  lun: Schema.Number,
  name: Schema.optional(Schema.String),
  vhd: Schema.optional(Schema.suspend(() => VirtualHardDiskSchema)),
  image: Schema.optional(Schema.suspend(() => VirtualHardDiskSchema)),
  caching: Schema.optional(Schema.suspend(() => CachingTypesSchema)),
  writeAcceleratorEnabled: Schema.optional(Schema.Boolean),
  createOption: Schema.suspend(() => DiskCreateOptionTypesSchema),
  diskSizeGB: Schema.optional(Schema.Number),
  managedDisk: Schema.optional(
    Schema.suspend(() => ManagedDiskParametersSchema),
  ),
  sourceResource: Schema.optional(
    Schema.suspend(() => ApiEntityReferenceSchema),
  ),
  toBeDetached: Schema.optional(Schema.Boolean),
  diskIOPSReadWrite: Schema.optional(Schema.Number),
  diskMBpsReadWrite: Schema.optional(Schema.Number),
  detachOption: Schema.optional(
    Schema.suspend(() => DiskDetachOptionTypesSchema),
  ),
  deleteOption: Schema.optional(
    Schema.suspend(() => DiskDeleteOptionTypesSchema),
  ),
});
const DiskDetachOptionTypesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(
  ["ForceDetach"],
);
const NetworkProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  networkInterfaces: Schema.optional(
    Schema.Array(Schema.suspend(() => NetworkInterfaceReferenceSchema)),
  ),
  networkApiVersion: Schema.optional(
    Schema.suspend(() => NetworkApiVersionSchema),
  ),
  networkInterfaceConfigurations: Schema.optional(
    Schema.Array(
      Schema.suspend(() => VirtualMachineNetworkInterfaceConfigurationSchema),
    ),
  ),
});
const NetworkInterfaceReferenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  });
const VirtualMachineNetworkInterfaceConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    properties: Schema.optional(
      Schema.suspend(
        () => VirtualMachineNetworkInterfaceConfigurationPropertiesSchema,
      ),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
const VirtualMachineNetworkInterfaceConfigurationPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primary: Schema.optional(Schema.Boolean),
    deleteOption: Schema.optional(Schema.suspend(() => DeleteOptionsSchema)),
    enableAcceleratedNetworking: Schema.optional(Schema.Boolean),
    disableTcpStateTracking: Schema.optional(Schema.Boolean),
    enableFpga: Schema.optional(Schema.Boolean),
    enableIPForwarding: Schema.optional(Schema.Boolean),
    networkSecurityGroup: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
      }),
    ),
    dnsSettings: Schema.optional(
      Schema.suspend(
        () => VirtualMachineNetworkInterfaceDnsSettingsConfigurationSchema,
      ),
    ),
    ipConfigurations: Schema.Array(
      Schema.suspend(() => VirtualMachineNetworkInterfaceIPConfigurationSchema),
    ),
    dscpConfiguration: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
      }),
    ),
    auxiliaryMode: Schema.optional(
      Schema.suspend(() => NetworkInterfaceAuxiliaryModeSchema),
    ),
    auxiliarySku: Schema.optional(
      Schema.suspend(() => NetworkInterfaceAuxiliarySkuSchema),
    ),
  });
const VirtualMachineNetworkInterfaceDnsSettingsConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dnsServers: Schema.optional(Schema.Array(Schema.String)),
  });
const VirtualMachineNetworkInterfaceIPConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    properties: Schema.optional(
      Schema.suspend(
        () => VirtualMachineNetworkInterfaceIPConfigurationPropertiesSchema,
      ),
    ),
  });
const VirtualMachineNetworkInterfaceIPConfigurationPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subnet: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
      }),
    ),
    primary: Schema.optional(Schema.Boolean),
    publicIPAddressConfiguration: Schema.optional(
      Schema.suspend(() => VirtualMachinePublicIPAddressConfigurationSchema),
    ),
    privateIPAddressVersion: Schema.optional(
      Schema.suspend(() => IPVersionsSchema),
    ),
    applicationSecurityGroups: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
    applicationGatewayBackendAddressPools: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
    loadBalancerBackendAddressPools: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
const VirtualMachinePublicIPAddressConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    properties: Schema.optional(
      Schema.suspend(
        () => VirtualMachinePublicIPAddressConfigurationPropertiesSchema,
      ),
    ),
    sku: Schema.optional(Schema.suspend(() => PublicIPAddressSkuSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
const VirtualMachinePublicIPAddressConfigurationPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    idleTimeoutInMinutes: Schema.optional(Schema.Number),
    deleteOption: Schema.optional(Schema.suspend(() => DeleteOptionsSchema)),
    dnsSettings: Schema.optional(
      Schema.suspend(
        () => VirtualMachinePublicIPAddressDnsSettingsConfigurationSchema,
      ),
    ),
    ipTags: Schema.optional(
      Schema.Array(Schema.suspend(() => VirtualMachineIpTagSchema)),
    ),
    publicIPPrefix: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
      }),
    ),
    publicIPAddressVersion: Schema.optional(
      Schema.suspend(() => IPVersionsSchema),
    ),
    publicIPAllocationMethod: Schema.optional(
      Schema.suspend(() => PublicIPAllocationMethodSchema),
    ),
  });
const VirtualMachinePublicIPAddressDnsSettingsConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domainNameLabel: Schema.String,
    domainNameLabelScope: Schema.optional(
      Schema.suspend(() => DomainNameLabelScopeTypesSchema),
    ),
  });
const VirtualMachineIpTagSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ipTagType: Schema.optional(Schema.String),
  tag: Schema.optional(Schema.String),
});
const IPVersionsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "IPv4",
  "IPv6",
]);
const PublicIPAllocationMethodSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Dynamic", "Static"]);
const VirtualMachineScaleSetVMNetworkProfileConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    networkInterfaceConfigurations: Schema.optional(
      Schema.Array(
        Schema.suspend(() => VirtualMachineScaleSetNetworkConfigurationSchema),
      ),
    ),
  });
const VirtualMachineScaleSetVMProtectionPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    protectFromScaleIn: Schema.optional(Schema.Boolean),
    protectFromScaleSetActions: Schema.optional(Schema.Boolean),
  });
const VirtualMachineExtensionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
const VirtualMachineIdentitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  principalId: Schema.optional(Schema.String),
  tenantId: Schema.optional(Schema.String),
  type: Schema.optional(
    Schema.suspend(() => Common_ResourceIdentityTypeSchema),
  ),
  userAssignedIdentities: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => Common_UserAssignedIdentitiesValueSchema),
    ),
  ),
});
const DataDisksToAttachSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  diskId: Schema.String,
  lun: Schema.optional(Schema.Number),
  caching: Schema.optional(Schema.suspend(() => CachingTypesSchema)),
  deleteOption: Schema.optional(
    Schema.suspend(() => DiskDeleteOptionTypesSchema),
  ),
  diskEncryptionSet: Schema.optional(
    Schema.suspend(() => DiskEncryptionSetParametersSchema),
  ),
  writeAcceleratorEnabled: Schema.optional(Schema.Boolean),
});
const DataDisksToDetachSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  diskId: Schema.String,
  detachOption: Schema.optional(
    Schema.suspend(() => DiskDetachOptionTypesSchema),
  ),
});
const VirtualMachineScaleSetVMExtensionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  });
const VirtualMachineExtensionPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    forceUpdateTag: Schema.optional(Schema.String),
    publisher: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    typeHandlerVersion: Schema.optional(Schema.String),
    autoUpgradeMinorVersion: Schema.optional(Schema.Boolean),
    enableAutomaticUpgrade: Schema.optional(Schema.Boolean),
    settings: Schema.optional(Schema.Unknown),
    protectedSettings: Schema.optional(Schema.Unknown),
    provisioningState: Schema.optional(Schema.String),
    instanceView: Schema.optional(
      Schema.suspend(() => VirtualMachineExtensionInstanceViewSchema),
    ),
    suppressFailures: Schema.optional(Schema.Boolean),
    protectedSettingsFromKeyVault: Schema.optional(
      Schema.suspend(() => KeyVaultSecretReferenceSchema),
    ),
    provisionAfterExtensions: Schema.optional(Schema.Array(Schema.String)),
  });
const VirtualMachineExtensionUpdatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    forceUpdateTag: Schema.optional(Schema.String),
    publisher: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    typeHandlerVersion: Schema.optional(Schema.String),
    autoUpgradeMinorVersion: Schema.optional(Schema.Boolean),
    enableAutomaticUpgrade: Schema.optional(Schema.Boolean),
    settings: Schema.optional(Schema.Unknown),
    protectedSettings: Schema.optional(Schema.Unknown),
    suppressFailures: Schema.optional(Schema.Boolean),
    protectedSettingsFromKeyVault: Schema.optional(
      Schema.suspend(() => KeyVaultSecretReferenceSchema),
    ),
  });
const OSProfileProvisioningDataSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adminPassword: Schema.optional(SensitiveOutputString),
    customData: Schema.optional(Schema.String),
  });
const RunCommandInputParameterSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    value: Schema.String,
  });
const VirtualMachineRunCommandSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const VirtualMachineRunCommandPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(
      Schema.suspend(() => VirtualMachineRunCommandScriptSourceSchema),
    ),
    parameters: Schema.optional(
      Schema.Array(Schema.suspend(() => RunCommandInputParameterSchema)),
    ),
    protectedParameters: Schema.optional(
      Schema.Array(Schema.suspend(() => RunCommandInputParameterSchema)),
    ),
    asyncExecution: Schema.optional(Schema.Boolean),
    runAsUser: Schema.optional(Schema.String),
    runAsPassword: Schema.optional(SensitiveOutputString),
    timeoutInSeconds: Schema.optional(Schema.Number),
    outputBlobUri: Schema.optional(Schema.String),
    errorBlobUri: Schema.optional(Schema.String),
    outputBlobManagedIdentity: Schema.optional(
      Schema.suspend(() => RunCommandManagedIdentitySchema),
    ),
    errorBlobManagedIdentity: Schema.optional(
      Schema.suspend(() => RunCommandManagedIdentitySchema),
    ),
    provisioningState: Schema.optional(Schema.String),
    instanceView: Schema.optional(
      Schema.suspend(() => VirtualMachineRunCommandInstanceViewSchema),
    ),
    treatFailureAsDeploymentFailure: Schema.optional(Schema.Boolean),
  });
const VirtualMachineRunCommandScriptSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    script: Schema.optional(Schema.String),
    scriptUri: Schema.optional(Schema.String),
    commandId: Schema.optional(Schema.String),
    scriptUriManagedIdentity: Schema.optional(
      Schema.suspend(() => RunCommandManagedIdentitySchema),
    ),
    scriptShell: Schema.optional(Schema.suspend(() => ScriptShellTypesSchema)),
    galleryScriptReferenceId: Schema.optional(Schema.String),
  });
const RunCommandManagedIdentitySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientId: Schema.optional(Schema.String),
    objectId: Schema.optional(Schema.String),
  });
const ScriptShellTypesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Default",
  "Powershell7",
]);
const VirtualMachineRunCommandInstanceViewSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    executionState: Schema.optional(Schema.suspend(() => ExecutionStateSchema)),
    executionMessage: Schema.optional(Schema.String),
    exitCode: Schema.optional(Schema.Number),
    output: Schema.optional(Schema.String),
    error: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    statuses: Schema.optional(
      Schema.Array(Schema.suspend(() => InstanceViewStatusSchema)),
    ),
  });
const ExecutionStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "Pending",
  "Running",
  "Failed",
  "Succeeded",
  "TimedOut",
  "Canceled",
]);
const VirtualMachinePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hardwareProfile: Schema.optional(
      Schema.suspend(() => HardwareProfileSchema),
    ),
    scheduledEventsPolicy: Schema.optional(
      Schema.suspend(() => ScheduledEventsPolicySchema),
    ),
    storageProfile: Schema.optional(Schema.suspend(() => StorageProfileSchema)),
    additionalCapabilities: Schema.optional(
      Schema.suspend(() => AdditionalCapabilitiesSchema),
    ),
    osProfile: Schema.optional(Schema.suspend(() => OSProfileSchema)),
    networkProfile: Schema.optional(Schema.suspend(() => NetworkProfileSchema)),
    securityProfile: Schema.optional(
      Schema.suspend(() => SecurityProfileSchema),
    ),
    diagnosticsProfile: Schema.optional(
      Schema.suspend(() => DiagnosticsProfileSchema),
    ),
    availabilitySet: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
      }),
    ),
    virtualMachineScaleSet: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
      }),
    ),
    proximityPlacementGroup: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
      }),
    ),
    priority: Schema.optional(
      Schema.suspend(() => VirtualMachinePriorityTypesSchema),
    ),
    evictionPolicy: Schema.optional(
      Schema.suspend(() => VirtualMachineEvictionPolicyTypesSchema),
    ),
    billingProfile: Schema.optional(Schema.suspend(() => BillingProfileSchema)),
    host: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
      }),
    ),
    hostGroup: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
      }),
    ),
    provisioningState: Schema.optional(Schema.String),
    instanceView: Schema.optional(
      Schema.suspend(() => VirtualMachineInstanceViewSchema),
    ),
    licenseType: Schema.optional(Schema.String),
    vmId: Schema.optional(Schema.String),
    extensionsTimeBudget: Schema.optional(Schema.String),
    platformFaultDomain: Schema.optional(Schema.Number),
    scheduledEventsProfile: Schema.optional(
      Schema.suspend(() => ScheduledEventsProfileSchema),
    ),
    userData: Schema.optional(Schema.String),
    capacityReservation: Schema.optional(
      Schema.suspend(() => CapacityReservationProfileSchema),
    ),
    applicationProfile: Schema.optional(
      Schema.suspend(() => ApplicationProfileSchema),
    ),
    timeCreated: Schema.optional(Schema.String),
  });
const VirtualMachineInstanceViewSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    platformUpdateDomain: Schema.optional(Schema.Number),
    platformFaultDomain: Schema.optional(Schema.Number),
    computerName: Schema.optional(Schema.String),
    osName: Schema.optional(Schema.String),
    osVersion: Schema.optional(Schema.String),
    hyperVGeneration: Schema.optional(
      Schema.suspend(() => HyperVGenerationTypeSchema),
    ),
    rdpThumbPrint: Schema.optional(Schema.String),
    vmAgent: Schema.optional(
      Schema.suspend(() => VirtualMachineAgentInstanceViewSchema),
    ),
    maintenanceRedeployStatus: Schema.optional(
      Schema.suspend(() => MaintenanceRedeployStatusSchema),
    ),
    disks: Schema.optional(
      Schema.Array(Schema.suspend(() => DiskInstanceViewSchema)),
    ),
    extensions: Schema.optional(
      Schema.Array(
        Schema.suspend(() => VirtualMachineExtensionInstanceViewSchema),
      ),
    ),
    vmHealth: Schema.optional(
      Schema.suspend(() => VirtualMachineHealthStatusSchema),
    ),
    bootDiagnostics: Schema.optional(
      Schema.suspend(() => BootDiagnosticsInstanceViewSchema),
    ),
    assignedHost: Schema.optional(Schema.String),
    statuses: Schema.optional(
      Schema.Array(Schema.suspend(() => InstanceViewStatusSchema)),
    ),
    patchStatus: Schema.optional(
      Schema.suspend(() => VirtualMachinePatchStatusSchema),
    ),
    isVMInStandbyPool: Schema.optional(Schema.Boolean),
  });
const HyperVGenerationTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "V1",
  "V2",
]);
const VirtualMachinePatchStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    availablePatchSummary: Schema.optional(
      Schema.suspend(() => AvailablePatchSummarySchema),
    ),
    lastPatchInstallationSummary: Schema.optional(
      Schema.suspend(() => LastPatchInstallationSummarySchema),
    ),
    configurationStatuses: Schema.optional(
      Schema.Array(Schema.suspend(() => InstanceViewStatusSchema)),
    ),
  });
const AvailablePatchSummarySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.optional(Schema.suspend(() => PatchOperationStatusSchema)),
  assessmentActivityId: Schema.optional(Schema.String),
  rebootPending: Schema.optional(Schema.Boolean),
  criticalAndSecurityPatchCount: Schema.optional(Schema.Number),
  otherPatchCount: Schema.optional(Schema.Number),
  startTime: Schema.optional(Schema.String),
  lastModifiedTime: Schema.optional(Schema.String),
  error: Schema.optional(
    Schema.Struct({
      details: Schema.optional(
        Schema.Array(Schema.suspend(() => ApiErrorBaseSchema)),
      ),
      innererror: Schema.optional(Schema.suspend(() => InnerErrorSchema)),
      code: Schema.optional(Schema.String),
      target: Schema.optional(Schema.String),
      message: Schema.optional(Schema.String),
    }),
  ),
});
const PatchOperationStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "InProgress",
  "Failed",
  "Succeeded",
  "CompletedWithWarnings",
]);
const LastPatchInstallationSummarySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.suspend(() => PatchOperationStatusSchema)),
    installationActivityId: Schema.optional(Schema.String),
    maintenanceWindowExceeded: Schema.optional(Schema.Boolean),
    notSelectedPatchCount: Schema.optional(Schema.Number),
    excludedPatchCount: Schema.optional(Schema.Number),
    pendingPatchCount: Schema.optional(Schema.Number),
    installedPatchCount: Schema.optional(Schema.Number),
    failedPatchCount: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    lastModifiedTime: Schema.optional(Schema.String),
    error: Schema.optional(
      Schema.Struct({
        details: Schema.optional(
          Schema.Array(Schema.suspend(() => ApiErrorBaseSchema)),
        ),
        innererror: Schema.optional(Schema.suspend(() => InnerErrorSchema)),
        code: Schema.optional(Schema.String),
        target: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
  });
const VirtualMachineSoftwarePatchPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    patchId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    kbId: Schema.optional(Schema.String),
    classifications: Schema.optional(Schema.Array(Schema.String)),
    rebootBehavior: Schema.optional(
      Schema.suspend(() => VMGuestPatchRebootBehaviorSchema),
    ),
    activityId: Schema.optional(Schema.String),
    publishedDate: Schema.optional(Schema.String),
    lastModifiedDateTime: Schema.optional(Schema.String),
    assessmentState: Schema.optional(
      Schema.suspend(() => PatchAssessmentStateSchema),
    ),
  });
const VMGuestPatchRebootBehaviorSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Unknown",
    "NeverReboots",
    "AlwaysRequiresReboot",
    "CanRequestReboot",
  ]);
const PatchAssessmentStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "Available",
]);
const VMGuestPatchRebootSettingSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "IfRequired",
    "Never",
    "Always",
  ]);
const WindowsParametersSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  classificationsToInclude: Schema.optional(
    Schema.Array(Schema.suspend(() => VMGuestPatchClassificationWindowsSchema)),
  ),
  kbNumbersToInclude: Schema.optional(Schema.Array(Schema.String)),
  kbNumbersToExclude: Schema.optional(Schema.Array(Schema.String)),
  excludeKbsRequiringReboot: Schema.optional(Schema.Boolean),
  maxPatchPublishDate: Schema.optional(Schema.String),
  patchNameMasksToInclude: Schema.optional(Schema.Array(Schema.String)),
  patchNameMasksToExclude: Schema.optional(Schema.Array(Schema.String)),
});
const VMGuestPatchClassificationWindowsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Critical",
    "Security",
    "UpdateRollUp",
    "FeaturePack",
    "ServicePack",
    "Definition",
    "Tools",
    "Updates",
  ]);
const LinuxParametersSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  classificationsToInclude: Schema.optional(
    Schema.Array(Schema.suspend(() => VMGuestPatchClassificationLinuxSchema)),
  ),
  packageNameMasksToInclude: Schema.optional(Schema.Array(Schema.String)),
  packageNameMasksToExclude: Schema.optional(Schema.Array(Schema.String)),
  maintenanceRunId: Schema.optional(Schema.String),
});
const VMGuestPatchClassificationLinuxSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Critical",
    "Security",
    "Other",
  ]);
const VMGuestPatchRebootStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Unknown",
    "NotNeeded",
    "Required",
    "Started",
    "Failed",
    "Completed",
  ]);
const PatchInstallationDetailSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    patchId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    kbId: Schema.optional(Schema.String),
    classifications: Schema.optional(Schema.Array(Schema.String)),
    installationState: Schema.optional(
      Schema.suspend(() => PatchInstallationStateSchema),
    ),
  },
);
const PatchInstallationStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Unknown",
    "Installed",
    "Failed",
    "Excluded",
    "NotSelected",
    "Pending",
  ]);
const ContainerServiceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.String,
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
});
const ContainerServicePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(Schema.String),
    orchestratorProfile: Schema.optional(
      Schema.suspend(() => ContainerServiceOrchestratorProfileSchema),
    ),
    customProfile: Schema.optional(
      Schema.suspend(() => ContainerServiceCustomProfileSchema),
    ),
    servicePrincipalProfile: Schema.optional(
      Schema.suspend(() => ContainerServiceServicePrincipalProfileSchema),
    ),
    masterProfile: Schema.suspend(() => ContainerServiceMasterProfileSchema),
    agentPoolProfiles: Schema.Array(
      Schema.suspend(() => ContainerServiceAgentPoolProfileSchema),
    ),
    windowsProfile: Schema.optional(
      Schema.suspend(() => ContainerServiceWindowsProfileSchema),
    ),
    linuxProfile: Schema.suspend(() => ContainerServiceLinuxProfileSchema),
    diagnosticsProfile: Schema.optional(
      Schema.suspend(() => ContainerServiceDiagnosticsProfileSchema),
    ),
  });
const ContainerServiceOrchestratorProfileSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orchestratorType: Schema.Literals([
      "Swarm",
      "DCOS",
      "Custom",
      "Kubernetes",
    ]),
  });
const ContainerServiceCustomProfileSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orchestrator: Schema.String,
  });
const ContainerServiceServicePrincipalProfileSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientId: Schema.String,
    secret: SensitiveOutputString,
  });
const ContainerServiceMasterProfileSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Literals([1, 3, 5])),
    dnsPrefix: Schema.String,
    fqdn: Schema.optional(Schema.String),
  });
const ContainerServiceAgentPoolProfileSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    count: Schema.Number,
    vmSize: Schema.Literals([
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
      "Standard_G1",
      "Standard_G2",
      "Standard_G3",
      "Standard_G4",
      "Standard_G5",
      "Standard_DS1",
      "Standard_DS2",
      "Standard_DS3",
      "Standard_DS4",
      "Standard_DS11",
      "Standard_DS12",
      "Standard_DS13",
      "Standard_DS14",
      "Standard_GS1",
      "Standard_GS2",
      "Standard_GS3",
      "Standard_GS4",
      "Standard_GS5",
    ]),
    dnsPrefix: Schema.String,
    fqdn: Schema.optional(Schema.String),
  });
const ContainerServiceWindowsProfileSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adminUsername: Schema.String,
    adminPassword: SensitiveOutputString,
  });
const ContainerServiceLinuxProfileSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adminUsername: Schema.String,
    ssh: Schema.suspend(() => ContainerServiceSshConfigurationSchema),
  });
const ContainerServiceSshConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    publicKeys: Schema.Array(
      Schema.suspend(() => ContainerServiceSshPublicKeySchema),
    ),
  });
const ContainerServiceSshPublicKeySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyData: Schema.String,
  });
const ContainerServiceDiagnosticsProfileSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vmDiagnostics: Schema.suspend(() => ContainerServiceVMDiagnosticsSchema),
  });
const ContainerServiceVMDiagnosticsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    storageUri: Schema.optional(Schema.String),
  });

// Input Schema
export const AvailabilitySetsCancelMigrationToVirtualMachineScaleSetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    availabilitySetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}/cancelMigrationToVirtualMachineScaleSet",
      apiVersion: "2025-04-01",
    }),
  );
export type AvailabilitySetsCancelMigrationToVirtualMachineScaleSetInput =
  typeof AvailabilitySetsCancelMigrationToVirtualMachineScaleSetInput.Type;

// Output Schema
export const AvailabilitySetsCancelMigrationToVirtualMachineScaleSetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AvailabilitySetsCancelMigrationToVirtualMachineScaleSetOutput =
  typeof AvailabilitySetsCancelMigrationToVirtualMachineScaleSetOutput.Type;

// The operation
/**
 * Cancel the migration operation on an Availability Set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param availabilitySetName - The name of the availability set.
 */
export const AvailabilitySetsCancelMigrationToVirtualMachineScaleSet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AvailabilitySetsCancelMigrationToVirtualMachineScaleSetInput,
    outputSchema: AvailabilitySetsCancelMigrationToVirtualMachineScaleSetOutput,
  }));
// Input Schema
export const AvailabilitySetsConvertToVirtualMachineScaleSetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    availabilitySetName: Schema.String.pipe(T.PathParam()),
    virtualMachineScaleSetName: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}/convertToVirtualMachineScaleSet",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type AvailabilitySetsConvertToVirtualMachineScaleSetInput =
  typeof AvailabilitySetsConvertToVirtualMachineScaleSetInput.Type;

// Output Schema
export const AvailabilitySetsConvertToVirtualMachineScaleSetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AvailabilitySetsConvertToVirtualMachineScaleSetOutput =
  typeof AvailabilitySetsConvertToVirtualMachineScaleSetOutput.Type;

// The operation
/**
 * Create a new Flexible Virtual Machine Scale Set and migrate all the Virtual Machines in the Availability Set. This does not trigger a downtime on the Virtual Machines.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param availabilitySetName - The name of the availability set.
 */
export const AvailabilitySetsConvertToVirtualMachineScaleSet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AvailabilitySetsConvertToVirtualMachineScaleSetInput,
    outputSchema: AvailabilitySetsConvertToVirtualMachineScaleSetOutput,
  }));
// Input Schema
export const AvailabilitySetsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    availabilitySetName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => AvailabilitySetPropertiesSchema),
    ),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}",
      apiVersion: "2025-04-01",
    }),
  );
export type AvailabilitySetsCreateOrUpdateInput =
  typeof AvailabilitySetsCreateOrUpdateInput.Type;

// Output Schema
export const AvailabilitySetsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AvailabilitySetPropertiesSchema),
    ),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AvailabilitySetsCreateOrUpdateOutput =
  typeof AvailabilitySetsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update an availability set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param availabilitySetName - The name of the availability set.
 */
export const AvailabilitySetsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AvailabilitySetsCreateOrUpdateInput,
    outputSchema: AvailabilitySetsCreateOrUpdateOutput,
  }));
// Input Schema
export const AvailabilitySetsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    availabilitySetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}",
      apiVersion: "2025-04-01",
    }),
  );
export type AvailabilitySetsDeleteInput =
  typeof AvailabilitySetsDeleteInput.Type;

// Output Schema
export const AvailabilitySetsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AvailabilitySetsDeleteOutput =
  typeof AvailabilitySetsDeleteOutput.Type;

// The operation
/**
 * Delete an availability set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param availabilitySetName - The name of the availability set.
 */
export const AvailabilitySetsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AvailabilitySetsDeleteInput,
    outputSchema: AvailabilitySetsDeleteOutput,
  }),
);
// Input Schema
export const AvailabilitySetsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    availabilitySetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}",
      apiVersion: "2025-04-01",
    }),
  );
export type AvailabilitySetsGetInput = typeof AvailabilitySetsGetInput.Type;

// Output Schema
export const AvailabilitySetsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AvailabilitySetPropertiesSchema),
    ),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AvailabilitySetsGetOutput = typeof AvailabilitySetsGetOutput.Type;

// The operation
/**
 * Retrieves information about an availability set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param availabilitySetName - The name of the availability set.
 */
export const AvailabilitySetsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AvailabilitySetsGetInput,
  outputSchema: AvailabilitySetsGetOutput,
}));
// Input Schema
export const AvailabilitySetsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets",
      apiVersion: "2025-04-01",
    }),
  );
export type AvailabilitySetsListInput = typeof AvailabilitySetsListInput.Type;

// Output Schema
export const AvailabilitySetsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => AvailabilitySetSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AvailabilitySetsListOutput = typeof AvailabilitySetsListOutput.Type;

// The operation
/**
 * Lists all availability sets in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AvailabilitySetsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AvailabilitySetsListInput,
    outputSchema: AvailabilitySetsListOutput,
  }),
);
// Input Schema
export const AvailabilitySetsListAvailableSizesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    availabilitySetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}/vmSizes",
      apiVersion: "2025-04-01",
    }),
  );
export type AvailabilitySetsListAvailableSizesInput =
  typeof AvailabilitySetsListAvailableSizesInput.Type;

// Output Schema
export const AvailabilitySetsListAvailableSizesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => VirtualMachineSizeSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type AvailabilitySetsListAvailableSizesOutput =
  typeof AvailabilitySetsListAvailableSizesOutput.Type;

// The operation
/**
 * Lists all available virtual machine sizes that can be used to create a new virtual machine in an existing availability set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param availabilitySetName - The name of the availability set.
 */
export const AvailabilitySetsListAvailableSizes =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AvailabilitySetsListAvailableSizesInput,
    outputSchema: AvailabilitySetsListAvailableSizesOutput,
  }));
// Input Schema
export const AvailabilitySetsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/availabilitySets",
      apiVersion: "2025-04-01",
    }),
  );
export type AvailabilitySetsListBySubscriptionInput =
  typeof AvailabilitySetsListBySubscriptionInput.Type;

// Output Schema
export const AvailabilitySetsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => AvailabilitySetSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AvailabilitySetsListBySubscriptionOutput =
  typeof AvailabilitySetsListBySubscriptionOutput.Type;

// The operation
/**
 * Lists all availability sets in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param $expand - The expand expression to apply to the operation. Allowed values are 'instanceView'.
 */
export const AvailabilitySetsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AvailabilitySetsListBySubscriptionInput,
    outputSchema: AvailabilitySetsListBySubscriptionOutput,
  }));
// Input Schema
export const AvailabilitySetsStartMigrationToVirtualMachineScaleSetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    availabilitySetName: Schema.String.pipe(T.PathParam()),
    virtualMachineScaleSetFlexible: Schema.Struct({
      id: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}/startMigrationToVirtualMachineScaleSet",
      apiVersion: "2025-04-01",
    }),
  );
export type AvailabilitySetsStartMigrationToVirtualMachineScaleSetInput =
  typeof AvailabilitySetsStartMigrationToVirtualMachineScaleSetInput.Type;

// Output Schema
export const AvailabilitySetsStartMigrationToVirtualMachineScaleSetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AvailabilitySetsStartMigrationToVirtualMachineScaleSetOutput =
  typeof AvailabilitySetsStartMigrationToVirtualMachineScaleSetOutput.Type;

// The operation
/**
 * Start migration operation on an Availability Set to move its Virtual Machines to a Virtual Machine Scale Set. This should be followed by a migrate operation on each Virtual Machine that triggers a downtime on the Virtual Machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param availabilitySetName - The name of the availability set.
 */
export const AvailabilitySetsStartMigrationToVirtualMachineScaleSet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AvailabilitySetsStartMigrationToVirtualMachineScaleSetInput,
    outputSchema: AvailabilitySetsStartMigrationToVirtualMachineScaleSetOutput,
  }));
// Input Schema
export const AvailabilitySetsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    availabilitySetName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => AvailabilitySetPropertiesSchema),
    ),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}",
      apiVersion: "2025-04-01",
    }),
  );
export type AvailabilitySetsUpdateInput =
  typeof AvailabilitySetsUpdateInput.Type;

// Output Schema
export const AvailabilitySetsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AvailabilitySetPropertiesSchema),
    ),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AvailabilitySetsUpdateOutput =
  typeof AvailabilitySetsUpdateOutput.Type;

// The operation
/**
 * Update an availability set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param availabilitySetName - The name of the availability set.
 */
export const AvailabilitySetsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AvailabilitySetsUpdateInput,
    outputSchema: AvailabilitySetsUpdateOutput,
  }),
);
// Input Schema
export const AvailabilitySetsValidateMigrationToVirtualMachineScaleSetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    availabilitySetName: Schema.String.pipe(T.PathParam()),
    virtualMachineScaleSetFlexible: Schema.Struct({
      id: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}/validateMigrationToVirtualMachineScaleSet",
      apiVersion: "2025-04-01",
    }),
  );
export type AvailabilitySetsValidateMigrationToVirtualMachineScaleSetInput =
  typeof AvailabilitySetsValidateMigrationToVirtualMachineScaleSetInput.Type;

// Output Schema
export const AvailabilitySetsValidateMigrationToVirtualMachineScaleSetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AvailabilitySetsValidateMigrationToVirtualMachineScaleSetOutput =
  typeof AvailabilitySetsValidateMigrationToVirtualMachineScaleSetOutput.Type;

// The operation
/**
 * Validates that the Virtual Machines in the Availability Set can be migrated to the provided Virtual Machine Scale Set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param availabilitySetName - The name of the availability set.
 */
export const AvailabilitySetsValidateMigrationToVirtualMachineScaleSet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AvailabilitySetsValidateMigrationToVirtualMachineScaleSetInput,
    outputSchema:
      AvailabilitySetsValidateMigrationToVirtualMachineScaleSetOutput,
  }));
// Input Schema
export const CapacityReservationGroupsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    capacityReservationGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => CapacityReservationGroupPropertiesSchema),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/capacityReservationGroups/{capacityReservationGroupName}",
      apiVersion: "2025-04-01",
    }),
  );
export type CapacityReservationGroupsCreateOrUpdateInput =
  typeof CapacityReservationGroupsCreateOrUpdateInput.Type;

// Output Schema
export const CapacityReservationGroupsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => CapacityReservationGroupPropertiesSchema),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type CapacityReservationGroupsCreateOrUpdateOutput =
  typeof CapacityReservationGroupsCreateOrUpdateOutput.Type;

// The operation
/**
 * The operation to create or update a capacity reservation group. When updating a capacity reservation group, only tags and sharing profile may be modified. Please refer to https://aka.ms/CapacityReservation for more details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param capacityReservationGroupName - The name of the capacity reservation group.
 */
export const CapacityReservationGroupsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CapacityReservationGroupsCreateOrUpdateInput,
    outputSchema: CapacityReservationGroupsCreateOrUpdateOutput,
  }));
// Input Schema
export const CapacityReservationGroupsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    capacityReservationGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/capacityReservationGroups/{capacityReservationGroupName}",
      apiVersion: "2025-04-01",
    }),
  );
export type CapacityReservationGroupsDeleteInput =
  typeof CapacityReservationGroupsDeleteInput.Type;

// Output Schema
export const CapacityReservationGroupsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CapacityReservationGroupsDeleteOutput =
  typeof CapacityReservationGroupsDeleteOutput.Type;

// The operation
/**
 * The operation to delete a capacity reservation group. This operation is allowed only if all the associated resources are disassociated from the reservation group and all capacity reservations under the reservation group have also been deleted. Please refer to https://aka.ms/CapacityReservation for more details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param capacityReservationGroupName - The name of the capacity reservation group.
 */
export const CapacityReservationGroupsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CapacityReservationGroupsDeleteInput,
    outputSchema: CapacityReservationGroupsDeleteOutput,
  }));
// Input Schema
export const CapacityReservationGroupsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    capacityReservationGroupName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.Literals(["instanceView"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/capacityReservationGroups/{capacityReservationGroupName}",
      apiVersion: "2025-04-01",
    }),
  );
export type CapacityReservationGroupsGetInput =
  typeof CapacityReservationGroupsGetInput.Type;

// Output Schema
export const CapacityReservationGroupsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => CapacityReservationGroupPropertiesSchema),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type CapacityReservationGroupsGetOutput =
  typeof CapacityReservationGroupsGetOutput.Type;

// The operation
/**
 * The operation that retrieves information about a capacity reservation group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param capacityReservationGroupName - The name of the capacity reservation group.
 * @param $expand - The expand expression to apply on the operation. 'InstanceView' will retrieve the list of instance views of the capacity reservations under the capacity reservation group which is a snapshot of the runtime properties of a capacity reservation that is managed by the platform and can change outside of control plane operations.
 */
export const CapacityReservationGroupsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CapacityReservationGroupsGetInput,
    outputSchema: CapacityReservationGroupsGetOutput,
  }));
// Input Schema
export const CapacityReservationGroupsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(
      Schema.Literals([
        "virtualMachineScaleSetVMs/$ref",
        "virtualMachines/$ref",
      ]),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/capacityReservationGroups",
      apiVersion: "2025-04-01",
    }),
  );
export type CapacityReservationGroupsListByResourceGroupInput =
  typeof CapacityReservationGroupsListByResourceGroupInput.Type;

// Output Schema
export const CapacityReservationGroupsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => CapacityReservationGroupSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type CapacityReservationGroupsListByResourceGroupOutput =
  typeof CapacityReservationGroupsListByResourceGroupOutput.Type;

// The operation
/**
 * Lists all of the capacity reservation groups in the specified resource group. Use the nextLink property in the response to get the next page of capacity reservation groups.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $expand - The expand expression to apply on the operation. Based on the expand param(s) specified we return Virtual Machine or ScaleSet VM Instance or both resource Ids which are associated to capacity reservation group in the response.
 */
export const CapacityReservationGroupsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CapacityReservationGroupsListByResourceGroupInput,
    outputSchema: CapacityReservationGroupsListByResourceGroupOutput,
  }));
// Input Schema
export const CapacityReservationGroupsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(
      Schema.Literals([
        "virtualMachineScaleSetVMs/$ref",
        "virtualMachines/$ref",
      ]),
    ),
    resourceIdsOnly: Schema.optional(
      Schema.Literals([
        "CreatedInSubscription",
        "SharedWithSubscription",
        "All",
      ]),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/capacityReservationGroups",
      apiVersion: "2025-04-01",
    }),
  );
export type CapacityReservationGroupsListBySubscriptionInput =
  typeof CapacityReservationGroupsListBySubscriptionInput.Type;

// Output Schema
export const CapacityReservationGroupsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => CapacityReservationGroupSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type CapacityReservationGroupsListBySubscriptionOutput =
  typeof CapacityReservationGroupsListBySubscriptionOutput.Type;

// The operation
/**
 * Lists all of the capacity reservation groups in the subscription. Use the nextLink property in the response to get the next page of capacity reservation groups.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param $expand - The expand expression to apply on the operation. Based on the expand param(s) specified we return Virtual Machine or ScaleSet VM Instance or both resource Ids which are associated to capacity reservation group in the response.
 * @param resourceIdsOnly - The query option to fetch Capacity Reservation Group Resource Ids. <br> 'CreatedInSubscription' enables fetching Resource Ids for all capacity reservation group resources created in the subscription. <br> 'SharedWithSubscription' enables fetching Resource Ids for all capacity reservation group resources shared with the subscription. <br> 'All' enables fetching Resource Ids for all capacity reservation group resources shared with the subscription and created in the subscription.
 */
export const CapacityReservationGroupsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CapacityReservationGroupsListBySubscriptionInput,
    outputSchema: CapacityReservationGroupsListBySubscriptionOutput,
  }));
// Input Schema
export const CapacityReservationGroupsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    capacityReservationGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => CapacityReservationGroupPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/capacityReservationGroups/{capacityReservationGroupName}",
      apiVersion: "2025-04-01",
    }),
  );
export type CapacityReservationGroupsUpdateInput =
  typeof CapacityReservationGroupsUpdateInput.Type;

// Output Schema
export const CapacityReservationGroupsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => CapacityReservationGroupPropertiesSchema),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type CapacityReservationGroupsUpdateOutput =
  typeof CapacityReservationGroupsUpdateOutput.Type;

// The operation
/**
 * The operation to update a capacity reservation group. When updating a capacity reservation group, only tags and sharing profile may be modified.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param capacityReservationGroupName - The name of the capacity reservation group.
 */
export const CapacityReservationGroupsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CapacityReservationGroupsUpdateInput,
    outputSchema: CapacityReservationGroupsUpdateOutput,
  }));
// Input Schema
export const CapacityReservationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    capacityReservationGroupName: Schema.String.pipe(T.PathParam()),
    capacityReservationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => CapacityReservationPropertiesSchema),
    ),
    sku: Schema.suspend(() => SkuSchema),
    zones: Schema.optional(Schema.Array(Schema.String)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/capacityReservationGroups/{capacityReservationGroupName}/capacityReservations/{capacityReservationName}",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type CapacityReservationsCreateOrUpdateInput =
  typeof CapacityReservationsCreateOrUpdateInput.Type;

// Output Schema
export const CapacityReservationsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => CapacityReservationPropertiesSchema),
    ),
    sku: Schema.suspend(() => SkuSchema),
    zones: Schema.optional(Schema.Array(Schema.String)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type CapacityReservationsCreateOrUpdateOutput =
  typeof CapacityReservationsCreateOrUpdateOutput.Type;

// The operation
/**
 * The operation to create or update a capacity reservation. Please note some properties can be set only during capacity reservation creation. Please refer to https://aka.ms/CapacityReservation for more details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param capacityReservationGroupName - The name of the capacity reservation group.
 * @param capacityReservationName - The name of the capacity reservation.
 */
export const CapacityReservationsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CapacityReservationsCreateOrUpdateInput,
    outputSchema: CapacityReservationsCreateOrUpdateOutput,
  }));
// Input Schema
export const CapacityReservationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    capacityReservationGroupName: Schema.String.pipe(T.PathParam()),
    capacityReservationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/capacityReservationGroups/{capacityReservationGroupName}/capacityReservations/{capacityReservationName}",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type CapacityReservationsDeleteInput =
  typeof CapacityReservationsDeleteInput.Type;

// Output Schema
export const CapacityReservationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CapacityReservationsDeleteOutput =
  typeof CapacityReservationsDeleteOutput.Type;

// The operation
/**
 * The operation to delete a capacity reservation. This operation is allowed only when all the associated resources are disassociated from the capacity reservation. Please refer to https://aka.ms/CapacityReservation for more details. Note: Block capacity reservations cannot be deleted after it has been successfully allocated until the schedule end time.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param capacityReservationGroupName - The name of the capacity reservation group.
 * @param capacityReservationName - The name of the capacity reservation.
 */
export const CapacityReservationsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CapacityReservationsDeleteInput,
    outputSchema: CapacityReservationsDeleteOutput,
  }),
);
// Input Schema
export const CapacityReservationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    capacityReservationGroupName: Schema.String.pipe(T.PathParam()),
    capacityReservationName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.Literals(["instanceView"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/capacityReservationGroups/{capacityReservationGroupName}/capacityReservations/{capacityReservationName}",
      apiVersion: "2025-04-01",
    }),
  );
export type CapacityReservationsGetInput =
  typeof CapacityReservationsGetInput.Type;

// Output Schema
export const CapacityReservationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => CapacityReservationPropertiesSchema),
    ),
    sku: Schema.suspend(() => SkuSchema),
    zones: Schema.optional(Schema.Array(Schema.String)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type CapacityReservationsGetOutput =
  typeof CapacityReservationsGetOutput.Type;

// The operation
/**
 * The operation that retrieves information about the capacity reservation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param capacityReservationGroupName - The name of the capacity reservation group.
 * @param capacityReservationName - The name of the capacity reservation.
 * @param $expand - The expand expression to apply on the operation. 'InstanceView' retrieves a snapshot of the runtime properties of the capacity reservation that is managed by the platform and can change outside of control plane operations.
 */
export const CapacityReservationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CapacityReservationsGetInput,
    outputSchema: CapacityReservationsGetOutput,
  }),
);
// Input Schema
export const CapacityReservationsListByCapacityReservationGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    capacityReservationGroupName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(
      Schema.Literals([
        "virtualMachineScaleSetVMs/$ref",
        "virtualMachines/$ref",
      ]),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/capacityReservationGroups/{capacityReservationGroupName}/capacityReservations",
      apiVersion: "2025-04-01",
    }),
  );
export type CapacityReservationsListByCapacityReservationGroupInput =
  typeof CapacityReservationsListByCapacityReservationGroupInput.Type;

// Output Schema
export const CapacityReservationsListByCapacityReservationGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => CapacityReservationSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type CapacityReservationsListByCapacityReservationGroupOutput =
  typeof CapacityReservationsListByCapacityReservationGroupOutput.Type;

// The operation
/**
 * Lists all of the capacity reservations in the specified capacity reservation group. Use the nextLink property in the response to get the next page of capacity reservations.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param capacityReservationGroupName - The name of the capacity reservation group.
 * @param $expand - The expand expression to apply on the operation. Based on the expand param(s) specified we return Virtual Machine or ScaleSet VM Instance or both resource Ids which are associated to capacity reservation group in the response.
 */
export const CapacityReservationsListByCapacityReservationGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CapacityReservationsListByCapacityReservationGroupInput,
    outputSchema: CapacityReservationsListByCapacityReservationGroupOutput,
  }));
// Input Schema
export const CapacityReservationsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    capacityReservationGroupName: Schema.String.pipe(T.PathParam()),
    capacityReservationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => CapacityReservationPropertiesSchema),
    ),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/capacityReservationGroups/{capacityReservationGroupName}/capacityReservations/{capacityReservationName}",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type CapacityReservationsUpdateInput =
  typeof CapacityReservationsUpdateInput.Type;

// Output Schema
export const CapacityReservationsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => CapacityReservationPropertiesSchema),
    ),
    sku: Schema.suspend(() => SkuSchema),
    zones: Schema.optional(Schema.Array(Schema.String)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type CapacityReservationsUpdateOutput =
  typeof CapacityReservationsUpdateOutput.Type;

// The operation
/**
 * The operation to update a capacity reservation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param capacityReservationGroupName - The name of the capacity reservation group.
 * @param capacityReservationName - The name of the capacity reservation.
 */
export const CapacityReservationsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CapacityReservationsUpdateInput,
    outputSchema: CapacityReservationsUpdateOutput,
  }),
);
// Input Schema
export const ContainerServicesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerServiceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => ContainerServicePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/containerServices/{containerServiceName}",
      apiVersion: "2017-01-31",
      longRunning: {},
    }),
  );
export type ContainerServicesCreateOrUpdateInput =
  typeof ContainerServicesCreateOrUpdateInput.Type;

// Output Schema
export const ContainerServicesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ContainerServicePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
export type ContainerServicesCreateOrUpdateOutput =
  typeof ContainerServicesCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a container service.
 *
 * Creates or updates a container service with the specified configuration of orchestrator, masters, and agents.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param containerServiceName - The name of the container service in the specified subscription and resource group.
 */
export const ContainerServicesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ContainerServicesCreateOrUpdateInput,
    outputSchema: ContainerServicesCreateOrUpdateOutput,
  }));
// Input Schema
export const ContainerServicesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/containerServices/{containerServiceName}",
      apiVersion: "2017-01-31",
      longRunning: {},
    }),
  );
export type ContainerServicesDeleteInput =
  typeof ContainerServicesDeleteInput.Type;

// Output Schema
export const ContainerServicesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ContainerServicesDeleteOutput =
  typeof ContainerServicesDeleteOutput.Type;

// The operation
/**
 * Deletes the specified container service.
 *
 * Deletes the specified container service in the specified subscription and resource group. The operation does not delete other resources created as part of creating a container service, including storage accounts, VMs, and availability sets. All the other resources created with the container service are part of the same resource group and can be deleted individually.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param containerServiceName - The name of the container service in the specified subscription and resource group.
 */
export const ContainerServicesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ContainerServicesDeleteInput,
    outputSchema: ContainerServicesDeleteOutput,
  }),
);
// Input Schema
export const ContainerServicesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/containerServices/{containerServiceName}",
      apiVersion: "2017-01-31",
    }),
  );
export type ContainerServicesGetInput = typeof ContainerServicesGetInput.Type;

// Output Schema
export const ContainerServicesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ContainerServicePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
export type ContainerServicesGetOutput = typeof ContainerServicesGetOutput.Type;

// The operation
/**
 * Gets the properties of the specified container service.
 *
 * Gets the properties of the specified container service in the specified subscription and resource group. The operation returns the properties including state, orchestrator, number of masters and agents, and FQDNs of masters and agents.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param containerServiceName - The name of the container service in the specified subscription and resource group.
 */
export const ContainerServicesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ContainerServicesGetInput,
    outputSchema: ContainerServicesGetOutput,
  }),
);
// Input Schema
export const ContainerServicesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ContainerService/containerServices",
      apiVersion: "2017-01-31",
    }),
  );
export type ContainerServicesListInput = typeof ContainerServicesListInput.Type;

// Output Schema
export const ContainerServicesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => ContainerServiceSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ContainerServicesListOutput =
  typeof ContainerServicesListOutput.Type;

// The operation
/**
 * Gets a list of container services in the specified subscription.
 *
 * Gets a list of container services in the specified subscription. The operation returns properties of each container service including state, orchestrator, number of masters and agents, and FQDNs of masters and agents.
 */
export const ContainerServicesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ContainerServicesListInput,
    outputSchema: ContainerServicesListOutput,
  }),
);
// Input Schema
export const ContainerServicesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/containerServices",
      apiVersion: "2017-01-31",
    }),
  );
export type ContainerServicesListByResourceGroupInput =
  typeof ContainerServicesListByResourceGroupInput.Type;

// Output Schema
export const ContainerServicesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => ContainerServiceSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ContainerServicesListByResourceGroupOutput =
  typeof ContainerServicesListByResourceGroupOutput.Type;

// The operation
/**
 * Gets a list of container services in the specified resource group.
 *
 * Gets a list of container services in the specified subscription and resource group. The operation returns properties of each container service including state, orchestrator, number of masters and agents, and FQDNs of masters and agents.
 *
 * @param resourceGroupName - The name of the resource group.
 */
export const ContainerServicesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ContainerServicesListByResourceGroupInput,
    outputSchema: ContainerServicesListByResourceGroupOutput,
  }));
// Input Schema
export const DedicatedHostGroupsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hostGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => DedicatedHostGroupPropertiesSchema),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}",
      apiVersion: "2025-04-01",
    }),
  );
export type DedicatedHostGroupsCreateOrUpdateInput =
  typeof DedicatedHostGroupsCreateOrUpdateInput.Type;

// Output Schema
export const DedicatedHostGroupsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => DedicatedHostGroupPropertiesSchema),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type DedicatedHostGroupsCreateOrUpdateOutput =
  typeof DedicatedHostGroupsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update a dedicated host group. For details of Dedicated Host and Dedicated Host Groups please see [Dedicated Host Documentation] (https://go.microsoft.com/fwlink/?linkid=2082596)
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostGroupName - The name of the dedicated host group.
 */
export const DedicatedHostGroupsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DedicatedHostGroupsCreateOrUpdateInput,
    outputSchema: DedicatedHostGroupsCreateOrUpdateOutput,
  }));
// Input Schema
export const DedicatedHostGroupsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hostGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}",
      apiVersion: "2025-04-01",
    }),
  );
export type DedicatedHostGroupsDeleteInput =
  typeof DedicatedHostGroupsDeleteInput.Type;

// Output Schema
export const DedicatedHostGroupsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DedicatedHostGroupsDeleteOutput =
  typeof DedicatedHostGroupsDeleteOutput.Type;

// The operation
/**
 * Delete a dedicated host group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostGroupName - The name of the dedicated host group.
 */
export const DedicatedHostGroupsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DedicatedHostGroupsDeleteInput,
    outputSchema: DedicatedHostGroupsDeleteOutput,
  }),
);
// Input Schema
export const DedicatedHostGroupsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hostGroupName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(
      Schema.Literals(["instanceView", "userData", "resiliencyView"]),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}",
      apiVersion: "2025-04-01",
    }),
  );
export type DedicatedHostGroupsGetInput =
  typeof DedicatedHostGroupsGetInput.Type;

// Output Schema
export const DedicatedHostGroupsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => DedicatedHostGroupPropertiesSchema),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type DedicatedHostGroupsGetOutput =
  typeof DedicatedHostGroupsGetOutput.Type;

// The operation
/**
 * Retrieves information about a dedicated host group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostGroupName - The name of the dedicated host group.
 * @param $expand - The expand expression to apply on the operation. 'InstanceView' will retrieve the list of instance views of the dedicated hosts under the dedicated host group. 'UserData' is not supported for dedicated host group.
 */
export const DedicatedHostGroupsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DedicatedHostGroupsGetInput,
    outputSchema: DedicatedHostGroupsGetOutput,
  }),
);
// Input Schema
export const DedicatedHostGroupsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups",
      apiVersion: "2025-04-01",
    }),
  );
export type DedicatedHostGroupsListByResourceGroupInput =
  typeof DedicatedHostGroupsListByResourceGroupInput.Type;

// Output Schema
export const DedicatedHostGroupsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => DedicatedHostGroupSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type DedicatedHostGroupsListByResourceGroupOutput =
  typeof DedicatedHostGroupsListByResourceGroupOutput.Type;

// The operation
/**
 * Lists all of the dedicated host groups in the specified resource group. Use the nextLink property in the response to get the next page of dedicated host groups.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const DedicatedHostGroupsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DedicatedHostGroupsListByResourceGroupInput,
    outputSchema: DedicatedHostGroupsListByResourceGroupOutput,
  }));
// Input Schema
export const DedicatedHostGroupsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/hostGroups",
      apiVersion: "2025-04-01",
    }),
  );
export type DedicatedHostGroupsListBySubscriptionInput =
  typeof DedicatedHostGroupsListBySubscriptionInput.Type;

// Output Schema
export const DedicatedHostGroupsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => DedicatedHostGroupSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type DedicatedHostGroupsListBySubscriptionOutput =
  typeof DedicatedHostGroupsListBySubscriptionOutput.Type;

// The operation
/**
 * Lists all of the dedicated host groups in the subscription. Use the nextLink property in the response to get the next page of dedicated host groups.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DedicatedHostGroupsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DedicatedHostGroupsListBySubscriptionInput,
    outputSchema: DedicatedHostGroupsListBySubscriptionOutput,
  }));
// Input Schema
export const DedicatedHostGroupsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hostGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => DedicatedHostGroupPropertiesSchema),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}",
      apiVersion: "2025-04-01",
    }),
  );
export type DedicatedHostGroupsUpdateInput =
  typeof DedicatedHostGroupsUpdateInput.Type;

// Output Schema
export const DedicatedHostGroupsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => DedicatedHostGroupPropertiesSchema),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type DedicatedHostGroupsUpdateOutput =
  typeof DedicatedHostGroupsUpdateOutput.Type;

// The operation
/**
 * Update an dedicated host group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostGroupName - The name of the dedicated host group.
 */
export const DedicatedHostGroupsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DedicatedHostGroupsUpdateInput,
    outputSchema: DedicatedHostGroupsUpdateOutput,
  }),
);
// Input Schema
export const DedicatedHostsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hostGroupName: Schema.String.pipe(T.PathParam()),
    hostName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => DedicatedHostPropertiesSchema),
    ),
    sku: Schema.suspend(() => SkuSchema),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}/hosts/{hostName}",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type DedicatedHostsCreateOrUpdateInput =
  typeof DedicatedHostsCreateOrUpdateInput.Type;

// Output Schema
export const DedicatedHostsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => DedicatedHostPropertiesSchema),
    ),
    sku: Schema.suspend(() => SkuSchema),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type DedicatedHostsCreateOrUpdateOutput =
  typeof DedicatedHostsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update a dedicated host .
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostGroupName - The name of the dedicated host group.
 * @param hostName - The name of the dedicated host.
 */
export const DedicatedHostsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DedicatedHostsCreateOrUpdateInput,
    outputSchema: DedicatedHostsCreateOrUpdateOutput,
  }));
// Input Schema
export const DedicatedHostsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hostGroupName: Schema.String.pipe(T.PathParam()),
    hostName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}/hosts/{hostName}",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type DedicatedHostsDeleteInput = typeof DedicatedHostsDeleteInput.Type;

// Output Schema
export const DedicatedHostsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DedicatedHostsDeleteOutput = typeof DedicatedHostsDeleteOutput.Type;

// The operation
/**
 * Delete a dedicated host.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostGroupName - The name of the dedicated host group.
 * @param hostName - The name of the dedicated host.
 */
export const DedicatedHostsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DedicatedHostsDeleteInput,
    outputSchema: DedicatedHostsDeleteOutput,
  }),
);
// Input Schema
export const DedicatedHostsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hostGroupName: Schema.String.pipe(T.PathParam()),
    hostName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(
      Schema.Literals(["instanceView", "userData", "resiliencyView"]),
    ),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}/hosts/{hostName}",
    apiVersion: "2025-04-01",
  }),
);
export type DedicatedHostsGetInput = typeof DedicatedHostsGetInput.Type;

// Output Schema
export const DedicatedHostsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => DedicatedHostPropertiesSchema),
    ),
    sku: Schema.suspend(() => SkuSchema),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type DedicatedHostsGetOutput = typeof DedicatedHostsGetOutput.Type;

// The operation
/**
 * Retrieves information about a dedicated host.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostGroupName - The name of the dedicated host group.
 * @param hostName - The name of the dedicated host.
 * @param $expand - The expand expression to apply on the operation. 'InstanceView' will retrieve the list of instance views of the dedicated host. 'UserData' is not supported for dedicated host.
 */
export const DedicatedHostsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DedicatedHostsGetInput,
  outputSchema: DedicatedHostsGetOutput,
}));
// Input Schema
export const DedicatedHostsListAvailableSizesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hostGroupName: Schema.String.pipe(T.PathParam()),
    hostName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}/hosts/{hostName}/hostSizes",
      apiVersion: "2025-04-01",
    }),
  );
export type DedicatedHostsListAvailableSizesInput =
  typeof DedicatedHostsListAvailableSizesInput.Type;

// Output Schema
export const DedicatedHostsListAvailableSizesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(Schema.String)),
    nextLink: Schema.optional(Schema.String),
  });
export type DedicatedHostsListAvailableSizesOutput =
  typeof DedicatedHostsListAvailableSizesOutput.Type;

// The operation
/**
 * Lists all available dedicated host sizes to which the specified dedicated host can be resized. NOTE: The dedicated host sizes provided can be used to only scale up the existing dedicated host.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostGroupName - The name of the dedicated host group.
 * @param hostName - The name of the dedicated host.
 */
export const DedicatedHostsListAvailableSizes =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DedicatedHostsListAvailableSizesInput,
    outputSchema: DedicatedHostsListAvailableSizesOutput,
  }));
// Input Schema
export const DedicatedHostsListByHostGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hostGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}/hosts",
      apiVersion: "2025-04-01",
    }),
  );
export type DedicatedHostsListByHostGroupInput =
  typeof DedicatedHostsListByHostGroupInput.Type;

// Output Schema
export const DedicatedHostsListByHostGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => DedicatedHostSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type DedicatedHostsListByHostGroupOutput =
  typeof DedicatedHostsListByHostGroupOutput.Type;

// The operation
/**
 * Lists all of the dedicated hosts in the specified dedicated host group. Use the nextLink property in the response to get the next page of dedicated hosts.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostGroupName - The name of the dedicated host group.
 */
export const DedicatedHostsListByHostGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DedicatedHostsListByHostGroupInput,
    outputSchema: DedicatedHostsListByHostGroupOutput,
  }));
// Input Schema
export const DedicatedHostsRedeployInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hostGroupName: Schema.String.pipe(T.PathParam()),
    hostName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}/hosts/{hostName}/redeploy",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type DedicatedHostsRedeployInput =
  typeof DedicatedHostsRedeployInput.Type;

// Output Schema
export const DedicatedHostsRedeployOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DedicatedHostsRedeployOutput =
  typeof DedicatedHostsRedeployOutput.Type;

// The operation
/**
 * Redeploy the dedicated host. The operation will complete successfully once the dedicated host has migrated to a new node and is running. To determine the health of VMs deployed on the dedicated host after the redeploy check the Resource Health Center in the Azure Portal. Please refer to https://docs.microsoft.com/azure/service-health/resource-health-overview for more details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostGroupName - The name of the dedicated host group.
 * @param hostName - The name of the dedicated host.
 */
export const DedicatedHostsRedeploy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DedicatedHostsRedeployInput,
    outputSchema: DedicatedHostsRedeployOutput,
  }),
);
// Input Schema
export const DedicatedHostsRestartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hostGroupName: Schema.String.pipe(T.PathParam()),
    hostName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}/hosts/{hostName}/restart",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type DedicatedHostsRestartInput = typeof DedicatedHostsRestartInput.Type;

// Output Schema
export const DedicatedHostsRestartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DedicatedHostsRestartOutput =
  typeof DedicatedHostsRestartOutput.Type;

// The operation
/**
 * Restart the dedicated host. The operation will complete successfully once the dedicated host has restarted and is running. To determine the health of VMs deployed on the dedicated host after the restart check the Resource Health Center in the Azure Portal. Please refer to https://docs.microsoft.com/azure/service-health/resource-health-overview for more details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostGroupName - The name of the dedicated host group.
 * @param hostName - The name of the dedicated host.
 */
export const DedicatedHostsRestart = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DedicatedHostsRestartInput,
    outputSchema: DedicatedHostsRestartOutput,
  }),
);
// Input Schema
export const DedicatedHostsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hostGroupName: Schema.String.pipe(T.PathParam()),
    hostName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => DedicatedHostPropertiesSchema),
    ),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}/hosts/{hostName}",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type DedicatedHostsUpdateInput = typeof DedicatedHostsUpdateInput.Type;

// Output Schema
export const DedicatedHostsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => DedicatedHostPropertiesSchema),
    ),
    sku: Schema.suspend(() => SkuSchema),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type DedicatedHostsUpdateOutput = typeof DedicatedHostsUpdateOutput.Type;

// The operation
/**
 * Update a dedicated host .
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostGroupName - The name of the dedicated host group.
 * @param hostName - The name of the dedicated host.
 */
export const DedicatedHostsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DedicatedHostsUpdateInput,
    outputSchema: DedicatedHostsUpdateOutput,
  }),
);
// Input Schema
export const ImagesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    imageName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(Schema.suspend(() => ImagePropertiesSchema)),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.suspend(() => ExtendedLocationTypeSchema)),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/images/{imageName}",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type ImagesCreateOrUpdateInput = typeof ImagesCreateOrUpdateInput.Type;

// Output Schema
export const ImagesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => ImagePropertiesSchema)),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.suspend(() => ExtendedLocationTypeSchema)),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ImagesCreateOrUpdateOutput = typeof ImagesCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update an image.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param imageName - The name of the image.
 */
export const ImagesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ImagesCreateOrUpdateInput,
    outputSchema: ImagesCreateOrUpdateOutput,
  }),
);
// Input Schema
export const ImagesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  imageName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/images/{imageName}",
    apiVersion: "2025-04-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type ImagesDeleteInput = typeof ImagesDeleteInput.Type;

// Output Schema
export const ImagesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ImagesDeleteOutput = typeof ImagesDeleteOutput.Type;

// The operation
/**
 * Deletes an Image.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param imageName - The name of the image.
 */
export const ImagesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ImagesDeleteInput,
  outputSchema: ImagesDeleteOutput,
}));
// Input Schema
export const ImagesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  imageName: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/images/{imageName}",
    apiVersion: "2025-04-01",
  }),
);
export type ImagesGetInput = typeof ImagesGetInput.Type;

// Output Schema
export const ImagesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => ImagePropertiesSchema)),
  extendedLocation: Schema.optional(
    Schema.Struct({
      name: Schema.optional(Schema.String),
      type: Schema.optional(Schema.suspend(() => ExtendedLocationTypeSchema)),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type ImagesGetOutput = typeof ImagesGetOutput.Type;

// The operation
/**
 * Gets an image.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param imageName - The name of the image.
 * @param $expand - The expand expression to apply on the operation.
 */
export const ImagesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ImagesGetInput,
  outputSchema: ImagesGetOutput,
}));
// Input Schema
export const ImagesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/images",
    apiVersion: "2025-04-01",
  }),
);
export type ImagesListInput = typeof ImagesListInput.Type;

// Output Schema
export const ImagesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(Schema.suspend(() => ImageSchema)),
  nextLink: Schema.optional(Schema.String),
});
export type ImagesListOutput = typeof ImagesListOutput.Type;

// The operation
/**
 * Gets the list of Images in the subscription. Use nextLink property in the response to get the next page of Images. Do this till nextLink is null to fetch all the Images.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ImagesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ImagesListInput,
  outputSchema: ImagesListOutput,
}));
// Input Schema
export const ImagesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/images",
      apiVersion: "2025-04-01",
    }),
  );
export type ImagesListByResourceGroupInput =
  typeof ImagesListByResourceGroupInput.Type;

// Output Schema
export const ImagesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ImageSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ImagesListByResourceGroupOutput =
  typeof ImagesListByResourceGroupOutput.Type;

// The operation
/**
 * Gets the list of images under a resource group. Use nextLink property in the response to get the next page of Images. Do this till nextLink is null to fetch all the Images.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ImagesListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ImagesListByResourceGroupInput,
    outputSchema: ImagesListByResourceGroupOutput,
  }),
);
// Input Schema
export const ImagesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  imageName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(Schema.suspend(() => ImagePropertiesSchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/images/{imageName}",
    apiVersion: "2025-04-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type ImagesUpdateInput = typeof ImagesUpdateInput.Type;

// Output Schema
export const ImagesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => ImagePropertiesSchema)),
  extendedLocation: Schema.optional(
    Schema.Struct({
      name: Schema.optional(Schema.String),
      type: Schema.optional(Schema.suspend(() => ExtendedLocationTypeSchema)),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type ImagesUpdateOutput = typeof ImagesUpdateOutput.Type;

// The operation
/**
 * Update an image.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param imageName - The name of the image.
 */
export const ImagesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ImagesUpdateInput,
  outputSchema: ImagesUpdateOutput,
}));
// Input Schema
export const LogAnalyticsExportRequestRateByIntervalInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    intervalLength: Schema.suspend(() => IntervalInMinsSchema),
    blobContainerSasUri: Schema.String,
    fromTime: Schema.String,
    toTime: Schema.String,
    groupByThrottlePolicy: Schema.optional(Schema.Boolean),
    groupByOperationName: Schema.optional(Schema.Boolean),
    groupByResourceName: Schema.optional(Schema.Boolean),
    groupByClientApplicationId: Schema.optional(Schema.Boolean),
    groupByUserAgent: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/logAnalytics/apiAccess/getRequestRateByInterval",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type LogAnalyticsExportRequestRateByIntervalInput =
  typeof LogAnalyticsExportRequestRateByIntervalInput.Type;

// Output Schema
export const LogAnalyticsExportRequestRateByIntervalOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => LogAnalyticsOutputSchema)),
  });
export type LogAnalyticsExportRequestRateByIntervalOutput =
  typeof LogAnalyticsExportRequestRateByIntervalOutput.Type;

// The operation
/**
 * Export logs that show Api requests made by this subscription in the given time window to show throttling activities.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 */
export const LogAnalyticsExportRequestRateByInterval =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LogAnalyticsExportRequestRateByIntervalInput,
    outputSchema: LogAnalyticsExportRequestRateByIntervalOutput,
  }));
// Input Schema
export const LogAnalyticsExportThrottledRequestsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    blobContainerSasUri: Schema.String,
    fromTime: Schema.String,
    toTime: Schema.String,
    groupByThrottlePolicy: Schema.optional(Schema.Boolean),
    groupByOperationName: Schema.optional(Schema.Boolean),
    groupByResourceName: Schema.optional(Schema.Boolean),
    groupByClientApplicationId: Schema.optional(Schema.Boolean),
    groupByUserAgent: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/logAnalytics/apiAccess/getThrottledRequests",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type LogAnalyticsExportThrottledRequestsInput =
  typeof LogAnalyticsExportThrottledRequestsInput.Type;

// Output Schema
export const LogAnalyticsExportThrottledRequestsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => LogAnalyticsOutputSchema)),
  });
export type LogAnalyticsExportThrottledRequestsOutput =
  typeof LogAnalyticsExportThrottledRequestsOutput.Type;

// The operation
/**
 * Export logs that show total throttled Api requests for this subscription in the given time window.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 */
export const LogAnalyticsExportThrottledRequests =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LogAnalyticsExportThrottledRequestsInput,
    outputSchema: LogAnalyticsExportThrottledRequestsOutput,
  }));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Compute/operations",
    apiVersion: "2025-06-05",
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
export const ProximityPlacementGroupsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    proximityPlacementGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => ProximityPlacementGroupPropertiesSchema),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/proximityPlacementGroups/{proximityPlacementGroupName}",
      apiVersion: "2025-04-01",
    }),
  );
export type ProximityPlacementGroupsCreateOrUpdateInput =
  typeof ProximityPlacementGroupsCreateOrUpdateInput.Type;

// Output Schema
export const ProximityPlacementGroupsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ProximityPlacementGroupPropertiesSchema),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ProximityPlacementGroupsCreateOrUpdateOutput =
  typeof ProximityPlacementGroupsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update a proximity placement group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param proximityPlacementGroupName - The name of the proximity placement group.
 */
export const ProximityPlacementGroupsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProximityPlacementGroupsCreateOrUpdateInput,
    outputSchema: ProximityPlacementGroupsCreateOrUpdateOutput,
  }));
// Input Schema
export const ProximityPlacementGroupsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    proximityPlacementGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/proximityPlacementGroups/{proximityPlacementGroupName}",
      apiVersion: "2025-04-01",
    }),
  );
export type ProximityPlacementGroupsDeleteInput =
  typeof ProximityPlacementGroupsDeleteInput.Type;

// Output Schema
export const ProximityPlacementGroupsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ProximityPlacementGroupsDeleteOutput =
  typeof ProximityPlacementGroupsDeleteOutput.Type;

// The operation
/**
 * Delete a proximity placement group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param proximityPlacementGroupName - The name of the proximity placement group.
 */
export const ProximityPlacementGroupsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProximityPlacementGroupsDeleteInput,
    outputSchema: ProximityPlacementGroupsDeleteOutput,
  }));
// Input Schema
export const ProximityPlacementGroupsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    proximityPlacementGroupName: Schema.String.pipe(T.PathParam()),
    includeColocationStatus: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/proximityPlacementGroups/{proximityPlacementGroupName}",
      apiVersion: "2025-04-01",
    }),
  );
export type ProximityPlacementGroupsGetInput =
  typeof ProximityPlacementGroupsGetInput.Type;

// Output Schema
export const ProximityPlacementGroupsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ProximityPlacementGroupPropertiesSchema),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ProximityPlacementGroupsGetOutput =
  typeof ProximityPlacementGroupsGetOutput.Type;

// The operation
/**
 * Retrieves information about a proximity placement group .
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param proximityPlacementGroupName - The name of the proximity placement group.
 * @param includeColocationStatus - includeColocationStatus=true enables fetching the colocation status of all the resources in the proximity placement group.
 */
export const ProximityPlacementGroupsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProximityPlacementGroupsGetInput,
    outputSchema: ProximityPlacementGroupsGetOutput,
  }),
);
// Input Schema
export const ProximityPlacementGroupsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/proximityPlacementGroups",
      apiVersion: "2025-04-01",
    }),
  );
export type ProximityPlacementGroupsListByResourceGroupInput =
  typeof ProximityPlacementGroupsListByResourceGroupInput.Type;

// Output Schema
export const ProximityPlacementGroupsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ProximityPlacementGroupSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ProximityPlacementGroupsListByResourceGroupOutput =
  typeof ProximityPlacementGroupsListByResourceGroupOutput.Type;

// The operation
/**
 * Lists all proximity placement groups in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ProximityPlacementGroupsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProximityPlacementGroupsListByResourceGroupInput,
    outputSchema: ProximityPlacementGroupsListByResourceGroupOutput,
  }));
// Input Schema
export const ProximityPlacementGroupsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/proximityPlacementGroups",
      apiVersion: "2025-04-01",
    }),
  );
export type ProximityPlacementGroupsListBySubscriptionInput =
  typeof ProximityPlacementGroupsListBySubscriptionInput.Type;

// Output Schema
export const ProximityPlacementGroupsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ProximityPlacementGroupSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ProximityPlacementGroupsListBySubscriptionOutput =
  typeof ProximityPlacementGroupsListBySubscriptionOutput.Type;

// The operation
/**
 * Lists all proximity placement groups in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ProximityPlacementGroupsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProximityPlacementGroupsListBySubscriptionInput,
    outputSchema: ProximityPlacementGroupsListBySubscriptionOutput,
  }));
// Input Schema
export const ProximityPlacementGroupsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    proximityPlacementGroupName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/proximityPlacementGroups/{proximityPlacementGroupName}",
      apiVersion: "2025-04-01",
    }),
  );
export type ProximityPlacementGroupsUpdateInput =
  typeof ProximityPlacementGroupsUpdateInput.Type;

// Output Schema
export const ProximityPlacementGroupsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ProximityPlacementGroupPropertiesSchema),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ProximityPlacementGroupsUpdateOutput =
  typeof ProximityPlacementGroupsUpdateOutput.Type;

// The operation
/**
 * Update a proximity placement group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param proximityPlacementGroupName - The name of the proximity placement group.
 */
export const ProximityPlacementGroupsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProximityPlacementGroupsUpdateInput,
    outputSchema: ProximityPlacementGroupsUpdateOutput,
  }));
// Input Schema
export const RestorePointCollectionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    restorePointCollectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => RestorePointCollectionPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections/{restorePointCollectionName}",
      apiVersion: "2025-04-01",
    }),
  );
export type RestorePointCollectionsCreateOrUpdateInput =
  typeof RestorePointCollectionsCreateOrUpdateInput.Type;

// Output Schema
export const RestorePointCollectionsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => RestorePointCollectionPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type RestorePointCollectionsCreateOrUpdateOutput =
  typeof RestorePointCollectionsCreateOrUpdateOutput.Type;

// The operation
/**
 * The operation to create or update the restore point collection. Please refer to https://aka.ms/RestorePoints for more details. When updating a restore point collection, only tags may be modified.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param restorePointCollectionName - The name of the restore point collection.
 */
export const RestorePointCollectionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RestorePointCollectionsCreateOrUpdateInput,
    outputSchema: RestorePointCollectionsCreateOrUpdateOutput,
  }));
// Input Schema
export const RestorePointCollectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    restorePointCollectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections/{restorePointCollectionName}",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type RestorePointCollectionsDeleteInput =
  typeof RestorePointCollectionsDeleteInput.Type;

// Output Schema
export const RestorePointCollectionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RestorePointCollectionsDeleteOutput =
  typeof RestorePointCollectionsDeleteOutput.Type;

// The operation
/**
 * The operation to delete the restore point collection. This operation will also delete all the contained restore points.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param restorePointCollectionName - The name of the restore point collection.
 */
export const RestorePointCollectionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RestorePointCollectionsDeleteInput,
    outputSchema: RestorePointCollectionsDeleteOutput,
  }));
// Input Schema
export const RestorePointCollectionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    restorePointCollectionName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.Literals(["restorePoints"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections/{restorePointCollectionName}",
      apiVersion: "2025-04-01",
    }),
  );
export type RestorePointCollectionsGetInput =
  typeof RestorePointCollectionsGetInput.Type;

// Output Schema
export const RestorePointCollectionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => RestorePointCollectionPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type RestorePointCollectionsGetOutput =
  typeof RestorePointCollectionsGetOutput.Type;

// The operation
/**
 * The operation to get the restore point collection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param restorePointCollectionName - The name of the restore point collection.
 * @param $expand - The expand expression to apply on the operation. If expand=restorePoints, server will return all contained restore points in the restorePointCollection.
 */
export const RestorePointCollectionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RestorePointCollectionsGetInput,
    outputSchema: RestorePointCollectionsGetOutput,
  }),
);
// Input Schema
export const RestorePointCollectionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections",
      apiVersion: "2025-04-01",
    }),
  );
export type RestorePointCollectionsListInput =
  typeof RestorePointCollectionsListInput.Type;

// Output Schema
export const RestorePointCollectionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => RestorePointCollectionSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type RestorePointCollectionsListOutput =
  typeof RestorePointCollectionsListOutput.Type;

// The operation
/**
 * Gets the list of restore point collections in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const RestorePointCollectionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RestorePointCollectionsListInput,
    outputSchema: RestorePointCollectionsListOutput,
  }),
);
// Input Schema
export const RestorePointCollectionsListAllInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/restorePointCollections",
      apiVersion: "2025-04-01",
    }),
  );
export type RestorePointCollectionsListAllInput =
  typeof RestorePointCollectionsListAllInput.Type;

// Output Schema
export const RestorePointCollectionsListAllOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => RestorePointCollectionSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type RestorePointCollectionsListAllOutput =
  typeof RestorePointCollectionsListAllOutput.Type;

// The operation
/**
 * Gets the list of restore point collections in the subscription. Use nextLink property in the response to get the next page of restore point collections. Do this till nextLink is not null to fetch all the restore point collections.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const RestorePointCollectionsListAll =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RestorePointCollectionsListAllInput,
    outputSchema: RestorePointCollectionsListAllOutput,
  }));
// Input Schema
export const RestorePointCollectionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    restorePointCollectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => RestorePointCollectionPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections/{restorePointCollectionName}",
      apiVersion: "2025-04-01",
    }),
  );
export type RestorePointCollectionsUpdateInput =
  typeof RestorePointCollectionsUpdateInput.Type;

// Output Schema
export const RestorePointCollectionsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => RestorePointCollectionPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type RestorePointCollectionsUpdateOutput =
  typeof RestorePointCollectionsUpdateOutput.Type;

// The operation
/**
 * The operation to update the restore point collection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param restorePointCollectionName - The name of the restore point collection.
 */
export const RestorePointCollectionsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RestorePointCollectionsUpdateInput,
    outputSchema: RestorePointCollectionsUpdateOutput,
  }));
// Input Schema
export const RestorePointsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    restorePointCollectionName: Schema.String.pipe(T.PathParam()),
    restorePointName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => RestorePointPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections/{restorePointCollectionName}/restorePoints/{restorePointName}",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type RestorePointsCreateInput = typeof RestorePointsCreateInput.Type;

// Output Schema
export const RestorePointsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => RestorePointPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type RestorePointsCreateOutput = typeof RestorePointsCreateOutput.Type;

// The operation
/**
 * The operation to create the restore point. Updating properties of an existing restore point is not allowed
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param restorePointCollectionName - The name of the restore point collection.
 * @param restorePointName - The name of the restore point.
 */
export const RestorePointsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RestorePointsCreateInput,
  outputSchema: RestorePointsCreateOutput,
}));
// Input Schema
export const RestorePointsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    restorePointCollectionName: Schema.String.pipe(T.PathParam()),
    restorePointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections/{restorePointCollectionName}/restorePoints/{restorePointName}",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type RestorePointsDeleteInput = typeof RestorePointsDeleteInput.Type;

// Output Schema
export const RestorePointsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RestorePointsDeleteOutput = typeof RestorePointsDeleteOutput.Type;

// The operation
/**
 * The operation to delete the restore point.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param restorePointCollectionName - The name of the restore point collection.
 * @param restorePointName - The name of the restore point.
 */
export const RestorePointsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RestorePointsDeleteInput,
  outputSchema: RestorePointsDeleteOutput,
}));
// Input Schema
export const RestorePointsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  restorePointCollectionName: Schema.String.pipe(T.PathParam()),
  restorePointName: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.Literals(["instanceView"])),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections/{restorePointCollectionName}/restorePoints/{restorePointName}",
    apiVersion: "2025-04-01",
  }),
);
export type RestorePointsGetInput = typeof RestorePointsGetInput.Type;

// Output Schema
export const RestorePointsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.optional(
      Schema.suspend(() => RestorePointPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
export type RestorePointsGetOutput = typeof RestorePointsGetOutput.Type;

// The operation
/**
 * The operation to get the restore point.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param restorePointCollectionName - The name of the restore point collection.
 * @param restorePointName - The name of the restore point.
 * @param $expand - The expand expression to apply on the operation. 'InstanceView' retrieves information about the run-time state of a restore point.
 */
export const RestorePointsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RestorePointsGetInput,
  outputSchema: RestorePointsGetOutput,
}));
// Input Schema
export const SpotPlacementScoresGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/placementScores/spot",
      apiVersion: "2025-06-05",
    }),
  );
export type SpotPlacementScoresGetInput =
  typeof SpotPlacementScoresGetInput.Type;

// Output Schema
export const SpotPlacementScoresGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => DiagnosticPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SpotPlacementScoresGetOutput =
  typeof SpotPlacementScoresGetOutput.Type;

// The operation
/**
 * Gets Spot Placement Scores metadata.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const SpotPlacementScoresGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SpotPlacementScoresGetInput,
    outputSchema: SpotPlacementScoresGetOutput,
  }),
);
// Input Schema
export const SpotPlacementScoresPostInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    desiredLocations: Schema.optional(Schema.Array(Schema.String)),
    desiredSizes: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceSizeSchema)),
    ),
    desiredCount: Schema.optional(Schema.Number),
    availabilityZones: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/placementScores/spot/generate",
      apiVersion: "2025-06-05",
    }),
  );
export type SpotPlacementScoresPostInput =
  typeof SpotPlacementScoresPostInput.Type;

// Output Schema
export const SpotPlacementScoresPostOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    desiredLocations: Schema.optional(Schema.Array(Schema.String)),
    desiredSizes: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceSizeSchema)),
    ),
    desiredCount: Schema.optional(Schema.Number),
    availabilityZones: Schema.optional(Schema.Boolean),
    placementScores: Schema.optional(
      Schema.Array(Schema.suspend(() => PlacementScoreSchema)),
    ),
  });
export type SpotPlacementScoresPostOutput =
  typeof SpotPlacementScoresPostOutput.Type;

// The operation
/**
 * Generates placement scores for Spot VM skus.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const SpotPlacementScoresPost = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SpotPlacementScoresPostInput,
    outputSchema: SpotPlacementScoresPostOutput,
  }),
);
// Input Schema
export const SshPublicKeysCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sshPublicKeyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => SshPublicKeyResourcePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/sshPublicKeys/{sshPublicKeyName}",
      apiVersion: "2025-04-01",
    }),
  );
export type SshPublicKeysCreateInput = typeof SshPublicKeysCreateInput.Type;

// Output Schema
export const SshPublicKeysCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SshPublicKeyResourcePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SshPublicKeysCreateOutput = typeof SshPublicKeysCreateOutput.Type;

// The operation
/**
 * Creates a new SSH public key resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sshPublicKeyName - The name of the SSH public key.
 */
export const SshPublicKeysCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SshPublicKeysCreateInput,
  outputSchema: SshPublicKeysCreateOutput,
}));
// Input Schema
export const SshPublicKeysDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sshPublicKeyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/sshPublicKeys/{sshPublicKeyName}",
      apiVersion: "2025-04-01",
    }),
  );
export type SshPublicKeysDeleteInput = typeof SshPublicKeysDeleteInput.Type;

// Output Schema
export const SshPublicKeysDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SshPublicKeysDeleteOutput = typeof SshPublicKeysDeleteOutput.Type;

// The operation
/**
 * Delete an SSH public key.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sshPublicKeyName - The name of the SSH public key.
 */
export const SshPublicKeysDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SshPublicKeysDeleteInput,
  outputSchema: SshPublicKeysDeleteOutput,
}));
// Input Schema
export const SshPublicKeysGenerateKeyPairInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sshPublicKeyName: Schema.String.pipe(T.PathParam()),
    encryptionType: Schema.optional(
      Schema.suspend(() => SshEncryptionTypesSchema),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/sshPublicKeys/{sshPublicKeyName}/generateKeyPair",
      apiVersion: "2025-04-01",
    }),
  );
export type SshPublicKeysGenerateKeyPairInput =
  typeof SshPublicKeysGenerateKeyPairInput.Type;

// Output Schema
export const SshPublicKeysGenerateKeyPairOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privateKey: SensitiveOutputString,
    publicKey: Schema.String,
    id: Schema.String,
  });
export type SshPublicKeysGenerateKeyPairOutput =
  typeof SshPublicKeysGenerateKeyPairOutput.Type;

// The operation
/**
 * Generates and returns a public/private key pair and populates the SSH public key resource with the public key. The length of the key will be 3072 bits. This operation can only be performed once per SSH public key resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sshPublicKeyName - The name of the SSH public key.
 */
export const SshPublicKeysGenerateKeyPair =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SshPublicKeysGenerateKeyPairInput,
    outputSchema: SshPublicKeysGenerateKeyPairOutput,
  }));
// Input Schema
export const SshPublicKeysGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  sshPublicKeyName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/sshPublicKeys/{sshPublicKeyName}",
    apiVersion: "2025-04-01",
  }),
);
export type SshPublicKeysGetInput = typeof SshPublicKeysGetInput.Type;

// Output Schema
export const SshPublicKeysGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.optional(
      Schema.suspend(() => SshPublicKeyResourcePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
export type SshPublicKeysGetOutput = typeof SshPublicKeysGetOutput.Type;

// The operation
/**
 * Retrieves information about an SSH public key.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sshPublicKeyName - The name of the SSH public key.
 */
export const SshPublicKeysGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SshPublicKeysGetInput,
  outputSchema: SshPublicKeysGetOutput,
}));
// Input Schema
export const SshPublicKeysListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/sshPublicKeys",
      apiVersion: "2025-04-01",
    }),
  );
export type SshPublicKeysListByResourceGroupInput =
  typeof SshPublicKeysListByResourceGroupInput.Type;

// Output Schema
export const SshPublicKeysListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => SshPublicKeyResourceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type SshPublicKeysListByResourceGroupOutput =
  typeof SshPublicKeysListByResourceGroupOutput.Type;

// The operation
/**
 * Lists all of the SSH public keys in the specified resource group. Use the nextLink property in the response to get the next page of SSH public keys.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const SshPublicKeysListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SshPublicKeysListByResourceGroupInput,
    outputSchema: SshPublicKeysListByResourceGroupOutput,
  }));
// Input Schema
export const SshPublicKeysListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/sshPublicKeys",
      apiVersion: "2025-04-01",
    }),
  );
export type SshPublicKeysListBySubscriptionInput =
  typeof SshPublicKeysListBySubscriptionInput.Type;

// Output Schema
export const SshPublicKeysListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => SshPublicKeyResourceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type SshPublicKeysListBySubscriptionOutput =
  typeof SshPublicKeysListBySubscriptionOutput.Type;

// The operation
/**
 * Lists all of the SSH public keys in the subscription. Use the nextLink property in the response to get the next page of SSH public keys.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const SshPublicKeysListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SshPublicKeysListBySubscriptionInput,
    outputSchema: SshPublicKeysListBySubscriptionOutput,
  }));
// Input Schema
export const SshPublicKeysUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sshPublicKeyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => SshPublicKeyResourcePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/sshPublicKeys/{sshPublicKeyName}",
      apiVersion: "2025-04-01",
    }),
  );
export type SshPublicKeysUpdateInput = typeof SshPublicKeysUpdateInput.Type;

// Output Schema
export const SshPublicKeysUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SshPublicKeyResourcePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SshPublicKeysUpdateOutput = typeof SshPublicKeysUpdateOutput.Type;

// The operation
/**
 * Updates a new SSH public key resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sshPublicKeyName - The name of the SSH public key.
 */
export const SshPublicKeysUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SshPublicKeysUpdateInput,
  outputSchema: SshPublicKeysUpdateOutput,
}));
// Input Schema
export const UsageListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/usages",
    apiVersion: "2025-04-01",
  }),
);
export type UsageListInput = typeof UsageListInput.Type;

// Output Schema
export const UsageListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(Schema.suspend(() => UsageSchema)),
  nextLink: Schema.optional(Schema.String),
});
export type UsageListOutput = typeof UsageListOutput.Type;

// The operation
/**
 * Gets, for the specified location, the current compute resource usage information as well as the limits for compute resources under the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 */
export const UsageList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UsageListInput,
  outputSchema: UsageListOutput,
}));
// Input Schema
export const VirtualMachineExtensionImagesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    type: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers/{publisherName}/artifacttypes/vmextension/types/{type}/versions/{version}",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineExtensionImagesGetInput =
  typeof VirtualMachineExtensionImagesGetInput.Type;

// Output Schema
export const VirtualMachineExtensionImagesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineExtensionImagePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type VirtualMachineExtensionImagesGetOutput =
  typeof VirtualMachineExtensionImagesGetOutput.Type;

// The operation
/**
 * Gets a virtual machine extension image.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 */
export const VirtualMachineExtensionImagesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineExtensionImagesGetInput,
    outputSchema: VirtualMachineExtensionImagesGetOutput,
  }));
// Input Schema
export const VirtualMachineExtensionImagesListTypesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers/{publisherName}/artifacttypes/vmextension/types",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineExtensionImagesListTypesInput =
  typeof VirtualMachineExtensionImagesListTypesInput.Type;

// Output Schema
export const VirtualMachineExtensionImagesListTypesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => VirtualMachineExtensionImageSchema),
  );
export type VirtualMachineExtensionImagesListTypesOutput =
  typeof VirtualMachineExtensionImagesListTypesOutput.Type;

// The operation
/**
 * Gets a list of virtual machine extension image types.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 */
export const VirtualMachineExtensionImagesListTypes =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineExtensionImagesListTypesInput,
    outputSchema: VirtualMachineExtensionImagesListTypesOutput,
  }));
// Input Schema
export const VirtualMachineExtensionImagesListVersionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    type: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers/{publisherName}/artifacttypes/vmextension/types/{type}/versions",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineExtensionImagesListVersionsInput =
  typeof VirtualMachineExtensionImagesListVersionsInput.Type;

// Output Schema
export const VirtualMachineExtensionImagesListVersionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => VirtualMachineExtensionImageSchema),
  );
export type VirtualMachineExtensionImagesListVersionsOutput =
  typeof VirtualMachineExtensionImagesListVersionsOutput.Type;

// The operation
/**
 * Gets a list of virtual machine extension image versions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param $filter - The filter to apply on the operation.
 */
export const VirtualMachineExtensionImagesListVersions =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineExtensionImagesListVersionsInput,
    outputSchema: VirtualMachineExtensionImagesListVersionsOutput,
  }));
// Input Schema
export const VirtualMachineExtensionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
    vmExtensionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineExtensionPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/extensions/{vmExtensionName}",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineExtensionsCreateOrUpdateInput =
  typeof VirtualMachineExtensionsCreateOrUpdateInput.Type;

// Output Schema
export const VirtualMachineExtensionsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineExtensionPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type VirtualMachineExtensionsCreateOrUpdateOutput =
  typeof VirtualMachineExtensionsCreateOrUpdateOutput.Type;

// The operation
/**
 * The operation to create or update the extension.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 * @param vmExtensionName - The name of the virtual machine extension.
 */
export const VirtualMachineExtensionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineExtensionsCreateOrUpdateInput,
    outputSchema: VirtualMachineExtensionsCreateOrUpdateOutput,
  }));
// Input Schema
export const VirtualMachineExtensionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
    vmExtensionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/extensions/{vmExtensionName}",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineExtensionsDeleteInput =
  typeof VirtualMachineExtensionsDeleteInput.Type;

// Output Schema
export const VirtualMachineExtensionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineExtensionsDeleteOutput =
  typeof VirtualMachineExtensionsDeleteOutput.Type;

// The operation
/**
 * The operation to delete the extension.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 * @param vmExtensionName - The name of the virtual machine extension.
 */
export const VirtualMachineExtensionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineExtensionsDeleteInput,
    outputSchema: VirtualMachineExtensionsDeleteOutput,
  }));
// Input Schema
export const VirtualMachineExtensionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
    vmExtensionName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/extensions/{vmExtensionName}",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineExtensionsGetInput =
  typeof VirtualMachineExtensionsGetInput.Type;

// Output Schema
export const VirtualMachineExtensionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineExtensionPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type VirtualMachineExtensionsGetOutput =
  typeof VirtualMachineExtensionsGetOutput.Type;

// The operation
/**
 * The operation to get the extension.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 * @param vmExtensionName - The name of the virtual machine extension.
 * @param $expand - The expand expression to apply on the operation.
 */
export const VirtualMachineExtensionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachineExtensionsGetInput,
    outputSchema: VirtualMachineExtensionsGetOutput,
  }),
);
// Input Schema
export const VirtualMachineExtensionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/extensions",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineExtensionsListInput =
  typeof VirtualMachineExtensionsListInput.Type;

// Output Schema
export const VirtualMachineExtensionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => VirtualMachineExtensionSchema)),
    ),
  });
export type VirtualMachineExtensionsListOutput =
  typeof VirtualMachineExtensionsListOutput.Type;

// The operation
/**
 * The operation to get all extensions of a Virtual Machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 * @param $expand - The expand expression to apply on the operation.
 */
export const VirtualMachineExtensionsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineExtensionsListInput,
    outputSchema: VirtualMachineExtensionsListOutput,
  }));
// Input Schema
export const VirtualMachineExtensionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
    vmExtensionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineExtensionUpdatePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/extensions/{vmExtensionName}",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineExtensionsUpdateInput =
  typeof VirtualMachineExtensionsUpdateInput.Type;

// Output Schema
export const VirtualMachineExtensionsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineExtensionPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type VirtualMachineExtensionsUpdateOutput =
  typeof VirtualMachineExtensionsUpdateOutput.Type;

// The operation
/**
 * The operation to update the extension.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 * @param vmExtensionName - The name of the virtual machine extension.
 */
export const VirtualMachineExtensionsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineExtensionsUpdateInput,
    outputSchema: VirtualMachineExtensionsUpdateOutput,
  }));
// Input Schema
export const VirtualMachineImagesEdgeZoneGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.PathParam()),
    edgeZone: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    offer: Schema.String.pipe(T.PathParam()),
    skus: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/edgeZones/{edgeZone}/publishers/{publisherName}/artifacttypes/vmimage/offers/{offer}/skus/{skus}/versions/{version}",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineImagesEdgeZoneGetInput =
  typeof VirtualMachineImagesEdgeZoneGetInput.Type;

// Output Schema
export const VirtualMachineImagesEdgeZoneGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineImagePropertiesSchema),
    ),
    name: Schema.String,
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.suspend(() => ExtendedLocationTypeSchema)),
      }),
    ),
    id: Schema.optional(Schema.String),
  });
export type VirtualMachineImagesEdgeZoneGetOutput =
  typeof VirtualMachineImagesEdgeZoneGetOutput.Type;

// The operation
/**
 * Gets a virtual machine image in an edge zone.
 *
 * @param api-version - The API version to use for this operation.
 * @param location - The name of Azure region.
 * @param edgeZone - The name of the edge zone.
 * @param publisherName - A valid image publisher.
 * @param offer - A valid image publisher offer.
 * @param skus - A valid image SKU.
 * @param version - A valid image SKU version.
 * @param subscriptionId - The ID of the target subscription.
 */
export const VirtualMachineImagesEdgeZoneGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineImagesEdgeZoneGetInput,
    outputSchema: VirtualMachineImagesEdgeZoneGetOutput,
  }));
// Input Schema
export const VirtualMachineImagesEdgeZoneListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    edgeZone: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    offer: Schema.String.pipe(T.PathParam()),
    skus: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/edgeZones/{edgeZone}/publishers/{publisherName}/artifacttypes/vmimage/offers/{offer}/skus/{skus}/versions",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineImagesEdgeZoneListInput =
  typeof VirtualMachineImagesEdgeZoneListInput.Type;

// Output Schema
export const VirtualMachineImagesEdgeZoneListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => VirtualMachineImageResourceSchema),
  );
export type VirtualMachineImagesEdgeZoneListOutput =
  typeof VirtualMachineImagesEdgeZoneListOutput.Type;

// The operation
/**
 * Gets a list of all virtual machine image versions for the specified location, edge zone, publisher, offer, and SKU.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param edgeZone - The name of the edge zone.
 * @param publisherName - A valid image publisher.
 * @param offer - A valid image publisher offer.
 * @param skus - A valid image SKU.
 * @param $expand - The expand expression to apply on the operation.
 * @param $top - An integer value specifying the number of images to return that matches supplied values.
 * @param $orderby - Specifies the order of the results returned. Formatted as an OData query.
 */
export const VirtualMachineImagesEdgeZoneList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineImagesEdgeZoneListInput,
    outputSchema: VirtualMachineImagesEdgeZoneListOutput,
  }));
// Input Schema
export const VirtualMachineImagesEdgeZoneListOffersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    edgeZone: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/edgeZones/{edgeZone}/publishers/{publisherName}/artifacttypes/vmimage/offers",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineImagesEdgeZoneListOffersInput =
  typeof VirtualMachineImagesEdgeZoneListOffersInput.Type;

// Output Schema
export const VirtualMachineImagesEdgeZoneListOffersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => VirtualMachineImageResourceSchema),
  );
export type VirtualMachineImagesEdgeZoneListOffersOutput =
  typeof VirtualMachineImagesEdgeZoneListOffersOutput.Type;

// The operation
/**
 * Gets a list of virtual machine image offers for the specified location, edge zone and publisher.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param edgeZone - The name of the edge zone.
 * @param publisherName - A valid image publisher.
 */
export const VirtualMachineImagesEdgeZoneListOffers =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineImagesEdgeZoneListOffersInput,
    outputSchema: VirtualMachineImagesEdgeZoneListOffersOutput,
  }));
// Input Schema
export const VirtualMachineImagesEdgeZoneListPublishersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    edgeZone: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/edgeZones/{edgeZone}/publishers",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineImagesEdgeZoneListPublishersInput =
  typeof VirtualMachineImagesEdgeZoneListPublishersInput.Type;

// Output Schema
export const VirtualMachineImagesEdgeZoneListPublishersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => VirtualMachineImageResourceSchema),
  );
export type VirtualMachineImagesEdgeZoneListPublishersOutput =
  typeof VirtualMachineImagesEdgeZoneListPublishersOutput.Type;

// The operation
/**
 * Gets a list of virtual machine image publishers for the specified Azure location and edge zone.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param edgeZone - The name of the edge zone.
 */
export const VirtualMachineImagesEdgeZoneListPublishers =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineImagesEdgeZoneListPublishersInput,
    outputSchema: VirtualMachineImagesEdgeZoneListPublishersOutput,
  }));
// Input Schema
export const VirtualMachineImagesEdgeZoneListSkusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    edgeZone: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    offer: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/edgeZones/{edgeZone}/publishers/{publisherName}/artifacttypes/vmimage/offers/{offer}/skus",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineImagesEdgeZoneListSkusInput =
  typeof VirtualMachineImagesEdgeZoneListSkusInput.Type;

// Output Schema
export const VirtualMachineImagesEdgeZoneListSkusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => VirtualMachineImageResourceSchema),
  );
export type VirtualMachineImagesEdgeZoneListSkusOutput =
  typeof VirtualMachineImagesEdgeZoneListSkusOutput.Type;

// The operation
/**
 * Gets a list of virtual machine image SKUs for the specified location, edge zone, publisher, and offer.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param edgeZone - The name of the edge zone.
 * @param publisherName - A valid image publisher.
 * @param offer - A valid image publisher offer.
 */
export const VirtualMachineImagesEdgeZoneListSkus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineImagesEdgeZoneListSkusInput,
    outputSchema: VirtualMachineImagesEdgeZoneListSkusOutput,
  }));
// Input Schema
export const VirtualMachineImagesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    offer: Schema.String.pipe(T.PathParam()),
    skus: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers/{publisherName}/artifacttypes/vmimage/offers/{offer}/skus/{skus}/versions/{version}",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineImagesGetInput =
  typeof VirtualMachineImagesGetInput.Type;

// Output Schema
export const VirtualMachineImagesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineImagePropertiesSchema),
    ),
    name: Schema.String,
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.suspend(() => ExtendedLocationTypeSchema)),
      }),
    ),
    id: Schema.optional(Schema.String),
  });
export type VirtualMachineImagesGetOutput =
  typeof VirtualMachineImagesGetOutput.Type;

// The operation
/**
 * Gets a virtual machine image.
 *
 * @param api-version - The API version to use for this operation.
 * @param location - The name of Azure region.
 * @param publisherName - A valid image publisher.
 * @param offer - A valid image publisher offer.
 * @param skus - A valid image SKU.
 * @param version - A valid image SKU version.
 * @param subscriptionId - The ID of the target subscription.
 */
export const VirtualMachineImagesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachineImagesGetInput,
    outputSchema: VirtualMachineImagesGetOutput,
  }),
);
// Input Schema
export const VirtualMachineImagesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    offer: Schema.String.pipe(T.PathParam()),
    skus: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers/{publisherName}/artifacttypes/vmimage/offers/{offer}/skus/{skus}/versions",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineImagesListInput =
  typeof VirtualMachineImagesListInput.Type;

// Output Schema
export const VirtualMachineImagesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => VirtualMachineImageResourceSchema),
  );
export type VirtualMachineImagesListOutput =
  typeof VirtualMachineImagesListOutput.Type;

// The operation
/**
 * Gets a list of all virtual machine image versions for the specified location, publisher, offer, and SKU.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param publisherName - A valid image publisher.
 * @param offer - A valid image publisher offer.
 * @param skus - A valid image SKU.
 * @param $expand - The expand expression to apply on the operation.
 */
export const VirtualMachineImagesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachineImagesListInput,
    outputSchema: VirtualMachineImagesListOutput,
  }),
);
// Input Schema
export const VirtualMachineImagesListByEdgeZoneInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    edgeZone: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/edgeZones/{edgeZone}/vmimages",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineImagesListByEdgeZoneInput =
  typeof VirtualMachineImagesListByEdgeZoneInput.Type;

// Output Schema
export const VirtualMachineImagesListByEdgeZoneOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => VirtualMachineImageResourceSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type VirtualMachineImagesListByEdgeZoneOutput =
  typeof VirtualMachineImagesListByEdgeZoneOutput.Type;

// The operation
/**
 * Gets a list of all virtual machine image versions for the specified edge zone
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param edgeZone - The name of the edge zone.
 */
export const VirtualMachineImagesListByEdgeZone =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineImagesListByEdgeZoneInput,
    outputSchema: VirtualMachineImagesListByEdgeZoneOutput,
  }));
// Input Schema
export const VirtualMachineImagesListOffersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers/{publisherName}/artifacttypes/vmimage/offers",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineImagesListOffersInput =
  typeof VirtualMachineImagesListOffersInput.Type;

// Output Schema
export const VirtualMachineImagesListOffersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => VirtualMachineImageResourceSchema),
  );
export type VirtualMachineImagesListOffersOutput =
  typeof VirtualMachineImagesListOffersOutput.Type;

// The operation
/**
 * Gets a list of virtual machine image offers for the specified location and publisher.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param publisherName - A valid image publisher.
 */
export const VirtualMachineImagesListOffers =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineImagesListOffersInput,
    outputSchema: VirtualMachineImagesListOffersOutput,
  }));
// Input Schema
export const VirtualMachineImagesListPublishersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineImagesListPublishersInput =
  typeof VirtualMachineImagesListPublishersInput.Type;

// Output Schema
export const VirtualMachineImagesListPublishersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => VirtualMachineImageResourceSchema),
  );
export type VirtualMachineImagesListPublishersOutput =
  typeof VirtualMachineImagesListPublishersOutput.Type;

// The operation
/**
 * Gets a list of virtual machine image publishers for the specified Azure location.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 */
export const VirtualMachineImagesListPublishers =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineImagesListPublishersInput,
    outputSchema: VirtualMachineImagesListPublishersOutput,
  }));
// Input Schema
export const VirtualMachineImagesListSkusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    offer: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers/{publisherName}/artifacttypes/vmimage/offers/{offer}/skus",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineImagesListSkusInput =
  typeof VirtualMachineImagesListSkusInput.Type;

// Output Schema
export const VirtualMachineImagesListSkusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => VirtualMachineImageResourceSchema),
  );
export type VirtualMachineImagesListSkusOutput =
  typeof VirtualMachineImagesListSkusOutput.Type;

// The operation
/**
 * Gets a list of virtual machine image SKUs for the specified location, publisher, and offer.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param publisherName - A valid image publisher.
 * @param offer - A valid image publisher offer.
 */
export const VirtualMachineImagesListSkus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineImagesListSkusInput,
    outputSchema: VirtualMachineImagesListSkusOutput,
  }));
// Input Schema
export const VirtualMachineRunCommandsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
    runCommandName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineRunCommandPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/runCommands/{runCommandName}",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineRunCommandsCreateOrUpdateInput =
  typeof VirtualMachineRunCommandsCreateOrUpdateInput.Type;

// Output Schema
export const VirtualMachineRunCommandsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineRunCommandPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type VirtualMachineRunCommandsCreateOrUpdateOutput =
  typeof VirtualMachineRunCommandsCreateOrUpdateOutput.Type;

// The operation
/**
 * The operation to create or update the run command.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the VirtualMachine
 * @param runCommandName - The name of the VirtualMachineRunCommand
 */
export const VirtualMachineRunCommandsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineRunCommandsCreateOrUpdateInput,
    outputSchema: VirtualMachineRunCommandsCreateOrUpdateOutput,
  }));
// Input Schema
export const VirtualMachineRunCommandsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
    runCommandName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/runCommands/{runCommandName}",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineRunCommandsDeleteInput =
  typeof VirtualMachineRunCommandsDeleteInput.Type;

// Output Schema
export const VirtualMachineRunCommandsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineRunCommandsDeleteOutput =
  typeof VirtualMachineRunCommandsDeleteOutput.Type;

// The operation
/**
 * The operation to delete the run command.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the VirtualMachine
 * @param runCommandName - The name of the VirtualMachineRunCommand
 */
export const VirtualMachineRunCommandsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineRunCommandsDeleteInput,
    outputSchema: VirtualMachineRunCommandsDeleteOutput,
  }));
// Input Schema
export const VirtualMachineRunCommandsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.PathParam()),
    commandId: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/runCommands/{commandId}",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineRunCommandsGetInput =
  typeof VirtualMachineRunCommandsGetInput.Type;

// Output Schema
export const VirtualMachineRunCommandsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    script: Schema.Array(Schema.String),
    parameters: Schema.optional(
      Schema.Array(Schema.suspend(() => RunCommandParameterDefinitionSchema)),
    ),
    $schema: Schema.String,
    id: Schema.String,
    osType: Schema.suspend(() => Common_OperatingSystemTypesSchema),
    label: Schema.String,
    description: Schema.String,
  });
export type VirtualMachineRunCommandsGetOutput =
  typeof VirtualMachineRunCommandsGetOutput.Type;

// The operation
/**
 * Gets specific run command for a subscription in a location.
 *
 * @param api-version - The API version to use for this operation.
 * @param location - The name of Azure region.
 * @param commandId - Specifies a commandId of predefined built-in script. Command IDs available for Linux are listed at https://aka.ms/RunCommandManagedLinux#available-commands, Windows at https://aka.ms/RunCommandManagedWindows#available-commands.
 * @param subscriptionId - The ID of the target subscription.
 */
export const VirtualMachineRunCommandsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineRunCommandsGetInput,
    outputSchema: VirtualMachineRunCommandsGetOutput,
  }));
// Input Schema
export const VirtualMachineRunCommandsGetByVirtualMachineInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
    runCommandName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/runCommands/{runCommandName}",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineRunCommandsGetByVirtualMachineInput =
  typeof VirtualMachineRunCommandsGetByVirtualMachineInput.Type;

// Output Schema
export const VirtualMachineRunCommandsGetByVirtualMachineOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineRunCommandPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type VirtualMachineRunCommandsGetByVirtualMachineOutput =
  typeof VirtualMachineRunCommandsGetByVirtualMachineOutput.Type;

// The operation
/**
 * The operation to get the run command.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the VirtualMachine
 * @param runCommandName - The name of the VirtualMachineRunCommand
 * @param $expand - The expand expression to apply on the operation.
 */
export const VirtualMachineRunCommandsGetByVirtualMachine =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineRunCommandsGetByVirtualMachineInput,
    outputSchema: VirtualMachineRunCommandsGetByVirtualMachineOutput,
  }));
// Input Schema
export const VirtualMachineRunCommandsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/runCommands",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineRunCommandsListInput =
  typeof VirtualMachineRunCommandsListInput.Type;

// Output Schema
export const VirtualMachineRunCommandsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => RunCommandDocumentBaseSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type VirtualMachineRunCommandsListOutput =
  typeof VirtualMachineRunCommandsListOutput.Type;

// The operation
/**
 * Lists all available run commands for a subscription in a location.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 */
export const VirtualMachineRunCommandsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineRunCommandsListInput,
    outputSchema: VirtualMachineRunCommandsListOutput,
  }));
// Input Schema
export const VirtualMachineRunCommandsListByVirtualMachineInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/runCommands",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineRunCommandsListByVirtualMachineInput =
  typeof VirtualMachineRunCommandsListByVirtualMachineInput.Type;

// Output Schema
export const VirtualMachineRunCommandsListByVirtualMachineOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => VirtualMachineRunCommandSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type VirtualMachineRunCommandsListByVirtualMachineOutput =
  typeof VirtualMachineRunCommandsListByVirtualMachineOutput.Type;

// The operation
/**
 * The operation to get all run commands of a Virtual Machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the VirtualMachine
 * @param $expand - The expand expression to apply on the operation.
 */
export const VirtualMachineRunCommandsListByVirtualMachine =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineRunCommandsListByVirtualMachineInput,
    outputSchema: VirtualMachineRunCommandsListByVirtualMachineOutput,
  }));
// Input Schema
export const VirtualMachineRunCommandsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
    runCommandName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineRunCommandPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/runCommands/{runCommandName}",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineRunCommandsUpdateInput =
  typeof VirtualMachineRunCommandsUpdateInput.Type;

// Output Schema
export const VirtualMachineRunCommandsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineRunCommandPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type VirtualMachineRunCommandsUpdateOutput =
  typeof VirtualMachineRunCommandsUpdateOutput.Type;

// The operation
/**
 * The operation to update the run command.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the VirtualMachine
 * @param runCommandName - The name of the VirtualMachineRunCommand
 */
export const VirtualMachineRunCommandsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineRunCommandsUpdateInput,
    outputSchema: VirtualMachineRunCommandsUpdateOutput,
  }));
// Input Schema
export const VirtualMachinesAssessPatchesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/assessPatches",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachinesAssessPatchesInput =
  typeof VirtualMachinesAssessPatchesInput.Type;

// Output Schema
export const VirtualMachinesAssessPatchesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.suspend(() => PatchOperationStatusSchema)),
    assessmentActivityId: Schema.optional(Schema.String),
    rebootPending: Schema.optional(Schema.Boolean),
    criticalAndSecurityPatchCount: Schema.optional(Schema.Number),
    otherPatchCount: Schema.optional(Schema.Number),
    startDateTime: Schema.optional(Schema.String),
    availablePatches: Schema.optional(
      Schema.Array(
        Schema.suspend(() => VirtualMachineSoftwarePatchPropertiesSchema),
      ),
    ),
    error: Schema.optional(
      Schema.Struct({
        details: Schema.optional(
          Schema.Array(Schema.suspend(() => ApiErrorBaseSchema)),
        ),
        innererror: Schema.optional(Schema.suspend(() => InnerErrorSchema)),
        code: Schema.optional(Schema.String),
        target: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
  });
export type VirtualMachinesAssessPatchesOutput =
  typeof VirtualMachinesAssessPatchesOutput.Type;

// The operation
/**
 * Assess patches on the VM.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 */
export const VirtualMachinesAssessPatches =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachinesAssessPatchesInput,
    outputSchema: VirtualMachinesAssessPatchesOutput,
  }));
// Input Schema
export const VirtualMachinesAttachDetachDataDisksInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
    dataDisksToAttach: Schema.optional(
      Schema.Array(Schema.suspend(() => DataDisksToAttachSchema)),
    ),
    dataDisksToDetach: Schema.optional(
      Schema.Array(Schema.suspend(() => DataDisksToDetachSchema)),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/attachDetachDataDisks",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachinesAttachDetachDataDisksInput =
  typeof VirtualMachinesAttachDetachDataDisksInput.Type;

// Output Schema
export const VirtualMachinesAttachDetachDataDisksOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageReference: Schema.optional(Schema.suspend(() => ImageReferenceSchema)),
    osDisk: Schema.optional(Schema.suspend(() => OSDiskSchema)),
    dataDisks: Schema.optional(
      Schema.Array(Schema.suspend(() => DataDiskSchema)),
    ),
    diskControllerType: Schema.optional(
      Schema.suspend(() => DiskControllerTypesSchema),
    ),
    alignRegionalDisksToVMZone: Schema.optional(Schema.Boolean),
  });
export type VirtualMachinesAttachDetachDataDisksOutput =
  typeof VirtualMachinesAttachDetachDataDisksOutput.Type;

// The operation
/**
 * Attach and detach data disks to/from the virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 */
export const VirtualMachinesAttachDetachDataDisks =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachinesAttachDetachDataDisksInput,
    outputSchema: VirtualMachinesAttachDetachDataDisksOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetExtensionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    vmssExtensionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetExtensionPropertiesSchema),
    ),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/extensions/{vmssExtensionName}",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetExtensionsCreateOrUpdateInput =
  typeof VirtualMachineScaleSetExtensionsCreateOrUpdateInput.Type;

// Output Schema
export const VirtualMachineScaleSetExtensionsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetExtensionPropertiesSchema),
    ),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  });
export type VirtualMachineScaleSetExtensionsCreateOrUpdateOutput =
  typeof VirtualMachineScaleSetExtensionsCreateOrUpdateOutput.Type;

// The operation
/**
 * The operation to create or update an extension.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 * @param vmssExtensionName - The name of the VM scale set extension.
 */
export const VirtualMachineScaleSetExtensionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetExtensionsCreateOrUpdateInput,
    outputSchema: VirtualMachineScaleSetExtensionsCreateOrUpdateOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetExtensionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    vmssExtensionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/extensions/{vmssExtensionName}",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetExtensionsDeleteInput =
  typeof VirtualMachineScaleSetExtensionsDeleteInput.Type;

// Output Schema
export const VirtualMachineScaleSetExtensionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineScaleSetExtensionsDeleteOutput =
  typeof VirtualMachineScaleSetExtensionsDeleteOutput.Type;

// The operation
/**
 * The operation to delete the extension.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 * @param vmssExtensionName - The name of the VM scale set extension.
 */
export const VirtualMachineScaleSetExtensionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetExtensionsDeleteInput,
    outputSchema: VirtualMachineScaleSetExtensionsDeleteOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetExtensionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    vmssExtensionName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/extensions/{vmssExtensionName}",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineScaleSetExtensionsGetInput =
  typeof VirtualMachineScaleSetExtensionsGetInput.Type;

// Output Schema
export const VirtualMachineScaleSetExtensionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetExtensionPropertiesSchema),
    ),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  });
export type VirtualMachineScaleSetExtensionsGetOutput =
  typeof VirtualMachineScaleSetExtensionsGetOutput.Type;

// The operation
/**
 * The operation to get the extension.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 * @param vmssExtensionName - The name of the VM scale set extension.
 * @param $expand - The expand expression to apply on the operation.
 */
export const VirtualMachineScaleSetExtensionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetExtensionsGetInput,
    outputSchema: VirtualMachineScaleSetExtensionsGetOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetExtensionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/extensions",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineScaleSetExtensionsListInput =
  typeof VirtualMachineScaleSetExtensionsListInput.Type;

// Output Schema
export const VirtualMachineScaleSetExtensionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.suspend(() => VirtualMachineScaleSetExtensionSchema),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type VirtualMachineScaleSetExtensionsListOutput =
  typeof VirtualMachineScaleSetExtensionsListOutput.Type;

// The operation
/**
 * Gets a list of all extensions in a VM scale set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 */
export const VirtualMachineScaleSetExtensionsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetExtensionsListInput,
    outputSchema: VirtualMachineScaleSetExtensionsListOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetExtensionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    vmssExtensionName: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetExtensionPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/extensions/{vmssExtensionName}",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetExtensionsUpdateInput =
  typeof VirtualMachineScaleSetExtensionsUpdateInput.Type;

// Output Schema
export const VirtualMachineScaleSetExtensionsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetExtensionPropertiesSchema),
    ),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  });
export type VirtualMachineScaleSetExtensionsUpdateOutput =
  typeof VirtualMachineScaleSetExtensionsUpdateOutput.Type;

// The operation
/**
 * The operation to update an extension.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 * @param vmssExtensionName - The name of the VM scale set extension.
 */
export const VirtualMachineScaleSetExtensionsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetExtensionsUpdateInput,
    outputSchema: VirtualMachineScaleSetExtensionsUpdateOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetRollingUpgradesCancelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/rollingUpgrades/cancel",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetRollingUpgradesCancelInput =
  typeof VirtualMachineScaleSetRollingUpgradesCancelInput.Type;

// Output Schema
export const VirtualMachineScaleSetRollingUpgradesCancelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineScaleSetRollingUpgradesCancelOutput =
  typeof VirtualMachineScaleSetRollingUpgradesCancelOutput.Type;

// The operation
/**
 * Cancels the current virtual machine scale set rolling upgrade.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 */
export const VirtualMachineScaleSetRollingUpgradesCancel =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetRollingUpgradesCancelInput,
    outputSchema: VirtualMachineScaleSetRollingUpgradesCancelOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetRollingUpgradesGetLatestInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/rollingUpgrades/latest",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineScaleSetRollingUpgradesGetLatestInput =
  typeof VirtualMachineScaleSetRollingUpgradesGetLatestInput.Type;

// Output Schema
export const VirtualMachineScaleSetRollingUpgradesGetLatestOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => RollingUpgradeStatusInfoPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type VirtualMachineScaleSetRollingUpgradesGetLatestOutput =
  typeof VirtualMachineScaleSetRollingUpgradesGetLatestOutput.Type;

// The operation
/**
 * Gets the status of the latest virtual machine scale set rolling upgrade.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 */
export const VirtualMachineScaleSetRollingUpgradesGetLatest =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetRollingUpgradesGetLatestInput,
    outputSchema: VirtualMachineScaleSetRollingUpgradesGetLatestOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetRollingUpgradesStartExtensionUpgradeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/extensionRollingUpgrade",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetRollingUpgradesStartExtensionUpgradeInput =
  typeof VirtualMachineScaleSetRollingUpgradesStartExtensionUpgradeInput.Type;

// Output Schema
export const VirtualMachineScaleSetRollingUpgradesStartExtensionUpgradeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineScaleSetRollingUpgradesStartExtensionUpgradeOutput =
  typeof VirtualMachineScaleSetRollingUpgradesStartExtensionUpgradeOutput.Type;

// The operation
/**
 * Starts a rolling upgrade to move all extensions for all virtual machine scale set instances to the latest available extension version. Instances which are already running the latest extension versions are not affected.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 */
export const VirtualMachineScaleSetRollingUpgradesStartExtensionUpgrade =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      VirtualMachineScaleSetRollingUpgradesStartExtensionUpgradeInput,
    outputSchema:
      VirtualMachineScaleSetRollingUpgradesStartExtensionUpgradeOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetRollingUpgradesStartOSUpgradeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/osRollingUpgrade",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetRollingUpgradesStartOSUpgradeInput =
  typeof VirtualMachineScaleSetRollingUpgradesStartOSUpgradeInput.Type;

// Output Schema
export const VirtualMachineScaleSetRollingUpgradesStartOSUpgradeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineScaleSetRollingUpgradesStartOSUpgradeOutput =
  typeof VirtualMachineScaleSetRollingUpgradesStartOSUpgradeOutput.Type;

// The operation
/**
 * Starts a rolling upgrade to move all virtual machine scale set instances to the latest available Platform Image OS version. Instances which are already running the latest available OS version are not affected.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 */
export const VirtualMachineScaleSetRollingUpgradesStartOSUpgrade =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetRollingUpgradesStartOSUpgradeInput,
    outputSchema: VirtualMachineScaleSetRollingUpgradesStartOSUpgradeOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetsApproveRollingUpgradeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    instanceIds: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/approveRollingUpgrade",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetsApproveRollingUpgradeInput =
  typeof VirtualMachineScaleSetsApproveRollingUpgradeInput.Type;

// Output Schema
export const VirtualMachineScaleSetsApproveRollingUpgradeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineScaleSetsApproveRollingUpgradeOutput =
  typeof VirtualMachineScaleSetsApproveRollingUpgradeOutput.Type;

// The operation
/**
 * Approve upgrade on deferred rolling upgrades for OS disks in the virtual machines in a VM scale set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 */
export const VirtualMachineScaleSetsApproveRollingUpgrade =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetsApproveRollingUpgradeInput,
    outputSchema: VirtualMachineScaleSetsApproveRollingUpgradeOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetsConvertToSinglePlacementGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    activePlacementGroupId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/convertToSinglePlacementGroup",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineScaleSetsConvertToSinglePlacementGroupInput =
  typeof VirtualMachineScaleSetsConvertToSinglePlacementGroupInput.Type;

// Output Schema
export const VirtualMachineScaleSetsConvertToSinglePlacementGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineScaleSetsConvertToSinglePlacementGroupOutput =
  typeof VirtualMachineScaleSetsConvertToSinglePlacementGroupOutput.Type;

// The operation
/**
 * Converts SinglePlacementGroup property to false for a existing virtual machine scale set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 */
export const VirtualMachineScaleSetsConvertToSinglePlacementGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetsConvertToSinglePlacementGroupInput,
    outputSchema: VirtualMachineScaleSetsConvertToSinglePlacementGroupOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    plan: Schema.optional(Schema.suspend(() => PlanSchema)),
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetPropertiesSchema),
    ),
    identity: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetIdentitySchema),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.suspend(() => ExtendedLocationTypeSchema)),
      }),
    ),
    etag: Schema.optional(Schema.String),
    placement: Schema.optional(Schema.suspend(() => PlacementSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetsCreateOrUpdateInput =
  typeof VirtualMachineScaleSetsCreateOrUpdateInput.Type;

// Output Schema
export const VirtualMachineScaleSetsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    plan: Schema.optional(Schema.suspend(() => PlanSchema)),
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetPropertiesSchema),
    ),
    identity: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetIdentitySchema),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.suspend(() => ExtendedLocationTypeSchema)),
      }),
    ),
    etag: Schema.optional(Schema.String),
    placement: Schema.optional(Schema.suspend(() => PlacementSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type VirtualMachineScaleSetsCreateOrUpdateOutput =
  typeof VirtualMachineScaleSetsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update a VM scale set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing record set. Other values will result in error from server as they are not supported.
 */
export const VirtualMachineScaleSetsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetsCreateOrUpdateInput,
    outputSchema: VirtualMachineScaleSetsCreateOrUpdateOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetsDeallocateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    hibernate: Schema.optional(Schema.Boolean),
    instanceIds: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/deallocate",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetsDeallocateInput =
  typeof VirtualMachineScaleSetsDeallocateInput.Type;

// Output Schema
export const VirtualMachineScaleSetsDeallocateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineScaleSetsDeallocateOutput =
  typeof VirtualMachineScaleSetsDeallocateOutput.Type;

// The operation
/**
 * Deallocates specific virtual machines in a VM scale set. Shuts down the virtual machines and releases the compute resources. You are not billed for the compute resources that this virtual machine scale set deallocates.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 * @param hibernate - Optional parameter to hibernate a virtual machine from the VM scale set. (This feature is available for VMSS with Flexible OrchestrationMode only)
 */
export const VirtualMachineScaleSetsDeallocate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetsDeallocateInput,
    outputSchema: VirtualMachineScaleSetsDeallocateOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    forceDeletion: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetsDeleteInput =
  typeof VirtualMachineScaleSetsDeleteInput.Type;

// Output Schema
export const VirtualMachineScaleSetsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineScaleSetsDeleteOutput =
  typeof VirtualMachineScaleSetsDeleteOutput.Type;

// The operation
/**
 * Deletes a VM scale set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 * @param forceDeletion - Optional parameter to force delete a VM scale set. (Feature in Preview)
 */
export const VirtualMachineScaleSetsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetsDeleteInput,
    outputSchema: VirtualMachineScaleSetsDeleteOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetsDeleteInstancesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    forceDeletion: Schema.optional(Schema.Boolean),
    instanceIds: Schema.Array(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/delete",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetsDeleteInstancesInput =
  typeof VirtualMachineScaleSetsDeleteInstancesInput.Type;

// Output Schema
export const VirtualMachineScaleSetsDeleteInstancesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineScaleSetsDeleteInstancesOutput =
  typeof VirtualMachineScaleSetsDeleteInstancesOutput.Type;

// The operation
/**
 * Deletes virtual machines in a VM scale set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 * @param forceDeletion - Optional parameter to force delete virtual machines from the VM scale set. (Feature in Preview)
 */
export const VirtualMachineScaleSetsDeleteInstances =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetsDeleteInstancesInput,
    outputSchema: VirtualMachineScaleSetsDeleteInstancesOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetsForceRecoveryServiceFabricPlatformUpdateDomainWalkInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    platformUpdateDomain: Schema.Number,
    zone: Schema.optional(Schema.String),
    placementGroupId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/forceRecoveryServiceFabricPlatformUpdateDomainWalk",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineScaleSetsForceRecoveryServiceFabricPlatformUpdateDomainWalkInput =
  typeof VirtualMachineScaleSetsForceRecoveryServiceFabricPlatformUpdateDomainWalkInput.Type;

// Output Schema
export const VirtualMachineScaleSetsForceRecoveryServiceFabricPlatformUpdateDomainWalkOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    walkPerformed: Schema.optional(Schema.Boolean),
    nextPlatformUpdateDomain: Schema.optional(Schema.Number),
  });
export type VirtualMachineScaleSetsForceRecoveryServiceFabricPlatformUpdateDomainWalkOutput =
  typeof VirtualMachineScaleSetsForceRecoveryServiceFabricPlatformUpdateDomainWalkOutput.Type;

// The operation
/**
 * Manual platform update domain walk to update virtual machines in a service fabric virtual machine scale set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 * @param platformUpdateDomain - The platform update domain for which a manual recovery walk is requested
 * @param zone - The zone in which the manual recovery walk is requested for cross zone virtual machine scale set
 * @param placementGroupId - The placement group id for which the manual recovery walk is requested.
 */
export const VirtualMachineScaleSetsForceRecoveryServiceFabricPlatformUpdateDomainWalk =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      VirtualMachineScaleSetsForceRecoveryServiceFabricPlatformUpdateDomainWalkInput,
    outputSchema:
      VirtualMachineScaleSetsForceRecoveryServiceFabricPlatformUpdateDomainWalkOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.Literals(["userData"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineScaleSetsGetInput =
  typeof VirtualMachineScaleSetsGetInput.Type;

// Output Schema
export const VirtualMachineScaleSetsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    plan: Schema.optional(Schema.suspend(() => PlanSchema)),
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetPropertiesSchema),
    ),
    identity: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetIdentitySchema),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.suspend(() => ExtendedLocationTypeSchema)),
      }),
    ),
    etag: Schema.optional(Schema.String),
    placement: Schema.optional(Schema.suspend(() => PlacementSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type VirtualMachineScaleSetsGetOutput =
  typeof VirtualMachineScaleSetsGetOutput.Type;

// The operation
/**
 * Display information about a virtual machine scale set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 * @param $expand - The expand expression to apply on the operation. 'UserData' retrieves the UserData property of the VM scale set that was provided by the user during the VM scale set Create/Update operation
 */
export const VirtualMachineScaleSetsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachineScaleSetsGetInput,
    outputSchema: VirtualMachineScaleSetsGetOutput,
  }),
);
// Input Schema
export const VirtualMachineScaleSetsGetInstanceViewInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/instanceView",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineScaleSetsGetInstanceViewInput =
  typeof VirtualMachineScaleSetsGetInstanceViewInput.Type;

// Output Schema
export const VirtualMachineScaleSetsGetInstanceViewOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachine: Schema.optional(
      Schema.suspend(
        () => VirtualMachineScaleSetInstanceViewStatusesSummarySchema,
      ),
    ),
    extensions: Schema.optional(
      Schema.Array(
        Schema.suspend(() => VirtualMachineScaleSetVMExtensionsSummarySchema),
      ),
    ),
    statuses: Schema.optional(
      Schema.Array(Schema.suspend(() => InstanceViewStatusSchema)),
    ),
    orchestrationServices: Schema.optional(
      Schema.Array(Schema.suspend(() => OrchestrationServiceSummarySchema)),
    ),
  });
export type VirtualMachineScaleSetsGetInstanceViewOutput =
  typeof VirtualMachineScaleSetsGetInstanceViewOutput.Type;

// The operation
/**
 * Gets the status of a VM scale set instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 */
export const VirtualMachineScaleSetsGetInstanceView =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetsGetInstanceViewInput,
    outputSchema: VirtualMachineScaleSetsGetInstanceViewOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetsGetOSUpgradeHistoryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/osUpgradeHistory",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineScaleSetsGetOSUpgradeHistoryInput =
  typeof VirtualMachineScaleSetsGetOSUpgradeHistoryInput.Type;

// Output Schema
export const VirtualMachineScaleSetsGetOSUpgradeHistoryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.suspend(() => UpgradeOperationHistoricalStatusInfoSchema),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type VirtualMachineScaleSetsGetOSUpgradeHistoryOutput =
  typeof VirtualMachineScaleSetsGetOSUpgradeHistoryOutput.Type;

// The operation
/**
 * Gets list of OS upgrades on a VM scale set instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 */
export const VirtualMachineScaleSetsGetOSUpgradeHistory =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetsGetOSUpgradeHistoryInput,
    outputSchema: VirtualMachineScaleSetsGetOSUpgradeHistoryOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineScaleSetsListInput =
  typeof VirtualMachineScaleSetsListInput.Type;

// Output Schema
export const VirtualMachineScaleSetsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => VirtualMachineScaleSetSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type VirtualMachineScaleSetsListOutput =
  typeof VirtualMachineScaleSetsListOutput.Type;

// The operation
/**
 * Gets a list of all VM scale sets under a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const VirtualMachineScaleSetsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachineScaleSetsListInput,
    outputSchema: VirtualMachineScaleSetsListOutput,
  }),
);
// Input Schema
export const VirtualMachineScaleSetsListAllInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/virtualMachineScaleSets",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineScaleSetsListAllInput =
  typeof VirtualMachineScaleSetsListAllInput.Type;

// Output Schema
export const VirtualMachineScaleSetsListAllOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => VirtualMachineScaleSetSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type VirtualMachineScaleSetsListAllOutput =
  typeof VirtualMachineScaleSetsListAllOutput.Type;

// The operation
/**
 * Gets a list of all VM Scale Sets in the subscription, regardless of the associated resource group. Use nextLink property in the response to get the next page of VM Scale Sets. Do this till nextLink is null to fetch all the VM Scale Sets.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const VirtualMachineScaleSetsListAll =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetsListAllInput,
    outputSchema: VirtualMachineScaleSetsListAllOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetsListByLocationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/virtualMachineScaleSets",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineScaleSetsListByLocationInput =
  typeof VirtualMachineScaleSetsListByLocationInput.Type;

// Output Schema
export const VirtualMachineScaleSetsListByLocationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => VirtualMachineScaleSetSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type VirtualMachineScaleSetsListByLocationOutput =
  typeof VirtualMachineScaleSetsListByLocationOutput.Type;

// The operation
/**
 * Gets all the VM scale sets under the specified subscription for the specified location.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 */
export const VirtualMachineScaleSetsListByLocation =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetsListByLocationInput,
    outputSchema: VirtualMachineScaleSetsListByLocationOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetsListSkusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/skus",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineScaleSetsListSkusInput =
  typeof VirtualMachineScaleSetsListSkusInput.Type;

// Output Schema
export const VirtualMachineScaleSetsListSkusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => VirtualMachineScaleSetSkuSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type VirtualMachineScaleSetsListSkusOutput =
  typeof VirtualMachineScaleSetsListSkusOutput.Type;

// The operation
/**
 * Gets a list of SKUs available for your VM scale set, including the minimum and maximum VM instances allowed for each SKU.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 */
export const VirtualMachineScaleSetsListSkus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetsListSkusInput,
    outputSchema: VirtualMachineScaleSetsListSkusOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetsPerformMaintenanceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    instanceIds: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/performMaintenance",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetsPerformMaintenanceInput =
  typeof VirtualMachineScaleSetsPerformMaintenanceInput.Type;

// Output Schema
export const VirtualMachineScaleSetsPerformMaintenanceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineScaleSetsPerformMaintenanceOutput =
  typeof VirtualMachineScaleSetsPerformMaintenanceOutput.Type;

// The operation
/**
 * Perform maintenance on one or more virtual machines in a VM scale set. Operation on instances which are not eligible for perform maintenance will be failed. Please refer to best practices for more details: https://docs.microsoft.com/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-maintenance-notifications
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 */
export const VirtualMachineScaleSetsPerformMaintenance =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetsPerformMaintenanceInput,
    outputSchema: VirtualMachineScaleSetsPerformMaintenanceOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetsPowerOffInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    skipShutdown: Schema.optional(Schema.Boolean),
    instanceIds: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/poweroff",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetsPowerOffInput =
  typeof VirtualMachineScaleSetsPowerOffInput.Type;

// Output Schema
export const VirtualMachineScaleSetsPowerOffOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineScaleSetsPowerOffOutput =
  typeof VirtualMachineScaleSetsPowerOffOutput.Type;

// The operation
/**
 * Power off (stop) one or more virtual machines in a VM scale set. Note that resources are still attached and you are getting charged for the resources. Instead, use deallocate to release resources and avoid charges.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 * @param skipShutdown - The parameter to request non-graceful VM shutdown. True value for this flag indicates non-graceful shutdown whereas false indicates otherwise. Default value for this flag is false if not specified
 */
export const VirtualMachineScaleSetsPowerOff =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetsPowerOffInput,
    outputSchema: VirtualMachineScaleSetsPowerOffOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetsReapplyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/reapply",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetsReapplyInput =
  typeof VirtualMachineScaleSetsReapplyInput.Type;

// Output Schema
export const VirtualMachineScaleSetsReapplyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineScaleSetsReapplyOutput =
  typeof VirtualMachineScaleSetsReapplyOutput.Type;

// The operation
/**
 * Reapplies the Virtual Machine Scale Set Virtual Machine Profile to the Virtual Machine Instances
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 */
export const VirtualMachineScaleSetsReapply =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetsReapplyInput,
    outputSchema: VirtualMachineScaleSetsReapplyOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetsRedeployInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    instanceIds: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/redeploy",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetsRedeployInput =
  typeof VirtualMachineScaleSetsRedeployInput.Type;

// Output Schema
export const VirtualMachineScaleSetsRedeployOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineScaleSetsRedeployOutput =
  typeof VirtualMachineScaleSetsRedeployOutput.Type;

// The operation
/**
 * Shuts down all the virtual machines in the virtual machine scale set, moves them to a new node, and powers them back on.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 */
export const VirtualMachineScaleSetsRedeploy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetsRedeployInput,
    outputSchema: VirtualMachineScaleSetsRedeployOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetsReimageInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    instanceIds: Schema.optional(Schema.Array(Schema.String)),
    forceUpdateOSDiskForEphemeral: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/reimage",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetsReimageInput =
  typeof VirtualMachineScaleSetsReimageInput.Type;

// Output Schema
export const VirtualMachineScaleSetsReimageOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineScaleSetsReimageOutput =
  typeof VirtualMachineScaleSetsReimageOutput.Type;

// The operation
/**
 * Reimages (upgrade the operating system) one or more virtual machines in a VM scale set which don't have a ephemeral OS disk, for virtual machines who have a ephemeral OS disk the virtual machine is reset to initial state.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 */
export const VirtualMachineScaleSetsReimage =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetsReimageInput,
    outputSchema: VirtualMachineScaleSetsReimageOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetsReimageAllInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    instanceIds: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/reimageall",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetsReimageAllInput =
  typeof VirtualMachineScaleSetsReimageAllInput.Type;

// Output Schema
export const VirtualMachineScaleSetsReimageAllOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineScaleSetsReimageAllOutput =
  typeof VirtualMachineScaleSetsReimageAllOutput.Type;

// The operation
/**
 * Reimages all the disks ( including data disks ) in the virtual machines in a VM scale set. This operation is only supported for managed disks.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 */
export const VirtualMachineScaleSetsReimageAll =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetsReimageAllInput,
    outputSchema: VirtualMachineScaleSetsReimageAllOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetsRestartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    instanceIds: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/restart",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetsRestartInput =
  typeof VirtualMachineScaleSetsRestartInput.Type;

// Output Schema
export const VirtualMachineScaleSetsRestartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineScaleSetsRestartOutput =
  typeof VirtualMachineScaleSetsRestartOutput.Type;

// The operation
/**
 * Restarts one or more virtual machines in a VM scale set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 */
export const VirtualMachineScaleSetsRestart =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetsRestartInput,
    outputSchema: VirtualMachineScaleSetsRestartOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetsScaleOutInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    capacity: Schema.Number,
    properties: Schema.optional(
      Schema.suspend(() => VMScaleSetScaleOutInputPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/scaleOut",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetsScaleOutInput =
  typeof VirtualMachineScaleSetsScaleOutInput.Type;

// Output Schema
export const VirtualMachineScaleSetsScaleOutOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineScaleSetsScaleOutOutput =
  typeof VirtualMachineScaleSetsScaleOutOutput.Type;

// The operation
/**
 * Scales out one or more virtual machines in a VM scale set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 */
export const VirtualMachineScaleSetsScaleOut =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetsScaleOutInput,
    outputSchema: VirtualMachineScaleSetsScaleOutOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetsSetOrchestrationServiceStateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.suspend(() => OrchestrationServiceNamesSchema),
    action: Schema.suspend(() => OrchestrationServiceStateActionSchema),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/setOrchestrationServiceState",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetsSetOrchestrationServiceStateInput =
  typeof VirtualMachineScaleSetsSetOrchestrationServiceStateInput.Type;

// Output Schema
export const VirtualMachineScaleSetsSetOrchestrationServiceStateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineScaleSetsSetOrchestrationServiceStateOutput =
  typeof VirtualMachineScaleSetsSetOrchestrationServiceStateOutput.Type;

// The operation
/**
 * Changes ServiceState property for a given service
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 */
export const VirtualMachineScaleSetsSetOrchestrationServiceState =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetsSetOrchestrationServiceStateInput,
    outputSchema: VirtualMachineScaleSetsSetOrchestrationServiceStateOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetsStartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    instanceIds: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/start",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetsStartInput =
  typeof VirtualMachineScaleSetsStartInput.Type;

// Output Schema
export const VirtualMachineScaleSetsStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineScaleSetsStartOutput =
  typeof VirtualMachineScaleSetsStartOutput.Type;

// The operation
/**
 * Starts one or more virtual machines in a VM scale set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 */
export const VirtualMachineScaleSetsStart =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetsStartInput,
    outputSchema: VirtualMachineScaleSetsStartOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    plan: Schema.optional(Schema.suspend(() => PlanSchema)),
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetUpdatePropertiesSchema),
    ),
    identity: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetIdentitySchema),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetsUpdateInput =
  typeof VirtualMachineScaleSetsUpdateInput.Type;

// Output Schema
export const VirtualMachineScaleSetsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    plan: Schema.optional(Schema.suspend(() => PlanSchema)),
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetPropertiesSchema),
    ),
    identity: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetIdentitySchema),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.suspend(() => ExtendedLocationTypeSchema)),
      }),
    ),
    etag: Schema.optional(Schema.String),
    placement: Schema.optional(Schema.suspend(() => PlacementSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type VirtualMachineScaleSetsUpdateOutput =
  typeof VirtualMachineScaleSetsUpdateOutput.Type;

// The operation
/**
 * Update a VM scale set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing record set. Other values will result in error from server as they are not supported.
 */
export const VirtualMachineScaleSetsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetsUpdateInput,
    outputSchema: VirtualMachineScaleSetsUpdateOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetsUpdateInstancesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    instanceIds: Schema.Array(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/manualupgrade",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetsUpdateInstancesInput =
  typeof VirtualMachineScaleSetsUpdateInstancesInput.Type;

// Output Schema
export const VirtualMachineScaleSetsUpdateInstancesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineScaleSetsUpdateInstancesOutput =
  typeof VirtualMachineScaleSetsUpdateInstancesOutput.Type;

// The operation
/**
 * Upgrades one or more virtual machines to the latest SKU set in the VM scale set model.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 */
export const VirtualMachineScaleSetsUpdateInstances =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetsUpdateInstancesInput,
    outputSchema: VirtualMachineScaleSetsUpdateInstancesOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetVMExtensionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
    vmExtensionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineExtensionPropertiesSchema),
    ),
    location: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/extensions/{vmExtensionName}",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetVMExtensionsCreateOrUpdateInput =
  typeof VirtualMachineScaleSetVMExtensionsCreateOrUpdateInput.Type;

// Output Schema
export const VirtualMachineScaleSetVMExtensionsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineExtensionPropertiesSchema),
    ),
    location: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  });
export type VirtualMachineScaleSetVMExtensionsCreateOrUpdateOutput =
  typeof VirtualMachineScaleSetVMExtensionsCreateOrUpdateOutput.Type;

// The operation
/**
 * The operation to create or update the VMSS VM extension.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 * @param instanceId - The instance ID of the virtual machine.
 * @param vmExtensionName - The name of the virtual machine extension.
 */
export const VirtualMachineScaleSetVMExtensionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetVMExtensionsCreateOrUpdateInput,
    outputSchema: VirtualMachineScaleSetVMExtensionsCreateOrUpdateOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetVMExtensionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
    vmExtensionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/extensions/{vmExtensionName}",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetVMExtensionsDeleteInput =
  typeof VirtualMachineScaleSetVMExtensionsDeleteInput.Type;

// Output Schema
export const VirtualMachineScaleSetVMExtensionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineScaleSetVMExtensionsDeleteOutput =
  typeof VirtualMachineScaleSetVMExtensionsDeleteOutput.Type;

// The operation
/**
 * The operation to delete the VMSS VM extension.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 * @param instanceId - The instance ID of the virtual machine.
 * @param vmExtensionName - The name of the virtual machine extension.
 */
export const VirtualMachineScaleSetVMExtensionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetVMExtensionsDeleteInput,
    outputSchema: VirtualMachineScaleSetVMExtensionsDeleteOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetVMExtensionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
    vmExtensionName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/extensions/{vmExtensionName}",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineScaleSetVMExtensionsGetInput =
  typeof VirtualMachineScaleSetVMExtensionsGetInput.Type;

// Output Schema
export const VirtualMachineScaleSetVMExtensionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineExtensionPropertiesSchema),
    ),
    location: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  });
export type VirtualMachineScaleSetVMExtensionsGetOutput =
  typeof VirtualMachineScaleSetVMExtensionsGetOutput.Type;

// The operation
/**
 * The operation to get the VMSS VM extension.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 * @param instanceId - The instance ID of the virtual machine.
 * @param vmExtensionName - The name of the virtual machine extension.
 * @param $expand - The expand expression to apply on the operation.
 */
export const VirtualMachineScaleSetVMExtensionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetVMExtensionsGetInput,
    outputSchema: VirtualMachineScaleSetVMExtensionsGetOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetVMExtensionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/extensions",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineScaleSetVMExtensionsListInput =
  typeof VirtualMachineScaleSetVMExtensionsListInput.Type;

// Output Schema
export const VirtualMachineScaleSetVMExtensionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.suspend(() => VirtualMachineScaleSetVMExtensionSchema),
      ),
    ),
  });
export type VirtualMachineScaleSetVMExtensionsListOutput =
  typeof VirtualMachineScaleSetVMExtensionsListOutput.Type;

// The operation
/**
 * The operation to get all extensions of an instance in Virtual Machine Scaleset.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 * @param instanceId - The instance ID of the virtual machine.
 * @param $expand - The expand expression to apply on the operation.
 */
export const VirtualMachineScaleSetVMExtensionsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetVMExtensionsListInput,
    outputSchema: VirtualMachineScaleSetVMExtensionsListOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetVMExtensionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
    vmExtensionName: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineExtensionUpdatePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/extensions/{vmExtensionName}",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetVMExtensionsUpdateInput =
  typeof VirtualMachineScaleSetVMExtensionsUpdateInput.Type;

// Output Schema
export const VirtualMachineScaleSetVMExtensionsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineExtensionPropertiesSchema),
    ),
    location: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  });
export type VirtualMachineScaleSetVMExtensionsUpdateOutput =
  typeof VirtualMachineScaleSetVMExtensionsUpdateOutput.Type;

// The operation
/**
 * The operation to update the VMSS VM extension.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 * @param instanceId - The instance ID of the virtual machine.
 * @param vmExtensionName - The name of the virtual machine extension.
 */
export const VirtualMachineScaleSetVMExtensionsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetVMExtensionsUpdateInput,
    outputSchema: VirtualMachineScaleSetVMExtensionsUpdateOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetVMRunCommandsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
    runCommandName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineRunCommandPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/runCommands/{runCommandName}",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetVMRunCommandsCreateOrUpdateInput =
  typeof VirtualMachineScaleSetVMRunCommandsCreateOrUpdateInput.Type;

// Output Schema
export const VirtualMachineScaleSetVMRunCommandsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineRunCommandPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type VirtualMachineScaleSetVMRunCommandsCreateOrUpdateOutput =
  typeof VirtualMachineScaleSetVMRunCommandsCreateOrUpdateOutput.Type;

// The operation
/**
 * The operation to create or update the VMSS VM run command.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VirtualMachineScaleSet
 * @param instanceId - The name of the VirtualMachineScaleSetVM
 * @param runCommandName - The name of the VirtualMachineRunCommand
 */
export const VirtualMachineScaleSetVMRunCommandsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetVMRunCommandsCreateOrUpdateInput,
    outputSchema: VirtualMachineScaleSetVMRunCommandsCreateOrUpdateOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetVMRunCommandsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
    runCommandName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/runCommands/{runCommandName}",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetVMRunCommandsDeleteInput =
  typeof VirtualMachineScaleSetVMRunCommandsDeleteInput.Type;

// Output Schema
export const VirtualMachineScaleSetVMRunCommandsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineScaleSetVMRunCommandsDeleteOutput =
  typeof VirtualMachineScaleSetVMRunCommandsDeleteOutput.Type;

// The operation
/**
 * The operation to delete the VMSS VM run command.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VirtualMachineScaleSet
 * @param instanceId - The name of the VirtualMachineScaleSetVM
 * @param runCommandName - The name of the VirtualMachineRunCommand
 */
export const VirtualMachineScaleSetVMRunCommandsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetVMRunCommandsDeleteInput,
    outputSchema: VirtualMachineScaleSetVMRunCommandsDeleteOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetVMRunCommandsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
    runCommandName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/runCommands/{runCommandName}",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineScaleSetVMRunCommandsGetInput =
  typeof VirtualMachineScaleSetVMRunCommandsGetInput.Type;

// Output Schema
export const VirtualMachineScaleSetVMRunCommandsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineRunCommandPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type VirtualMachineScaleSetVMRunCommandsGetOutput =
  typeof VirtualMachineScaleSetVMRunCommandsGetOutput.Type;

// The operation
/**
 * The operation to get the VMSS VM run command.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VirtualMachineScaleSet
 * @param instanceId - The name of the VirtualMachineScaleSetVM
 * @param runCommandName - The name of the VirtualMachineRunCommand
 * @param $expand - The expand expression to apply on the operation.
 */
export const VirtualMachineScaleSetVMRunCommandsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetVMRunCommandsGetInput,
    outputSchema: VirtualMachineScaleSetVMRunCommandsGetOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetVMRunCommandsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/runCommands",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineScaleSetVMRunCommandsListInput =
  typeof VirtualMachineScaleSetVMRunCommandsListInput.Type;

// Output Schema
export const VirtualMachineScaleSetVMRunCommandsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => VirtualMachineRunCommandSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type VirtualMachineScaleSetVMRunCommandsListOutput =
  typeof VirtualMachineScaleSetVMRunCommandsListOutput.Type;

// The operation
/**
 * The operation to get all run commands of an instance in Virtual Machine Scaleset.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VirtualMachineScaleSet
 * @param instanceId - The name of the VirtualMachineScaleSetVM
 * @param $expand - The expand expression to apply on the operation.
 */
export const VirtualMachineScaleSetVMRunCommandsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetVMRunCommandsListInput,
    outputSchema: VirtualMachineScaleSetVMRunCommandsListOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetVMRunCommandsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
    runCommandName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineRunCommandPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/runCommands/{runCommandName}",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetVMRunCommandsUpdateInput =
  typeof VirtualMachineScaleSetVMRunCommandsUpdateInput.Type;

// Output Schema
export const VirtualMachineScaleSetVMRunCommandsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineRunCommandPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type VirtualMachineScaleSetVMRunCommandsUpdateOutput =
  typeof VirtualMachineScaleSetVMRunCommandsUpdateOutput.Type;

// The operation
/**
 * The operation to update the VMSS VM run command.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VirtualMachineScaleSet
 * @param instanceId - The name of the VirtualMachineScaleSetVM
 * @param runCommandName - The name of the VirtualMachineRunCommand
 */
export const VirtualMachineScaleSetVMRunCommandsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetVMRunCommandsUpdateInput,
    outputSchema: VirtualMachineScaleSetVMRunCommandsUpdateOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetVMsApproveRollingUpgradeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/approveRollingUpgrade",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetVMsApproveRollingUpgradeInput =
  typeof VirtualMachineScaleSetVMsApproveRollingUpgradeInput.Type;

// Output Schema
export const VirtualMachineScaleSetVMsApproveRollingUpgradeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineScaleSetVMsApproveRollingUpgradeOutput =
  typeof VirtualMachineScaleSetVMsApproveRollingUpgradeOutput.Type;

// The operation
/**
 * Approve upgrade on deferred rolling upgrade for OS disk on a VM scale set instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 * @param instanceId - The instance ID of the virtual machine.
 */
export const VirtualMachineScaleSetVMsApproveRollingUpgrade =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetVMsApproveRollingUpgradeInput,
    outputSchema: VirtualMachineScaleSetVMsApproveRollingUpgradeOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetVMsAttachDetachDataDisksInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
    dataDisksToAttach: Schema.optional(
      Schema.Array(Schema.suspend(() => DataDisksToAttachSchema)),
    ),
    dataDisksToDetach: Schema.optional(
      Schema.Array(Schema.suspend(() => DataDisksToDetachSchema)),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/attachDetachDataDisks",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetVMsAttachDetachDataDisksInput =
  typeof VirtualMachineScaleSetVMsAttachDetachDataDisksInput.Type;

// Output Schema
export const VirtualMachineScaleSetVMsAttachDetachDataDisksOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageReference: Schema.optional(Schema.suspend(() => ImageReferenceSchema)),
    osDisk: Schema.optional(Schema.suspend(() => OSDiskSchema)),
    dataDisks: Schema.optional(
      Schema.Array(Schema.suspend(() => DataDiskSchema)),
    ),
    diskControllerType: Schema.optional(
      Schema.suspend(() => DiskControllerTypesSchema),
    ),
    alignRegionalDisksToVMZone: Schema.optional(Schema.Boolean),
  });
export type VirtualMachineScaleSetVMsAttachDetachDataDisksOutput =
  typeof VirtualMachineScaleSetVMsAttachDetachDataDisksOutput.Type;

// The operation
/**
 * Attach and detach data disks to/from a virtual machine in a VM scale set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 * @param instanceId - The instance ID of the virtual machine.
 */
export const VirtualMachineScaleSetVMsAttachDetachDataDisks =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetVMsAttachDetachDataDisksInput,
    outputSchema: VirtualMachineScaleSetVMsAttachDetachDataDisksOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetVMsDeallocateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/deallocate",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetVMsDeallocateInput =
  typeof VirtualMachineScaleSetVMsDeallocateInput.Type;

// Output Schema
export const VirtualMachineScaleSetVMsDeallocateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineScaleSetVMsDeallocateOutput =
  typeof VirtualMachineScaleSetVMsDeallocateOutput.Type;

// The operation
/**
 * Deallocates a specific virtual machine in a VM scale set. Shuts down the virtual machine and releases the compute resources it uses. You are not billed for the compute resources of this virtual machine once it is deallocated.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 * @param instanceId - The instance ID of the virtual machine.
 */
export const VirtualMachineScaleSetVMsDeallocate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetVMsDeallocateInput,
    outputSchema: VirtualMachineScaleSetVMsDeallocateOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetVMsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
    forceDeletion: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetVMsDeleteInput =
  typeof VirtualMachineScaleSetVMsDeleteInput.Type;

// Output Schema
export const VirtualMachineScaleSetVMsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineScaleSetVMsDeleteOutput =
  typeof VirtualMachineScaleSetVMsDeleteOutput.Type;

// The operation
/**
 * Deletes a virtual machine from a VM scale set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 * @param instanceId - The instance ID of the virtual machine.
 * @param forceDeletion - Optional parameter to force delete a virtual machine from a VM scale set. (Feature in Preview)
 */
export const VirtualMachineScaleSetVMsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetVMsDeleteInput,
    outputSchema: VirtualMachineScaleSetVMsDeleteOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetVMsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(
      Schema.Literals(["instanceView", "userData", "resiliencyView"]),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineScaleSetVMsGetInput =
  typeof VirtualMachineScaleSetVMsGetInput.Type;

// Output Schema
export const VirtualMachineScaleSetVMsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetVMPropertiesSchema),
    ),
    instanceId: Schema.optional(Schema.String),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    plan: Schema.optional(Schema.suspend(() => PlanSchema)),
    resources: Schema.optional(
      Schema.Array(Schema.suspend(() => VirtualMachineExtensionSchema)),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    identity: Schema.optional(
      Schema.suspend(() => VirtualMachineIdentitySchema),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type VirtualMachineScaleSetVMsGetOutput =
  typeof VirtualMachineScaleSetVMsGetOutput.Type;

// The operation
/**
 * Gets a virtual machine from a VM scale set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 * @param instanceId - The instance ID of the virtual machine.
 * @param $expand - The expand expression to apply on the operation. 'InstanceView' will retrieve the instance view of the virtual machine. 'UserData' will retrieve the UserData of the virtual machine.
 */
export const VirtualMachineScaleSetVMsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetVMsGetInput,
    outputSchema: VirtualMachineScaleSetVMsGetOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetVMsGetInstanceViewInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/instanceView",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineScaleSetVMsGetInstanceViewInput =
  typeof VirtualMachineScaleSetVMsGetInstanceViewInput.Type;

// Output Schema
export const VirtualMachineScaleSetVMsGetInstanceViewOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    platformUpdateDomain: Schema.optional(Schema.Number),
    platformFaultDomain: Schema.optional(Schema.Number),
    rdpThumbPrint: Schema.optional(Schema.String),
    vmAgent: Schema.optional(
      Schema.suspend(() => VirtualMachineAgentInstanceViewSchema),
    ),
    maintenanceRedeployStatus: Schema.optional(
      Schema.suspend(() => MaintenanceRedeployStatusSchema),
    ),
    disks: Schema.optional(
      Schema.Array(Schema.suspend(() => DiskInstanceViewSchema)),
    ),
    extensions: Schema.optional(
      Schema.Array(
        Schema.suspend(() => VirtualMachineExtensionInstanceViewSchema),
      ),
    ),
    vmHealth: Schema.optional(
      Schema.suspend(() => VirtualMachineHealthStatusSchema),
    ),
    bootDiagnostics: Schema.optional(
      Schema.suspend(() => BootDiagnosticsInstanceViewSchema),
    ),
    statuses: Schema.optional(
      Schema.Array(Schema.suspend(() => InstanceViewStatusSchema)),
    ),
    assignedHost: Schema.optional(Schema.String),
    placementGroupId: Schema.optional(Schema.String),
    computerName: Schema.optional(Schema.String),
    osName: Schema.optional(Schema.String),
    osVersion: Schema.optional(Schema.String),
    hyperVGeneration: Schema.optional(
      Schema.suspend(() => Common_HyperVGenerationSchema),
    ),
  });
export type VirtualMachineScaleSetVMsGetInstanceViewOutput =
  typeof VirtualMachineScaleSetVMsGetInstanceViewOutput.Type;

// The operation
/**
 * Gets the status of a virtual machine from a VM scale set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 * @param instanceId - The instance ID of the virtual machine.
 */
export const VirtualMachineScaleSetVMsGetInstanceView =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetVMsGetInstanceViewInput,
    outputSchema: VirtualMachineScaleSetVMsGetInstanceViewOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetVMsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineScaleSetName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $select: Schema.optional(Schema.String),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{virtualMachineScaleSetName}/virtualMachines",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineScaleSetVMsListInput =
  typeof VirtualMachineScaleSetVMsListInput.Type;

// Output Schema
export const VirtualMachineScaleSetVMsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => VirtualMachineScaleSetVMSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type VirtualMachineScaleSetVMsListOutput =
  typeof VirtualMachineScaleSetVMsListOutput.Type;

// The operation
/**
 * Gets a list of all virtual machines in a VM scale sets.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualMachineScaleSetName - The name of the VirtualMachineScaleSet
 * @param $filter - The filter to apply to the operation. Allowed values are 'startswith(instanceView/statuses/code, 'PowerState') eq true', 'properties/latestModelApplied eq true', 'properties/latestModelApplied eq false'.
 * @param $select - The list parameters. Allowed values are 'instanceView', 'instanceView/statuses'.
 * @param $expand - The expand expression to apply to the operation. Allowed values are 'instanceView'.
 */
export const VirtualMachineScaleSetVMsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetVMsListInput,
    outputSchema: VirtualMachineScaleSetVMsListOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetVMsPerformMaintenanceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/performMaintenance",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetVMsPerformMaintenanceInput =
  typeof VirtualMachineScaleSetVMsPerformMaintenanceInput.Type;

// Output Schema
export const VirtualMachineScaleSetVMsPerformMaintenanceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineScaleSetVMsPerformMaintenanceOutput =
  typeof VirtualMachineScaleSetVMsPerformMaintenanceOutput.Type;

// The operation
/**
 * Performs maintenance on a virtual machine in a VM scale set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 * @param instanceId - The instance ID of the virtual machine.
 */
export const VirtualMachineScaleSetVMsPerformMaintenance =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetVMsPerformMaintenanceInput,
    outputSchema: VirtualMachineScaleSetVMsPerformMaintenanceOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetVMsPowerOffInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
    skipShutdown: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/powerOff",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetVMsPowerOffInput =
  typeof VirtualMachineScaleSetVMsPowerOffInput.Type;

// Output Schema
export const VirtualMachineScaleSetVMsPowerOffOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineScaleSetVMsPowerOffOutput =
  typeof VirtualMachineScaleSetVMsPowerOffOutput.Type;

// The operation
/**
 * Power off (stop) a virtual machine in a VM scale set. Note that resources are still attached and you are getting charged for the resources. Instead, use deallocate to release resources and avoid charges.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 * @param instanceId - The instance ID of the virtual machine.
 * @param skipShutdown - The parameter to request non-graceful VM shutdown. True value for this flag indicates non-graceful shutdown whereas false indicates otherwise. Default value for this flag is false if not specified
 */
export const VirtualMachineScaleSetVMsPowerOff =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetVMsPowerOffInput,
    outputSchema: VirtualMachineScaleSetVMsPowerOffOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetVMsRedeployInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/redeploy",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetVMsRedeployInput =
  typeof VirtualMachineScaleSetVMsRedeployInput.Type;

// Output Schema
export const VirtualMachineScaleSetVMsRedeployOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineScaleSetVMsRedeployOutput =
  typeof VirtualMachineScaleSetVMsRedeployOutput.Type;

// The operation
/**
 * Shuts down the virtual machine in the virtual machine scale set, moves it to a new node, and powers it back on.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 * @param instanceId - The instance ID of the virtual machine.
 */
export const VirtualMachineScaleSetVMsRedeploy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetVMsRedeployInput,
    outputSchema: VirtualMachineScaleSetVMsRedeployOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetVMsReimageInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
    forceUpdateOSDiskForEphemeral: Schema.optional(Schema.Boolean),
    tempDisk: Schema.optional(Schema.Boolean),
    exactVersion: Schema.optional(Schema.String),
    osProfile: Schema.optional(
      Schema.suspend(() => OSProfileProvisioningDataSchema),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/reimage",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetVMsReimageInput =
  typeof VirtualMachineScaleSetVMsReimageInput.Type;

// Output Schema
export const VirtualMachineScaleSetVMsReimageOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineScaleSetVMsReimageOutput =
  typeof VirtualMachineScaleSetVMsReimageOutput.Type;

// The operation
/**
 * Reimages (upgrade the operating system) a specific virtual machine in a VM scale set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 * @param instanceId - The instance ID of the virtual machine.
 */
export const VirtualMachineScaleSetVMsReimage =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetVMsReimageInput,
    outputSchema: VirtualMachineScaleSetVMsReimageOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetVMsReimageAllInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/reimageall",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetVMsReimageAllInput =
  typeof VirtualMachineScaleSetVMsReimageAllInput.Type;

// Output Schema
export const VirtualMachineScaleSetVMsReimageAllOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineScaleSetVMsReimageAllOutput =
  typeof VirtualMachineScaleSetVMsReimageAllOutput.Type;

// The operation
/**
 * Allows you to re-image all the disks ( including data disks ) in the a VM scale set instance. This operation is only supported for managed disks.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 * @param instanceId - The instance ID of the virtual machine.
 */
export const VirtualMachineScaleSetVMsReimageAll =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetVMsReimageAllInput,
    outputSchema: VirtualMachineScaleSetVMsReimageAllOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetVMsRestartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/restart",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetVMsRestartInput =
  typeof VirtualMachineScaleSetVMsRestartInput.Type;

// Output Schema
export const VirtualMachineScaleSetVMsRestartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineScaleSetVMsRestartOutput =
  typeof VirtualMachineScaleSetVMsRestartOutput.Type;

// The operation
/**
 * Restarts a virtual machine in a VM scale set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 * @param instanceId - The instance ID of the virtual machine.
 */
export const VirtualMachineScaleSetVMsRestart =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetVMsRestartInput,
    outputSchema: VirtualMachineScaleSetVMsRestartOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetVMsRetrieveBootDiagnosticsDataInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
    sasUriExpirationTimeInMinutes: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/retrieveBootDiagnosticsData",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineScaleSetVMsRetrieveBootDiagnosticsDataInput =
  typeof VirtualMachineScaleSetVMsRetrieveBootDiagnosticsDataInput.Type;

// Output Schema
export const VirtualMachineScaleSetVMsRetrieveBootDiagnosticsDataOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    consoleScreenshotBlobUri: Schema.optional(Schema.String),
    serialConsoleLogBlobUri: Schema.optional(Schema.String),
  });
export type VirtualMachineScaleSetVMsRetrieveBootDiagnosticsDataOutput =
  typeof VirtualMachineScaleSetVMsRetrieveBootDiagnosticsDataOutput.Type;

// The operation
/**
 * The operation to retrieve SAS URIs of boot diagnostic logs for a virtual machine in a VM scale set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 * @param instanceId - The instance ID of the virtual machine.
 * @param sasUriExpirationTimeInMinutes - Expiration duration in minutes for the SAS URIs with a value between 1 to 1440 minutes. **Note:** If not specified, SAS URIs will be generated with a default expiration duration of 120 minutes.
 */
export const VirtualMachineScaleSetVMsRetrieveBootDiagnosticsData =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetVMsRetrieveBootDiagnosticsDataInput,
    outputSchema: VirtualMachineScaleSetVMsRetrieveBootDiagnosticsDataOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetVMsRunCommandInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
    commandId: Schema.String,
    script: Schema.optional(Schema.Array(Schema.String)),
    parameters: Schema.optional(
      Schema.Array(Schema.suspend(() => RunCommandInputParameterSchema)),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/runCommand",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetVMsRunCommandInput =
  typeof VirtualMachineScaleSetVMsRunCommandInput.Type;

// Output Schema
export const VirtualMachineScaleSetVMsRunCommandOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => InstanceViewStatusSchema)),
    ),
  });
export type VirtualMachineScaleSetVMsRunCommandOutput =
  typeof VirtualMachineScaleSetVMsRunCommandOutput.Type;

// The operation
/**
 * Run command on a virtual machine in a VM scale set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 * @param instanceId - The instance ID of the virtual machine.
 */
export const VirtualMachineScaleSetVMsRunCommand =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetVMsRunCommandInput,
    outputSchema: VirtualMachineScaleSetVMsRunCommandOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetVMsSimulateEvictionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/simulateEviction",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineScaleSetVMsSimulateEvictionInput =
  typeof VirtualMachineScaleSetVMsSimulateEvictionInput.Type;

// Output Schema
export const VirtualMachineScaleSetVMsSimulateEvictionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineScaleSetVMsSimulateEvictionOutput =
  typeof VirtualMachineScaleSetVMsSimulateEvictionOutput.Type;

// The operation
/**
 * The operation to simulate the eviction of spot virtual machine in a VM scale set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 * @param instanceId - The instance ID of the virtual machine.
 */
export const VirtualMachineScaleSetVMsSimulateEviction =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetVMsSimulateEvictionInput,
    outputSchema: VirtualMachineScaleSetVMsSimulateEvictionOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetVMsStartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/start",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetVMsStartInput =
  typeof VirtualMachineScaleSetVMsStartInput.Type;

// Output Schema
export const VirtualMachineScaleSetVMsStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineScaleSetVMsStartOutput =
  typeof VirtualMachineScaleSetVMsStartOutput.Type;

// The operation
/**
 * Starts a virtual machine in a VM scale set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 * @param instanceId - The instance ID of the virtual machine.
 */
export const VirtualMachineScaleSetVMsStart =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetVMsStartInput,
    outputSchema: VirtualMachineScaleSetVMsStartOutput,
  }));
// Input Schema
export const VirtualMachineScaleSetVMsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmScaleSetName: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetVMPropertiesSchema),
    ),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    plan: Schema.optional(Schema.suspend(() => PlanSchema)),
    resources: Schema.optional(
      Schema.Array(Schema.suspend(() => VirtualMachineExtensionSchema)),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    identity: Schema.optional(
      Schema.suspend(() => VirtualMachineIdentitySchema),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineScaleSetVMsUpdateInput =
  typeof VirtualMachineScaleSetVMsUpdateInput.Type;

// Output Schema
export const VirtualMachineScaleSetVMsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetVMPropertiesSchema),
    ),
    instanceId: Schema.optional(Schema.String),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    plan: Schema.optional(Schema.suspend(() => PlanSchema)),
    resources: Schema.optional(
      Schema.Array(Schema.suspend(() => VirtualMachineExtensionSchema)),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    identity: Schema.optional(
      Schema.suspend(() => VirtualMachineIdentitySchema),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type VirtualMachineScaleSetVMsUpdateOutput =
  typeof VirtualMachineScaleSetVMsUpdateOutput.Type;

// The operation
/**
 * Updates a virtual machine of a VM scale set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmScaleSetName - The name of the VM scale set.
 * @param instanceId - The instance ID of the virtual machine.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing record set. Other values will result in error from server as they are not supported.
 */
export const VirtualMachineScaleSetVMsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineScaleSetVMsUpdateInput,
    outputSchema: VirtualMachineScaleSetVMsUpdateOutput,
  }));
// Input Schema
export const VirtualMachinesCaptureInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
    vhdPrefix: Schema.String,
    destinationContainerName: Schema.String,
    overwriteVhds: Schema.Boolean,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/capture",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachinesCaptureInput =
  typeof VirtualMachinesCaptureInput.Type;

// Output Schema
export const VirtualMachinesCaptureOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    $schema: Schema.optional(Schema.String),
    contentVersion: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Unknown),
    resources: Schema.optional(Schema.Array(Schema.Unknown)),
    id: Schema.optional(Schema.String),
  });
export type VirtualMachinesCaptureOutput =
  typeof VirtualMachinesCaptureOutput.Type;

// The operation
/**
 * Captures the VM by copying virtual hard disks of the VM and outputs a template that can be used to create similar VMs.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 */
export const VirtualMachinesCapture = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachinesCaptureInput,
    outputSchema: VirtualMachinesCaptureOutput,
  }),
);
// Input Schema
export const VirtualMachinesConvertToManagedDisksInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/convertToManagedDisks",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachinesConvertToManagedDisksInput =
  typeof VirtualMachinesConvertToManagedDisksInput.Type;

// Output Schema
export const VirtualMachinesConvertToManagedDisksOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachinesConvertToManagedDisksOutput =
  typeof VirtualMachinesConvertToManagedDisksOutput.Type;

// The operation
/**
 * Converts virtual machine disks from blob-based to managed disks. Virtual machine must be stop-deallocated before invoking this operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 */
export const VirtualMachinesConvertToManagedDisks =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachinesConvertToManagedDisksInput,
    outputSchema: VirtualMachinesConvertToManagedDisksOutput,
  }));
// Input Schema
export const VirtualMachinesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachinePropertiesSchema),
    ),
    plan: Schema.optional(Schema.suspend(() => PlanSchema)),
    resources: Schema.optional(
      Schema.Array(Schema.suspend(() => VirtualMachineExtensionSchema)),
    ),
    identity: Schema.optional(
      Schema.suspend(() => VirtualMachineIdentitySchema),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.suspend(() => ExtendedLocationTypeSchema)),
      }),
    ),
    managedBy: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    placement: Schema.optional(Schema.suspend(() => PlacementSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachinesCreateOrUpdateInput =
  typeof VirtualMachinesCreateOrUpdateInput.Type;

// Output Schema
export const VirtualMachinesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachinePropertiesSchema),
    ),
    plan: Schema.optional(Schema.suspend(() => PlanSchema)),
    resources: Schema.optional(
      Schema.Array(Schema.suspend(() => VirtualMachineExtensionSchema)),
    ),
    identity: Schema.optional(
      Schema.suspend(() => VirtualMachineIdentitySchema),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.suspend(() => ExtendedLocationTypeSchema)),
      }),
    ),
    managedBy: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    placement: Schema.optional(Schema.suspend(() => PlacementSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type VirtualMachinesCreateOrUpdateOutput =
  typeof VirtualMachinesCreateOrUpdateOutput.Type;

// The operation
/**
 * The operation to create or update a virtual machine. Please note some properties can be set only during virtual machine creation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing record set. Other values will result in error from server as they are not supported.
 */
export const VirtualMachinesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachinesCreateOrUpdateInput,
    outputSchema: VirtualMachinesCreateOrUpdateOutput,
  }));
// Input Schema
export const VirtualMachinesDeallocateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
    hibernate: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/deallocate",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachinesDeallocateInput =
  typeof VirtualMachinesDeallocateInput.Type;

// Output Schema
export const VirtualMachinesDeallocateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachinesDeallocateOutput =
  typeof VirtualMachinesDeallocateOutput.Type;

// The operation
/**
 * Shuts down the virtual machine and releases the compute resources. You are not billed for the compute resources that this virtual machine uses.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 * @param hibernate - Optional parameter to hibernate a virtual machine.
 */
export const VirtualMachinesDeallocate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachinesDeallocateInput,
    outputSchema: VirtualMachinesDeallocateOutput,
  }),
);
// Input Schema
export const VirtualMachinesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
    forceDeletion: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachinesDeleteInput = typeof VirtualMachinesDeleteInput.Type;

// Output Schema
export const VirtualMachinesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachinesDeleteOutput =
  typeof VirtualMachinesDeleteOutput.Type;

// The operation
/**
 * The operation to delete a virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 * @param forceDeletion - Optional parameter to force delete virtual machines.
 */
export const VirtualMachinesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachinesDeleteInput,
    outputSchema: VirtualMachinesDeleteOutput,
  }),
);
// Input Schema
export const VirtualMachinesGeneralizeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/generalize",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachinesGeneralizeInput =
  typeof VirtualMachinesGeneralizeInput.Type;

// Output Schema
export const VirtualMachinesGeneralizeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachinesGeneralizeOutput =
  typeof VirtualMachinesGeneralizeOutput.Type;

// The operation
/**
 * Sets the OS state of the virtual machine to generalized. It is recommended to sysprep the virtual machine before performing this operation. For Windows, please refer to [Create a managed image of a generalized VM in Azure](https://docs.microsoft.com/azure/virtual-machines/windows/capture-image-resource). For Linux, please refer to [How to create an image of a virtual machine or VHD](https://docs.microsoft.com/azure/virtual-machines/linux/capture-image).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 */
export const VirtualMachinesGeneralize = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachinesGeneralizeInput,
    outputSchema: VirtualMachinesGeneralizeOutput,
  }),
);
// Input Schema
export const VirtualMachinesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(
      Schema.Literals(["instanceView", "userData", "resiliencyView"]),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachinesGetInput = typeof VirtualMachinesGetInput.Type;

// Output Schema
export const VirtualMachinesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachinePropertiesSchema),
    ),
    plan: Schema.optional(Schema.suspend(() => PlanSchema)),
    resources: Schema.optional(
      Schema.Array(Schema.suspend(() => VirtualMachineExtensionSchema)),
    ),
    identity: Schema.optional(
      Schema.suspend(() => VirtualMachineIdentitySchema),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.suspend(() => ExtendedLocationTypeSchema)),
      }),
    ),
    managedBy: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    placement: Schema.optional(Schema.suspend(() => PlacementSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type VirtualMachinesGetOutput = typeof VirtualMachinesGetOutput.Type;

// The operation
/**
 * Retrieves information about the model view or the instance view of a virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 * @param $expand - The expand expression to apply on the operation. 'InstanceView' retrieves a snapshot of the runtime properties of the virtual machine that is managed by the platform and can change outside of control plane operations. 'UserData' retrieves the UserData property as part of the VM model view that was provided by the user during the VM Create/Update operation.
 */
export const VirtualMachinesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VirtualMachinesGetInput,
  outputSchema: VirtualMachinesGetOutput,
}));
// Input Schema
export const VirtualMachinesInstallPatchesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
    maximumDuration: Schema.optional(Schema.String),
    rebootSetting: Schema.suspend(() => VMGuestPatchRebootSettingSchema),
    windowsParameters: Schema.optional(
      Schema.suspend(() => WindowsParametersSchema),
    ),
    linuxParameters: Schema.optional(
      Schema.suspend(() => LinuxParametersSchema),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/installPatches",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachinesInstallPatchesInput =
  typeof VirtualMachinesInstallPatchesInput.Type;

// Output Schema
export const VirtualMachinesInstallPatchesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.suspend(() => PatchOperationStatusSchema)),
    installationActivityId: Schema.optional(Schema.String),
    rebootStatus: Schema.optional(
      Schema.suspend(() => VMGuestPatchRebootStatusSchema),
    ),
    maintenanceWindowExceeded: Schema.optional(Schema.Boolean),
    excludedPatchCount: Schema.optional(Schema.Number),
    notSelectedPatchCount: Schema.optional(Schema.Number),
    pendingPatchCount: Schema.optional(Schema.Number),
    installedPatchCount: Schema.optional(Schema.Number),
    failedPatchCount: Schema.optional(Schema.Number),
    patches: Schema.optional(
      Schema.Array(Schema.suspend(() => PatchInstallationDetailSchema)),
    ),
    startDateTime: Schema.optional(Schema.String),
    error: Schema.optional(
      Schema.Struct({
        details: Schema.optional(
          Schema.Array(Schema.suspend(() => ApiErrorBaseSchema)),
        ),
        innererror: Schema.optional(Schema.suspend(() => InnerErrorSchema)),
        code: Schema.optional(Schema.String),
        target: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
  });
export type VirtualMachinesInstallPatchesOutput =
  typeof VirtualMachinesInstallPatchesOutput.Type;

// The operation
/**
 * Installs patches on the VM.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 */
export const VirtualMachinesInstallPatches =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachinesInstallPatchesInput,
    outputSchema: VirtualMachinesInstallPatchesOutput,
  }));
// Input Schema
export const VirtualMachinesInstanceViewInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/instanceView",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachinesInstanceViewInput =
  typeof VirtualMachinesInstanceViewInput.Type;

// Output Schema
export const VirtualMachinesInstanceViewOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    platformUpdateDomain: Schema.optional(Schema.Number),
    platformFaultDomain: Schema.optional(Schema.Number),
    computerName: Schema.optional(Schema.String),
    osName: Schema.optional(Schema.String),
    osVersion: Schema.optional(Schema.String),
    hyperVGeneration: Schema.optional(
      Schema.suspend(() => HyperVGenerationTypeSchema),
    ),
    rdpThumbPrint: Schema.optional(Schema.String),
    vmAgent: Schema.optional(
      Schema.suspend(() => VirtualMachineAgentInstanceViewSchema),
    ),
    maintenanceRedeployStatus: Schema.optional(
      Schema.suspend(() => MaintenanceRedeployStatusSchema),
    ),
    disks: Schema.optional(
      Schema.Array(Schema.suspend(() => DiskInstanceViewSchema)),
    ),
    extensions: Schema.optional(
      Schema.Array(
        Schema.suspend(() => VirtualMachineExtensionInstanceViewSchema),
      ),
    ),
    vmHealth: Schema.optional(
      Schema.suspend(() => VirtualMachineHealthStatusSchema),
    ),
    bootDiagnostics: Schema.optional(
      Schema.suspend(() => BootDiagnosticsInstanceViewSchema),
    ),
    assignedHost: Schema.optional(Schema.String),
    statuses: Schema.optional(
      Schema.Array(Schema.suspend(() => InstanceViewStatusSchema)),
    ),
    patchStatus: Schema.optional(
      Schema.suspend(() => VirtualMachinePatchStatusSchema),
    ),
    isVMInStandbyPool: Schema.optional(Schema.Boolean),
  });
export type VirtualMachinesInstanceViewOutput =
  typeof VirtualMachinesInstanceViewOutput.Type;

// The operation
/**
 * Retrieves information about the run-time state of a virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 */
export const VirtualMachinesInstanceView = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachinesInstanceViewInput,
    outputSchema: VirtualMachinesInstanceViewOutput,
  }),
);
// Input Schema
export const VirtualMachineSizesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/vmSizes",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachineSizesListInput =
  typeof VirtualMachineSizesListInput.Type;

// Output Schema
export const VirtualMachineSizesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => VirtualMachineSizeSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type VirtualMachineSizesListOutput =
  typeof VirtualMachineSizesListOutput.Type;

// The operation
/**
 * This API is deprecated. Use [Resources Skus](https://docs.microsoft.com/rest/api/compute/resourceskus/list)
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 */
export const VirtualMachineSizesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachineSizesListInput,
    outputSchema: VirtualMachineSizesListOutput,
  }),
);
// Input Schema
export const VirtualMachinesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $expand: Schema.optional(Schema.Literals(["instanceView"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachinesListInput = typeof VirtualMachinesListInput.Type;

// Output Schema
export const VirtualMachinesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => VirtualMachineSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type VirtualMachinesListOutput = typeof VirtualMachinesListOutput.Type;

// The operation
/**
 * Lists all of the virtual machines in the specified resource group. Use the nextLink property in the response to get the next page of virtual machines.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $filter - The system query option to filter VMs returned in the response. Allowed value is 'virtualMachineScaleSet/id' eq /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmssName}'
 * @param $expand - The expand expression to apply on operation. 'instanceView' enables fetching run time status of all Virtual Machines, this can only be specified if a valid $filter option is specified
 */
export const VirtualMachinesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VirtualMachinesListInput,
  outputSchema: VirtualMachinesListOutput,
}));
// Input Schema
export const VirtualMachinesListAllInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    statusOnly: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $expand: Schema.optional(Schema.Literals(["instanceView"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/virtualMachines",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachinesListAllInput =
  typeof VirtualMachinesListAllInput.Type;

// Output Schema
export const VirtualMachinesListAllOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => VirtualMachineSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type VirtualMachinesListAllOutput =
  typeof VirtualMachinesListAllOutput.Type;

// The operation
/**
 * Lists all of the virtual machines in the specified subscription. Use the nextLink property in the response to get the next page of virtual machines.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param statusOnly - statusOnly=true enables fetching run time status of all Virtual Machines in the subscription.
 * @param $filter - The system query option to filter VMs returned in the response. Allowed value is 'virtualMachineScaleSet/id' eq /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmssName}'
 * @param $expand - The expand expression to apply on operation. 'instanceView' enables fetching run time status of all Virtual Machines, this can only be specified if a valid $filter option is specified
 */
export const VirtualMachinesListAll = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachinesListAllInput,
    outputSchema: VirtualMachinesListAllOutput,
  }),
);
// Input Schema
export const VirtualMachinesListAvailableSizesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/vmSizes",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachinesListAvailableSizesInput =
  typeof VirtualMachinesListAvailableSizesInput.Type;

// Output Schema
export const VirtualMachinesListAvailableSizesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => VirtualMachineSizeSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type VirtualMachinesListAvailableSizesOutput =
  typeof VirtualMachinesListAvailableSizesOutput.Type;

// The operation
/**
 * Lists all available virtual machine sizes to which the specified virtual machine can be resized.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 */
export const VirtualMachinesListAvailableSizes =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachinesListAvailableSizesInput,
    outputSchema: VirtualMachinesListAvailableSizesOutput,
  }));
// Input Schema
export const VirtualMachinesListByLocationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/virtualMachines",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachinesListByLocationInput =
  typeof VirtualMachinesListByLocationInput.Type;

// Output Schema
export const VirtualMachinesListByLocationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => VirtualMachineSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type VirtualMachinesListByLocationOutput =
  typeof VirtualMachinesListByLocationOutput.Type;

// The operation
/**
 * Gets all the virtual machines under the specified subscription for the specified location.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 */
export const VirtualMachinesListByLocation =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachinesListByLocationInput,
    outputSchema: VirtualMachinesListByLocationOutput,
  }));
// Input Schema
export const VirtualMachinesMigrateToVMScaleSetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
    targetZone: Schema.optional(Schema.String),
    targetFaultDomain: Schema.optional(Schema.Number),
    targetVMSize: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/migrateToVirtualMachineScaleSet",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachinesMigrateToVMScaleSetInput =
  typeof VirtualMachinesMigrateToVMScaleSetInput.Type;

// Output Schema
export const VirtualMachinesMigrateToVMScaleSetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachinesMigrateToVMScaleSetOutput =
  typeof VirtualMachinesMigrateToVMScaleSetOutput.Type;

// The operation
/**
 * Migrate a virtual machine from availability set to Flexible Virtual Machine Scale Set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 */
export const VirtualMachinesMigrateToVMScaleSet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachinesMigrateToVMScaleSetInput,
    outputSchema: VirtualMachinesMigrateToVMScaleSetOutput,
  }));
// Input Schema
export const VirtualMachinesPerformMaintenanceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/performMaintenance",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachinesPerformMaintenanceInput =
  typeof VirtualMachinesPerformMaintenanceInput.Type;

// Output Schema
export const VirtualMachinesPerformMaintenanceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachinesPerformMaintenanceOutput =
  typeof VirtualMachinesPerformMaintenanceOutput.Type;

// The operation
/**
 * The operation to perform maintenance on a virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 */
export const VirtualMachinesPerformMaintenance =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachinesPerformMaintenanceInput,
    outputSchema: VirtualMachinesPerformMaintenanceOutput,
  }));
// Input Schema
export const VirtualMachinesPowerOffInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
    skipShutdown: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/powerOff",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachinesPowerOffInput =
  typeof VirtualMachinesPowerOffInput.Type;

// Output Schema
export const VirtualMachinesPowerOffOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachinesPowerOffOutput =
  typeof VirtualMachinesPowerOffOutput.Type;

// The operation
/**
 * The operation to power off (stop) a virtual machine. The virtual machine can be restarted with the same provisioned resources. You are still charged for this virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 * @param skipShutdown - The parameter to request non-graceful VM shutdown. True value for this flag indicates non-graceful shutdown whereas false indicates otherwise. Default value for this flag is false if not specified
 */
export const VirtualMachinesPowerOff = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachinesPowerOffInput,
    outputSchema: VirtualMachinesPowerOffOutput,
  }),
);
// Input Schema
export const VirtualMachinesReapplyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/reapply",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachinesReapplyInput =
  typeof VirtualMachinesReapplyInput.Type;

// Output Schema
export const VirtualMachinesReapplyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachinesReapplyOutput =
  typeof VirtualMachinesReapplyOutput.Type;

// The operation
/**
 * The operation to reapply a virtual machine's state.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 */
export const VirtualMachinesReapply = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachinesReapplyInput,
    outputSchema: VirtualMachinesReapplyOutput,
  }),
);
// Input Schema
export const VirtualMachinesRedeployInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/redeploy",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachinesRedeployInput =
  typeof VirtualMachinesRedeployInput.Type;

// Output Schema
export const VirtualMachinesRedeployOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachinesRedeployOutput =
  typeof VirtualMachinesRedeployOutput.Type;

// The operation
/**
 * Shuts down the virtual machine, moves it to a new node, and powers it back on.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 */
export const VirtualMachinesRedeploy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachinesRedeployInput,
    outputSchema: VirtualMachinesRedeployOutput,
  }),
);
// Input Schema
export const VirtualMachinesReimageInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
    tempDisk: Schema.optional(Schema.Boolean),
    exactVersion: Schema.optional(Schema.String),
    osProfile: Schema.optional(
      Schema.suspend(() => OSProfileProvisioningDataSchema),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/reimage",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachinesReimageInput =
  typeof VirtualMachinesReimageInput.Type;

// Output Schema
export const VirtualMachinesReimageOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachinesReimageOutput =
  typeof VirtualMachinesReimageOutput.Type;

// The operation
/**
 * Reimages (upgrade the operating system) a virtual machine which don't have a ephemeral OS disk, for virtual machines who have a ephemeral OS disk the virtual machine is reset to initial state. NOTE: The retaining of old OS disk depends on the value of deleteOption of OS disk. If deleteOption is detach, the old OS disk will be preserved after reimage. If deleteOption is delete, the old OS disk will be deleted after reimage. The deleteOption of the OS disk should be updated accordingly before performing the reimage.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 */
export const VirtualMachinesReimage = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachinesReimageInput,
    outputSchema: VirtualMachinesReimageOutput,
  }),
);
// Input Schema
export const VirtualMachinesRestartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/restart",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachinesRestartInput =
  typeof VirtualMachinesRestartInput.Type;

// Output Schema
export const VirtualMachinesRestartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachinesRestartOutput =
  typeof VirtualMachinesRestartOutput.Type;

// The operation
/**
 * The operation to restart a virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 */
export const VirtualMachinesRestart = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachinesRestartInput,
    outputSchema: VirtualMachinesRestartOutput,
  }),
);
// Input Schema
export const VirtualMachinesRetrieveBootDiagnosticsDataInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
    sasUriExpirationTimeInMinutes: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/retrieveBootDiagnosticsData",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachinesRetrieveBootDiagnosticsDataInput =
  typeof VirtualMachinesRetrieveBootDiagnosticsDataInput.Type;

// Output Schema
export const VirtualMachinesRetrieveBootDiagnosticsDataOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    consoleScreenshotBlobUri: Schema.optional(Schema.String),
    serialConsoleLogBlobUri: Schema.optional(Schema.String),
  });
export type VirtualMachinesRetrieveBootDiagnosticsDataOutput =
  typeof VirtualMachinesRetrieveBootDiagnosticsDataOutput.Type;

// The operation
/**
 * The operation to retrieve SAS URIs for a virtual machine's boot diagnostic logs.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 * @param sasUriExpirationTimeInMinutes - Expiration duration in minutes for the SAS URIs with a value between 1 to 1440 minutes. **Note:** If not specified, SAS URIs will be generated with a default expiration duration of 120 minutes.
 */
export const VirtualMachinesRetrieveBootDiagnosticsData =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachinesRetrieveBootDiagnosticsDataInput,
    outputSchema: VirtualMachinesRetrieveBootDiagnosticsDataOutput,
  }));
// Input Schema
export const VirtualMachinesRunCommandInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
    commandId: Schema.String,
    script: Schema.optional(Schema.Array(Schema.String)),
    parameters: Schema.optional(
      Schema.Array(Schema.suspend(() => RunCommandInputParameterSchema)),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/runCommand",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachinesRunCommandInput =
  typeof VirtualMachinesRunCommandInput.Type;

// Output Schema
export const VirtualMachinesRunCommandOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => InstanceViewStatusSchema)),
    ),
  });
export type VirtualMachinesRunCommandOutput =
  typeof VirtualMachinesRunCommandOutput.Type;

// The operation
/**
 * Run command on the VM.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 */
export const VirtualMachinesRunCommand = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachinesRunCommandInput,
    outputSchema: VirtualMachinesRunCommandOutput,
  }),
);
// Input Schema
export const VirtualMachinesSimulateEvictionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/simulateEviction",
      apiVersion: "2025-04-01",
    }),
  );
export type VirtualMachinesSimulateEvictionInput =
  typeof VirtualMachinesSimulateEvictionInput.Type;

// Output Schema
export const VirtualMachinesSimulateEvictionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachinesSimulateEvictionOutput =
  typeof VirtualMachinesSimulateEvictionOutput.Type;

// The operation
/**
 * The operation to simulate the eviction of spot virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 */
export const VirtualMachinesSimulateEviction =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachinesSimulateEvictionInput,
    outputSchema: VirtualMachinesSimulateEvictionOutput,
  }));
// Input Schema
export const VirtualMachinesStartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/start",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachinesStartInput = typeof VirtualMachinesStartInput.Type;

// Output Schema
export const VirtualMachinesStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachinesStartOutput = typeof VirtualMachinesStartOutput.Type;

// The operation
/**
 * The operation to start a virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 */
export const VirtualMachinesStart = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachinesStartInput,
    outputSchema: VirtualMachinesStartOutput,
  }),
);
// Input Schema
export const VirtualMachinesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
    plan: Schema.optional(Schema.suspend(() => PlanSchema)),
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachinePropertiesSchema),
    ),
    identity: Schema.optional(
      Schema.suspend(() => VirtualMachineIdentitySchema),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}",
      apiVersion: "2025-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachinesUpdateInput = typeof VirtualMachinesUpdateInput.Type;

// Output Schema
export const VirtualMachinesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachinePropertiesSchema),
    ),
    plan: Schema.optional(Schema.suspend(() => PlanSchema)),
    resources: Schema.optional(
      Schema.Array(Schema.suspend(() => VirtualMachineExtensionSchema)),
    ),
    identity: Schema.optional(
      Schema.suspend(() => VirtualMachineIdentitySchema),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.suspend(() => ExtendedLocationTypeSchema)),
      }),
    ),
    managedBy: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    placement: Schema.optional(Schema.suspend(() => PlacementSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type VirtualMachinesUpdateOutput =
  typeof VirtualMachinesUpdateOutput.Type;

// The operation
/**
 * The operation to update a virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing record set. Other values will result in error from server as they are not supported.
 */
export const VirtualMachinesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachinesUpdateInput,
    outputSchema: VirtualMachinesUpdateOutput,
  }),
);
