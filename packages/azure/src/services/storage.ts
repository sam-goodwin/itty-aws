/**
 * Azure Storage API
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
  origin: Schema.optional(Schema.String),
  properties: Schema.optional(Schema.suspend(() => OperationPropertiesSchema)),
});
const OperationDisplaySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provider: Schema.optional(Schema.String),
  resource: Schema.optional(Schema.String),
  operation: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
});
const OperationPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  serviceSpecification: Schema.optional(
    Schema.suspend(() => ServiceSpecificationSchema),
  ),
});
const ServiceSpecificationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  metricSpecifications: Schema.optional(
    Schema.Array(Schema.suspend(() => MetricSpecificationSchema)),
  ),
});
const MetricSpecificationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  displayDescription: Schema.optional(Schema.String),
  unit: Schema.optional(Schema.String),
  dimensions: Schema.optional(
    Schema.Array(Schema.suspend(() => DimensionSchema)),
  ),
  aggregationType: Schema.optional(Schema.String),
  fillGapWithZero: Schema.optional(Schema.Boolean),
  category: Schema.optional(Schema.String),
  resourceIdDimensionNameOverride: Schema.optional(Schema.String),
});
const DimensionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
});
const ReasonSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "AccountNameInvalid",
  "AlreadyExists",
]);
const DeletedAccountSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
const DeletedAccountPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storageAccountResourceId: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    restoreReference: Schema.optional(Schema.String),
    creationTime: Schema.optional(Schema.String),
    deletionTime: Schema.optional(Schema.String),
  });
const UsageSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  unit: Schema.optional(Schema.suspend(() => UsageUnitSchema)),
  currentValue: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.suspend(() => UsageNameSchema)),
});
const UsageUnitSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Count",
  "Bytes",
  "Seconds",
  "Percent",
  "CountsPerSecond",
  "BytesPerSecond",
]);
const UsageNameSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.String),
  localizedValue: Schema.optional(Schema.String),
});
const SkuInformationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.suspend(() => SkuNameSchema),
  tier: Schema.optional(Schema.suspend(() => SkuTierSchema)),
  resourceType: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.suspend(() => KindSchema)),
  locations: Schema.optional(Schema.Array(Schema.String)),
  locationInfo: Schema.optional(
    Schema.Array(Schema.suspend(() => SkuInformationLocationInfoItemSchema)),
  ),
  capabilities: Schema.optional(
    Schema.Array(Schema.suspend(() => SKUCapabilitySchema)),
  ),
  restrictions: Schema.optional(
    Schema.Array(Schema.suspend(() => RestrictionSchema)),
  ),
});
const SkuNameSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Standard_LRS",
  "Standard_GRS",
  "Standard_RAGRS",
  "Standard_ZRS",
  "Premium_LRS",
  "Premium_ZRS",
  "Standard_GZRS",
  "Standard_RAGZRS",
  "StandardV2_LRS",
  "StandardV2_GRS",
  "StandardV2_ZRS",
  "StandardV2_GZRS",
  "PremiumV2_LRS",
  "PremiumV2_ZRS",
]);
const SkuTierSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Standard",
  "Premium",
]);
const KindSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Storage",
  "StorageV2",
  "BlobStorage",
  "FileStorage",
  "BlockBlobStorage",
]);
const SkuInformationLocationInfoItemSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    zones: Schema.optional(Schema.Array(Schema.String)),
  });
const SKUCapabilitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
});
const RestrictionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  values: Schema.optional(Schema.Array(Schema.String)),
  reasonCode: Schema.optional(Schema.suspend(() => ReasonCodeSchema)),
});
const ReasonCodeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "QuotaId",
  "NotAvailableForSubscription",
]);
const StorageAccountSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const StorageAccountPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    primaryEndpoints: Schema.optional(Schema.suspend(() => EndpointsSchema)),
    primaryLocation: Schema.optional(Schema.String),
    statusOfPrimary: Schema.optional(Schema.suspend(() => AccountStatusSchema)),
    lastGeoFailoverTime: Schema.optional(Schema.String),
    secondaryLocation: Schema.optional(Schema.String),
    statusOfSecondary: Schema.optional(
      Schema.suspend(() => AccountStatusSchema),
    ),
    creationTime: Schema.optional(Schema.String),
    customDomain: Schema.optional(Schema.suspend(() => CustomDomainSchema)),
    sasPolicy: Schema.optional(Schema.suspend(() => SasPolicySchema)),
    keyPolicy: Schema.optional(Schema.suspend(() => KeyPolicySchema)),
    keyCreationTime: Schema.optional(
      Schema.suspend(() => KeyCreationTimeSchema),
    ),
    secondaryEndpoints: Schema.optional(Schema.suspend(() => EndpointsSchema)),
    encryption: Schema.optional(Schema.suspend(() => EncryptionSchema)),
    accessTier: Schema.optional(Schema.suspend(() => AccessTierSchema)),
    azureFilesIdentityBasedAuthentication: Schema.optional(
      Schema.suspend(() => AzureFilesIdentityBasedAuthenticationSchema),
    ),
    supportsHttpsTrafficOnly: Schema.optional(Schema.Boolean),
    networkAcls: Schema.optional(Schema.suspend(() => NetworkRuleSetSchema)),
    isSftpEnabled: Schema.optional(Schema.Boolean),
    isLocalUserEnabled: Schema.optional(Schema.Boolean),
    enableExtendedGroups: Schema.optional(Schema.Boolean),
    isHnsEnabled: Schema.optional(Schema.Boolean),
    geoReplicationStats: Schema.optional(
      Schema.suspend(() => GeoReplicationStatsSchema),
    ),
    failoverInProgress: Schema.optional(Schema.Boolean),
    largeFileSharesState: Schema.optional(
      Schema.suspend(() => LargeFileSharesStateSchema),
    ),
    privateEndpointConnections: Schema.optional(
      Schema.Array(Schema.suspend(() => PrivateEndpointConnectionSchema)),
    ),
    routingPreference: Schema.optional(
      Schema.suspend(() => RoutingPreferenceSchema),
    ),
    dualStackEndpointPreference: Schema.optional(
      Schema.suspend(() => DualStackEndpointPreferenceSchema),
    ),
    blobRestoreStatus: Schema.optional(
      Schema.suspend(() => BlobRestoreStatusSchema),
    ),
    allowBlobPublicAccess: Schema.optional(Schema.Boolean),
    minimumTlsVersion: Schema.optional(
      Schema.suspend(() => MinimumTlsVersionSchema),
    ),
    allowSharedKeyAccess: Schema.optional(Schema.Boolean),
    isNfsV3Enabled: Schema.optional(Schema.Boolean),
    allowCrossTenantReplication: Schema.optional(Schema.Boolean),
    defaultToOAuthAuthentication: Schema.optional(Schema.Boolean),
    publicNetworkAccess: Schema.optional(
      Schema.suspend(() => PublicNetworkAccessSchema),
    ),
    immutableStorageWithVersioning: Schema.optional(
      Schema.suspend(() => ImmutableStorageAccountSchema),
    ),
    allowedCopyScope: Schema.optional(
      Schema.suspend(() => AllowedCopyScopeSchema),
    ),
    storageAccountSkuConversionStatus: Schema.optional(
      Schema.suspend(() => StorageAccountSkuConversionStatusSchema),
    ),
    dnsEndpointType: Schema.optional(
      Schema.suspend(() => DnsEndpointTypeSchema),
    ),
    isSkuConversionBlocked: Schema.optional(Schema.Boolean),
    accountMigrationInProgress: Schema.optional(Schema.Boolean),
    geoPriorityReplicationStatus: Schema.optional(
      Schema.suspend(() => GeoPriorityReplicationStatusSchema),
    ),
    allowSharedKeyAccessForServices: Schema.optional(
      Schema.suspend(() => StorageAccountSharedKeyAccessPropertiesSchema),
    ),
    dataCollaborationPolicyProperties: Schema.optional(
      Schema.suspend(() => StorageDataCollaborationPolicyPropertiesSchema),
    ),
  });
const ProvisioningStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Creating",
  "ResolvingDNS",
  "Succeeded",
]);
const EndpointsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  blob: Schema.optional(Schema.String),
  queue: Schema.optional(Schema.String),
  table: Schema.optional(Schema.String),
  file: Schema.optional(Schema.String),
  web: Schema.optional(Schema.String),
  dfs: Schema.optional(Schema.String),
  microsoftEndpoints: Schema.optional(
    Schema.suspend(() => StorageAccountMicrosoftEndpointsSchema),
  ),
  internetEndpoints: Schema.optional(
    Schema.suspend(() => StorageAccountInternetEndpointsSchema),
  ),
  ipv6Endpoints: Schema.optional(
    Schema.suspend(() => StorageAccountIpv6EndpointsSchema),
  ),
});
const StorageAccountMicrosoftEndpointsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    blob: Schema.optional(Schema.String),
    queue: Schema.optional(Schema.String),
    table: Schema.optional(Schema.String),
    file: Schema.optional(Schema.String),
    web: Schema.optional(Schema.String),
    dfs: Schema.optional(Schema.String),
  });
const StorageAccountInternetEndpointsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    blob: Schema.optional(Schema.String),
    file: Schema.optional(Schema.String),
    web: Schema.optional(Schema.String),
    dfs: Schema.optional(Schema.String),
  });
const StorageAccountIpv6EndpointsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    blob: Schema.optional(Schema.String),
    queue: Schema.optional(Schema.String),
    table: Schema.optional(Schema.String),
    file: Schema.optional(Schema.String),
    web: Schema.optional(Schema.String),
    dfs: Schema.optional(Schema.String),
    microsoftEndpoints: Schema.optional(
      Schema.suspend(() => StorageAccountMicrosoftEndpointsSchema),
    ),
    internetEndpoints: Schema.optional(
      Schema.suspend(() => StorageAccountInternetEndpointsSchema),
    ),
  });
const AccountStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "available",
  "unavailable",
]);
const CustomDomainSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  useSubDomainName: Schema.optional(Schema.Boolean),
});
const SasPolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sasExpirationPeriod: Schema.String,
  expirationAction: Schema.Literals(["Log", "Block"]),
});
const KeyPolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  keyExpirationPeriodInDays: Schema.Number,
});
const KeyCreationTimeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  key1: Schema.optional(Schema.String),
  key2: Schema.optional(Schema.String),
});
const EncryptionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  services: Schema.optional(Schema.suspend(() => EncryptionServicesSchema)),
  keySource: Schema.optional(
    Schema.Literals(["Microsoft.Storage", "Microsoft.Keyvault"]),
  ),
  requireInfrastructureEncryption: Schema.optional(Schema.Boolean),
  keyvaultproperties: Schema.optional(
    Schema.suspend(() => KeyVaultPropertiesSchema),
  ),
  identity: Schema.optional(Schema.suspend(() => EncryptionIdentitySchema)),
});
const EncryptionServicesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  blob: Schema.optional(Schema.suspend(() => EncryptionServiceSchema)),
  file: Schema.optional(Schema.suspend(() => EncryptionServiceSchema)),
  table: Schema.optional(Schema.suspend(() => EncryptionServiceSchema)),
  queue: Schema.optional(Schema.suspend(() => EncryptionServiceSchema)),
});
const EncryptionServiceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
  lastEnabledTime: Schema.optional(Schema.String),
  keyType: Schema.optional(Schema.suspend(() => KeyTypeSchema)),
});
const KeyTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Service",
  "Account",
]);
const KeyVaultPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  keyname: Schema.optional(Schema.String),
  keyversion: Schema.optional(Schema.String),
  keyvaulturi: Schema.optional(Schema.String),
  currentVersionedKeyIdentifier: Schema.optional(Schema.String),
  lastKeyRotationTimestamp: Schema.optional(Schema.String),
  currentVersionedKeyExpirationTimestamp: Schema.optional(Schema.String),
});
const EncryptionIdentitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userAssignedIdentity: Schema.optional(Schema.String),
  federatedIdentityClientId: Schema.optional(Schema.String),
});
const AccessTierSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Hot",
  "Cool",
  "Premium",
  "Cold",
  "Smart",
]);
const AzureFilesIdentityBasedAuthenticationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    directoryServiceOptions: Schema.suspend(
      () => DirectoryServiceOptionsSchema,
    ),
    activeDirectoryProperties: Schema.optional(
      Schema.suspend(() => ActiveDirectoryPropertiesSchema),
    ),
    defaultSharePermission: Schema.optional(
      Schema.suspend(() => DefaultSharePermissionSchema),
    ),
    smbOAuthSettings: Schema.optional(
      Schema.suspend(() => SmbOAuthSettingsSchema),
    ),
  });
const DirectoryServiceOptionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "None",
    "AADDS",
    "AD",
    "AADKERB",
  ]);
const ActiveDirectoryPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domainName: Schema.optional(Schema.String),
    netBiosDomainName: Schema.optional(Schema.String),
    forestName: Schema.optional(Schema.String),
    domainGuid: Schema.optional(Schema.String),
    domainSid: Schema.optional(Schema.String),
    azureStorageSid: Schema.optional(Schema.String),
    samAccountName: Schema.optional(Schema.String),
    accountType: Schema.optional(Schema.suspend(() => AccountTypeSchema)),
  });
const AccountTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "User",
  "Computer",
]);
const DefaultSharePermissionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "None",
    "StorageFileDataSmbShareReader",
    "StorageFileDataSmbShareContributor",
    "StorageFileDataSmbShareElevatedContributor",
  ]);
const SmbOAuthSettingsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  isSmbOAuthEnabled: Schema.optional(Schema.Boolean),
});
const NetworkRuleSetSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bypass: Schema.optional(
    Schema.Literals(["None", "Logging", "Metrics", "AzureServices"]),
  ),
  resourceAccessRules: Schema.optional(
    Schema.Array(Schema.suspend(() => ResourceAccessRuleSchema)),
  ),
  virtualNetworkRules: Schema.optional(
    Schema.Array(Schema.suspend(() => VirtualNetworkRuleSchema)),
  ),
  ipRules: Schema.optional(Schema.Array(Schema.suspend(() => IPRuleSchema))),
  ipv6Rules: Schema.optional(Schema.Array(Schema.suspend(() => IPRuleSchema))),
  defaultAction: Schema.Literals(["Allow", "Deny"]),
});
const ResourceAccessRuleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tenantId: Schema.optional(Schema.String),
  resourceId: Schema.optional(Schema.String),
});
const VirtualNetworkRuleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  action: Schema.optional(Schema.Literals(["Allow"])),
  state: Schema.optional(Schema.suspend(() => StateSchema)),
});
const StateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Provisioning",
  "Deprovisioning",
  "Succeeded",
  "Failed",
  "NetworkSourceDeleted",
]);
const IPRuleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.String,
  action: Schema.optional(Schema.Literals(["Allow"])),
});
const GeoReplicationStatsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.optional(Schema.suspend(() => GeoReplicationStatusSchema)),
  lastSyncTime: Schema.optional(Schema.String),
  canFailover: Schema.optional(Schema.Boolean),
  canPlannedFailover: Schema.optional(Schema.Boolean),
  postFailoverRedundancy: Schema.optional(
    Schema.suspend(() => PostFailoverRedundancySchema),
  ),
  postPlannedFailoverRedundancy: Schema.optional(
    Schema.suspend(() => PostPlannedFailoverRedundancySchema),
  ),
});
const GeoReplicationStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Live",
  "Bootstrap",
  "Unavailable",
]);
const PostFailoverRedundancySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Standard_LRS", "Standard_ZRS"]);
const PostPlannedFailoverRedundancySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Standard_GRS",
    "Standard_GZRS",
    "Standard_RAGRS",
    "Standard_RAGZRS",
  ]);
const LargeFileSharesStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Disabled",
  "Enabled",
]);
const PrivateEndpointConnectionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const RoutingPreferenceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  routingChoice: Schema.optional(Schema.suspend(() => RoutingChoiceSchema)),
  publishMicrosoftEndpoints: Schema.optional(Schema.Boolean),
  publishInternetEndpoints: Schema.optional(Schema.Boolean),
});
const RoutingChoiceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "MicrosoftRouting",
  "InternetRouting",
]);
const DualStackEndpointPreferenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    publishIpv6Endpoint: Schema.optional(Schema.Boolean),
  });
const BlobRestoreStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.optional(
    Schema.suspend(() => BlobRestoreProgressStatusSchema),
  ),
  failureReason: Schema.optional(Schema.String),
  restoreId: Schema.optional(Schema.String),
  parameters: Schema.optional(
    Schema.suspend(() => BlobRestoreParametersSchema),
  ),
});
const BlobRestoreProgressStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "InProgress",
    "Complete",
    "Failed",
  ]);
const BlobRestoreParametersSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  timeToRestore: Schema.String,
  blobRanges: Schema.Array(Schema.suspend(() => BlobRestoreRangeSchema)),
});
const BlobRestoreRangeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startRange: Schema.String,
  endRange: Schema.String,
});
const MinimumTlsVersionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "TLS1_0",
  "TLS1_1",
  "TLS1_2",
  "TLS1_3",
]);
const PublicNetworkAccessSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Enabled",
  "Disabled",
  "SecuredByPerimeter",
]);
const ImmutableStorageAccountSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    enabled: Schema.optional(Schema.Boolean),
    immutabilityPolicy: Schema.optional(
      Schema.suspend(() => AccountImmutabilityPolicyPropertiesSchema),
    ),
  },
);
const AccountImmutabilityPolicyPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    immutabilityPeriodSinceCreationInDays: Schema.optional(Schema.Number),
    state: Schema.optional(
      Schema.suspend(() => AccountImmutabilityPolicyStateSchema),
    ),
    allowProtectedAppendWrites: Schema.optional(Schema.Boolean),
  });
const AccountImmutabilityPolicyStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Unlocked",
    "Locked",
    "Disabled",
  ]);
const AllowedCopyScopeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "PrivateLink",
  "AAD",
  "All",
]);
const StorageAccountSkuConversionStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    skuConversionStatus: Schema.optional(
      Schema.suspend(() => SkuConversionStatusSchema),
    ),
    targetSkuName: Schema.optional(Schema.suspend(() => SkuNameSchema)),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  });
const SkuConversionStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "InProgress",
  "Succeeded",
  "Failed",
]);
const DnsEndpointTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Standard",
  "AzureDnsZone",
]);
const GeoPriorityReplicationStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isBlobEnabled: Schema.optional(Schema.Boolean),
  });
const StorageAccountSharedKeyAccessPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    blob: Schema.optional(
      Schema.suspend(() => ServiceSharedKeyAccessPropertiesSchema),
    ),
    file: Schema.optional(
      Schema.suspend(() => ServiceSharedKeyAccessPropertiesSchema),
    ),
    table: Schema.optional(
      Schema.suspend(() => ServiceSharedKeyAccessPropertiesSchema),
    ),
    queue: Schema.optional(
      Schema.suspend(() => ServiceSharedKeyAccessPropertiesSchema),
    ),
  });
const ServiceSharedKeyAccessPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  });
const StorageDataCollaborationPolicyPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowStorageConnectors: Schema.optional(Schema.Boolean),
    allowStorageDataShares: Schema.optional(Schema.Boolean),
    allowCrossTenantDataSharing: Schema.optional(Schema.Boolean),
  });
const SkuSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.suspend(() => SkuNameSchema),
  tier: Schema.optional(Schema.suspend(() => SkuTierSchema)),
});
const IdentitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  principalId: Schema.optional(Schema.String),
  tenantId: Schema.optional(Schema.String),
  type: Schema.suspend(() => IdentityTypeSchema),
  userAssignedIdentities: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => UserAssignedIdentitySchema),
    ),
  ),
});
const IdentityTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "None",
  "SystemAssigned",
  "UserAssigned",
  "SystemAssigned,UserAssigned",
]);
const UserAssignedIdentitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  principalId: Schema.optional(Schema.String),
  clientId: Schema.optional(Schema.String),
});
const ExtendedLocationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.suspend(() => ExtendedLocationTypesSchema)),
});
const ExtendedLocationTypesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(
  ["EdgeZone"],
);
const PlacementSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  zonePlacementPolicy: Schema.optional(
    Schema.suspend(() => ZonePlacementPolicySchema),
  ),
});
const ZonePlacementPolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Any",
  "None",
]);
const StorageAccountPropertiesCreateParametersSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowedCopyScope: Schema.optional(
      Schema.suspend(() => AllowedCopyScopeSchema),
    ),
    publicNetworkAccess: Schema.optional(
      Schema.suspend(() => PublicNetworkAccessSchema),
    ),
    sasPolicy: Schema.optional(Schema.suspend(() => SasPolicySchema)),
    keyPolicy: Schema.optional(Schema.suspend(() => KeyPolicySchema)),
    customDomain: Schema.optional(Schema.suspend(() => CustomDomainSchema)),
    encryption: Schema.optional(Schema.suspend(() => EncryptionSchema)),
    networkAcls: Schema.optional(Schema.suspend(() => NetworkRuleSetSchema)),
    accessTier: Schema.optional(Schema.suspend(() => AccessTierSchema)),
    azureFilesIdentityBasedAuthentication: Schema.optional(
      Schema.suspend(() => AzureFilesIdentityBasedAuthenticationSchema),
    ),
    supportsHttpsTrafficOnly: Schema.optional(Schema.Boolean),
    isSftpEnabled: Schema.optional(Schema.Boolean),
    isLocalUserEnabled: Schema.optional(Schema.Boolean),
    enableExtendedGroups: Schema.optional(Schema.Boolean),
    isHnsEnabled: Schema.optional(Schema.Boolean),
    largeFileSharesState: Schema.optional(
      Schema.suspend(() => LargeFileSharesStateSchema),
    ),
    routingPreference: Schema.optional(
      Schema.suspend(() => RoutingPreferenceSchema),
    ),
    dualStackEndpointPreference: Schema.optional(
      Schema.suspend(() => DualStackEndpointPreferenceSchema),
    ),
    allowBlobPublicAccess: Schema.optional(Schema.Boolean),
    minimumTlsVersion: Schema.optional(
      Schema.suspend(() => MinimumTlsVersionSchema),
    ),
    allowSharedKeyAccess: Schema.optional(Schema.Boolean),
    isNfsV3Enabled: Schema.optional(Schema.Boolean),
    allowCrossTenantReplication: Schema.optional(Schema.Boolean),
    defaultToOAuthAuthentication: Schema.optional(Schema.Boolean),
    immutableStorageWithVersioning: Schema.optional(
      Schema.suspend(() => ImmutableStorageAccountSchema),
    ),
    dnsEndpointType: Schema.optional(
      Schema.suspend(() => DnsEndpointTypeSchema),
    ),
    geoPriorityReplicationStatus: Schema.optional(
      Schema.suspend(() => GeoPriorityReplicationStatusSchema),
    ),
    allowSharedKeyAccessForServices: Schema.optional(
      Schema.suspend(() => StorageAccountSharedKeyAccessPropertiesSchema),
    ),
    dataCollaborationPolicyProperties: Schema.optional(
      Schema.suspend(() => StorageDataCollaborationPolicyPropertiesSchema),
    ),
  });
const StorageAccountPropertiesUpdateParametersSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customDomain: Schema.optional(Schema.suspend(() => CustomDomainSchema)),
    encryption: Schema.optional(Schema.suspend(() => EncryptionSchema)),
    sasPolicy: Schema.optional(Schema.suspend(() => SasPolicySchema)),
    keyPolicy: Schema.optional(Schema.suspend(() => KeyPolicySchema)),
    accessTier: Schema.optional(Schema.suspend(() => AccessTierSchema)),
    azureFilesIdentityBasedAuthentication: Schema.optional(
      Schema.suspend(() => AzureFilesIdentityBasedAuthenticationSchema),
    ),
    supportsHttpsTrafficOnly: Schema.optional(Schema.Boolean),
    isSftpEnabled: Schema.optional(Schema.Boolean),
    isLocalUserEnabled: Schema.optional(Schema.Boolean),
    enableExtendedGroups: Schema.optional(Schema.Boolean),
    networkAcls: Schema.optional(Schema.suspend(() => NetworkRuleSetSchema)),
    largeFileSharesState: Schema.optional(
      Schema.suspend(() => LargeFileSharesStateSchema),
    ),
    routingPreference: Schema.optional(
      Schema.suspend(() => RoutingPreferenceSchema),
    ),
    dualStackEndpointPreference: Schema.optional(
      Schema.suspend(() => DualStackEndpointPreferenceSchema),
    ),
    allowBlobPublicAccess: Schema.optional(Schema.Boolean),
    minimumTlsVersion: Schema.optional(
      Schema.suspend(() => MinimumTlsVersionSchema),
    ),
    allowSharedKeyAccess: Schema.optional(Schema.Boolean),
    allowCrossTenantReplication: Schema.optional(Schema.Boolean),
    defaultToOAuthAuthentication: Schema.optional(Schema.Boolean),
    publicNetworkAccess: Schema.optional(
      Schema.suspend(() => PublicNetworkAccessSchema),
    ),
    immutableStorageWithVersioning: Schema.optional(
      Schema.suspend(() => ImmutableStorageAccountSchema),
    ),
    allowedCopyScope: Schema.optional(
      Schema.suspend(() => AllowedCopyScopeSchema),
    ),
    dnsEndpointType: Schema.optional(
      Schema.suspend(() => DnsEndpointTypeSchema),
    ),
    geoPriorityReplicationStatus: Schema.optional(
      Schema.suspend(() => GeoPriorityReplicationStatusSchema),
    ),
    allowSharedKeyAccessForServices: Schema.optional(
      Schema.suspend(() => StorageAccountSharedKeyAccessPropertiesSchema),
    ),
    dataCollaborationPolicyProperties: Schema.optional(
      Schema.suspend(() => StorageDataCollaborationPolicyPropertiesSchema),
    ),
  });
const StorageAccountMigrationPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetSkuName: Schema.suspend(() => SkuNameSchema),
    migrationStatus: Schema.optional(
      Schema.suspend(() => migrationStatusSchema),
    ),
    migrationFailedReason: Schema.optional(Schema.String),
    migrationFailedDetailedReason: Schema.optional(Schema.String),
  });
const migrationStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Invalid",
  "SubmittedForConversion",
  "InProgress",
  "Complete",
  "Failed",
]);
const BlobServicePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const BlobServicePropertiesPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cors: Schema.optional(Schema.suspend(() => CorsRulesSchema)),
    defaultServiceVersion: Schema.optional(Schema.String),
    deleteRetentionPolicy: Schema.optional(
      Schema.suspend(() => DeleteRetentionPolicySchema),
    ),
    staticWebsite: Schema.optional(Schema.suspend(() => StaticWebsiteSchema)),
    isVersioningEnabled: Schema.optional(Schema.Boolean),
    automaticSnapshotPolicyEnabled: Schema.optional(Schema.Boolean),
    changeFeed: Schema.optional(Schema.suspend(() => ChangeFeedSchema)),
    restorePolicy: Schema.optional(
      Schema.suspend(() => RestorePolicyPropertiesSchema),
    ),
    containerDeleteRetentionPolicy: Schema.optional(
      Schema.suspend(() => DeleteRetentionPolicySchema),
    ),
    lastAccessTimeTrackingPolicy: Schema.optional(
      Schema.suspend(() => LastAccessTimeTrackingPolicySchema),
    ),
  });
const CorsRulesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  corsRules: Schema.optional(
    Schema.Array(Schema.suspend(() => CorsRuleSchema)),
  ),
});
const CorsRuleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  allowedOrigins: Schema.Array(Schema.String),
  allowedMethods: Schema.Array(Schema.suspend(() => AllowedMethodsSchema)),
  maxAgeInSeconds: Schema.Number,
  exposedHeaders: Schema.Array(Schema.String),
  allowedHeaders: Schema.Array(Schema.String),
});
const AllowedMethodsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "DELETE",
  "GET",
  "HEAD",
  "MERGE",
  "POST",
  "OPTIONS",
  "PUT",
  "PATCH",
  "CONNECT",
  "TRACE",
]);
const DeleteRetentionPolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
  days: Schema.optional(Schema.Number),
  allowPermanentDelete: Schema.optional(Schema.Boolean),
});
const StaticWebsiteSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.Boolean,
  indexDocument: Schema.optional(Schema.String),
  defaultIndexDocumentPath: Schema.optional(Schema.String),
  errorDocument404Path: Schema.optional(Schema.String),
});
const ChangeFeedSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
  retentionInDays: Schema.optional(Schema.Number),
});
const RestorePolicyPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    enabled: Schema.Boolean,
    days: Schema.optional(Schema.Number),
    lastEnabledTime: Schema.optional(Schema.String),
    minRestoreTime: Schema.optional(Schema.String),
  },
);
const LastAccessTimeTrackingPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enable: Schema.Boolean,
    name: Schema.optional(Schema.suspend(() => NameSchema)),
    trackingGranularityInDays: Schema.optional(Schema.Number),
    blobType: Schema.optional(Schema.Array(Schema.String)),
  });
const NameSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "AccessTimeTracking",
]);
const ListContainerItemSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const ContainerPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  version: Schema.optional(Schema.String),
  deleted: Schema.optional(Schema.Boolean),
  deletedTime: Schema.optional(Schema.String),
  remainingRetentionDays: Schema.optional(Schema.Number),
  defaultEncryptionScope: Schema.optional(Schema.String),
  denyEncryptionScopeOverride: Schema.optional(Schema.Boolean),
  publicAccess: Schema.optional(Schema.suspend(() => PublicAccessSchema)),
  lastModifiedTime: Schema.optional(Schema.String),
  leaseStatus: Schema.optional(Schema.suspend(() => LeaseStatusSchema)),
  leaseState: Schema.optional(Schema.suspend(() => LeaseStateSchema)),
  leaseDuration: Schema.optional(Schema.suspend(() => LeaseDurationSchema)),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  immutabilityPolicy: Schema.optional(
    Schema.suspend(() => ImmutabilityPolicyPropertiesSchema),
  ),
  legalHold: Schema.optional(Schema.suspend(() => LegalHoldPropertiesSchema)),
  hasLegalHold: Schema.optional(Schema.Boolean),
  hasImmutabilityPolicy: Schema.optional(Schema.Boolean),
  immutableStorageWithVersioning: Schema.optional(
    Schema.suspend(() => ImmutableStorageWithVersioningSchema),
  ),
  enableNfsV3RootSquash: Schema.optional(Schema.Boolean),
  enableNfsV3AllSquash: Schema.optional(Schema.Boolean),
});
const PublicAccessSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Container",
  "Blob",
  "None",
]);
const LeaseStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Locked",
  "Unlocked",
]);
const LeaseStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Available",
  "Leased",
  "Expired",
  "Breaking",
  "Broken",
]);
const LeaseDurationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Infinite",
  "Fixed",
]);
const ImmutabilityPolicyPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ImmutabilityPolicyPropertySchema),
    ),
    etag: Schema.optional(Schema.String),
    updateHistory: Schema.optional(
      Schema.Array(Schema.suspend(() => UpdateHistoryPropertySchema)),
    ),
  });
const ImmutabilityPolicyPropertySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    immutabilityPeriodSinceCreationInDays: Schema.optional(Schema.Number),
    state: Schema.optional(Schema.suspend(() => ImmutabilityPolicyStateSchema)),
    allowProtectedAppendWrites: Schema.optional(Schema.Boolean),
    allowProtectedAppendWritesAll: Schema.optional(Schema.Boolean),
  });
const ImmutabilityPolicyStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Locked", "Unlocked"]);
const UpdateHistoryPropertySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  update: Schema.optional(
    Schema.suspend(() => ImmutabilityPolicyUpdateTypeSchema),
  ),
  immutabilityPeriodSinceCreationInDays: Schema.optional(Schema.Number),
  timestamp: Schema.optional(Schema.String),
  objectIdentifier: Schema.optional(Schema.String),
  tenantId: Schema.optional(Schema.String),
  upn: Schema.optional(Schema.String),
  allowProtectedAppendWrites: Schema.optional(Schema.Boolean),
  allowProtectedAppendWritesAll: Schema.optional(Schema.Boolean),
});
const ImmutabilityPolicyUpdateTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["put", "lock", "extend"]);
const LegalHoldPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  hasLegalHold: Schema.optional(Schema.Boolean),
  tags: Schema.optional(Schema.Array(Schema.suspend(() => TagPropertySchema))),
  protectedAppendWritesHistory: Schema.optional(
    Schema.suspend(() => ProtectedAppendWritesHistorySchema),
  ),
});
const TagPropertySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tag: Schema.optional(Schema.String),
  timestamp: Schema.optional(Schema.String),
  objectIdentifier: Schema.optional(Schema.String),
  tenantId: Schema.optional(Schema.String),
  upn: Schema.optional(Schema.String),
});
const ProtectedAppendWritesHistorySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowProtectedAppendWritesAll: Schema.optional(Schema.Boolean),
    timestamp: Schema.optional(Schema.String),
  });
const ImmutableStorageWithVersioningSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    timeStamp: Schema.optional(Schema.String),
    migrationState: Schema.optional(Schema.suspend(() => MigrationStateSchema)),
  });
const MigrationStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "InProgress",
  "Completed",
]);
const LimitedStringSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const LeaseContainerRequestActionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Acquire",
    "Renew",
    "Change",
    "Release",
    "Break",
  ]);
const ConnectorSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const StorageConnectorPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uniqueId: Schema.optional(Schema.String),
    state: Schema.optional(Schema.Literals(["Active", "Inactive"])),
    creationTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    testConnection: Schema.optional(Schema.Boolean),
    dataSourceType: Schema.suspend(() => StorageConnectorDataSourceTypeSchema),
    source: Schema.suspend(() => StorageConnectorSourceSchema),
    provisioningState: Schema.optional(
      Schema.suspend(() => NativeDataSharingProvisioningStateSchema),
    ),
  });
const StorageConnectorDataSourceTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Azure_DataShare"]);
const StorageConnectorSourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.suspend(() => StorageConnectorSourceTypeSchema),
});
const StorageConnectorSourceTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["DataShare"]);
const NativeDataSharingProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Accepted",
    "Creating",
    "Succeeded",
    "Deleting",
    "Canceled",
    "Failed",
  ]);
const StorageConnectorPropertiesUpdateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.Literals(["Active", "Inactive"])),
    description: Schema.optional(Schema.String),
    testConnection: Schema.optional(Schema.Boolean),
    source: Schema.optional(
      Schema.suspend(() => StorageConnectorSourceUpdateSchema),
    ),
  });
const StorageConnectorSourceUpdateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.suspend(() => StorageConnectorSourceTypeSchema),
  });
const DataShareSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const StorageDataSharePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataShareIdentifier: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    dataShareUri: Schema.optional(Schema.String),
    accessPolicies: Schema.Array(
      Schema.suspend(() => StorageDataShareAccessPolicySchema),
    ),
    assets: Schema.Array(Schema.suspend(() => StorageDataShareAssetSchema)),
    provisioningState: Schema.optional(
      Schema.suspend(() => NativeDataSharingProvisioningStateSchema),
    ),
  });
const StorageDataShareAccessPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    principalId: Schema.String,
    tenantId: Schema.String,
    permission: Schema.suspend(
      () => StorageDataShareAccessPolicyPermissionSchema,
    ),
  });
const StorageDataShareAccessPolicyPermissionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["None", "Read"]);
const StorageDataShareAssetSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  assetPath: Schema.String,
  displayName: Schema.String,
});
const StorageDataSharePropertiesUpdateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    accessPolicies: Schema.optional(
      Schema.Array(Schema.suspend(() => StorageDataShareAccessPolicySchema)),
    ),
    assets: Schema.optional(
      Schema.Array(Schema.suspend(() => StorageDataShareAssetSchema)),
    ),
  });
const EncryptionScopeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const EncryptionScopePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.suspend(() => EncryptionScopeSourceSchema)),
    state: Schema.optional(Schema.suspend(() => EncryptionScopeStateSchema)),
    creationTime: Schema.optional(Schema.String),
    lastModifiedTime: Schema.optional(Schema.String),
    keyVaultProperties: Schema.optional(
      Schema.suspend(() => EncryptionScopeKeyVaultPropertiesSchema),
    ),
    requireInfrastructureEncryption: Schema.optional(Schema.Boolean),
  });
const EncryptionScopeSourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(
  ["Microsoft.Storage", "Microsoft.KeyVault"],
);
const EncryptionScopeStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Enabled",
  "Disabled",
]);
const EncryptionScopeKeyVaultPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyUri: Schema.optional(Schema.String),
    currentVersionedKeyIdentifier: Schema.optional(Schema.String),
    lastKeyRotationTimestamp: Schema.optional(Schema.String),
  });
const FileServicePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const FileServicePropertiesPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cors: Schema.optional(Schema.suspend(() => CorsRulesSchema)),
    shareDeleteRetentionPolicy: Schema.optional(
      Schema.suspend(() => DeleteRetentionPolicySchema),
    ),
    protocolSettings: Schema.optional(
      Schema.suspend(() => ProtocolSettingsSchema),
    ),
  });
const ProtocolSettingsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  smb: Schema.optional(Schema.suspend(() => SmbSettingSchema)),
  nfs: Schema.optional(Schema.suspend(() => NfsSettingSchema)),
});
const SmbSettingSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  multichannel: Schema.optional(Schema.suspend(() => MultichannelSchema)),
  versions: Schema.optional(Schema.String),
  authenticationMethods: Schema.optional(Schema.String),
  kerberosTicketEncryption: Schema.optional(Schema.String),
  channelEncryption: Schema.optional(Schema.String),
  encryptionInTransit: Schema.optional(
    Schema.suspend(() => EncryptionInTransitSchema),
  ),
});
const MultichannelSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
});
const EncryptionInTransitSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  required: Schema.optional(Schema.Boolean),
});
const NfsSettingSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  encryptionInTransit: Schema.optional(
    Schema.suspend(() => EncryptionInTransitSchema),
  ),
});
const FileShareItemSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const FileSharePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  lastModifiedTime: Schema.optional(Schema.String),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  shareQuota: Schema.optional(Schema.Number),
  provisionedIops: Schema.optional(Schema.Number),
  provisionedBandwidthMibps: Schema.optional(Schema.Number),
  includedBurstIops: Schema.optional(Schema.Number),
  maxBurstCreditsForIops: Schema.optional(Schema.Number),
  nextAllowedQuotaDowngradeTime: Schema.optional(Schema.String),
  nextAllowedProvisionedIopsDowngradeTime: Schema.optional(Schema.String),
  nextAllowedProvisionedBandwidthDowngradeTime: Schema.optional(Schema.String),
  enabledProtocols: Schema.optional(
    Schema.suspend(() => EnabledProtocolsSchema),
  ),
  rootSquash: Schema.optional(Schema.suspend(() => RootSquashTypeSchema)),
  version: Schema.optional(Schema.String),
  deleted: Schema.optional(Schema.Boolean),
  deletedTime: Schema.optional(Schema.String),
  remainingRetentionDays: Schema.optional(Schema.Number),
  accessTier: Schema.optional(Schema.suspend(() => ShareAccessTierSchema)),
  accessTierChangeTime: Schema.optional(Schema.String),
  accessTierStatus: Schema.optional(Schema.String),
  shareUsageBytes: Schema.optional(Schema.Number),
  leaseStatus: Schema.optional(Schema.suspend(() => LeaseStatusSchema)),
  leaseState: Schema.optional(Schema.suspend(() => LeaseStateSchema)),
  leaseDuration: Schema.optional(Schema.suspend(() => LeaseDurationSchema)),
  signedIdentifiers: Schema.optional(
    Schema.Array(Schema.suspend(() => SignedIdentifierSchema)),
  ),
  snapshotTime: Schema.optional(Schema.String),
  fileSharePaidBursting: Schema.optional(
    Schema.suspend(() => FileSharePropertiesFileSharePaidBurstingSchema),
  ),
});
const EnabledProtocolsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "SMB",
  "NFS",
]);
const RootSquashTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NoRootSquash",
  "RootSquash",
  "AllSquash",
]);
const ShareAccessTierSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "TransactionOptimized",
  "Hot",
  "Cool",
  "Premium",
]);
const SignedIdentifierSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  accessPolicy: Schema.optional(Schema.suspend(() => AccessPolicySchema)),
});
const AccessPolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startTime: Schema.optional(Schema.String),
  expiryTime: Schema.optional(Schema.String),
  permission: Schema.optional(Schema.String),
});
const FileSharePropertiesFileSharePaidBurstingSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    paidBurstingEnabled: Schema.optional(Schema.Boolean),
    paidBurstingMaxIops: Schema.optional(Schema.Number),
    paidBurstingMaxBandwidthMibps: Schema.optional(Schema.Number),
  });
const LeaseShareActionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Acquire",
  "Renew",
  "Change",
  "Release",
  "Break",
]);
const FileServiceUsageSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const FileServiceUsagePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storageAccountLimits: Schema.optional(
      Schema.suspend(() => AccountLimitsSchema),
    ),
    fileShareLimits: Schema.optional(
      Schema.suspend(() => FileShareLimitsSchema),
    ),
    fileShareRecommendations: Schema.optional(
      Schema.suspend(() => FileShareRecommendationsSchema),
    ),
    burstingConstants: Schema.optional(
      Schema.suspend(() => BurstingConstantsSchema),
    ),
    storageAccountUsage: Schema.optional(
      Schema.suspend(() => AccountUsageSchema),
    ),
  });
const AccountLimitsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  maxFileShares: Schema.optional(Schema.Number),
  maxProvisionedStorageGiB: Schema.optional(Schema.Number),
  maxProvisionedIOPS: Schema.optional(Schema.Number),
  maxProvisionedBandwidthMiBPerSec: Schema.optional(Schema.Number),
});
const FileShareLimitsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  minProvisionedStorageGiB: Schema.optional(Schema.Number),
  maxProvisionedStorageGiB: Schema.optional(Schema.Number),
  minProvisionedIOPS: Schema.optional(Schema.Number),
  maxProvisionedIOPS: Schema.optional(Schema.Number),
  minProvisionedBandwidthMiBPerSec: Schema.optional(Schema.Number),
  maxProvisionedBandwidthMiBPerSec: Schema.optional(Schema.Number),
});
const FileShareRecommendationsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    baseIOPS: Schema.optional(Schema.Number),
    ioScalar: Schema.optional(Schema.Number),
    baseBandwidthMiBPerSec: Schema.optional(Schema.Number),
    bandwidthScalar: Schema.optional(Schema.Number),
  });
const BurstingConstantsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  burstFloorIOPS: Schema.optional(Schema.Number),
  burstIOScalar: Schema.optional(Schema.Number),
  burstTimeframeSeconds: Schema.optional(Schema.Number),
});
const AccountUsageSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  liveShares: Schema.optional(Schema.suspend(() => AccountUsageElementsSchema)),
  softDeletedShares: Schema.optional(
    Schema.suspend(() => AccountUsageElementsSchema),
  ),
});
const AccountUsageElementsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fileShareCount: Schema.optional(Schema.Number),
  provisionedStorageGiB: Schema.optional(Schema.Number),
  provisionedIOPS: Schema.optional(Schema.Number),
  provisionedBandwidthMiBPerSec: Schema.optional(Schema.Number),
});
const BlobInventoryPolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const BlobInventoryPolicyPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastModifiedTime: Schema.optional(Schema.String),
    policy: Schema.suspend(() => BlobInventoryPolicySchemaSchema),
  });
const BlobInventoryPolicySchemaSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    destination: Schema.optional(Schema.String),
    type: Schema.suspend(() => InventoryRuleTypeSchema),
    rules: Schema.Array(Schema.suspend(() => BlobInventoryPolicyRuleSchema)),
  });
const InventoryRuleTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Inventory",
]);
const BlobInventoryPolicyRuleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    enabled: Schema.Boolean,
    name: Schema.String,
    destination: Schema.String,
    definition: Schema.suspend(() => BlobInventoryPolicyDefinitionSchema),
  },
);
const BlobInventoryPolicyDefinitionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filters: Schema.optional(
      Schema.suspend(() => BlobInventoryPolicyFilterSchema),
    ),
    format: Schema.suspend(() => FormatSchema),
    schedule: Schema.suspend(() => ScheduleSchema),
    objectType: Schema.suspend(() => ObjectTypeSchema),
    schemaFields: Schema.Array(Schema.String),
  });
const BlobInventoryPolicyFilterSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    prefixMatch: Schema.optional(Schema.Array(Schema.String)),
    excludePrefix: Schema.optional(Schema.Array(Schema.String)),
    blobTypes: Schema.optional(Schema.Array(Schema.String)),
    includeBlobVersions: Schema.optional(Schema.Boolean),
    includeSnapshots: Schema.optional(Schema.Boolean),
    includeDeleted: Schema.optional(Schema.Boolean),
    creationTime: Schema.optional(
      Schema.suspend(() => BlobInventoryCreationTimeSchema),
    ),
  });
const BlobInventoryCreationTimeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastNDays: Schema.optional(Schema.Number),
  });
const FormatSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Csv",
  "Parquet",
]);
const ScheduleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Daily",
  "Weekly",
]);
const ObjectTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Blob",
  "Container",
]);
const ServicesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "b",
  "q",
  "t",
  "f",
]);
const SignedResourceTypesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "s",
  "c",
  "o",
]);
const PermissionsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "r",
  "d",
  "w",
  "l",
  "a",
  "c",
  "u",
  "p",
]);
const HttpProtocolSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "https,http",
  "https",
]);
const StorageAccountKeySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  keyName: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
  permissions: Schema.optional(Schema.suspend(() => KeyPermissionSchema)),
  creationTime: Schema.optional(Schema.String),
});
const KeyPermissionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Read",
  "Full",
]);
const SignedResourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "b",
  "c",
  "f",
  "s",
]);
const LocalUserSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const LocalUserPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  permissionScopes: Schema.optional(
    Schema.Array(Schema.suspend(() => PermissionScopeSchema)),
  ),
  homeDirectory: Schema.optional(Schema.String),
  sshAuthorizedKeys: Schema.optional(
    Schema.Array(Schema.suspend(() => SshPublicKeySchema)),
  ),
  sid: Schema.optional(Schema.String),
  hasSharedKey: Schema.optional(Schema.Boolean),
  hasSshKey: Schema.optional(Schema.Boolean),
  hasSshPassword: Schema.optional(Schema.Boolean),
  userId: Schema.optional(Schema.Number),
  groupId: Schema.optional(Schema.Number),
  allowAclAuthorization: Schema.optional(Schema.Boolean),
  extendedGroups: Schema.optional(Schema.Array(Schema.Number)),
  isNFSv3Enabled: Schema.optional(Schema.Boolean),
});
const PermissionScopeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  permissions: Schema.String,
  service: Schema.String,
  resourceName: Schema.String,
});
const SshPublicKeySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  description: Schema.optional(Schema.String),
  key: Schema.optional(Schema.String),
});
const ManagementPolicyPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastModifiedTime: Schema.optional(Schema.String),
    policy: Schema.suspend(() => ManagementPolicySchemaSchema),
  });
const ManagementPolicySchemaSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rules: Schema.Array(Schema.suspend(() => ManagementPolicyRuleSchema)),
});
const ManagementPolicyRuleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
  name: Schema.String,
  type: Schema.suspend(() => RuleTypeSchema),
  definition: Schema.suspend(() => ManagementPolicyDefinitionSchema),
});
const RuleTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Lifecycle",
]);
const ManagementPolicyDefinitionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    actions: Schema.suspend(() => ManagementPolicyActionSchema),
    filters: Schema.optional(
      Schema.suspend(() => ManagementPolicyFilterSchema),
    ),
  });
const ManagementPolicyActionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  baseBlob: Schema.optional(
    Schema.suspend(() => ManagementPolicyBaseBlobSchema),
  ),
  snapshot: Schema.optional(
    Schema.suspend(() => ManagementPolicySnapShotSchema),
  ),
  version: Schema.optional(Schema.suspend(() => ManagementPolicyVersionSchema)),
});
const ManagementPolicyBaseBlobSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tierToCool: Schema.optional(
      Schema.suspend(() => DateAfterModificationSchema),
    ),
    tierToArchive: Schema.optional(
      Schema.suspend(() => DateAfterModificationSchema),
    ),
    tierToCold: Schema.optional(
      Schema.suspend(() => DateAfterModificationSchema),
    ),
    tierToHot: Schema.optional(
      Schema.suspend(() => DateAfterModificationSchema),
    ),
    delete: Schema.optional(Schema.suspend(() => DateAfterModificationSchema)),
    enableAutoTierToHotFromCool: Schema.optional(Schema.Boolean),
  });
const DateAfterModificationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  daysAfterModificationGreaterThan: Schema.optional(Schema.Number),
  daysAfterLastAccessTimeGreaterThan: Schema.optional(Schema.Number),
  daysAfterLastTierChangeGreaterThan: Schema.optional(Schema.Number),
  daysAfterCreationGreaterThan: Schema.optional(Schema.Number),
});
const ManagementPolicySnapShotSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tierToCool: Schema.optional(Schema.suspend(() => DateAfterCreationSchema)),
    tierToArchive: Schema.optional(
      Schema.suspend(() => DateAfterCreationSchema),
    ),
    tierToCold: Schema.optional(Schema.suspend(() => DateAfterCreationSchema)),
    tierToHot: Schema.optional(Schema.suspend(() => DateAfterCreationSchema)),
    delete: Schema.optional(Schema.suspend(() => DateAfterCreationSchema)),
  });
const DateAfterCreationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  daysAfterCreationGreaterThan: Schema.Number,
  daysAfterLastTierChangeGreaterThan: Schema.optional(Schema.Number),
});
const ManagementPolicyVersionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    tierToCool: Schema.optional(Schema.suspend(() => DateAfterCreationSchema)),
    tierToArchive: Schema.optional(
      Schema.suspend(() => DateAfterCreationSchema),
    ),
    tierToCold: Schema.optional(Schema.suspend(() => DateAfterCreationSchema)),
    tierToHot: Schema.optional(Schema.suspend(() => DateAfterCreationSchema)),
    delete: Schema.optional(Schema.suspend(() => DateAfterCreationSchema)),
  },
);
const ManagementPolicyFilterSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  prefixMatch: Schema.optional(Schema.Array(Schema.String)),
  blobTypes: Schema.Array(Schema.String),
  blobIndexMatch: Schema.optional(
    Schema.Array(Schema.suspend(() => TagFilterSchema)),
  ),
});
const TagFilterSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  op: Schema.String,
  value: Schema.String,
});
const NetworkSecurityPerimeterConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const NetworkSecurityPerimeterConfigurationPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.suspend(
        () => NetworkSecurityPerimeterConfigurationProvisioningStateSchema,
      ),
    ),
    provisioningIssues: Schema.optional(
      Schema.Array(Schema.suspend(() => ProvisioningIssueSchema)),
    ),
    networkSecurityPerimeter: Schema.optional(
      Schema.suspend(() => NetworkSecurityPerimeterSchema),
    ),
    resourceAssociation: Schema.optional(
      Schema.suspend(
        () =>
          NetworkSecurityPerimeterConfigurationPropertiesResourceAssociationSchema,
      ),
    ),
    profile: Schema.optional(
      Schema.suspend(
        () => NetworkSecurityPerimeterConfigurationPropertiesProfileSchema,
      ),
    ),
  });
const NetworkSecurityPerimeterConfigurationProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Accepted",
    "Succeeded",
    "Failed",
    "Deleting",
    "Canceled",
  ]);
const ProvisioningIssueSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.suspend(() => ProvisioningIssuePropertiesSchema),
  ),
});
const ProvisioningIssuePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    issueType: Schema.optional(Schema.suspend(() => IssueTypeSchema)),
    severity: Schema.optional(Schema.suspend(() => SeveritySchema)),
    description: Schema.optional(Schema.String),
  });
const IssueTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "ConfigurationPropagationFailure",
]);
const SeveritySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Warning",
  "Error",
]);
const NetworkSecurityPerimeterSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    perimeterGuid: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  });
const NetworkSecurityPerimeterConfigurationPropertiesResourceAssociationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    accessMode: Schema.optional(
      Schema.suspend(() => ResourceAssociationAccessModeSchema),
    ),
  });
const ResourceAssociationAccessModeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Enforced",
    "Learning",
    "Audit",
  ]);
const NetworkSecurityPerimeterConfigurationPropertiesProfileSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    accessRulesVersion: Schema.optional(Schema.Number),
    accessRules: Schema.optional(
      Schema.Array(Schema.suspend(() => NspAccessRuleSchema)),
    ),
    diagnosticSettingsVersion: Schema.optional(Schema.Number),
    enabledLogCategories: Schema.optional(Schema.Array(Schema.String)),
  });
const NspAccessRuleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.suspend(() => NspAccessRulePropertiesSchema),
  ),
});
const NspAccessRulePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    direction: Schema.optional(
      Schema.suspend(() => NspAccessRuleDirectionSchema),
    ),
    addressPrefixes: Schema.optional(Schema.Array(Schema.String)),
    subscriptions: Schema.optional(
      Schema.Array(
        Schema.suspend(() => NspAccessRulePropertiesSubscriptionsItemSchema),
      ),
    ),
    networkSecurityPerimeters: Schema.optional(
      Schema.Array(Schema.suspend(() => NetworkSecurityPerimeterSchema)),
    ),
    fullyQualifiedDomainNames: Schema.optional(Schema.Array(Schema.String)),
  },
);
const NspAccessRuleDirectionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Inbound", "Outbound"]);
const NspAccessRulePropertiesSubscriptionsItemSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  });
const ObjectReplicationPolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
const ObjectReplicationPolicyPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policyId: Schema.optional(Schema.String),
    enabledTime: Schema.optional(Schema.String),
    sourceAccount: Schema.String,
    destinationAccount: Schema.String,
    rules: Schema.optional(
      Schema.Array(Schema.suspend(() => ObjectReplicationPolicyRuleSchema)),
    ),
    metrics: Schema.optional(
      Schema.suspend(() => ObjectReplicationPolicyPropertiesMetricsSchema),
    ),
    priorityReplication: Schema.optional(
      Schema.suspend(
        () => ObjectReplicationPolicyPropertiesPriorityReplicationSchema,
      ),
    ),
    tagsReplication: Schema.optional(
      Schema.suspend(
        () => ObjectReplicationPolicyPropertiesTagsReplicationSchema,
      ),
    ),
  });
const ObjectReplicationPolicyRuleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ruleId: Schema.optional(Schema.String),
    sourceContainer: Schema.String,
    destinationContainer: Schema.String,
    filters: Schema.optional(
      Schema.suspend(() => ObjectReplicationPolicyFilterSchema),
    ),
  });
const ObjectReplicationPolicyFilterSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    prefixMatch: Schema.optional(Schema.Array(Schema.String)),
    minCreationTime: Schema.optional(Schema.String),
  });
const ObjectReplicationPolicyPropertiesMetricsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  });
const ObjectReplicationPolicyPropertiesPriorityReplicationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  });
const ObjectReplicationPolicyPropertiesTagsReplicationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  });
const PrivateEndpointConnectionPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privateEndpoint: Schema.optional(
      Schema.suspend(() => PrivateEndpointSchema),
    ),
    privateLinkServiceConnectionState: Schema.suspend(
      () => PrivateLinkServiceConnectionStateSchema,
    ),
    provisioningState: Schema.optional(
      Schema.suspend(() => PrivateEndpointConnectionProvisioningStateSchema),
    ),
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
    actionRequired: Schema.optional(Schema.String),
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
const QueueServicePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const QueueServicePropertiesPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cors: Schema.optional(Schema.suspend(() => CorsRulesSchema)),
  });
const ListQueueSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const QueuePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  approximateMessageCount: Schema.optional(Schema.Number),
});
const StorageTaskReportInstanceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const StorageTaskAssignmentSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const StorageTaskAssignmentPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    taskId: Schema.String,
    enabled: Schema.Boolean,
    description: Schema.String,
    executionContext: Schema.suspend(
      () => StorageTaskAssignmentExecutionContextSchema,
    ),
    report: Schema.suspend(() => StorageTaskAssignmentReportSchema),
    provisioningState: Schema.optional(
      Schema.suspend(() => StorageTaskAssignmentProvisioningStateSchema),
    ),
    runStatus: Schema.optional(
      Schema.suspend(() => StorageTaskReportPropertiesSchema),
    ),
  });
const StorageTaskAssignmentExecutionContextSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    target: Schema.optional(Schema.suspend(() => ExecutionTargetSchema)),
    trigger: Schema.suspend(() => ExecutionTriggerSchema),
  });
const ExecutionTargetSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  prefix: Schema.optional(Schema.Array(Schema.String)),
  excludePrefix: Schema.optional(Schema.Array(Schema.String)),
});
const ExecutionTriggerSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.suspend(() => TriggerTypeSchema),
  parameters: Schema.suspend(() => TriggerParametersSchema),
});
const TriggerTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "RunOnce",
  "OnSchedule",
  "MockRun",
]);
const TriggerParametersSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startFrom: Schema.optional(Schema.String),
  interval: Schema.optional(Schema.Number),
  intervalUnit: Schema.optional(Schema.suspend(() => IntervalUnitSchema)),
  endBy: Schema.optional(Schema.String),
  startOn: Schema.optional(Schema.String),
});
const IntervalUnitSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Days",
]);
const StorageTaskAssignmentReportSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    prefix: Schema.String,
  });
const StorageTaskAssignmentProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "ValidateSubscriptionQuotaBegin",
    "ValidateSubscriptionQuotaEnd",
    "Accepted",
    "Creating",
    "Succeeded",
    "Deleting",
    "Canceled",
    "Failed",
  ]);
const StorageTaskReportPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    taskAssignmentId: Schema.optional(Schema.String),
    storageAccountId: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    finishTime: Schema.optional(Schema.String),
    objectsTargetedCount: Schema.optional(Schema.String),
    objectsOperatedOnCount: Schema.optional(Schema.String),
    objectFailedCount: Schema.optional(Schema.String),
    objectsSucceededCount: Schema.optional(Schema.String),
    runStatusError: Schema.optional(Schema.String),
    runStatusEnum: Schema.optional(Schema.suspend(() => RunStatusEnumSchema)),
    summaryReportPath: Schema.optional(Schema.String),
    taskId: Schema.optional(Schema.String),
    taskVersion: Schema.optional(Schema.String),
    runResult: Schema.optional(Schema.suspend(() => RunResultSchema)),
  });
const RunStatusEnumSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "InProgress",
  "Finished",
]);
const RunResultSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Succeeded",
  "Failed",
]);
const StorageTaskAssignmentUpdatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    taskId: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    description: Schema.optional(Schema.String),
    executionContext: Schema.optional(
      Schema.suspend(() => StorageTaskAssignmentUpdateExecutionContextSchema),
    ),
    report: Schema.optional(
      Schema.suspend(() => StorageTaskAssignmentUpdateReportSchema),
    ),
    provisioningState: Schema.optional(
      Schema.suspend(() => StorageTaskAssignmentProvisioningStateSchema),
    ),
    runStatus: Schema.optional(
      Schema.suspend(() => StorageTaskReportPropertiesSchema),
    ),
  });
const StorageTaskAssignmentUpdateExecutionContextSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    target: Schema.optional(Schema.suspend(() => ExecutionTargetSchema)),
    trigger: Schema.optional(
      Schema.suspend(() => ExecutionTriggerUpdateSchema),
    ),
  });
const ExecutionTriggerUpdateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.suspend(() => TriggerTypeSchema)),
  parameters: Schema.optional(
    Schema.suspend(() => TriggerParametersUpdateSchema),
  ),
});
const TriggerParametersUpdateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    startFrom: Schema.optional(Schema.String),
    interval: Schema.optional(Schema.Number),
    intervalUnit: Schema.optional(Schema.suspend(() => IntervalUnitSchema)),
    endBy: Schema.optional(Schema.String),
    startOn: Schema.optional(Schema.String),
  },
);
const StorageTaskAssignmentUpdateReportSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    prefix: Schema.optional(Schema.String),
  });
const TableServicePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const TableServicePropertiesPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cors: Schema.optional(Schema.suspend(() => CorsRulesSchema)),
  });
const TableSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const TablePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tableName: Schema.optional(Schema.String),
  signedIdentifiers: Schema.optional(
    Schema.Array(Schema.suspend(() => TableSignedIdentifierSchema)),
  ),
});
const TableSignedIdentifierSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  accessPolicy: Schema.optional(Schema.suspend(() => TableAccessPolicySchema)),
});
const TableAccessPolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startTime: Schema.optional(Schema.String),
  expiryTime: Schema.optional(Schema.String),
  permission: Schema.String,
});

// Input Schema
export const BlobContainersClearLegalHoldInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    hasLegalHold: Schema.optional(Schema.Boolean),
    tags: Schema.Array(Schema.suspend(() => LimitedStringSchema)),
    allowProtectedAppendWritesAll: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/clearLegalHold",
      apiVersion: "2025-08-01",
    }),
  );
export type BlobContainersClearLegalHoldInput =
  typeof BlobContainersClearLegalHoldInput.Type;

// Output Schema
export const BlobContainersClearLegalHoldOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hasLegalHold: Schema.optional(Schema.Boolean),
    tags: Schema.Array(Schema.suspend(() => LimitedStringSchema)),
    allowProtectedAppendWritesAll: Schema.optional(Schema.Boolean),
  });
export type BlobContainersClearLegalHoldOutput =
  typeof BlobContainersClearLegalHoldOutput.Type;

// The operation
/**
 * Clears legal hold tags. Clearing the same or non-existent tag results in an idempotent operation. ClearLegalHold clears out only the specified tags in the request.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param containerName - The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 */
export const BlobContainersClearLegalHold =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BlobContainersClearLegalHoldInput,
    outputSchema: BlobContainersClearLegalHoldOutput,
  }));
// Input Schema
export const BlobContainersCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => ContainerPropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}",
      apiVersion: "2025-08-01",
    }),
  );
export type BlobContainersCreateInput = typeof BlobContainersCreateInput.Type;

// Output Schema
export const BlobContainersCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ContainerPropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BlobContainersCreateOutput = typeof BlobContainersCreateOutput.Type;

// The operation
/**
 * Creates a new container under the specified account as described by request body. The container resource includes metadata and properties for that container. It does not include a list of the blobs contained by the container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param containerName - The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 */
export const BlobContainersCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BlobContainersCreateInput,
    outputSchema: BlobContainersCreateOutput,
  }),
);
// Input Schema
export const BlobContainersCreateOrUpdateImmutabilityPolicyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.suspend(() => ImmutabilityPolicyPropertySchema),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/immutabilityPolicies/default",
      apiVersion: "2025-08-01",
    }),
  );
export type BlobContainersCreateOrUpdateImmutabilityPolicyInput =
  typeof BlobContainersCreateOrUpdateImmutabilityPolicyInput.Type;

// Output Schema
export const BlobContainersCreateOrUpdateImmutabilityPolicyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => ImmutabilityPolicyPropertySchema),
    etag: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BlobContainersCreateOrUpdateImmutabilityPolicyOutput =
  typeof BlobContainersCreateOrUpdateImmutabilityPolicyOutput.Type;

// The operation
/**
 * Creates or updates an unlocked immutability policy. ETag in If-Match is honored if given but not required for this operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param containerName - The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 * @param If-Match - The entity state (ETag) version of the immutability policy to update must be returned to the server for all update operations. The ETag value must include the leading and trailing double quotes as returned by the service.
 */
export const BlobContainersCreateOrUpdateImmutabilityPolicy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BlobContainersCreateOrUpdateImmutabilityPolicyInput,
    outputSchema: BlobContainersCreateOrUpdateImmutabilityPolicyOutput,
  }));
// Input Schema
export const BlobContainersDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}",
      apiVersion: "2025-08-01",
    }),
  );
export type BlobContainersDeleteInput = typeof BlobContainersDeleteInput.Type;

// Output Schema
export const BlobContainersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BlobContainersDeleteOutput = typeof BlobContainersDeleteOutput.Type;

// The operation
/**
 * Deletes specified container under its account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param containerName - The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 */
export const BlobContainersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BlobContainersDeleteInput,
    outputSchema: BlobContainersDeleteOutput,
  }),
);
// Input Schema
export const BlobContainersDeleteImmutabilityPolicyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/immutabilityPolicies/default",
      apiVersion: "2025-08-01",
    }),
  );
export type BlobContainersDeleteImmutabilityPolicyInput =
  typeof BlobContainersDeleteImmutabilityPolicyInput.Type;

// Output Schema
export const BlobContainersDeleteImmutabilityPolicyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => ImmutabilityPolicyPropertySchema),
    etag: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BlobContainersDeleteImmutabilityPolicyOutput =
  typeof BlobContainersDeleteImmutabilityPolicyOutput.Type;

// The operation
/**
 * Aborts an unlocked immutability policy. The response of delete has immutabilityPeriodSinceCreationInDays set to 0. ETag in If-Match is required for this operation. Deleting a locked immutability policy is not allowed, the only way is to delete the container after deleting all expired blobs inside the policy locked container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param containerName - The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 * @param If-Match - The entity state (ETag) version of the immutability policy to update must be returned to the server for all update operations. The ETag value must include the leading and trailing double quotes as returned by the service.
 */
export const BlobContainersDeleteImmutabilityPolicy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BlobContainersDeleteImmutabilityPolicyInput,
    outputSchema: BlobContainersDeleteImmutabilityPolicyOutput,
  }));
// Input Schema
export const BlobContainersExtendImmutabilityPolicyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.suspend(() => ImmutabilityPolicyPropertySchema),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/immutabilityPolicies/default/extend",
      apiVersion: "2025-08-01",
    }),
  );
export type BlobContainersExtendImmutabilityPolicyInput =
  typeof BlobContainersExtendImmutabilityPolicyInput.Type;

// Output Schema
export const BlobContainersExtendImmutabilityPolicyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => ImmutabilityPolicyPropertySchema),
    etag: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BlobContainersExtendImmutabilityPolicyOutput =
  typeof BlobContainersExtendImmutabilityPolicyOutput.Type;

// The operation
/**
 * Extends the immutabilityPeriodSinceCreationInDays of a locked immutabilityPolicy. The only action allowed on a Locked policy will be this action. ETag in If-Match is required for this operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param containerName - The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 * @param If-Match - The entity state (ETag) version of the immutability policy to update must be returned to the server for all update operations. The ETag value must include the leading and trailing double quotes as returned by the service.
 */
export const BlobContainersExtendImmutabilityPolicy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BlobContainersExtendImmutabilityPolicyInput,
    outputSchema: BlobContainersExtendImmutabilityPolicyOutput,
  }));
// Input Schema
export const BlobContainersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}",
    apiVersion: "2025-08-01",
  }),
);
export type BlobContainersGetInput = typeof BlobContainersGetInput.Type;

// Output Schema
export const BlobContainersGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ContainerPropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BlobContainersGetOutput = typeof BlobContainersGetOutput.Type;

// The operation
/**
 * Gets properties of a specified container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param containerName - The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 */
export const BlobContainersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BlobContainersGetInput,
  outputSchema: BlobContainersGetOutput,
}));
// Input Schema
export const BlobContainersGetImmutabilityPolicyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/immutabilityPolicies/default",
      apiVersion: "2025-08-01",
    }),
  );
export type BlobContainersGetImmutabilityPolicyInput =
  typeof BlobContainersGetImmutabilityPolicyInput.Type;

// Output Schema
export const BlobContainersGetImmutabilityPolicyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => ImmutabilityPolicyPropertySchema),
    etag: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BlobContainersGetImmutabilityPolicyOutput =
  typeof BlobContainersGetImmutabilityPolicyOutput.Type;

// The operation
/**
 * Gets the existing immutability policy along with the corresponding ETag in response headers and body.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param containerName - The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 * @param If-Match - The entity state (ETag) version of the immutability policy to update must be returned to the server for all update operations. The ETag value must include the leading and trailing double quotes as returned by the service.
 */
export const BlobContainersGetImmutabilityPolicy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BlobContainersGetImmutabilityPolicyInput,
    outputSchema: BlobContainersGetImmutabilityPolicyOutput,
  }));
// Input Schema
export const BlobContainersLeaseInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    action: Schema.suspend(() => LeaseContainerRequestActionSchema),
    leaseId: Schema.optional(Schema.String),
    breakPeriod: Schema.optional(Schema.Number),
    leaseDuration: Schema.optional(Schema.Number),
    proposedLeaseId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/lease",
      apiVersion: "2025-08-01",
    }),
  );
export type BlobContainersLeaseInput = typeof BlobContainersLeaseInput.Type;

// Output Schema
export const BlobContainersLeaseOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    leaseId: Schema.optional(Schema.String),
    leaseTimeSeconds: Schema.optional(Schema.String),
  });
export type BlobContainersLeaseOutput = typeof BlobContainersLeaseOutput.Type;

// The operation
/**
 * The Lease Container operation establishes and manages a lock on a container for delete operations. The lock duration can be 15 to 60 seconds, or can be infinite.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param containerName - The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 */
export const BlobContainersLease = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BlobContainersLeaseInput,
  outputSchema: BlobContainersLeaseOutput,
}));
// Input Schema
export const BlobContainersListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    $maxpagesize: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $include: Schema.optional(Schema.Literals(["deleted"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers",
      apiVersion: "2025-08-01",
    }),
  );
export type BlobContainersListInput = typeof BlobContainersListInput.Type;

// Output Schema
export const BlobContainersListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ListContainerItemSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type BlobContainersListOutput = typeof BlobContainersListOutput.Type;

// The operation
/**
 * Lists all containers and does not support a prefix like data plane. Also SRP today does not return continuation token.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param $maxpagesize - Optional. Specified maximum number of containers that can be included in the list.
 * @param $filter - Optional. When specified, only container names starting with the filter will be listed.
 * @param $include - Optional, used to include the properties for soft deleted blob containers.
 */
export const BlobContainersList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BlobContainersListInput,
  outputSchema: BlobContainersListOutput,
}));
// Input Schema
export const BlobContainersLockImmutabilityPolicyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/immutabilityPolicies/default/lock",
      apiVersion: "2025-08-01",
    }),
  );
export type BlobContainersLockImmutabilityPolicyInput =
  typeof BlobContainersLockImmutabilityPolicyInput.Type;

// Output Schema
export const BlobContainersLockImmutabilityPolicyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => ImmutabilityPolicyPropertySchema),
    etag: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BlobContainersLockImmutabilityPolicyOutput =
  typeof BlobContainersLockImmutabilityPolicyOutput.Type;

// The operation
/**
 * Sets the ImmutabilityPolicy to Locked state. The only action allowed on a Locked policy is ExtendImmutabilityPolicy action. ETag in If-Match is required for this operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param containerName - The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 * @param If-Match - The entity state (ETag) version of the immutability policy to update must be returned to the server for all update operations. The ETag value must include the leading and trailing double quotes as returned by the service.
 */
export const BlobContainersLockImmutabilityPolicy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BlobContainersLockImmutabilityPolicyInput,
    outputSchema: BlobContainersLockImmutabilityPolicyOutput,
  }));
// Input Schema
export const BlobContainersObjectLevelWormInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/migrate",
      apiVersion: "2025-08-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type BlobContainersObjectLevelWormInput =
  typeof BlobContainersObjectLevelWormInput.Type;

// Output Schema
export const BlobContainersObjectLevelWormOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BlobContainersObjectLevelWormOutput =
  typeof BlobContainersObjectLevelWormOutput.Type;

// The operation
/**
 * This operation migrates a blob container from container level WORM to object level immutability enabled container. Prerequisites require a container level immutability policy either in locked or unlocked state, Account level versioning must be enabled and there should be no Legal hold on the container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param containerName - The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 */
export const BlobContainersObjectLevelWorm =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BlobContainersObjectLevelWormInput,
    outputSchema: BlobContainersObjectLevelWormOutput,
  }));
// Input Schema
export const BlobContainersSetLegalHoldInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    hasLegalHold: Schema.optional(Schema.Boolean),
    tags: Schema.Array(Schema.suspend(() => LimitedStringSchema)),
    allowProtectedAppendWritesAll: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/setLegalHold",
      apiVersion: "2025-08-01",
    }),
  );
export type BlobContainersSetLegalHoldInput =
  typeof BlobContainersSetLegalHoldInput.Type;

// Output Schema
export const BlobContainersSetLegalHoldOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hasLegalHold: Schema.optional(Schema.Boolean),
    tags: Schema.Array(Schema.suspend(() => LimitedStringSchema)),
    allowProtectedAppendWritesAll: Schema.optional(Schema.Boolean),
  });
export type BlobContainersSetLegalHoldOutput =
  typeof BlobContainersSetLegalHoldOutput.Type;

// The operation
/**
 * Sets legal hold tags. Setting the same tag results in an idempotent operation. SetLegalHold follows an append pattern and does not clear out the existing tags that are not specified in the request.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param containerName - The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 */
export const BlobContainersSetLegalHold = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BlobContainersSetLegalHoldInput,
    outputSchema: BlobContainersSetLegalHoldOutput,
  }),
);
// Input Schema
export const BlobContainersUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => ContainerPropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}",
      apiVersion: "2025-08-01",
    }),
  );
export type BlobContainersUpdateInput = typeof BlobContainersUpdateInput.Type;

// Output Schema
export const BlobContainersUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ContainerPropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BlobContainersUpdateOutput = typeof BlobContainersUpdateOutput.Type;

// The operation
/**
 * Updates container properties as specified in request body. Properties not mentioned in the request will be unchanged. Update fails if the specified container doesn't already exist.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param containerName - The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 */
export const BlobContainersUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BlobContainersUpdateInput,
    outputSchema: BlobContainersUpdateOutput,
  }),
);
// Input Schema
export const BlobInventoryPoliciesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    blobInventoryPolicyName: Schema.Literals(["default"]).pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => BlobInventoryPolicyPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/inventoryPolicies/{blobInventoryPolicyName}",
      apiVersion: "2025-08-01",
    }),
  );
export type BlobInventoryPoliciesCreateOrUpdateInput =
  typeof BlobInventoryPoliciesCreateOrUpdateInput.Type;

// Output Schema
export const BlobInventoryPoliciesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BlobInventoryPolicyPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BlobInventoryPoliciesCreateOrUpdateOutput =
  typeof BlobInventoryPoliciesCreateOrUpdateOutput.Type;

// The operation
/**
 * Sets the blob inventory policy to the specified storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param blobInventoryPolicyName - The name of the storage account blob inventory policy. It should always be 'default'
 */
export const BlobInventoryPoliciesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BlobInventoryPoliciesCreateOrUpdateInput,
    outputSchema: BlobInventoryPoliciesCreateOrUpdateOutput,
  }));
// Input Schema
export const BlobInventoryPoliciesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    blobInventoryPolicyName: Schema.Literals(["default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/inventoryPolicies/{blobInventoryPolicyName}",
      apiVersion: "2025-08-01",
    }),
  );
export type BlobInventoryPoliciesDeleteInput =
  typeof BlobInventoryPoliciesDeleteInput.Type;

// Output Schema
export const BlobInventoryPoliciesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BlobInventoryPoliciesDeleteOutput =
  typeof BlobInventoryPoliciesDeleteOutput.Type;

// The operation
/**
 * Deletes the blob inventory policy associated with the specified storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param blobInventoryPolicyName - The name of the storage account blob inventory policy. It should always be 'default'
 */
export const BlobInventoryPoliciesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BlobInventoryPoliciesDeleteInput,
    outputSchema: BlobInventoryPoliciesDeleteOutput,
  }),
);
// Input Schema
export const BlobInventoryPoliciesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    blobInventoryPolicyName: Schema.Literals(["default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/inventoryPolicies/{blobInventoryPolicyName}",
      apiVersion: "2025-08-01",
    }),
  );
export type BlobInventoryPoliciesGetInput =
  typeof BlobInventoryPoliciesGetInput.Type;

// Output Schema
export const BlobInventoryPoliciesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BlobInventoryPolicyPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BlobInventoryPoliciesGetOutput =
  typeof BlobInventoryPoliciesGetOutput.Type;

// The operation
/**
 * Gets the blob inventory policy associated with the specified storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param blobInventoryPolicyName - The name of the storage account blob inventory policy. It should always be 'default'
 */
export const BlobInventoryPoliciesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BlobInventoryPoliciesGetInput,
    outputSchema: BlobInventoryPoliciesGetOutput,
  }),
);
// Input Schema
export const BlobInventoryPoliciesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/inventoryPolicies",
      apiVersion: "2025-08-01",
    }),
  );
export type BlobInventoryPoliciesListInput =
  typeof BlobInventoryPoliciesListInput.Type;

// Output Schema
export const BlobInventoryPoliciesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => BlobInventoryPolicySchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type BlobInventoryPoliciesListOutput =
  typeof BlobInventoryPoliciesListOutput.Type;

// The operation
/**
 * Gets the blob inventory policy associated with the specified storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const BlobInventoryPoliciesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BlobInventoryPoliciesListInput,
    outputSchema: BlobInventoryPoliciesListOutput,
  }),
);
// Input Schema
export const BlobServicesGetServicePropertiesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default",
      apiVersion: "2025-08-01",
    }),
  );
export type BlobServicesGetServicePropertiesInput =
  typeof BlobServicesGetServicePropertiesInput.Type;

// Output Schema
export const BlobServicesGetServicePropertiesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BlobServicePropertiesPropertiesSchema),
    ),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BlobServicesGetServicePropertiesOutput =
  typeof BlobServicesGetServicePropertiesOutput.Type;

// The operation
/**
 * Gets the properties of a storage account’s Blob service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const BlobServicesGetServiceProperties =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BlobServicesGetServicePropertiesInput,
    outputSchema: BlobServicesGetServicePropertiesOutput,
  }));
// Input Schema
export const BlobServicesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices",
    apiVersion: "2025-08-01",
  }),
);
export type BlobServicesListInput = typeof BlobServicesListInput.Type;

// Output Schema
export const BlobServicesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => BlobServicePropertiesSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  },
);
export type BlobServicesListOutput = typeof BlobServicesListOutput.Type;

// The operation
/**
 * List blob services of storage account. It returns a collection of one object named default.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const BlobServicesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BlobServicesListInput,
  outputSchema: BlobServicesListOutput,
}));
// Input Schema
export const BlobServicesSetServicePropertiesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => BlobServicePropertiesPropertiesSchema),
    ),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default",
      apiVersion: "2025-08-01",
    }),
  );
export type BlobServicesSetServicePropertiesInput =
  typeof BlobServicesSetServicePropertiesInput.Type;

// Output Schema
export const BlobServicesSetServicePropertiesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BlobServicePropertiesPropertiesSchema),
    ),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BlobServicesSetServicePropertiesOutput =
  typeof BlobServicesSetServicePropertiesOutput.Type;

// The operation
/**
 * Sets the properties of a storage account’s Blob service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const BlobServicesSetServiceProperties =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BlobServicesSetServicePropertiesInput,
    outputSchema: BlobServicesSetServicePropertiesOutput,
  }));
// Input Schema
export const ConnectorsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  connectorName: Schema.String.pipe(T.PathParam()),
  properties: Schema.suspend(() => StorageConnectorPropertiesSchema),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/connectors/{connectorName}",
    apiVersion: "2025-08-01",
    longRunning: { finalStateVia: "azure-async-operation" },
  }),
);
export type ConnectorsCreateInput = typeof ConnectorsCreateInput.Type;

// Output Schema
export const ConnectorsCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.suspend(() => StorageConnectorPropertiesSchema),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
export type ConnectorsCreateOutput = typeof ConnectorsCreateOutput.Type;

// The operation
/**
 * Create a Storage Connector if it does not already exist; otherwise, error out. This API will not allow you to replace an already existing resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param connectorName - The name of the Storage Connector.
 */
export const ConnectorsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConnectorsCreateInput,
  outputSchema: ConnectorsCreateOutput,
}));
// Input Schema
export const ConnectorsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  connectorName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/connectors/{connectorName}",
    apiVersion: "2025-08-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type ConnectorsDeleteInput = typeof ConnectorsDeleteInput.Type;

// Output Schema
export const ConnectorsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ConnectorsDeleteOutput = typeof ConnectorsDeleteOutput.Type;

// The operation
/**
 * Delete a Storage Connector.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param connectorName - The name of the Storage Connector.
 */
export const ConnectorsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConnectorsDeleteInput,
  outputSchema: ConnectorsDeleteOutput,
}));
// Input Schema
export const ConnectorsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  connectorName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/connectors/{connectorName}",
    apiVersion: "2025-08-01",
  }),
);
export type ConnectorsGetInput = typeof ConnectorsGetInput.Type;

// Output Schema
export const ConnectorsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => StorageConnectorPropertiesSchema),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type ConnectorsGetOutput = typeof ConnectorsGetOutput.Type;

// The operation
/**
 * Get the specified Storage Connector.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param connectorName - The name of the Storage Connector.
 */
export const ConnectorsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConnectorsGetInput,
  outputSchema: ConnectorsGetOutput,
}));
// Input Schema
export const ConnectorsListByStorageAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/connectors",
      apiVersion: "2025-08-01",
    }),
  );
export type ConnectorsListByStorageAccountInput =
  typeof ConnectorsListByStorageAccountInput.Type;

// Output Schema
export const ConnectorsListByStorageAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ConnectorSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ConnectorsListByStorageAccountOutput =
  typeof ConnectorsListByStorageAccountOutput.Type;

// The operation
/**
 * List all Storage Connectors in a Storage Account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const ConnectorsListByStorageAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectorsListByStorageAccountInput,
    outputSchema: ConnectorsListByStorageAccountOutput,
  }));
// Input Schema
export const ConnectorsTestExistingConnectionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
    uniqueId: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/connectors/{connectorName}/testExistingConnection",
      apiVersion: "2025-08-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type ConnectorsTestExistingConnectionInput =
  typeof ConnectorsTestExistingConnectionInput.Type;

// Output Schema
export const ConnectorsTestExistingConnectionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storageConnectorMethodName: Schema.String,
    storageConnectorErrorMessage: Schema.optional(Schema.String),
    storageConnectorRequestId: Schema.String,
  });
export type ConnectorsTestExistingConnectionOutput =
  typeof ConnectorsTestExistingConnectionOutput.Type;

// The operation
/**
 * This method is used to verify that the connection to the backing data store works.
 * This API is designed to be used for monitoring and debugging purposes. From the caller’s perspective,
 * this method does the following: Calls List on the backing data store, attempting to list up to one blob/object/etc.
 * If the above succeeds, and if a blob/object/etc is found, calls Get on that object, attempting to download one byte.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param connectorName - The name of the Storage Connector.
 */
export const ConnectorsTestExistingConnection =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectorsTestExistingConnectionInput,
    outputSchema: ConnectorsTestExistingConnectionOutput,
  }));
// Input Schema
export const ConnectorsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  connectorName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.suspend(() => StorageConnectorPropertiesUpdateSchema),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/connectors/{connectorName}",
    apiVersion: "2025-08-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type ConnectorsUpdateInput = typeof ConnectorsUpdateInput.Type;

// Output Schema
export const ConnectorsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.suspend(() => StorageConnectorPropertiesSchema),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
export type ConnectorsUpdateOutput = typeof ConnectorsUpdateOutput.Type;

// The operation
/**
 * Update a Storage Connector.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param connectorName - The name of the Storage Connector.
 */
export const ConnectorsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConnectorsUpdateInput,
  outputSchema: ConnectorsUpdateOutput,
}));
// Input Schema
export const DataSharesCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  dataShareName: Schema.String.pipe(T.PathParam()),
  properties: Schema.suspend(() => StorageDataSharePropertiesSchema),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/dataShares/{dataShareName}",
    apiVersion: "2025-08-01",
    longRunning: { finalStateVia: "azure-async-operation" },
  }),
);
export type DataSharesCreateInput = typeof DataSharesCreateInput.Type;

// Output Schema
export const DataSharesCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.suspend(() => StorageDataSharePropertiesSchema),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
export type DataSharesCreateOutput = typeof DataSharesCreateOutput.Type;

// The operation
/**
 * Create a Storage DataShare if it does not already exist; otherwise, error out. This API will not allow you to replace an already existing resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param dataShareName - The name of the Storage DataShare.
 */
export const DataSharesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DataSharesCreateInput,
  outputSchema: DataSharesCreateOutput,
}));
// Input Schema
export const DataSharesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  dataShareName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/dataShares/{dataShareName}",
    apiVersion: "2025-08-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type DataSharesDeleteInput = typeof DataSharesDeleteInput.Type;

// Output Schema
export const DataSharesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DataSharesDeleteOutput = typeof DataSharesDeleteOutput.Type;

// The operation
/**
 * Delete a Storage DataShare.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param dataShareName - The name of the Storage DataShare.
 */
export const DataSharesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DataSharesDeleteInput,
  outputSchema: DataSharesDeleteOutput,
}));
// Input Schema
export const DataSharesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  dataShareName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/dataShares/{dataShareName}",
    apiVersion: "2025-08-01",
  }),
);
export type DataSharesGetInput = typeof DataSharesGetInput.Type;

// Output Schema
export const DataSharesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => StorageDataSharePropertiesSchema),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type DataSharesGetOutput = typeof DataSharesGetOutput.Type;

// The operation
/**
 * Get the specified Storage DataShare.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param dataShareName - The name of the Storage DataShare.
 */
export const DataSharesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DataSharesGetInput,
  outputSchema: DataSharesGetOutput,
}));
// Input Schema
export const DataSharesListByStorageAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/dataShares",
      apiVersion: "2025-08-01",
    }),
  );
export type DataSharesListByStorageAccountInput =
  typeof DataSharesListByStorageAccountInput.Type;

// Output Schema
export const DataSharesListByStorageAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => DataShareSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type DataSharesListByStorageAccountOutput =
  typeof DataSharesListByStorageAccountOutput.Type;

// The operation
/**
 * List all Storage DataShares in a Storage Account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const DataSharesListByStorageAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DataSharesListByStorageAccountInput,
    outputSchema: DataSharesListByStorageAccountOutput,
  }));
// Input Schema
export const DataSharesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  dataShareName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.suspend(() => StorageDataSharePropertiesUpdateSchema),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/dataShares/{dataShareName}",
    apiVersion: "2025-08-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type DataSharesUpdateInput = typeof DataSharesUpdateInput.Type;

// Output Schema
export const DataSharesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.suspend(() => StorageDataSharePropertiesSchema),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
export type DataSharesUpdateOutput = typeof DataSharesUpdateOutput.Type;

// The operation
/**
 * Update a Storage DataShare.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param dataShareName - The name of the Storage DataShare.
 */
export const DataSharesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DataSharesUpdateInput,
  outputSchema: DataSharesUpdateOutput,
}));
// Input Schema
export const DeletedAccountsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    deletedAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Storage/locations/{location}/deletedAccounts/{deletedAccountName}",
      apiVersion: "2025-08-01",
    }),
  );
export type DeletedAccountsGetInput = typeof DeletedAccountsGetInput.Type;

// Output Schema
export const DeletedAccountsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => DeletedAccountPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type DeletedAccountsGetOutput = typeof DeletedAccountsGetOutput.Type;

// The operation
/**
 * Get properties of specified deleted account resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param deletedAccountName - Name of the deleted storage account.
 */
export const DeletedAccountsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeletedAccountsGetInput,
  outputSchema: DeletedAccountsGetOutput,
}));
// Input Schema
export const DeletedAccountsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Storage/deletedAccounts",
      apiVersion: "2025-08-01",
    }),
  );
export type DeletedAccountsListInput = typeof DeletedAccountsListInput.Type;

// Output Schema
export const DeletedAccountsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => DeletedAccountSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type DeletedAccountsListOutput = typeof DeletedAccountsListOutput.Type;

// The operation
/**
 * Lists deleted accounts under the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const DeletedAccountsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeletedAccountsListInput,
  outputSchema: DeletedAccountsListOutput,
}));
// Input Schema
export const EncryptionScopesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    encryptionScopeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/encryptionScopes/{encryptionScopeName}",
      apiVersion: "2025-08-01",
    }),
  );
export type EncryptionScopesGetInput = typeof EncryptionScopesGetInput.Type;

// Output Schema
export const EncryptionScopesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => EncryptionScopePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type EncryptionScopesGetOutput = typeof EncryptionScopesGetOutput.Type;

// The operation
/**
 * Returns the properties for the specified encryption scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param encryptionScopeName - The name of the encryption scope within the specified storage account. Encryption scope names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 */
export const EncryptionScopesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EncryptionScopesGetInput,
  outputSchema: EncryptionScopesGetOutput,
}));
// Input Schema
export const EncryptionScopesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    $maxpagesize: Schema.optional(Schema.Number),
    $filter: Schema.optional(Schema.String),
    $include: Schema.optional(Schema.Literals(["All", "Enabled", "Disabled"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/encryptionScopes",
      apiVersion: "2025-08-01",
    }),
  );
export type EncryptionScopesListInput = typeof EncryptionScopesListInput.Type;

// Output Schema
export const EncryptionScopesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => EncryptionScopeSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type EncryptionScopesListOutput = typeof EncryptionScopesListOutput.Type;

// The operation
/**
 * Lists all the encryption scopes available under the specified storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param $maxpagesize - Optional, specifies the maximum number of encryption scopes that will be included in the list response.
 * @param $filter - Optional. When specified, only encryption scope names starting with the filter will be listed.
 * @param $include - Optional, when specified, will list encryption scopes with the specific state. Defaults to All
 */
export const EncryptionScopesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EncryptionScopesListInput,
    outputSchema: EncryptionScopesListOutput,
  }),
);
// Input Schema
export const EncryptionScopesPatchInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    encryptionScopeName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => EncryptionScopePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/encryptionScopes/{encryptionScopeName}",
      apiVersion: "2025-08-01",
    }),
  );
export type EncryptionScopesPatchInput = typeof EncryptionScopesPatchInput.Type;

// Output Schema
export const EncryptionScopesPatchOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => EncryptionScopePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type EncryptionScopesPatchOutput =
  typeof EncryptionScopesPatchOutput.Type;

// The operation
/**
 * Update encryption scope properties as specified in the request body. Update fails if the specified encryption scope does not already exist.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param encryptionScopeName - The name of the encryption scope within the specified storage account. Encryption scope names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 */
export const EncryptionScopesPatch = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EncryptionScopesPatchInput,
    outputSchema: EncryptionScopesPatchOutput,
  }),
);
// Input Schema
export const EncryptionScopesPutInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    encryptionScopeName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => EncryptionScopePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/encryptionScopes/{encryptionScopeName}",
      apiVersion: "2025-08-01",
    }),
  );
export type EncryptionScopesPutInput = typeof EncryptionScopesPutInput.Type;

// Output Schema
export const EncryptionScopesPutOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => EncryptionScopePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type EncryptionScopesPutOutput = typeof EncryptionScopesPutOutput.Type;

// The operation
/**
 * Synchronously creates or updates an encryption scope under the specified storage account. If an encryption scope is already created and a subsequent request is issued with different properties, the encryption scope properties will be updated per the specified request.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param encryptionScopeName - The name of the encryption scope within the specified storage account. Encryption scope names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 */
export const EncryptionScopesPut = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EncryptionScopesPutInput,
  outputSchema: EncryptionScopesPutOutput,
}));
// Input Schema
export const FileServicesGetServicePropertiesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default",
      apiVersion: "2025-08-01",
    }),
  );
export type FileServicesGetServicePropertiesInput =
  typeof FileServicesGetServicePropertiesInput.Type;

// Output Schema
export const FileServicesGetServicePropertiesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => FileServicePropertiesPropertiesSchema),
    ),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type FileServicesGetServicePropertiesOutput =
  typeof FileServicesGetServicePropertiesOutput.Type;

// The operation
/**
 * Gets the properties of file services in storage accounts, including CORS (Cross-Origin Resource Sharing) rules.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const FileServicesGetServiceProperties =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FileServicesGetServicePropertiesInput,
    outputSchema: FileServicesGetServicePropertiesOutput,
  }));
// Input Schema
export const FileServicesGetServiceUsageInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/usages/default",
      apiVersion: "2025-08-01",
    }),
  );
export type FileServicesGetServiceUsageInput =
  typeof FileServicesGetServiceUsageInput.Type;

// Output Schema
export const FileServicesGetServiceUsageOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => FileServiceUsagePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type FileServicesGetServiceUsageOutput =
  typeof FileServicesGetServiceUsageOutput.Type;

// The operation
/**
 * Gets the usage of file service in storage account including account limits, file share limits and constants used in recommendations and bursting formula.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const FileServicesGetServiceUsage = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FileServicesGetServiceUsageInput,
    outputSchema: FileServicesGetServiceUsageOutput,
  }),
);
// Input Schema
export const FileServicesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices",
    apiVersion: "2025-08-01",
  }),
);
export type FileServicesListInput = typeof FileServicesListInput.Type;

// Output Schema
export const FileServicesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => FileServicePropertiesSchema)),
    ),
  },
);
export type FileServicesListOutput = typeof FileServicesListOutput.Type;

// The operation
/**
 * List all file services in storage accounts
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const FileServicesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FileServicesListInput,
  outputSchema: FileServicesListOutput,
}));
// Input Schema
export const FileServicesListServiceUsagesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    $maxpagesize: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/usages",
      apiVersion: "2025-08-01",
    }),
  );
export type FileServicesListServiceUsagesInput =
  typeof FileServicesListServiceUsagesInput.Type;

// Output Schema
export const FileServicesListServiceUsagesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => FileServiceUsageSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type FileServicesListServiceUsagesOutput =
  typeof FileServicesListServiceUsagesOutput.Type;

// The operation
/**
 * Gets the usages of file service in storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param $maxpagesize - Optional, specifies the maximum number of file service usages to be included in the list response.
 */
export const FileServicesListServiceUsages =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FileServicesListServiceUsagesInput,
    outputSchema: FileServicesListServiceUsagesOutput,
  }));
// Input Schema
export const FileServicesSetServicePropertiesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => FileServicePropertiesPropertiesSchema),
    ),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default",
      apiVersion: "2025-08-01",
    }),
  );
export type FileServicesSetServicePropertiesInput =
  typeof FileServicesSetServicePropertiesInput.Type;

// Output Schema
export const FileServicesSetServicePropertiesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => FileServicePropertiesPropertiesSchema),
    ),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type FileServicesSetServicePropertiesOutput =
  typeof FileServicesSetServicePropertiesOutput.Type;

// The operation
/**
 * Sets the properties of file services in storage accounts, including CORS (Cross-Origin Resource Sharing) rules.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const FileServicesSetServiceProperties =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FileServicesSetServicePropertiesInput,
    outputSchema: FileServicesSetServicePropertiesOutput,
  }));
// Input Schema
export const FileSharesCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  shareName: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
  properties: Schema.optional(Schema.suspend(() => FileSharePropertiesSchema)),
  etag: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares/{shareName}",
    apiVersion: "2025-08-01",
  }),
);
export type FileSharesCreateInput = typeof FileSharesCreateInput.Type;

// Output Schema
export const FileSharesCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.optional(
      Schema.suspend(() => FileSharePropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
export type FileSharesCreateOutput = typeof FileSharesCreateOutput.Type;

// The operation
/**
 * Creates a new share under the specified account as described by request body. The share resource includes metadata and properties for that share. It does not include a list of the files contained by the share.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param shareName - The name of the file share within the specified storage account. File share names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 * @param $expand - Optional, used to expand the properties within share's properties. Valid values are: snapshots. Should be passed as a string with delimiter ','
 */
export const FileSharesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FileSharesCreateInput,
  outputSchema: FileSharesCreateOutput,
}));
// Input Schema
export const FileSharesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  shareName: Schema.String.pipe(T.PathParam()),
  $include: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares/{shareName}",
    apiVersion: "2025-08-01",
  }),
);
export type FileSharesDeleteInput = typeof FileSharesDeleteInput.Type;

// Output Schema
export const FileSharesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type FileSharesDeleteOutput = typeof FileSharesDeleteOutput.Type;

// The operation
/**
 * Deletes specified share under its account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param shareName - The name of the file share within the specified storage account. File share names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 * @param x-ms-snapshot - Optional, used to delete a snapshot.
 * @param $include - Optional. Valid values are: snapshots, leased-snapshots, none. The default value is snapshots. For 'snapshots', the file share is deleted including all of its file share snapshots. If the file share contains leased-snapshots, the deletion fails. For 'leased-snapshots', the file share is deleted included all of its file share snapshots (leased/unleased). For 'none', the file share is deleted if it has no share snapshots. If the file share contains any snapshots (leased or unleased), the deletion fails.
 */
export const FileSharesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FileSharesDeleteInput,
  outputSchema: FileSharesDeleteOutput,
}));
// Input Schema
export const FileSharesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  shareName: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares/{shareName}",
    apiVersion: "2025-08-01",
  }),
);
export type FileSharesGetInput = typeof FileSharesGetInput.Type;

// Output Schema
export const FileSharesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => FileSharePropertiesSchema)),
  etag: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type FileSharesGetOutput = typeof FileSharesGetOutput.Type;

// The operation
/**
 * Gets properties of a specified share.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param shareName - The name of the file share within the specified storage account. File share names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 * @param $expand - Optional, used to expand the properties within share's properties. Valid values are: stats. Should be passed as a string with delimiter ','.
 * @param x-ms-snapshot - Optional, used to retrieve properties of a snapshot.
 */
export const FileSharesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FileSharesGetInput,
  outputSchema: FileSharesGetOutput,
}));
// Input Schema
export const FileSharesLeaseInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  shareName: Schema.String.pipe(T.PathParam()),
  action: Schema.suspend(() => LeaseShareActionSchema),
  leaseId: Schema.optional(Schema.String),
  breakPeriod: Schema.optional(Schema.Number),
  leaseDuration: Schema.optional(Schema.Number),
  proposedLeaseId: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares/{shareName}/lease",
    apiVersion: "2025-08-01",
  }),
);
export type FileSharesLeaseInput = typeof FileSharesLeaseInput.Type;

// Output Schema
export const FileSharesLeaseOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  leaseId: Schema.optional(Schema.String),
  leaseTimeSeconds: Schema.optional(Schema.String),
});
export type FileSharesLeaseOutput = typeof FileSharesLeaseOutput.Type;

// The operation
/**
 * The Lease Share operation establishes and manages a lock on a share for delete operations. The lock duration can be 15 to 60 seconds, or can be infinite.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param shareName - The name of the file share within the specified storage account. File share names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 * @param x-ms-snapshot - Optional. Specify the snapshot time to lease a snapshot.
 */
export const FileSharesLease = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FileSharesLeaseInput,
  outputSchema: FileSharesLeaseOutput,
}));
// Input Schema
export const FileSharesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  $maxpagesize: Schema.optional(Schema.String),
  $filter: Schema.optional(Schema.String),
  $expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares",
    apiVersion: "2025-08-01",
  }),
);
export type FileSharesListInput = typeof FileSharesListInput.Type;

// Output Schema
export const FileSharesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(Schema.suspend(() => FileShareItemSchema)),
  nextLink: Schema.optional(Schema.String),
});
export type FileSharesListOutput = typeof FileSharesListOutput.Type;

// The operation
/**
 * Lists all shares.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param $maxpagesize - Optional. Specified maximum number of shares that can be included in the list.
 * @param $filter - Optional. When specified, only share names starting with the filter will be listed.
 * @param $expand - Optional, used to expand the properties within share's properties. Valid values are: deleted, snapshots. Should be passed as a string with delimiter ','
 */
export const FileSharesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FileSharesListInput,
  outputSchema: FileSharesListOutput,
}));
// Input Schema
export const FileSharesRestoreInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    shareName: Schema.String.pipe(T.PathParam()),
    deletedShareName: Schema.String,
    deletedShareVersion: Schema.String,
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares/{shareName}/restore",
    apiVersion: "2025-08-01",
  }),
);
export type FileSharesRestoreInput = typeof FileSharesRestoreInput.Type;

// Output Schema
export const FileSharesRestoreOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type FileSharesRestoreOutput = typeof FileSharesRestoreOutput.Type;

// The operation
/**
 * Restore a file share within a valid retention days if share soft delete is enabled
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param shareName - The name of the file share within the specified storage account. File share names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 */
export const FileSharesRestore = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FileSharesRestoreInput,
  outputSchema: FileSharesRestoreOutput,
}));
// Input Schema
export const FileSharesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  shareName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(Schema.suspend(() => FileSharePropertiesSchema)),
  etag: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares/{shareName}",
    apiVersion: "2025-08-01",
  }),
);
export type FileSharesUpdateInput = typeof FileSharesUpdateInput.Type;

// Output Schema
export const FileSharesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.optional(
      Schema.suspend(() => FileSharePropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
export type FileSharesUpdateOutput = typeof FileSharesUpdateOutput.Type;

// The operation
/**
 * Updates share properties as specified in request body. Properties not mentioned in the request will not be changed. Update fails if the specified share does not already exist.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param shareName - The name of the file share within the specified storage account. File share names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 */
export const FileSharesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FileSharesUpdateInput,
  outputSchema: FileSharesUpdateOutput,
}));
// Input Schema
export const LocalUsersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    username: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => LocalUserPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/localUsers/{username}",
      apiVersion: "2025-08-01",
    }),
  );
export type LocalUsersCreateOrUpdateInput =
  typeof LocalUsersCreateOrUpdateInput.Type;

// Output Schema
export const LocalUsersCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => LocalUserPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type LocalUsersCreateOrUpdateOutput =
  typeof LocalUsersCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update the properties of a local user associated with the storage account. Properties for NFSv3 enablement and extended groups cannot be set with other properties.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param username - The name of local user. The username must contain lowercase letters and numbers only. It must be unique only within the storage account.
 */
export const LocalUsersCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LocalUsersCreateOrUpdateInput,
    outputSchema: LocalUsersCreateOrUpdateOutput,
  }),
);
// Input Schema
export const LocalUsersDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  username: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/localUsers/{username}",
    apiVersion: "2025-08-01",
  }),
);
export type LocalUsersDeleteInput = typeof LocalUsersDeleteInput.Type;

// Output Schema
export const LocalUsersDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type LocalUsersDeleteOutput = typeof LocalUsersDeleteOutput.Type;

// The operation
/**
 * Deletes the local user associated with the specified storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param username - The name of local user. The username must contain lowercase letters and numbers only. It must be unique only within the storage account.
 */
export const LocalUsersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LocalUsersDeleteInput,
  outputSchema: LocalUsersDeleteOutput,
}));
// Input Schema
export const LocalUsersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  username: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/localUsers/{username}",
    apiVersion: "2025-08-01",
  }),
);
export type LocalUsersGetInput = typeof LocalUsersGetInput.Type;

// Output Schema
export const LocalUsersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => LocalUserPropertiesSchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type LocalUsersGetOutput = typeof LocalUsersGetOutput.Type;

// The operation
/**
 * Get the local user of the storage account by username.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param username - The name of local user. The username must contain lowercase letters and numbers only. It must be unique only within the storage account.
 */
export const LocalUsersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LocalUsersGetInput,
  outputSchema: LocalUsersGetOutput,
}));
// Input Schema
export const LocalUsersListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  $maxpagesize: Schema.optional(Schema.Number),
  $filter: Schema.optional(Schema.String),
  $include: Schema.optional(Schema.Literals(["nfsv3"])),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/localUsers",
    apiVersion: "2025-08-01",
  }),
);
export type LocalUsersListInput = typeof LocalUsersListInput.Type;

// Output Schema
export const LocalUsersListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(Schema.suspend(() => LocalUserSchema)),
  nextLink: Schema.optional(Schema.String),
});
export type LocalUsersListOutput = typeof LocalUsersListOutput.Type;

// The operation
/**
 * List the local users associated with the storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param $maxpagesize - Optional, specifies the maximum number of local users that will be included in the list response.
 * @param $filter - Optional. When specified, only local user names starting with the filter will be listed.
 * @param $include - Optional, when specified, will list local users enabled for the specific protocol. Lists all users by default.
 */
export const LocalUsersList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LocalUsersListInput,
  outputSchema: LocalUsersListOutput,
}));
// Input Schema
export const LocalUsersListKeysInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    username: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/localUsers/{username}/listKeys",
      apiVersion: "2025-08-01",
    }),
  );
export type LocalUsersListKeysInput = typeof LocalUsersListKeysInput.Type;

// Output Schema
export const LocalUsersListKeysOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sshAuthorizedKeys: Schema.optional(
      Schema.Array(Schema.suspend(() => SshPublicKeySchema)),
    ),
    sharedKey: Schema.optional(Schema.String),
  });
export type LocalUsersListKeysOutput = typeof LocalUsersListKeysOutput.Type;

// The operation
/**
 * List SSH authorized keys and shared key of the local user.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param username - The name of local user. The username must contain lowercase letters and numbers only. It must be unique only within the storage account.
 */
export const LocalUsersListKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LocalUsersListKeysInput,
  outputSchema: LocalUsersListKeysOutput,
}));
// Input Schema
export const LocalUsersRegeneratePasswordInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    username: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/localUsers/{username}/regeneratePassword",
      apiVersion: "2025-08-01",
    }),
  );
export type LocalUsersRegeneratePasswordInput =
  typeof LocalUsersRegeneratePasswordInput.Type;

// Output Schema
export const LocalUsersRegeneratePasswordOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sshPassword: Schema.optional(SensitiveOutputString),
  });
export type LocalUsersRegeneratePasswordOutput =
  typeof LocalUsersRegeneratePasswordOutput.Type;

// The operation
/**
 * Regenerate the local user SSH password.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param username - The name of local user. The username must contain lowercase letters and numbers only. It must be unique only within the storage account.
 */
export const LocalUsersRegeneratePassword =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LocalUsersRegeneratePasswordInput,
    outputSchema: LocalUsersRegeneratePasswordOutput,
  }));
// Input Schema
export const ManagementPoliciesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    managementPolicyName: Schema.Literals(["default"]).pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => ManagementPolicyPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/managementPolicies/{managementPolicyName}",
      apiVersion: "2025-08-01",
    }),
  );
export type ManagementPoliciesCreateOrUpdateInput =
  typeof ManagementPoliciesCreateOrUpdateInput.Type;

// Output Schema
export const ManagementPoliciesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ManagementPolicyPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ManagementPoliciesCreateOrUpdateOutput =
  typeof ManagementPoliciesCreateOrUpdateOutput.Type;

// The operation
/**
 * Sets the managementpolicy to the specified storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param managementPolicyName - The name of the Storage Account Management Policy. It should always be 'default'
 */
export const ManagementPoliciesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagementPoliciesCreateOrUpdateInput,
    outputSchema: ManagementPoliciesCreateOrUpdateOutput,
  }));
// Input Schema
export const ManagementPoliciesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    managementPolicyName: Schema.Literals(["default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/managementPolicies/{managementPolicyName}",
      apiVersion: "2025-08-01",
    }),
  );
export type ManagementPoliciesDeleteInput =
  typeof ManagementPoliciesDeleteInput.Type;

// Output Schema
export const ManagementPoliciesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ManagementPoliciesDeleteOutput =
  typeof ManagementPoliciesDeleteOutput.Type;

// The operation
/**
 * Deletes the managementpolicy associated with the specified storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param managementPolicyName - The name of the Storage Account Management Policy. It should always be 'default'
 */
export const ManagementPoliciesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagementPoliciesDeleteInput,
    outputSchema: ManagementPoliciesDeleteOutput,
  }),
);
// Input Schema
export const ManagementPoliciesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    managementPolicyName: Schema.Literals(["default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/managementPolicies/{managementPolicyName}",
      apiVersion: "2025-08-01",
    }),
  );
export type ManagementPoliciesGetInput = typeof ManagementPoliciesGetInput.Type;

// Output Schema
export const ManagementPoliciesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ManagementPolicyPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ManagementPoliciesGetOutput =
  typeof ManagementPoliciesGetOutput.Type;

// The operation
/**
 * Gets the managementpolicy associated with the specified storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param managementPolicyName - The name of the Storage Account Management Policy. It should always be 'default'
 */
export const ManagementPoliciesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagementPoliciesGetInput,
    outputSchema: ManagementPoliciesGetOutput,
  }),
);
// Input Schema
export const NetworkSecurityPerimeterConfigurationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    networkSecurityPerimeterConfigurationName: Schema.String.pipe(
      T.PathParam(),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/networkSecurityPerimeterConfigurations/{networkSecurityPerimeterConfigurationName}",
      apiVersion: "2025-08-01",
    }),
  );
export type NetworkSecurityPerimeterConfigurationsGetInput =
  typeof NetworkSecurityPerimeterConfigurationsGetInput.Type;

// Output Schema
export const NetworkSecurityPerimeterConfigurationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(
        () => NetworkSecurityPerimeterConfigurationPropertiesSchema,
      ),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type NetworkSecurityPerimeterConfigurationsGetOutput =
  typeof NetworkSecurityPerimeterConfigurationsGetOutput.Type;

// The operation
/**
 * Gets effective NetworkSecurityPerimeterConfiguration for association
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param networkSecurityPerimeterConfigurationName - The name for Network Security Perimeter configuration
 */
export const NetworkSecurityPerimeterConfigurationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkSecurityPerimeterConfigurationsGetInput,
    outputSchema: NetworkSecurityPerimeterConfigurationsGetOutput,
  }));
// Input Schema
export const NetworkSecurityPerimeterConfigurationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/networkSecurityPerimeterConfigurations",
      apiVersion: "2025-08-01",
    }),
  );
export type NetworkSecurityPerimeterConfigurationsListInput =
  typeof NetworkSecurityPerimeterConfigurationsListInput.Type;

// Output Schema
export const NetworkSecurityPerimeterConfigurationsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.suspend(() => NetworkSecurityPerimeterConfigurationSchema),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type NetworkSecurityPerimeterConfigurationsListOutput =
  typeof NetworkSecurityPerimeterConfigurationsListOutput.Type;

// The operation
/**
 * Gets list of effective NetworkSecurityPerimeterConfiguration for storage account
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const NetworkSecurityPerimeterConfigurationsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkSecurityPerimeterConfigurationsListInput,
    outputSchema: NetworkSecurityPerimeterConfigurationsListOutput,
  }));
// Input Schema
export const NetworkSecurityPerimeterConfigurationsReconcileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    networkSecurityPerimeterConfigurationName: Schema.String.pipe(
      T.PathParam(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/networkSecurityPerimeterConfigurations/{networkSecurityPerimeterConfigurationName}/reconcile",
      apiVersion: "2025-08-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type NetworkSecurityPerimeterConfigurationsReconcileInput =
  typeof NetworkSecurityPerimeterConfigurationsReconcileInput.Type;

// Output Schema
export const NetworkSecurityPerimeterConfigurationsReconcileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NetworkSecurityPerimeterConfigurationsReconcileOutput =
  typeof NetworkSecurityPerimeterConfigurationsReconcileOutput.Type;

// The operation
/**
 * Refreshes any information about the association.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param networkSecurityPerimeterConfigurationName - The name for Network Security Perimeter configuration
 */
export const NetworkSecurityPerimeterConfigurationsReconcile =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkSecurityPerimeterConfigurationsReconcileInput,
    outputSchema: NetworkSecurityPerimeterConfigurationsReconcileOutput,
  }));
// Input Schema
export const ObjectReplicationPoliciesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    objectReplicationPolicyId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => ObjectReplicationPolicyPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/objectReplicationPolicies/{objectReplicationPolicyId}",
      apiVersion: "2025-08-01",
    }),
  );
export type ObjectReplicationPoliciesCreateOrUpdateInput =
  typeof ObjectReplicationPoliciesCreateOrUpdateInput.Type;

// Output Schema
export const ObjectReplicationPoliciesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ObjectReplicationPolicyPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ObjectReplicationPoliciesCreateOrUpdateOutput =
  typeof ObjectReplicationPoliciesCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update the object replication policy of the storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param objectReplicationPolicyId - For the destination account, provide the value 'default'. Configure the policy on the destination account first. For the source account, provide the value of the policy ID that is returned when you download the policy that was defined on the destination account. The policy is downloaded as a JSON file.
 */
export const ObjectReplicationPoliciesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ObjectReplicationPoliciesCreateOrUpdateInput,
    outputSchema: ObjectReplicationPoliciesCreateOrUpdateOutput,
  }));
// Input Schema
export const ObjectReplicationPoliciesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    objectReplicationPolicyId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/objectReplicationPolicies/{objectReplicationPolicyId}",
      apiVersion: "2025-08-01",
    }),
  );
export type ObjectReplicationPoliciesDeleteInput =
  typeof ObjectReplicationPoliciesDeleteInput.Type;

// Output Schema
export const ObjectReplicationPoliciesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ObjectReplicationPoliciesDeleteOutput =
  typeof ObjectReplicationPoliciesDeleteOutput.Type;

// The operation
/**
 * Deletes the object replication policy associated with the specified storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param objectReplicationPolicyId - For the destination account, provide the value 'default'. Configure the policy on the destination account first. For the source account, provide the value of the policy ID that is returned when you download the policy that was defined on the destination account. The policy is downloaded as a JSON file.
 */
export const ObjectReplicationPoliciesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ObjectReplicationPoliciesDeleteInput,
    outputSchema: ObjectReplicationPoliciesDeleteOutput,
  }));
// Input Schema
export const ObjectReplicationPoliciesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    objectReplicationPolicyId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/objectReplicationPolicies/{objectReplicationPolicyId}",
      apiVersion: "2025-08-01",
    }),
  );
export type ObjectReplicationPoliciesGetInput =
  typeof ObjectReplicationPoliciesGetInput.Type;

// Output Schema
export const ObjectReplicationPoliciesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ObjectReplicationPolicyPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ObjectReplicationPoliciesGetOutput =
  typeof ObjectReplicationPoliciesGetOutput.Type;

// The operation
/**
 * Get the object replication policy of the storage account by policy ID.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param objectReplicationPolicyId - For the destination account, provide the value 'default'. Configure the policy on the destination account first. For the source account, provide the value of the policy ID that is returned when you download the policy that was defined on the destination account. The policy is downloaded as a JSON file.
 */
export const ObjectReplicationPoliciesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ObjectReplicationPoliciesGetInput,
    outputSchema: ObjectReplicationPoliciesGetOutput,
  }));
// Input Schema
export const ObjectReplicationPoliciesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/objectReplicationPolicies",
      apiVersion: "2025-08-01",
    }),
  );
export type ObjectReplicationPoliciesListInput =
  typeof ObjectReplicationPoliciesListInput.Type;

// Output Schema
export const ObjectReplicationPoliciesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => ObjectReplicationPolicySchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ObjectReplicationPoliciesListOutput =
  typeof ObjectReplicationPoliciesListOutput.Type;

// The operation
/**
 * List the object replication policies associated with the storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const ObjectReplicationPoliciesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ObjectReplicationPoliciesListInput,
    outputSchema: ObjectReplicationPoliciesListOutput,
  }));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Storage/operations",
    apiVersion: "2025-08-01",
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
 * Lists all of the available Storage Rest API operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-08-01",
    }),
  );
export type PrivateEndpointConnectionsDeleteInput =
  typeof PrivateEndpointConnectionsDeleteInput.Type;

// Output Schema
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PrivateEndpointConnectionsDeleteOutput =
  typeof PrivateEndpointConnectionsDeleteOutput.Type;

// The operation
/**
 * Deletes the specified private endpoint connection associated with the storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
 */
export const PrivateEndpointConnectionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsDeleteInput,
    outputSchema: PrivateEndpointConnectionsDeleteOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-08-01",
    }),
  );
export type PrivateEndpointConnectionsGetInput =
  typeof PrivateEndpointConnectionsGetInput.Type;

// Output Schema
export const PrivateEndpointConnectionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PrivateEndpointConnectionPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PrivateEndpointConnectionsGetOutput =
  typeof PrivateEndpointConnectionsGetOutput.Type;

// The operation
/**
 * Gets the specified private endpoint connection associated with the storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/privateEndpointConnections",
      apiVersion: "2025-08-01",
    }),
  );
export type PrivateEndpointConnectionsListInput =
  typeof PrivateEndpointConnectionsListInput.Type;

// Output Schema
export const PrivateEndpointConnectionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => PrivateEndpointConnectionSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type PrivateEndpointConnectionsListOutput =
  typeof PrivateEndpointConnectionsListOutput.Type;

// The operation
/**
 * List all the private endpoint connections associated with the storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const PrivateEndpointConnectionsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListInput,
    outputSchema: PrivateEndpointConnectionsListOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionsPutInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => PrivateEndpointConnectionPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-08-01",
    }),
  );
export type PrivateEndpointConnectionsPutInput =
  typeof PrivateEndpointConnectionsPutInput.Type;

// Output Schema
export const PrivateEndpointConnectionsPutOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PrivateEndpointConnectionPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PrivateEndpointConnectionsPutOutput =
  typeof PrivateEndpointConnectionsPutOutput.Type;

// The operation
/**
 * Update the state of specified private endpoint connection associated with the storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
 */
export const PrivateEndpointConnectionsPut =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsPutInput,
    outputSchema: PrivateEndpointConnectionsPutOutput,
  }));
// Input Schema
export const PrivateLinkResourcesListByStorageAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/privateLinkResources",
      apiVersion: "2025-08-01",
    }),
  );
export type PrivateLinkResourcesListByStorageAccountInput =
  typeof PrivateLinkResourcesListByStorageAccountInput.Type;

// Output Schema
export const PrivateLinkResourcesListByStorageAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => PrivateLinkResourceSchema)),
    ),
  });
export type PrivateLinkResourcesListByStorageAccountOutput =
  typeof PrivateLinkResourcesListByStorageAccountOutput.Type;

// The operation
/**
 * Gets the private link resources that need to be created for a storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const PrivateLinkResourcesListByStorageAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesListByStorageAccountInput,
    outputSchema: PrivateLinkResourcesListByStorageAccountOutput,
  }));
// Input Schema
export const QueueCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  queueName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(Schema.suspend(() => QueuePropertiesSchema)),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/queueServices/default/queues/{queueName}",
    apiVersion: "2025-08-01",
  }),
);
export type QueueCreateInput = typeof QueueCreateInput.Type;

// Output Schema
export const QueueCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => QueuePropertiesSchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type QueueCreateOutput = typeof QueueCreateOutput.Type;

// The operation
/**
 * Creates a new queue with the specified queue name, under the specified account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param queueName - A queue name must be unique within a storage account and must be between 3 and 63 characters.The name must comprise of lowercase alphanumeric and dash(-) characters only, it should begin and end with an alphanumeric character and it cannot have two consecutive dash(-) characters.
 */
export const QueueCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QueueCreateInput,
  outputSchema: QueueCreateOutput,
}));
// Input Schema
export const QueueDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  queueName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/queueServices/default/queues/{queueName}",
    apiVersion: "2025-08-01",
  }),
);
export type QueueDeleteInput = typeof QueueDeleteInput.Type;

// Output Schema
export const QueueDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type QueueDeleteOutput = typeof QueueDeleteOutput.Type;

// The operation
/**
 * Deletes the queue with the specified queue name, under the specified account if it exists.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param queueName - A queue name must be unique within a storage account and must be between 3 and 63 characters.The name must comprise of lowercase alphanumeric and dash(-) characters only, it should begin and end with an alphanumeric character and it cannot have two consecutive dash(-) characters.
 */
export const QueueDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QueueDeleteInput,
  outputSchema: QueueDeleteOutput,
}));
// Input Schema
export const QueueGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  queueName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/queueServices/default/queues/{queueName}",
    apiVersion: "2025-08-01",
  }),
);
export type QueueGetInput = typeof QueueGetInput.Type;

// Output Schema
export const QueueGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => QueuePropertiesSchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type QueueGetOutput = typeof QueueGetOutput.Type;

// The operation
/**
 * Gets the queue with the specified queue name, under the specified account if it exists.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param queueName - A queue name must be unique within a storage account and must be between 3 and 63 characters.The name must comprise of lowercase alphanumeric and dash(-) characters only, it should begin and end with an alphanumeric character and it cannot have two consecutive dash(-) characters.
 */
export const QueueGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QueueGetInput,
  outputSchema: QueueGetOutput,
}));
// Input Schema
export const QueueListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  $maxpagesize: Schema.optional(Schema.String),
  $filter: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/queueServices/default/queues",
    apiVersion: "2025-08-01",
  }),
);
export type QueueListInput = typeof QueueListInput.Type;

// Output Schema
export const QueueListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(Schema.suspend(() => ListQueueSchema)),
  nextLink: Schema.optional(Schema.String),
});
export type QueueListOutput = typeof QueueListOutput.Type;

// The operation
/**
 * Gets a list of all the queues under the specified storage account
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param $maxpagesize - Optional, a maximum number of queues that should be included in a list queue response
 * @param $filter - Optional, When specified, only the queues with a name starting with the given filter will be listed.
 */
export const QueueList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QueueListInput,
  outputSchema: QueueListOutput,
}));
// Input Schema
export const QueueServicesGetServicePropertiesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/queueServices/default",
      apiVersion: "2025-08-01",
    }),
  );
export type QueueServicesGetServicePropertiesInput =
  typeof QueueServicesGetServicePropertiesInput.Type;

// Output Schema
export const QueueServicesGetServicePropertiesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => QueueServicePropertiesPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type QueueServicesGetServicePropertiesOutput =
  typeof QueueServicesGetServicePropertiesOutput.Type;

// The operation
/**
 * Gets the properties of a storage account’s Queue service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const QueueServicesGetServiceProperties =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: QueueServicesGetServicePropertiesInput,
    outputSchema: QueueServicesGetServicePropertiesOutput,
  }));
// Input Schema
export const QueueServicesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/queueServices",
    apiVersion: "2025-08-01",
  }),
);
export type QueueServicesListInput = typeof QueueServicesListInput.Type;

// Output Schema
export const QueueServicesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => QueueServicePropertiesSchema)),
    ),
  });
export type QueueServicesListOutput = typeof QueueServicesListOutput.Type;

// The operation
/**
 * List all queue services for the storage account
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const QueueServicesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QueueServicesListInput,
  outputSchema: QueueServicesListOutput,
}));
// Input Schema
export const QueueServicesSetServicePropertiesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => QueueServicePropertiesPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/queueServices/default",
      apiVersion: "2025-08-01",
    }),
  );
export type QueueServicesSetServicePropertiesInput =
  typeof QueueServicesSetServicePropertiesInput.Type;

// Output Schema
export const QueueServicesSetServicePropertiesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => QueueServicePropertiesPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type QueueServicesSetServicePropertiesOutput =
  typeof QueueServicesSetServicePropertiesOutput.Type;

// The operation
/**
 * Sets the properties of a storage account’s Queue service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const QueueServicesSetServiceProperties =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: QueueServicesSetServicePropertiesInput,
    outputSchema: QueueServicesSetServicePropertiesOutput,
  }));
// Input Schema
export const QueueUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  queueName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(Schema.suspend(() => QueuePropertiesSchema)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/queueServices/default/queues/{queueName}",
    apiVersion: "2025-08-01",
  }),
);
export type QueueUpdateInput = typeof QueueUpdateInput.Type;

// Output Schema
export const QueueUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => QueuePropertiesSchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type QueueUpdateOutput = typeof QueueUpdateOutput.Type;

// The operation
/**
 * Creates a new queue with the specified queue name, under the specified account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param queueName - A queue name must be unique within a storage account and must be between 3 and 63 characters.The name must comprise of lowercase alphanumeric and dash(-) characters only, it should begin and end with an alphanumeric character and it cannot have two consecutive dash(-) characters.
 */
export const QueueUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QueueUpdateInput,
  outputSchema: QueueUpdateOutput,
}));
// Input Schema
export const SkusListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Storage/skus",
    apiVersion: "2025-08-01",
  }),
);
export type SkusListInput = typeof SkusListInput.Type;

// Output Schema
export const SkusListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(Schema.suspend(() => SkuInformationSchema)),
  ),
  nextLink: Schema.optional(Schema.String),
});
export type SkusListOutput = typeof SkusListOutput.Type;

// The operation
/**
 * Lists the available SKUs supported by Microsoft.Storage for given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const SkusList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SkusListInput,
  outputSchema: SkusListOutput,
}));
// Input Schema
export const StorageAccountsAbortHierarchicalNamespaceMigrationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/aborthnsonmigration",
      apiVersion: "2025-08-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type StorageAccountsAbortHierarchicalNamespaceMigrationInput =
  typeof StorageAccountsAbortHierarchicalNamespaceMigrationInput.Type;

// Output Schema
export const StorageAccountsAbortHierarchicalNamespaceMigrationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type StorageAccountsAbortHierarchicalNamespaceMigrationOutput =
  typeof StorageAccountsAbortHierarchicalNamespaceMigrationOutput.Type;

// The operation
/**
 * Abort live Migration of storage account to enable Hns
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const StorageAccountsAbortHierarchicalNamespaceMigration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageAccountsAbortHierarchicalNamespaceMigrationInput,
    outputSchema: StorageAccountsAbortHierarchicalNamespaceMigrationOutput,
  }));
// Input Schema
export const StorageAccountsCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.Literals(["Microsoft.Storage/storageAccounts"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Storage/checkNameAvailability",
      apiVersion: "2025-08-01",
    }),
  );
export type StorageAccountsCheckNameAvailabilityInput =
  typeof StorageAccountsCheckNameAvailabilityInput.Type;

// Output Schema
export const StorageAccountsCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.suspend(() => ReasonSchema)),
    message: Schema.optional(Schema.String),
  });
export type StorageAccountsCheckNameAvailabilityOutput =
  typeof StorageAccountsCheckNameAvailabilityOutput.Type;

// The operation
/**
 * Checks that the storage account name is valid and is not already in use.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const StorageAccountsCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageAccountsCheckNameAvailabilityInput,
    outputSchema: StorageAccountsCheckNameAvailabilityOutput,
  }));
// Input Schema
export const StorageAccountsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    sku: Schema.suspend(() => SkuSchema),
    kind: Schema.suspend(() => KindSchema),
    location: Schema.String,
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    placement: Schema.optional(Schema.suspend(() => PlacementSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    identity: Schema.optional(Schema.suspend(() => IdentitySchema)),
    properties: Schema.optional(
      Schema.suspend(() => StorageAccountPropertiesCreateParametersSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}",
      apiVersion: "2025-08-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type StorageAccountsCreateInput = typeof StorageAccountsCreateInput.Type;

// Output Schema
export const StorageAccountsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => StorageAccountPropertiesSchema),
    ),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    kind: Schema.optional(Schema.suspend(() => KindSchema)),
    identity: Schema.optional(Schema.suspend(() => IdentitySchema)),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    placement: Schema.optional(Schema.suspend(() => PlacementSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type StorageAccountsCreateOutput =
  typeof StorageAccountsCreateOutput.Type;

// The operation
/**
 * Asynchronously creates a new storage account with the specified parameters. If an account is already created and a subsequent create request is issued with different properties, the account properties will be updated. If an account is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const StorageAccountsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: StorageAccountsCreateInput,
    outputSchema: StorageAccountsCreateOutput,
  }),
);
// Input Schema
export const StorageAccountsCustomerInitiatedMigrationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    properties: Schema.suspend(() => StorageAccountMigrationPropertiesSchema),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/startAccountMigration",
      apiVersion: "2025-08-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type StorageAccountsCustomerInitiatedMigrationInput =
  typeof StorageAccountsCustomerInitiatedMigrationInput.Type;

// Output Schema
export const StorageAccountsCustomerInitiatedMigrationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type StorageAccountsCustomerInitiatedMigrationOutput =
  typeof StorageAccountsCustomerInitiatedMigrationOutput.Type;

// The operation
/**
 * Account Migration request can be triggered for a storage account to change its redundancy level. The migration updates the non-zonal redundant storage account to a zonal redundant account or vice-versa in order to have better reliability and availability. Zone-redundant storage (ZRS) replicates your storage account synchronously across three Azure availability zones in the primary region.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const StorageAccountsCustomerInitiatedMigration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageAccountsCustomerInitiatedMigrationInput,
    outputSchema: StorageAccountsCustomerInitiatedMigrationOutput,
  }));
// Input Schema
export const StorageAccountsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}",
      apiVersion: "2025-08-01",
    }),
  );
export type StorageAccountsDeleteInput = typeof StorageAccountsDeleteInput.Type;

// Output Schema
export const StorageAccountsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type StorageAccountsDeleteOutput =
  typeof StorageAccountsDeleteOutput.Type;

// The operation
/**
 * Deletes a storage account in Microsoft Azure.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const StorageAccountsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: StorageAccountsDeleteInput,
    outputSchema: StorageAccountsDeleteOutput,
  }),
);
// Input Schema
export const StorageAccountsFailoverInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    failoverType: Schema.optional(Schema.Literals(["Planned"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/failover",
      apiVersion: "2025-08-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type StorageAccountsFailoverInput =
  typeof StorageAccountsFailoverInput.Type;

// Output Schema
export const StorageAccountsFailoverOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type StorageAccountsFailoverOutput =
  typeof StorageAccountsFailoverOutput.Type;

// The operation
/**
 * A failover request can be triggered for a storage account in the event a primary endpoint becomes unavailable for any reason. The failover occurs from the storage account's primary cluster to the secondary cluster for RA-GRS accounts. The secondary cluster will become primary after failover and the account is converted to LRS. In the case of a Planned Failover, the primary and secondary clusters are swapped after failover and the account remains geo-replicated. Failover should continue to be used in the event of availability issues as Planned failover is only available while the primary and secondary endpoints are available. The primary use case of a Planned Failover is disaster recovery testing drills. This type of failover is invoked by setting FailoverType parameter to 'Planned'. Learn more about the failover options here- https://learn.microsoft.com/azure/storage/common/storage-disaster-recovery-guidance
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param failoverType - The parameter is set to 'Planned' to indicate whether a Planned failover is requested.
 */
export const StorageAccountsFailover = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: StorageAccountsFailoverInput,
    outputSchema: StorageAccountsFailoverOutput,
  }),
);
// Input Schema
export const StorageAccountsGetCustomerInitiatedMigrationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    migrationName: Schema.Literals(["default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/accountMigrations/{migrationName}",
      apiVersion: "2025-08-01",
    }),
  );
export type StorageAccountsGetCustomerInitiatedMigrationInput =
  typeof StorageAccountsGetCustomerInitiatedMigrationInput.Type;

// Output Schema
export const StorageAccountsGetCustomerInitiatedMigrationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => StorageAccountMigrationPropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type StorageAccountsGetCustomerInitiatedMigrationOutput =
  typeof StorageAccountsGetCustomerInitiatedMigrationOutput.Type;

// The operation
/**
 * Gets the status of the ongoing migration for the specified storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param migrationName - The name of the Storage Account Migration. It should always be 'default'
 */
export const StorageAccountsGetCustomerInitiatedMigration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageAccountsGetCustomerInitiatedMigrationInput,
    outputSchema: StorageAccountsGetCustomerInitiatedMigrationOutput,
  }));
// Input Schema
export const StorageAccountsGetPropertiesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(
      Schema.Literals(["geoReplicationStats", "blobRestoreStatus"]),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}",
      apiVersion: "2025-08-01",
    }),
  );
export type StorageAccountsGetPropertiesInput =
  typeof StorageAccountsGetPropertiesInput.Type;

// Output Schema
export const StorageAccountsGetPropertiesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => StorageAccountPropertiesSchema),
    ),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    kind: Schema.optional(Schema.suspend(() => KindSchema)),
    identity: Schema.optional(Schema.suspend(() => IdentitySchema)),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    placement: Schema.optional(Schema.suspend(() => PlacementSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type StorageAccountsGetPropertiesOutput =
  typeof StorageAccountsGetPropertiesOutput.Type;

// The operation
/**
 * Returns the properties for the specified storage account including but not limited to name, SKU name, location, and account status. The ListKeys operation should be used to retrieve storage keys.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param $expand - May be used to expand the properties within account's properties. By default, data is not included when fetching properties. Currently we only support geoReplicationStats and blobRestoreStatus.
 */
export const StorageAccountsGetProperties =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageAccountsGetPropertiesInput,
    outputSchema: StorageAccountsGetPropertiesOutput,
  }));
// Input Schema
export const StorageAccountsHierarchicalNamespaceMigrationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    requestType: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/hnsonmigration",
      apiVersion: "2025-08-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type StorageAccountsHierarchicalNamespaceMigrationInput =
  typeof StorageAccountsHierarchicalNamespaceMigrationInput.Type;

// Output Schema
export const StorageAccountsHierarchicalNamespaceMigrationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type StorageAccountsHierarchicalNamespaceMigrationOutput =
  typeof StorageAccountsHierarchicalNamespaceMigrationOutput.Type;

// The operation
/**
 * Live Migration of storage account to enable Hns
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param requestType - Required. Hierarchical namespace migration type can either be a hierarchical namespace validation request 'HnsOnValidationRequest' or a hydration request 'HnsOnHydrationRequest'. The validation request will validate the migration whereas the hydration request will migrate the account.
 */
export const StorageAccountsHierarchicalNamespaceMigration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageAccountsHierarchicalNamespaceMigrationInput,
    outputSchema: StorageAccountsHierarchicalNamespaceMigrationOutput,
  }));
// Input Schema
export const StorageAccountsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Storage/storageAccounts",
      apiVersion: "2025-08-01",
    }),
  );
export type StorageAccountsListInput = typeof StorageAccountsListInput.Type;

// Output Schema
export const StorageAccountsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => StorageAccountSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type StorageAccountsListOutput = typeof StorageAccountsListOutput.Type;

// The operation
/**
 * Lists all the storage accounts available under the subscription. Note that storage keys are not returned; use the ListKeys operation for this.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const StorageAccountsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: StorageAccountsListInput,
  outputSchema: StorageAccountsListOutput,
}));
// Input Schema
export const StorageAccountsListAccountSASInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    signedServices: Schema.suspend(() => ServicesSchema),
    signedResourceTypes: Schema.suspend(() => SignedResourceTypesSchema),
    signedPermission: Schema.suspend(() => PermissionsSchema),
    signedIp: Schema.optional(Schema.String),
    signedProtocol: Schema.optional(Schema.suspend(() => HttpProtocolSchema)),
    signedStart: Schema.optional(Schema.String),
    signedExpiry: Schema.String,
    keyToSign: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/listAccountSas",
      apiVersion: "2025-08-01",
    }),
  );
export type StorageAccountsListAccountSASInput =
  typeof StorageAccountsListAccountSASInput.Type;

// Output Schema
export const StorageAccountsListAccountSASOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountSasToken: Schema.optional(Schema.String),
  });
export type StorageAccountsListAccountSASOutput =
  typeof StorageAccountsListAccountSASOutput.Type;

// The operation
/**
 * List SAS credentials of a storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const StorageAccountsListAccountSAS =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageAccountsListAccountSASInput,
    outputSchema: StorageAccountsListAccountSASOutput,
  }));
// Input Schema
export const StorageAccountsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts",
      apiVersion: "2025-08-01",
    }),
  );
export type StorageAccountsListByResourceGroupInput =
  typeof StorageAccountsListByResourceGroupInput.Type;

// Output Schema
export const StorageAccountsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => StorageAccountSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type StorageAccountsListByResourceGroupOutput =
  typeof StorageAccountsListByResourceGroupOutput.Type;

// The operation
/**
 * Lists all the storage accounts available under the given resource group. Note that storage keys are not returned; use the ListKeys operation for this.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const StorageAccountsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageAccountsListByResourceGroupInput,
    outputSchema: StorageAccountsListByResourceGroupOutput,
  }));
// Input Schema
export const StorageAccountsListKeysInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.Literals(["kerb"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/listKeys",
      apiVersion: "2025-08-01",
    }),
  );
export type StorageAccountsListKeysInput =
  typeof StorageAccountsListKeysInput.Type;

// Output Schema
export const StorageAccountsListKeysOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keys: Schema.optional(
      Schema.Array(Schema.suspend(() => StorageAccountKeySchema)),
    ),
  });
export type StorageAccountsListKeysOutput =
  typeof StorageAccountsListKeysOutput.Type;

// The operation
/**
 * Lists the access keys or Kerberos keys (if active directory enabled) for the specified storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param $expand - Specifies type of the key to be listed. Possible value is kerb.
 */
export const StorageAccountsListKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: StorageAccountsListKeysInput,
    outputSchema: StorageAccountsListKeysOutput,
  }),
);
// Input Schema
export const StorageAccountsListServiceSASInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    canonicalizedResource: Schema.String,
    signedResource: Schema.optional(Schema.suspend(() => SignedResourceSchema)),
    signedPermission: Schema.optional(Schema.suspend(() => PermissionsSchema)),
    signedIp: Schema.optional(Schema.String),
    signedProtocol: Schema.optional(Schema.suspend(() => HttpProtocolSchema)),
    signedStart: Schema.optional(Schema.String),
    signedExpiry: Schema.optional(Schema.String),
    signedIdentifier: Schema.optional(Schema.String),
    startPk: Schema.optional(Schema.String),
    endPk: Schema.optional(Schema.String),
    startRk: Schema.optional(Schema.String),
    endRk: Schema.optional(Schema.String),
    keyToSign: Schema.optional(Schema.String),
    rscc: Schema.optional(Schema.String),
    rscd: Schema.optional(Schema.String),
    rsce: Schema.optional(Schema.String),
    rscl: Schema.optional(Schema.String),
    rsct: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/listServiceSas",
      apiVersion: "2025-08-01",
    }),
  );
export type StorageAccountsListServiceSASInput =
  typeof StorageAccountsListServiceSASInput.Type;

// Output Schema
export const StorageAccountsListServiceSASOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceSasToken: Schema.optional(Schema.String),
  });
export type StorageAccountsListServiceSASOutput =
  typeof StorageAccountsListServiceSASOutput.Type;

// The operation
/**
 * List service SAS credentials of a specific resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const StorageAccountsListServiceSAS =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageAccountsListServiceSASInput,
    outputSchema: StorageAccountsListServiceSASOutput,
  }));
// Input Schema
export const StorageAccountsRegenerateKeyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    keyName: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/regenerateKey",
      apiVersion: "2025-08-01",
    }),
  );
export type StorageAccountsRegenerateKeyInput =
  typeof StorageAccountsRegenerateKeyInput.Type;

// Output Schema
export const StorageAccountsRegenerateKeyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keys: Schema.optional(
      Schema.Array(Schema.suspend(() => StorageAccountKeySchema)),
    ),
  });
export type StorageAccountsRegenerateKeyOutput =
  typeof StorageAccountsRegenerateKeyOutput.Type;

// The operation
/**
 * Regenerates one of the access keys or Kerberos keys for the specified storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const StorageAccountsRegenerateKey =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageAccountsRegenerateKeyInput,
    outputSchema: StorageAccountsRegenerateKeyOutput,
  }));
// Input Schema
export const StorageAccountsRestoreBlobRangesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    timeToRestore: Schema.String,
    blobRanges: Schema.Array(Schema.suspend(() => BlobRestoreRangeSchema)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/restoreBlobRanges",
      apiVersion: "2025-08-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type StorageAccountsRestoreBlobRangesInput =
  typeof StorageAccountsRestoreBlobRangesInput.Type;

// Output Schema
export const StorageAccountsRestoreBlobRangesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(
      Schema.suspend(() => BlobRestoreProgressStatusSchema),
    ),
    failureReason: Schema.optional(Schema.String),
    restoreId: Schema.optional(Schema.String),
    parameters: Schema.optional(
      Schema.suspend(() => BlobRestoreParametersSchema),
    ),
  });
export type StorageAccountsRestoreBlobRangesOutput =
  typeof StorageAccountsRestoreBlobRangesOutput.Type;

// The operation
/**
 * Restore blobs in the specified blob ranges
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const StorageAccountsRestoreBlobRanges =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageAccountsRestoreBlobRangesInput,
    outputSchema: StorageAccountsRestoreBlobRangesOutput,
  }));
// Input Schema
export const StorageAccountsRevokeUserDelegationKeysInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/revokeUserDelegationKeys",
      apiVersion: "2025-08-01",
    }),
  );
export type StorageAccountsRevokeUserDelegationKeysInput =
  typeof StorageAccountsRevokeUserDelegationKeysInput.Type;

// Output Schema
export const StorageAccountsRevokeUserDelegationKeysOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type StorageAccountsRevokeUserDelegationKeysOutput =
  typeof StorageAccountsRevokeUserDelegationKeysOutput.Type;

// The operation
/**
 * Revoke user delegation keys.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const StorageAccountsRevokeUserDelegationKeys =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageAccountsRevokeUserDelegationKeysInput,
    outputSchema: StorageAccountsRevokeUserDelegationKeysOutput,
  }));
// Input Schema
export const StorageAccountsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    identity: Schema.optional(Schema.suspend(() => IdentitySchema)),
    properties: Schema.optional(
      Schema.suspend(() => StorageAccountPropertiesUpdateParametersSchema),
    ),
    kind: Schema.optional(Schema.suspend(() => KindSchema)),
    zones: Schema.optional(Schema.Array(Schema.String)),
    placement: Schema.optional(Schema.suspend(() => PlacementSchema)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}",
      apiVersion: "2025-08-01",
    }),
  );
export type StorageAccountsUpdateInput = typeof StorageAccountsUpdateInput.Type;

// Output Schema
export const StorageAccountsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => StorageAccountPropertiesSchema),
    ),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    kind: Schema.optional(Schema.suspend(() => KindSchema)),
    identity: Schema.optional(Schema.suspend(() => IdentitySchema)),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    placement: Schema.optional(Schema.suspend(() => PlacementSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type StorageAccountsUpdateOutput =
  typeof StorageAccountsUpdateOutput.Type;

// The operation
/**
 * The update operation can be used to update the SKU, encryption, access tier, or tags for a storage account. It can also be used to map the account to a custom domain. Only one custom domain is supported per storage account; the replacement/change of custom domain is not supported. In order to replace an old custom domain, the old value must be cleared/unregistered before a new value can be set. The update of multiple properties is supported. This call does not change the storage keys for the account. If you want to change the storage account keys, use the regenerate keys operation. The location and name of the storage account cannot be changed after creation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const StorageAccountsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: StorageAccountsUpdateInput,
    outputSchema: StorageAccountsUpdateOutput,
  }),
);
// Input Schema
export const StorageTaskAssignmentInstancesReportListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    storageTaskAssignmentName: Schema.String.pipe(T.PathParam()),
    $maxpagesize: Schema.optional(Schema.Number),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/storageTaskAssignments/{storageTaskAssignmentName}/reports",
      apiVersion: "2025-08-01",
    }),
  );
export type StorageTaskAssignmentInstancesReportListInput =
  typeof StorageTaskAssignmentInstancesReportListInput.Type;

// Output Schema
export const StorageTaskAssignmentInstancesReportListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => StorageTaskReportInstanceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type StorageTaskAssignmentInstancesReportListOutput =
  typeof StorageTaskAssignmentInstancesReportListOutput.Type;

// The operation
/**
 * Fetch the report summary of a single storage task assignment's instances
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param storageTaskAssignmentName - The name of the storage task assignment within the specified resource group. Storage task assignment names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param $maxpagesize - Optional, specifies the maximum number of storage task assignment instances to be included in the list response.
 * @param $filter - Optional. When specified, it can be used to query using reporting properties. See [Constructing Filter Strings](https://learn.microsoft.com/rest/api/storageservices/querying-tables-and-entities#constructing-filter-strings) for details.
 */
export const StorageTaskAssignmentInstancesReportList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageTaskAssignmentInstancesReportListInput,
    outputSchema: StorageTaskAssignmentInstancesReportListOutput,
  }));
// Input Schema
export const StorageTaskAssignmentsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    storageTaskAssignmentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => StorageTaskAssignmentPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/storageTaskAssignments/{storageTaskAssignmentName}",
      apiVersion: "2025-08-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type StorageTaskAssignmentsCreateInput =
  typeof StorageTaskAssignmentsCreateInput.Type;

// Output Schema
export const StorageTaskAssignmentsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => StorageTaskAssignmentPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type StorageTaskAssignmentsCreateOutput =
  typeof StorageTaskAssignmentsCreateOutput.Type;

// The operation
/**
 * Asynchronously creates a new storage task assignment sub-resource with the specified parameters. If a storage task assignment is already created and a subsequent create request is issued with different properties, the storage task assignment properties will be updated. If a storage task assignment is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param storageTaskAssignmentName - The name of the storage task assignment within the specified resource group. Storage task assignment names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const StorageTaskAssignmentsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageTaskAssignmentsCreateInput,
    outputSchema: StorageTaskAssignmentsCreateOutput,
  }));
// Input Schema
export const StorageTaskAssignmentsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    storageTaskAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/storageTaskAssignments/{storageTaskAssignmentName}",
      apiVersion: "2025-08-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type StorageTaskAssignmentsDeleteInput =
  typeof StorageTaskAssignmentsDeleteInput.Type;

// Output Schema
export const StorageTaskAssignmentsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type StorageTaskAssignmentsDeleteOutput =
  typeof StorageTaskAssignmentsDeleteOutput.Type;

// The operation
/**
 * Delete the storage task assignment sub-resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param storageTaskAssignmentName - The name of the storage task assignment within the specified resource group. Storage task assignment names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const StorageTaskAssignmentsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageTaskAssignmentsDeleteInput,
    outputSchema: StorageTaskAssignmentsDeleteOutput,
  }));
// Input Schema
export const StorageTaskAssignmentsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    storageTaskAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/storageTaskAssignments/{storageTaskAssignmentName}",
      apiVersion: "2025-08-01",
    }),
  );
export type StorageTaskAssignmentsGetInput =
  typeof StorageTaskAssignmentsGetInput.Type;

// Output Schema
export const StorageTaskAssignmentsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => StorageTaskAssignmentPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type StorageTaskAssignmentsGetOutput =
  typeof StorageTaskAssignmentsGetOutput.Type;

// The operation
/**
 * Get the storage task assignment properties
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param storageTaskAssignmentName - The name of the storage task assignment within the specified resource group. Storage task assignment names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const StorageTaskAssignmentsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: StorageTaskAssignmentsGetInput,
    outputSchema: StorageTaskAssignmentsGetOutput,
  }),
);
// Input Schema
export const StorageTaskAssignmentsInstancesReportListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    $maxpagesize: Schema.optional(Schema.Number),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/reports",
      apiVersion: "2025-08-01",
    }),
  );
export type StorageTaskAssignmentsInstancesReportListInput =
  typeof StorageTaskAssignmentsInstancesReportListInput.Type;

// Output Schema
export const StorageTaskAssignmentsInstancesReportListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => StorageTaskReportInstanceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type StorageTaskAssignmentsInstancesReportListOutput =
  typeof StorageTaskAssignmentsInstancesReportListOutput.Type;

// The operation
/**
 * Fetch the report summary of all the storage task assignments and instances in an account
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param $maxpagesize - Optional, specifies the maximum number of storage task assignment instances to be included in the list response.
 * @param $filter - Optional. When specified, it can be used to query using reporting properties. See [Constructing Filter Strings](https://learn.microsoft.com/rest/api/storageservices/querying-tables-and-entities#constructing-filter-strings) for details.
 */
export const StorageTaskAssignmentsInstancesReportList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageTaskAssignmentsInstancesReportListInput,
    outputSchema: StorageTaskAssignmentsInstancesReportListOutput,
  }));
// Input Schema
export const StorageTaskAssignmentsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/storageTaskAssignments",
      apiVersion: "2025-08-01",
    }),
  );
export type StorageTaskAssignmentsListInput =
  typeof StorageTaskAssignmentsListInput.Type;

// Output Schema
export const StorageTaskAssignmentsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => StorageTaskAssignmentSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type StorageTaskAssignmentsListOutput =
  typeof StorageTaskAssignmentsListOutput.Type;

// The operation
/**
 * List all the storage task assignments in an account
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param $top - Optional, specifies the maximum number of storage task assignment Ids to be included in the list response.
 */
export const StorageTaskAssignmentsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: StorageTaskAssignmentsListInput,
    outputSchema: StorageTaskAssignmentsListOutput,
  }),
);
// Input Schema
export const StorageTaskAssignmentsStopAssignmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    storageTaskAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/storageTaskAssignments/{storageTaskAssignmentName}/stopAssignment",
      apiVersion: "2025-08-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type StorageTaskAssignmentsStopAssignmentInput =
  typeof StorageTaskAssignmentsStopAssignmentInput.Type;

// Output Schema
export const StorageTaskAssignmentsStopAssignmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type StorageTaskAssignmentsStopAssignmentOutput =
  typeof StorageTaskAssignmentsStopAssignmentOutput.Type;

// The operation
/**
 * Stops any active running storage action for the storage task assignment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param storageTaskAssignmentName - The name of the storage task assignment within the specified resource group. Storage task assignment names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const StorageTaskAssignmentsStopAssignment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageTaskAssignmentsStopAssignmentInput,
    outputSchema: StorageTaskAssignmentsStopAssignmentOutput,
  }));
// Input Schema
export const StorageTaskAssignmentsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    storageTaskAssignmentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => StorageTaskAssignmentUpdatePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/storageTaskAssignments/{storageTaskAssignmentName}",
      apiVersion: "2025-08-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type StorageTaskAssignmentsUpdateInput =
  typeof StorageTaskAssignmentsUpdateInput.Type;

// Output Schema
export const StorageTaskAssignmentsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => StorageTaskAssignmentPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type StorageTaskAssignmentsUpdateOutput =
  typeof StorageTaskAssignmentsUpdateOutput.Type;

// The operation
/**
 * Update storage task assignment properties
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param storageTaskAssignmentName - The name of the storage task assignment within the specified resource group. Storage task assignment names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const StorageTaskAssignmentsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageTaskAssignmentsUpdateInput,
    outputSchema: StorageTaskAssignmentsUpdateOutput,
  }));
// Input Schema
export const TableCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  tableName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(Schema.suspend(() => TablePropertiesSchema)),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/tableServices/default/tables/{tableName}",
    apiVersion: "2025-08-01",
  }),
);
export type TableCreateInput = typeof TableCreateInput.Type;

// Output Schema
export const TableCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => TablePropertiesSchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type TableCreateOutput = typeof TableCreateOutput.Type;

// The operation
/**
 * Creates a new table with the specified table name, under the specified account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param tableName - A table name must be unique within a storage account and must be between 3 and 63 characters.The name must comprise of only alphanumeric characters and it cannot begin with a numeric character.
 */
export const TableCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TableCreateInput,
  outputSchema: TableCreateOutput,
}));
// Input Schema
export const TableDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  tableName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/tableServices/default/tables/{tableName}",
    apiVersion: "2025-08-01",
  }),
);
export type TableDeleteInput = typeof TableDeleteInput.Type;

// Output Schema
export const TableDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type TableDeleteOutput = typeof TableDeleteOutput.Type;

// The operation
/**
 * Deletes the table with the specified table name, under the specified account if it exists.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param tableName - A table name must be unique within a storage account and must be between 3 and 63 characters.The name must comprise of only alphanumeric characters and it cannot begin with a numeric character.
 */
export const TableDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TableDeleteInput,
  outputSchema: TableDeleteOutput,
}));
// Input Schema
export const TableGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  tableName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/tableServices/default/tables/{tableName}",
    apiVersion: "2025-08-01",
  }),
);
export type TableGetInput = typeof TableGetInput.Type;

// Output Schema
export const TableGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => TablePropertiesSchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type TableGetOutput = typeof TableGetOutput.Type;

// The operation
/**
 * Gets the table with the specified table name, under the specified account if it exists.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param tableName - A table name must be unique within a storage account and must be between 3 and 63 characters.The name must comprise of only alphanumeric characters and it cannot begin with a numeric character.
 */
export const TableGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TableGetInput,
  outputSchema: TableGetOutput,
}));
// Input Schema
export const TableListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/tableServices/default/tables",
    apiVersion: "2025-08-01",
  }),
);
export type TableListInput = typeof TableListInput.Type;

// Output Schema
export const TableListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(Schema.suspend(() => TableSchema)),
  nextLink: Schema.optional(Schema.String),
});
export type TableListOutput = typeof TableListOutput.Type;

// The operation
/**
 * Gets a list of all the tables under the specified storage account
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const TableList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TableListInput,
  outputSchema: TableListOutput,
}));
// Input Schema
export const TableServicesGetServicePropertiesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/tableServices/default",
      apiVersion: "2025-08-01",
    }),
  );
export type TableServicesGetServicePropertiesInput =
  typeof TableServicesGetServicePropertiesInput.Type;

// Output Schema
export const TableServicesGetServicePropertiesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => TableServicePropertiesPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type TableServicesGetServicePropertiesOutput =
  typeof TableServicesGetServicePropertiesOutput.Type;

// The operation
/**
 * Gets the properties of a storage account’s Table service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const TableServicesGetServiceProperties =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TableServicesGetServicePropertiesInput,
    outputSchema: TableServicesGetServicePropertiesOutput,
  }));
// Input Schema
export const TableServicesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/tableServices",
    apiVersion: "2025-08-01",
  }),
);
export type TableServicesListInput = typeof TableServicesListInput.Type;

// Output Schema
export const TableServicesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => TableServicePropertiesSchema)),
    ),
  });
export type TableServicesListOutput = typeof TableServicesListOutput.Type;

// The operation
/**
 * List all table services for the storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const TableServicesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TableServicesListInput,
  outputSchema: TableServicesListOutput,
}));
// Input Schema
export const TableServicesSetServicePropertiesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => TableServicePropertiesPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/tableServices/default",
      apiVersion: "2025-08-01",
    }),
  );
export type TableServicesSetServicePropertiesInput =
  typeof TableServicesSetServicePropertiesInput.Type;

// Output Schema
export const TableServicesSetServicePropertiesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => TableServicePropertiesPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type TableServicesSetServicePropertiesOutput =
  typeof TableServicesSetServicePropertiesOutput.Type;

// The operation
/**
 * Sets the properties of a storage account’s Table service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const TableServicesSetServiceProperties =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TableServicesSetServicePropertiesInput,
    outputSchema: TableServicesSetServicePropertiesOutput,
  }));
// Input Schema
export const TableUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  tableName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(Schema.suspend(() => TablePropertiesSchema)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/tableServices/default/tables/{tableName}",
    apiVersion: "2025-08-01",
  }),
);
export type TableUpdateInput = typeof TableUpdateInput.Type;

// Output Schema
export const TableUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => TablePropertiesSchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type TableUpdateOutput = typeof TableUpdateOutput.Type;

// The operation
/**
 * Creates a new table with the specified table name, under the specified account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param tableName - A table name must be unique within a storage account and must be between 3 and 63 characters.The name must comprise of only alphanumeric characters and it cannot begin with a numeric character.
 */
export const TableUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TableUpdateInput,
  outputSchema: TableUpdateOutput,
}));
// Input Schema
export const UsagesListByLocationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Storage/locations/{location}/usages",
      apiVersion: "2025-08-01",
    }),
  );
export type UsagesListByLocationInput = typeof UsagesListByLocationInput.Type;

// Output Schema
export const UsagesListByLocationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(Schema.suspend(() => UsageSchema))),
    nextLink: Schema.optional(Schema.String),
  });
export type UsagesListByLocationOutput = typeof UsagesListByLocationOutput.Type;

// The operation
/**
 * Gets the current usage count and the limit for the resources of the location under the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const UsagesListByLocation = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UsagesListByLocationInput,
    outputSchema: UsagesListByLocationOutput,
  }),
);
