/**
 * Azure Cognitiveservices API
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
const AccountSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
const DeploymentModelSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  publisher: Schema.optional(Schema.String),
  format: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  version: Schema.optional(Schema.String),
  source: Schema.optional(Schema.String),
  sourceAccount: Schema.optional(Schema.String),
  callRateLimit: Schema.optional(Schema.suspend(() => CallRateLimitSchema)),
});
const CallRateLimitSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.optional(Schema.Number),
  renewalPeriod: Schema.optional(Schema.Number),
  rules: Schema.optional(
    Schema.Array(Schema.suspend(() => ThrottlingRuleSchema)),
  ),
});
const ThrottlingRuleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  key: Schema.optional(Schema.String),
  renewalPeriod: Schema.optional(Schema.Number),
  count: Schema.optional(Schema.Number),
  minCount: Schema.optional(Schema.Number),
  dynamicThrottlingEnabled: Schema.optional(Schema.Boolean),
  matchPatterns: Schema.optional(
    Schema.Array(Schema.suspend(() => RequestMatchPatternSchema)),
  ),
});
const RequestMatchPatternSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  path: Schema.optional(Schema.String),
  method: Schema.optional(Schema.String),
});
const ModelCapacityCalculatorWorkloadSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestPerMinute: Schema.optional(Schema.Number),
    requestParameters: Schema.optional(
      Schema.suspend(() => ModelCapacityCalculatorWorkloadRequestParamSchema),
    ),
  });
const ModelCapacityCalculatorWorkloadRequestParamSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    avgPromptTokens: Schema.optional(Schema.Number),
    avgGeneratedTokens: Schema.optional(Schema.Number),
  });
const CalculateModelCapacityResultEstimatedCapacitySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Number),
    deployableValue: Schema.optional(Schema.Number),
  });
const CommitmentPlanSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const SkuAvailabilitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  skuName: Schema.optional(Schema.String),
  skuAvailable: Schema.optional(Schema.Boolean),
  reason: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
});
const CommitmentTierSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  skuName: Schema.optional(Schema.String),
  hostingModel: Schema.optional(Schema.suspend(() => HostingModelSchema)),
  planType: Schema.optional(Schema.String),
  tier: Schema.optional(Schema.String),
  maxCount: Schema.optional(Schema.Number),
  quota: Schema.optional(Schema.suspend(() => CommitmentQuotaSchema)),
  cost: Schema.optional(Schema.suspend(() => CommitmentCostSchema)),
});
const HostingModelSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Web",
  "ConnectedContainer",
  "DisconnectedContainer",
  "ProvisionedWeb",
]);
const CommitmentQuotaSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  quantity: Schema.optional(Schema.Number),
  unit: Schema.optional(Schema.String),
});
const CommitmentCostSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  commitmentMeterId: Schema.optional(Schema.String),
  overageMeterId: Schema.optional(Schema.String),
});
const ModelCapacityListResultValueItemSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const ModelSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  model: Schema.optional(Schema.suspend(() => AccountModelSchema)),
  kind: Schema.optional(Schema.String),
  skuName: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
});
const AccountModelSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  publisher: Schema.optional(Schema.String),
  format: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  version: Schema.optional(Schema.String),
  source: Schema.optional(Schema.String),
  sourceAccount: Schema.optional(Schema.String),
  callRateLimit: Schema.optional(Schema.suspend(() => CallRateLimitSchema)),
});
const RaiContentFilterSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const RaiContentFilterPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    isMultiLevelFilter: Schema.optional(Schema.Boolean),
    source: Schema.optional(Schema.suspend(() => RaiPolicyContentSourceSchema)),
  });
const RaiPolicyContentSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Prompt",
    "Completion",
    "PreToolCall",
    "PostToolCall",
    "PreRun",
    "PostRun",
  ]);
const AccountPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
  endpoint: Schema.optional(Schema.String),
  internalId: Schema.optional(Schema.String),
  capabilities: Schema.optional(
    Schema.Array(Schema.suspend(() => SkuCapabilitySchema)),
  ),
  isMigrated: Schema.optional(Schema.Boolean),
  migrationToken: Schema.optional(Schema.String),
  skuChangeInfo: Schema.optional(Schema.suspend(() => SkuChangeInfoSchema)),
  customSubDomainName: Schema.optional(Schema.String),
  networkAcls: Schema.optional(Schema.suspend(() => NetworkRuleSetSchema)),
  encryption: Schema.optional(Schema.suspend(() => EncryptionSchema)),
  userOwnedStorage: Schema.optional(
    Schema.Array(Schema.suspend(() => UserOwnedStorageSchema)),
  ),
  amlWorkspace: Schema.optional(
    Schema.suspend(() => UserOwnedAmlWorkspaceSchema),
  ),
  privateEndpointConnections: Schema.optional(
    Schema.Array(Schema.suspend(() => PrivateEndpointConnectionSchema)),
  ),
  publicNetworkAccess: Schema.optional(
    Schema.suspend(() => PublicNetworkAccessSchema),
  ),
  apiProperties: Schema.optional(Schema.suspend(() => ApiPropertiesSchema)),
  dateCreated: Schema.optional(Schema.String),
  callRateLimit: Schema.optional(Schema.suspend(() => CallRateLimitSchema)),
  dynamicThrottlingEnabled: Schema.optional(Schema.Boolean),
  storedCompletionsDisabled: Schema.optional(Schema.Boolean),
  quotaLimit: Schema.optional(Schema.suspend(() => QuotaLimitSchema)),
  restrictOutboundNetworkAccess: Schema.optional(Schema.Boolean),
  allowedFqdnList: Schema.optional(Schema.Array(Schema.String)),
  disableLocalAuth: Schema.optional(Schema.Boolean),
  endpoints: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  restore: Schema.optional(Schema.Boolean),
  deletionDate: Schema.optional(Schema.String),
  scheduledPurgeDate: Schema.optional(Schema.String),
  locations: Schema.optional(Schema.suspend(() => MultiRegionSettingsSchema)),
  commitmentPlanAssociations: Schema.optional(
    Schema.Array(Schema.suspend(() => CommitmentPlanAssociationSchema)),
  ),
  abusePenalty: Schema.optional(Schema.suspend(() => AbusePenaltySchema)),
  raiMonitorConfig: Schema.optional(
    Schema.suspend(() => RaiMonitorConfigSchema),
  ),
  networkInjections: Schema.optional(
    Schema.Array(Schema.suspend(() => NetworkInjectionSchema)),
  ),
  allowProjectManagement: Schema.optional(Schema.Boolean),
  defaultProject: Schema.optional(Schema.String),
  associatedProjects: Schema.optional(Schema.Array(Schema.String)),
});
const ProvisioningStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Accepted",
  "Creating",
  "Deleting",
  "Moving",
  "Failed",
  "Succeeded",
  "Canceled",
  "ResolvingDNS",
]);
const SkuCapabilitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
});
const SkuChangeInfoSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  countOfDowngrades: Schema.optional(Schema.Number),
  countOfUpgradesAfterDowngrades: Schema.optional(Schema.Number),
  lastChangeDate: Schema.optional(Schema.String),
});
const NetworkRuleSetSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  defaultAction: Schema.optional(Schema.suspend(() => NetworkRuleActionSchema)),
  bypass: Schema.optional(Schema.suspend(() => ByPassSelectionSchema)),
  ipRules: Schema.optional(Schema.Array(Schema.suspend(() => IpRuleSchema))),
  virtualNetworkRules: Schema.optional(
    Schema.Array(Schema.suspend(() => VirtualNetworkRuleSchema)),
  ),
});
const NetworkRuleActionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Allow",
  "Deny",
]);
const ByPassSelectionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "None",
  "AzureServices",
]);
const IpRuleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.String,
});
const VirtualNetworkRuleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  state: Schema.optional(Schema.String),
  ignoreMissingVnetServiceEndpoint: Schema.optional(Schema.Boolean),
});
const EncryptionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  keyVaultProperties: Schema.optional(
    Schema.suspend(() => KeyVaultPropertiesSchema),
  ),
  keySource: Schema.optional(
    Schema.Literals(["Microsoft.CognitiveServices", "Microsoft.KeyVault"]),
  ),
});
const KeyVaultPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  keyName: Schema.optional(Schema.String),
  keyVersion: Schema.optional(Schema.String),
  keyVaultUri: Schema.optional(Schema.String),
  identityClientId: Schema.optional(Schema.String),
});
const UserOwnedStorageSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceId: Schema.optional(Schema.String),
  identityClientId: Schema.optional(Schema.String),
});
const UserOwnedAmlWorkspaceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceId: Schema.optional(Schema.String),
  identityClientId: Schema.optional(Schema.String),
});
const PrivateEndpointConnectionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const PublicNetworkAccessSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Enabled",
  "Disabled",
]);
const ApiPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  qnaRuntimeEndpoint: Schema.optional(Schema.String),
  qnaAzureSearchEndpointKey: Schema.optional(Schema.String),
  qnaAzureSearchEndpointId: Schema.optional(Schema.String),
  statisticsEnabled: Schema.optional(Schema.Boolean),
  eventHubConnectionString: Schema.optional(Schema.String),
  storageAccountConnectionString: Schema.optional(Schema.String),
  aadClientId: Schema.optional(Schema.String),
  aadTenantId: Schema.optional(Schema.String),
  superUser: Schema.optional(Schema.String),
  websiteName: Schema.optional(Schema.String),
});
const QuotaLimitSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.optional(Schema.Number),
  renewalPeriod: Schema.optional(Schema.Number),
  rules: Schema.optional(
    Schema.Array(Schema.suspend(() => ThrottlingRuleSchema)),
  ),
});
const MultiRegionSettingsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  routingMethod: Schema.optional(Schema.suspend(() => RoutingMethodsSchema)),
  regions: Schema.optional(
    Schema.Array(Schema.suspend(() => RegionSettingSchema)),
  ),
});
const RoutingMethodsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Priority",
  "Weighted",
  "Performance",
]);
const RegionSettingSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  value: Schema.optional(Schema.Number),
  customsubdomain: Schema.optional(Schema.String),
});
const CommitmentPlanAssociationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    commitmentPlanId: Schema.optional(Schema.String),
    commitmentPlanLocation: Schema.optional(Schema.String),
  });
const AbusePenaltySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  action: Schema.optional(Schema.suspend(() => AbusePenaltyActionSchema)),
  rateLimitPercentage: Schema.optional(Schema.Number),
  expiration: Schema.optional(Schema.String),
});
const AbusePenaltyActionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Throttle",
  "Block",
]);
const RaiMonitorConfigSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  adxStorageResourceId: Schema.optional(Schema.String),
  identityClientId: Schema.optional(Schema.String),
});
const NetworkInjectionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  scenario: Schema.optional(Schema.suspend(() => ScenarioTypeSchema)),
  subnetArmId: Schema.optional(Schema.String),
  useMicrosoftManagedNetwork: Schema.optional(Schema.Boolean),
});
const ScenarioTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "none",
  "agent",
]);
const SkuSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  tier: Schema.optional(Schema.suspend(() => SkuTierSchema)),
  size: Schema.optional(Schema.String),
  family: Schema.optional(Schema.String),
  capacity: Schema.optional(Schema.Number),
});
const SkuTierSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Free",
  "Basic",
  "Standard",
  "Premium",
  "Enterprise",
]);
const IdentitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.suspend(() => ResourceIdentityTypeSchema)),
  tenantId: Schema.optional(Schema.String),
  principalId: Schema.optional(Schema.String),
  userAssignedIdentities: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => UserAssignedIdentitySchema),
    ),
  ),
});
const ResourceIdentityTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "None",
  "SystemAssigned",
  "UserAssigned",
  "SystemAssigned, UserAssigned",
]);
const UserAssignedIdentitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  principalId: Schema.optional(Schema.String),
  clientId: Schema.optional(Schema.String),
});
const UsageSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  unit: Schema.optional(Schema.suspend(() => UnitTypeSchema)),
  name: Schema.optional(Schema.suspend(() => MetricNameSchema)),
  quotaPeriod: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  currentValue: Schema.optional(Schema.Number),
  nextResetTime: Schema.optional(Schema.String),
  status: Schema.optional(Schema.suspend(() => QuotaUsageStatusSchema)),
});
const UnitTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Count",
  "Bytes",
  "Seconds",
  "Percent",
  "CountPerSecond",
  "BytesPerSecond",
  "Milliseconds",
]);
const MetricNameSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.String),
  localizedValue: Schema.optional(Schema.String),
});
const QuotaUsageStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Included",
  "Blocked",
  "InOverage",
  "Unknown",
]);
const QuotaTierSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const QuotaTierPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  currentTierName: Schema.optional(Schema.String),
  tierUpgradePolicy: Schema.optional(
    Schema.suspend(() => TierUpgradePolicySchema),
  ),
  assignmentDate: Schema.optional(Schema.String),
  tierUpgradeEligibilityInfo: Schema.optional(
    Schema.suspend(() => QuotaTierUpgradeEligibilityInfoSchema),
  ),
});
const TierUpgradePolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "OnceUpgradeIsAvailable",
  "NoAutoUpgrade",
]);
const QuotaTierUpgradeEligibilityInfoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextTierName: Schema.optional(Schema.NullOr(Schema.String)),
    upgradeAvailabilityStatus: Schema.optional(
      Schema.suspend(() => UpgradeAvailabilityStatusSchema),
    ),
    upgradeApplicableDate: Schema.optional(Schema.NullOr(Schema.String)),
    upgradeUnavailabilityReason: Schema.optional(Schema.NullOr(Schema.String)),
  });
const UpgradeAvailabilityStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Available", "NotAvailable"]);
const RaiExternalSafetyProviderSchemaSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const RaiExternalSafetyProviderSchemaPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    providerId: Schema.optional(Schema.String),
    providerName: Schema.optional(Schema.String),
    mode: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    secretName: Schema.optional(Schema.String),
    managedIdentity: Schema.optional(Schema.String),
    keyVaultUri: Schema.optional(Schema.String),
    createdAt: Schema.optional(Schema.String),
    lastModifiedAt: Schema.optional(Schema.String),
  });
const RaiPolicyPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.suspend(() => RaiPolicyTypeSchema)),
  mode: Schema.optional(Schema.suspend(() => RaiPolicyModeSchema)),
  basePolicyName: Schema.optional(Schema.String),
  contentFilters: Schema.optional(
    Schema.Array(Schema.suspend(() => RaiPolicyContentFilterSchema)),
  ),
  customBlocklists: Schema.optional(
    Schema.Array(Schema.suspend(() => CustomBlocklistConfigSchema)),
  ),
  safetyProviders: Schema.optional(
    Schema.Array(Schema.suspend(() => SafetyProviderConfigSchema)),
  ),
});
const RaiPolicyTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "UserManaged",
  "SystemManaged",
]);
const RaiPolicyModeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Default",
  "Deferred",
  "Blocking",
  "Asynchronous_filter",
]);
const RaiPolicyContentFilterSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  enabled: Schema.optional(Schema.Boolean),
  severityThreshold: Schema.optional(Schema.suspend(() => ContentLevelSchema)),
  blocking: Schema.optional(Schema.Boolean),
  source: Schema.optional(Schema.suspend(() => RaiPolicyContentSourceSchema)),
  action: Schema.optional(Schema.suspend(() => RaiActionTypeSchema)),
});
const ContentLevelSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Low",
  "Medium",
  "High",
]);
const RaiActionTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "None",
  "BLOCKING",
  "ANNOTATING",
  "HITL",
  "RETRY",
]);
const CustomBlocklistConfigSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  blocklistName: Schema.optional(Schema.String),
  blocking: Schema.optional(Schema.Boolean),
});
const SafetyProviderConfigSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  safetyProviderName: Schema.optional(Schema.String),
  blocking: Schema.optional(Schema.Boolean),
});
const ResourceSkuSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceType: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  tier: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  locations: Schema.optional(Schema.Array(Schema.String)),
  restrictions: Schema.optional(
    Schema.Array(Schema.suspend(() => ResourceSkuRestrictionsSchema)),
  ),
});
const ResourceSkuRestrictionsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    type: Schema.optional(
      Schema.suspend(() => ResourceSkuRestrictionsTypeSchema),
    ),
    values: Schema.optional(Schema.Array(Schema.String)),
    restrictionInfo: Schema.optional(
      Schema.suspend(() => ResourceSkuRestrictionInfoSchema),
    ),
    reasonCode: Schema.optional(
      Schema.suspend(() => ResourceSkuRestrictionsReasonCodeSchema),
    ),
  },
);
const ResourceSkuRestrictionsTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Location", "Zone"]);
const ResourceSkuRestrictionInfoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locations: Schema.optional(Schema.Array(Schema.String)),
    zones: Schema.optional(Schema.Array(Schema.String)),
  });
const ResourceSkuRestrictionsReasonCodeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "QuotaId",
    "NotAvailableForSubscription",
  ]);
const CapabilityHostSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const CapabilityHostPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.NullOr(Schema.String)),
    tags: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    ),
  });
const CommitmentPlanPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.suspend(() => CommitmentPlanProvisioningStateSchema),
    ),
    commitmentPlanGuid: Schema.optional(Schema.String),
    hostingModel: Schema.optional(Schema.suspend(() => HostingModelSchema)),
    planType: Schema.optional(Schema.String),
    current: Schema.optional(Schema.suspend(() => CommitmentPeriodSchema)),
    autoRenew: Schema.optional(Schema.Boolean),
    next: Schema.optional(Schema.suspend(() => CommitmentPeriodSchema)),
    last: Schema.optional(Schema.suspend(() => CommitmentPeriodSchema)),
    provisioningIssues: Schema.optional(Schema.Array(Schema.String)),
  });
const CommitmentPlanProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Accepted",
    "Creating",
    "Deleting",
    "Moving",
    "Failed",
    "Succeeded",
    "Canceled",
  ]);
const CommitmentPeriodSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tier: Schema.optional(Schema.String),
  count: Schema.optional(Schema.Number),
  quota: Schema.optional(Schema.suspend(() => CommitmentQuotaSchema)),
  startDate: Schema.optional(Schema.String),
  endDate: Schema.optional(Schema.String),
});
const ConnectionPropertiesV2BasicResourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const ConnectionPropertiesV2Schema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  authType: Schema.suspend(() => ConnectionAuthTypeSchema),
  category: Schema.optional(Schema.suspend(() => ConnectionCategorySchema)),
  createdByWorkspaceArmId: Schema.optional(Schema.String),
  error: Schema.optional(Schema.String),
  expiryTime: Schema.optional(Schema.String),
  group: Schema.optional(Schema.suspend(() => ConnectionGroupSchema)),
  isSharedToAll: Schema.optional(Schema.Boolean),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  peRequirement: Schema.optional(
    Schema.suspend(() => ManagedPERequirementSchema),
  ),
  peStatus: Schema.optional(Schema.suspend(() => ManagedPEStatusSchema)),
  sharedUserList: Schema.optional(Schema.Array(Schema.String)),
  target: Schema.optional(Schema.String),
  useWorkspaceManagedIdentity: Schema.optional(Schema.Boolean),
});
const ConnectionAuthTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "PAT",
  "ManagedIdentity",
  "UsernamePassword",
  "None",
  "SAS",
  "AccountKey",
  "ServicePrincipal",
  "AccessKey",
  "ApiKey",
  "CustomKeys",
  "OAuth2",
  "AAD",
  "DelegatedSAS",
  "ProjectManagedIdentity",
  "AccountManagedIdentity",
  "UserEntraToken",
  "AgentUserImpersonation",
  "AgenticIdentityToken",
  "AgenticUser",
]);
const ConnectionCategorySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "PythonFeed",
  "ContainerRegistry",
  "Git",
  "S3",
  "Snowflake",
  "AzureKeyVault",
  "AzureSqlDb",
  "AzureSynapseAnalytics",
  "AzureMySqlDb",
  "AzurePostgresDb",
  "ADLSGen2",
  "AzureContainerAppEnvironment",
  "Redis",
  "ApiKey",
  "AzureOpenAI",
  "AIServices",
  "CognitiveSearch",
  "CognitiveService",
  "CustomKeys",
  "AzureBlob",
  "AzureStorageAccount",
  "AzureOneLake",
  "CosmosDb",
  "CosmosDbMongoDbApi",
  "AzureDataExplorer",
  "AzureMariaDb",
  "AzureDatabricksDeltaLake",
  "AzureSqlMi",
  "AzureTableStorage",
  "AmazonRdsForOracle",
  "AmazonRdsForSqlServer",
  "AmazonRedshift",
  "Db2",
  "Drill",
  "GoogleBigQuery",
  "Greenplum",
  "Hbase",
  "Hive",
  "Impala",
  "Informix",
  "MariaDb",
  "MicrosoftAccess",
  "MySql",
  "Netezza",
  "Oracle",
  "Phoenix",
  "PostgreSql",
  "Presto",
  "SapOpenHub",
  "SapBw",
  "SapHana",
  "SapTable",
  "Spark",
  "SqlServer",
  "Sybase",
  "Teradata",
  "Vertica",
  "Pinecone",
  "Databricks",
  "Cassandra",
  "Couchbase",
  "MongoDbV2",
  "MongoDbAtlas",
  "AmazonS3Compatible",
  "FileServer",
  "FtpServer",
  "GoogleCloudStorage",
  "Hdfs",
  "OracleCloudStorage",
  "Sftp",
  "GenericHttp",
  "ODataRest",
  "Odbc",
  "GenericRest",
  "RemoteTool",
  "AmazonMws",
  "Concur",
  "Dynamics",
  "DynamicsAx",
  "DynamicsCrm",
  "GoogleAdWords",
  "Hubspot",
  "Jira",
  "Magento",
  "Marketo",
  "Office365",
  "Eloqua",
  "Responsys",
  "OracleServiceCloud",
  "PayPal",
  "QuickBooks",
  "Salesforce",
  "SalesforceServiceCloud",
  "SalesforceMarketingCloud",
  "SapCloudForCustomer",
  "SapEcc",
  "ServiceNow",
  "SharePointOnlineList",
  "Shopify",
  "Square",
  "WebTable",
  "Xero",
  "Zoho",
  "GenericContainerRegistry",
  "Elasticsearch",
  "AppInsights",
  "AppConfig",
  "OpenAI",
  "Serp",
  "BingLLMSearch",
  "Serverless",
  "ManagedOnlineEndpoint",
  "ApiManagement",
  "ModelGateway",
  "GroundingWithBingSearch",
  "GroundingWithCustomSearch",
  "Sharepoint",
  "MicrosoftFabric",
  "PowerPlatformEnvironment",
  "RemoteA2A",
]);
const ConnectionGroupSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Azure",
  "AzureAI",
  "Database",
  "NoSQL",
  "File",
  "GenericProtocol",
  "ServicesAndApps",
]);
const ManagedPERequirementSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Required",
  "NotRequired",
  "NotApplicable",
]);
const ManagedPEStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Inactive",
  "Active",
  "NotApplicable",
]);
const DefenderForAISettingSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const DefenderForAISettingPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(
      Schema.suspend(() => DefenderForAISettingStateSchema),
    ),
  });
const DefenderForAISettingStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Disabled", "Enabled"]);
const DeploymentSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const DeploymentPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provisioningState: Schema.optional(
    Schema.suspend(() => DeploymentProvisioningStateSchema),
  ),
  model: Schema.optional(Schema.suspend(() => DeploymentModelSchema)),
  scaleSettings: Schema.optional(
    Schema.suspend(() => DeploymentScaleSettingsSchema),
  ),
  capabilities: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  raiPolicyName: Schema.optional(Schema.String),
  callRateLimit: Schema.optional(Schema.suspend(() => CallRateLimitSchema)),
  rateLimits: Schema.optional(
    Schema.Array(Schema.suspend(() => ThrottlingRuleSchema)),
  ),
  versionUpgradeOption: Schema.optional(
    Schema.suspend(() => DeploymentModelVersionUpgradeOptionSchema),
  ),
  dynamicThrottlingEnabled: Schema.optional(Schema.Boolean),
  currentCapacity: Schema.optional(Schema.Number),
  capacitySettings: Schema.optional(
    Schema.suspend(() => DeploymentCapacitySettingsSchema),
  ),
  parentDeploymentName: Schema.optional(Schema.String),
  spilloverDeploymentName: Schema.optional(Schema.String),
  serviceTier: Schema.optional(Schema.suspend(() => ServiceTierSchema)),
  deploymentState: Schema.optional(Schema.suspend(() => DeploymentStateSchema)),
  routing: Schema.optional(Schema.suspend(() => DeploymentRoutingSchema)),
});
const DeploymentProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Accepted",
    "Creating",
    "Deleting",
    "Moving",
    "Failed",
    "Succeeded",
    "Disabled",
    "Canceled",
  ]);
const DeploymentScaleSettingsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    scaleType: Schema.optional(Schema.suspend(() => DeploymentScaleTypeSchema)),
    capacity: Schema.optional(Schema.Number),
    activeCapacity: Schema.optional(Schema.Number),
  },
);
const DeploymentScaleTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Standard",
  "Manual",
]);
const DeploymentModelVersionUpgradeOptionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "OnceNewDefaultVersionAvailable",
    "OnceCurrentVersionExpired",
    "NoAutoUpgrade",
  ]);
const DeploymentCapacitySettingsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    designatedCapacity: Schema.optional(Schema.Number),
    priority: Schema.optional(Schema.Number),
  });
const ServiceTierSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Default",
  "Priority",
]);
const DeploymentStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Running",
  "Paused",
]);
const DeploymentRoutingSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  mode: Schema.optional(Schema.Literals(["cost", "balanced", "accuracy"])),
  models: Schema.optional(
    Schema.Array(Schema.suspend(() => DeploymentModelSchema)),
  ),
});
const SkuResourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceType: Schema.optional(Schema.String),
  sku: Schema.optional(Schema.suspend(() => SkuSchema)),
  capacity: Schema.optional(Schema.suspend(() => CapacityConfigSchema)),
});
const CapacityConfigSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  minimum: Schema.optional(Schema.Number),
  maximum: Schema.optional(Schema.Number),
  step: Schema.optional(Schema.Number),
  default: Schema.optional(Schema.Number),
  allowedValues: Schema.optional(Schema.Array(Schema.Number)),
});
const EncryptionScopeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const EncryptionScopePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyVaultProperties: Schema.optional(
      Schema.suspend(() => KeyVaultPropertiesSchema),
    ),
    keySource: Schema.optional(
      Schema.Literals(["Microsoft.CognitiveServices", "Microsoft.KeyVault"]),
    ),
  });
const ManagedNetworkSettingsPropertiesBasicResourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const ManagedNetworkSettingsPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    managedNetwork: Schema.optional(
      Schema.suspend(() => ManagedNetworkSettingsExSchema),
    ),
    provisioningState: Schema.optional(
      Schema.suspend(() => ManagedNetworkProvisioningStateSchema),
    ),
  });
const ManagedNetworkSettingsExSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isolationMode: Schema.optional(Schema.suspend(() => IsolationModeSchema)),
    networkId: Schema.optional(Schema.String),
    outboundRules: Schema.optional(
      Schema.NullOr(
        Schema.Record(
          Schema.String,
          Schema.suspend(() => OutboundRuleSchema),
        ),
      ),
    ),
    status: Schema.optional(
      Schema.suspend(() => ManagedNetworkProvisionStatusSchema),
    ),
    firewallSku: Schema.optional(Schema.suspend(() => FirewallSkuSchema)),
    managedNetworkKind: Schema.optional(
      Schema.suspend(() => ManagedNetworkKindSchema),
    ),
    firewallPublicIpAddress: Schema.optional(Schema.NullOr(Schema.String)),
    provisioningState: Schema.optional(
      Schema.suspend(() => ManagedNetworkProvisioningStateSchema),
    ),
  });
const IsolationModeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Disabled",
  "AllowInternetOutbound",
  "AllowOnlyApprovedOutbound",
]);
const OutboundRuleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  category: Schema.optional(Schema.suspend(() => RuleCategorySchema)),
  status: Schema.optional(Schema.suspend(() => RuleStatusSchema)),
  type: Schema.suspend(() => RuleTypeSchema),
  errorInformation: Schema.optional(Schema.String),
  parentRuleNames: Schema.optional(Schema.Array(Schema.String)),
});
const RuleCategorySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Required",
  "Recommended",
  "UserDefined",
  "Dependency",
]);
const RuleStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Inactive",
  "Active",
  "Provisioning",
  "Deleting",
  "Failed",
]);
const RuleTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "FQDN",
  "PrivateEndpoint",
  "ServiceTag",
]);
const ManagedNetworkProvisionStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.suspend(() => ManagedNetworkStatusSchema)),
  });
const ManagedNetworkStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Inactive",
  "Active",
]);
const FirewallSkuSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Standard",
  "Basic",
]);
const ManagedNetworkKindSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "V1",
  "V2",
]);
const ManagedNetworkProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Deferred",
    "Updating",
    "Succeeded",
    "Failed",
    "Deleting",
    "Deleted",
  ]);
const ManagedNetworkSettingsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  isolationMode: Schema.optional(Schema.suspend(() => IsolationModeSchema)),
  networkId: Schema.optional(Schema.String),
  outboundRules: Schema.optional(
    Schema.NullOr(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => OutboundRuleSchema),
      ),
    ),
  ),
  status: Schema.optional(
    Schema.suspend(() => ManagedNetworkProvisionStatusSchema),
  ),
  firewallSku: Schema.optional(Schema.suspend(() => FirewallSkuSchema)),
  managedNetworkKind: Schema.optional(
    Schema.suspend(() => ManagedNetworkKindSchema),
  ),
  firewallPublicIpAddress: Schema.optional(Schema.NullOr(Schema.String)),
  provisioningState: Schema.optional(
    Schema.suspend(() => ManagedNetworkProvisioningStateSchema),
  ),
});
const OutboundRuleBasicResourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
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
    provisioningState: Schema.optional(Schema.String),
    provisioningIssues: Schema.optional(
      Schema.Array(Schema.suspend(() => ProvisioningIssueSchema)),
    ),
    networkSecurityPerimeter: Schema.optional(
      Schema.suspend(() => NetworkSecurityPerimeterSchema),
    ),
    resourceAssociation: Schema.optional(
      Schema.suspend(
        () => NetworkSecurityPerimeterConfigurationAssociationInfoSchema,
      ),
    ),
    profile: Schema.optional(
      Schema.suspend(() => NetworkSecurityPerimeterProfileInfoSchema),
    ),
  });
const ProvisioningIssueSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.suspend(() => ProvisioningIssuePropertiesSchema),
  ),
});
const ProvisioningIssuePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    issueType: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    suggestedResourceIds: Schema.optional(Schema.Array(Schema.String)),
    suggestedAccessRules: Schema.optional(
      Schema.Array(
        Schema.suspend(() => NetworkSecurityPerimeterAccessRuleSchema),
      ),
    ),
  });
const NetworkSecurityPerimeterAccessRuleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => NetworkSecurityPerimeterAccessRulePropertiesSchema),
    ),
  });
const NetworkSecurityPerimeterAccessRulePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    direction: Schema.optional(
      Schema.suspend(() => NspAccessRuleDirectionSchema),
    ),
    addressPrefixes: Schema.optional(Schema.Array(Schema.String)),
    subscriptions: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () =>
            NetworkSecurityPerimeterAccessRulePropertiesSubscriptionsItemSchema,
        ),
      ),
    ),
    networkSecurityPerimeters: Schema.optional(
      Schema.Array(Schema.suspend(() => NetworkSecurityPerimeterSchema)),
    ),
    fullyQualifiedDomainNames: Schema.optional(Schema.Array(Schema.String)),
  });
const NspAccessRuleDirectionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Inbound", "Outbound"]);
const NetworkSecurityPerimeterAccessRulePropertiesSubscriptionsItemSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  });
const NetworkSecurityPerimeterSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    perimeterGuid: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  });
const NetworkSecurityPerimeterConfigurationAssociationInfoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    accessMode: Schema.optional(Schema.String),
  });
const NetworkSecurityPerimeterProfileInfoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    accessRulesVersion: Schema.optional(Schema.Number),
    accessRules: Schema.optional(
      Schema.Array(
        Schema.suspend(() => NetworkSecurityPerimeterAccessRuleSchema),
      ),
    ),
    diagnosticSettingsVersion: Schema.optional(Schema.Number),
    enabledLogCategories: Schema.optional(Schema.Array(Schema.String)),
  });
const PrivateEndpointConnectionPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privateEndpoint: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
      }),
    ),
    privateLinkServiceConnectionState: Schema.Struct({
      status: Schema.optional(
        Schema.suspend(() => PrivateEndpointServiceConnectionStatusSchema),
      ),
      description: Schema.optional(Schema.String),
      actionsRequired: Schema.optional(Schema.String),
    }),
    provisioningState: Schema.optional(
      Schema.Literals(["Succeeded", "Creating", "Deleting", "Failed"]),
    ),
    groupIds: Schema.optional(Schema.Array(Schema.String)),
  });
const PrivateEndpointServiceConnectionStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Pending",
    "Approved",
    "Rejected",
  ]);
const PrivateLinkResourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const ProjectSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const ProjectPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
  displayName: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  endpoints: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  isDefault: Schema.optional(Schema.Boolean),
});
const AgentApplicationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const AgenticApplicationPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.NullOr(Schema.String)),
    tags: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    ),
  });
const AgentDeploymentSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const AgentDeploymentPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.NullOr(Schema.String)),
    tags: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    ),
  });
const AgentReferenceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const ProjectCapabilityHostSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const ProjectCapabilityHostPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    aiServicesConnections: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.String)),
    ),
    vectorStoreConnections: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.String)),
    ),
    storageConnections: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.String)),
    ),
    threadStorageConnections: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.String)),
    ),
    provisioningState: Schema.optional(
      Schema.suspend(() => CapabilityHostProvisioningStateSchema),
    ),
  });
const CapabilityHostProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Failed",
    "Canceled",
    "Creating",
    "Updating",
    "Deleting",
  ]);
const RaiBlocklistSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const RaiBlocklistPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  description: Schema.optional(Schema.String),
});
const RaiBlocklistItemSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const RaiBlocklistItemPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pattern: Schema.optional(Schema.String),
    isRegex: Schema.optional(Schema.Boolean),
  });
const RaiPolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const RaiToolLabelSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const RaiToolLabelPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  toolConnectionName: Schema.String,
  accountScope: Schema.optional(
    Schema.suspend(() => RaiToolLabelPropertiesAccountScopeSchema),
  ),
  projectScopes: Schema.optional(
    Schema.Array(
      Schema.suspend(() => RaiToolLabelPropertiesProjectScopesItemSchema),
    ),
  ),
});
const RaiToolLabelPropertiesAccountScopeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labelValues: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
const RaiToolLabelPropertiesProjectScopesItemSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String,
    labelValues: Schema.Record(Schema.String, Schema.String),
  });
const RaiTopicSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const RaiTopicPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  topicId: Schema.optional(Schema.String),
  topicName: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  sampleBlobUrl: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  failedReason: Schema.optional(Schema.String),
  createdAt: Schema.optional(Schema.String),
  lastModifiedAt: Schema.optional(Schema.String),
});
const KeyNameSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Key1",
  "Key2",
]);
const AccountSkuSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceType: Schema.optional(Schema.String),
  sku: Schema.optional(Schema.suspend(() => SkuSchema)),
});
const CommitmentPlanAccountAssociationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const CommitmentPlanAccountAssociationPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.optional(Schema.String),
  });

// Input Schema
export const AccountCapabilityHostsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    capabilityHostName: Schema.String.pipe(T.PathParam()),
    properties: Schema.suspend(() => CapabilityHostPropertiesSchema),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/capabilityHosts/{capabilityHostName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "original-uri" },
    }),
  );
export type AccountCapabilityHostsCreateOrUpdateInput =
  typeof AccountCapabilityHostsCreateOrUpdateInput.Type;

// Output Schema
export const AccountCapabilityHostsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => CapabilityHostPropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AccountCapabilityHostsCreateOrUpdateOutput =
  typeof AccountCapabilityHostsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update account capabilityHost.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param capabilityHostName - The name of the capability host associated with the Cognitive Services Resource
 */
export const AccountCapabilityHostsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AccountCapabilityHostsCreateOrUpdateInput,
    outputSchema: AccountCapabilityHostsCreateOrUpdateOutput,
  }));
// Input Schema
export const AccountCapabilityHostsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    capabilityHostName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/capabilityHosts/{capabilityHostName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type AccountCapabilityHostsDeleteInput =
  typeof AccountCapabilityHostsDeleteInput.Type;

// Output Schema
export const AccountCapabilityHostsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AccountCapabilityHostsDeleteOutput =
  typeof AccountCapabilityHostsDeleteOutput.Type;

// The operation
/**
 * Delete account capabilityHost.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param capabilityHostName - The name of the capability host associated with the Cognitive Services Resource
 */
export const AccountCapabilityHostsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AccountCapabilityHostsDeleteInput,
    outputSchema: AccountCapabilityHostsDeleteOutput,
  }));
// Input Schema
export const AccountCapabilityHostsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    capabilityHostName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/capabilityHosts/{capabilityHostName}",
      apiVersion: "2026-03-01",
    }),
  );
export type AccountCapabilityHostsGetInput =
  typeof AccountCapabilityHostsGetInput.Type;

// Output Schema
export const AccountCapabilityHostsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => CapabilityHostPropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AccountCapabilityHostsGetOutput =
  typeof AccountCapabilityHostsGetOutput.Type;

// The operation
/**
 * Get account capabilityHost.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param capabilityHostName - The name of the capability host associated with the Cognitive Services Resource
 */
export const AccountCapabilityHostsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountCapabilityHostsGetInput,
    outputSchema: AccountCapabilityHostsGetOutput,
  }),
);
// Input Schema
export const AccountCapabilityHostsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/capabilityHosts",
      apiVersion: "2026-03-01",
    }),
  );
export type AccountCapabilityHostsListInput =
  typeof AccountCapabilityHostsListInput.Type;

// Output Schema
export const AccountCapabilityHostsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.NullOr(Schema.String)),
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => CapabilityHostSchema)),
    ),
  });
export type AccountCapabilityHostsListOutput =
  typeof AccountCapabilityHostsListOutput.Type;

// The operation
/**
 * List capabilityHost.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const AccountCapabilityHostsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountCapabilityHostsListInput,
    outputSchema: AccountCapabilityHostsListOutput,
  }),
);
// Input Schema
export const AccountConnectionsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.suspend(() => ConnectionPropertiesV2Schema),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/connections/{connectionName}",
      apiVersion: "2026-03-01",
    }),
  );
export type AccountConnectionsCreateInput =
  typeof AccountConnectionsCreateInput.Type;

// Output Schema
export const AccountConnectionsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => ConnectionPropertiesV2Schema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AccountConnectionsCreateOutput =
  typeof AccountConnectionsCreateOutput.Type;

// The operation
/**
 * Create or update Cognitive Services account connection under the specified account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param connectionName - Friendly name of the connection
 */
export const AccountConnectionsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountConnectionsCreateInput,
    outputSchema: AccountConnectionsCreateOutput,
  }),
);
// Input Schema
export const AccountConnectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/connections/{connectionName}",
      apiVersion: "2026-03-01",
    }),
  );
export type AccountConnectionsDeleteInput =
  typeof AccountConnectionsDeleteInput.Type;

// Output Schema
export const AccountConnectionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AccountConnectionsDeleteOutput =
  typeof AccountConnectionsDeleteOutput.Type;

// The operation
/**
 * Delete Cognitive Services account connection by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param connectionName - Friendly name of the connection
 */
export const AccountConnectionsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountConnectionsDeleteInput,
    outputSchema: AccountConnectionsDeleteOutput,
  }),
);
// Input Schema
export const AccountConnectionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/connections/{connectionName}",
      apiVersion: "2026-03-01",
    }),
  );
export type AccountConnectionsGetInput = typeof AccountConnectionsGetInput.Type;

// Output Schema
export const AccountConnectionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => ConnectionPropertiesV2Schema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AccountConnectionsGetOutput =
  typeof AccountConnectionsGetOutput.Type;

// The operation
/**
 * Lists Cognitive Services account connection by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param connectionName - Friendly name of the connection
 */
export const AccountConnectionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountConnectionsGetInput,
    outputSchema: AccountConnectionsGetOutput,
  }),
);
// Input Schema
export const AccountConnectionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    target: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
    includeAll: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/connections",
      apiVersion: "2026-03-01",
    }),
  );
export type AccountConnectionsListInput =
  typeof AccountConnectionsListInput.Type;

// Output Schema
export const AccountConnectionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.suspend(() => ConnectionPropertiesV2BasicResourceSchema),
      ),
    ),
  });
export type AccountConnectionsListOutput =
  typeof AccountConnectionsListOutput.Type;

// The operation
/**
 * Lists all the available  Cognitive Services account connections under the specified account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param target - Target of the connection.
 * @param category - Category of the connection.
 * @param includeAll - query parameter that indicates if get connection call should return both connections and datastores
 */
export const AccountConnectionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountConnectionsListInput,
    outputSchema: AccountConnectionsListOutput,
  }),
);
// Input Schema
export const AccountConnectionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => ConnectionPropertiesV2Schema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/connections/{connectionName}",
      apiVersion: "2026-03-01",
    }),
  );
export type AccountConnectionsUpdateInput =
  typeof AccountConnectionsUpdateInput.Type;

// Output Schema
export const AccountConnectionsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => ConnectionPropertiesV2Schema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AccountConnectionsUpdateOutput =
  typeof AccountConnectionsUpdateOutput.Type;

// The operation
/**
 * Update Cognitive Services account connection under the specified account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param connectionName - Friendly name of the connection
 */
export const AccountConnectionsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountConnectionsUpdateInput,
    outputSchema: AccountConnectionsUpdateOutput,
  }),
);
// Input Schema
export const AccountsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(Schema.suspend(() => AccountPropertiesSchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  sku: Schema.optional(Schema.suspend(() => SkuSchema)),
  identity: Schema.optional(Schema.suspend(() => IdentitySchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}",
    apiVersion: "2026-03-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type AccountsCreateInput = typeof AccountsCreateInput.Type;

// Output Schema
export const AccountsCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => AccountPropertiesSchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  sku: Schema.optional(Schema.suspend(() => SkuSchema)),
  identity: Schema.optional(Schema.suspend(() => IdentitySchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type AccountsCreateOutput = typeof AccountsCreateOutput.Type;

// The operation
/**
 * Create Cognitive Services Account. Accounts is a resource group wide resource type. It holds the keys for developer to access intelligent APIs. It's also the resource type for billing.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const AccountsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsCreateInput,
  outputSchema: AccountsCreateOutput,
}));
// Input Schema
export const AccountsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}",
    apiVersion: "2026-03-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type AccountsDeleteInput = typeof AccountsDeleteInput.Type;

// Output Schema
export const AccountsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AccountsDeleteOutput = typeof AccountsDeleteOutput.Type;

// The operation
/**
 * Deletes a Cognitive Services account from the resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const AccountsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsDeleteInput,
  outputSchema: AccountsDeleteOutput,
}));
// Input Schema
export const AccountsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}",
    apiVersion: "2026-03-01",
  }),
);
export type AccountsGetInput = typeof AccountsGetInput.Type;

// Output Schema
export const AccountsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => AccountPropertiesSchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  sku: Schema.optional(Schema.suspend(() => SkuSchema)),
  identity: Schema.optional(Schema.suspend(() => IdentitySchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type AccountsGetOutput = typeof AccountsGetOutput.Type;

// The operation
/**
 * Returns a Cognitive Services account specified by the parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const AccountsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsGetInput,
  outputSchema: AccountsGetOutput,
}));
// Input Schema
export const AccountsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/accounts",
    apiVersion: "2026-03-01",
  }),
);
export type AccountsListInput = typeof AccountsListInput.Type;

// Output Schema
export const AccountsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.optional(Schema.Array(Schema.suspend(() => AccountSchema))),
});
export type AccountsListOutput = typeof AccountsListOutput.Type;

// The operation
/**
 * Returns all the resources of a particular type belonging to a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const AccountsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsListInput,
  outputSchema: AccountsListOutput,
}));
// Input Schema
export const AccountsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts",
      apiVersion: "2026-03-01",
    }),
  );
export type AccountsListByResourceGroupInput =
  typeof AccountsListByResourceGroupInput.Type;

// Output Schema
export const AccountsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Array(Schema.suspend(() => AccountSchema))),
  });
export type AccountsListByResourceGroupOutput =
  typeof AccountsListByResourceGroupOutput.Type;

// The operation
/**
 * Returns all the resources of a particular type belonging to a resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AccountsListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountsListByResourceGroupInput,
    outputSchema: AccountsListByResourceGroupOutput,
  }),
);
// Input Schema
export const AccountsListKeysInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/listKeys",
    apiVersion: "2026-03-01",
  }),
);
export type AccountsListKeysInput = typeof AccountsListKeysInput.Type;

// Output Schema
export const AccountsListKeysOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    key1: Schema.optional(Schema.String),
    key2: Schema.optional(Schema.String),
  },
);
export type AccountsListKeysOutput = typeof AccountsListKeysOutput.Type;

// The operation
/**
 * Lists the account keys for the specified Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const AccountsListKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsListKeysInput,
  outputSchema: AccountsListKeysOutput,
}));
// Input Schema
export const AccountsListModelsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/models",
      apiVersion: "2026-03-01",
    }),
  );
export type AccountsListModelsInput = typeof AccountsListModelsInput.Type;

// Output Schema
export const AccountsListModelsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => AccountModelSchema)),
    ),
  });
export type AccountsListModelsOutput = typeof AccountsListModelsOutput.Type;

// The operation
/**
 * List available Models for the requested Cognitive Services account
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const AccountsListModels = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsListModelsInput,
  outputSchema: AccountsListModelsOutput,
}));
// Input Schema
export const AccountsListSkusInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/skus",
    apiVersion: "2026-03-01",
  }),
);
export type AccountsListSkusInput = typeof AccountsListSkusInput.Type;

// Output Schema
export const AccountsListSkusOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => AccountSkuSchema)),
    ),
  },
);
export type AccountsListSkusOutput = typeof AccountsListSkusOutput.Type;

// The operation
/**
 * List available SKUs for the requested Cognitive Services account
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const AccountsListSkus = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsListSkusInput,
  outputSchema: AccountsListSkusOutput,
}));
// Input Schema
export const AccountsListUsagesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/usages",
      apiVersion: "2026-03-01",
    }),
  );
export type AccountsListUsagesInput = typeof AccountsListUsagesInput.Type;

// Output Schema
export const AccountsListUsagesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Array(Schema.suspend(() => UsageSchema))),
  });
export type AccountsListUsagesOutput = typeof AccountsListUsagesOutput.Type;

// The operation
/**
 * Get usages for the requested Cognitive Services account
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param $filter - An OData filter expression that describes a subset of usages to return. The supported parameter is name.value (name of the metric, can have an or of multiple names).
 */
export const AccountsListUsages = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsListUsagesInput,
  outputSchema: AccountsListUsagesOutput,
}));
// Input Schema
export const AccountsRegenerateKeyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    keyName: Schema.suspend(() => KeyNameSchema),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/regenerateKey",
      apiVersion: "2026-03-01",
    }),
  );
export type AccountsRegenerateKeyInput = typeof AccountsRegenerateKeyInput.Type;

// Output Schema
export const AccountsRegenerateKeyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key1: Schema.optional(Schema.String),
    key2: Schema.optional(Schema.String),
  });
export type AccountsRegenerateKeyOutput =
  typeof AccountsRegenerateKeyOutput.Type;

// The operation
/**
 * Regenerates the specified account key for the specified Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const AccountsRegenerateKey = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountsRegenerateKeyInput,
    outputSchema: AccountsRegenerateKeyOutput,
  }),
);
// Input Schema
export const AccountsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(Schema.suspend(() => AccountPropertiesSchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  sku: Schema.optional(Schema.suspend(() => SkuSchema)),
  identity: Schema.optional(Schema.suspend(() => IdentitySchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}",
    apiVersion: "2026-03-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type AccountsUpdateInput = typeof AccountsUpdateInput.Type;

// Output Schema
export const AccountsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => AccountPropertiesSchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  sku: Schema.optional(Schema.suspend(() => SkuSchema)),
  identity: Schema.optional(Schema.suspend(() => IdentitySchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type AccountsUpdateOutput = typeof AccountsUpdateOutput.Type;

// The operation
/**
 * Updates a Cognitive Services account
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const AccountsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsUpdateInput,
  outputSchema: AccountsUpdateOutput,
}));
// Input Schema
export const AgentApplicationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.suspend(() => AgenticApplicationPropertiesSchema),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications/{name}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type AgentApplicationsCreateOrUpdateInput =
  typeof AgentApplicationsCreateOrUpdateInput.Type;

// Output Schema
export const AgentApplicationsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => AgenticApplicationPropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AgentApplicationsCreateOrUpdateOutput =
  typeof AgentApplicationsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates an Agent Application (asynchronous).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param name - Name for the Agent Application.
 */
export const AgentApplicationsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AgentApplicationsCreateOrUpdateInput,
    outputSchema: AgentApplicationsCreateOrUpdateOutput,
  }));
// Input Schema
export const AgentApplicationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications/{name}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type AgentApplicationsDeleteInput =
  typeof AgentApplicationsDeleteInput.Type;

// Output Schema
export const AgentApplicationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AgentApplicationsDeleteOutput =
  typeof AgentApplicationsDeleteOutput.Type;

// The operation
/**
 * Delete Agent Application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param name - Name for the Agent Application.
 */
export const AgentApplicationsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentApplicationsDeleteInput,
    outputSchema: AgentApplicationsDeleteOutput,
  }),
);
// Input Schema
export const AgentApplicationsDisableInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications/{name}/disable",
      apiVersion: "2026-03-01",
    }),
  );
export type AgentApplicationsDisableInput =
  typeof AgentApplicationsDisableInput.Type;

// Output Schema
export const AgentApplicationsDisableOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AgentApplicationsDisableOutput =
  typeof AgentApplicationsDisableOutput.Type;

// The operation
/**
 * Disables an Agent Application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param name - Name for the Agent Application.
 */
export const AgentApplicationsDisable = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentApplicationsDisableInput,
    outputSchema: AgentApplicationsDisableOutput,
  }),
);
// Input Schema
export const AgentApplicationsEnableInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications/{name}/enable",
      apiVersion: "2026-03-01",
    }),
  );
export type AgentApplicationsEnableInput =
  typeof AgentApplicationsEnableInput.Type;

// Output Schema
export const AgentApplicationsEnableOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AgentApplicationsEnableOutput =
  typeof AgentApplicationsEnableOutput.Type;

// The operation
/**
 * Enables an Agent Application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param name - Name for the Agent Application.
 */
export const AgentApplicationsEnable = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentApplicationsEnableInput,
    outputSchema: AgentApplicationsEnableOutput,
  }),
);
// Input Schema
export const AgentApplicationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications/{name}",
      apiVersion: "2026-03-01",
    }),
  );
export type AgentApplicationsGetInput = typeof AgentApplicationsGetInput.Type;

// Output Schema
export const AgentApplicationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => AgenticApplicationPropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AgentApplicationsGetOutput = typeof AgentApplicationsGetOutput.Type;

// The operation
/**
 * Gets an Agent Application by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param name - Name for the Agent Application.
 */
export const AgentApplicationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentApplicationsGetInput,
    outputSchema: AgentApplicationsGetOutput,
  }),
);
// Input Schema
export const AgentApplicationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    count: Schema.optional(Schema.Number),
    $skip: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
    names: Schema.optional(Schema.String),
    searchText: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    orderByAsc: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications",
      apiVersion: "2026-03-01",
    }),
  );
export type AgentApplicationsListInput = typeof AgentApplicationsListInput.Type;

// Output Schema
export const AgentApplicationsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.NullOr(Schema.String)),
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => AgentApplicationSchema)),
    ),
  });
export type AgentApplicationsListOutput =
  typeof AgentApplicationsListOutput.Type;

// The operation
/**
 * Lists Agent Applications in the project.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param count - Number of agent applications to be retrieved in a page of results.
 * @param $skip - Number of agent applications to skip.
 * @param $skipToken - Continuation token for pagination.
 * @param names - Names of agent applications to retrieve.
 * @param searchText - Search text for filtering agent applications.
 * @param orderBy - Field to order by.
 * @param orderByAsc - Whether to order in ascending order.
 */
export const AgentApplicationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentApplicationsListInput,
    outputSchema: AgentApplicationsListOutput,
  }),
);
// Input Schema
export const AgentApplicationsListAgentsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications/{name}/listAgents",
      apiVersion: "2026-03-01",
    }),
  );
export type AgentApplicationsListAgentsInput =
  typeof AgentApplicationsListAgentsInput.Type;

// Output Schema
export const AgentApplicationsListAgentsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.NullOr(Schema.String)),
    value: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.suspend(() => AgentReferenceSchema))),
    ),
  });
export type AgentApplicationsListAgentsOutput =
  typeof AgentApplicationsListAgentsOutput.Type;

// The operation
/**
 * Lists agents for an Agent Application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param name - Name for the Agent Application.
 */
export const AgentApplicationsListAgents = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentApplicationsListAgentsInput,
    outputSchema: AgentApplicationsListAgentsOutput,
  }),
);
// Input Schema
export const AgentDeploymentsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.suspend(() => AgentDeploymentPropertiesSchema),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications/{appName}/agentDeployments/{deploymentName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type AgentDeploymentsCreateOrUpdateInput =
  typeof AgentDeploymentsCreateOrUpdateInput.Type;

// Output Schema
export const AgentDeploymentsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => AgentDeploymentPropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AgentDeploymentsCreateOrUpdateOutput =
  typeof AgentDeploymentsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates an Agent Deployment (asynchronous).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param appName - The name of the application associated with the Cognitive Services Account
 * @param deploymentName - The name of the deployment associated with the Cognitive Services Account
 */
export const AgentDeploymentsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AgentDeploymentsCreateOrUpdateInput,
    outputSchema: AgentDeploymentsCreateOrUpdateOutput,
  }));
// Input Schema
export const AgentDeploymentsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications/{appName}/agentDeployments/{deploymentName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type AgentDeploymentsDeleteInput =
  typeof AgentDeploymentsDeleteInput.Type;

// Output Schema
export const AgentDeploymentsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AgentDeploymentsDeleteOutput =
  typeof AgentDeploymentsDeleteOutput.Type;

// The operation
/**
 * Delete Agent Deployment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param appName - The name of the application associated with the Cognitive Services Account
 * @param deploymentName - The name of the deployment associated with the Cognitive Services Account
 */
export const AgentDeploymentsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentDeploymentsDeleteInput,
    outputSchema: AgentDeploymentsDeleteOutput,
  }),
);
// Input Schema
export const AgentDeploymentsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications/{appName}/agentDeployments/{deploymentName}",
      apiVersion: "2026-03-01",
    }),
  );
export type AgentDeploymentsGetInput = typeof AgentDeploymentsGetInput.Type;

// Output Schema
export const AgentDeploymentsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => AgentDeploymentPropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AgentDeploymentsGetOutput = typeof AgentDeploymentsGetOutput.Type;

// The operation
/**
 * Gets an Agent Deployment by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param appName - The name of the application associated with the Cognitive Services Account
 * @param deploymentName - The name of the deployment associated with the Cognitive Services Account
 */
export const AgentDeploymentsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AgentDeploymentsGetInput,
  outputSchema: AgentDeploymentsGetOutput,
}));
// Input Schema
export const AgentDeploymentsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
    count: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
    names: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    orderByAsc: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications/{appName}/agentDeployments",
      apiVersion: "2026-03-01",
    }),
  );
export type AgentDeploymentsListInput = typeof AgentDeploymentsListInput.Type;

// Output Schema
export const AgentDeploymentsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.NullOr(Schema.String)),
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => AgentDeploymentSchema)),
    ),
  });
export type AgentDeploymentsListOutput = typeof AgentDeploymentsListOutput.Type;

// The operation
/**
 * Lists Agent Deployments in the application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param appName - The name of the application associated with the Cognitive Services Account
 * @param count - Number of agent deployments to be retrieved in a page of results.
 * @param $skipToken - Continuation token for pagination.
 * @param names - Names of agent deployments to retrieve.
 * @param orderBy - Field to order by.
 * @param orderByAsc - Whether to order in ascending order.
 */
export const AgentDeploymentsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentDeploymentsListInput,
    outputSchema: AgentDeploymentsListOutput,
  }),
);
// Input Schema
export const AgentDeploymentsStartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications/{appName}/agentDeployments/{deploymentName}/start",
      apiVersion: "2026-03-01",
    }),
  );
export type AgentDeploymentsStartInput = typeof AgentDeploymentsStartInput.Type;

// Output Schema
export const AgentDeploymentsStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AgentDeploymentsStartOutput =
  typeof AgentDeploymentsStartOutput.Type;

// The operation
/**
 * Starts an Agent Deployment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param appName - The name of the application associated with the Cognitive Services Account
 * @param deploymentName - The name of the deployment associated with the Cognitive Services Account
 */
export const AgentDeploymentsStart = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentDeploymentsStartInput,
    outputSchema: AgentDeploymentsStartOutput,
  }),
);
// Input Schema
export const AgentDeploymentsStopInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications/{appName}/agentDeployments/{deploymentName}/stop",
      apiVersion: "2026-03-01",
    }),
  );
export type AgentDeploymentsStopInput = typeof AgentDeploymentsStopInput.Type;

// Output Schema
export const AgentDeploymentsStopOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AgentDeploymentsStopOutput = typeof AgentDeploymentsStopOutput.Type;

// The operation
/**
 * Stops an Agent Deployment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param appName - The name of the application associated with the Cognitive Services Account
 * @param deploymentName - The name of the deployment associated with the Cognitive Services Account
 */
export const AgentDeploymentsStop = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentDeploymentsStopInput,
    outputSchema: AgentDeploymentsStopOutput,
  }),
);
// Input Schema
export const CalculateModelCapacityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    model: Schema.optional(Schema.suspend(() => DeploymentModelSchema)),
    skuName: Schema.optional(Schema.String),
    workloads: Schema.optional(
      Schema.Array(Schema.suspend(() => ModelCapacityCalculatorWorkloadSchema)),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/calculateModelCapacity",
      apiVersion: "2026-03-01",
    }),
  );
export type CalculateModelCapacityInput =
  typeof CalculateModelCapacityInput.Type;

// Output Schema
export const CalculateModelCapacityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    model: Schema.optional(Schema.suspend(() => DeploymentModelSchema)),
    skuName: Schema.optional(Schema.String),
    estimatedCapacity: Schema.optional(
      Schema.suspend(() => CalculateModelCapacityResultEstimatedCapacitySchema),
    ),
  });
export type CalculateModelCapacityOutput =
  typeof CalculateModelCapacityOutput.Type;

// The operation
/**
 * Model capacity calculator.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const calculateModelCapacity = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CalculateModelCapacityInput,
    outputSchema: CalculateModelCapacityOutput,
  }),
);
// Input Schema
export const CheckDomainAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    subdomainName: Schema.String,
    type: Schema.String,
    kind: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/checkDomainAvailability",
      apiVersion: "2026-03-01",
    }),
  );
export type CheckDomainAvailabilityInput =
  typeof CheckDomainAvailabilityInput.Type;

// Output Schema
export const CheckDomainAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isSubdomainAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    subdomainName: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  });
export type CheckDomainAvailabilityOutput =
  typeof CheckDomainAvailabilityOutput.Type;

// The operation
/**
 * Check whether a domain is available.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const CheckDomainAvailability = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CheckDomainAvailabilityInput,
    outputSchema: CheckDomainAvailabilityOutput,
  }),
);
// Input Schema
export const CheckSkuAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    skus: Schema.Array(Schema.String),
    kind: Schema.String,
    type: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/locations/{location}/checkSkuAvailability",
      apiVersion: "2026-03-01",
    }),
  );
export type CheckSkuAvailabilityInput = typeof CheckSkuAvailabilityInput.Type;

// Output Schema
export const CheckSkuAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => SkuAvailabilitySchema)),
    ),
  });
export type CheckSkuAvailabilityOutput = typeof CheckSkuAvailabilityOutput.Type;

// The operation
/**
 * Check available SKUs.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 */
export const CheckSkuAvailability = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CheckSkuAvailabilityInput,
    outputSchema: CheckSkuAvailabilityOutput,
  }),
);
// Input Schema
export const CommitmentPlansCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    commitmentPlanName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => CommitmentPlanPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/commitmentPlans/{commitmentPlanName}",
      apiVersion: "2026-03-01",
    }),
  );
export type CommitmentPlansCreateOrUpdateInput =
  typeof CommitmentPlansCreateOrUpdateInput.Type;

// Output Schema
export const CommitmentPlansCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => CommitmentPlanPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type CommitmentPlansCreateOrUpdateOutput =
  typeof CommitmentPlansCreateOrUpdateOutput.Type;

// The operation
/**
 * Update the state of specified commitmentPlans associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param commitmentPlanName - The name of the commitmentPlan associated with the Cognitive Services Account
 */
export const CommitmentPlansCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CommitmentPlansCreateOrUpdateInput,
    outputSchema: CommitmentPlansCreateOrUpdateOutput,
  }));
// Input Schema
export const CommitmentPlansCreateOrUpdateAssociationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    commitmentPlanName: Schema.String.pipe(T.PathParam()),
    commitmentPlanAssociationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => CommitmentPlanAccountAssociationPropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/commitmentPlans/{commitmentPlanName}/accountAssociations/{commitmentPlanAssociationName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type CommitmentPlansCreateOrUpdateAssociationInput =
  typeof CommitmentPlansCreateOrUpdateAssociationInput.Type;

// Output Schema
export const CommitmentPlansCreateOrUpdateAssociationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => CommitmentPlanAccountAssociationPropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type CommitmentPlansCreateOrUpdateAssociationOutput =
  typeof CommitmentPlansCreateOrUpdateAssociationOutput.Type;

// The operation
/**
 * Create or update the association of the Cognitive Services commitment plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param commitmentPlanName - The name of the commitmentPlan associated with the Cognitive Services Account
 * @param commitmentPlanAssociationName - The name of the commitment plan association with the Cognitive Services Account
 */
export const CommitmentPlansCreateOrUpdateAssociation =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CommitmentPlansCreateOrUpdateAssociationInput,
    outputSchema: CommitmentPlansCreateOrUpdateAssociationOutput,
  }));
// Input Schema
export const CommitmentPlansCreateOrUpdatePlanInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    commitmentPlanName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => CommitmentPlanPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/commitmentPlans/{commitmentPlanName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type CommitmentPlansCreateOrUpdatePlanInput =
  typeof CommitmentPlansCreateOrUpdatePlanInput.Type;

// Output Schema
export const CommitmentPlansCreateOrUpdatePlanOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => CommitmentPlanPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type CommitmentPlansCreateOrUpdatePlanOutput =
  typeof CommitmentPlansCreateOrUpdatePlanOutput.Type;

// The operation
/**
 * Create Cognitive Services commitment plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param commitmentPlanName - The name of the commitmentPlan associated with the Cognitive Services Account
 */
export const CommitmentPlansCreateOrUpdatePlan =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CommitmentPlansCreateOrUpdatePlanInput,
    outputSchema: CommitmentPlansCreateOrUpdatePlanOutput,
  }));
// Input Schema
export const CommitmentPlansDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    commitmentPlanName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/commitmentPlans/{commitmentPlanName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type CommitmentPlansDeleteInput = typeof CommitmentPlansDeleteInput.Type;

// Output Schema
export const CommitmentPlansDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CommitmentPlansDeleteOutput =
  typeof CommitmentPlansDeleteOutput.Type;

// The operation
/**
 * Deletes the specified commitmentPlan associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param commitmentPlanName - The name of the commitmentPlan associated with the Cognitive Services Account
 */
export const CommitmentPlansDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CommitmentPlansDeleteInput,
    outputSchema: CommitmentPlansDeleteOutput,
  }),
);
// Input Schema
export const CommitmentPlansDeleteAssociationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    commitmentPlanName: Schema.String.pipe(T.PathParam()),
    commitmentPlanAssociationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/commitmentPlans/{commitmentPlanName}/accountAssociations/{commitmentPlanAssociationName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type CommitmentPlansDeleteAssociationInput =
  typeof CommitmentPlansDeleteAssociationInput.Type;

// Output Schema
export const CommitmentPlansDeleteAssociationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CommitmentPlansDeleteAssociationOutput =
  typeof CommitmentPlansDeleteAssociationOutput.Type;

// The operation
/**
 * Deletes the association of the Cognitive Services commitment plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param commitmentPlanName - The name of the commitmentPlan associated with the Cognitive Services Account
 * @param commitmentPlanAssociationName - The name of the commitment plan association with the Cognitive Services Account
 */
export const CommitmentPlansDeleteAssociation =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CommitmentPlansDeleteAssociationInput,
    outputSchema: CommitmentPlansDeleteAssociationOutput,
  }));
// Input Schema
export const CommitmentPlansDeletePlanInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    commitmentPlanName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/commitmentPlans/{commitmentPlanName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type CommitmentPlansDeletePlanInput =
  typeof CommitmentPlansDeletePlanInput.Type;

// Output Schema
export const CommitmentPlansDeletePlanOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CommitmentPlansDeletePlanOutput =
  typeof CommitmentPlansDeletePlanOutput.Type;

// The operation
/**
 * Deletes a Cognitive Services commitment plan from the resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param commitmentPlanName - The name of the commitmentPlan associated with the Cognitive Services Account
 */
export const CommitmentPlansDeletePlan = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CommitmentPlansDeletePlanInput,
    outputSchema: CommitmentPlansDeletePlanOutput,
  }),
);
// Input Schema
export const CommitmentPlansGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    commitmentPlanName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/commitmentPlans/{commitmentPlanName}",
      apiVersion: "2026-03-01",
    }),
  );
export type CommitmentPlansGetInput = typeof CommitmentPlansGetInput.Type;

// Output Schema
export const CommitmentPlansGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => CommitmentPlanPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type CommitmentPlansGetOutput = typeof CommitmentPlansGetOutput.Type;

// The operation
/**
 * Gets the specified commitmentPlans associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param commitmentPlanName - The name of the commitmentPlan associated with the Cognitive Services Account
 */
export const CommitmentPlansGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CommitmentPlansGetInput,
  outputSchema: CommitmentPlansGetOutput,
}));
// Input Schema
export const CommitmentPlansGetAssociationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    commitmentPlanName: Schema.String.pipe(T.PathParam()),
    commitmentPlanAssociationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/commitmentPlans/{commitmentPlanName}/accountAssociations/{commitmentPlanAssociationName}",
      apiVersion: "2026-03-01",
    }),
  );
export type CommitmentPlansGetAssociationInput =
  typeof CommitmentPlansGetAssociationInput.Type;

// Output Schema
export const CommitmentPlansGetAssociationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => CommitmentPlanAccountAssociationPropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type CommitmentPlansGetAssociationOutput =
  typeof CommitmentPlansGetAssociationOutput.Type;

// The operation
/**
 * Gets the association of the Cognitive Services commitment plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param commitmentPlanName - The name of the commitmentPlan associated with the Cognitive Services Account
 * @param commitmentPlanAssociationName - The name of the commitment plan association with the Cognitive Services Account
 */
export const CommitmentPlansGetAssociation =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CommitmentPlansGetAssociationInput,
    outputSchema: CommitmentPlansGetAssociationOutput,
  }));
// Input Schema
export const CommitmentPlansGetPlanInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    commitmentPlanName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/commitmentPlans/{commitmentPlanName}",
      apiVersion: "2026-03-01",
    }),
  );
export type CommitmentPlansGetPlanInput =
  typeof CommitmentPlansGetPlanInput.Type;

// Output Schema
export const CommitmentPlansGetPlanOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => CommitmentPlanPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type CommitmentPlansGetPlanOutput =
  typeof CommitmentPlansGetPlanOutput.Type;

// The operation
/**
 * Returns a Cognitive Services commitment plan specified by the parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param commitmentPlanName - The name of the commitmentPlan associated with the Cognitive Services Account
 */
export const CommitmentPlansGetPlan = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CommitmentPlansGetPlanInput,
    outputSchema: CommitmentPlansGetPlanOutput,
  }),
);
// Input Schema
export const CommitmentPlansListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/commitmentPlans",
      apiVersion: "2026-03-01",
    }),
  );
export type CommitmentPlansListInput = typeof CommitmentPlansListInput.Type;

// Output Schema
export const CommitmentPlansListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => CommitmentPlanSchema)),
    ),
  });
export type CommitmentPlansListOutput = typeof CommitmentPlansListOutput.Type;

// The operation
/**
 * Gets the commitmentPlans associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const CommitmentPlansList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CommitmentPlansListInput,
  outputSchema: CommitmentPlansListOutput,
}));
// Input Schema
export const CommitmentPlansListAssociationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    commitmentPlanName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/commitmentPlans/{commitmentPlanName}/accountAssociations",
      apiVersion: "2026-03-01",
    }),
  );
export type CommitmentPlansListAssociationsInput =
  typeof CommitmentPlansListAssociationsInput.Type;

// Output Schema
export const CommitmentPlansListAssociationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.suspend(() => CommitmentPlanAccountAssociationSchema),
      ),
    ),
  });
export type CommitmentPlansListAssociationsOutput =
  typeof CommitmentPlansListAssociationsOutput.Type;

// The operation
/**
 * Gets the associations of the Cognitive Services commitment plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param commitmentPlanName - The name of the commitmentPlan associated with the Cognitive Services Account
 */
export const CommitmentPlansListAssociations =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CommitmentPlansListAssociationsInput,
    outputSchema: CommitmentPlansListAssociationsOutput,
  }));
// Input Schema
export const CommitmentPlansListPlansByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/commitmentPlans",
      apiVersion: "2026-03-01",
    }),
  );
export type CommitmentPlansListPlansByResourceGroupInput =
  typeof CommitmentPlansListPlansByResourceGroupInput.Type;

// Output Schema
export const CommitmentPlansListPlansByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => CommitmentPlanSchema)),
    ),
  });
export type CommitmentPlansListPlansByResourceGroupOutput =
  typeof CommitmentPlansListPlansByResourceGroupOutput.Type;

// The operation
/**
 * Returns all the resources of a particular type belonging to a resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const CommitmentPlansListPlansByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CommitmentPlansListPlansByResourceGroupInput,
    outputSchema: CommitmentPlansListPlansByResourceGroupOutput,
  }));
// Input Schema
export const CommitmentPlansListPlansBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/commitmentPlans",
      apiVersion: "2026-03-01",
    }),
  );
export type CommitmentPlansListPlansBySubscriptionInput =
  typeof CommitmentPlansListPlansBySubscriptionInput.Type;

// Output Schema
export const CommitmentPlansListPlansBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => CommitmentPlanSchema)),
    ),
  });
export type CommitmentPlansListPlansBySubscriptionOutput =
  typeof CommitmentPlansListPlansBySubscriptionOutput.Type;

// The operation
/**
 * Returns all the resources of a particular type belonging to a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const CommitmentPlansListPlansBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CommitmentPlansListPlansBySubscriptionInput,
    outputSchema: CommitmentPlansListPlansBySubscriptionOutput,
  }));
// Input Schema
export const CommitmentPlansUpdatePlanInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    commitmentPlanName: Schema.String.pipe(T.PathParam()),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/commitmentPlans/{commitmentPlanName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type CommitmentPlansUpdatePlanInput =
  typeof CommitmentPlansUpdatePlanInput.Type;

// Output Schema
export const CommitmentPlansUpdatePlanOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => CommitmentPlanPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type CommitmentPlansUpdatePlanOutput =
  typeof CommitmentPlansUpdatePlanOutput.Type;

// The operation
/**
 * Create Cognitive Services commitment plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param commitmentPlanName - The name of the commitmentPlan associated with the Cognitive Services Account
 */
export const CommitmentPlansUpdatePlan = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CommitmentPlansUpdatePlanInput,
    outputSchema: CommitmentPlansUpdatePlanOutput,
  }),
);
// Input Schema
export const CommitmentTiersListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/locations/{location}/commitmentTiers",
      apiVersion: "2026-03-01",
    }),
  );
export type CommitmentTiersListInput = typeof CommitmentTiersListInput.Type;

// Output Schema
export const CommitmentTiersListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => CommitmentTierSchema)),
    ),
  });
export type CommitmentTiersListOutput = typeof CommitmentTiersListOutput.Type;

// The operation
/**
 * List Commitment Tiers.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 */
export const CommitmentTiersList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CommitmentTiersListInput,
  outputSchema: CommitmentTiersListOutput,
}));
// Input Schema
export const DefenderForAISettingsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    defenderForAISettingName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => DefenderForAISettingPropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/defenderForAISettings/{defenderForAISettingName}",
      apiVersion: "2026-03-01",
    }),
  );
export type DefenderForAISettingsCreateOrUpdateInput =
  typeof DefenderForAISettingsCreateOrUpdateInput.Type;

// Output Schema
export const DefenderForAISettingsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => DefenderForAISettingPropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type DefenderForAISettingsCreateOrUpdateOutput =
  typeof DefenderForAISettingsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or Updates the specified Defender for AI setting.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param defenderForAISettingName - The name of the defender for AI setting.
 */
export const DefenderForAISettingsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DefenderForAISettingsCreateOrUpdateInput,
    outputSchema: DefenderForAISettingsCreateOrUpdateOutput,
  }));
// Input Schema
export const DefenderForAISettingsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    defenderForAISettingName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/defenderForAISettings/{defenderForAISettingName}",
      apiVersion: "2026-03-01",
    }),
  );
export type DefenderForAISettingsGetInput =
  typeof DefenderForAISettingsGetInput.Type;

// Output Schema
export const DefenderForAISettingsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => DefenderForAISettingPropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type DefenderForAISettingsGetOutput =
  typeof DefenderForAISettingsGetOutput.Type;

// The operation
/**
 * Gets the specified Defender for AI setting by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param defenderForAISettingName - The name of the defender for AI setting.
 */
export const DefenderForAISettingsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DefenderForAISettingsGetInput,
    outputSchema: DefenderForAISettingsGetOutput,
  }),
);
// Input Schema
export const DefenderForAISettingsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/defenderForAISettings",
      apiVersion: "2026-03-01",
    }),
  );
export type DefenderForAISettingsListInput =
  typeof DefenderForAISettingsListInput.Type;

// Output Schema
export const DefenderForAISettingsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => DefenderForAISettingSchema)),
    ),
  });
export type DefenderForAISettingsListOutput =
  typeof DefenderForAISettingsListOutput.Type;

// The operation
/**
 * Lists the Defender for AI settings.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const DefenderForAISettingsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DefenderForAISettingsListInput,
    outputSchema: DefenderForAISettingsListOutput,
  }),
);
// Input Schema
export const DefenderForAISettingsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    defenderForAISettingName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => DefenderForAISettingPropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/defenderForAISettings/{defenderForAISettingName}",
      apiVersion: "2026-03-01",
    }),
  );
export type DefenderForAISettingsUpdateInput =
  typeof DefenderForAISettingsUpdateInput.Type;

// Output Schema
export const DefenderForAISettingsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => DefenderForAISettingPropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type DefenderForAISettingsUpdateOutput =
  typeof DefenderForAISettingsUpdateOutput.Type;

// The operation
/**
 * Updates the specified Defender for AI setting.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param defenderForAISettingName - The name of the defender for AI setting.
 */
export const DefenderForAISettingsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DefenderForAISettingsUpdateInput,
    outputSchema: DefenderForAISettingsUpdateOutput,
  }),
);
// Input Schema
export const DeletedAccountsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/locations/{location}/resourceGroups/{resourceGroupName}/deletedAccounts/{accountName}",
      apiVersion: "2026-03-01",
    }),
  );
export type DeletedAccountsGetInput = typeof DeletedAccountsGetInput.Type;

// Output Schema
export const DeletedAccountsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => AccountPropertiesSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    identity: Schema.optional(Schema.suspend(() => IdentitySchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type DeletedAccountsGetOutput = typeof DeletedAccountsGetOutput.Type;

// The operation
/**
 * Returns a Cognitive Services account specified by the parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
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
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/deletedAccounts",
      apiVersion: "2026-03-01",
    }),
  );
export type DeletedAccountsListInput = typeof DeletedAccountsListInput.Type;

// Output Schema
export const DeletedAccountsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Array(Schema.suspend(() => AccountSchema))),
  });
export type DeletedAccountsListOutput = typeof DeletedAccountsListOutput.Type;

// The operation
/**
 * Returns all the resources of a particular type belonging to a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DeletedAccountsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeletedAccountsListInput,
  outputSchema: DeletedAccountsListOutput,
}));
// Input Schema
export const DeletedAccountsPurgeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/locations/{location}/resourceGroups/{resourceGroupName}/deletedAccounts/{accountName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type DeletedAccountsPurgeInput = typeof DeletedAccountsPurgeInput.Type;

// Output Schema
export const DeletedAccountsPurgeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeletedAccountsPurgeOutput = typeof DeletedAccountsPurgeOutput.Type;

// The operation
/**
 * Deletes a Cognitive Services account from the resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const DeletedAccountsPurge = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeletedAccountsPurgeInput,
    outputSchema: DeletedAccountsPurgeOutput,
  }),
);
// Input Schema
export const DeploymentsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => DeploymentPropertiesSchema),
    ),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/deployments/{deploymentName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type DeploymentsCreateOrUpdateInput =
  typeof DeploymentsCreateOrUpdateInput.Type;

// Output Schema
export const DeploymentsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => DeploymentPropertiesSchema),
    ),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type DeploymentsCreateOrUpdateOutput =
  typeof DeploymentsCreateOrUpdateOutput.Type;

// The operation
/**
 * Update the state of specified deployments associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param deploymentName - The name of the deployment associated with the Cognitive Services Account
 */
export const DeploymentsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeploymentsCreateOrUpdateInput,
    outputSchema: DeploymentsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const DeploymentsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/deployments/{deploymentName}",
    apiVersion: "2026-03-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type DeploymentsDeleteInput = typeof DeploymentsDeleteInput.Type;

// Output Schema
export const DeploymentsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeploymentsDeleteOutput = typeof DeploymentsDeleteOutput.Type;

// The operation
/**
 * Deletes the specified deployment associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param deploymentName - The name of the deployment associated with the Cognitive Services Account
 */
export const DeploymentsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsDeleteInput,
  outputSchema: DeploymentsDeleteOutput,
}));
// Input Schema
export const DeploymentsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  deploymentName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/deployments/{deploymentName}",
    apiVersion: "2026-03-01",
  }),
);
export type DeploymentsGetInput = typeof DeploymentsGetInput.Type;

// Output Schema
export const DeploymentsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => DeploymentPropertiesSchema)),
  sku: Schema.optional(Schema.suspend(() => SkuSchema)),
  etag: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type DeploymentsGetOutput = typeof DeploymentsGetOutput.Type;

// The operation
/**
 * Gets the specified deployments associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param deploymentName - The name of the deployment associated with the Cognitive Services Account
 */
export const DeploymentsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsGetInput,
  outputSchema: DeploymentsGetOutput,
}));
// Input Schema
export const DeploymentsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/deployments",
    apiVersion: "2026-03-01",
  }),
);
export type DeploymentsListInput = typeof DeploymentsListInput.Type;

// Output Schema
export const DeploymentsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.optional(Schema.Array(Schema.suspend(() => DeploymentSchema))),
});
export type DeploymentsListOutput = typeof DeploymentsListOutput.Type;

// The operation
/**
 * Gets the deployments associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const DeploymentsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsListInput,
  outputSchema: DeploymentsListOutput,
}));
// Input Schema
export const DeploymentsListSkusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/deployments/{deploymentName}/skus",
      apiVersion: "2026-03-01",
    }),
  );
export type DeploymentsListSkusInput = typeof DeploymentsListSkusInput.Type;

// Output Schema
export const DeploymentsListSkusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => SkuResourceSchema)),
    ),
  });
export type DeploymentsListSkusOutput = typeof DeploymentsListSkusOutput.Type;

// The operation
/**
 * Lists the specified deployments skus associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param deploymentName - The name of the deployment associated with the Cognitive Services Account
 */
export const DeploymentsListSkus = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsListSkusInput,
  outputSchema: DeploymentsListSkusOutput,
}));
// Input Schema
export const DeploymentsPauseInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  deploymentName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/deployments/{deploymentName}/pause",
    apiVersion: "2026-03-01",
  }),
);
export type DeploymentsPauseInput = typeof DeploymentsPauseInput.Type;

// Output Schema
export const DeploymentsPauseOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.optional(
      Schema.suspend(() => DeploymentPropertiesSchema),
    ),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
export type DeploymentsPauseOutput = typeof DeploymentsPauseOutput.Type;

// The operation
/**
 * Pause a deployment
 *
 * Pauses inferencing on a deployment by setting the deploymentState to 'Paused' (see #/definitions/DeploymentProperties/properties/deploymentState). Only Standard, DataZoneStandard, and GlobalStandard SKUs support this operation. Inference requests to the paused deployment endpoint will receive HTTP 423 (Locked). This operation is idempotent.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param deploymentName - The name of the deployment associated with the Cognitive Services Account
 */
export const DeploymentsPause = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsPauseInput,
  outputSchema: DeploymentsPauseOutput,
}));
// Input Schema
export const DeploymentsResumeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/deployments/{deploymentName}/resume",
    apiVersion: "2026-03-01",
  }),
);
export type DeploymentsResumeInput = typeof DeploymentsResumeInput.Type;

// Output Schema
export const DeploymentsResumeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => DeploymentPropertiesSchema),
    ),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type DeploymentsResumeOutput = typeof DeploymentsResumeOutput.Type;

// The operation
/**
 * Resume a deployment
 *
 * Resumes inferencing on a previously paused deployment by setting the deploymentState to 'Running' (see #/definitions/DeploymentProperties/properties/deploymentState). This operation is idempotent and can be safely called on already running deployments.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param deploymentName - The name of the deployment associated with the Cognitive Services Account
 */
export const DeploymentsResume = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsResumeInput,
  outputSchema: DeploymentsResumeOutput,
}));
// Input Schema
export const DeploymentsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  },
).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/deployments/{deploymentName}",
    apiVersion: "2026-03-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type DeploymentsUpdateInput = typeof DeploymentsUpdateInput.Type;

// Output Schema
export const DeploymentsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => DeploymentPropertiesSchema),
    ),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type DeploymentsUpdateOutput = typeof DeploymentsUpdateOutput.Type;

// The operation
/**
 * Update specified deployments associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param deploymentName - The name of the deployment associated with the Cognitive Services Account
 */
export const DeploymentsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsUpdateInput,
  outputSchema: DeploymentsUpdateOutput,
}));
// Input Schema
export const EncryptionScopesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    encryptionScopeName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => EncryptionScopePropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/encryptionScopes/{encryptionScopeName}",
      apiVersion: "2026-03-01",
    }),
  );
export type EncryptionScopesCreateOrUpdateInput =
  typeof EncryptionScopesCreateOrUpdateInput.Type;

// Output Schema
export const EncryptionScopesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => EncryptionScopePropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type EncryptionScopesCreateOrUpdateOutput =
  typeof EncryptionScopesCreateOrUpdateOutput.Type;

// The operation
/**
 * Update the state of specified encryptionScope associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param encryptionScopeName - The name of the encryptionScope associated with the Cognitive Services Account
 */
export const EncryptionScopesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EncryptionScopesCreateOrUpdateInput,
    outputSchema: EncryptionScopesCreateOrUpdateOutput,
  }));
// Input Schema
export const EncryptionScopesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    encryptionScopeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/encryptionScopes/{encryptionScopeName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type EncryptionScopesDeleteInput =
  typeof EncryptionScopesDeleteInput.Type;

// Output Schema
export const EncryptionScopesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type EncryptionScopesDeleteOutput =
  typeof EncryptionScopesDeleteOutput.Type;

// The operation
/**
 * Deletes the specified encryptionScope associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param encryptionScopeName - The name of the encryptionScope associated with the Cognitive Services Account
 */
export const EncryptionScopesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EncryptionScopesDeleteInput,
    outputSchema: EncryptionScopesDeleteOutput,
  }),
);
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/encryptionScopes/{encryptionScopeName}",
      apiVersion: "2026-03-01",
    }),
  );
export type EncryptionScopesGetInput = typeof EncryptionScopesGetInput.Type;

// Output Schema
export const EncryptionScopesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => EncryptionScopePropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type EncryptionScopesGetOutput = typeof EncryptionScopesGetOutput.Type;

// The operation
/**
 * Gets the specified EncryptionScope associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param encryptionScopeName - The name of the encryptionScope associated with the Cognitive Services Account
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
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/encryptionScopes",
      apiVersion: "2026-03-01",
    }),
  );
export type EncryptionScopesListInput = typeof EncryptionScopesListInput.Type;

// Output Schema
export const EncryptionScopesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => EncryptionScopeSchema)),
    ),
  });
export type EncryptionScopesListOutput = typeof EncryptionScopesListOutput.Type;

// The operation
/**
 * Gets the content filters associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const EncryptionScopesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EncryptionScopesListInput,
    outputSchema: EncryptionScopesListOutput,
  }),
);
// Input Schema
export const LocationBasedModelCapacitiesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    modelFormat: Schema.String,
    modelName: Schema.String,
    modelVersion: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/locations/{location}/modelCapacities",
      apiVersion: "2026-03-01",
    }),
  );
export type LocationBasedModelCapacitiesListInput =
  typeof LocationBasedModelCapacitiesListInput.Type;

// Output Schema
export const LocationBasedModelCapacitiesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.suspend(() => ModelCapacityListResultValueItemSchema),
      ),
    ),
  });
export type LocationBasedModelCapacitiesListOutput =
  typeof LocationBasedModelCapacitiesListOutput.Type;

// The operation
/**
 * List Location Based ModelCapacities.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param modelFormat - The format of the Model
 * @param modelName - The name of the Model
 * @param modelVersion - The version of the Model
 */
export const LocationBasedModelCapacitiesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LocationBasedModelCapacitiesListInput,
    outputSchema: LocationBasedModelCapacitiesListOutput,
  }));
// Input Schema
export const ManagedNetworkProvisionsProvisionManagedNetworkInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    managedNetworkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/managedNetworks/{managedNetworkName}/provision",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type ManagedNetworkProvisionsProvisionManagedNetworkInput =
  typeof ManagedNetworkProvisionsProvisionManagedNetworkInput.Type;

// Output Schema
export const ManagedNetworkProvisionsProvisionManagedNetworkOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.suspend(() => ManagedNetworkStatusSchema)),
  });
export type ManagedNetworkProvisionsProvisionManagedNetworkOutput =
  typeof ManagedNetworkProvisionsProvisionManagedNetworkOutput.Type;

// The operation
/**
 * Provisions the managed network of a cognitive services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param managedNetworkName - Name of the managedNetwork associated with the cognitive services account. Only 'default' is supported.
 */
export const ManagedNetworkProvisionsProvisionManagedNetwork =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedNetworkProvisionsProvisionManagedNetworkInput,
    outputSchema: ManagedNetworkProvisionsProvisionManagedNetworkOutput,
  }));
// Input Schema
export const ManagedNetworkSettingsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    managedNetworkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/managedNetworks/{managedNetworkName}",
      apiVersion: "2026-03-01",
    }),
  );
export type ManagedNetworkSettingsGetInput =
  typeof ManagedNetworkSettingsGetInput.Type;

// Output Schema
export const ManagedNetworkSettingsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ManagedNetworkSettingsPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ManagedNetworkSettingsGetOutput =
  typeof ManagedNetworkSettingsGetOutput.Type;

// The operation
/**
 * Get API for managed network settings of a cognitive services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param managedNetworkName - Name of the managedNetwork associated with the cognitive services account. Only 'default' is supported.
 */
export const ManagedNetworkSettingsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagedNetworkSettingsGetInput,
    outputSchema: ManagedNetworkSettingsGetOutput,
  }),
);
// Input Schema
export const ManagedNetworkSettingsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/managedNetworks",
      apiVersion: "2026-03-01",
    }),
  );
export type ManagedNetworkSettingsListInput =
  typeof ManagedNetworkSettingsListInput.Type;

// Output Schema
export const ManagedNetworkSettingsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => ManagedNetworkSettingsPropertiesBasicResourceSchema,
        ),
      ),
    ),
  });
export type ManagedNetworkSettingsListOutput =
  typeof ManagedNetworkSettingsListOutput.Type;

// The operation
/**
 * List API for managed network settings of a cognitive services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const ManagedNetworkSettingsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagedNetworkSettingsListInput,
    outputSchema: ManagedNetworkSettingsListOutput,
  }),
);
// Input Schema
export const ManagedNetworkSettingsPatchInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    managedNetworkName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => ManagedNetworkSettingsPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/managedNetworks/{managedNetworkName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type ManagedNetworkSettingsPatchInput =
  typeof ManagedNetworkSettingsPatchInput.Type;

// Output Schema
export const ManagedNetworkSettingsPatchOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ManagedNetworkSettingsPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ManagedNetworkSettingsPatchOutput =
  typeof ManagedNetworkSettingsPatchOutput.Type;

// The operation
/**
 * Patch API for managed network settings of a cognitive services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param managedNetworkName - Name of the managedNetwork associated with the cognitive services account. Only 'default' is supported.
 */
export const ManagedNetworkSettingsPatch = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagedNetworkSettingsPatchInput,
    outputSchema: ManagedNetworkSettingsPatchOutput,
  }),
);
// Input Schema
export const ManagedNetworkSettingsPutInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    managedNetworkName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => ManagedNetworkSettingsPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/managedNetworks/{managedNetworkName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type ManagedNetworkSettingsPutInput =
  typeof ManagedNetworkSettingsPutInput.Type;

// Output Schema
export const ManagedNetworkSettingsPutOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ManagedNetworkSettingsPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ManagedNetworkSettingsPutOutput =
  typeof ManagedNetworkSettingsPutOutput.Type;

// The operation
/**
 * PUT API for managed network settings of a cognitive services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param managedNetworkName - Name of the managedNetwork associated with the cognitive services account. Only 'default' is supported.
 */
export const ManagedNetworkSettingsPut = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagedNetworkSettingsPutInput,
    outputSchema: ManagedNetworkSettingsPutOutput,
  }),
);
// Input Schema
export const ModelCapacitiesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    modelFormat: Schema.String,
    modelName: Schema.String,
    modelVersion: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/modelCapacities",
      apiVersion: "2026-03-01",
    }),
  );
export type ModelCapacitiesListInput = typeof ModelCapacitiesListInput.Type;

// Output Schema
export const ModelCapacitiesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.suspend(() => ModelCapacityListResultValueItemSchema),
      ),
    ),
  });
export type ModelCapacitiesListOutput = typeof ModelCapacitiesListOutput.Type;

// The operation
/**
 * List ModelCapacities.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param modelFormat - The format of the Model
 * @param modelName - The name of the Model
 * @param modelVersion - The version of the Model
 */
export const ModelCapacitiesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ModelCapacitiesListInput,
  outputSchema: ModelCapacitiesListOutput,
}));
// Input Schema
export const ModelsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/locations/{location}/models",
    apiVersion: "2026-03-01",
  }),
);
export type ModelsListInput = typeof ModelsListInput.Type;

// Output Schema
export const ModelsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.optional(Schema.Array(Schema.suspend(() => ModelSchema))),
});
export type ModelsListOutput = typeof ModelsListOutput.Type;

// The operation
/**
 * List Models.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 */
export const ModelsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ModelsListInput,
  outputSchema: ModelsListOutput,
}));
// Input Schema
export const NetworkSecurityPerimeterConfigurationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    nspConfigurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/networkSecurityPerimeterConfigurations/{nspConfigurationName}",
      apiVersion: "2026-03-01",
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
 * Gets the specified NSP configurations for an account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param nspConfigurationName - The name of the NSP Configuration.
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/networkSecurityPerimeterConfigurations",
      apiVersion: "2026-03-01",
    }),
  );
export type NetworkSecurityPerimeterConfigurationsListInput =
  typeof NetworkSecurityPerimeterConfigurationsListInput.Type;

// Output Schema
export const NetworkSecurityPerimeterConfigurationsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.suspend(() => NetworkSecurityPerimeterConfigurationSchema),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type NetworkSecurityPerimeterConfigurationsListOutput =
  typeof NetworkSecurityPerimeterConfigurationsListOutput.Type;

// The operation
/**
 * Gets a list of NSP configurations for an account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
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
    nspConfigurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/networkSecurityPerimeterConfigurations/{nspConfigurationName}/reconcile",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type NetworkSecurityPerimeterConfigurationsReconcileInput =
  typeof NetworkSecurityPerimeterConfigurationsReconcileInput.Type;

// Output Schema
export const NetworkSecurityPerimeterConfigurationsReconcileOutput =
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
export type NetworkSecurityPerimeterConfigurationsReconcileOutput =
  typeof NetworkSecurityPerimeterConfigurationsReconcileOutput.Type;

// The operation
/**
 * Reconcile the NSP configuration for an account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param nspConfigurationName - The name of the NSP Configuration.
 */
export const NetworkSecurityPerimeterConfigurationsReconcile =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkSecurityPerimeterConfigurationsReconcileInput,
    outputSchema: NetworkSecurityPerimeterConfigurationsReconcileOutput,
  }));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.CognitiveServices/operations",
    apiVersion: "2026-03-01",
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
 * Lists all the available Cognitive Services account operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export const OutboundRuleCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    managedNetworkName: Schema.String.pipe(T.PathParam()),
    ruleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.suspend(() => OutboundRuleSchema),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/managedNetworks/{managedNetworkName}/outboundRules/{ruleName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type OutboundRuleCreateOrUpdateInput =
  typeof OutboundRuleCreateOrUpdateInput.Type;

// Output Schema
export const OutboundRuleCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => OutboundRuleSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type OutboundRuleCreateOrUpdateOutput =
  typeof OutboundRuleCreateOrUpdateOutput.Type;

// The operation
/**
 * The PUT API for creating or updating a single outbound rule of the managed network associated with the cognitive services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param managedNetworkName - Name of the managedNetwork associated with the cognitive services account. Only 'default' is supported.
 * @param ruleName - Name of the cognitive services account managed network outbound rule
 */
export const OutboundRuleCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: OutboundRuleCreateOrUpdateInput,
    outputSchema: OutboundRuleCreateOrUpdateOutput,
  }),
);
// Input Schema
export const OutboundRuleDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    managedNetworkName: Schema.String.pipe(T.PathParam()),
    ruleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/managedNetworks/{managedNetworkName}/outboundRules/{ruleName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type OutboundRuleDeleteInput = typeof OutboundRuleDeleteInput.Type;

// Output Schema
export const OutboundRuleDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type OutboundRuleDeleteOutput = typeof OutboundRuleDeleteOutput.Type;

// The operation
/**
 * The DELETE API for deleting a single outbound rule of the managed network associated with the cognitive services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param managedNetworkName - Name of the managedNetwork associated with the cognitive services account. Only 'default' is supported.
 * @param ruleName - Name of the cognitive services account managed network outbound rule
 */
export const OutboundRuleDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OutboundRuleDeleteInput,
  outputSchema: OutboundRuleDeleteOutput,
}));
// Input Schema
export const OutboundRuleGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  managedNetworkName: Schema.String.pipe(T.PathParam()),
  ruleName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/managedNetworks/{managedNetworkName}/outboundRules/{ruleName}",
    apiVersion: "2026-03-01",
  }),
);
export type OutboundRuleGetInput = typeof OutboundRuleGetInput.Type;

// Output Schema
export const OutboundRuleGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => OutboundRuleSchema),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type OutboundRuleGetOutput = typeof OutboundRuleGetOutput.Type;

// The operation
/**
 * The GET API for retrieving a single outbound rule of the managed network associated with the cognitive services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param managedNetworkName - Name of the managedNetwork associated with the cognitive services account. Only 'default' is supported.
 * @param ruleName - Name of the cognitive services account managed network outbound rule
 */
export const OutboundRuleGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OutboundRuleGetInput,
  outputSchema: OutboundRuleGetOutput,
}));
// Input Schema
export const OutboundRuleListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  managedNetworkName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/managedNetworks/{managedNetworkName}/outboundRules",
    apiVersion: "2026-03-01",
  }),
);
export type OutboundRuleListInput = typeof OutboundRuleListInput.Type;

// Output Schema
export const OutboundRuleListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => OutboundRuleBasicResourceSchema)),
    ),
  },
);
export type OutboundRuleListOutput = typeof OutboundRuleListOutput.Type;

// The operation
/**
 * The GET API for retrieving the list of outbound rules of the managed network associated with the cognitive services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param managedNetworkName - Name of the managedNetwork associated with the cognitive services account. Only 'default' is supported.
 */
export const OutboundRuleList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OutboundRuleListInput,
  outputSchema: OutboundRuleListOutput,
}));
// Input Schema
export const OutboundRulesPostInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    managedNetworkName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => ManagedNetworkSettingsSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/managedNetworks/{managedNetworkName}/batchOutboundRules",
    apiVersion: "2026-03-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type OutboundRulesPostInput = typeof OutboundRulesPostInput.Type;

// Output Schema
export const OutboundRulesPostOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => OutboundRuleBasicResourceSchema)),
    ),
  });
export type OutboundRulesPostOutput = typeof OutboundRulesPostOutput.Type;

// The operation
/**
 * The POST API for updating the outbound rules of the managed network associated with the cognitive services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param managedNetworkName - Name of the managedNetwork associated with the cognitive services account. Only 'default' is supported.
 */
export const OutboundRulesPost = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OutboundRulesPostInput,
  outputSchema: OutboundRulesPostOutput,
}));
// Input Schema
export const PrivateEndpointConnectionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => PrivateEndpointConnectionPropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type PrivateEndpointConnectionsCreateOrUpdateInput =
  typeof PrivateEndpointConnectionsCreateOrUpdateInput.Type;

// Output Schema
export const PrivateEndpointConnectionsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PrivateEndpointConnectionPropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PrivateEndpointConnectionsCreateOrUpdateOutput =
  typeof PrivateEndpointConnectionsCreateOrUpdateOutput.Type;

// The operation
/**
 * Update the state of specified private endpoint connection associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Cognitive Services Account
 */
export const PrivateEndpointConnectionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsCreateOrUpdateInput,
    outputSchema: PrivateEndpointConnectionsCreateOrUpdateOutput,
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "location" },
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
 * Deletes the specified private endpoint connection associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Cognitive Services Account
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-03-01",
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
    etag: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PrivateEndpointConnectionsGetOutput =
  typeof PrivateEndpointConnectionsGetOutput.Type;

// The operation
/**
 * Gets the specified private endpoint connection associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Cognitive Services Account
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/privateEndpointConnections",
      apiVersion: "2026-03-01",
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
  });
export type PrivateEndpointConnectionsListOutput =
  typeof PrivateEndpointConnectionsListOutput.Type;

// The operation
/**
 * Gets the private endpoint connections associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const PrivateEndpointConnectionsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListInput,
    outputSchema: PrivateEndpointConnectionsListOutput,
  }));
// Input Schema
export const PrivateLinkResourcesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/privateLinkResources",
      apiVersion: "2026-03-01",
    }),
  );
export type PrivateLinkResourcesListInput =
  typeof PrivateLinkResourcesListInput.Type;

// Output Schema
export const PrivateLinkResourcesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => PrivateLinkResourceSchema)),
    ),
  });
export type PrivateLinkResourcesListOutput =
  typeof PrivateLinkResourcesListOutput.Type;

// The operation
/**
 * Gets the private link resources that need to be created for a Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const PrivateLinkResourcesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateLinkResourcesListInput,
    outputSchema: PrivateLinkResourcesListOutput,
  }),
);
// Input Schema
export const ProjectCapabilityHostsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    capabilityHostName: Schema.String.pipe(T.PathParam()),
    properties: Schema.suspend(() => ProjectCapabilityHostPropertiesSchema),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/capabilityHosts/{capabilityHostName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "original-uri" },
    }),
  );
export type ProjectCapabilityHostsCreateOrUpdateInput =
  typeof ProjectCapabilityHostsCreateOrUpdateInput.Type;

// Output Schema
export const ProjectCapabilityHostsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => ProjectCapabilityHostPropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ProjectCapabilityHostsCreateOrUpdateOutput =
  typeof ProjectCapabilityHostsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update project capabilityHost.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param capabilityHostName - The name of the capability host associated with the Cognitive Services Resource
 */
export const ProjectCapabilityHostsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProjectCapabilityHostsCreateOrUpdateInput,
    outputSchema: ProjectCapabilityHostsCreateOrUpdateOutput,
  }));
// Input Schema
export const ProjectCapabilityHostsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    capabilityHostName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/capabilityHosts/{capabilityHostName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type ProjectCapabilityHostsDeleteInput =
  typeof ProjectCapabilityHostsDeleteInput.Type;

// Output Schema
export const ProjectCapabilityHostsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ProjectCapabilityHostsDeleteOutput =
  typeof ProjectCapabilityHostsDeleteOutput.Type;

// The operation
/**
 * Delete project capabilityHost.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param capabilityHostName - The name of the capability host associated with the Cognitive Services Resource
 */
export const ProjectCapabilityHostsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProjectCapabilityHostsDeleteInput,
    outputSchema: ProjectCapabilityHostsDeleteOutput,
  }));
// Input Schema
export const ProjectCapabilityHostsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    capabilityHostName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/capabilityHosts/{capabilityHostName}",
      apiVersion: "2026-03-01",
    }),
  );
export type ProjectCapabilityHostsGetInput =
  typeof ProjectCapabilityHostsGetInput.Type;

// Output Schema
export const ProjectCapabilityHostsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => ProjectCapabilityHostPropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ProjectCapabilityHostsGetOutput =
  typeof ProjectCapabilityHostsGetOutput.Type;

// The operation
/**
 * Get project capabilityHost.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param capabilityHostName - The name of the capability host associated with the Cognitive Services Resource
 */
export const ProjectCapabilityHostsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProjectCapabilityHostsGetInput,
    outputSchema: ProjectCapabilityHostsGetOutput,
  }),
);
// Input Schema
export const ProjectCapabilityHostsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/capabilityHosts",
      apiVersion: "2026-03-01",
    }),
  );
export type ProjectCapabilityHostsListInput =
  typeof ProjectCapabilityHostsListInput.Type;

// Output Schema
export const ProjectCapabilityHostsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.NullOr(Schema.String)),
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => ProjectCapabilityHostSchema)),
    ),
  });
export type ProjectCapabilityHostsListOutput =
  typeof ProjectCapabilityHostsListOutput.Type;

// The operation
/**
 * List capabilityHost.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 */
export const ProjectCapabilityHostsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProjectCapabilityHostsListInput,
    outputSchema: ProjectCapabilityHostsListOutput,
  }),
);
// Input Schema
export const ProjectConnectionsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.suspend(() => ConnectionPropertiesV2Schema),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/connections/{connectionName}",
      apiVersion: "2026-03-01",
    }),
  );
export type ProjectConnectionsCreateInput =
  typeof ProjectConnectionsCreateInput.Type;

// Output Schema
export const ProjectConnectionsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => ConnectionPropertiesV2Schema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ProjectConnectionsCreateOutput =
  typeof ProjectConnectionsCreateOutput.Type;

// The operation
/**
 * Create or update Cognitive Services project connection under the specified project.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param connectionName - Friendly name of the connection
 */
export const ProjectConnectionsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProjectConnectionsCreateInput,
    outputSchema: ProjectConnectionsCreateOutput,
  }),
);
// Input Schema
export const ProjectConnectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/connections/{connectionName}",
      apiVersion: "2026-03-01",
    }),
  );
export type ProjectConnectionsDeleteInput =
  typeof ProjectConnectionsDeleteInput.Type;

// Output Schema
export const ProjectConnectionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ProjectConnectionsDeleteOutput =
  typeof ProjectConnectionsDeleteOutput.Type;

// The operation
/**
 * Delete Cognitive Services project connection by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param connectionName - Friendly name of the connection
 */
export const ProjectConnectionsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProjectConnectionsDeleteInput,
    outputSchema: ProjectConnectionsDeleteOutput,
  }),
);
// Input Schema
export const ProjectConnectionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/connections/{connectionName}",
      apiVersion: "2026-03-01",
    }),
  );
export type ProjectConnectionsGetInput = typeof ProjectConnectionsGetInput.Type;

// Output Schema
export const ProjectConnectionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => ConnectionPropertiesV2Schema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ProjectConnectionsGetOutput =
  typeof ProjectConnectionsGetOutput.Type;

// The operation
/**
 * Lists Cognitive Services project connection by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param connectionName - Friendly name of the connection
 */
export const ProjectConnectionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProjectConnectionsGetInput,
    outputSchema: ProjectConnectionsGetOutput,
  }),
);
// Input Schema
export const ProjectConnectionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    target: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
    includeAll: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/connections",
      apiVersion: "2026-03-01",
    }),
  );
export type ProjectConnectionsListInput =
  typeof ProjectConnectionsListInput.Type;

// Output Schema
export const ProjectConnectionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.suspend(() => ConnectionPropertiesV2BasicResourceSchema),
      ),
    ),
  });
export type ProjectConnectionsListOutput =
  typeof ProjectConnectionsListOutput.Type;

// The operation
/**
 * Lists all the available Cognitive Services project connections under the specified project.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param target - Target of the connection.
 * @param category - Category of the connection.
 * @param includeAll - query parameter that indicates if get connection call should return both connections and datastores
 */
export const ProjectConnectionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProjectConnectionsListInput,
    outputSchema: ProjectConnectionsListOutput,
  }),
);
// Input Schema
export const ProjectConnectionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => ConnectionPropertiesV2Schema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/connections/{connectionName}",
      apiVersion: "2026-03-01",
    }),
  );
export type ProjectConnectionsUpdateInput =
  typeof ProjectConnectionsUpdateInput.Type;

// Output Schema
export const ProjectConnectionsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => ConnectionPropertiesV2Schema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ProjectConnectionsUpdateOutput =
  typeof ProjectConnectionsUpdateOutput.Type;

// The operation
/**
 * Update Cognitive Services project connection under the specified project.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param connectionName - Friendly name of the connection
 */
export const ProjectConnectionsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProjectConnectionsUpdateInput,
    outputSchema: ProjectConnectionsUpdateOutput,
  }),
);
// Input Schema
export const ProjectsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(Schema.suspend(() => ProjectPropertiesSchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  identity: Schema.optional(Schema.suspend(() => IdentitySchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}",
    apiVersion: "2026-03-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type ProjectsCreateInput = typeof ProjectsCreateInput.Type;

// Output Schema
export const ProjectsCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => ProjectPropertiesSchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  identity: Schema.optional(Schema.suspend(() => IdentitySchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type ProjectsCreateOutput = typeof ProjectsCreateOutput.Type;

// The operation
/**
 * Create Cognitive Services Account's Project. Project is a sub-resource of an account which give AI developer it's individual container to work on.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 */
export const ProjectsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProjectsCreateInput,
  outputSchema: ProjectsCreateOutput,
}));
// Input Schema
export const ProjectsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}",
    apiVersion: "2026-03-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type ProjectsDeleteInput = typeof ProjectsDeleteInput.Type;

// Output Schema
export const ProjectsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ProjectsDeleteOutput = typeof ProjectsDeleteOutput.Type;

// The operation
/**
 * Deletes a Cognitive Services project from the resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 */
export const ProjectsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProjectsDeleteInput,
  outputSchema: ProjectsDeleteOutput,
}));
// Input Schema
export const ProjectsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}",
    apiVersion: "2026-03-01",
  }),
);
export type ProjectsGetInput = typeof ProjectsGetInput.Type;

// Output Schema
export const ProjectsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => ProjectPropertiesSchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  identity: Schema.optional(Schema.suspend(() => IdentitySchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type ProjectsGetOutput = typeof ProjectsGetOutput.Type;

// The operation
/**
 * Returns a Cognitive Services project specified by the parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 */
export const ProjectsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProjectsGetInput,
  outputSchema: ProjectsGetOutput,
}));
// Input Schema
export const ProjectsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects",
    apiVersion: "2026-03-01",
  }),
);
export type ProjectsListInput = typeof ProjectsListInput.Type;

// Output Schema
export const ProjectsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.optional(Schema.Array(Schema.suspend(() => ProjectSchema))),
});
export type ProjectsListOutput = typeof ProjectsListOutput.Type;

// The operation
/**
 * Returns all the projects in a Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const ProjectsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProjectsListInput,
  outputSchema: ProjectsListOutput,
}));
// Input Schema
export const ProjectsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(Schema.suspend(() => ProjectPropertiesSchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  identity: Schema.optional(Schema.suspend(() => IdentitySchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}",
    apiVersion: "2026-03-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type ProjectsUpdateInput = typeof ProjectsUpdateInput.Type;

// Output Schema
export const ProjectsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => ProjectPropertiesSchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  identity: Schema.optional(Schema.suspend(() => IdentitySchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type ProjectsUpdateOutput = typeof ProjectsUpdateOutput.Type;

// The operation
/**
 * Updates a Cognitive Services Project
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 */
export const ProjectsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProjectsUpdateInput,
  outputSchema: ProjectsUpdateOutput,
}));
// Input Schema
export const QuotaTiersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    default: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => QuotaTierPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/quotaTiers/{default}",
      apiVersion: "2026-03-01",
    }),
  );
export type QuotaTiersCreateOrUpdateInput =
  typeof QuotaTiersCreateOrUpdateInput.Type;

// Output Schema
export const QuotaTiersCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => QuotaTierPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type QuotaTiersCreateOrUpdateOutput =
  typeof QuotaTiersCreateOrUpdateOutput.Type;

// The operation
/**
 * Updates the Quota Tier resource for a subscription.
 *
 * Update the Quota Tier information for the given subscription. QuotaTiers is a subscription wide resource type. It holds current tier information.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param default - Default parameter. Leave the value as default.
 */
export const QuotaTiersCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: QuotaTiersCreateOrUpdateInput,
    outputSchema: QuotaTiersCreateOrUpdateOutput,
  }),
);
// Input Schema
export const QuotaTiersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  default: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/quotaTiers/{default}",
    apiVersion: "2026-03-01",
  }),
);
export type QuotaTiersGetInput = typeof QuotaTiersGetInput.Type;

// Output Schema
export const QuotaTiersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => QuotaTierPropertiesSchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type QuotaTiersGetOutput = typeof QuotaTiersGetOutput.Type;

// The operation
/**
 * Gets the Quota Tier for a subscription
 *
 * Gets the Quota Tier information for the given subscription. QuotaTiers is a subscription wide resource type. It holds current tier information.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param default - Default parameter. Leave the value as default.
 */
export const QuotaTiersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QuotaTiersGetInput,
  outputSchema: QuotaTiersGetOutput,
}));
// Input Schema
export const QuotaTiersListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/quotaTiers",
      apiVersion: "2026-03-01",
    }),
  );
export type QuotaTiersListBySubscriptionInput =
  typeof QuotaTiersListBySubscriptionInput.Type;

// Output Schema
export const QuotaTiersListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Array(Schema.suspend(() => QuotaTierSchema))),
  });
export type QuotaTiersListBySubscriptionOutput =
  typeof QuotaTiersListBySubscriptionOutput.Type;

// The operation
/**
 * Returns all the resources of a particular type belonging to a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const QuotaTiersListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: QuotaTiersListBySubscriptionInput,
    outputSchema: QuotaTiersListBySubscriptionOutput,
  }));
// Input Schema
export const QuotaTiersUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  default: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(Schema.suspend(() => QuotaTierPropertiesSchema)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/quotaTiers/{default}",
    apiVersion: "2026-03-01",
  }),
);
export type QuotaTiersUpdateInput = typeof QuotaTiersUpdateInput.Type;

// Output Schema
export const QuotaTiersUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.optional(
      Schema.suspend(() => QuotaTierPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
export type QuotaTiersUpdateOutput = typeof QuotaTiersUpdateOutput.Type;

// The operation
/**
 * Updates the Quota Tier resource for a subscription. The only properties that can be updated are  "tierUpgradePolicy"
 *
 * Update the Quota Tier information for the given subscription. QuotaTiers is a subscription wide resource type. It holds current tier information.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param default - Default parameter. Leave the value as default.
 */
export const QuotaTiersUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QuotaTiersUpdateInput,
  outputSchema: QuotaTiersUpdateOutput,
}));
// Input Schema
export const RaiBlocklistItemsBatchAddInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiBlocklistName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiBlocklists/{raiBlocklistName}/addRaiBlocklistItems",
      apiVersion: "2026-03-01",
    }),
  );
export type RaiBlocklistItemsBatchAddInput =
  typeof RaiBlocklistItemsBatchAddInput.Type;

// Output Schema
export const RaiBlocklistItemsBatchAddOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => RaiBlocklistPropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type RaiBlocklistItemsBatchAddOutput =
  typeof RaiBlocklistItemsBatchAddOutput.Type;

// The operation
/**
 * Batch operation to add blocklist items.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiBlocklistName - The name of the RaiBlocklist associated with the Cognitive Services Account
 */
export const RaiBlocklistItemsBatchAdd = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RaiBlocklistItemsBatchAddInput,
    outputSchema: RaiBlocklistItemsBatchAddOutput,
  }),
);
// Input Schema
export const RaiBlocklistItemsBatchDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiBlocklistName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiBlocklists/{raiBlocklistName}/deleteRaiBlocklistItems",
      apiVersion: "2026-03-01",
    }),
  );
export type RaiBlocklistItemsBatchDeleteInput =
  typeof RaiBlocklistItemsBatchDeleteInput.Type;

// Output Schema
export const RaiBlocklistItemsBatchDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RaiBlocklistItemsBatchDeleteOutput =
  typeof RaiBlocklistItemsBatchDeleteOutput.Type;

// The operation
/**
 * Batch operation to delete blocklist items.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiBlocklistName - The name of the RaiBlocklist associated with the Cognitive Services Account
 */
export const RaiBlocklistItemsBatchDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RaiBlocklistItemsBatchDeleteInput,
    outputSchema: RaiBlocklistItemsBatchDeleteOutput,
  }));
// Input Schema
export const RaiBlocklistItemsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiBlocklistName: Schema.String.pipe(T.PathParam()),
    raiBlocklistItemName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => RaiBlocklistItemPropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiBlocklists/{raiBlocklistName}/raiBlocklistItems/{raiBlocklistItemName}",
      apiVersion: "2026-03-01",
    }),
  );
export type RaiBlocklistItemsCreateOrUpdateInput =
  typeof RaiBlocklistItemsCreateOrUpdateInput.Type;

// Output Schema
export const RaiBlocklistItemsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => RaiBlocklistItemPropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type RaiBlocklistItemsCreateOrUpdateOutput =
  typeof RaiBlocklistItemsCreateOrUpdateOutput.Type;

// The operation
/**
 * Update the state of specified blocklist item associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiBlocklistName - The name of the RaiBlocklist associated with the Cognitive Services Account
 * @param raiBlocklistItemName - The name of the RaiBlocklist Item associated with the custom blocklist
 */
export const RaiBlocklistItemsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RaiBlocklistItemsCreateOrUpdateInput,
    outputSchema: RaiBlocklistItemsCreateOrUpdateOutput,
  }));
// Input Schema
export const RaiBlocklistItemsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiBlocklistName: Schema.String.pipe(T.PathParam()),
    raiBlocklistItemName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiBlocklists/{raiBlocklistName}/raiBlocklistItems/{raiBlocklistItemName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type RaiBlocklistItemsDeleteInput =
  typeof RaiBlocklistItemsDeleteInput.Type;

// Output Schema
export const RaiBlocklistItemsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RaiBlocklistItemsDeleteOutput =
  typeof RaiBlocklistItemsDeleteOutput.Type;

// The operation
/**
 * Deletes the specified blocklist Item associated with the custom blocklist.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiBlocklistName - The name of the RaiBlocklist associated with the Cognitive Services Account
 * @param raiBlocklistItemName - The name of the RaiBlocklist Item associated with the custom blocklist
 */
export const RaiBlocklistItemsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RaiBlocklistItemsDeleteInput,
    outputSchema: RaiBlocklistItemsDeleteOutput,
  }),
);
// Input Schema
export const RaiBlocklistItemsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiBlocklistName: Schema.String.pipe(T.PathParam()),
    raiBlocklistItemName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiBlocklists/{raiBlocklistName}/raiBlocklistItems/{raiBlocklistItemName}",
      apiVersion: "2026-03-01",
    }),
  );
export type RaiBlocklistItemsGetInput = typeof RaiBlocklistItemsGetInput.Type;

// Output Schema
export const RaiBlocklistItemsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => RaiBlocklistItemPropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type RaiBlocklistItemsGetOutput = typeof RaiBlocklistItemsGetOutput.Type;

// The operation
/**
 * Gets the specified custom blocklist Item associated with the custom blocklist.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiBlocklistName - The name of the RaiBlocklist associated with the Cognitive Services Account
 * @param raiBlocklistItemName - The name of the RaiBlocklist Item associated with the custom blocklist
 */
export const RaiBlocklistItemsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RaiBlocklistItemsGetInput,
    outputSchema: RaiBlocklistItemsGetOutput,
  }),
);
// Input Schema
export const RaiBlocklistItemsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiBlocklistName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiBlocklists/{raiBlocklistName}/raiBlocklistItems",
      apiVersion: "2026-03-01",
    }),
  );
export type RaiBlocklistItemsListInput = typeof RaiBlocklistItemsListInput.Type;

// Output Schema
export const RaiBlocklistItemsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => RaiBlocklistItemSchema)),
    ),
  });
export type RaiBlocklistItemsListOutput =
  typeof RaiBlocklistItemsListOutput.Type;

// The operation
/**
 * Gets the blocklist items associated with the custom blocklist.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiBlocklistName - The name of the RaiBlocklist associated with the Cognitive Services Account
 */
export const RaiBlocklistItemsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RaiBlocklistItemsListInput,
    outputSchema: RaiBlocklistItemsListOutput,
  }),
);
// Input Schema
export const RaiBlocklistsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiBlocklistName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => RaiBlocklistPropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiBlocklists/{raiBlocklistName}",
      apiVersion: "2026-03-01",
    }),
  );
export type RaiBlocklistsCreateOrUpdateInput =
  typeof RaiBlocklistsCreateOrUpdateInput.Type;

// Output Schema
export const RaiBlocklistsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => RaiBlocklistPropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type RaiBlocklistsCreateOrUpdateOutput =
  typeof RaiBlocklistsCreateOrUpdateOutput.Type;

// The operation
/**
 * Update the state of specified blocklist associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiBlocklistName - The name of the RaiBlocklist associated with the Cognitive Services Account
 */
export const RaiBlocklistsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RaiBlocklistsCreateOrUpdateInput,
    outputSchema: RaiBlocklistsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const RaiBlocklistsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiBlocklistName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiBlocklists/{raiBlocklistName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type RaiBlocklistsDeleteInput = typeof RaiBlocklistsDeleteInput.Type;

// Output Schema
export const RaiBlocklistsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RaiBlocklistsDeleteOutput = typeof RaiBlocklistsDeleteOutput.Type;

// The operation
/**
 * Deletes the specified custom blocklist associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiBlocklistName - The name of the RaiBlocklist associated with the Cognitive Services Account
 */
export const RaiBlocklistsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RaiBlocklistsDeleteInput,
  outputSchema: RaiBlocklistsDeleteOutput,
}));
// Input Schema
export const RaiBlocklistsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  raiBlocklistName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiBlocklists/{raiBlocklistName}",
    apiVersion: "2026-03-01",
  }),
);
export type RaiBlocklistsGetInput = typeof RaiBlocklistsGetInput.Type;

// Output Schema
export const RaiBlocklistsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.optional(
      Schema.suspend(() => RaiBlocklistPropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
export type RaiBlocklistsGetOutput = typeof RaiBlocklistsGetOutput.Type;

// The operation
/**
 * Gets the specified custom blocklist associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiBlocklistName - The name of the RaiBlocklist associated with the Cognitive Services Account
 */
export const RaiBlocklistsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RaiBlocklistsGetInput,
  outputSchema: RaiBlocklistsGetOutput,
}));
// Input Schema
export const RaiBlocklistsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiBlocklists",
    apiVersion: "2026-03-01",
  }),
);
export type RaiBlocklistsListInput = typeof RaiBlocklistsListInput.Type;

// Output Schema
export const RaiBlocklistsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => RaiBlocklistSchema)),
    ),
  });
export type RaiBlocklistsListOutput = typeof RaiBlocklistsListOutput.Type;

// The operation
/**
 * Gets the custom blocklists associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const RaiBlocklistsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RaiBlocklistsListInput,
  outputSchema: RaiBlocklistsListOutput,
}));
// Input Schema
export const RaiContentFiltersGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    filterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/locations/{location}/raiContentFilters/{filterName}",
      apiVersion: "2026-03-01",
    }),
  );
export type RaiContentFiltersGetInput = typeof RaiContentFiltersGetInput.Type;

// Output Schema
export const RaiContentFiltersGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => RaiContentFilterPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type RaiContentFiltersGetOutput = typeof RaiContentFiltersGetOutput.Type;

// The operation
/**
 * Get Content Filters by Name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param filterName - The name of the RAI Content Filter.
 */
export const RaiContentFiltersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RaiContentFiltersGetInput,
    outputSchema: RaiContentFiltersGetOutput,
  }),
);
// Input Schema
export const RaiContentFiltersListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/locations/{location}/raiContentFilters",
      apiVersion: "2026-03-01",
    }),
  );
export type RaiContentFiltersListInput = typeof RaiContentFiltersListInput.Type;

// Output Schema
export const RaiContentFiltersListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => RaiContentFilterSchema)),
    ),
  });
export type RaiContentFiltersListOutput =
  typeof RaiContentFiltersListOutput.Type;

// The operation
/**
 * List Content Filters types.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 */
export const RaiContentFiltersList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RaiContentFiltersListInput,
    outputSchema: RaiContentFiltersListOutput,
  }),
);
// Input Schema
export const RaiExternalSafetyProviderCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    safetyProviderName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => RaiExternalSafetyProviderSchemaPropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/raiExternalSafetyProviders/{safetyProviderName}",
      apiVersion: "2026-03-01",
    }),
  );
export type RaiExternalSafetyProviderCreateOrUpdateInput =
  typeof RaiExternalSafetyProviderCreateOrUpdateInput.Type;

// Output Schema
export const RaiExternalSafetyProviderCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => RaiExternalSafetyProviderSchemaPropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type RaiExternalSafetyProviderCreateOrUpdateOutput =
  typeof RaiExternalSafetyProviderCreateOrUpdateOutput.Type;

// The operation
/**
 * Create the rai safety provider associated with the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param safetyProviderName - The name of the Rai External Safety Provider associated with the Cognitive Services Account
 */
export const RaiExternalSafetyProviderCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RaiExternalSafetyProviderCreateOrUpdateInput,
    outputSchema: RaiExternalSafetyProviderCreateOrUpdateOutput,
  }));
// Input Schema
export const RaiExternalSafetyProviderDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    safetyProviderName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/raiExternalSafetyProviders/{safetyProviderName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type RaiExternalSafetyProviderDeleteInput =
  typeof RaiExternalSafetyProviderDeleteInput.Type;

// Output Schema
export const RaiExternalSafetyProviderDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RaiExternalSafetyProviderDeleteOutput =
  typeof RaiExternalSafetyProviderDeleteOutput.Type;

// The operation
/**
 * Deletes the specified custom topic associated with the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param safetyProviderName - The name of the Rai External Safety Provider associated with the Cognitive Services Account
 */
export const RaiExternalSafetyProviderDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RaiExternalSafetyProviderDeleteInput,
    outputSchema: RaiExternalSafetyProviderDeleteOutput,
  }));
// Input Schema
export const RaiExternalSafetyProviderGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    safetyProviderName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/raiExternalSafetyProviders/{safetyProviderName}",
      apiVersion: "2026-03-01",
    }),
  );
export type RaiExternalSafetyProviderGetInput =
  typeof RaiExternalSafetyProviderGetInput.Type;

// Output Schema
export const RaiExternalSafetyProviderGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => RaiExternalSafetyProviderSchemaPropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type RaiExternalSafetyProviderGetOutput =
  typeof RaiExternalSafetyProviderGetOutput.Type;

// The operation
/**
 * Gets the specified external safety provider associated with the Subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param safetyProviderName - The name of the Rai External Safety Provider associated with the Cognitive Services Account
 */
export const RaiExternalSafetyProviderGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RaiExternalSafetyProviderGetInput,
    outputSchema: RaiExternalSafetyProviderGetOutput,
  }));
// Input Schema
export const RaiExternalSafetyProvidersListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/raiExternalSafetyProviders",
      apiVersion: "2026-03-01",
    }),
  );
export type RaiExternalSafetyProvidersListInput =
  typeof RaiExternalSafetyProvidersListInput.Type;

// Output Schema
export const RaiExternalSafetyProvidersListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => RaiExternalSafetyProviderSchemaSchema)),
    ),
  });
export type RaiExternalSafetyProvidersListOutput =
  typeof RaiExternalSafetyProvidersListOutput.Type;

// The operation
/**
 * Gets the safety providers associated with the subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const RaiExternalSafetyProvidersList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RaiExternalSafetyProvidersListInput,
    outputSchema: RaiExternalSafetyProvidersListOutput,
  }));
// Input Schema
export const RaiPoliciesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiPolicyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => RaiPolicyPropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiPolicies/{raiPolicyName}",
      apiVersion: "2026-03-01",
    }),
  );
export type RaiPoliciesCreateOrUpdateInput =
  typeof RaiPoliciesCreateOrUpdateInput.Type;

// Output Schema
export const RaiPoliciesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => RaiPolicyPropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type RaiPoliciesCreateOrUpdateOutput =
  typeof RaiPoliciesCreateOrUpdateOutput.Type;

// The operation
/**
 * Update the state of specified Content Filters associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiPolicyName - The name of the RaiPolicy associated with the Cognitive Services Account
 */
export const RaiPoliciesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RaiPoliciesCreateOrUpdateInput,
    outputSchema: RaiPoliciesCreateOrUpdateOutput,
  }),
);
// Input Schema
export const RaiPoliciesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiPolicyName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiPolicies/{raiPolicyName}",
    apiVersion: "2026-03-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type RaiPoliciesDeleteInput = typeof RaiPoliciesDeleteInput.Type;

// Output Schema
export const RaiPoliciesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RaiPoliciesDeleteOutput = typeof RaiPoliciesDeleteOutput.Type;

// The operation
/**
 * Deletes the specified Content Filters associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiPolicyName - The name of the RaiPolicy associated with the Cognitive Services Account
 */
export const RaiPoliciesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RaiPoliciesDeleteInput,
  outputSchema: RaiPoliciesDeleteOutput,
}));
// Input Schema
export const RaiPoliciesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  raiPolicyName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiPolicies/{raiPolicyName}",
    apiVersion: "2026-03-01",
  }),
);
export type RaiPoliciesGetInput = typeof RaiPoliciesGetInput.Type;

// Output Schema
export const RaiPoliciesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => RaiPolicyPropertiesSchema)),
  etag: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type RaiPoliciesGetOutput = typeof RaiPoliciesGetOutput.Type;

// The operation
/**
 * Gets the specified Content Filters associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiPolicyName - The name of the RaiPolicy associated with the Cognitive Services Account
 */
export const RaiPoliciesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RaiPoliciesGetInput,
  outputSchema: RaiPoliciesGetOutput,
}));
// Input Schema
export const RaiPoliciesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiPolicies",
    apiVersion: "2026-03-01",
  }),
);
export type RaiPoliciesListInput = typeof RaiPoliciesListInput.Type;

// Output Schema
export const RaiPoliciesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.optional(Schema.Array(Schema.suspend(() => RaiPolicySchema))),
});
export type RaiPoliciesListOutput = typeof RaiPoliciesListOutput.Type;

// The operation
/**
 * Gets the content filters associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const RaiPoliciesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RaiPoliciesListInput,
  outputSchema: RaiPoliciesListOutput,
}));
// Input Schema
export const RaiToolLabelsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiToolConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => RaiToolLabelPropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiToolLabels/{raiToolConnectionName}",
      apiVersion: "2026-03-01",
    }),
  );
export type RaiToolLabelsCreateOrUpdateInput =
  typeof RaiToolLabelsCreateOrUpdateInput.Type;

// Output Schema
export const RaiToolLabelsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => RaiToolLabelPropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type RaiToolLabelsCreateOrUpdateOutput =
  typeof RaiToolLabelsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates the RAI Tool Label associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiToolConnectionName - The name of the Rai Tool Label
 */
export const RaiToolLabelsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RaiToolLabelsCreateOrUpdateInput,
    outputSchema: RaiToolLabelsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const RaiToolLabelsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiToolConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiToolLabels/{raiToolConnectionName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type RaiToolLabelsDeleteInput = typeof RaiToolLabelsDeleteInput.Type;

// Output Schema
export const RaiToolLabelsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RaiToolLabelsDeleteOutput = typeof RaiToolLabelsDeleteOutput.Type;

// The operation
/**
 * Deletes the specified RAI Tool Label associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiToolConnectionName - The name of the Rai Tool Label
 */
export const RaiToolLabelsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RaiToolLabelsDeleteInput,
  outputSchema: RaiToolLabelsDeleteOutput,
}));
// Input Schema
export const RaiToolLabelsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  raiToolConnectionName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiToolLabels/{raiToolConnectionName}",
    apiVersion: "2026-03-01",
  }),
);
export type RaiToolLabelsGetInput = typeof RaiToolLabelsGetInput.Type;

// Output Schema
export const RaiToolLabelsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.optional(
      Schema.suspend(() => RaiToolLabelPropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
export type RaiToolLabelsGetOutput = typeof RaiToolLabelsGetOutput.Type;

// The operation
/**
 * Gets the specified RAI Tool Label associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiToolConnectionName - The name of the Rai Tool Label
 */
export const RaiToolLabelsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RaiToolLabelsGetInput,
  outputSchema: RaiToolLabelsGetOutput,
}));
// Input Schema
export const RaiToolLabelsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiToolLabels",
    apiVersion: "2026-03-01",
  }),
);
export type RaiToolLabelsListInput = typeof RaiToolLabelsListInput.Type;

// Output Schema
export const RaiToolLabelsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => RaiToolLabelSchema)),
    ),
  });
export type RaiToolLabelsListOutput = typeof RaiToolLabelsListOutput.Type;

// The operation
/**
 * Lists all RAI Tool Labels associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const RaiToolLabelsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RaiToolLabelsListInput,
  outputSchema: RaiToolLabelsListOutput,
}));
// Input Schema
export const RaiTopicsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiTopicName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(Schema.suspend(() => RaiTopicPropertiesSchema)),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raitopics/{raiTopicName}",
      apiVersion: "2026-03-01",
    }),
  );
export type RaiTopicsCreateOrUpdateInput =
  typeof RaiTopicsCreateOrUpdateInput.Type;

// Output Schema
export const RaiTopicsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => RaiTopicPropertiesSchema)),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type RaiTopicsCreateOrUpdateOutput =
  typeof RaiTopicsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create the rai topic associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiTopicName - The name of the Rai Topic associated with the Cognitive Services Account
 */
export const RaiTopicsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RaiTopicsCreateOrUpdateInput,
    outputSchema: RaiTopicsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const RaiTopicsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  raiTopicName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raitopics/{raiTopicName}",
    apiVersion: "2026-03-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type RaiTopicsDeleteInput = typeof RaiTopicsDeleteInput.Type;

// Output Schema
export const RaiTopicsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RaiTopicsDeleteOutput = typeof RaiTopicsDeleteOutput.Type;

// The operation
/**
 * Deletes the specified custom topic associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiTopicName - The name of the Rai Topic associated with the Cognitive Services Account
 */
export const RaiTopicsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RaiTopicsDeleteInput,
  outputSchema: RaiTopicsDeleteOutput,
}));
// Input Schema
export const RaiTopicsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  raiTopicName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raitopics/{raiTopicName}",
    apiVersion: "2026-03-01",
  }),
);
export type RaiTopicsGetInput = typeof RaiTopicsGetInput.Type;

// Output Schema
export const RaiTopicsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => RaiTopicPropertiesSchema)),
  etag: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type RaiTopicsGetOutput = typeof RaiTopicsGetOutput.Type;

// The operation
/**
 * Gets the specified custom topic associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiTopicName - The name of the Rai Topic associated with the Cognitive Services Account
 */
export const RaiTopicsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RaiTopicsGetInput,
  outputSchema: RaiTopicsGetOutput,
}));
// Input Schema
export const RaiTopicsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raitopics",
    apiVersion: "2026-03-01",
  }),
);
export type RaiTopicsListInput = typeof RaiTopicsListInput.Type;

// Output Schema
export const RaiTopicsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.optional(Schema.Array(Schema.suspend(() => RaiTopicSchema))),
});
export type RaiTopicsListOutput = typeof RaiTopicsListOutput.Type;

// The operation
/**
 * Gets the custom topics associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const RaiTopicsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RaiTopicsListInput,
  outputSchema: RaiTopicsListOutput,
}));
// Input Schema
export const ResourceSkusListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/skus",
    apiVersion: "2026-03-01",
  }),
);
export type ResourceSkusListInput = typeof ResourceSkusListInput.Type;

// Output Schema
export const ResourceSkusListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    value: Schema.Array(Schema.suspend(() => ResourceSkuSchema)),
    nextLink: Schema.optional(Schema.String),
  },
);
export type ResourceSkusListOutput = typeof ResourceSkusListOutput.Type;

// The operation
/**
 * Gets the list of Microsoft.CognitiveServices SKUs available for your Subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ResourceSkusList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ResourceSkusListInput,
  outputSchema: ResourceSkusListOutput,
}));
// Input Schema
export const SubscriptionRaiPolicyCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    raiPolicyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => RaiPolicyPropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/raiPolicy/{raiPolicyName}",
      apiVersion: "2026-03-01",
    }),
  );
export type SubscriptionRaiPolicyCreateOrUpdateInput =
  typeof SubscriptionRaiPolicyCreateOrUpdateInput.Type;

// Output Schema
export const SubscriptionRaiPolicyCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => RaiPolicyPropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SubscriptionRaiPolicyCreateOrUpdateOutput =
  typeof SubscriptionRaiPolicyCreateOrUpdateOutput.Type;

// The operation
/**
 * Update the state of specified Content Filters associated with the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param raiPolicyName - The name of the RaiPolicy associated with the Cognitive Services Account
 */
export const SubscriptionRaiPolicyCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SubscriptionRaiPolicyCreateOrUpdateInput,
    outputSchema: SubscriptionRaiPolicyCreateOrUpdateOutput,
  }));
// Input Schema
export const SubscriptionRaiPolicyDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    raiPolicyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/raiPolicy/{raiPolicyName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type SubscriptionRaiPolicyDeleteInput =
  typeof SubscriptionRaiPolicyDeleteInput.Type;

// Output Schema
export const SubscriptionRaiPolicyDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SubscriptionRaiPolicyDeleteOutput =
  typeof SubscriptionRaiPolicyDeleteOutput.Type;

// The operation
/**
 * Deletes the specified Content Filters associated with the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param raiPolicyName - The name of the RaiPolicy associated with the Cognitive Services Account
 */
export const SubscriptionRaiPolicyDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SubscriptionRaiPolicyDeleteInput,
    outputSchema: SubscriptionRaiPolicyDeleteOutput,
  }),
);
// Input Schema
export const SubscriptionRaiPolicyGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    raiPolicyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/raiPolicy/{raiPolicyName}",
      apiVersion: "2026-03-01",
    }),
  );
export type SubscriptionRaiPolicyGetInput =
  typeof SubscriptionRaiPolicyGetInput.Type;

// Output Schema
export const SubscriptionRaiPolicyGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => RaiPolicyPropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SubscriptionRaiPolicyGetOutput =
  typeof SubscriptionRaiPolicyGetOutput.Type;

// The operation
/**
 * Gets the specified Content Filters associated with the Subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param raiPolicyName - The name of the RaiPolicy associated with the Cognitive Services Account
 */
export const SubscriptionRaiPolicyGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SubscriptionRaiPolicyGetInput,
    outputSchema: SubscriptionRaiPolicyGetOutput,
  }),
);
// Input Schema
export const TestRaiExternalSafetyProviderCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    safetyProviderName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => RaiExternalSafetyProviderSchemaPropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/testRaiExternalSafetyProvider/{safetyProviderName}",
      apiVersion: "2026-03-01",
    }),
  );
export type TestRaiExternalSafetyProviderCreateOrUpdateInput =
  typeof TestRaiExternalSafetyProviderCreateOrUpdateInput.Type;

// Output Schema
export const TestRaiExternalSafetyProviderCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => RaiExternalSafetyProviderSchemaPropertiesSchema),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type TestRaiExternalSafetyProviderCreateOrUpdateOutput =
  typeof TestRaiExternalSafetyProviderCreateOrUpdateOutput.Type;

// The operation
/**
 * Test the rai safety provider associated with the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param safetyProviderName - The name of the Rai External Safety Provider associated with the Cognitive Services Account
 */
export const TestRaiExternalSafetyProviderCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TestRaiExternalSafetyProviderCreateOrUpdateInput,
    outputSchema: TestRaiExternalSafetyProviderCreateOrUpdateOutput,
  }));
// Input Schema
export const UsagesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
  $filter: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/locations/{location}/usages",
    apiVersion: "2026-03-01",
  }),
);
export type UsagesListInput = typeof UsagesListInput.Type;

// Output Schema
export const UsagesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.optional(Schema.Array(Schema.suspend(() => UsageSchema))),
});
export type UsagesListOutput = typeof UsagesListOutput.Type;

// The operation
/**
 * Get usages for the requested subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param $filter - An OData filter expression that describes a subset of usages to return. The supported parameter is name.value (name of the metric, can have an or of multiple names).
 */
export const UsagesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UsagesListInput,
  outputSchema: UsagesListOutput,
}));
