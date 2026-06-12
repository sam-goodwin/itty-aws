/**
 * Azure Azurefleet API
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
const FleetSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
const FleetPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
  spotPriorityProfile: Schema.optional(
    Schema.suspend(() => SpotPriorityProfileSchema),
  ),
  regularPriorityProfile: Schema.optional(
    Schema.suspend(() => RegularPriorityProfileSchema),
  ),
  vmSizesProfile: Schema.Array(Schema.suspend(() => VmSizeProfileSchema)),
  vmAttributes: Schema.optional(Schema.suspend(() => VMAttributesSchema)),
  additionalLocationsProfile: Schema.optional(
    Schema.suspend(() => AdditionalLocationsProfileSchema),
  ),
  computeProfile: Schema.suspend(() => ComputeProfileSchema),
  timeCreated: Schema.optional(Schema.String),
  uniqueId: Schema.optional(Schema.String),
});
const ProvisioningStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Succeeded",
  "Failed",
  "Canceled",
  "Creating",
  "Updating",
  "Deleting",
  "Migrating",
]);
const SpotPriorityProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  capacity: Schema.optional(Schema.Number),
  minCapacity: Schema.optional(Schema.Number),
  maxPricePerVM: Schema.optional(Schema.Number),
  evictionPolicy: Schema.optional(Schema.suspend(() => EvictionPolicySchema)),
  allocationStrategy: Schema.optional(
    Schema.suspend(() => SpotAllocationStrategySchema),
  ),
  maintain: Schema.optional(Schema.Boolean),
});
const EvictionPolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Delete",
  "Deallocate",
]);
const SpotAllocationStrategySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "PriceCapacityOptimized",
    "LowestPrice",
    "CapacityOptimized",
  ]);
const RegularPriorityProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  capacity: Schema.optional(Schema.Number),
  minCapacity: Schema.optional(Schema.Number),
  allocationStrategy: Schema.optional(
    Schema.suspend(() => RegularPriorityAllocationStrategySchema),
  ),
});
const RegularPriorityAllocationStrategySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["LowestPrice", "Prioritized"]);
const VmSizeProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  rank: Schema.optional(Schema.Number),
});
const VMAttributesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vCpuCount: Schema.suspend(() => VMAttributeMinMaxIntegerSchema),
  memoryInGiB: Schema.suspend(() => VMAttributeMinMaxDoubleSchema),
  memoryInGiBPerVCpu: Schema.optional(
    Schema.suspend(() => VMAttributeMinMaxDoubleSchema),
  ),
  localStorageSupport: Schema.optional(
    Schema.suspend(() => VMAttributeSupportSchema),
  ),
  localStorageInGiB: Schema.optional(
    Schema.suspend(() => VMAttributeMinMaxDoubleSchema),
  ),
  localStorageDiskTypes: Schema.optional(
    Schema.Array(Schema.suspend(() => LocalStorageDiskTypeSchema)),
  ),
  dataDiskCount: Schema.optional(
    Schema.suspend(() => VMAttributeMinMaxIntegerSchema),
  ),
  networkInterfaceCount: Schema.optional(
    Schema.suspend(() => VMAttributeMinMaxIntegerSchema),
  ),
  networkBandwidthInMbps: Schema.optional(
    Schema.suspend(() => VMAttributeMinMaxDoubleSchema),
  ),
  rdmaSupport: Schema.optional(Schema.suspend(() => VMAttributeSupportSchema)),
  rdmaNetworkInterfaceCount: Schema.optional(
    Schema.suspend(() => VMAttributeMinMaxIntegerSchema),
  ),
  acceleratorSupport: Schema.optional(
    Schema.suspend(() => VMAttributeSupportSchema),
  ),
  acceleratorManufacturers: Schema.optional(
    Schema.Array(Schema.suspend(() => AcceleratorManufacturerSchema)),
  ),
  acceleratorTypes: Schema.optional(
    Schema.Array(Schema.suspend(() => AcceleratorTypeSchema)),
  ),
  acceleratorCount: Schema.optional(
    Schema.suspend(() => VMAttributeMinMaxIntegerSchema),
  ),
  vmCategories: Schema.optional(
    Schema.Array(Schema.suspend(() => VMCategorySchema)),
  ),
  architectureTypes: Schema.optional(
    Schema.Array(Schema.suspend(() => ArchitectureTypeSchema)),
  ),
  cpuManufacturers: Schema.optional(
    Schema.Array(Schema.suspend(() => CpuManufacturerSchema)),
  ),
  burstableSupport: Schema.optional(
    Schema.suspend(() => VMAttributeSupportSchema),
  ),
  excludedVMSizes: Schema.optional(Schema.Array(Schema.String)),
});
const VMAttributeMinMaxIntegerSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    min: Schema.optional(Schema.Number),
    max: Schema.optional(Schema.Number),
  });
const VMAttributeMinMaxDoubleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    min: Schema.optional(Schema.Number),
    max: Schema.optional(Schema.Number),
  },
);
const VMAttributeSupportSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Excluded",
  "Included",
  "Required",
]);
const LocalStorageDiskTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "HDD",
  "SSD",
]);
const AcceleratorManufacturerSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["AMD", "Nvidia", "Xilinx"]);
const AcceleratorTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "GPU",
  "FPGA",
]);
const VMCategorySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "GeneralPurpose",
  "ComputeOptimized",
  "MemoryOptimized",
  "StorageOptimized",
  "GpuAccelerated",
  "FpgaAccelerated",
  "HighPerformanceCompute",
]);
const ArchitectureTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "ARM64",
  "X64",
]);
const CpuManufacturerSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Intel",
  "AMD",
  "Microsoft",
  "Ampere",
]);
const AdditionalLocationsProfileSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locationProfiles: Schema.Array(Schema.suspend(() => LocationProfileSchema)),
  });
const LocationProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  location: Schema.suspend(() => Azure_Core_azureLocationSchema),
  virtualMachineProfileOverride: Schema.optional(
    Schema.suspend(() => BaseVirtualMachineProfileSchema),
  ),
});
const Azure_Core_azureLocationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const BaseVirtualMachineProfileSchema =
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
    passName: Schema.optional(Schema.Literals(["OobeSystem"])),
    componentName: Schema.optional(
      Schema.Literals(["Microsoft-Windows-Shell-Setup"]),
    ),
    settingName: Schema.optional(Schema.suspend(() => SettingNamesSchema)),
    content: Schema.optional(Schema.String),
  });
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
  sourceVault: Schema.optional(Schema.suspend(() => SubResourceSchema)),
  vaultCertificates: Schema.optional(
    Schema.Array(Schema.suspend(() => VaultCertificateSchema)),
  ),
});
const SubResourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
});
const VaultCertificateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  certificateUrl: Schema.optional(Schema.String),
  certificateStore: Schema.optional(Schema.String),
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
  publisher: Schema.optional(Schema.String),
  offer: Schema.optional(Schema.String),
  sku: Schema.optional(Schema.String),
  version: Schema.optional(Schema.String),
  exactVersion: Schema.optional(Schema.String),
  sharedGalleryImageId: Schema.optional(Schema.String),
  communityGalleryImageId: Schema.optional(Schema.String),
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
    osType: Schema.optional(Schema.suspend(() => OperatingSystemTypesSchema)),
    image: Schema.optional(Schema.suspend(() => VirtualHardDiskSchema)),
    vhdContainers: Schema.optional(Schema.Array(Schema.String)),
    managedDisk: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetManagedDiskParametersSchema),
    ),
    deleteOption: Schema.optional(
      Schema.suspend(() => DiskDeleteOptionTypesSchema),
    ),
  });
const CachingTypesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "None",
  "ReadOnly",
  "ReadWrite",
]);
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
const OperatingSystemTypesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Windows",
  "Linux",
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
const DiskControllerTypesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "SCSI",
  "NVMe",
]);
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
const ApiEntityReferenceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
});
const VirtualMachineScaleSetNetworkConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    properties: Schema.optional(
      Schema.suspend(
        () => VirtualMachineScaleSetNetworkConfigurationPropertiesSchema,
      ),
    ),
  });
const VirtualMachineScaleSetNetworkConfigurationPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primary: Schema.optional(Schema.Boolean),
    enableAcceleratedNetworking: Schema.optional(Schema.Boolean),
    disableTcpStateTracking: Schema.optional(Schema.Boolean),
    enableFpga: Schema.optional(Schema.Boolean),
    networkSecurityGroup: Schema.optional(
      Schema.suspend(() => SubResourceSchema),
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
      Schema.Array(Schema.suspend(() => SubResourceSchema)),
    ),
    applicationSecurityGroups: Schema.optional(
      Schema.Array(Schema.suspend(() => SubResourceSchema)),
    ),
    loadBalancerBackendAddressPools: Schema.optional(
      Schema.Array(Schema.suspend(() => SubResourceSchema)),
    ),
    loadBalancerInboundNatPools: Schema.optional(
      Schema.Array(Schema.suspend(() => SubResourceSchema)),
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
    publicIPPrefix: Schema.optional(Schema.suspend(() => SubResourceSchema)),
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
]);
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
});
const ModeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Audit",
  "Enforce",
]);
const DiagnosticsProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bootDiagnostics: Schema.optional(Schema.suspend(() => BootDiagnosticsSchema)),
});
const BootDiagnosticsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
  storageUri: Schema.optional(Schema.String),
});
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
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineScaleSetExtensionPropertiesSchema),
    ),
  });
const VirtualMachineScaleSetExtensionPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    forceUpdateTag: Schema.optional(Schema.String),
    publisher: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    typeHandlerVersion: Schema.optional(Schema.String),
    autoUpgradeMinorVersion: Schema.optional(Schema.Boolean),
    enableAutomaticUpgrade: Schema.optional(Schema.Boolean),
    settings: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    protectedSettings: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    provisioningState: Schema.optional(Schema.String),
    provisionAfterExtensions: Schema.optional(Schema.Array(Schema.String)),
    suppressFailures: Schema.optional(Schema.Boolean),
    protectedSettingsFromKeyVault: Schema.optional(
      Schema.suspend(() => KeyVaultSecretReferenceSchema),
    ),
  });
const KeyVaultSecretReferenceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    secretUrl: Schema.String,
    sourceVault: Schema.suspend(() => SubResourceSchema),
  },
);
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
      Schema.suspend(() => SubResourceSchema),
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
const VMSizePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vCPUsAvailable: Schema.optional(Schema.Number),
  vCPUsPerCore: Schema.optional(Schema.Number),
});
const ServiceArtifactReferenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  });
const SecurityPostureReferenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    excludeExtensions: Schema.optional(Schema.Array(Schema.String)),
    isOverridable: Schema.optional(Schema.Boolean),
  });
const ComputeProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  baseVirtualMachineProfile: Schema.suspend(
    () => BaseVirtualMachineProfileSchema,
  ),
  computeApiVersion: Schema.optional(Schema.String),
  platformFaultDomainCount: Schema.optional(Schema.Number),
  additionalVirtualMachineCapabilities: Schema.optional(
    Schema.suspend(() => AdditionalCapabilitiesSchema),
  ),
});
const AdditionalCapabilitiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ultraSSDEnabled: Schema.optional(Schema.Boolean),
  hibernationEnabled: Schema.optional(Schema.Boolean),
});
const ManagedServiceIdentityTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "None",
    "SystemAssigned",
    "UserAssigned",
    "SystemAssigned,UserAssigned",
  ]);
const UserAssignedIdentitiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
  Schema.String,
  Schema.suspend(() => UserAssignedIdentitySchema),
);
const UserAssignedIdentitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  principalId: Schema.optional(Schema.String),
  clientId: Schema.optional(Schema.String),
});
const ManagedServiceIdentityUpdateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(
      Schema.Literals([
        "None",
        "SystemAssigned",
        "UserAssigned",
        "SystemAssigned,UserAssigned",
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
  });
const ResourcePlanUpdateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  publisher: Schema.optional(Schema.String),
  product: Schema.optional(Schema.String),
  promotionCode: Schema.optional(Schema.String),
  version: Schema.optional(Schema.String),
});
const VirtualMachineScaleSetSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  id: Schema.String,
  type: Schema.optional(Schema.String),
  operationStatus: Schema.suspend(() => ProvisioningStateSchema),
  error: Schema.optional(Schema.suspend(() => ApiErrorSchema)),
});
const ApiErrorSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  code: Schema.optional(Schema.String),
  target: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
  details: Schema.optional(
    Schema.Array(Schema.suspend(() => ApiErrorBaseSchema)),
  ),
  innererror: Schema.optional(Schema.suspend(() => InnerErrorSchema)),
});
const ApiErrorBaseSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  code: Schema.optional(Schema.String),
  target: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
});
const InnerErrorSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  exceptionType: Schema.optional(Schema.String),
  errorDetail: Schema.optional(Schema.String),
});

// Input Schema
export const FleetsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    fleetName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(Schema.suspend(() => FleetPropertiesSchema)),
    zones: Schema.optional(Schema.Array(Schema.String)),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.suspend(() => ManagedServiceIdentityTypeSchema),
        userAssignedIdentities: Schema.optional(
          Schema.suspend(() => UserAssignedIdentitiesSchema),
        ),
      }),
    ),
    plan: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        publisher: Schema.String,
        product: Schema.String,
        promotionCode: Schema.optional(Schema.String),
        version: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureFleet/fleets/{fleetName}",
      apiVersion: "2024-11-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type FleetsCreateOrUpdateInput = typeof FleetsCreateOrUpdateInput.Type;

// Output Schema
export const FleetsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => FleetPropertiesSchema)),
    zones: Schema.optional(Schema.Array(Schema.String)),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.suspend(() => ManagedServiceIdentityTypeSchema),
        userAssignedIdentities: Schema.optional(
          Schema.suspend(() => UserAssignedIdentitiesSchema),
        ),
      }),
    ),
    plan: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        publisher: Schema.String,
        product: Schema.String,
        promotionCode: Schema.optional(Schema.String),
        version: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type FleetsCreateOrUpdateOutput = typeof FleetsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a Fleet
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fleetName - The name of the Compute Fleet
 */
export const FleetsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FleetsCreateOrUpdateInput,
    outputSchema: FleetsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const FleetsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  fleetName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureFleet/fleets/{fleetName}",
    apiVersion: "2024-11-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type FleetsDeleteInput = typeof FleetsDeleteInput.Type;

// Output Schema
export const FleetsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type FleetsDeleteOutput = typeof FleetsDeleteOutput.Type;

// The operation
/**
 * Delete a Fleet
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fleetName - The name of the Compute Fleet
 */
export const FleetsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FleetsDeleteInput,
  outputSchema: FleetsDeleteOutput,
}));
// Input Schema
export const FleetsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  fleetName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureFleet/fleets/{fleetName}",
    apiVersion: "2024-11-01",
  }),
);
export type FleetsGetInput = typeof FleetsGetInput.Type;

// Output Schema
export const FleetsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => FleetPropertiesSchema)),
  zones: Schema.optional(Schema.Array(Schema.String)),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.suspend(() => ManagedServiceIdentityTypeSchema),
      userAssignedIdentities: Schema.optional(
        Schema.suspend(() => UserAssignedIdentitiesSchema),
      ),
    }),
  ),
  plan: Schema.optional(
    Schema.Struct({
      name: Schema.String,
      publisher: Schema.String,
      product: Schema.String,
      promotionCode: Schema.optional(Schema.String),
      version: Schema.optional(Schema.String),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type FleetsGetOutput = typeof FleetsGetOutput.Type;

// The operation
/**
 * Get a Fleet
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fleetName - The name of the Compute Fleet
 */
export const FleetsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FleetsGetInput,
  outputSchema: FleetsGetOutput,
}));
// Input Schema
export const FleetsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureFleet/fleets",
      apiVersion: "2024-11-01",
    }),
  );
export type FleetsListByResourceGroupInput =
  typeof FleetsListByResourceGroupInput.Type;

// Output Schema
export const FleetsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => FleetSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type FleetsListByResourceGroupOutput =
  typeof FleetsListByResourceGroupOutput.Type;

// The operation
/**
 * List Fleet resources by resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const FleetsListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FleetsListByResourceGroupInput,
    outputSchema: FleetsListByResourceGroupOutput,
  }),
);
// Input Schema
export const FleetsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureFleet/fleets",
      apiVersion: "2024-11-01",
    }),
  );
export type FleetsListBySubscriptionInput =
  typeof FleetsListBySubscriptionInput.Type;

// Output Schema
export const FleetsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => FleetSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type FleetsListBySubscriptionOutput =
  typeof FleetsListBySubscriptionOutput.Type;

// The operation
/**
 * List Fleet resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const FleetsListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FleetsListBySubscriptionInput,
    outputSchema: FleetsListBySubscriptionOutput,
  }),
);
// Input Schema
export const FleetsListVirtualMachineScaleSetsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureFleet/fleets/{name}/virtualMachineScaleSets",
      apiVersion: "2024-11-01",
    }),
  );
export type FleetsListVirtualMachineScaleSetsInput =
  typeof FleetsListVirtualMachineScaleSetsInput.Type;

// Output Schema
export const FleetsListVirtualMachineScaleSetsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => VirtualMachineScaleSetSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type FleetsListVirtualMachineScaleSetsOutput =
  typeof FleetsListVirtualMachineScaleSetsOutput.Type;

// The operation
/**
 * List VirtualMachineScaleSet resources by Fleet
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the Fleet
 */
export const FleetsListVirtualMachineScaleSets =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FleetsListVirtualMachineScaleSetsInput,
    outputSchema: FleetsListVirtualMachineScaleSetsOutput,
  }));
// Input Schema
export const FleetsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  fleetName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  identity: Schema.optional(
    Schema.suspend(() => ManagedServiceIdentityUpdateSchema),
  ),
  plan: Schema.optional(Schema.suspend(() => ResourcePlanUpdateSchema)),
  properties: Schema.optional(Schema.suspend(() => FleetPropertiesSchema)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureFleet/fleets/{fleetName}",
    apiVersion: "2024-11-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type FleetsUpdateInput = typeof FleetsUpdateInput.Type;

// Output Schema
export const FleetsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => FleetPropertiesSchema)),
  zones: Schema.optional(Schema.Array(Schema.String)),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.suspend(() => ManagedServiceIdentityTypeSchema),
      userAssignedIdentities: Schema.optional(
        Schema.suspend(() => UserAssignedIdentitiesSchema),
      ),
    }),
  ),
  plan: Schema.optional(
    Schema.Struct({
      name: Schema.String,
      publisher: Schema.String,
      product: Schema.String,
      promotionCode: Schema.optional(Schema.String),
      version: Schema.optional(Schema.String),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type FleetsUpdateOutput = typeof FleetsUpdateOutput.Type;

// The operation
/**
 * Update a Fleet
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fleetName - The name of the Compute Fleet
 */
export const FleetsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FleetsUpdateInput,
  outputSchema: FleetsUpdateOutput,
}));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.AzureFleet/operations",
    apiVersion: "2024-11-01",
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
