/**
 * Azure Vmware API
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
const QuotaEnabledSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Enabled",
  "Disabled",
]);
const SkuTierSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Free",
  "Basic",
  "Standard",
  "Premium",
]);
const TrialStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "TrialAvailable",
  "TrialUsed",
  "TrialDisabled",
]);
const PrivateCloudSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
const ResourceSkuSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceType: Schema.suspend(() => ResourceSkuResourceTypeSchema),
  name: Schema.String,
  tier: Schema.optional(Schema.String),
  size: Schema.optional(Schema.String),
  family: Schema.optional(Schema.String),
  locations: Schema.Array(Schema.suspend(() => Azure_Core_azureLocationSchema)),
  locationInfo: Schema.Array(
    Schema.suspend(() => ResourceSkuLocationInfoSchema),
  ),
  capabilities: Schema.optional(
    Schema.Array(Schema.suspend(() => ResourceSkuCapabilitiesSchema)),
  ),
  restrictions: Schema.Array(
    Schema.suspend(() => ResourceSkuRestrictionsSchema),
  ),
});
const ResourceSkuResourceTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "privateClouds",
    "privateClouds/clusters",
  ]);
const Azure_Core_azureLocationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const ResourceSkuLocationInfoSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    location: Schema.suspend(() => Azure_Core_azureLocationSchema),
    zones: Schema.Array(Schema.String),
    zoneDetails: Schema.Array(
      Schema.suspend(() => ResourceSkuZoneDetailsSchema),
    ),
  },
);
const ResourceSkuZoneDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.Array(Schema.String),
  capabilities: Schema.Array(
    Schema.suspend(() => ResourceSkuCapabilitiesSchema),
  ),
});
const ResourceSkuCapabilitiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    name: Schema.String,
    value: Schema.String,
  },
);
const ResourceSkuRestrictionsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    type: Schema.optional(
      Schema.suspend(() => ResourceSkuRestrictionsTypeSchema),
    ),
    values: Schema.Array(Schema.String),
    restrictionInfo: Schema.suspend(() => ResourceSkuRestrictionInfoSchema),
    reasonCode: Schema.optional(
      Schema.suspend(() => ResourceSkuRestrictionsReasonCodeSchema),
    ),
  },
);
const ResourceSkuRestrictionsTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Location", "Zone"]);
const ResourceSkuRestrictionInfoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locations: Schema.optional(
      Schema.Array(Schema.suspend(() => Azure_Core_azureLocationSchema)),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
  });
const ResourceSkuRestrictionsReasonCodeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "QuotaId",
    "NotAvailableForSubscription",
  ]);
const PrivateCloudPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  managementCluster: Schema.suspend(() => ManagementClusterSchema),
  internet: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
  identitySources: Schema.optional(
    Schema.Array(Schema.suspend(() => IdentitySourceSchema)),
  ),
  availability: Schema.optional(
    Schema.suspend(() => AvailabilityPropertiesSchema),
  ),
  encryption: Schema.optional(Schema.suspend(() => EncryptionSchema)),
  extendedNetworkBlocks: Schema.optional(Schema.Array(Schema.String)),
  provisioningState: Schema.optional(
    Schema.suspend(() => PrivateCloudProvisioningStateSchema),
  ),
  circuit: Schema.optional(Schema.suspend(() => CircuitSchema)),
  endpoints: Schema.optional(Schema.suspend(() => EndpointsSchema)),
  networkBlock: Schema.String,
  managementNetwork: Schema.optional(Schema.String),
  provisioningNetwork: Schema.optional(Schema.String),
  vmotionNetwork: Schema.optional(Schema.String),
  vcenterPassword: Schema.optional(SensitiveOutputString),
  nsxtPassword: Schema.optional(SensitiveOutputString),
  vcenterCertificateThumbprint: Schema.optional(Schema.String),
  nsxtCertificateThumbprint: Schema.optional(Schema.String),
  externalCloudLinks: Schema.optional(Schema.Array(Schema.String)),
  secondaryCircuit: Schema.optional(Schema.suspend(() => CircuitSchema)),
  nsxPublicIpQuotaRaised: Schema.optional(
    Schema.suspend(() => NsxPublicIpQuotaRaisedEnumSchema),
  ),
  virtualNetworkId: Schema.optional(Schema.String),
  dnsZoneType: Schema.optional(Schema.suspend(() => DnsZoneTypeSchema)),
  vcfLicense: Schema.optional(Schema.suspend(() => VcfLicenseSchema)),
});
const ManagementClusterSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  clusterSize: Schema.optional(Schema.Number),
  provisioningState: Schema.optional(
    Schema.suspend(() => ClusterProvisioningStateSchema),
  ),
  clusterId: Schema.optional(Schema.Number),
  hosts: Schema.optional(Schema.Array(Schema.String)),
  vsanDatastoreName: Schema.optional(Schema.String),
});
const ClusterProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Failed",
    "Canceled",
    "Cancelled",
    "Deleting",
    "Updating",
  ]);
const IdentitySourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  alias: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  baseUserDN: Schema.optional(Schema.String),
  baseGroupDN: Schema.optional(Schema.String),
  primaryServer: Schema.optional(Schema.String),
  secondaryServer: Schema.optional(Schema.String),
  ssl: Schema.optional(Schema.suspend(() => SslEnumSchema)),
  username: Schema.optional(Schema.String),
  password: Schema.optional(SensitiveOutputString),
});
const SslEnumSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Enabled",
  "Disabled",
]);
const AvailabilityPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  strategy: Schema.optional(Schema.suspend(() => AvailabilityStrategySchema)),
  zone: Schema.optional(Schema.Number),
  secondaryZone: Schema.optional(Schema.Number),
});
const AvailabilityStrategySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "SingleZone",
  "DualZone",
]);
const EncryptionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.optional(Schema.suspend(() => EncryptionStateSchema)),
  keyVaultProperties: Schema.optional(
    Schema.suspend(() => EncryptionKeyVaultPropertiesSchema),
  ),
});
const EncryptionStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Enabled",
  "Disabled",
]);
const EncryptionKeyVaultPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyName: Schema.optional(Schema.String),
    keyVersion: Schema.optional(Schema.String),
    autoDetectedKeyVersion: Schema.optional(Schema.String),
    keyVaultUrl: Schema.optional(Schema.String),
    keyState: Schema.optional(Schema.suspend(() => EncryptionKeyStatusSchema)),
    versionType: Schema.optional(
      Schema.suspend(() => EncryptionVersionTypeSchema),
    ),
  });
const EncryptionKeyStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Connected",
  "AccessDenied",
]);
const EncryptionVersionTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(
  ["Fixed", "AutoDetected"],
);
const PrivateCloudProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Failed",
    "Canceled",
    "Cancelled",
    "Pending",
    "Building",
    "Deleting",
    "Updating",
  ]);
const CircuitSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  primarySubnet: Schema.optional(Schema.String),
  secondarySubnet: Schema.optional(Schema.String),
  expressRouteID: Schema.optional(Schema.String),
  expressRoutePrivatePeeringID: Schema.optional(Schema.String),
});
const EndpointsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nsxtManager: Schema.optional(Schema.String),
  vcsa: Schema.optional(Schema.String),
  hcxCloudManager: Schema.optional(Schema.String),
  nsxtManagerIp: Schema.optional(Schema.String),
  vcenterIp: Schema.optional(Schema.String),
  hcxCloudManagerIp: Schema.optional(Schema.String),
});
const NsxPublicIpQuotaRaisedEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Enabled", "Disabled"]);
const DnsZoneTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Public",
  "Private",
]);
const VcfLicenseSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.suspend(() => VcfLicenseKindSchema),
  provisioningState: Schema.optional(
    Schema.suspend(() => LicenseProvisioningStateSchema),
  ),
});
const VcfLicenseKindSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "vcf5",
]);
const LicenseProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Failed",
    "Canceled",
  ]);
const SystemAssignedServiceIdentityTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["None", "SystemAssigned"]);
const PrivateCloudUpdatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    managementCluster: Schema.optional(
      Schema.suspend(() => ManagementClusterSchema),
    ),
    internet: Schema.optional(Schema.suspend(() => InternetEnumSchema)),
    identitySources: Schema.optional(
      Schema.Array(Schema.suspend(() => IdentitySourceSchema)),
    ),
    availability: Schema.optional(
      Schema.suspend(() => AvailabilityPropertiesSchema),
    ),
    encryption: Schema.optional(Schema.suspend(() => EncryptionSchema)),
    extendedNetworkBlocks: Schema.optional(Schema.Array(Schema.String)),
    dnsZoneType: Schema.optional(Schema.suspend(() => DnsZoneTypeSchema)),
  });
const InternetEnumSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Enabled",
  "Disabled",
]);
const AddonSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const AddonPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  addonType: Schema.suspend(() => AddonTypeSchema),
  provisioningState: Schema.optional(
    Schema.suspend(() => AddonProvisioningStateSchema),
  ),
});
const AddonTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "SRM",
  "VR",
  "HCX",
  "Arc",
]);
const AddonProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Failed",
    "Canceled",
    "Cancelled",
    "Building",
    "Deleting",
    "Updating",
  ]);
const ExpressRouteAuthorizationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const ExpressRouteAuthorizationPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.suspend(() => ExpressRouteAuthorizationProvisioningStateSchema),
    ),
    expressRouteAuthorizationId: Schema.optional(Schema.String),
    expressRouteAuthorizationKey: Schema.optional(Schema.String),
    expressRouteId: Schema.optional(Schema.String),
  });
const ExpressRouteAuthorizationProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Failed",
    "Canceled",
    "Updating",
  ]);
const CloudLinkSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const CloudLinkPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provisioningState: Schema.optional(
    Schema.suspend(() => CloudLinkProvisioningStateSchema),
  ),
  status: Schema.optional(Schema.suspend(() => CloudLinkStatusSchema)),
  linkedCloud: Schema.optional(Schema.String),
});
const CloudLinkProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Failed",
    "Canceled",
  ]);
const CloudLinkStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Active",
  "Building",
  "Deleting",
  "Failed",
  "Disconnected",
]);
const ClusterSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const ClusterPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  clusterSize: Schema.optional(Schema.Number),
  provisioningState: Schema.optional(
    Schema.suspend(() => ClusterProvisioningStateSchema),
  ),
  clusterId: Schema.optional(Schema.Number),
  hosts: Schema.optional(Schema.Array(Schema.String)),
  vsanDatastoreName: Schema.optional(Schema.String),
});
const ClusterUpdatePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    clusterSize: Schema.optional(Schema.Number),
    hosts: Schema.optional(Schema.Array(Schema.String)),
  },
);
const DatastoreSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const DatastorePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provisioningState: Schema.optional(
    Schema.suspend(() => DatastoreProvisioningStateSchema),
  ),
  netAppVolume: Schema.optional(Schema.suspend(() => NetAppVolumeSchema)),
  diskPoolVolume: Schema.optional(Schema.suspend(() => DiskPoolVolumeSchema)),
  elasticSanVolume: Schema.optional(
    Schema.suspend(() => ElasticSanVolumeSchema),
  ),
  pureStorageVolume: Schema.optional(
    Schema.suspend(() => PureStorageVolumeSchema),
  ),
  status: Schema.optional(Schema.suspend(() => DatastoreStatusSchema)),
});
const DatastoreProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Failed",
    "Canceled",
    "Cancelled",
    "Pending",
    "Creating",
    "Updating",
    "Deleting",
  ]);
const NetAppVolumeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
});
const DiskPoolVolumeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  targetId: Schema.String,
  lunName: Schema.String,
  mountOption: Schema.optional(Schema.Literals(["MOUNT", "ATTACH"])),
  path: Schema.optional(Schema.String),
});
const ElasticSanVolumeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  targetId: Schema.String,
});
const PureStorageVolumeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  storagePoolId: Schema.String,
  sizeGb: Schema.Number,
});
const DatastoreStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "Accessible",
  "Inaccessible",
  "Attached",
  "Detached",
  "LostCommunication",
  "DeadOrError",
]);
const HostSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const HostPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.suspend(() => HostKindSchema),
  provisioningState: Schema.optional(
    Schema.suspend(() => HostProvisioningStateSchema),
  ),
  displayName: Schema.optional(Schema.String),
  moRefId: Schema.optional(Schema.String),
  fqdn: Schema.optional(Schema.String),
  maintenance: Schema.optional(Schema.suspend(() => HostMaintenanceSchema)),
  faultDomain: Schema.optional(Schema.String),
});
const HostKindSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "General",
  "Specialized",
]);
const HostProvisioningStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(
  ["Succeeded", "Failed", "Canceled"],
);
const HostMaintenanceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Replacement",
  "Upgrade",
]);
const ClusterZoneSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  hosts: Schema.optional(Schema.Array(Schema.String)),
  zone: Schema.optional(Schema.String),
});
const PlacementPolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const PlacementPolicyPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.suspend(() => PlacementPolicyTypeSchema),
    state: Schema.optional(Schema.suspend(() => PlacementPolicyStateSchema)),
    displayName: Schema.optional(Schema.String),
    provisioningState: Schema.optional(
      Schema.suspend(() => PlacementPolicyProvisioningStateSchema),
    ),
  });
const PlacementPolicyTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "VmVm",
  "VmHost",
]);
const PlacementPolicyStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Enabled",
  "Disabled",
]);
const PlacementPolicyProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Failed",
    "Canceled",
    "Building",
    "Deleting",
    "Updating",
  ]);
const PlacementPolicyUpdatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.suspend(() => PlacementPolicyStateSchema)),
    vmMembers: Schema.optional(Schema.Array(Schema.String)),
    hostMembers: Schema.optional(Schema.Array(Schema.String)),
    affinityStrength: Schema.optional(
      Schema.suspend(() => AffinityStrengthSchema),
    ),
    azureHybridBenefitType: Schema.optional(
      Schema.suspend(() => AzureHybridBenefitTypeSchema),
    ),
  });
const AffinityStrengthSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Should",
  "Must",
]);
const AzureHybridBenefitTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["SqlHost", "None"]);
const VirtualMachineSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const VirtualMachinePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.suspend(() => VirtualMachineProvisioningStateSchema),
    ),
    displayName: Schema.optional(Schema.String),
    moRefId: Schema.optional(Schema.String),
    folderPath: Schema.optional(Schema.String),
    restrictMovement: Schema.optional(
      Schema.suspend(() => VirtualMachineRestrictMovementStateSchema),
    ),
  });
const VirtualMachineProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Failed",
    "Canceled",
  ]);
const VirtualMachineRestrictMovementStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Enabled", "Disabled"]);
const GlobalReachConnectionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const GlobalReachConnectionPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.suspend(() => GlobalReachConnectionProvisioningStateSchema),
    ),
    addressPrefix: Schema.optional(Schema.String),
    authorizationKey: Schema.optional(Schema.String),
    circuitConnectionStatus: Schema.optional(
      Schema.suspend(() => GlobalReachConnectionStatusSchema),
    ),
    peerExpressRouteCircuit: Schema.optional(Schema.String),
    expressRouteId: Schema.optional(Schema.String),
  });
const GlobalReachConnectionProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Failed",
    "Canceled",
    "Updating",
  ]);
const GlobalReachConnectionStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Connected",
    "Connecting",
    "Disconnected",
  ]);
const HcxEnterpriseSiteSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const HcxEnterpriseSitePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.suspend(() => HcxEnterpriseSiteProvisioningStateSchema),
    ),
    activationKey: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.suspend(() => HcxEnterpriseSiteStatusSchema),
    ),
  });
const HcxEnterpriseSiteProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Failed",
    "Canceled",
  ]);
const HcxEnterpriseSiteStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Available",
    "Consumed",
    "Deactivated",
    "Deleted",
  ]);
const IscsiPathSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const IscsiPathPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provisioningState: Schema.optional(
    Schema.suspend(() => IscsiPathProvisioningStateSchema),
  ),
  networkBlock: Schema.String,
});
const IscsiPathProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Failed",
    "Canceled",
    "Pending",
    "Building",
    "Deleting",
    "Updating",
  ]);
const LicenseSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const LicensePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.suspend(() => LicenseKindSchema),
  provisioningState: Schema.optional(
    Schema.suspend(() => LicenseProvisioningStateSchema),
  ),
});
const LicenseKindSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "VmwareFirewall",
]);
const MaintenanceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const MaintenancePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  component: Schema.optional(Schema.suspend(() => MaintenanceTypeSchema)),
  displayName: Schema.optional(Schema.String),
  clusterId: Schema.optional(Schema.Number),
  infoLink: Schema.optional(Schema.String),
  impact: Schema.optional(Schema.String),
  scheduledByMicrosoft: Schema.optional(Schema.Boolean),
  state: Schema.optional(Schema.suspend(() => MaintenanceStateSchema)),
  scheduledStartTime: Schema.optional(Schema.String),
  estimatedDurationInMinutes: Schema.optional(Schema.Number),
  provisioningState: Schema.optional(
    Schema.suspend(() => MaintenanceProvisioningStateSchema),
  ),
  operations: Schema.optional(
    Schema.Array(Schema.suspend(() => MaintenanceManagementOperationSchema)),
  ),
  maintenanceReadiness: Schema.optional(
    Schema.suspend(() => MaintenanceReadinessSchema),
  ),
});
const MaintenanceTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "VCSA",
  "ESXI",
  "NSXT",
]);
const MaintenanceStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.suspend(() => MaintenanceStateNameSchema)),
  message: Schema.optional(Schema.String),
  startedAt: Schema.optional(Schema.String),
  endedAt: Schema.optional(Schema.String),
});
const MaintenanceStateNameSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NotScheduled",
  "Scheduled",
  "InProgress",
  "Success",
  "Failed",
  "Canceled",
]);
const MaintenanceProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Failed",
    "Canceled",
    "Updating",
  ]);
const MaintenanceManagementOperationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.suspend(() => MaintenanceManagementOperationKindSchema),
  });
const MaintenanceManagementOperationKindSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Schedule",
    "Reschedule",
    "MaintenanceReadinessRefresh",
  ]);
const MaintenanceReadinessSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.suspend(() => MaintenanceCheckTypeSchema),
  status: Schema.suspend(() => MaintenanceReadinessStatusSchema),
  message: Schema.optional(Schema.String),
  failedChecks: Schema.optional(
    Schema.Array(Schema.suspend(() => MaintenanceFailedCheckSchema)),
  ),
  lastUpdated: Schema.optional(Schema.String),
});
const MaintenanceCheckTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Precheck",
  "Preflight",
]);
const MaintenanceReadinessStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Ready",
    "NotReady",
    "DataNotAvailable",
    "NotApplicable",
  ]);
const MaintenanceFailedCheckSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  impactedResources: Schema.optional(
    Schema.Array(Schema.suspend(() => ImpactedMaintenanceResourceSchema)),
  ),
});
const ImpactedMaintenanceResourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    errors: Schema.optional(
      Schema.Array(
        Schema.suspend(() => ImpactedMaintenanceResourceErrorSchema),
      ),
    ),
  });
const ImpactedMaintenanceResourceErrorSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorCode: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    details: Schema.optional(Schema.String),
    resolutionSteps: Schema.optional(Schema.Array(Schema.String)),
    actionRequired: Schema.optional(Schema.Boolean),
  });
const ProvisionedNetworkSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const ProvisionedNetworkPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisionedNetworkProvisioningStateSchema),
    ),
    addressPrefix: Schema.optional(Schema.String),
    networkType: Schema.optional(
      Schema.suspend(() => ProvisionedNetworkTypesSchema),
    ),
  });
const ProvisionedNetworkProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Failed",
    "Canceled",
  ]);
const ProvisionedNetworkTypesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "esxManagement",
    "esxReplication",
    "hcxManagement",
    "hcxUplink",
    "vcenterManagement",
    "vmotion",
    "vsan",
  ]);
const PureStoragePolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const PureStoragePolicyPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storagePolicyDefinition: Schema.String,
    storagePoolId: Schema.String,
    provisioningState: Schema.optional(
      Schema.suspend(() => PureStoragePolicyProvisioningStateSchema),
    ),
  });
const PureStoragePolicyProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Failed",
    "Canceled",
    "Deleting",
    "Updating",
  ]);
const ScriptExecutionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const ScriptExecutionPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scriptCmdletId: Schema.optional(Schema.String),
    parameters: Schema.optional(
      Schema.Array(Schema.suspend(() => ScriptExecutionParameterSchema)),
    ),
    hiddenParameters: Schema.optional(
      Schema.Array(Schema.suspend(() => ScriptExecutionParameterSchema)),
    ),
    failureReason: Schema.optional(Schema.String),
    timeout: Schema.String,
    retention: Schema.optional(Schema.String),
    submittedAt: Schema.optional(Schema.String),
    startedAt: Schema.optional(Schema.String),
    finishedAt: Schema.optional(Schema.String),
    provisioningState: Schema.optional(
      Schema.suspend(() => ScriptExecutionProvisioningStateSchema),
    ),
    output: Schema.optional(Schema.Array(Schema.String)),
    namedOutputs: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    information: Schema.optional(Schema.Array(Schema.String)),
    warnings: Schema.optional(Schema.Array(Schema.String)),
    errors: Schema.optional(Schema.Array(Schema.String)),
  });
const ScriptExecutionParameterSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.suspend(() => ScriptExecutionParameterTypeSchema),
    name: Schema.String,
  });
const ScriptExecutionParameterTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Value",
    "SecureValue",
    "Credential",
  ]);
const ScriptExecutionProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Failed",
    "Canceled",
    "Pending",
    "Running",
    "Cancelling",
    "Cancelled",
    "Deleting",
  ]);
const ScriptPackageSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const ScriptPackagePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    provisioningState: Schema.optional(
      Schema.suspend(() => ScriptPackageProvisioningStateSchema),
    ),
    description: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    company: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
  },
);
const ScriptPackageProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Failed",
    "Canceled",
  ]);
const ScriptCmdletSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const ScriptCmdletPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provisioningState: Schema.optional(
    Schema.suspend(() => ScriptCmdletProvisioningStateSchema),
  ),
  description: Schema.optional(Schema.String),
  timeout: Schema.optional(Schema.String),
  audience: Schema.optional(Schema.suspend(() => ScriptCmdletAudienceSchema)),
  parameters: Schema.optional(
    Schema.Array(Schema.suspend(() => ScriptParameterSchema)),
  ),
});
const ScriptCmdletProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Failed",
    "Canceled",
  ]);
const ScriptCmdletAudienceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Automation",
  "Any",
]);
const ScriptParameterSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.suspend(() => ScriptParameterTypesSchema)),
  name: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  visibility: Schema.optional(
    Schema.suspend(() => VisibilityParameterEnumSchema),
  ),
  optional: Schema.optional(Schema.suspend(() => OptionalParamEnumSchema)),
});
const ScriptParameterTypesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "String",
  "SecureString",
  "Credential",
  "Int",
  "Bool",
  "Float",
]);
const VisibilityParameterEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Visible", "Hidden"]);
const OptionalParamEnumSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Optional",
  "Required",
]);
const WorkloadNetworkSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const WorkloadNetworkPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.suspend(() => WorkloadNetworkProvisioningStateSchema),
    ),
  });
const WorkloadNetworkProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Failed",
    "Canceled",
    "Building",
    "Deleting",
    "Updating",
  ]);
const WorkloadNetworkDhcpSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const WorkloadNetworkDhcpEntitySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dhcpType: Schema.suspend(() => DhcpTypeEnumSchema),
    displayName: Schema.optional(Schema.String),
    segments: Schema.optional(Schema.Array(Schema.String)),
    provisioningState: Schema.optional(
      Schema.suspend(() => WorkloadNetworkDhcpProvisioningStateSchema),
    ),
    revision: Schema.optional(Schema.Number),
  });
const DhcpTypeEnumSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "SERVER",
  "RELAY",
]);
const WorkloadNetworkDhcpProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Failed",
    "Canceled",
    "Building",
    "Deleting",
    "Updating",
  ]);
const WorkloadNetworkDnsServiceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const WorkloadNetworkDnsServicePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    dnsServiceIp: Schema.optional(Schema.String),
    defaultDnsZone: Schema.optional(Schema.String),
    fqdnZones: Schema.optional(Schema.Array(Schema.String)),
    logLevel: Schema.optional(
      Schema.suspend(() => DnsServiceLogLevelEnumSchema),
    ),
    status: Schema.optional(Schema.suspend(() => DnsServiceStatusEnumSchema)),
    provisioningState: Schema.optional(
      Schema.suspend(() => WorkloadNetworkDnsServiceProvisioningStateSchema),
    ),
    revision: Schema.optional(Schema.Number),
  });
const DnsServiceLogLevelEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "DEBUG",
    "INFO",
    "WARNING",
    "ERROR",
    "FATAL",
  ]);
const DnsServiceStatusEnumSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "SUCCESS",
  "FAILURE",
]);
const WorkloadNetworkDnsServiceProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Failed",
    "Canceled",
    "Building",
    "Deleting",
    "Updating",
  ]);
const WorkloadNetworkDnsZoneSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const WorkloadNetworkDnsZonePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.Array(Schema.String)),
    dnsServerIps: Schema.optional(Schema.Array(Schema.String)),
    sourceIp: Schema.optional(Schema.String),
    dnsServices: Schema.optional(Schema.Number),
    provisioningState: Schema.optional(
      Schema.suspend(() => WorkloadNetworkDnsZoneProvisioningStateSchema),
    ),
    revision: Schema.optional(Schema.Number),
  });
const WorkloadNetworkDnsZoneProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Failed",
    "Canceled",
    "Building",
    "Deleting",
    "Updating",
  ]);
const WorkloadNetworkGatewaySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const WorkloadNetworkGatewayPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.suspend(() => WorkloadNetworkProvisioningStateSchema),
    ),
    displayName: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
  });
const WorkloadNetworkPortMirroringSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const WorkloadNetworkPortMirroringPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    direction: Schema.optional(
      Schema.suspend(() => PortMirroringDirectionEnumSchema),
    ),
    source: Schema.optional(Schema.String),
    destination: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.suspend(() => PortMirroringStatusEnumSchema),
    ),
    provisioningState: Schema.optional(
      Schema.suspend(() => WorkloadNetworkPortMirroringProvisioningStateSchema),
    ),
    revision: Schema.optional(Schema.Number),
  });
const PortMirroringDirectionEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "INGRESS",
    "EGRESS",
    "BIDIRECTIONAL",
  ]);
const PortMirroringStatusEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["SUCCESS", "FAILURE"]);
const WorkloadNetworkPortMirroringProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Failed",
    "Canceled",
    "Building",
    "Deleting",
    "Updating",
  ]);
const WorkloadNetworkPublicIPSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
const WorkloadNetworkPublicIPPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    numberOfPublicIPs: Schema.optional(Schema.Number),
    publicIPBlock: Schema.optional(Schema.String),
    provisioningState: Schema.optional(
      Schema.suspend(() => WorkloadNetworkPublicIPProvisioningStateSchema),
    ),
  });
const WorkloadNetworkPublicIPProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Failed",
    "Canceled",
    "Building",
    "Deleting",
    "Updating",
  ]);
const WorkloadNetworkSegmentSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const WorkloadNetworkSegmentPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    connectedGateway: Schema.optional(Schema.String),
    subnet: Schema.optional(
      Schema.suspend(() => WorkloadNetworkSegmentSubnetSchema),
    ),
    portVif: Schema.optional(
      Schema.Array(Schema.suspend(() => WorkloadNetworkSegmentPortVifSchema)),
    ),
    status: Schema.optional(Schema.suspend(() => SegmentStatusEnumSchema)),
    provisioningState: Schema.optional(
      Schema.suspend(() => WorkloadNetworkSegmentProvisioningStateSchema),
    ),
    revision: Schema.optional(Schema.Number),
  });
const WorkloadNetworkSegmentSubnetSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dhcpRanges: Schema.optional(Schema.Array(Schema.String)),
    gatewayAddress: Schema.optional(Schema.String),
  });
const WorkloadNetworkSegmentPortVifSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    portName: Schema.optional(Schema.String),
  });
const SegmentStatusEnumSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "SUCCESS",
  "FAILURE",
]);
const WorkloadNetworkSegmentProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Failed",
    "Canceled",
    "Building",
    "Deleting",
    "Updating",
  ]);
const WorkloadNetworkVirtualMachineSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const WorkloadNetworkVirtualMachinePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.suspend(() => WorkloadNetworkProvisioningStateSchema),
    ),
    displayName: Schema.optional(Schema.String),
    vmType: Schema.optional(Schema.suspend(() => VMTypeEnumSchema)),
  });
const VMTypeEnumSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "REGULAR",
  "EDGE",
  "SERVICE",
]);
const WorkloadNetworkVMGroupSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const WorkloadNetworkVMGroupPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    members: Schema.optional(Schema.Array(Schema.String)),
    status: Schema.optional(Schema.suspend(() => VMGroupStatusEnumSchema)),
    provisioningState: Schema.optional(
      Schema.suspend(() => WorkloadNetworkVMGroupProvisioningStateSchema),
    ),
    revision: Schema.optional(Schema.Number),
  });
const VMGroupStatusEnumSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "SUCCESS",
  "FAILURE",
]);
const WorkloadNetworkVMGroupProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Failed",
    "Canceled",
    "Building",
    "Deleting",
    "Updating",
  ]);

// Input Schema
export const AddonsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    addonName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(Schema.suspend(() => AddonPropertiesSchema)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons/{addonName}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type AddonsCreateOrUpdateInput = typeof AddonsCreateOrUpdateInput.Type;

// Output Schema
export const AddonsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => AddonPropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AddonsCreateOrUpdateOutput = typeof AddonsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a Addon
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param addonName - Name of the addon.
 */
export const AddonsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AddonsCreateOrUpdateInput,
    outputSchema: AddonsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const AddonsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  addonName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons/{addonName}",
    apiVersion: "2025-09-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type AddonsDeleteInput = typeof AddonsDeleteInput.Type;

// Output Schema
export const AddonsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AddonsDeleteOutput = typeof AddonsDeleteOutput.Type;

// The operation
/**
 * Delete a Addon
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param addonName - Name of the addon.
 */
export const AddonsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AddonsDeleteInput,
  outputSchema: AddonsDeleteOutput,
}));
// Input Schema
export const AddonsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  addonName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons/{addonName}",
    apiVersion: "2025-09-01",
  }),
);
export type AddonsGetInput = typeof AddonsGetInput.Type;

// Output Schema
export const AddonsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => AddonPropertiesSchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type AddonsGetOutput = typeof AddonsGetOutput.Type;

// The operation
/**
 * Get a Addon
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param addonName - Name of the addon.
 */
export const AddonsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AddonsGetInput,
  outputSchema: AddonsGetOutput,
}));
// Input Schema
export const AddonsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons",
    apiVersion: "2025-09-01",
  }),
);
export type AddonsListInput = typeof AddonsListInput.Type;

// Output Schema
export const AddonsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(Schema.suspend(() => AddonSchema)),
  nextLink: Schema.optional(Schema.String),
});
export type AddonsListOutput = typeof AddonsListOutput.Type;

// The operation
/**
 * List Addon resources by PrivateCloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const AddonsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AddonsListInput,
  outputSchema: AddonsListOutput,
}));
// Input Schema
export const AuthorizationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    authorizationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => ExpressRouteAuthorizationPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations/{authorizationName}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type AuthorizationsCreateOrUpdateInput =
  typeof AuthorizationsCreateOrUpdateInput.Type;

// Output Schema
export const AuthorizationsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ExpressRouteAuthorizationPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AuthorizationsCreateOrUpdateOutput =
  typeof AuthorizationsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a ExpressRouteAuthorization
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param authorizationName - Name of the ExpressRoute Circuit Authorization
 */
export const AuthorizationsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationsCreateOrUpdateInput,
    outputSchema: AuthorizationsCreateOrUpdateOutput,
  }));
// Input Schema
export const AuthorizationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    authorizationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations/{authorizationName}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type AuthorizationsDeleteInput = typeof AuthorizationsDeleteInput.Type;

// Output Schema
export const AuthorizationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AuthorizationsDeleteOutput = typeof AuthorizationsDeleteOutput.Type;

// The operation
/**
 * Delete a ExpressRouteAuthorization
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param authorizationName - Name of the ExpressRoute Circuit Authorization
 */
export const AuthorizationsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AuthorizationsDeleteInput,
    outputSchema: AuthorizationsDeleteOutput,
  }),
);
// Input Schema
export const AuthorizationsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    authorizationName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations/{authorizationName}",
    apiVersion: "2025-09-01",
  }),
);
export type AuthorizationsGetInput = typeof AuthorizationsGetInput.Type;

// Output Schema
export const AuthorizationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ExpressRouteAuthorizationPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AuthorizationsGetOutput = typeof AuthorizationsGetOutput.Type;

// The operation
/**
 * Get a ExpressRouteAuthorization
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param authorizationName - Name of the ExpressRoute Circuit Authorization
 */
export const AuthorizationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AuthorizationsGetInput,
  outputSchema: AuthorizationsGetOutput,
}));
// Input Schema
export const AuthorizationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations",
      apiVersion: "2025-09-01",
    }),
  );
export type AuthorizationsListInput = typeof AuthorizationsListInput.Type;

// Output Schema
export const AuthorizationsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ExpressRouteAuthorizationSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AuthorizationsListOutput = typeof AuthorizationsListOutput.Type;

// The operation
/**
 * List ExpressRouteAuthorization resources by PrivateCloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const AuthorizationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AuthorizationsListInput,
  outputSchema: AuthorizationsListOutput,
}));
// Input Schema
export const CloudLinksCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    cloudLinkName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => CloudLinkPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks/{cloudLinkName}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type CloudLinksCreateOrUpdateInput =
  typeof CloudLinksCreateOrUpdateInput.Type;

// Output Schema
export const CloudLinksCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => CloudLinkPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type CloudLinksCreateOrUpdateOutput =
  typeof CloudLinksCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a CloudLink
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param cloudLinkName - Name of the cloud link.
 */
export const CloudLinksCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CloudLinksCreateOrUpdateInput,
    outputSchema: CloudLinksCreateOrUpdateOutput,
  }),
);
// Input Schema
export const CloudLinksDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  cloudLinkName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks/{cloudLinkName}",
    apiVersion: "2025-09-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type CloudLinksDeleteInput = typeof CloudLinksDeleteInput.Type;

// Output Schema
export const CloudLinksDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CloudLinksDeleteOutput = typeof CloudLinksDeleteOutput.Type;

// The operation
/**
 * Delete a CloudLink
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param cloudLinkName - Name of the cloud link.
 */
export const CloudLinksDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CloudLinksDeleteInput,
  outputSchema: CloudLinksDeleteOutput,
}));
// Input Schema
export const CloudLinksGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  cloudLinkName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks/{cloudLinkName}",
    apiVersion: "2025-09-01",
  }),
);
export type CloudLinksGetInput = typeof CloudLinksGetInput.Type;

// Output Schema
export const CloudLinksGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => CloudLinkPropertiesSchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type CloudLinksGetOutput = typeof CloudLinksGetOutput.Type;

// The operation
/**
 * Get a CloudLink
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param cloudLinkName - Name of the cloud link.
 */
export const CloudLinksGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CloudLinksGetInput,
  outputSchema: CloudLinksGetOutput,
}));
// Input Schema
export const CloudLinksListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks",
    apiVersion: "2025-09-01",
  }),
);
export type CloudLinksListInput = typeof CloudLinksListInput.Type;

// Output Schema
export const CloudLinksListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(Schema.suspend(() => CloudLinkSchema)),
  nextLink: Schema.optional(Schema.String),
});
export type CloudLinksListOutput = typeof CloudLinksListOutput.Type;

// The operation
/**
 * List CloudLink resources by PrivateCloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const CloudLinksList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CloudLinksListInput,
  outputSchema: CloudLinksListOutput,
}));
// Input Schema
export const ClustersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(Schema.suspend(() => ClusterPropertiesSchema)),
    sku: Schema.Struct({
      name: Schema.String,
      tier: Schema.optional(Schema.suspend(() => SkuTierSchema)),
      size: Schema.optional(Schema.String),
      family: Schema.optional(Schema.String),
      capacity: Schema.optional(Schema.Number),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type ClustersCreateOrUpdateInput =
  typeof ClustersCreateOrUpdateInput.Type;

// Output Schema
export const ClustersCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => ClusterPropertiesSchema)),
    sku: Schema.Struct({
      name: Schema.String,
      tier: Schema.optional(Schema.suspend(() => SkuTierSchema)),
      size: Schema.optional(Schema.String),
      family: Schema.optional(Schema.String),
      capacity: Schema.optional(Schema.Number),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ClustersCreateOrUpdateOutput =
  typeof ClustersCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a Cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 */
export const ClustersCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClustersCreateOrUpdateInput,
    outputSchema: ClustersCreateOrUpdateOutput,
  }),
);
// Input Schema
export const ClustersDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}",
    apiVersion: "2025-09-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type ClustersDeleteInput = typeof ClustersDeleteInput.Type;

// Output Schema
export const ClustersDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ClustersDeleteOutput = typeof ClustersDeleteOutput.Type;

// The operation
/**
 * Delete a Cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 */
export const ClustersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersDeleteInput,
  outputSchema: ClustersDeleteOutput,
}));
// Input Schema
export const ClustersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}",
    apiVersion: "2025-09-01",
  }),
);
export type ClustersGetInput = typeof ClustersGetInput.Type;

// Output Schema
export const ClustersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => ClusterPropertiesSchema)),
  sku: Schema.Struct({
    name: Schema.String,
    tier: Schema.optional(Schema.suspend(() => SkuTierSchema)),
    size: Schema.optional(Schema.String),
    family: Schema.optional(Schema.String),
    capacity: Schema.optional(Schema.Number),
  }),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type ClustersGetOutput = typeof ClustersGetOutput.Type;

// The operation
/**
 * Get a Cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 */
export const ClustersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersGetInput,
  outputSchema: ClustersGetOutput,
}));
// Input Schema
export const ClustersListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters",
    apiVersion: "2025-09-01",
  }),
);
export type ClustersListInput = typeof ClustersListInput.Type;

// Output Schema
export const ClustersListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(Schema.suspend(() => ClusterSchema)),
  nextLink: Schema.optional(Schema.String),
});
export type ClustersListOutput = typeof ClustersListOutput.Type;

// The operation
/**
 * List Cluster resources by PrivateCloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const ClustersList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersListInput,
  outputSchema: ClustersListOutput,
}));
// Input Schema
export const ClustersListZonesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/listZones",
    apiVersion: "2025-09-01",
  }),
);
export type ClustersListZonesInput = typeof ClustersListZonesInput.Type;

// Output Schema
export const ClustersListZonesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zones: Schema.optional(
      Schema.Array(Schema.suspend(() => ClusterZoneSchema)),
    ),
  });
export type ClustersListZonesOutput = typeof ClustersListZonesOutput.Type;

// The operation
/**
 * List hosts by zone in a cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 */
export const ClustersListZones = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersListZonesInput,
  outputSchema: ClustersListZonesOutput,
}));
// Input Schema
export const ClustersUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.String,
      tier: Schema.optional(Schema.suspend(() => SkuTierSchema)),
      size: Schema.optional(Schema.String),
      family: Schema.optional(Schema.String),
      capacity: Schema.optional(Schema.Number),
    }),
  ),
  properties: Schema.optional(
    Schema.suspend(() => ClusterUpdatePropertiesSchema),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}",
    apiVersion: "2025-09-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type ClustersUpdateInput = typeof ClustersUpdateInput.Type;

// Output Schema
export const ClustersUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => ClusterPropertiesSchema)),
  sku: Schema.Struct({
    name: Schema.String,
    tier: Schema.optional(Schema.suspend(() => SkuTierSchema)),
    size: Schema.optional(Schema.String),
    family: Schema.optional(Schema.String),
    capacity: Schema.optional(Schema.Number),
  }),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type ClustersUpdateOutput = typeof ClustersUpdateOutput.Type;

// The operation
/**
 * Update a Cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 */
export const ClustersUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersUpdateInput,
  outputSchema: ClustersUpdateOutput,
}));
// Input Schema
export const DatastoresCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    datastoreName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => DatastorePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/datastores/{datastoreName}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type DatastoresCreateOrUpdateInput =
  typeof DatastoresCreateOrUpdateInput.Type;

// Output Schema
export const DatastoresCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => DatastorePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type DatastoresCreateOrUpdateOutput =
  typeof DatastoresCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a Datastore
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 * @param datastoreName - Name of the datastore
 */
export const DatastoresCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DatastoresCreateOrUpdateInput,
    outputSchema: DatastoresCreateOrUpdateOutput,
  }),
);
// Input Schema
export const DatastoresDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  datastoreName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/datastores/{datastoreName}",
    apiVersion: "2025-09-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type DatastoresDeleteInput = typeof DatastoresDeleteInput.Type;

// Output Schema
export const DatastoresDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DatastoresDeleteOutput = typeof DatastoresDeleteOutput.Type;

// The operation
/**
 * Delete a Datastore
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 * @param datastoreName - Name of the datastore
 */
export const DatastoresDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DatastoresDeleteInput,
  outputSchema: DatastoresDeleteOutput,
}));
// Input Schema
export const DatastoresGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  datastoreName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/datastores/{datastoreName}",
    apiVersion: "2025-09-01",
  }),
);
export type DatastoresGetInput = typeof DatastoresGetInput.Type;

// Output Schema
export const DatastoresGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => DatastorePropertiesSchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type DatastoresGetOutput = typeof DatastoresGetOutput.Type;

// The operation
/**
 * Get a Datastore
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 * @param datastoreName - Name of the datastore
 */
export const DatastoresGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DatastoresGetInput,
  outputSchema: DatastoresGetOutput,
}));
// Input Schema
export const DatastoresListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/datastores",
    apiVersion: "2025-09-01",
  }),
);
export type DatastoresListInput = typeof DatastoresListInput.Type;

// Output Schema
export const DatastoresListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(Schema.suspend(() => DatastoreSchema)),
  nextLink: Schema.optional(Schema.String),
});
export type DatastoresListOutput = typeof DatastoresListOutput.Type;

// The operation
/**
 * List Datastore resources by Cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 */
export const DatastoresList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DatastoresListInput,
  outputSchema: DatastoresListOutput,
}));
// Input Schema
export const GlobalReachConnectionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    globalReachConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => GlobalReachConnectionPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/globalReachConnections/{globalReachConnectionName}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type GlobalReachConnectionsCreateOrUpdateInput =
  typeof GlobalReachConnectionsCreateOrUpdateInput.Type;

// Output Schema
export const GlobalReachConnectionsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => GlobalReachConnectionPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type GlobalReachConnectionsCreateOrUpdateOutput =
  typeof GlobalReachConnectionsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a GlobalReachConnection
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param globalReachConnectionName - Name of the global reach connection
 */
export const GlobalReachConnectionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GlobalReachConnectionsCreateOrUpdateInput,
    outputSchema: GlobalReachConnectionsCreateOrUpdateOutput,
  }));
// Input Schema
export const GlobalReachConnectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    globalReachConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/globalReachConnections/{globalReachConnectionName}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type GlobalReachConnectionsDeleteInput =
  typeof GlobalReachConnectionsDeleteInput.Type;

// Output Schema
export const GlobalReachConnectionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type GlobalReachConnectionsDeleteOutput =
  typeof GlobalReachConnectionsDeleteOutput.Type;

// The operation
/**
 * Delete a GlobalReachConnection
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param globalReachConnectionName - Name of the global reach connection
 */
export const GlobalReachConnectionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GlobalReachConnectionsDeleteInput,
    outputSchema: GlobalReachConnectionsDeleteOutput,
  }));
// Input Schema
export const GlobalReachConnectionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    globalReachConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/globalReachConnections/{globalReachConnectionName}",
      apiVersion: "2025-09-01",
    }),
  );
export type GlobalReachConnectionsGetInput =
  typeof GlobalReachConnectionsGetInput.Type;

// Output Schema
export const GlobalReachConnectionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => GlobalReachConnectionPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type GlobalReachConnectionsGetOutput =
  typeof GlobalReachConnectionsGetOutput.Type;

// The operation
/**
 * Get a GlobalReachConnection
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param globalReachConnectionName - Name of the global reach connection
 */
export const GlobalReachConnectionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GlobalReachConnectionsGetInput,
    outputSchema: GlobalReachConnectionsGetOutput,
  }),
);
// Input Schema
export const GlobalReachConnectionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/globalReachConnections",
      apiVersion: "2025-09-01",
    }),
  );
export type GlobalReachConnectionsListInput =
  typeof GlobalReachConnectionsListInput.Type;

// Output Schema
export const GlobalReachConnectionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => GlobalReachConnectionSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type GlobalReachConnectionsListOutput =
  typeof GlobalReachConnectionsListOutput.Type;

// The operation
/**
 * List GlobalReachConnection resources by PrivateCloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const GlobalReachConnectionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GlobalReachConnectionsListInput,
    outputSchema: GlobalReachConnectionsListOutput,
  }),
);
// Input Schema
export const HcxEnterpriseSitesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    hcxEnterpriseSiteName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => HcxEnterpriseSitePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites/{hcxEnterpriseSiteName}",
      apiVersion: "2025-09-01",
    }),
  );
export type HcxEnterpriseSitesCreateOrUpdateInput =
  typeof HcxEnterpriseSitesCreateOrUpdateInput.Type;

// Output Schema
export const HcxEnterpriseSitesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => HcxEnterpriseSitePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type HcxEnterpriseSitesCreateOrUpdateOutput =
  typeof HcxEnterpriseSitesCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a HcxEnterpriseSite
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param hcxEnterpriseSiteName - Name of the HCX Enterprise Site
 */
export const HcxEnterpriseSitesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HcxEnterpriseSitesCreateOrUpdateInput,
    outputSchema: HcxEnterpriseSitesCreateOrUpdateOutput,
  }));
// Input Schema
export const HcxEnterpriseSitesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    hcxEnterpriseSiteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites/{hcxEnterpriseSiteName}",
      apiVersion: "2025-09-01",
    }),
  );
export type HcxEnterpriseSitesDeleteInput =
  typeof HcxEnterpriseSitesDeleteInput.Type;

// Output Schema
export const HcxEnterpriseSitesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type HcxEnterpriseSitesDeleteOutput =
  typeof HcxEnterpriseSitesDeleteOutput.Type;

// The operation
/**
 * Delete a HcxEnterpriseSite
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param hcxEnterpriseSiteName - Name of the HCX Enterprise Site
 */
export const HcxEnterpriseSitesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HcxEnterpriseSitesDeleteInput,
    outputSchema: HcxEnterpriseSitesDeleteOutput,
  }),
);
// Input Schema
export const HcxEnterpriseSitesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    hcxEnterpriseSiteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites/{hcxEnterpriseSiteName}",
      apiVersion: "2025-09-01",
    }),
  );
export type HcxEnterpriseSitesGetInput = typeof HcxEnterpriseSitesGetInput.Type;

// Output Schema
export const HcxEnterpriseSitesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => HcxEnterpriseSitePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type HcxEnterpriseSitesGetOutput =
  typeof HcxEnterpriseSitesGetOutput.Type;

// The operation
/**
 * Get a HcxEnterpriseSite
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param hcxEnterpriseSiteName - Name of the HCX Enterprise Site
 */
export const HcxEnterpriseSitesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HcxEnterpriseSitesGetInput,
    outputSchema: HcxEnterpriseSitesGetOutput,
  }),
);
// Input Schema
export const HcxEnterpriseSitesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites",
      apiVersion: "2025-09-01",
    }),
  );
export type HcxEnterpriseSitesListInput =
  typeof HcxEnterpriseSitesListInput.Type;

// Output Schema
export const HcxEnterpriseSitesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => HcxEnterpriseSiteSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type HcxEnterpriseSitesListOutput =
  typeof HcxEnterpriseSitesListOutput.Type;

// The operation
/**
 * List HcxEnterpriseSite resources by PrivateCloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const HcxEnterpriseSitesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HcxEnterpriseSitesListInput,
    outputSchema: HcxEnterpriseSitesListOutput,
  }),
);
// Input Schema
export const HostsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  hostId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/hosts/{hostId}",
    apiVersion: "2025-09-01",
  }),
);
export type HostsGetInput = typeof HostsGetInput.Type;

// Output Schema
export const HostsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => HostPropertiesSchema)),
  zones: Schema.optional(Schema.Array(Schema.String)),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.String,
      tier: Schema.optional(Schema.suspend(() => SkuTierSchema)),
      size: Schema.optional(Schema.String),
      family: Schema.optional(Schema.String),
      capacity: Schema.optional(Schema.Number),
    }),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type HostsGetOutput = typeof HostsGetOutput.Type;

// The operation
/**
 * Get a Host
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 * @param hostId - The host identifier.
 */
export const HostsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HostsGetInput,
  outputSchema: HostsGetOutput,
}));
// Input Schema
export const HostsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/hosts",
    apiVersion: "2025-09-01",
  }),
);
export type HostsListInput = typeof HostsListInput.Type;

// Output Schema
export const HostsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(Schema.suspend(() => HostSchema)),
  nextLink: Schema.optional(Schema.String),
});
export type HostsListOutput = typeof HostsListOutput.Type;

// The operation
/**
 * List Host resources by Cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 */
export const HostsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HostsListInput,
  outputSchema: HostsListOutput,
}));
// Input Schema
export const IscsiPathsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => IscsiPathPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/iscsiPaths/default",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type IscsiPathsCreateOrUpdateInput =
  typeof IscsiPathsCreateOrUpdateInput.Type;

// Output Schema
export const IscsiPathsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => IscsiPathPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type IscsiPathsCreateOrUpdateOutput =
  typeof IscsiPathsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a IscsiPath
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const IscsiPathsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IscsiPathsCreateOrUpdateInput,
    outputSchema: IscsiPathsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const IscsiPathsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/iscsiPaths/default",
    apiVersion: "2025-09-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type IscsiPathsDeleteInput = typeof IscsiPathsDeleteInput.Type;

// Output Schema
export const IscsiPathsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type IscsiPathsDeleteOutput = typeof IscsiPathsDeleteOutput.Type;

// The operation
/**
 * Delete a IscsiPath
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const IscsiPathsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: IscsiPathsDeleteInput,
  outputSchema: IscsiPathsDeleteOutput,
}));
// Input Schema
export const IscsiPathsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/iscsiPaths/default",
    apiVersion: "2025-09-01",
  }),
);
export type IscsiPathsGetInput = typeof IscsiPathsGetInput.Type;

// Output Schema
export const IscsiPathsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => IscsiPathPropertiesSchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type IscsiPathsGetOutput = typeof IscsiPathsGetOutput.Type;

// The operation
/**
 * Get a IscsiPath
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const IscsiPathsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: IscsiPathsGetInput,
  outputSchema: IscsiPathsGetOutput,
}));
// Input Schema
export const IscsiPathsListByPrivateCloudInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/iscsiPaths",
      apiVersion: "2025-09-01",
    }),
  );
export type IscsiPathsListByPrivateCloudInput =
  typeof IscsiPathsListByPrivateCloudInput.Type;

// Output Schema
export const IscsiPathsListByPrivateCloudOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => IscsiPathSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type IscsiPathsListByPrivateCloudOutput =
  typeof IscsiPathsListByPrivateCloudOutput.Type;

// The operation
/**
 * List IscsiPath resources by PrivateCloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const IscsiPathsListByPrivateCloud =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IscsiPathsListByPrivateCloudInput,
    outputSchema: IscsiPathsListByPrivateCloudOutput,
  }));
// Input Schema
export const LicensesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    licenseName: Schema.Literals(["VmwareFirewall"]).pipe(T.PathParam()),
    properties: Schema.optional(Schema.suspend(() => LicensePropertiesSchema)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/licenses/{licenseName}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type LicensesCreateOrUpdateInput =
  typeof LicensesCreateOrUpdateInput.Type;

// Output Schema
export const LicensesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => LicensePropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type LicensesCreateOrUpdateOutput =
  typeof LicensesCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a License
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param licenseName - Name of the license.
 */
export const LicensesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LicensesCreateOrUpdateInput,
    outputSchema: LicensesCreateOrUpdateOutput,
  }),
);
// Input Schema
export const LicensesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  licenseName: Schema.Literals(["VmwareFirewall"]).pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/licenses/{licenseName}",
    apiVersion: "2025-09-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type LicensesDeleteInput = typeof LicensesDeleteInput.Type;

// Output Schema
export const LicensesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type LicensesDeleteOutput = typeof LicensesDeleteOutput.Type;

// The operation
/**
 * Delete a License
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param licenseName - Name of the license.
 */
export const LicensesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LicensesDeleteInput,
  outputSchema: LicensesDeleteOutput,
}));
// Input Schema
export const LicensesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  licenseName: Schema.Literals(["VmwareFirewall"]).pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/licenses/{licenseName}",
    apiVersion: "2025-09-01",
  }),
);
export type LicensesGetInput = typeof LicensesGetInput.Type;

// Output Schema
export const LicensesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => LicensePropertiesSchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type LicensesGetOutput = typeof LicensesGetOutput.Type;

// The operation
/**
 * Get a License
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param licenseName - Name of the license.
 */
export const LicensesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LicensesGetInput,
  outputSchema: LicensesGetOutput,
}));
// Input Schema
export const LicensesGetPropertiesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    licenseName: Schema.Literals(["VmwareFirewall"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/licenses/{licenseName}/getProperties",
      apiVersion: "2025-09-01",
    }),
  );
export type LicensesGetPropertiesInput = typeof LicensesGetPropertiesInput.Type;

// Output Schema
export const LicensesGetPropertiesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.suspend(() => LicenseKindSchema),
    provisioningState: Schema.optional(
      Schema.suspend(() => LicenseProvisioningStateSchema),
    ),
  });
export type LicensesGetPropertiesOutput =
  typeof LicensesGetPropertiesOutput.Type;

// The operation
/**
 * Just like ArmResourceActionSync, but with no request body.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param licenseName - Name of the license.
 */
export const LicensesGetProperties = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LicensesGetPropertiesInput,
    outputSchema: LicensesGetPropertiesOutput,
  }),
);
// Input Schema
export const LicensesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/licenses",
    apiVersion: "2025-09-01",
  }),
);
export type LicensesListInput = typeof LicensesListInput.Type;

// Output Schema
export const LicensesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(Schema.suspend(() => LicenseSchema)),
  nextLink: Schema.optional(Schema.String),
});
export type LicensesListOutput = typeof LicensesListOutput.Type;

// The operation
/**
 * List License resources by PrivateCloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const LicensesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LicensesListInput,
  outputSchema: LicensesListOutput,
}));
// Input Schema
export const LocationsCheckQuotaAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AVS/locations/{location}/checkQuotaAvailability",
      apiVersion: "2025-09-01",
    }),
  );
export type LocationsCheckQuotaAvailabilityInput =
  typeof LocationsCheckQuotaAvailabilityInput.Type;

// Output Schema
export const LocationsCheckQuotaAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hostsRemaining: Schema.optional(
      Schema.Record(Schema.String, Schema.Number),
    ),
    quotaEnabled: Schema.optional(Schema.suspend(() => QuotaEnabledSchema)),
  });
export type LocationsCheckQuotaAvailabilityOutput =
  typeof LocationsCheckQuotaAvailabilityOutput.Type;

// The operation
/**
 * Return quota for subscription by region
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const LocationsCheckQuotaAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LocationsCheckQuotaAvailabilityInput,
    outputSchema: LocationsCheckQuotaAvailabilityOutput,
  }));
// Input Schema
export const LocationsCheckTrialAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    tier: Schema.optional(Schema.suspend(() => SkuTierSchema)),
    size: Schema.optional(Schema.String),
    family: Schema.optional(Schema.String),
    capacity: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AVS/locations/{location}/checkTrialAvailability",
      apiVersion: "2025-09-01",
    }),
  );
export type LocationsCheckTrialAvailabilityInput =
  typeof LocationsCheckTrialAvailabilityInput.Type;

// Output Schema
export const LocationsCheckTrialAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.suspend(() => TrialStatusSchema)),
    availableHosts: Schema.optional(Schema.Number),
  });
export type LocationsCheckTrialAvailabilityOutput =
  typeof LocationsCheckTrialAvailabilityOutput.Type;

// The operation
/**
 * Return trial status for subscription by region
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param name - The name of the SKU. E.g. P3. It is typically a letter+number code
 * @param size - The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
 * @param family - If the service has different generations of hardware, for the same SKU, then that can be captured here.
 * @param capacity - If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
 */
export const LocationsCheckTrialAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LocationsCheckTrialAvailabilityInput,
    outputSchema: LocationsCheckTrialAvailabilityOutput,
  }));
// Input Schema
export const MaintenancesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  maintenanceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/maintenances/{maintenanceName}",
    apiVersion: "2025-09-01",
  }),
);
export type MaintenancesGetInput = typeof MaintenancesGetInput.Type;

// Output Schema
export const MaintenancesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(
    Schema.suspend(() => MaintenancePropertiesSchema),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type MaintenancesGetOutput = typeof MaintenancesGetOutput.Type;

// The operation
/**
 * Get a Maintenance
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param maintenanceName - Name of the maintenance
 */
export const MaintenancesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MaintenancesGetInput,
  outputSchema: MaintenancesGetOutput,
}));
// Input Schema
export const MaintenancesInitiateChecksInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    maintenanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/maintenances/{maintenanceName}/initiateChecks",
      apiVersion: "2025-09-01",
    }),
  );
export type MaintenancesInitiateChecksInput =
  typeof MaintenancesInitiateChecksInput.Type;

// Output Schema
export const MaintenancesInitiateChecksOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => MaintenancePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type MaintenancesInitiateChecksOutput =
  typeof MaintenancesInitiateChecksOutput.Type;

// The operation
/**
 * Initiate maintenance readiness checks
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param maintenanceName - Name of the maintenance
 */
export const MaintenancesInitiateChecks = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MaintenancesInitiateChecksInput,
    outputSchema: MaintenancesInitiateChecksOutput,
  }),
);
// Input Schema
export const MaintenancesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  stateName: Schema.optional(
    Schema.Literals([
      "NotScheduled",
      "Scheduled",
      "InProgress",
      "Success",
      "Failed",
      "Canceled",
    ]),
  ),
  status: Schema.optional(Schema.Literals(["Active", "Inactive"])),
  from: Schema.optional(Schema.String),
  to: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/maintenances",
    apiVersion: "2025-09-01",
  }),
);
export type MaintenancesListInput = typeof MaintenancesListInput.Type;

// Output Schema
export const MaintenancesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    value: Schema.Array(Schema.suspend(() => MaintenanceSchema)),
    nextLink: Schema.optional(Schema.String),
  },
);
export type MaintenancesListOutput = typeof MaintenancesListOutput.Type;

// The operation
/**
 * List Maintenance resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param stateName - Filter maintenances based on state
 * @param status - Filter active or inactive maintenances
 * @param from - date from which result should be returned. ie. scheduledStartTime >= from
 * @param to - date till which result should be returned. i.e. scheduledStartTime <= to
 */
export const MaintenancesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MaintenancesListInput,
  outputSchema: MaintenancesListOutput,
}));
// Input Schema
export const MaintenancesRescheduleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    maintenanceName: Schema.String.pipe(T.PathParam()),
    rescheduleTime: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/maintenances/{maintenanceName}/reschedule",
      apiVersion: "2025-09-01",
    }),
  );
export type MaintenancesRescheduleInput =
  typeof MaintenancesRescheduleInput.Type;

// Output Schema
export const MaintenancesRescheduleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => MaintenancePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type MaintenancesRescheduleOutput =
  typeof MaintenancesRescheduleOutput.Type;

// The operation
/**
 * Reschedule a maintenance
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param maintenanceName - Name of the maintenance
 */
export const MaintenancesReschedule = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MaintenancesRescheduleInput,
    outputSchema: MaintenancesRescheduleOutput,
  }),
);
// Input Schema
export const MaintenancesScheduleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    maintenanceName: Schema.String.pipe(T.PathParam()),
    scheduleTime: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/maintenances/{maintenanceName}/schedule",
      apiVersion: "2025-09-01",
    }),
  );
export type MaintenancesScheduleInput = typeof MaintenancesScheduleInput.Type;

// Output Schema
export const MaintenancesScheduleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => MaintenancePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type MaintenancesScheduleOutput = typeof MaintenancesScheduleOutput.Type;

// The operation
/**
 * Schedule a maintenance
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param maintenanceName - Name of the maintenance
 */
export const MaintenancesSchedule = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MaintenancesScheduleInput,
    outputSchema: MaintenancesScheduleOutput,
  }),
);
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.AVS/operations",
    apiVersion: "2025-09-01",
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
export const PlacementPoliciesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    placementPolicyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => PlacementPolicyPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type PlacementPoliciesCreateOrUpdateInput =
  typeof PlacementPoliciesCreateOrUpdateInput.Type;

// Output Schema
export const PlacementPoliciesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PlacementPolicyPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PlacementPoliciesCreateOrUpdateOutput =
  typeof PlacementPoliciesCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a PlacementPolicy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 * @param placementPolicyName - Name of the placement policy.
 */
export const PlacementPoliciesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PlacementPoliciesCreateOrUpdateInput,
    outputSchema: PlacementPoliciesCreateOrUpdateOutput,
  }));
// Input Schema
export const PlacementPoliciesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    placementPolicyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type PlacementPoliciesDeleteInput =
  typeof PlacementPoliciesDeleteInput.Type;

// Output Schema
export const PlacementPoliciesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PlacementPoliciesDeleteOutput =
  typeof PlacementPoliciesDeleteOutput.Type;

// The operation
/**
 * Delete a PlacementPolicy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 * @param placementPolicyName - Name of the placement policy.
 */
export const PlacementPoliciesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PlacementPoliciesDeleteInput,
    outputSchema: PlacementPoliciesDeleteOutput,
  }),
);
// Input Schema
export const PlacementPoliciesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    placementPolicyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}",
      apiVersion: "2025-09-01",
    }),
  );
export type PlacementPoliciesGetInput = typeof PlacementPoliciesGetInput.Type;

// Output Schema
export const PlacementPoliciesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PlacementPolicyPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PlacementPoliciesGetOutput = typeof PlacementPoliciesGetOutput.Type;

// The operation
/**
 * Get a PlacementPolicy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 * @param placementPolicyName - Name of the placement policy.
 */
export const PlacementPoliciesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PlacementPoliciesGetInput,
    outputSchema: PlacementPoliciesGetOutput,
  }),
);
// Input Schema
export const PlacementPoliciesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies",
      apiVersion: "2025-09-01",
    }),
  );
export type PlacementPoliciesListInput = typeof PlacementPoliciesListInput.Type;

// Output Schema
export const PlacementPoliciesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => PlacementPolicySchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type PlacementPoliciesListOutput =
  typeof PlacementPoliciesListOutput.Type;

// The operation
/**
 * List PlacementPolicy resources by Cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 */
export const PlacementPoliciesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PlacementPoliciesListInput,
    outputSchema: PlacementPoliciesListOutput,
  }),
);
// Input Schema
export const PlacementPoliciesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    placementPolicyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => PlacementPolicyUpdatePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type PlacementPoliciesUpdateInput =
  typeof PlacementPoliciesUpdateInput.Type;

// Output Schema
export const PlacementPoliciesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PlacementPolicyPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PlacementPoliciesUpdateOutput =
  typeof PlacementPoliciesUpdateOutput.Type;

// The operation
/**
 * Update a PlacementPolicy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 * @param placementPolicyName - Name of the placement policy.
 */
export const PlacementPoliciesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PlacementPoliciesUpdateInput,
    outputSchema: PlacementPoliciesUpdateOutput,
  }),
);
// Input Schema
export const PrivateCloudsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => PrivateCloudPropertiesSchema),
    ),
    sku: Schema.Struct({
      name: Schema.String,
      tier: Schema.optional(Schema.suspend(() => SkuTierSchema)),
      size: Schema.optional(Schema.String),
      family: Schema.optional(Schema.String),
      capacity: Schema.optional(Schema.Number),
    }),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.suspend(() => SystemAssignedServiceIdentityTypeSchema),
      }),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type PrivateCloudsCreateOrUpdateInput =
  typeof PrivateCloudsCreateOrUpdateInput.Type;

// Output Schema
export const PrivateCloudsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PrivateCloudPropertiesSchema),
    ),
    sku: Schema.Struct({
      name: Schema.String,
      tier: Schema.optional(Schema.suspend(() => SkuTierSchema)),
      size: Schema.optional(Schema.String),
      family: Schema.optional(Schema.String),
      capacity: Schema.optional(Schema.Number),
    }),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.suspend(() => SystemAssignedServiceIdentityTypeSchema),
      }),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PrivateCloudsCreateOrUpdateOutput =
  typeof PrivateCloudsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a PrivateCloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const PrivateCloudsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateCloudsCreateOrUpdateInput,
    outputSchema: PrivateCloudsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const PrivateCloudsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type PrivateCloudsDeleteInput = typeof PrivateCloudsDeleteInput.Type;

// Output Schema
export const PrivateCloudsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PrivateCloudsDeleteOutput = typeof PrivateCloudsDeleteOutput.Type;

// The operation
/**
 * Delete a PrivateCloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const PrivateCloudsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PrivateCloudsDeleteInput,
  outputSchema: PrivateCloudsDeleteOutput,
}));
// Input Schema
export const PrivateCloudsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}",
    apiVersion: "2025-09-01",
  }),
);
export type PrivateCloudsGetInput = typeof PrivateCloudsGetInput.Type;

// Output Schema
export const PrivateCloudsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.optional(
      Schema.suspend(() => PrivateCloudPropertiesSchema),
    ),
    sku: Schema.Struct({
      name: Schema.String,
      tier: Schema.optional(Schema.suspend(() => SkuTierSchema)),
      size: Schema.optional(Schema.String),
      family: Schema.optional(Schema.String),
      capacity: Schema.optional(Schema.Number),
    }),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.suspend(() => SystemAssignedServiceIdentityTypeSchema),
      }),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
export type PrivateCloudsGetOutput = typeof PrivateCloudsGetOutput.Type;

// The operation
/**
 * Get a PrivateCloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const PrivateCloudsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PrivateCloudsGetInput,
  outputSchema: PrivateCloudsGetOutput,
}));
// Input Schema
export const PrivateCloudsGetVcfLicenseInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/getVcfLicense",
      apiVersion: "2025-09-01",
    }),
  );
export type PrivateCloudsGetVcfLicenseInput =
  typeof PrivateCloudsGetVcfLicenseInput.Type;

// Output Schema
export const PrivateCloudsGetVcfLicenseOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.suspend(() => VcfLicenseKindSchema),
    provisioningState: Schema.optional(
      Schema.suspend(() => LicenseProvisioningStateSchema),
    ),
  });
export type PrivateCloudsGetVcfLicenseOutput =
  typeof PrivateCloudsGetVcfLicenseOutput.Type;

// The operation
/**
 * Get the license for the private cloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const PrivateCloudsGetVcfLicense = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateCloudsGetVcfLicenseInput,
    outputSchema: PrivateCloudsGetVcfLicenseOutput,
  }),
);
// Input Schema
export const PrivateCloudsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds",
    apiVersion: "2025-09-01",
  }),
);
export type PrivateCloudsListInput = typeof PrivateCloudsListInput.Type;

// Output Schema
export const PrivateCloudsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => PrivateCloudSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type PrivateCloudsListOutput = typeof PrivateCloudsListOutput.Type;

// The operation
/**
 * List PrivateCloud resources by resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const PrivateCloudsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PrivateCloudsListInput,
  outputSchema: PrivateCloudsListOutput,
}));
// Input Schema
export const PrivateCloudsListAdminCredentialsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/listAdminCredentials",
      apiVersion: "2025-09-01",
    }),
  );
export type PrivateCloudsListAdminCredentialsInput =
  typeof PrivateCloudsListAdminCredentialsInput.Type;

// Output Schema
export const PrivateCloudsListAdminCredentialsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nsxtUsername: Schema.optional(Schema.String),
    nsxtPassword: Schema.optional(SensitiveOutputString),
    vcenterUsername: Schema.optional(Schema.String),
    vcenterPassword: Schema.optional(SensitiveOutputString),
  });
export type PrivateCloudsListAdminCredentialsOutput =
  typeof PrivateCloudsListAdminCredentialsOutput.Type;

// The operation
/**
 * List the admin credentials for the private cloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const PrivateCloudsListAdminCredentials =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateCloudsListAdminCredentialsInput,
    outputSchema: PrivateCloudsListAdminCredentialsOutput,
  }));
// Input Schema
export const PrivateCloudsListInSubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AVS/privateClouds",
      apiVersion: "2025-09-01",
    }),
  );
export type PrivateCloudsListInSubscriptionInput =
  typeof PrivateCloudsListInSubscriptionInput.Type;

// Output Schema
export const PrivateCloudsListInSubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => PrivateCloudSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type PrivateCloudsListInSubscriptionOutput =
  typeof PrivateCloudsListInSubscriptionOutput.Type;

// The operation
/**
 * List PrivateCloud resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const PrivateCloudsListInSubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateCloudsListInSubscriptionInput,
    outputSchema: PrivateCloudsListInSubscriptionOutput,
  }));
// Input Schema
export const PrivateCloudsRotateNsxtPasswordInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/rotateNsxtPassword",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type PrivateCloudsRotateNsxtPasswordInput =
  typeof PrivateCloudsRotateNsxtPasswordInput.Type;

// Output Schema
export const PrivateCloudsRotateNsxtPasswordOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PrivateCloudsRotateNsxtPasswordOutput =
  typeof PrivateCloudsRotateNsxtPasswordOutput.Type;

// The operation
/**
 * Rotate the NSX-T Manager password
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const PrivateCloudsRotateNsxtPassword =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateCloudsRotateNsxtPasswordInput,
    outputSchema: PrivateCloudsRotateNsxtPasswordOutput,
  }));
// Input Schema
export const PrivateCloudsRotateVcenterPasswordInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/rotateVcenterPassword",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type PrivateCloudsRotateVcenterPasswordInput =
  typeof PrivateCloudsRotateVcenterPasswordInput.Type;

// Output Schema
export const PrivateCloudsRotateVcenterPasswordOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PrivateCloudsRotateVcenterPasswordOutput =
  typeof PrivateCloudsRotateVcenterPasswordOutput.Type;

// The operation
/**
 * Rotate the vCenter password
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const PrivateCloudsRotateVcenterPassword =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateCloudsRotateVcenterPasswordInput,
    outputSchema: PrivateCloudsRotateVcenterPasswordOutput,
  }));
// Input Schema
export const PrivateCloudsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(Schema.suspend(() => SkuTierSchema)),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.suspend(() => SystemAssignedServiceIdentityTypeSchema),
      }),
    ),
    properties: Schema.optional(
      Schema.suspend(() => PrivateCloudUpdatePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type PrivateCloudsUpdateInput = typeof PrivateCloudsUpdateInput.Type;

// Output Schema
export const PrivateCloudsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PrivateCloudPropertiesSchema),
    ),
    sku: Schema.Struct({
      name: Schema.String,
      tier: Schema.optional(Schema.suspend(() => SkuTierSchema)),
      size: Schema.optional(Schema.String),
      family: Schema.optional(Schema.String),
      capacity: Schema.optional(Schema.Number),
    }),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.suspend(() => SystemAssignedServiceIdentityTypeSchema),
      }),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PrivateCloudsUpdateOutput = typeof PrivateCloudsUpdateOutput.Type;

// The operation
/**
 * Update a PrivateCloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const PrivateCloudsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PrivateCloudsUpdateInput,
  outputSchema: PrivateCloudsUpdateOutput,
}));
// Input Schema
export const ProvisionedNetworksGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    provisionedNetworkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/provisionedNetworks/{provisionedNetworkName}",
      apiVersion: "2025-09-01",
    }),
  );
export type ProvisionedNetworksGetInput =
  typeof ProvisionedNetworksGetInput.Type;

// Output Schema
export const ProvisionedNetworksGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ProvisionedNetworkPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ProvisionedNetworksGetOutput =
  typeof ProvisionedNetworksGetOutput.Type;

// The operation
/**
 * Get a ProvisionedNetwork
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param provisionedNetworkName - Name of the cloud link.
 */
export const ProvisionedNetworksGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProvisionedNetworksGetInput,
    outputSchema: ProvisionedNetworksGetOutput,
  }),
);
// Input Schema
export const ProvisionedNetworksListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/provisionedNetworks",
      apiVersion: "2025-09-01",
    }),
  );
export type ProvisionedNetworksListInput =
  typeof ProvisionedNetworksListInput.Type;

// Output Schema
export const ProvisionedNetworksListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ProvisionedNetworkSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ProvisionedNetworksListOutput =
  typeof ProvisionedNetworksListOutput.Type;

// The operation
/**
 * List ProvisionedNetwork resources by PrivateCloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const ProvisionedNetworksList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProvisionedNetworksListInput,
    outputSchema: ProvisionedNetworksListOutput,
  }),
);
// Input Schema
export const PureStoragePoliciesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    storagePolicyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => PureStoragePolicyPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/pureStoragePolicies/{storagePolicyName}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type PureStoragePoliciesCreateOrUpdateInput =
  typeof PureStoragePoliciesCreateOrUpdateInput.Type;

// Output Schema
export const PureStoragePoliciesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PureStoragePolicyPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PureStoragePoliciesCreateOrUpdateOutput =
  typeof PureStoragePoliciesCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a PureStoragePolicy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param storagePolicyName - Name of the storage policy.
 */
export const PureStoragePoliciesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PureStoragePoliciesCreateOrUpdateInput,
    outputSchema: PureStoragePoliciesCreateOrUpdateOutput,
  }));
// Input Schema
export const PureStoragePoliciesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    storagePolicyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/pureStoragePolicies/{storagePolicyName}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type PureStoragePoliciesDeleteInput =
  typeof PureStoragePoliciesDeleteInput.Type;

// Output Schema
export const PureStoragePoliciesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PureStoragePoliciesDeleteOutput =
  typeof PureStoragePoliciesDeleteOutput.Type;

// The operation
/**
 * Delete a PureStoragePolicy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param storagePolicyName - Name of the storage policy.
 */
export const PureStoragePoliciesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PureStoragePoliciesDeleteInput,
    outputSchema: PureStoragePoliciesDeleteOutput,
  }),
);
// Input Schema
export const PureStoragePoliciesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    storagePolicyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/pureStoragePolicies/{storagePolicyName}",
      apiVersion: "2025-09-01",
    }),
  );
export type PureStoragePoliciesGetInput =
  typeof PureStoragePoliciesGetInput.Type;

// Output Schema
export const PureStoragePoliciesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PureStoragePolicyPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PureStoragePoliciesGetOutput =
  typeof PureStoragePoliciesGetOutput.Type;

// The operation
/**
 * Get a PureStoragePolicy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param storagePolicyName - Name of the storage policy.
 */
export const PureStoragePoliciesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PureStoragePoliciesGetInput,
    outputSchema: PureStoragePoliciesGetOutput,
  }),
);
// Input Schema
export const PureStoragePoliciesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/pureStoragePolicies",
      apiVersion: "2025-09-01",
    }),
  );
export type PureStoragePoliciesListInput =
  typeof PureStoragePoliciesListInput.Type;

// Output Schema
export const PureStoragePoliciesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => PureStoragePolicySchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type PureStoragePoliciesListOutput =
  typeof PureStoragePoliciesListOutput.Type;

// The operation
/**
 * List PureStoragePolicy resources by PrivateCloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const PureStoragePoliciesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PureStoragePoliciesListInput,
    outputSchema: PureStoragePoliciesListOutput,
  }),
);
// Input Schema
export const ScriptCmdletsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  scriptPackageName: Schema.String.pipe(T.PathParam()),
  scriptCmdletName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptPackages/{scriptPackageName}/scriptCmdlets/{scriptCmdletName}",
    apiVersion: "2025-09-01",
  }),
);
export type ScriptCmdletsGetInput = typeof ScriptCmdletsGetInput.Type;

// Output Schema
export const ScriptCmdletsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.optional(
      Schema.suspend(() => ScriptCmdletPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
export type ScriptCmdletsGetOutput = typeof ScriptCmdletsGetOutput.Type;

// The operation
/**
 * Get a ScriptCmdlet
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param scriptPackageName - Name of the script package.
 * @param scriptCmdletName - Name of the script cmdlet.
 */
export const ScriptCmdletsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScriptCmdletsGetInput,
  outputSchema: ScriptCmdletsGetOutput,
}));
// Input Schema
export const ScriptCmdletsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    scriptPackageName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptPackages/{scriptPackageName}/scriptCmdlets",
    apiVersion: "2025-09-01",
  }),
);
export type ScriptCmdletsListInput = typeof ScriptCmdletsListInput.Type;

// Output Schema
export const ScriptCmdletsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ScriptCmdletSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ScriptCmdletsListOutput = typeof ScriptCmdletsListOutput.Type;

// The operation
/**
 * List ScriptCmdlet resources by ScriptPackage
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param scriptPackageName - Name of the script package.
 */
export const ScriptCmdletsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScriptCmdletsListInput,
  outputSchema: ScriptCmdletsListOutput,
}));
// Input Schema
export const ScriptExecutionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    scriptExecutionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => ScriptExecutionPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type ScriptExecutionsCreateOrUpdateInput =
  typeof ScriptExecutionsCreateOrUpdateInput.Type;

// Output Schema
export const ScriptExecutionsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ScriptExecutionPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ScriptExecutionsCreateOrUpdateOutput =
  typeof ScriptExecutionsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a ScriptExecution
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param scriptExecutionName - Name of the script cmdlet.
 */
export const ScriptExecutionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ScriptExecutionsCreateOrUpdateInput,
    outputSchema: ScriptExecutionsCreateOrUpdateOutput,
  }));
// Input Schema
export const ScriptExecutionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    scriptExecutionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type ScriptExecutionsDeleteInput =
  typeof ScriptExecutionsDeleteInput.Type;

// Output Schema
export const ScriptExecutionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ScriptExecutionsDeleteOutput =
  typeof ScriptExecutionsDeleteOutput.Type;

// The operation
/**
 * Delete a ScriptExecution
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param scriptExecutionName - Name of the script cmdlet.
 */
export const ScriptExecutionsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ScriptExecutionsDeleteInput,
    outputSchema: ScriptExecutionsDeleteOutput,
  }),
);
// Input Schema
export const ScriptExecutionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    scriptExecutionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}",
      apiVersion: "2025-09-01",
    }),
  );
export type ScriptExecutionsGetInput = typeof ScriptExecutionsGetInput.Type;

// Output Schema
export const ScriptExecutionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ScriptExecutionPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ScriptExecutionsGetOutput = typeof ScriptExecutionsGetOutput.Type;

// The operation
/**
 * Get a ScriptExecution
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param scriptExecutionName - Name of the script cmdlet.
 */
export const ScriptExecutionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScriptExecutionsGetInput,
  outputSchema: ScriptExecutionsGetOutput,
}));
// Input Schema
export const ScriptExecutionsGetExecutionLogsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    scriptExecutionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}/getExecutionLogs",
      apiVersion: "2025-09-01",
    }),
  );
export type ScriptExecutionsGetExecutionLogsInput =
  typeof ScriptExecutionsGetExecutionLogsInput.Type;

// Output Schema
export const ScriptExecutionsGetExecutionLogsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ScriptExecutionPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ScriptExecutionsGetExecutionLogsOutput =
  typeof ScriptExecutionsGetExecutionLogsOutput.Type;

// The operation
/**
 * Return the logs for a script execution resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param scriptExecutionName - Name of the script cmdlet.
 */
export const ScriptExecutionsGetExecutionLogs =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ScriptExecutionsGetExecutionLogsInput,
    outputSchema: ScriptExecutionsGetExecutionLogsOutput,
  }));
// Input Schema
export const ScriptExecutionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions",
      apiVersion: "2025-09-01",
    }),
  );
export type ScriptExecutionsListInput = typeof ScriptExecutionsListInput.Type;

// Output Schema
export const ScriptExecutionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ScriptExecutionSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ScriptExecutionsListOutput = typeof ScriptExecutionsListOutput.Type;

// The operation
/**
 * List ScriptExecution resources by PrivateCloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const ScriptExecutionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ScriptExecutionsListInput,
    outputSchema: ScriptExecutionsListOutput,
  }),
);
// Input Schema
export const ScriptPackagesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    scriptPackageName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptPackages/{scriptPackageName}",
    apiVersion: "2025-09-01",
  }),
);
export type ScriptPackagesGetInput = typeof ScriptPackagesGetInput.Type;

// Output Schema
export const ScriptPackagesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ScriptPackagePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ScriptPackagesGetOutput = typeof ScriptPackagesGetOutput.Type;

// The operation
/**
 * Get a ScriptPackage
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param scriptPackageName - Name of the script package.
 */
export const ScriptPackagesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScriptPackagesGetInput,
  outputSchema: ScriptPackagesGetOutput,
}));
// Input Schema
export const ScriptPackagesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptPackages",
      apiVersion: "2025-09-01",
    }),
  );
export type ScriptPackagesListInput = typeof ScriptPackagesListInput.Type;

// Output Schema
export const ScriptPackagesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ScriptPackageSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ScriptPackagesListOutput = typeof ScriptPackagesListOutput.Type;

// The operation
/**
 * List ScriptPackage resources by PrivateCloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const ScriptPackagesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScriptPackagesListInput,
  outputSchema: ScriptPackagesListOutput,
}));
// Input Schema
export const ServiceComponentsCheckAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    serviceComponentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AVS/locations/{location}/serviceComponents/{serviceComponentName}/checkAvailability",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type ServiceComponentsCheckAvailabilityInput =
  typeof ServiceComponentsCheckAvailabilityInput.Type;

// Output Schema
export const ServiceComponentsCheckAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServiceComponentsCheckAvailabilityOutput =
  typeof ServiceComponentsCheckAvailabilityOutput.Type;

// The operation
/**
 * Return service component availability
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param serviceComponentName - A service component
 */
export const ServiceComponentsCheckAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServiceComponentsCheckAvailabilityInput,
    outputSchema: ServiceComponentsCheckAvailabilityOutput,
  }));
// Input Schema
export const SkusListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.AVS/skus",
    apiVersion: "2025-09-01",
  }),
);
export type SkusListInput = typeof SkusListInput.Type;

// Output Schema
export const SkusListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(Schema.suspend(() => ResourceSkuSchema)),
  nextLink: Schema.optional(Schema.String),
});
export type SkusListOutput = typeof SkusListOutput.Type;

// The operation
/**
 * A list of SKUs.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const SkusList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SkusListInput,
  outputSchema: SkusListOutput,
}));
// Input Schema
export const VirtualMachinesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    virtualMachineId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/virtualMachines/{virtualMachineId}",
      apiVersion: "2025-09-01",
    }),
  );
export type VirtualMachinesGetInput = typeof VirtualMachinesGetInput.Type;

// Output Schema
export const VirtualMachinesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => VirtualMachinePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type VirtualMachinesGetOutput = typeof VirtualMachinesGetOutput.Type;

// The operation
/**
 * Get a VirtualMachine
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 * @param virtualMachineId - ID of the virtual machine.
 */
export const VirtualMachinesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VirtualMachinesGetInput,
  outputSchema: VirtualMachinesGetOutput,
}));
// Input Schema
export const VirtualMachinesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/virtualMachines",
      apiVersion: "2025-09-01",
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
 * List VirtualMachine resources by Cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 */
export const VirtualMachinesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VirtualMachinesListInput,
  outputSchema: VirtualMachinesListOutput,
}));
// Input Schema
export const VirtualMachinesRestrictMovementInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    virtualMachineId: Schema.String.pipe(T.PathParam()),
    restrictMovement: Schema.optional(
      Schema.suspend(() => VirtualMachineRestrictMovementStateSchema),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/virtualMachines/{virtualMachineId}/restrictMovement",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualMachinesRestrictMovementInput =
  typeof VirtualMachinesRestrictMovementInput.Type;

// Output Schema
export const VirtualMachinesRestrictMovementOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachinesRestrictMovementOutput =
  typeof VirtualMachinesRestrictMovementOutput.Type;

// The operation
/**
 * Enable or disable DRS-driven VM movement restriction
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 * @param virtualMachineId - ID of the virtual machine.
 */
export const VirtualMachinesRestrictMovement =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachinesRestrictMovementInput,
    outputSchema: VirtualMachinesRestrictMovementOutput,
  }));
// Input Schema
export const WorkloadNetworksCreateDhcpInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    dhcpId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => WorkloadNetworkDhcpEntitySchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dhcpConfigurations/{dhcpId}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type WorkloadNetworksCreateDhcpInput =
  typeof WorkloadNetworksCreateDhcpInput.Type;

// Output Schema
export const WorkloadNetworksCreateDhcpOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => WorkloadNetworkDhcpEntitySchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WorkloadNetworksCreateDhcpOutput =
  typeof WorkloadNetworksCreateDhcpOutput.Type;

// The operation
/**
 * Create a WorkloadNetworkDhcp
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param dhcpId - The ID of the DHCP configuration
 */
export const WorkloadNetworksCreateDhcp = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkloadNetworksCreateDhcpInput,
    outputSchema: WorkloadNetworksCreateDhcpOutput,
  }),
);
// Input Schema
export const WorkloadNetworksCreateDnsServiceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    dnsServiceId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => WorkloadNetworkDnsServicePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type WorkloadNetworksCreateDnsServiceInput =
  typeof WorkloadNetworksCreateDnsServiceInput.Type;

// Output Schema
export const WorkloadNetworksCreateDnsServiceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => WorkloadNetworkDnsServicePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WorkloadNetworksCreateDnsServiceOutput =
  typeof WorkloadNetworksCreateDnsServiceOutput.Type;

// The operation
/**
 * Create a WorkloadNetworkDnsService
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param dnsServiceId - ID of the DNS service.
 */
export const WorkloadNetworksCreateDnsService =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksCreateDnsServiceInput,
    outputSchema: WorkloadNetworksCreateDnsServiceOutput,
  }));
// Input Schema
export const WorkloadNetworksCreateDnsZoneInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    dnsZoneId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => WorkloadNetworkDnsZonePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones/{dnsZoneId}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type WorkloadNetworksCreateDnsZoneInput =
  typeof WorkloadNetworksCreateDnsZoneInput.Type;

// Output Schema
export const WorkloadNetworksCreateDnsZoneOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => WorkloadNetworkDnsZonePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WorkloadNetworksCreateDnsZoneOutput =
  typeof WorkloadNetworksCreateDnsZoneOutput.Type;

// The operation
/**
 * Create a WorkloadNetworkDnsZone
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param dnsZoneId - ID of the DNS zone.
 */
export const WorkloadNetworksCreateDnsZone =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksCreateDnsZoneInput,
    outputSchema: WorkloadNetworksCreateDnsZoneOutput,
  }));
// Input Schema
export const WorkloadNetworksCreatePortMirroringInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    portMirroringId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => WorkloadNetworkPortMirroringPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/portMirroringProfiles/{portMirroringId}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type WorkloadNetworksCreatePortMirroringInput =
  typeof WorkloadNetworksCreatePortMirroringInput.Type;

// Output Schema
export const WorkloadNetworksCreatePortMirroringOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => WorkloadNetworkPortMirroringPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WorkloadNetworksCreatePortMirroringOutput =
  typeof WorkloadNetworksCreatePortMirroringOutput.Type;

// The operation
/**
 * Create a WorkloadNetworkPortMirroring
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param portMirroringId - ID of the NSX port mirroring profile.
 */
export const WorkloadNetworksCreatePortMirroring =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksCreatePortMirroringInput,
    outputSchema: WorkloadNetworksCreatePortMirroringOutput,
  }));
// Input Schema
export const WorkloadNetworksCreatePublicIPInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    publicIPId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => WorkloadNetworkPublicIPPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/publicIPs/{publicIPId}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type WorkloadNetworksCreatePublicIPInput =
  typeof WorkloadNetworksCreatePublicIPInput.Type;

// Output Schema
export const WorkloadNetworksCreatePublicIPOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => WorkloadNetworkPublicIPPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WorkloadNetworksCreatePublicIPOutput =
  typeof WorkloadNetworksCreatePublicIPOutput.Type;

// The operation
/**
 * Create a WorkloadNetworkPublicIP
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param publicIPId - ID of the DNS zone.
 */
export const WorkloadNetworksCreatePublicIP =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksCreatePublicIPInput,
    outputSchema: WorkloadNetworksCreatePublicIPOutput,
  }));
// Input Schema
export const WorkloadNetworksCreateSegmentsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    segmentId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => WorkloadNetworkSegmentPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments/{segmentId}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type WorkloadNetworksCreateSegmentsInput =
  typeof WorkloadNetworksCreateSegmentsInput.Type;

// Output Schema
export const WorkloadNetworksCreateSegmentsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => WorkloadNetworkSegmentPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WorkloadNetworksCreateSegmentsOutput =
  typeof WorkloadNetworksCreateSegmentsOutput.Type;

// The operation
/**
 * Create a WorkloadNetworkSegment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param segmentId - The ID of the NSX Segment
 */
export const WorkloadNetworksCreateSegments =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksCreateSegmentsInput,
    outputSchema: WorkloadNetworksCreateSegmentsOutput,
  }));
// Input Schema
export const WorkloadNetworksCreateVMGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    vmGroupId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => WorkloadNetworkVMGroupPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups/{vmGroupId}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type WorkloadNetworksCreateVMGroupInput =
  typeof WorkloadNetworksCreateVMGroupInput.Type;

// Output Schema
export const WorkloadNetworksCreateVMGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => WorkloadNetworkVMGroupPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WorkloadNetworksCreateVMGroupOutput =
  typeof WorkloadNetworksCreateVMGroupOutput.Type;

// The operation
/**
 * Create a WorkloadNetworkVMGroup
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param vmGroupId - ID of the VM group.
 */
export const WorkloadNetworksCreateVMGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksCreateVMGroupInput,
    outputSchema: WorkloadNetworksCreateVMGroupOutput,
  }));
// Input Schema
export const WorkloadNetworksDeleteDhcpInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    dhcpId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dhcpConfigurations/{dhcpId}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type WorkloadNetworksDeleteDhcpInput =
  typeof WorkloadNetworksDeleteDhcpInput.Type;

// Output Schema
export const WorkloadNetworksDeleteDhcpOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WorkloadNetworksDeleteDhcpOutput =
  typeof WorkloadNetworksDeleteDhcpOutput.Type;

// The operation
/**
 * Delete a WorkloadNetworkDhcp
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param dhcpId - The ID of the DHCP configuration
 */
export const WorkloadNetworksDeleteDhcp = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkloadNetworksDeleteDhcpInput,
    outputSchema: WorkloadNetworksDeleteDhcpOutput,
  }),
);
// Input Schema
export const WorkloadNetworksDeleteDnsServiceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type WorkloadNetworksDeleteDnsServiceInput =
  typeof WorkloadNetworksDeleteDnsServiceInput.Type;

// Output Schema
export const WorkloadNetworksDeleteDnsServiceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WorkloadNetworksDeleteDnsServiceOutput =
  typeof WorkloadNetworksDeleteDnsServiceOutput.Type;

// The operation
/**
 * Delete a WorkloadNetworkDnsService
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const WorkloadNetworksDeleteDnsService =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksDeleteDnsServiceInput,
    outputSchema: WorkloadNetworksDeleteDnsServiceOutput,
  }));
// Input Schema
export const WorkloadNetworksDeleteDnsZoneInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones/{dnsZoneId}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type WorkloadNetworksDeleteDnsZoneInput =
  typeof WorkloadNetworksDeleteDnsZoneInput.Type;

// Output Schema
export const WorkloadNetworksDeleteDnsZoneOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WorkloadNetworksDeleteDnsZoneOutput =
  typeof WorkloadNetworksDeleteDnsZoneOutput.Type;

// The operation
/**
 * Delete a WorkloadNetworkDnsZone
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const WorkloadNetworksDeleteDnsZone =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksDeleteDnsZoneInput,
    outputSchema: WorkloadNetworksDeleteDnsZoneOutput,
  }));
// Input Schema
export const WorkloadNetworksDeletePortMirroringInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/portMirroringProfiles/{portMirroringId}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type WorkloadNetworksDeletePortMirroringInput =
  typeof WorkloadNetworksDeletePortMirroringInput.Type;

// Output Schema
export const WorkloadNetworksDeletePortMirroringOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WorkloadNetworksDeletePortMirroringOutput =
  typeof WorkloadNetworksDeletePortMirroringOutput.Type;

// The operation
/**
 * Delete a WorkloadNetworkPortMirroring
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const WorkloadNetworksDeletePortMirroring =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksDeletePortMirroringInput,
    outputSchema: WorkloadNetworksDeletePortMirroringOutput,
  }));
// Input Schema
export const WorkloadNetworksDeletePublicIPInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/publicIPs/{publicIPId}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type WorkloadNetworksDeletePublicIPInput =
  typeof WorkloadNetworksDeletePublicIPInput.Type;

// Output Schema
export const WorkloadNetworksDeletePublicIPOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WorkloadNetworksDeletePublicIPOutput =
  typeof WorkloadNetworksDeletePublicIPOutput.Type;

// The operation
/**
 * Delete a WorkloadNetworkPublicIP
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const WorkloadNetworksDeletePublicIP =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksDeletePublicIPInput,
    outputSchema: WorkloadNetworksDeletePublicIPOutput,
  }));
// Input Schema
export const WorkloadNetworksDeleteSegmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    segmentId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments/{segmentId}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type WorkloadNetworksDeleteSegmentInput =
  typeof WorkloadNetworksDeleteSegmentInput.Type;

// Output Schema
export const WorkloadNetworksDeleteSegmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WorkloadNetworksDeleteSegmentOutput =
  typeof WorkloadNetworksDeleteSegmentOutput.Type;

// The operation
/**
 * Delete a WorkloadNetworkSegment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param segmentId - The ID of the NSX Segment
 */
export const WorkloadNetworksDeleteSegment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksDeleteSegmentInput,
    outputSchema: WorkloadNetworksDeleteSegmentOutput,
  }));
// Input Schema
export const WorkloadNetworksDeleteVMGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups/{vmGroupId}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type WorkloadNetworksDeleteVMGroupInput =
  typeof WorkloadNetworksDeleteVMGroupInput.Type;

// Output Schema
export const WorkloadNetworksDeleteVMGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WorkloadNetworksDeleteVMGroupOutput =
  typeof WorkloadNetworksDeleteVMGroupOutput.Type;

// The operation
/**
 * Delete a WorkloadNetworkVMGroup
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const WorkloadNetworksDeleteVMGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksDeleteVMGroupInput,
    outputSchema: WorkloadNetworksDeleteVMGroupOutput,
  }));
// Input Schema
export const WorkloadNetworksGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default",
      apiVersion: "2025-09-01",
    }),
  );
export type WorkloadNetworksGetInput = typeof WorkloadNetworksGetInput.Type;

// Output Schema
export const WorkloadNetworksGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => WorkloadNetworkPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WorkloadNetworksGetOutput = typeof WorkloadNetworksGetOutput.Type;

// The operation
/**
 * Get a WorkloadNetwork
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const WorkloadNetworksGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkloadNetworksGetInput,
  outputSchema: WorkloadNetworksGetOutput,
}));
// Input Schema
export const WorkloadNetworksGetDhcpInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dhcpConfigurations/{dhcpId}",
      apiVersion: "2025-09-01",
    }),
  );
export type WorkloadNetworksGetDhcpInput =
  typeof WorkloadNetworksGetDhcpInput.Type;

// Output Schema
export const WorkloadNetworksGetDhcpOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => WorkloadNetworkDhcpEntitySchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WorkloadNetworksGetDhcpOutput =
  typeof WorkloadNetworksGetDhcpOutput.Type;

// The operation
/**
 * Get a WorkloadNetworkDhcp
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const WorkloadNetworksGetDhcp = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkloadNetworksGetDhcpInput,
    outputSchema: WorkloadNetworksGetDhcpOutput,
  }),
);
// Input Schema
export const WorkloadNetworksGetDnsServiceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    dnsServiceId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}",
      apiVersion: "2025-09-01",
    }),
  );
export type WorkloadNetworksGetDnsServiceInput =
  typeof WorkloadNetworksGetDnsServiceInput.Type;

// Output Schema
export const WorkloadNetworksGetDnsServiceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => WorkloadNetworkDnsServicePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WorkloadNetworksGetDnsServiceOutput =
  typeof WorkloadNetworksGetDnsServiceOutput.Type;

// The operation
/**
 * Get a WorkloadNetworkDnsService
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param dnsServiceId - ID of the DNS service.
 */
export const WorkloadNetworksGetDnsService =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksGetDnsServiceInput,
    outputSchema: WorkloadNetworksGetDnsServiceOutput,
  }));
// Input Schema
export const WorkloadNetworksGetDnsZoneInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    dnsZoneId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones/{dnsZoneId}",
      apiVersion: "2025-09-01",
    }),
  );
export type WorkloadNetworksGetDnsZoneInput =
  typeof WorkloadNetworksGetDnsZoneInput.Type;

// Output Schema
export const WorkloadNetworksGetDnsZoneOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => WorkloadNetworkDnsZonePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WorkloadNetworksGetDnsZoneOutput =
  typeof WorkloadNetworksGetDnsZoneOutput.Type;

// The operation
/**
 * Get a WorkloadNetworkDnsZone
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param dnsZoneId - ID of the DNS zone.
 */
export const WorkloadNetworksGetDnsZone = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkloadNetworksGetDnsZoneInput,
    outputSchema: WorkloadNetworksGetDnsZoneOutput,
  }),
);
// Input Schema
export const WorkloadNetworksGetGatewayInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    gatewayId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/gateways/{gatewayId}",
      apiVersion: "2025-09-01",
    }),
  );
export type WorkloadNetworksGetGatewayInput =
  typeof WorkloadNetworksGetGatewayInput.Type;

// Output Schema
export const WorkloadNetworksGetGatewayOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => WorkloadNetworkGatewayPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WorkloadNetworksGetGatewayOutput =
  typeof WorkloadNetworksGetGatewayOutput.Type;

// The operation
/**
 * Get a WorkloadNetworkGateway
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param gatewayId - The ID of the NSX Gateway
 */
export const WorkloadNetworksGetGateway = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkloadNetworksGetGatewayInput,
    outputSchema: WorkloadNetworksGetGatewayOutput,
  }),
);
// Input Schema
export const WorkloadNetworksGetPortMirroringInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    portMirroringId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/portMirroringProfiles/{portMirroringId}",
      apiVersion: "2025-09-01",
    }),
  );
export type WorkloadNetworksGetPortMirroringInput =
  typeof WorkloadNetworksGetPortMirroringInput.Type;

// Output Schema
export const WorkloadNetworksGetPortMirroringOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => WorkloadNetworkPortMirroringPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WorkloadNetworksGetPortMirroringOutput =
  typeof WorkloadNetworksGetPortMirroringOutput.Type;

// The operation
/**
 * Get a WorkloadNetworkPortMirroring
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param portMirroringId - ID of the NSX port mirroring profile.
 */
export const WorkloadNetworksGetPortMirroring =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksGetPortMirroringInput,
    outputSchema: WorkloadNetworksGetPortMirroringOutput,
  }));
// Input Schema
export const WorkloadNetworksGetPublicIPInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    publicIPId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/publicIPs/{publicIPId}",
      apiVersion: "2025-09-01",
    }),
  );
export type WorkloadNetworksGetPublicIPInput =
  typeof WorkloadNetworksGetPublicIPInput.Type;

// Output Schema
export const WorkloadNetworksGetPublicIPOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => WorkloadNetworkPublicIPPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WorkloadNetworksGetPublicIPOutput =
  typeof WorkloadNetworksGetPublicIPOutput.Type;

// The operation
/**
 * Get a WorkloadNetworkPublicIP
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param publicIPId - ID of the DNS zone.
 */
export const WorkloadNetworksGetPublicIP = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkloadNetworksGetPublicIPInput,
    outputSchema: WorkloadNetworksGetPublicIPOutput,
  }),
);
// Input Schema
export const WorkloadNetworksGetSegmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    segmentId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments/{segmentId}",
      apiVersion: "2025-09-01",
    }),
  );
export type WorkloadNetworksGetSegmentInput =
  typeof WorkloadNetworksGetSegmentInput.Type;

// Output Schema
export const WorkloadNetworksGetSegmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => WorkloadNetworkSegmentPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WorkloadNetworksGetSegmentOutput =
  typeof WorkloadNetworksGetSegmentOutput.Type;

// The operation
/**
 * Get a WorkloadNetworkSegment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param segmentId - The ID of the NSX Segment
 */
export const WorkloadNetworksGetSegment = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkloadNetworksGetSegmentInput,
    outputSchema: WorkloadNetworksGetSegmentOutput,
  }),
);
// Input Schema
export const WorkloadNetworksGetVirtualMachineInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    virtualMachineId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/virtualMachines/{virtualMachineId}",
      apiVersion: "2025-09-01",
    }),
  );
export type WorkloadNetworksGetVirtualMachineInput =
  typeof WorkloadNetworksGetVirtualMachineInput.Type;

// Output Schema
export const WorkloadNetworksGetVirtualMachineOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => WorkloadNetworkVirtualMachinePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WorkloadNetworksGetVirtualMachineOutput =
  typeof WorkloadNetworksGetVirtualMachineOutput.Type;

// The operation
/**
 * Get a WorkloadNetworkVirtualMachine
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param virtualMachineId - ID of the virtual machine.
 */
export const WorkloadNetworksGetVirtualMachine =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksGetVirtualMachineInput,
    outputSchema: WorkloadNetworksGetVirtualMachineOutput,
  }));
// Input Schema
export const WorkloadNetworksGetVMGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    vmGroupId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups/{vmGroupId}",
      apiVersion: "2025-09-01",
    }),
  );
export type WorkloadNetworksGetVMGroupInput =
  typeof WorkloadNetworksGetVMGroupInput.Type;

// Output Schema
export const WorkloadNetworksGetVMGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => WorkloadNetworkVMGroupPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WorkloadNetworksGetVMGroupOutput =
  typeof WorkloadNetworksGetVMGroupOutput.Type;

// The operation
/**
 * Get a WorkloadNetworkVMGroup
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param vmGroupId - ID of the VM group.
 */
export const WorkloadNetworksGetVMGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkloadNetworksGetVMGroupInput,
    outputSchema: WorkloadNetworksGetVMGroupOutput,
  }),
);
// Input Schema
export const WorkloadNetworksListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks",
      apiVersion: "2025-09-01",
    }),
  );
export type WorkloadNetworksListInput = typeof WorkloadNetworksListInput.Type;

// Output Schema
export const WorkloadNetworksListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => WorkloadNetworkSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type WorkloadNetworksListOutput = typeof WorkloadNetworksListOutput.Type;

// The operation
/**
 * List WorkloadNetwork resources by PrivateCloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const WorkloadNetworksList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkloadNetworksListInput,
    outputSchema: WorkloadNetworksListOutput,
  }),
);
// Input Schema
export const WorkloadNetworksListDhcpInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dhcpConfigurations",
      apiVersion: "2025-09-01",
    }),
  );
export type WorkloadNetworksListDhcpInput =
  typeof WorkloadNetworksListDhcpInput.Type;

// Output Schema
export const WorkloadNetworksListDhcpOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => WorkloadNetworkDhcpSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type WorkloadNetworksListDhcpOutput =
  typeof WorkloadNetworksListDhcpOutput.Type;

// The operation
/**
 * List WorkloadNetworkDhcp resources by WorkloadNetwork
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const WorkloadNetworksListDhcp = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkloadNetworksListDhcpInput,
    outputSchema: WorkloadNetworksListDhcpOutput,
  }),
);
// Input Schema
export const WorkloadNetworksListDnsServicesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices",
      apiVersion: "2025-09-01",
    }),
  );
export type WorkloadNetworksListDnsServicesInput =
  typeof WorkloadNetworksListDnsServicesInput.Type;

// Output Schema
export const WorkloadNetworksListDnsServicesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => WorkloadNetworkDnsServiceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type WorkloadNetworksListDnsServicesOutput =
  typeof WorkloadNetworksListDnsServicesOutput.Type;

// The operation
/**
 * List WorkloadNetworkDnsService resources by WorkloadNetwork
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const WorkloadNetworksListDnsServices =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksListDnsServicesInput,
    outputSchema: WorkloadNetworksListDnsServicesOutput,
  }));
// Input Schema
export const WorkloadNetworksListDnsZonesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones",
      apiVersion: "2025-09-01",
    }),
  );
export type WorkloadNetworksListDnsZonesInput =
  typeof WorkloadNetworksListDnsZonesInput.Type;

// Output Schema
export const WorkloadNetworksListDnsZonesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => WorkloadNetworkDnsZoneSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type WorkloadNetworksListDnsZonesOutput =
  typeof WorkloadNetworksListDnsZonesOutput.Type;

// The operation
/**
 * List WorkloadNetworkDnsZone resources by WorkloadNetwork
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const WorkloadNetworksListDnsZones =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksListDnsZonesInput,
    outputSchema: WorkloadNetworksListDnsZonesOutput,
  }));
// Input Schema
export const WorkloadNetworksListGatewaysInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/gateways",
      apiVersion: "2025-09-01",
    }),
  );
export type WorkloadNetworksListGatewaysInput =
  typeof WorkloadNetworksListGatewaysInput.Type;

// Output Schema
export const WorkloadNetworksListGatewaysOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => WorkloadNetworkGatewaySchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type WorkloadNetworksListGatewaysOutput =
  typeof WorkloadNetworksListGatewaysOutput.Type;

// The operation
/**
 * List WorkloadNetworkGateway resources by WorkloadNetwork
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const WorkloadNetworksListGateways =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksListGatewaysInput,
    outputSchema: WorkloadNetworksListGatewaysOutput,
  }));
// Input Schema
export const WorkloadNetworksListPortMirroringInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/portMirroringProfiles",
      apiVersion: "2025-09-01",
    }),
  );
export type WorkloadNetworksListPortMirroringInput =
  typeof WorkloadNetworksListPortMirroringInput.Type;

// Output Schema
export const WorkloadNetworksListPortMirroringOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.suspend(() => WorkloadNetworkPortMirroringSchema),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type WorkloadNetworksListPortMirroringOutput =
  typeof WorkloadNetworksListPortMirroringOutput.Type;

// The operation
/**
 * List WorkloadNetworkPortMirroring resources by WorkloadNetwork
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const WorkloadNetworksListPortMirroring =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksListPortMirroringInput,
    outputSchema: WorkloadNetworksListPortMirroringOutput,
  }));
// Input Schema
export const WorkloadNetworksListPublicIPsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/publicIPs",
      apiVersion: "2025-09-01",
    }),
  );
export type WorkloadNetworksListPublicIPsInput =
  typeof WorkloadNetworksListPublicIPsInput.Type;

// Output Schema
export const WorkloadNetworksListPublicIPsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => WorkloadNetworkPublicIPSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type WorkloadNetworksListPublicIPsOutput =
  typeof WorkloadNetworksListPublicIPsOutput.Type;

// The operation
/**
 * List WorkloadNetworkPublicIP resources by WorkloadNetwork
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const WorkloadNetworksListPublicIPs =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksListPublicIPsInput,
    outputSchema: WorkloadNetworksListPublicIPsOutput,
  }));
// Input Schema
export const WorkloadNetworksListSegmentsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments",
      apiVersion: "2025-09-01",
    }),
  );
export type WorkloadNetworksListSegmentsInput =
  typeof WorkloadNetworksListSegmentsInput.Type;

// Output Schema
export const WorkloadNetworksListSegmentsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => WorkloadNetworkSegmentSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type WorkloadNetworksListSegmentsOutput =
  typeof WorkloadNetworksListSegmentsOutput.Type;

// The operation
/**
 * List WorkloadNetworkSegment resources by WorkloadNetwork
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const WorkloadNetworksListSegments =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksListSegmentsInput,
    outputSchema: WorkloadNetworksListSegmentsOutput,
  }));
// Input Schema
export const WorkloadNetworksListVirtualMachinesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/virtualMachines",
      apiVersion: "2025-09-01",
    }),
  );
export type WorkloadNetworksListVirtualMachinesInput =
  typeof WorkloadNetworksListVirtualMachinesInput.Type;

// Output Schema
export const WorkloadNetworksListVirtualMachinesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.suspend(() => WorkloadNetworkVirtualMachineSchema),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type WorkloadNetworksListVirtualMachinesOutput =
  typeof WorkloadNetworksListVirtualMachinesOutput.Type;

// The operation
/**
 * List WorkloadNetworkVirtualMachine resources by WorkloadNetwork
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const WorkloadNetworksListVirtualMachines =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksListVirtualMachinesInput,
    outputSchema: WorkloadNetworksListVirtualMachinesOutput,
  }));
// Input Schema
export const WorkloadNetworksListVMGroupsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups",
      apiVersion: "2025-09-01",
    }),
  );
export type WorkloadNetworksListVMGroupsInput =
  typeof WorkloadNetworksListVMGroupsInput.Type;

// Output Schema
export const WorkloadNetworksListVMGroupsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => WorkloadNetworkVMGroupSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type WorkloadNetworksListVMGroupsOutput =
  typeof WorkloadNetworksListVMGroupsOutput.Type;

// The operation
/**
 * List WorkloadNetworkVMGroup resources by WorkloadNetwork
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const WorkloadNetworksListVMGroups =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksListVMGroupsInput,
    outputSchema: WorkloadNetworksListVMGroupsOutput,
  }));
// Input Schema
export const WorkloadNetworksUpdateDhcpInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    dhcpId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => WorkloadNetworkDhcpEntitySchema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dhcpConfigurations/{dhcpId}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type WorkloadNetworksUpdateDhcpInput =
  typeof WorkloadNetworksUpdateDhcpInput.Type;

// Output Schema
export const WorkloadNetworksUpdateDhcpOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => WorkloadNetworkDhcpEntitySchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WorkloadNetworksUpdateDhcpOutput =
  typeof WorkloadNetworksUpdateDhcpOutput.Type;

// The operation
/**
 * Update a WorkloadNetworkDhcp
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param dhcpId - The ID of the DHCP configuration
 */
export const WorkloadNetworksUpdateDhcp = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkloadNetworksUpdateDhcpInput,
    outputSchema: WorkloadNetworksUpdateDhcpOutput,
  }),
);
// Input Schema
export const WorkloadNetworksUpdateDnsServiceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    dnsServiceId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => WorkloadNetworkDnsServicePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type WorkloadNetworksUpdateDnsServiceInput =
  typeof WorkloadNetworksUpdateDnsServiceInput.Type;

// Output Schema
export const WorkloadNetworksUpdateDnsServiceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => WorkloadNetworkDnsServicePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WorkloadNetworksUpdateDnsServiceOutput =
  typeof WorkloadNetworksUpdateDnsServiceOutput.Type;

// The operation
/**
 * Update a WorkloadNetworkDnsService
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param dnsServiceId - ID of the DNS service.
 */
export const WorkloadNetworksUpdateDnsService =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksUpdateDnsServiceInput,
    outputSchema: WorkloadNetworksUpdateDnsServiceOutput,
  }));
// Input Schema
export const WorkloadNetworksUpdateDnsZoneInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    dnsZoneId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => WorkloadNetworkDnsZonePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones/{dnsZoneId}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type WorkloadNetworksUpdateDnsZoneInput =
  typeof WorkloadNetworksUpdateDnsZoneInput.Type;

// Output Schema
export const WorkloadNetworksUpdateDnsZoneOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => WorkloadNetworkDnsZonePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WorkloadNetworksUpdateDnsZoneOutput =
  typeof WorkloadNetworksUpdateDnsZoneOutput.Type;

// The operation
/**
 * Update a WorkloadNetworkDnsZone
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param dnsZoneId - ID of the DNS zone.
 */
export const WorkloadNetworksUpdateDnsZone =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksUpdateDnsZoneInput,
    outputSchema: WorkloadNetworksUpdateDnsZoneOutput,
  }));
// Input Schema
export const WorkloadNetworksUpdatePortMirroringInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    portMirroringId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => WorkloadNetworkPortMirroringPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/portMirroringProfiles/{portMirroringId}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type WorkloadNetworksUpdatePortMirroringInput =
  typeof WorkloadNetworksUpdatePortMirroringInput.Type;

// Output Schema
export const WorkloadNetworksUpdatePortMirroringOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => WorkloadNetworkPortMirroringPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WorkloadNetworksUpdatePortMirroringOutput =
  typeof WorkloadNetworksUpdatePortMirroringOutput.Type;

// The operation
/**
 * Update a WorkloadNetworkPortMirroring
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param portMirroringId - ID of the NSX port mirroring profile.
 */
export const WorkloadNetworksUpdatePortMirroring =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksUpdatePortMirroringInput,
    outputSchema: WorkloadNetworksUpdatePortMirroringOutput,
  }));
// Input Schema
export const WorkloadNetworksUpdateSegmentsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    segmentId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => WorkloadNetworkSegmentPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments/{segmentId}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type WorkloadNetworksUpdateSegmentsInput =
  typeof WorkloadNetworksUpdateSegmentsInput.Type;

// Output Schema
export const WorkloadNetworksUpdateSegmentsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => WorkloadNetworkSegmentPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WorkloadNetworksUpdateSegmentsOutput =
  typeof WorkloadNetworksUpdateSegmentsOutput.Type;

// The operation
/**
 * Update a WorkloadNetworkSegment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param segmentId - The ID of the NSX Segment
 */
export const WorkloadNetworksUpdateSegments =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksUpdateSegmentsInput,
    outputSchema: WorkloadNetworksUpdateSegmentsOutput,
  }));
// Input Schema
export const WorkloadNetworksUpdateVMGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    vmGroupId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => WorkloadNetworkVMGroupPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups/{vmGroupId}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type WorkloadNetworksUpdateVMGroupInput =
  typeof WorkloadNetworksUpdateVMGroupInput.Type;

// Output Schema
export const WorkloadNetworksUpdateVMGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => WorkloadNetworkVMGroupPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WorkloadNetworksUpdateVMGroupOutput =
  typeof WorkloadNetworksUpdateVMGroupOutput.Type;

// The operation
/**
 * Update a WorkloadNetworkVMGroup
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param vmGroupId - ID of the VM group.
 */
export const WorkloadNetworksUpdateVMGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksUpdateVMGroupInput,
    outputSchema: WorkloadNetworksUpdateVMGroupOutput,
  }));
