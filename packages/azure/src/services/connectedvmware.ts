/**
 * Azure Connectedvmware API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";

// Shared schemas
const operationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
const ResourcePoolPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uuid: Schema.optional(Schema.String),
  vCenterId: Schema.optional(Schema.String),
  moRefId: Schema.optional(Schema.String),
  inventoryItemId: Schema.optional(Schema.String),
  moName: Schema.optional(Schema.String),
  cpuSharesLevel: Schema.optional(Schema.String),
  cpuReservationMHz: Schema.optional(Schema.Number),
  cpuLimitMHz: Schema.optional(Schema.Number),
  memSharesLevel: Schema.optional(Schema.String),
  memReservationMB: Schema.optional(Schema.Number),
  memLimitMB: Schema.optional(Schema.Number),
  memOverallUsageGB: Schema.optional(Schema.Number),
  memCapacityGB: Schema.optional(Schema.Number),
  cpuOverallUsageMHz: Schema.optional(Schema.Number),
  cpuCapacityMHz: Schema.optional(Schema.Number),
  customResourceName: Schema.optional(Schema.String),
  datastoreIds: Schema.optional(Schema.Array(Schema.String)),
  networkIds: Schema.optional(Schema.Array(Schema.String)),
  statuses: Schema.optional(
    Schema.Array(Schema.suspend(() => ResourceStatusSchema)),
  ),
  provisioningState: Schema.optional(
    Schema.suspend(() => ResourceProvisioningStateSchema),
  ),
});
const ResourceStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
  severity: Schema.optional(Schema.String),
  lastUpdatedAt: Schema.optional(Schema.String),
});
const ResourceProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Failed",
    "Canceled",
    "Provisioning",
    "Updating",
    "Deleting",
    "Accepted",
    "Created",
  ]);
const ExtendedLocationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
});
const ResourcePoolSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => ResourcePoolPropertiesSchema),
  location: Schema.String,
  extendedLocation: Schema.optional(
    Schema.suspend(() => ExtendedLocationSchema),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
});
const ClusterPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uuid: Schema.optional(Schema.String),
  vCenterId: Schema.optional(Schema.String),
  moRefId: Schema.optional(Schema.String),
  inventoryItemId: Schema.optional(Schema.String),
  moName: Schema.optional(Schema.String),
  statuses: Schema.optional(
    Schema.Array(Schema.suspend(() => ResourceStatusSchema)),
  ),
  customResourceName: Schema.optional(Schema.String),
  usedMemoryGB: Schema.optional(Schema.Number),
  totalMemoryGB: Schema.optional(Schema.Number),
  usedCpuMHz: Schema.optional(Schema.Number),
  totalCpuMHz: Schema.optional(Schema.Number),
  datastoreIds: Schema.optional(Schema.Array(Schema.String)),
  networkIds: Schema.optional(Schema.Array(Schema.String)),
  provisioningState: Schema.optional(
    Schema.suspend(() => ResourceProvisioningStateSchema),
  ),
});
const ClusterSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => ClusterPropertiesSchema),
  location: Schema.String,
  extendedLocation: Schema.optional(
    Schema.suspend(() => ExtendedLocationSchema),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
});
const HostPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uuid: Schema.optional(Schema.String),
  vCenterId: Schema.optional(Schema.String),
  moRefId: Schema.optional(Schema.String),
  inventoryItemId: Schema.optional(Schema.String),
  moName: Schema.optional(Schema.String),
  statuses: Schema.optional(
    Schema.Array(Schema.suspend(() => ResourceStatusSchema)),
  ),
  customResourceName: Schema.optional(Schema.String),
  overallMemoryUsageGB: Schema.optional(Schema.Number),
  memorySizeGB: Schema.optional(Schema.Number),
  overallCpuUsageMHz: Schema.optional(Schema.Number),
  cpuMhz: Schema.optional(Schema.Number),
  datastoreIds: Schema.optional(Schema.Array(Schema.String)),
  networkIds: Schema.optional(Schema.Array(Schema.String)),
  provisioningState: Schema.optional(
    Schema.suspend(() => ResourceProvisioningStateSchema),
  ),
});
const HostSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => HostPropertiesSchema),
  location: Schema.String,
  extendedLocation: Schema.optional(
    Schema.suspend(() => ExtendedLocationSchema),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
});
const DatastorePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uuid: Schema.optional(Schema.String),
  vCenterId: Schema.optional(Schema.String),
  moRefId: Schema.optional(Schema.String),
  inventoryItemId: Schema.optional(Schema.String),
  moName: Schema.optional(Schema.String),
  statuses: Schema.optional(
    Schema.Array(Schema.suspend(() => ResourceStatusSchema)),
  ),
  customResourceName: Schema.optional(Schema.String),
  capacityGB: Schema.optional(Schema.Number),
  freeSpaceGB: Schema.optional(Schema.Number),
  provisioningState: Schema.optional(
    Schema.suspend(() => ResourceProvisioningStateSchema),
  ),
});
const DatastoreSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => DatastorePropertiesSchema),
  location: Schema.String,
  extendedLocation: Schema.optional(
    Schema.suspend(() => ExtendedLocationSchema),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
});
const VCenterPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uuid: Schema.optional(Schema.String),
  fqdn: Schema.String,
  port: Schema.optional(Schema.Number),
  version: Schema.optional(Schema.String),
  instanceUuid: Schema.optional(Schema.String),
  connectionStatus: Schema.optional(Schema.String),
  customResourceName: Schema.optional(Schema.String),
  credentials: Schema.optional(Schema.suspend(() => VICredentialSchema)),
  statuses: Schema.optional(
    Schema.Array(Schema.suspend(() => ResourceStatusSchema)),
  ),
  provisioningState: Schema.optional(
    Schema.suspend(() => ResourceProvisioningStateSchema),
  ),
});
const VICredentialSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  username: Schema.optional(Schema.String),
  password: Schema.optional(SensitiveOutputString),
});
const VCenterSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => VCenterPropertiesSchema),
  location: Schema.String,
  extendedLocation: Schema.optional(
    Schema.suspend(() => ExtendedLocationSchema),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
});
const VirtualMachineTemplatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uuid: Schema.optional(Schema.String),
    vCenterId: Schema.optional(Schema.String),
    moRefId: Schema.optional(Schema.String),
    inventoryItemId: Schema.optional(Schema.String),
    moName: Schema.optional(Schema.String),
    memorySizeMB: Schema.optional(Schema.Number),
    numCPUs: Schema.optional(Schema.Number),
    numCoresPerSocket: Schema.optional(Schema.Number),
    osType: Schema.optional(Schema.suspend(() => OsTypeSchema)),
    osName: Schema.optional(Schema.String),
    folderPath: Schema.optional(Schema.String),
    networkInterfaces: Schema.optional(
      Schema.Array(Schema.suspend(() => NetworkInterfaceSchema)),
    ),
    disks: Schema.optional(
      Schema.Array(Schema.suspend(() => VirtualDiskSchema)),
    ),
    customResourceName: Schema.optional(Schema.String),
    toolsVersionStatus: Schema.optional(Schema.String),
    toolsVersion: Schema.optional(Schema.String),
    firmwareType: Schema.optional(Schema.suspend(() => FirmwareTypeSchema)),
    statuses: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceStatusSchema)),
    ),
    provisioningState: Schema.optional(
      Schema.suspend(() => ResourceProvisioningStateSchema),
    ),
  });
const OsTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Windows",
  "Linux",
  "Other",
]);
const NetworkInterfaceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  label: Schema.optional(Schema.String),
  ipAddresses: Schema.optional(Schema.Array(Schema.String)),
  macAddress: Schema.optional(Schema.String),
  networkId: Schema.optional(Schema.String),
  nicType: Schema.optional(Schema.suspend(() => NICTypeSchema)),
  powerOnBoot: Schema.optional(Schema.suspend(() => PowerOnBootOptionSchema)),
  networkMoRefId: Schema.optional(Schema.String),
  networkMoName: Schema.optional(Schema.String),
  deviceKey: Schema.optional(Schema.Number),
  ipSettings: Schema.optional(Schema.suspend(() => NicIPSettingsSchema)),
});
const NICTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "vmxnet3",
  "vmxnet2",
  "vmxnet",
  "e1000",
  "e1000e",
  "pcnet32",
]);
const PowerOnBootOptionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "enabled",
  "disabled",
]);
const NicIPSettingsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  allocationMethod: Schema.optional(
    Schema.suspend(() => IPAddressAllocationMethodSchema),
  ),
  dnsServers: Schema.optional(Schema.Array(Schema.String)),
  gateway: Schema.optional(Schema.Array(Schema.String)),
  ipAddress: Schema.optional(Schema.String),
  subnetMask: Schema.optional(Schema.String),
  primaryWinsServer: Schema.optional(Schema.String),
  secondaryWinsServer: Schema.optional(Schema.String),
  ipAddressInfo: Schema.optional(
    Schema.Array(Schema.suspend(() => NicIPAddressSettingsSchema)),
  ),
});
const IPAddressAllocationMethodSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "unset",
    "dynamic",
    "static",
    "linklayer",
    "random",
    "other",
  ]);
const NicIPAddressSettingsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  allocationMethod: Schema.optional(Schema.String),
  ipAddress: Schema.optional(Schema.String),
  subnetMask: Schema.optional(Schema.String),
});
const VirtualDiskSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  label: Schema.optional(Schema.String),
  diskObjectId: Schema.optional(Schema.String),
  diskSizeGB: Schema.optional(Schema.Number),
  deviceKey: Schema.optional(Schema.Number),
  diskMode: Schema.optional(Schema.suspend(() => DiskModeSchema)),
  controllerKey: Schema.optional(Schema.Number),
  unitNumber: Schema.optional(Schema.Number),
  deviceName: Schema.optional(Schema.String),
  diskType: Schema.optional(Schema.suspend(() => DiskTypeSchema)),
});
const DiskModeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "persistent",
  "independent_persistent",
  "independent_nonpersistent",
]);
const DiskTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "flat",
  "pmem",
  "rawphysical",
  "rawvirtual",
  "sparse",
  "sesparse",
  "unknown",
]);
const FirmwareTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "bios",
  "efi",
]);
const VirtualMachineTemplateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => VirtualMachineTemplatePropertiesSchema),
  location: Schema.String,
  extendedLocation: Schema.optional(
    Schema.suspend(() => ExtendedLocationSchema),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
});
const VirtualNetworkPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uuid: Schema.optional(Schema.String),
    vCenterId: Schema.optional(Schema.String),
    moRefId: Schema.optional(Schema.String),
    inventoryItemId: Schema.optional(Schema.String),
    moName: Schema.optional(Schema.String),
    customResourceName: Schema.optional(Schema.String),
    statuses: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceStatusSchema)),
    ),
    provisioningState: Schema.optional(
      Schema.suspend(() => ResourceProvisioningStateSchema),
    ),
  });
const VirtualNetworkSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => VirtualNetworkPropertiesSchema),
  location: Schema.String,
  extendedLocation: Schema.optional(
    Schema.suspend(() => ExtendedLocationSchema),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
});
const InventoryItemPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    inventoryType: Schema.suspend(() => InventoryTypeSchema),
    managedResourceId: Schema.optional(Schema.String),
    moRefId: Schema.optional(Schema.String),
    moName: Schema.optional(Schema.String),
    provisioningState: Schema.optional(
      Schema.suspend(() => ResourceProvisioningStateSchema),
    ),
  },
);
const InventoryTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "ResourcePool",
  "VirtualMachine",
  "VirtualMachineTemplate",
  "VirtualNetwork",
  "Cluster",
  "Datastore",
  "Host",
]);
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
const InventoryItemSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const VirtualMachineInstancePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    placementProfile: Schema.optional(
      Schema.suspend(() => PlacementProfileSchema),
    ),
    osProfile: Schema.optional(
      Schema.suspend(() => OsProfileForVMInstanceSchema),
    ),
    hardwareProfile: Schema.optional(
      Schema.suspend(() => HardwareProfileSchema),
    ),
    networkProfile: Schema.optional(Schema.suspend(() => NetworkProfileSchema)),
    storageProfile: Schema.optional(Schema.suspend(() => StorageProfileSchema)),
    securityProfile: Schema.optional(
      Schema.suspend(() => SecurityProfileSchema),
    ),
    infrastructureProfile: Schema.optional(
      Schema.suspend(() => InfrastructureProfileSchema),
    ),
    powerState: Schema.optional(Schema.String),
    statuses: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceStatusSchema)),
    ),
    provisioningState: Schema.optional(
      Schema.suspend(() => ResourceProvisioningStateSchema),
    ),
    resourceUid: Schema.optional(Schema.String),
  });
const PlacementProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourcePoolId: Schema.optional(Schema.String),
  clusterId: Schema.optional(Schema.String),
  hostId: Schema.optional(Schema.String),
  datastoreId: Schema.optional(Schema.String),
});
const OsProfileForVMInstanceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  computerName: Schema.optional(Schema.String),
  adminUsername: Schema.optional(Schema.String),
  adminPassword: Schema.optional(SensitiveOutputString),
  guestId: Schema.optional(Schema.String),
  osType: Schema.optional(Schema.suspend(() => OsTypeSchema)),
  osSku: Schema.optional(Schema.String),
  toolsRunningStatus: Schema.optional(Schema.String),
  toolsVersionStatus: Schema.optional(Schema.String),
  toolsVersion: Schema.optional(Schema.String),
  windowsConfiguration: Schema.optional(
    Schema.suspend(() => WindowsConfigurationSchema),
  ),
});
const WindowsConfigurationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fullName: Schema.optional(Schema.String),
  orgName: Schema.optional(Schema.String),
  domainName: Schema.optional(Schema.String),
  domainUsername: Schema.optional(Schema.String),
  domainUserPassword: Schema.optional(SensitiveOutputString),
  workGroupName: Schema.optional(Schema.String),
  productId: Schema.optional(Schema.String),
  autoLogon: Schema.optional(Schema.Boolean),
  autoLogonCount: Schema.optional(Schema.Number),
  timeZone: Schema.optional(Schema.String),
  firstLogonCommands: Schema.optional(Schema.Array(Schema.String)),
});
const HardwareProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  memorySizeMB: Schema.optional(Schema.Number),
  numCPUs: Schema.optional(Schema.Number),
  numCoresPerSocket: Schema.optional(Schema.Number),
  cpuHotAddEnabled: Schema.optional(Schema.Boolean),
  cpuHotRemoveEnabled: Schema.optional(Schema.Boolean),
  memoryHotAddEnabled: Schema.optional(Schema.Boolean),
});
const NetworkProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  networkInterfaces: Schema.optional(
    Schema.Array(Schema.suspend(() => NetworkInterfaceSchema)),
  ),
});
const StorageProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  disks: Schema.optional(Schema.Array(Schema.suspend(() => VirtualDiskSchema))),
  scsiControllers: Schema.optional(
    Schema.Array(Schema.suspend(() => VirtualSCSIControllerSchema)),
  ),
});
const VirtualSCSIControllerSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.suspend(() => SCSIControllerTypeSchema)),
  controllerKey: Schema.optional(Schema.Number),
  busNumber: Schema.optional(Schema.Number),
  scsiCtlrUnitNumber: Schema.optional(Schema.Number),
  sharing: Schema.optional(Schema.suspend(() => VirtualSCSISharingSchema)),
});
const SCSIControllerTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "lsilogic",
  "buslogic",
  "pvscsi",
  "lsilogicsas",
]);
const VirtualSCSISharingSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "noSharing",
  "physicalSharing",
  "virtualSharing",
]);
const SecurityProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uefiSettings: Schema.optional(Schema.suspend(() => UefiSettingsSchema)),
});
const UefiSettingsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  secureBootEnabled: Schema.optional(Schema.Boolean),
});
const InfrastructureProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  templateId: Schema.optional(Schema.String),
  vCenterId: Schema.optional(Schema.String),
  moRefId: Schema.optional(Schema.String),
  inventoryItemId: Schema.optional(Schema.String),
  moName: Schema.optional(Schema.String),
  folderPath: Schema.optional(Schema.String),
  instanceUuid: Schema.optional(Schema.String),
  smbiosUuid: Schema.optional(Schema.String),
  firmwareType: Schema.optional(Schema.suspend(() => FirmwareTypeSchema)),
  customResourceName: Schema.optional(Schema.String),
});
const VirtualMachineInstanceUpdatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hardwareProfile: Schema.optional(
      Schema.suspend(() => HardwareProfileSchema),
    ),
    storageProfile: Schema.optional(
      Schema.suspend(() => StorageProfileUpdateSchema),
    ),
    networkProfile: Schema.optional(
      Schema.suspend(() => NetworkProfileUpdateSchema),
    ),
  });
const StorageProfileUpdateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  disks: Schema.optional(
    Schema.Array(Schema.suspend(() => VirtualDiskUpdateSchema)),
  ),
});
const VirtualDiskUpdateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  diskSizeGB: Schema.optional(Schema.Number),
  deviceKey: Schema.optional(Schema.Number),
  diskMode: Schema.optional(Schema.suspend(() => DiskModeSchema)),
  controllerKey: Schema.optional(Schema.Number),
  unitNumber: Schema.optional(Schema.Number),
  deviceName: Schema.optional(Schema.String),
  diskType: Schema.optional(Schema.suspend(() => DiskTypeSchema)),
});
const NetworkProfileUpdateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  networkInterfaces: Schema.optional(
    Schema.Array(Schema.suspend(() => NetworkInterfaceUpdateSchema)),
  ),
});
const NetworkInterfaceUpdateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  networkId: Schema.optional(Schema.String),
  nicType: Schema.optional(Schema.suspend(() => NICTypeSchema)),
  powerOnBoot: Schema.optional(Schema.suspend(() => PowerOnBootOptionSchema)),
  deviceKey: Schema.optional(Schema.Number),
});
const VirtualMachineInstanceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const VmInstanceHybridIdentityMetadataPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUid: Schema.optional(Schema.String),
    publicKey: Schema.optional(Schema.String),
    provisioningState: Schema.optional(
      Schema.suspend(() => ResourceProvisioningStateSchema),
    ),
  });
const VmInstanceHybridIdentityMetadataSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const GuestAgentPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uuid: Schema.optional(Schema.String),
  credentials: Schema.optional(Schema.suspend(() => GuestCredentialSchema)),
  privateLinkScopeResourceId: Schema.optional(Schema.String),
  httpProxyConfig: Schema.optional(
    Schema.suspend(() => HttpProxyConfigurationSchema),
  ),
  provisioningAction: Schema.optional(
    Schema.suspend(() => ProvisioningActionSchema),
  ),
  status: Schema.optional(Schema.String),
  customResourceName: Schema.optional(Schema.String),
  statuses: Schema.optional(
    Schema.Array(Schema.suspend(() => ResourceStatusSchema)),
  ),
  provisioningState: Schema.optional(
    Schema.suspend(() => ResourceProvisioningStateSchema),
  ),
});
const GuestCredentialSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  username: Schema.optional(Schema.String),
  password: Schema.optional(SensitiveOutputString),
  privateKey: Schema.optional(SensitiveOutputString),
});
const HttpProxyConfigurationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  httpsProxy: Schema.optional(Schema.String),
});
const ProvisioningActionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "install",
  "uninstall",
  "repair",
]);
const GuestAgentSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});

// Input Schema
export const ClustersCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  clusterName: Schema.String.pipe(T.PathParam()),
  properties: Schema.suspend(() => ClusterPropertiesSchema),
  location: Schema.String,
  extendedLocation: Schema.optional(
    Schema.suspend(() => ExtendedLocationSchema),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/clusters/{clusterName}",
    apiVersion: "2023-12-01",
    longRunning: { finalStateVia: "azure-async-operation" },
  }),
);
export type ClustersCreateInput = typeof ClustersCreateInput.Type;

// Output Schema
export const ClustersCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => ClusterPropertiesSchema),
  location: Schema.String,
  extendedLocation: Schema.optional(
    Schema.suspend(() => ExtendedLocationSchema),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
});
export type ClustersCreateOutput = typeof ClustersCreateOutput.Type;

// The operation
/**
 * Implements cluster PUT method.
 *
 * Create Or Update cluster.
 *
 * @param clusterName - Name of the cluster.
 */
export const ClustersCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersCreateInput,
  outputSchema: ClustersCreateOutput,
}));
// Input Schema
export const ClustersDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  clusterName: Schema.String.pipe(T.PathParam()),
  force: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/clusters/{clusterName}",
    apiVersion: "2023-12-01",
    longRunning: {},
  }),
);
export type ClustersDeleteInput = typeof ClustersDeleteInput.Type;

// Output Schema
export const ClustersDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ClustersDeleteOutput = typeof ClustersDeleteOutput.Type;

// The operation
/**
 * Deletes an cluster.
 *
 * Implements cluster DELETE method.
 *
 * @param clusterName - Name of the cluster.
 * @param force - Whether force delete was specified.
 */
export const ClustersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersDeleteInput,
  outputSchema: ClustersDeleteOutput,
}));
// Input Schema
export const ClustersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/clusters/{clusterName}",
    apiVersion: "2023-12-01",
  }),
);
export type ClustersGetInput = typeof ClustersGetInput.Type;

// Output Schema
export const ClustersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => ClusterPropertiesSchema),
  location: Schema.String,
  extendedLocation: Schema.optional(
    Schema.suspend(() => ExtendedLocationSchema),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
});
export type ClustersGetOutput = typeof ClustersGetOutput.Type;

// The operation
/**
 * Gets a cluster.
 *
 * Implements cluster GET method.
 *
 * @param clusterName - Name of the cluster.
 */
export const ClustersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersGetInput,
  outputSchema: ClustersGetOutput,
}));
// Input Schema
export const ClustersListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ConnectedVMwarevSphere/clusters",
    apiVersion: "2023-12-01",
  }),
);
export type ClustersListInput = typeof ClustersListInput.Type;

// Output Schema
export const ClustersListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.Array(Schema.suspend(() => ClusterSchema)),
});
export type ClustersListOutput = typeof ClustersListOutput.Type;

// The operation
/**
 * Implements GET clusters in a subscription.
 *
 * List of clusters in a subscription.
 */
export const ClustersList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersListInput,
  outputSchema: ClustersListOutput,
}));
// Input Schema
export const ClustersListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/clusters",
      apiVersion: "2023-12-01",
    }),
  );
export type ClustersListByResourceGroupInput =
  typeof ClustersListByResourceGroupInput.Type;

// Output Schema
export const ClustersListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(Schema.suspend(() => ClusterSchema)),
  });
export type ClustersListByResourceGroupOutput =
  typeof ClustersListByResourceGroupOutput.Type;

// The operation
/**
 * Implements GET clusters in a resource group.
 *
 * List of clusters in a resource group.
 */
export const ClustersListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClustersListByResourceGroupInput,
    outputSchema: ClustersListByResourceGroupOutput,
  }),
);
// Input Schema
export const ClustersUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  clusterName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/clusters/{clusterName}",
    apiVersion: "2023-12-01",
  }),
);
export type ClustersUpdateInput = typeof ClustersUpdateInput.Type;

// Output Schema
export const ClustersUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => ClusterPropertiesSchema),
  location: Schema.String,
  extendedLocation: Schema.optional(
    Schema.suspend(() => ExtendedLocationSchema),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
});
export type ClustersUpdateOutput = typeof ClustersUpdateOutput.Type;

// The operation
/**
 * Updates a cluster.
 *
 * API to update certain properties of the cluster resource.
 *
 * @param clusterName - Name of the cluster.
 */
export const ClustersUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersUpdateInput,
  outputSchema: ClustersUpdateOutput,
}));
// Input Schema
export const DatastoresCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  datastoreName: Schema.String.pipe(T.PathParam()),
  properties: Schema.suspend(() => DatastorePropertiesSchema),
  location: Schema.String,
  extendedLocation: Schema.optional(
    Schema.suspend(() => ExtendedLocationSchema),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/datastores/{datastoreName}",
    apiVersion: "2023-12-01",
    longRunning: { finalStateVia: "azure-async-operation" },
  }),
);
export type DatastoresCreateInput = typeof DatastoresCreateInput.Type;

// Output Schema
export const DatastoresCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.suspend(() => DatastorePropertiesSchema),
    location: Schema.String,
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  },
);
export type DatastoresCreateOutput = typeof DatastoresCreateOutput.Type;

// The operation
/**
 * Implements datastore PUT method.
 *
 * Create Or Update datastore.
 *
 * @param datastoreName - Name of the datastore.
 */
export const DatastoresCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DatastoresCreateInput,
  outputSchema: DatastoresCreateOutput,
}));
// Input Schema
export const DatastoresDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  datastoreName: Schema.String.pipe(T.PathParam()),
  force: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/datastores/{datastoreName}",
    apiVersion: "2023-12-01",
    longRunning: {},
  }),
);
export type DatastoresDeleteInput = typeof DatastoresDeleteInput.Type;

// Output Schema
export const DatastoresDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DatastoresDeleteOutput = typeof DatastoresDeleteOutput.Type;

// The operation
/**
 * Deletes an datastore.
 *
 * Implements datastore DELETE method.
 *
 * @param datastoreName - Name of the datastore.
 * @param force - Whether force delete was specified.
 */
export const DatastoresDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DatastoresDeleteInput,
  outputSchema: DatastoresDeleteOutput,
}));
// Input Schema
export const DatastoresGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  datastoreName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/datastores/{datastoreName}",
    apiVersion: "2023-12-01",
  }),
);
export type DatastoresGetInput = typeof DatastoresGetInput.Type;

// Output Schema
export const DatastoresGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => DatastorePropertiesSchema),
  location: Schema.String,
  extendedLocation: Schema.optional(
    Schema.suspend(() => ExtendedLocationSchema),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
});
export type DatastoresGetOutput = typeof DatastoresGetOutput.Type;

// The operation
/**
 * Gets a datastore.
 *
 * Implements datastore GET method.
 *
 * @param datastoreName - Name of the datastore.
 */
export const DatastoresGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DatastoresGetInput,
  outputSchema: DatastoresGetOutput,
}));
// Input Schema
export const DatastoresListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ConnectedVMwarevSphere/datastores",
    apiVersion: "2023-12-01",
  }),
);
export type DatastoresListInput = typeof DatastoresListInput.Type;

// Output Schema
export const DatastoresListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.Array(Schema.suspend(() => DatastoreSchema)),
});
export type DatastoresListOutput = typeof DatastoresListOutput.Type;

// The operation
/**
 * Implements GET datastores in a subscription.
 *
 * List of datastores in a subscription.
 */
export const DatastoresList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DatastoresListInput,
  outputSchema: DatastoresListOutput,
}));
// Input Schema
export const DatastoresListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/datastores",
      apiVersion: "2023-12-01",
    }),
  );
export type DatastoresListByResourceGroupInput =
  typeof DatastoresListByResourceGroupInput.Type;

// Output Schema
export const DatastoresListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(Schema.suspend(() => DatastoreSchema)),
  });
export type DatastoresListByResourceGroupOutput =
  typeof DatastoresListByResourceGroupOutput.Type;

// The operation
/**
 * Implements GET datastores in a resource group.
 *
 * List of datastores in a resource group.
 */
export const DatastoresListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DatastoresListByResourceGroupInput,
    outputSchema: DatastoresListByResourceGroupOutput,
  }));
// Input Schema
export const DatastoresUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  datastoreName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/datastores/{datastoreName}",
    apiVersion: "2023-12-01",
  }),
);
export type DatastoresUpdateInput = typeof DatastoresUpdateInput.Type;

// Output Schema
export const DatastoresUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.suspend(() => DatastorePropertiesSchema),
    location: Schema.String,
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  },
);
export type DatastoresUpdateOutput = typeof DatastoresUpdateOutput.Type;

// The operation
/**
 * Updates a datastore.
 *
 * API to update certain properties of the datastore resource.
 *
 * @param datastoreName - Name of the datastore.
 */
export const DatastoresUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DatastoresUpdateInput,
  outputSchema: DatastoresUpdateOutput,
}));
// Input Schema
export const HostsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  hostName: Schema.String.pipe(T.PathParam()),
  properties: Schema.suspend(() => HostPropertiesSchema),
  location: Schema.String,
  extendedLocation: Schema.optional(
    Schema.suspend(() => ExtendedLocationSchema),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/hosts/{hostName}",
    apiVersion: "2023-12-01",
    longRunning: { finalStateVia: "azure-async-operation" },
  }),
);
export type HostsCreateInput = typeof HostsCreateInput.Type;

// Output Schema
export const HostsCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => HostPropertiesSchema),
  location: Schema.String,
  extendedLocation: Schema.optional(
    Schema.suspend(() => ExtendedLocationSchema),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
});
export type HostsCreateOutput = typeof HostsCreateOutput.Type;

// The operation
/**
 * Implements host PUT method.
 *
 * Create Or Update host.
 *
 * @param hostName - Name of the host.
 */
export const HostsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HostsCreateInput,
  outputSchema: HostsCreateOutput,
}));
// Input Schema
export const HostsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  hostName: Schema.String.pipe(T.PathParam()),
  force: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/hosts/{hostName}",
    apiVersion: "2023-12-01",
    longRunning: {},
  }),
);
export type HostsDeleteInput = typeof HostsDeleteInput.Type;

// Output Schema
export const HostsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type HostsDeleteOutput = typeof HostsDeleteOutput.Type;

// The operation
/**
 * Deletes an host.
 *
 * Implements host DELETE method.
 *
 * @param hostName - Name of the host.
 * @param force - Whether force delete was specified.
 */
export const HostsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HostsDeleteInput,
  outputSchema: HostsDeleteOutput,
}));
// Input Schema
export const HostsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  hostName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/hosts/{hostName}",
    apiVersion: "2023-12-01",
  }),
);
export type HostsGetInput = typeof HostsGetInput.Type;

// Output Schema
export const HostsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => HostPropertiesSchema),
  location: Schema.String,
  extendedLocation: Schema.optional(
    Schema.suspend(() => ExtendedLocationSchema),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
});
export type HostsGetOutput = typeof HostsGetOutput.Type;

// The operation
/**
 * Gets a host.
 *
 * Implements host GET method.
 *
 * @param hostName - Name of the host.
 */
export const HostsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HostsGetInput,
  outputSchema: HostsGetOutput,
}));
// Input Schema
export const HostsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ConnectedVMwarevSphere/hosts",
    apiVersion: "2023-12-01",
  }),
);
export type HostsListInput = typeof HostsListInput.Type;

// Output Schema
export const HostsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.Array(Schema.suspend(() => HostSchema)),
});
export type HostsListOutput = typeof HostsListOutput.Type;

// The operation
/**
 * Implements GET hosts in a subscription.
 *
 * List of hosts in a subscription.
 */
export const HostsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HostsListInput,
  outputSchema: HostsListOutput,
}));
// Input Schema
export const HostsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/hosts",
      apiVersion: "2023-12-01",
    }),
  );
export type HostsListByResourceGroupInput =
  typeof HostsListByResourceGroupInput.Type;

// Output Schema
export const HostsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(Schema.suspend(() => HostSchema)),
  });
export type HostsListByResourceGroupOutput =
  typeof HostsListByResourceGroupOutput.Type;

// The operation
/**
 * Implements GET hosts in a resource group.
 *
 * List of hosts in a resource group.
 */
export const HostsListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HostsListByResourceGroupInput,
    outputSchema: HostsListByResourceGroupOutput,
  }),
);
// Input Schema
export const HostsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  hostName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/hosts/{hostName}",
    apiVersion: "2023-12-01",
  }),
);
export type HostsUpdateInput = typeof HostsUpdateInput.Type;

// Output Schema
export const HostsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => HostPropertiesSchema),
  location: Schema.String,
  extendedLocation: Schema.optional(
    Schema.suspend(() => ExtendedLocationSchema),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
});
export type HostsUpdateOutput = typeof HostsUpdateOutput.Type;

// The operation
/**
 * Updates a host.
 *
 * API to update certain properties of the host resource.
 *
 * @param hostName - Name of the host.
 */
export const HostsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HostsUpdateInput,
  outputSchema: HostsUpdateOutput,
}));
// Input Schema
export const InventoryItemsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vcenterName: Schema.String.pipe(T.PathParam()),
    inventoryItemName: Schema.String.pipe(T.PathParam()),
    properties: Schema.suspend(() => InventoryItemPropertiesSchema),
    kind: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/vcenters/{vcenterName}/inventoryItems/{inventoryItemName}",
      apiVersion: "2023-12-01",
    }),
  );
export type InventoryItemsCreateInput = typeof InventoryItemsCreateInput.Type;

// Output Schema
export const InventoryItemsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => InventoryItemPropertiesSchema),
    kind: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type InventoryItemsCreateOutput = typeof InventoryItemsCreateOutput.Type;

// The operation
/**
 * Implements InventoryItem PUT method.
 *
 * Create Or Update InventoryItem.
 *
 * @param vcenterName - Name of the vCenter.
 * @param inventoryItemName - Name of the inventoryItem.
 */
export const InventoryItemsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InventoryItemsCreateInput,
    outputSchema: InventoryItemsCreateOutput,
  }),
);
// Input Schema
export const InventoryItemsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vcenterName: Schema.String.pipe(T.PathParam()),
    inventoryItemName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/vcenters/{vcenterName}/inventoryItems/{inventoryItemName}",
      apiVersion: "2023-12-01",
    }),
  );
export type InventoryItemsDeleteInput = typeof InventoryItemsDeleteInput.Type;

// Output Schema
export const InventoryItemsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type InventoryItemsDeleteOutput = typeof InventoryItemsDeleteOutput.Type;

// The operation
/**
 * Deletes an inventoryItem.
 *
 * Implements inventoryItem DELETE method.
 *
 * @param vcenterName - Name of the vCenter.
 * @param inventoryItemName - Name of the inventoryItem.
 */
export const InventoryItemsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InventoryItemsDeleteInput,
    outputSchema: InventoryItemsDeleteOutput,
  }),
);
// Input Schema
export const InventoryItemsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    vcenterName: Schema.String.pipe(T.PathParam()),
    inventoryItemName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/vcenters/{vcenterName}/inventoryItems/{inventoryItemName}",
    apiVersion: "2023-12-01",
  }),
);
export type InventoryItemsGetInput = typeof InventoryItemsGetInput.Type;

// Output Schema
export const InventoryItemsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => InventoryItemPropertiesSchema),
    kind: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type InventoryItemsGetOutput = typeof InventoryItemsGetOutput.Type;

// The operation
/**
 * Gets InventoryItem.
 *
 * Implements InventoryItem GET method.
 *
 * @param vcenterName - Name of the vCenter.
 * @param inventoryItemName - Name of the inventoryItem.
 */
export const InventoryItemsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: InventoryItemsGetInput,
  outputSchema: InventoryItemsGetOutput,
}));
// Input Schema
export const InventoryItemsListByVCenterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vcenterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/vcenters/{vcenterName}/inventoryItems",
      apiVersion: "2023-12-01",
    }),
  );
export type InventoryItemsListByVCenterInput =
  typeof InventoryItemsListByVCenterInput.Type;

// Output Schema
export const InventoryItemsListByVCenterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(Schema.suspend(() => InventoryItemSchema)),
  });
export type InventoryItemsListByVCenterOutput =
  typeof InventoryItemsListByVCenterOutput.Type;

// The operation
/**
 * Implements GET inventoryItems in a vCenter.
 *
 * Returns the list of inventoryItems of the given vCenter.
 *
 * @param vcenterName - Name of the vCenter.
 */
export const InventoryItemsListByVCenter = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InventoryItemsListByVCenterInput,
    outputSchema: InventoryItemsListByVCenterOutput,
  }),
);
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ConnectedVMwarevSphere/operations",
    apiVersion: "2023-12-01",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.Array(Schema.suspend(() => operationSchema)),
});
export type OperationsListOutput = typeof OperationsListOutput.Type;

// The operation
/**
 * Returns list of all operations.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export const ResourcePoolsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourcePoolName: Schema.String.pipe(T.PathParam()),
    properties: Schema.suspend(() => ResourcePoolPropertiesSchema),
    location: Schema.String,
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/resourcePools/{resourcePoolName}",
      apiVersion: "2023-12-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type ResourcePoolsCreateInput = typeof ResourcePoolsCreateInput.Type;

// Output Schema
export const ResourcePoolsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => ResourcePoolPropertiesSchema),
    location: Schema.String,
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  });
export type ResourcePoolsCreateOutput = typeof ResourcePoolsCreateOutput.Type;

// The operation
/**
 * Implements resourcePool PUT method.
 *
 * Create Or Update resourcePool.
 *
 * @param resourcePoolName - Name of the resourcePool.
 */
export const ResourcePoolsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ResourcePoolsCreateInput,
  outputSchema: ResourcePoolsCreateOutput,
}));
// Input Schema
export const ResourcePoolsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourcePoolName: Schema.String.pipe(T.PathParam()),
    force: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/resourcePools/{resourcePoolName}",
      apiVersion: "2023-12-01",
      longRunning: {},
    }),
  );
export type ResourcePoolsDeleteInput = typeof ResourcePoolsDeleteInput.Type;

// Output Schema
export const ResourcePoolsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ResourcePoolsDeleteOutput = typeof ResourcePoolsDeleteOutput.Type;

// The operation
/**
 * Deletes an resourcePool.
 *
 * Implements resourcePool DELETE method.
 *
 * @param resourcePoolName - Name of the resourcePool.
 * @param force - Whether force delete was specified.
 */
export const ResourcePoolsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ResourcePoolsDeleteInput,
  outputSchema: ResourcePoolsDeleteOutput,
}));
// Input Schema
export const ResourcePoolsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourcePoolName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/resourcePools/{resourcePoolName}",
    apiVersion: "2023-12-01",
  }),
);
export type ResourcePoolsGetInput = typeof ResourcePoolsGetInput.Type;

// Output Schema
export const ResourcePoolsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.suspend(() => ResourcePoolPropertiesSchema),
    location: Schema.String,
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  },
);
export type ResourcePoolsGetOutput = typeof ResourcePoolsGetOutput.Type;

// The operation
/**
 * Gets a resourcePool.
 *
 * Implements resourcePool GET method.
 *
 * @param resourcePoolName - Name of the resourcePool.
 */
export const ResourcePoolsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ResourcePoolsGetInput,
  outputSchema: ResourcePoolsGetOutput,
}));
// Input Schema
export const ResourcePoolsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ConnectedVMwarevSphere/resourcePools",
    apiVersion: "2023-12-01",
  }),
);
export type ResourcePoolsListInput = typeof ResourcePoolsListInput.Type;

// Output Schema
export const ResourcePoolsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(Schema.suspend(() => ResourcePoolSchema)),
  });
export type ResourcePoolsListOutput = typeof ResourcePoolsListOutput.Type;

// The operation
/**
 * Implements GET resourcePools in a subscription.
 *
 * List of resourcePools in a subscription.
 */
export const ResourcePoolsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ResourcePoolsListInput,
  outputSchema: ResourcePoolsListOutput,
}));
// Input Schema
export const ResourcePoolsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/resourcePools",
      apiVersion: "2023-12-01",
    }),
  );
export type ResourcePoolsListByResourceGroupInput =
  typeof ResourcePoolsListByResourceGroupInput.Type;

// Output Schema
export const ResourcePoolsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(Schema.suspend(() => ResourcePoolSchema)),
  });
export type ResourcePoolsListByResourceGroupOutput =
  typeof ResourcePoolsListByResourceGroupOutput.Type;

// The operation
/**
 * Implements GET resourcePools in a resource group.
 *
 * List of resourcePools in a resource group.
 */
export const ResourcePoolsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ResourcePoolsListByResourceGroupInput,
    outputSchema: ResourcePoolsListByResourceGroupOutput,
  }));
// Input Schema
export const ResourcePoolsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourcePoolName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/resourcePools/{resourcePoolName}",
      apiVersion: "2023-12-01",
    }),
  );
export type ResourcePoolsUpdateInput = typeof ResourcePoolsUpdateInput.Type;

// Output Schema
export const ResourcePoolsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => ResourcePoolPropertiesSchema),
    location: Schema.String,
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  });
export type ResourcePoolsUpdateOutput = typeof ResourcePoolsUpdateOutput.Type;

// The operation
/**
 * Updates a resourcePool.
 *
 * API to update certain properties of the resourcePool resource.
 *
 * @param resourcePoolName - Name of the resourcePool.
 */
export const ResourcePoolsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ResourcePoolsUpdateInput,
  outputSchema: ResourcePoolsUpdateOutput,
}));
// Input Schema
export const VCentersCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vcenterName: Schema.String.pipe(T.PathParam()),
  properties: Schema.suspend(() => VCenterPropertiesSchema),
  location: Schema.String,
  extendedLocation: Schema.optional(
    Schema.suspend(() => ExtendedLocationSchema),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/vcenters/{vcenterName}",
    apiVersion: "2023-12-01",
    longRunning: { finalStateVia: "azure-async-operation" },
  }),
);
export type VCentersCreateInput = typeof VCentersCreateInput.Type;

// Output Schema
export const VCentersCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => VCenterPropertiesSchema),
  location: Schema.String,
  extendedLocation: Schema.optional(
    Schema.suspend(() => ExtendedLocationSchema),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
});
export type VCentersCreateOutput = typeof VCentersCreateOutput.Type;

// The operation
/**
 * Implements vCenter PUT method.
 *
 * Create Or Update vCenter.
 *
 * @param vcenterName - Name of the vCenter.
 */
export const VCentersCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VCentersCreateInput,
  outputSchema: VCentersCreateOutput,
}));
// Input Schema
export const VCentersDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vcenterName: Schema.String.pipe(T.PathParam()),
  force: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/vcenters/{vcenterName}",
    apiVersion: "2023-12-01",
    longRunning: {},
  }),
);
export type VCentersDeleteInput = typeof VCentersDeleteInput.Type;

// Output Schema
export const VCentersDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VCentersDeleteOutput = typeof VCentersDeleteOutput.Type;

// The operation
/**
 * Deletes an vCenter.
 *
 * Implements vCenter DELETE method.
 *
 * @param vcenterName - Name of the vCenter.
 * @param force - Whether force delete was specified.
 */
export const VCentersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VCentersDeleteInput,
  outputSchema: VCentersDeleteOutput,
}));
// Input Schema
export const VCentersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vcenterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/vcenters/{vcenterName}",
    apiVersion: "2023-12-01",
  }),
);
export type VCentersGetInput = typeof VCentersGetInput.Type;

// Output Schema
export const VCentersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => VCenterPropertiesSchema),
  location: Schema.String,
  extendedLocation: Schema.optional(
    Schema.suspend(() => ExtendedLocationSchema),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
});
export type VCentersGetOutput = typeof VCentersGetOutput.Type;

// The operation
/**
 * Gets a vCenter.
 *
 * Implements vCenter GET method.
 *
 * @param vcenterName - Name of the vCenter.
 */
export const VCentersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VCentersGetInput,
  outputSchema: VCentersGetOutput,
}));
// Input Schema
export const VCentersListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ConnectedVMwarevSphere/vcenters",
    apiVersion: "2023-12-01",
  }),
);
export type VCentersListInput = typeof VCentersListInput.Type;

// Output Schema
export const VCentersListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.Array(Schema.suspend(() => VCenterSchema)),
});
export type VCentersListOutput = typeof VCentersListOutput.Type;

// The operation
/**
 * Implements GET vCenters in a subscription.
 *
 * List of vCenters in a subscription.
 */
export const VCentersList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VCentersListInput,
  outputSchema: VCentersListOutput,
}));
// Input Schema
export const VCentersListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/vcenters",
      apiVersion: "2023-12-01",
    }),
  );
export type VCentersListByResourceGroupInput =
  typeof VCentersListByResourceGroupInput.Type;

// Output Schema
export const VCentersListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(Schema.suspend(() => VCenterSchema)),
  });
export type VCentersListByResourceGroupOutput =
  typeof VCentersListByResourceGroupOutput.Type;

// The operation
/**
 * Implements GET vCenters in a resource group.
 *
 * List of vCenters in a resource group.
 */
export const VCentersListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VCentersListByResourceGroupInput,
    outputSchema: VCentersListByResourceGroupOutput,
  }),
);
// Input Schema
export const VCentersUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vcenterName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/vcenters/{vcenterName}",
    apiVersion: "2023-12-01",
  }),
);
export type VCentersUpdateInput = typeof VCentersUpdateInput.Type;

// Output Schema
export const VCentersUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => VCenterPropertiesSchema),
  location: Schema.String,
  extendedLocation: Schema.optional(
    Schema.suspend(() => ExtendedLocationSchema),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
});
export type VCentersUpdateOutput = typeof VCentersUpdateOutput.Type;

// The operation
/**
 * Updates a vCenter.
 *
 * API to update certain properties of the vCenter resource.
 *
 * @param vcenterName - Name of the vCenter.
 */
export const VCentersUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VCentersUpdateInput,
  outputSchema: VCentersUpdateOutput,
}));
// Input Schema
export const VirtualMachineInstancesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => VirtualMachineInstancePropertiesSchema),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default",
      apiVersion: "2023-12-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type VirtualMachineInstancesCreateOrUpdateInput =
  typeof VirtualMachineInstancesCreateOrUpdateInput.Type;

// Output Schema
export const VirtualMachineInstancesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => VirtualMachineInstancePropertiesSchema),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type VirtualMachineInstancesCreateOrUpdateOutput =
  typeof VirtualMachineInstancesCreateOrUpdateOutput.Type;

// The operation
/**
 * Implements virtual machine PUT method.
 *
 * The operation to create or update a virtual machine instance. Please note some properties can be set only during virtual machine instance creation.
 */
export const VirtualMachineInstancesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineInstancesCreateOrUpdateInput,
    outputSchema: VirtualMachineInstancesCreateOrUpdateOutput,
  }));
// Input Schema
export const VirtualMachineInstancesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deleteFromHost: Schema.optional(Schema.Boolean),
    force: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default",
      apiVersion: "2023-12-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type VirtualMachineInstancesDeleteInput =
  typeof VirtualMachineInstancesDeleteInput.Type;

// Output Schema
export const VirtualMachineInstancesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineInstancesDeleteOutput =
  typeof VirtualMachineInstancesDeleteOutput.Type;

// The operation
/**
 * Deletes an virtual machine.
 *
 * The operation to delete a virtual machine instance.
 *
 * @param deleteFromHost - Whether to delete the VM from the vCenter.
 * @param force - Whether force delete was specified.
 */
export const VirtualMachineInstancesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineInstancesDeleteInput,
    outputSchema: VirtualMachineInstancesDeleteOutput,
  }));
// Input Schema
export const VirtualMachineInstancesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default",
      apiVersion: "2023-12-01",
    }),
  );
export type VirtualMachineInstancesGetInput =
  typeof VirtualMachineInstancesGetInput.Type;

// Output Schema
export const VirtualMachineInstancesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => VirtualMachineInstancePropertiesSchema),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type VirtualMachineInstancesGetOutput =
  typeof VirtualMachineInstancesGetOutput.Type;

// The operation
/**
 * Gets a virtual machine.
 *
 * Retrieves information about a virtual machine instance.
 */
export const VirtualMachineInstancesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachineInstancesGetInput,
    outputSchema: VirtualMachineInstancesGetOutput,
  }),
);
// Input Schema
export const VirtualMachineInstancesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances",
      apiVersion: "2023-12-01",
    }),
  );
export type VirtualMachineInstancesListInput =
  typeof VirtualMachineInstancesListInput.Type;

// Output Schema
export const VirtualMachineInstancesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(Schema.suspend(() => VirtualMachineInstanceSchema)),
  });
export type VirtualMachineInstancesListOutput =
  typeof VirtualMachineInstancesListOutput.Type;

// The operation
/**
 * Implements List virtual machine instances.
 *
 * Lists all of the virtual machine instances within the specified parent resource.
 */
export const VirtualMachineInstancesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachineInstancesListInput,
    outputSchema: VirtualMachineInstancesListOutput,
  }),
);
// Input Schema
export const VirtualMachineInstancesRestartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default/restart",
      apiVersion: "2023-12-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineInstancesRestartInput =
  typeof VirtualMachineInstancesRestartInput.Type;

// Output Schema
export const VirtualMachineInstancesRestartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineInstancesRestartOutput =
  typeof VirtualMachineInstancesRestartOutput.Type;

// The operation
/**
 * Implements the operation to restart a virtual machine.
 *
 * The operation to restart a virtual machine instance.
 */
export const VirtualMachineInstancesRestart =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineInstancesRestartInput,
    outputSchema: VirtualMachineInstancesRestartOutput,
  }));
// Input Schema
export const VirtualMachineInstancesStartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default/start",
      apiVersion: "2023-12-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineInstancesStartInput =
  typeof VirtualMachineInstancesStartInput.Type;

// Output Schema
export const VirtualMachineInstancesStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineInstancesStartOutput =
  typeof VirtualMachineInstancesStartOutput.Type;

// The operation
/**
 * Implements the operation to start a virtual machine.
 *
 * The operation to start a virtual machine instance.
 */
export const VirtualMachineInstancesStart =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineInstancesStartInput,
    outputSchema: VirtualMachineInstancesStartOutput,
  }));
// Input Schema
export const VirtualMachineInstancesStopInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    skipShutdown: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default/stop",
      apiVersion: "2023-12-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachineInstancesStopInput =
  typeof VirtualMachineInstancesStopInput.Type;

// Output Schema
export const VirtualMachineInstancesStopOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineInstancesStopOutput =
  typeof VirtualMachineInstancesStopOutput.Type;

// The operation
/**
 * Implements the operation to stop a virtual machine.
 *
 * The operation to power off (stop) a virtual machine instance.
 */
export const VirtualMachineInstancesStop = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachineInstancesStopInput,
    outputSchema: VirtualMachineInstancesStopOutput,
  }),
);
// Input Schema
export const VirtualMachineInstancesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachineInstanceUpdatePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default",
      apiVersion: "2023-12-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type VirtualMachineInstancesUpdateInput =
  typeof VirtualMachineInstancesUpdateInput.Type;

// Output Schema
export const VirtualMachineInstancesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => VirtualMachineInstancePropertiesSchema),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type VirtualMachineInstancesUpdateOutput =
  typeof VirtualMachineInstancesUpdateOutput.Type;

// The operation
/**
 * Updates a virtual machine.
 *
 * The operation to update a virtual machine instance.
 */
export const VirtualMachineInstancesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineInstancesUpdateInput,
    outputSchema: VirtualMachineInstancesUpdateOutput,
  }));
// Input Schema
export const VirtualMachineTemplatesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineTemplateName: Schema.String.pipe(T.PathParam()),
    properties: Schema.suspend(() => VirtualMachineTemplatePropertiesSchema),
    location: Schema.String,
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineTemplates/{virtualMachineTemplateName}",
      apiVersion: "2023-12-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type VirtualMachineTemplatesCreateInput =
  typeof VirtualMachineTemplatesCreateInput.Type;

// Output Schema
export const VirtualMachineTemplatesCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => VirtualMachineTemplatePropertiesSchema),
    location: Schema.String,
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  });
export type VirtualMachineTemplatesCreateOutput =
  typeof VirtualMachineTemplatesCreateOutput.Type;

// The operation
/**
 * Implements virtual machine template PUT method.
 *
 * Create Or Update virtual machine template.
 *
 * @param virtualMachineTemplateName - Name of the virtual machine template resource.
 */
export const VirtualMachineTemplatesCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineTemplatesCreateInput,
    outputSchema: VirtualMachineTemplatesCreateOutput,
  }));
// Input Schema
export const VirtualMachineTemplatesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineTemplateName: Schema.String.pipe(T.PathParam()),
    force: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineTemplates/{virtualMachineTemplateName}",
      apiVersion: "2023-12-01",
      longRunning: {},
    }),
  );
export type VirtualMachineTemplatesDeleteInput =
  typeof VirtualMachineTemplatesDeleteInput.Type;

// Output Schema
export const VirtualMachineTemplatesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineTemplatesDeleteOutput =
  typeof VirtualMachineTemplatesDeleteOutput.Type;

// The operation
/**
 * Deletes an virtual machine template.
 *
 * Implements virtual machine template DELETE method.
 *
 * @param virtualMachineTemplateName - Name of the virtual machine template resource.
 * @param force - Whether force delete was specified.
 */
export const VirtualMachineTemplatesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineTemplatesDeleteInput,
    outputSchema: VirtualMachineTemplatesDeleteOutput,
  }));
// Input Schema
export const VirtualMachineTemplatesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineTemplateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineTemplates/{virtualMachineTemplateName}",
      apiVersion: "2023-12-01",
    }),
  );
export type VirtualMachineTemplatesGetInput =
  typeof VirtualMachineTemplatesGetInput.Type;

// Output Schema
export const VirtualMachineTemplatesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => VirtualMachineTemplatePropertiesSchema),
    location: Schema.String,
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  });
export type VirtualMachineTemplatesGetOutput =
  typeof VirtualMachineTemplatesGetOutput.Type;

// The operation
/**
 * Gets a virtual machine template.
 *
 * Implements virtual machine template GET method.
 *
 * @param virtualMachineTemplateName - Name of the virtual machine template resource.
 */
export const VirtualMachineTemplatesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachineTemplatesGetInput,
    outputSchema: VirtualMachineTemplatesGetOutput,
  }),
);
// Input Schema
export const VirtualMachineTemplatesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineTemplates",
      apiVersion: "2023-12-01",
    }),
  );
export type VirtualMachineTemplatesListInput =
  typeof VirtualMachineTemplatesListInput.Type;

// Output Schema
export const VirtualMachineTemplatesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(Schema.suspend(() => VirtualMachineTemplateSchema)),
  });
export type VirtualMachineTemplatesListOutput =
  typeof VirtualMachineTemplatesListOutput.Type;

// The operation
/**
 * Implements GET virtualMachineTemplates in a subscription.
 *
 * List of virtualMachineTemplates in a subscription.
 */
export const VirtualMachineTemplatesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachineTemplatesListInput,
    outputSchema: VirtualMachineTemplatesListOutput,
  }),
);
// Input Schema
export const VirtualMachineTemplatesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineTemplates",
      apiVersion: "2023-12-01",
    }),
  );
export type VirtualMachineTemplatesListByResourceGroupInput =
  typeof VirtualMachineTemplatesListByResourceGroupInput.Type;

// Output Schema
export const VirtualMachineTemplatesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(Schema.suspend(() => VirtualMachineTemplateSchema)),
  });
export type VirtualMachineTemplatesListByResourceGroupOutput =
  typeof VirtualMachineTemplatesListByResourceGroupOutput.Type;

// The operation
/**
 * Implements GET virtualMachineTemplates in a resource group.
 *
 * List of virtualMachineTemplates in a resource group.
 */
export const VirtualMachineTemplatesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineTemplatesListByResourceGroupInput,
    outputSchema: VirtualMachineTemplatesListByResourceGroupOutput,
  }));
// Input Schema
export const VirtualMachineTemplatesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineTemplateName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineTemplates/{virtualMachineTemplateName}",
      apiVersion: "2023-12-01",
    }),
  );
export type VirtualMachineTemplatesUpdateInput =
  typeof VirtualMachineTemplatesUpdateInput.Type;

// Output Schema
export const VirtualMachineTemplatesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => VirtualMachineTemplatePropertiesSchema),
    location: Schema.String,
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  });
export type VirtualMachineTemplatesUpdateOutput =
  typeof VirtualMachineTemplatesUpdateOutput.Type;

// The operation
/**
 * Updates a virtual machine template.
 *
 * API to update certain properties of the virtual machine template resource.
 *
 * @param virtualMachineTemplateName - Name of the virtual machine template resource.
 */
export const VirtualMachineTemplatesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineTemplatesUpdateInput,
    outputSchema: VirtualMachineTemplatesUpdateOutput,
  }));
// Input Schema
export const VirtualNetworksCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualNetworkName: Schema.String.pipe(T.PathParam()),
    properties: Schema.suspend(() => VirtualNetworkPropertiesSchema),
    location: Schema.String,
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/virtualNetworks/{virtualNetworkName}",
      apiVersion: "2023-12-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type VirtualNetworksCreateInput = typeof VirtualNetworksCreateInput.Type;

// Output Schema
export const VirtualNetworksCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => VirtualNetworkPropertiesSchema),
    location: Schema.String,
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  });
export type VirtualNetworksCreateOutput =
  typeof VirtualNetworksCreateOutput.Type;

// The operation
/**
 * Implements virtual network PUT method.
 *
 * Create Or Update virtual network.
 *
 * @param virtualNetworkName - Name of the virtual network resource.
 */
export const VirtualNetworksCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualNetworksCreateInput,
    outputSchema: VirtualNetworksCreateOutput,
  }),
);
// Input Schema
export const VirtualNetworksDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualNetworkName: Schema.String.pipe(T.PathParam()),
    force: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/virtualNetworks/{virtualNetworkName}",
      apiVersion: "2023-12-01",
      longRunning: {},
    }),
  );
export type VirtualNetworksDeleteInput = typeof VirtualNetworksDeleteInput.Type;

// Output Schema
export const VirtualNetworksDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualNetworksDeleteOutput =
  typeof VirtualNetworksDeleteOutput.Type;

// The operation
/**
 * Deletes an virtual network.
 *
 * Implements virtual network DELETE method.
 *
 * @param virtualNetworkName - Name of the virtual network resource.
 * @param force - Whether force delete was specified.
 */
export const VirtualNetworksDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualNetworksDeleteInput,
    outputSchema: VirtualNetworksDeleteOutput,
  }),
);
// Input Schema
export const VirtualNetworksGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualNetworkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/virtualNetworks/{virtualNetworkName}",
      apiVersion: "2023-12-01",
    }),
  );
export type VirtualNetworksGetInput = typeof VirtualNetworksGetInput.Type;

// Output Schema
export const VirtualNetworksGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => VirtualNetworkPropertiesSchema),
    location: Schema.String,
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  });
export type VirtualNetworksGetOutput = typeof VirtualNetworksGetOutput.Type;

// The operation
/**
 * Gets a virtual network.
 *
 * Implements virtual network GET method.
 *
 * @param virtualNetworkName - Name of the virtual network resource.
 */
export const VirtualNetworksGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VirtualNetworksGetInput,
  outputSchema: VirtualNetworksGetOutput,
}));
// Input Schema
export const VirtualNetworksListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ConnectedVMwarevSphere/virtualNetworks",
      apiVersion: "2023-12-01",
    }),
  );
export type VirtualNetworksListInput = typeof VirtualNetworksListInput.Type;

// Output Schema
export const VirtualNetworksListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(Schema.suspend(() => VirtualNetworkSchema)),
  });
export type VirtualNetworksListOutput = typeof VirtualNetworksListOutput.Type;

// The operation
/**
 * Implements GET virtualNetworks in a subscription.
 *
 * List of virtualNetworks in a subscription.
 */
export const VirtualNetworksList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VirtualNetworksListInput,
  outputSchema: VirtualNetworksListOutput,
}));
// Input Schema
export const VirtualNetworksListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/virtualNetworks",
      apiVersion: "2023-12-01",
    }),
  );
export type VirtualNetworksListByResourceGroupInput =
  typeof VirtualNetworksListByResourceGroupInput.Type;

// Output Schema
export const VirtualNetworksListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(Schema.suspend(() => VirtualNetworkSchema)),
  });
export type VirtualNetworksListByResourceGroupOutput =
  typeof VirtualNetworksListByResourceGroupOutput.Type;

// The operation
/**
 * Implements GET virtualNetworks in a resource group.
 *
 * List of virtualNetworks in a resource group.
 */
export const VirtualNetworksListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualNetworksListByResourceGroupInput,
    outputSchema: VirtualNetworksListByResourceGroupOutput,
  }));
// Input Schema
export const VirtualNetworksUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualNetworkName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/virtualNetworks/{virtualNetworkName}",
      apiVersion: "2023-12-01",
    }),
  );
export type VirtualNetworksUpdateInput = typeof VirtualNetworksUpdateInput.Type;

// Output Schema
export const VirtualNetworksUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => VirtualNetworkPropertiesSchema),
    location: Schema.String,
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  });
export type VirtualNetworksUpdateOutput =
  typeof VirtualNetworksUpdateOutput.Type;

// The operation
/**
 * Updates a virtual network.
 *
 * API to update certain properties of the virtual network resource.
 *
 * @param virtualNetworkName - Name of the virtual network resource.
 */
export const VirtualNetworksUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualNetworksUpdateInput,
    outputSchema: VirtualNetworksUpdateOutput,
  }),
);
// Input Schema
export const VMInstanceGuestAgentsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => GuestAgentPropertiesSchema),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default/guestAgents/default",
      apiVersion: "2023-12-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type VMInstanceGuestAgentsCreateInput =
  typeof VMInstanceGuestAgentsCreateInput.Type;

// Output Schema
export const VMInstanceGuestAgentsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => GuestAgentPropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type VMInstanceGuestAgentsCreateOutput =
  typeof VMInstanceGuestAgentsCreateOutput.Type;

// The operation
/**
 * Implements GuestAgent PUT method.
 *
 * Create Or Update GuestAgent.
 */
export const VMInstanceGuestAgentsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VMInstanceGuestAgentsCreateInput,
    outputSchema: VMInstanceGuestAgentsCreateOutput,
  }),
);
// Input Schema
export const VMInstanceGuestAgentsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default/guestAgents/default",
      apiVersion: "2023-12-01",
      longRunning: {},
    }),
  );
export type VMInstanceGuestAgentsDeleteInput =
  typeof VMInstanceGuestAgentsDeleteInput.Type;

// Output Schema
export const VMInstanceGuestAgentsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VMInstanceGuestAgentsDeleteOutput =
  typeof VMInstanceGuestAgentsDeleteOutput.Type;

// The operation
/**
 * Deletes an GuestAgent.
 *
 * Implements GuestAgent DELETE method.
 */
export const VMInstanceGuestAgentsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VMInstanceGuestAgentsDeleteInput,
    outputSchema: VMInstanceGuestAgentsDeleteOutput,
  }),
);
// Input Schema
export const VMInstanceGuestAgentsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default/guestAgents/default",
      apiVersion: "2023-12-01",
    }),
  );
export type VMInstanceGuestAgentsGetInput =
  typeof VMInstanceGuestAgentsGetInput.Type;

// Output Schema
export const VMInstanceGuestAgentsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => GuestAgentPropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type VMInstanceGuestAgentsGetOutput =
  typeof VMInstanceGuestAgentsGetOutput.Type;

// The operation
/**
 * Gets GuestAgent.
 *
 * Implements GuestAgent GET method.
 */
export const VMInstanceGuestAgentsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VMInstanceGuestAgentsGetInput,
    outputSchema: VMInstanceGuestAgentsGetOutput,
  }),
);
// Input Schema
export const VMInstanceGuestAgentsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default/guestAgents",
      apiVersion: "2023-12-01",
    }),
  );
export type VMInstanceGuestAgentsListInput =
  typeof VMInstanceGuestAgentsListInput.Type;

// Output Schema
export const VMInstanceGuestAgentsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(Schema.suspend(() => GuestAgentSchema)),
  });
export type VMInstanceGuestAgentsListOutput =
  typeof VMInstanceGuestAgentsListOutput.Type;

// The operation
/**
 * Implements GET GuestAgent in a vm.
 *
 * Returns the list of GuestAgent of the given vm.
 */
export const VMInstanceGuestAgentsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VMInstanceGuestAgentsListInput,
    outputSchema: VMInstanceGuestAgentsListOutput,
  }),
);
// Input Schema
export const VmInstanceHybridIdentityMetadataGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default/hybridIdentityMetadata/default",
      apiVersion: "2023-12-01",
    }),
  );
export type VmInstanceHybridIdentityMetadataGetInput =
  typeof VmInstanceHybridIdentityMetadataGetInput.Type;

// Output Schema
export const VmInstanceHybridIdentityMetadataGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(
      () => VmInstanceHybridIdentityMetadataPropertiesSchema,
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type VmInstanceHybridIdentityMetadataGetOutput =
  typeof VmInstanceHybridIdentityMetadataGetOutput.Type;

// The operation
/**
 * Gets HybridIdentityMetadata.
 *
 * Implements HybridIdentityMetadata GET method.
 */
export const VmInstanceHybridIdentityMetadataGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VmInstanceHybridIdentityMetadataGetInput,
    outputSchema: VmInstanceHybridIdentityMetadataGetOutput,
  }));
// Input Schema
export const VmInstanceHybridIdentityMetadataListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default/hybridIdentityMetadata",
      apiVersion: "2023-12-01",
    }),
  );
export type VmInstanceHybridIdentityMetadataListInput =
  typeof VmInstanceHybridIdentityMetadataListInput.Type;

// Output Schema
export const VmInstanceHybridIdentityMetadataListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(
      Schema.suspend(() => VmInstanceHybridIdentityMetadataSchema),
    ),
  });
export type VmInstanceHybridIdentityMetadataListOutput =
  typeof VmInstanceHybridIdentityMetadataListOutput.Type;

// The operation
/**
 * Implements GET HybridIdentityMetadata in a vm.
 *
 * Returns the list of HybridIdentityMetadata of the given vm.
 */
export const VmInstanceHybridIdentityMetadataList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VmInstanceHybridIdentityMetadataListInput,
    outputSchema: VmInstanceHybridIdentityMetadataListOutput,
  }));
