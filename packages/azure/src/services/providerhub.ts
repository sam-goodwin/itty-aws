/**
 * Azure Providerhub API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Shared schemas
const OperationsDefinitionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  isDataAction: Schema.optional(Schema.Boolean),
  origin: Schema.optional(Schema.suspend(() => OperationOriginsSchema)),
  display: Schema.suspend(() => OperationsDefinitionDisplaySchema),
  actionType: Schema.optional(Schema.suspend(() => OperationActionTypeSchema)),
  properties: Schema.optional(Schema.Unknown),
});
const OperationOriginsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NotSpecified",
  "User",
  "System",
]);
const OperationsDefinitionDisplaySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provider: Schema.String,
    resource: Schema.String,
    operation: Schema.String,
    description: Schema.String,
  });
const OperationActionTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NotSpecified",
  "Internal",
]);
const ProviderMonitorSettingSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
const ProviderRegistrationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const ProviderRegistrationPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    providerAuthentication: Schema.optional(
      Schema.suspend(
        () => ResourceProviderManifestPropertiesProviderAuthenticationSchema,
      ),
    ),
    providerAuthorizations: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceProviderAuthorizationSchema)),
    ),
    namespace: Schema.optional(Schema.String),
    services: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceProviderServiceSchema)),
    ),
    serviceName: Schema.optional(Schema.String),
    providerVersion: Schema.optional(Schema.String),
    providerType: Schema.optional(
      Schema.suspend(() => ResourceProviderTypeSchema),
    ),
    requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
    featuresRule: Schema.optional(
      Schema.suspend(
        () => ResourceProviderManifestPropertiesFeaturesRuleSchema,
      ),
    ),
    requestHeaderOptions: Schema.optional(
      Schema.suspend(
        () => ResourceProviderManifestPropertiesRequestHeaderOptionsSchema,
      ),
    ),
    management: Schema.optional(
      Schema.suspend(() => ResourceProviderManifestPropertiesManagementSchema),
    ),
    capabilities: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceProviderCapabilitiesSchema)),
    ),
    crossTenantTokenValidation: Schema.optional(
      Schema.suspend(() => CrossTenantTokenValidationSchema),
    ),
    metadata: Schema.optional(Schema.Unknown),
    templateDeploymentOptions: Schema.optional(
      Schema.suspend(
        () => ResourceProviderManifestPropertiesTemplateDeploymentOptionsSchema,
      ),
    ),
    globalNotificationEndpoints: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceProviderEndpointSchema)),
    ),
    enableTenantLinkedNotification: Schema.optional(
      Schema.NullOr(Schema.Boolean),
    ),
    notifications: Schema.optional(
      Schema.Array(Schema.suspend(() => NotificationSchema)),
    ),
    linkedNotificationRules: Schema.optional(
      Schema.Array(Schema.suspend(() => FanoutLinkedNotificationRuleSchema)),
    ),
    resourceProviderAuthorizationRules: Schema.optional(
      Schema.suspend(() => ResourceProviderAuthorizationRulesSchema),
    ),
    dstsConfiguration: Schema.optional(
      Schema.suspend(
        () => ResourceProviderManifestPropertiesDstsConfigurationSchema,
      ),
    ),
    notificationOptions: Schema.optional(
      Schema.suspend(() => NotificationOptionsSchema),
    ),
    resourceHydrationAccounts: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceHydrationAccountSchema)),
    ),
    notificationSettings: Schema.optional(
      Schema.suspend(
        () => ResourceProviderManifestPropertiesNotificationSettingsSchema,
      ),
    ),
    managementGroupGlobalNotificationEndpoints: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceProviderEndpointSchema)),
    ),
    optionalFeatures: Schema.optional(Schema.Array(Schema.String)),
    resourceGroupLockOptionDuringMove: Schema.optional(
      Schema.suspend(
        () =>
          ResourceProviderManifestPropertiesResourceGroupLockOptionDuringMoveSchema,
      ),
    ),
    responseOptions: Schema.optional(
      Schema.suspend(
        () => ResourceProviderManifestPropertiesResponseOptionsSchema,
      ),
    ),
    legacyNamespace: Schema.optional(Schema.String),
    legacyRegistrations: Schema.optional(Schema.Array(Schema.String)),
    customManifestVersion: Schema.optional(Schema.String),
  });
const ResourceProviderManifestPropertiesProviderAuthenticationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowedAudiences: Schema.Array(Schema.String),
  });
const ResourceProviderAuthorizationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationId: Schema.optional(Schema.String),
    roleDefinitionId: Schema.optional(Schema.String),
    managedByRoleDefinitionId: Schema.optional(Schema.String),
    managedByAuthorization: Schema.optional(
      Schema.suspend(
        () => ResourceProviderAuthorizationManagedByAuthorizationSchema,
      ),
    ),
    allowedThirdPartyExtensions: Schema.optional(
      Schema.Array(Schema.suspend(() => ThirdPartyExtensionSchema)),
    ),
    groupingTag: Schema.optional(Schema.String),
  });
const ResourceProviderAuthorizationManagedByAuthorizationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    additionalAuthorizations: Schema.optional(
      Schema.Array(Schema.suspend(() => AdditionalAuthorizationSchema)),
    ),
    managedByResourceRoleDefinitionId: Schema.optional(Schema.String),
    allowManagedByInheritance: Schema.optional(Schema.Boolean),
  });
const AdditionalAuthorizationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    applicationId: Schema.optional(Schema.String),
    roleDefinitionId: Schema.optional(Schema.String),
  },
);
const ThirdPartyExtensionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
});
const ResourceProviderServiceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    serviceName: Schema.optional(Schema.String),
    status: Schema.optional(Schema.suspend(() => ServiceStatusSchema)),
  },
);
const ServiceStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Active",
  "Inactive",
]);
const ResourceProviderTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NotSpecified",
  "Internal",
  "External",
  "Hidden",
  "RegistrationFree",
  "LegacyRegistrationRequired",
  "TenantOnly",
  "AuthorizationFree",
]);
const ResourceProviderManifestPropertiesFeaturesRuleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requiredFeaturesPolicy: Schema.suspend(() => FeaturesPolicySchema),
  });
const FeaturesPolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Any",
  "All",
]);
const ResourceProviderManifestPropertiesRequestHeaderOptionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    optInHeaders: Schema.optional(Schema.suspend(() => OptInHeaderTypeSchema)),
    optOutHeaders: Schema.optional(
      Schema.suspend(() => OptOutHeaderTypeSchema),
    ),
  });
const OptInHeaderTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NotSpecified",
  "SignedUserToken",
  "ClientGroupMembership",
  "SignedAuxiliaryTokens",
  "UnboundedClientGroupMembership",
  "PrivateLinkId",
  "PrivateLinkResourceId",
  "ManagementGroupAncestorsEncoded",
  "PrivateLinkVnetTrafficTag",
  "ResourceGroupLocation",
  "ClientPrincipalNameEncoded",
  "MSIResourceIdEncoded",
]);
const OptOutHeaderTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NotSpecified",
  "SystemDataCreatedByLastModifiedBy",
]);
const ResourceProviderManifestPropertiesManagementSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schemaOwners: Schema.optional(Schema.Array(Schema.String)),
    manifestOwners: Schema.optional(Schema.Array(Schema.String)),
    authorizationOwners: Schema.optional(Schema.Array(Schema.String)),
    incidentRoutingService: Schema.optional(Schema.String),
    incidentRoutingTeam: Schema.optional(Schema.String),
    incidentContactEmail: Schema.optional(Schema.String),
    serviceTreeInfos: Schema.optional(
      Schema.Array(Schema.suspend(() => ServiceTreeInfoSchema)),
    ),
    resourceAccessPolicy: Schema.optional(
      Schema.suspend(() => ResourceAccessPolicySchema),
    ),
    resourceAccessRoles: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceAccessRoleSchema)),
    ),
    expeditedRolloutSubmitters: Schema.optional(Schema.Array(Schema.String)),
    errorResponseMessageOptions: Schema.optional(
      Schema.suspend(
        () => ResourceProviderManagementErrorResponseMessageOptionsSchema,
      ),
    ),
    expeditedRolloutMetadata: Schema.optional(
      Schema.suspend(
        () => ResourceProviderManagementExpeditedRolloutMetadataSchema,
      ),
    ),
    canaryManifestOwners: Schema.optional(Schema.Array(Schema.String)),
    pcCode: Schema.optional(Schema.String),
    profitCenterProgramId: Schema.optional(Schema.String),
  });
const ServiceTreeInfoSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  serviceId: Schema.optional(Schema.String),
  componentId: Schema.optional(Schema.String),
  readiness: Schema.optional(Schema.suspend(() => ReadinessSchema)),
});
const ReadinessSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "ClosingDown",
  "Deprecated",
  "GA",
  "InDevelopment",
  "InternalOnly",
  "PrivatePreview",
  "PublicPreview",
  "RemovedFromARM",
  "Retired",
]);
const ResourceAccessPolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NotSpecified",
  "AcisReadAllowed",
  "AcisActionAllowed",
]);
const ResourceAccessRoleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  allowedGroupClaims: Schema.optional(Schema.Array(Schema.String)),
  actions: Schema.optional(Schema.Array(Schema.String)),
});
const ResourceProviderManagementErrorResponseMessageOptionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serverFailureResponseMessageType: Schema.optional(
      Schema.suspend(() => ServerFailureResponseMessageTypeSchema),
    ),
  });
const ServerFailureResponseMessageTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "NotSpecified",
    "OutageReporting",
  ]);
const ResourceProviderManagementExpeditedRolloutMetadataSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    expeditedRolloutIntent: Schema.optional(
      Schema.suspend(() => ExpeditedRolloutIntentSchema),
    ),
  });
const ExpeditedRolloutIntentSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["NotSpecified", "Hotfix"]);
const ResourceProviderCapabilitiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    quotaId: Schema.String,
    effect: Schema.suspend(() => ResourceProviderCapabilitiesEffectSchema),
    requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
  });
const ResourceProviderCapabilitiesEffectSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "NotSpecified",
    "Allow",
    "Disallow",
  ]);
const CrossTenantTokenValidationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "EnsureSecureValidation",
    "PassthroughInsecureToken",
  ]);
const ResourceProviderManifestPropertiesTemplateDeploymentOptionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    preflightSupported: Schema.optional(Schema.Boolean),
    preflightOptions: Schema.optional(
      Schema.Array(Schema.suspend(() => PreflightOptionSchema)),
    ),
  });
const PreflightOptionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "None",
  "ContinueDeploymentOnFailure",
  "DefaultValidationOnly",
]);
const ResourceProviderEndpointSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    apiVersions: Schema.optional(Schema.Array(Schema.String)),
    endpointUri: Schema.optional(Schema.String),
    locations: Schema.optional(Schema.Array(Schema.String)),
    requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
    featuresRule: Schema.optional(
      Schema.suspend(() => ResourceProviderEndpointFeaturesRuleSchema),
    ),
    timeout: Schema.optional(Schema.String),
    endpointType: Schema.optional(Schema.suspend(() => EndpointTypeSchema)),
    skuLink: Schema.optional(Schema.String),
  });
const ResourceProviderEndpointFeaturesRuleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requiredFeaturesPolicy: Schema.suspend(() => FeaturesPolicySchema),
  });
const EndpointTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NotSpecified",
  "Canary",
  "Production",
  "TestInProduction",
]);
const NotificationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  notificationType: Schema.optional(
    Schema.suspend(() => NotificationTypeSchema),
  ),
  skipNotifications: Schema.optional(
    Schema.suspend(() => SkipNotificationsSchema),
  ),
});
const NotificationTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unspecified",
  "SubscriptionNotification",
]);
const SkipNotificationsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unspecified",
  "Enabled",
  "Disabled",
]);
const FanoutLinkedNotificationRuleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tokenAuthConfiguration: Schema.optional(
      Schema.suspend(() => TokenAuthConfigurationSchema),
    ),
    actions: Schema.optional(Schema.Array(Schema.String)),
    endpoints: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceProviderEndpointSchema)),
    ),
    dstsConfiguration: Schema.optional(
      Schema.suspend(() => FanoutLinkedNotificationRuleDstsConfigurationSchema),
    ),
  });
const TokenAuthConfigurationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  authenticationScheme: Schema.optional(
    Schema.suspend(() => AuthenticationSchemeSchema),
  ),
  signedRequestScope: Schema.optional(
    Schema.suspend(() => SignedRequestScopeSchema),
  ),
  disableCertificateAuthenticationFallback: Schema.optional(Schema.Boolean),
});
const AuthenticationSchemeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "PoP",
  "Bearer",
]);
const SignedRequestScopeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "ResourceUri",
  "Endpoint",
]);
const FanoutLinkedNotificationRuleDstsConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceName: Schema.String,
    serviceDnsName: Schema.optional(Schema.String),
  });
const ResourceProviderAuthorizationRulesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    asyncOperationPollingRules: Schema.optional(
      Schema.suspend(() => AsyncOperationPollingRulesSchema),
    ),
  });
const AsyncOperationPollingRulesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authorizationActions: Schema.optional(Schema.Array(Schema.String)),
    additionalOptions: Schema.optional(
      Schema.suspend(() => AdditionalOptionsAsyncOperationSchema),
    ),
  });
const AdditionalOptionsAsyncOperationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "ProtectedAsyncOperationPolling",
    "ProtectedAsyncOperationPollingAuditOnly",
  ]);
const ResourceProviderManifestPropertiesDstsConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceName: Schema.String,
    serviceDnsName: Schema.optional(Schema.String),
  });
const NotificationOptionsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NotSpecified",
  "None",
  "EmitSpendingLimit",
]);
const ResourceHydrationAccountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxChildResourceConsistencyJobLimit: Schema.optional(Schema.Number),
    encryptedKey: Schema.optional(Schema.String),
    accountName: Schema.optional(Schema.String),
    subscriptionId: Schema.optional(Schema.String),
  });
const ResourceProviderManifestPropertiesNotificationSettingsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriberSettings: Schema.optional(
      Schema.Array(Schema.suspend(() => SubscriberSettingSchema)),
    ),
  });
const SubscriberSettingSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  filterRules: Schema.optional(
    Schema.Array(Schema.suspend(() => FilterRuleSchema)),
  ),
});
const FilterRuleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  filterQuery: Schema.optional(Schema.String),
  endpointInformation: Schema.optional(
    Schema.Array(Schema.suspend(() => EndpointInformationSchema)),
  ),
});
const EndpointInformationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  endpoint: Schema.optional(Schema.String),
  endpointType: Schema.optional(
    Schema.suspend(() => NotificationEndpointTypeSchema),
  ),
  schemaVersion: Schema.optional(Schema.String),
});
const NotificationEndpointTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Webhook", "Eventhub"]);
const ResourceProviderManifestPropertiesResourceGroupLockOptionDuringMoveSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    blockActionVerb: Schema.optional(
      Schema.suspend(() => BlockActionVerbSchema),
    ),
  });
const BlockActionVerbSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NotSpecified",
  "Read",
  "Write",
  "Action",
  "Delete",
  "Unrecognized",
]);
const ResourceProviderManifestPropertiesResponseOptionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceClientOptionsType: Schema.optional(
      Schema.suspend(() => ServiceClientOptionsTypeSchema),
    ),
  });
const ServiceClientOptionsTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "NotSpecified",
    "DisableAutomaticDecompression",
  ]);
const AuthorizedApplicationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const AuthorizedApplicationPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    providerAuthorization: Schema.optional(
      Schema.suspend(() => ApplicationProviderAuthorizationSchema),
    ),
    dataAuthorizations: Schema.optional(
      Schema.Array(Schema.suspend(() => ApplicationDataAuthorizationSchema)),
    ),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  });
const ApplicationProviderAuthorizationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    roleDefinitionId: Schema.optional(Schema.String),
    managedByRoleDefinitionId: Schema.optional(Schema.String),
  });
const ApplicationDataAuthorizationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role: Schema.suspend(() => RoleSchema),
    resourceTypes: Schema.optional(Schema.Array(Schema.String)),
  });
const RoleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "ServiceOwner",
  "LimitedOwner",
]);
const ProvisioningStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NotSpecified",
  "Accepted",
  "Running",
  "Creating",
  "Created",
  "Deleting",
  "Deleted",
  "Canceled",
  "Failed",
  "Succeeded",
  "MovingResources",
  "TransientFailure",
  "RolloutInProgress",
]);
const CustomRolloutSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const CustomRolloutPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    specification: Schema.suspend(
      () => CustomRolloutPropertiesSpecificationSchema,
    ),
    status: Schema.optional(
      Schema.suspend(() => CustomRolloutPropertiesStatusSchema),
    ),
  },
);
const CustomRolloutPropertiesSpecificationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    autoProvisionConfig: Schema.optional(
      Schema.suspend(() => CustomRolloutSpecificationAutoProvisionConfigSchema),
    ),
    canary: Schema.optional(
      Schema.suspend(() => CustomRolloutSpecificationCanarySchema),
    ),
    releaseScopes: Schema.optional(Schema.Array(Schema.String)),
    refreshSubscriptionRegistration: Schema.optional(Schema.Boolean),
    skipReleaseScopeValidation: Schema.optional(Schema.Boolean),
    providerRegistration: Schema.optional(
      Schema.suspend(
        () => CustomRolloutSpecificationProviderRegistrationSchema,
      ),
    ),
    resourceTypeRegistrations: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceTypeRegistrationSchema)),
    ),
  });
const CustomRolloutSpecificationAutoProvisionConfigSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storage: Schema.optional(Schema.Boolean),
    resourceGraph: Schema.optional(Schema.Boolean),
  });
const CustomRolloutSpecificationCanarySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regions: Schema.optional(Schema.Array(Schema.String)),
  });
const CustomRolloutSpecificationProviderRegistrationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const ResourceTypeRegistrationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const CustomRolloutPropertiesStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    completedRegions: Schema.optional(Schema.Array(Schema.String)),
    failedOrSkippedRegions: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => ExtendedErrorInfoSchema),
      ),
    ),
    manifestCheckinStatus: Schema.optional(
      Schema.suspend(() => CustomRolloutStatusManifestCheckinStatusSchema),
    ),
  });
const ExtendedErrorInfoSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  code: Schema.optional(Schema.String),
  target: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
  additionalInfo: Schema.optional(
    Schema.Array(Schema.suspend(() => TypedErrorInfoSchema)),
  ),
});
const TypedErrorInfoSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.String,
  info: Schema.optional(Schema.Unknown),
});
const CustomRolloutStatusManifestCheckinStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isCheckedIn: Schema.Boolean,
    statusMessage: Schema.String,
    pullRequest: Schema.optional(Schema.String),
    commitId: Schema.optional(Schema.String),
  });
const DefaultRolloutSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const DefaultRolloutPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    specification: Schema.optional(
      Schema.suspend(() => DefaultRolloutPropertiesSpecificationSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => DefaultRolloutPropertiesStatusSchema),
    ),
  });
const DefaultRolloutPropertiesSpecificationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expeditedRollout: Schema.optional(
      Schema.suspend(() => DefaultRolloutSpecificationExpeditedRolloutSchema),
    ),
    canary: Schema.optional(
      Schema.suspend(() => DefaultRolloutSpecificationCanarySchema),
    ),
    lowTraffic: Schema.optional(
      Schema.suspend(() => DefaultRolloutSpecificationLowTrafficSchema),
    ),
    mediumTraffic: Schema.optional(
      Schema.suspend(() => DefaultRolloutSpecificationMediumTrafficSchema),
    ),
    highTraffic: Schema.optional(
      Schema.suspend(() => DefaultRolloutSpecificationHighTrafficSchema),
    ),
    restOfTheWorldGroupOne: Schema.optional(
      Schema.suspend(
        () => DefaultRolloutSpecificationRestOfTheWorldGroupOneSchema,
      ),
    ),
    restOfTheWorldGroupTwo: Schema.optional(
      Schema.suspend(
        () => DefaultRolloutSpecificationRestOfTheWorldGroupTwoSchema,
      ),
    ),
    providerRegistration: Schema.optional(
      Schema.suspend(
        () => DefaultRolloutSpecificationProviderRegistrationSchema,
      ),
    ),
    resourceTypeRegistrations: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceTypeRegistrationSchema)),
    ),
    autoProvisionConfig: Schema.optional(
      Schema.suspend(
        () => DefaultRolloutSpecificationAutoProvisionConfigSchema,
      ),
    ),
  });
const DefaultRolloutSpecificationExpeditedRolloutSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  });
const DefaultRolloutSpecificationCanarySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    skipRegions: Schema.optional(Schema.Array(Schema.String)),
    regions: Schema.optional(Schema.Array(Schema.String)),
  });
const DefaultRolloutSpecificationLowTrafficSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regions: Schema.optional(Schema.Array(Schema.String)),
  });
const DefaultRolloutSpecificationMediumTrafficSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regions: Schema.optional(Schema.Array(Schema.String)),
  });
const DefaultRolloutSpecificationHighTrafficSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regions: Schema.optional(Schema.Array(Schema.String)),
  });
const DefaultRolloutSpecificationRestOfTheWorldGroupOneSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regions: Schema.optional(Schema.Array(Schema.String)),
  });
const DefaultRolloutSpecificationRestOfTheWorldGroupTwoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regions: Schema.optional(Schema.Array(Schema.String)),
  });
const DefaultRolloutSpecificationProviderRegistrationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const DefaultRolloutSpecificationAutoProvisionConfigSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storage: Schema.optional(Schema.Boolean),
    resourceGraph: Schema.optional(Schema.Boolean),
  });
const DefaultRolloutPropertiesStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    completedRegions: Schema.optional(Schema.Array(Schema.String)),
    failedOrSkippedRegions: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => ExtendedErrorInfoSchema),
      ),
    ),
  });
const ResourceProviderManifestProviderAuthenticationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowedAudiences: Schema.Array(Schema.String),
  });
const ResourceProviderManifestFeaturesRuleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requiredFeaturesPolicy: Schema.suspend(() => FeaturesPolicySchema),
  });
const ResourceProviderManifestRequestHeaderOptionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    optInHeaders: Schema.optional(Schema.suspend(() => OptInHeaderTypeSchema)),
    optOutHeaders: Schema.optional(
      Schema.suspend(() => OptOutHeaderTypeSchema),
    ),
  });
const ResourceTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  routingType: Schema.optional(Schema.suspend(() => RoutingTypeSchema)),
  additionalOptions: Schema.optional(
    Schema.suspend(() => AdditionalOptionsSchema),
  ),
  crossTenantTokenValidation: Schema.optional(
    Schema.suspend(() => CrossTenantTokenValidationSchema),
  ),
  resourceValidation: Schema.optional(
    Schema.suspend(() => ResourceValidationSchema),
  ),
  allowedUnauthorizedActions: Schema.optional(Schema.Array(Schema.String)),
  allowedUnauthorizedActionsExtensions: Schema.optional(
    Schema.Array(
      Schema.suspend(() => AllowedUnauthorizedActionsExtensionSchema),
    ),
  ),
  authorizationActionMappings: Schema.optional(
    Schema.Array(Schema.suspend(() => AuthorizationActionMappingSchema)),
  ),
  linkedAccessChecks: Schema.optional(
    Schema.Array(Schema.suspend(() => LinkedAccessCheckSchema)),
  ),
  defaultApiVersion: Schema.optional(Schema.String),
  loggingRules: Schema.optional(
    Schema.Array(Schema.suspend(() => LoggingRuleSchema)),
  ),
  throttlingRules: Schema.optional(
    Schema.Array(Schema.suspend(() => ThrottlingRuleSchema)),
  ),
  endpoints: Schema.optional(
    Schema.Array(Schema.suspend(() => ResourceProviderEndpointSchema)),
  ),
  marketplaceType: Schema.optional(Schema.suspend(() => MarketplaceTypeSchema)),
  identityManagement: Schema.optional(
    Schema.suspend(() => ResourceTypeIdentityManagementSchema),
  ),
  metadata: Schema.optional(Schema.Unknown),
  requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
  featuresRule: Schema.optional(
    Schema.suspend(() => ResourceTypeFeaturesRuleSchema),
  ),
  subscriptionStateRules: Schema.optional(
    Schema.Array(Schema.suspend(() => SubscriptionStateRuleSchema)),
  ),
  serviceTreeInfos: Schema.optional(
    Schema.Array(Schema.suspend(() => ServiceTreeInfoSchema)),
  ),
  requestHeaderOptions: Schema.optional(
    Schema.suspend(() => ResourceTypeRequestHeaderOptionsSchema),
  ),
  skuLink: Schema.optional(Schema.String),
  disallowedActionVerbs: Schema.optional(Schema.Array(Schema.String)),
  templateDeploymentPolicy: Schema.optional(
    Schema.suspend(() => ResourceTypeTemplateDeploymentPolicySchema),
  ),
  extendedLocations: Schema.optional(
    Schema.Array(Schema.suspend(() => ExtendedLocationOptionsSchema)),
  ),
  linkedOperationRules: Schema.optional(
    Schema.Array(Schema.suspend(() => LinkedOperationRuleSchema)),
  ),
  resourceDeletionPolicy: Schema.optional(
    Schema.suspend(() => ManifestResourceDeletionPolicySchema),
  ),
  quotaRule: Schema.optional(Schema.suspend(() => QuotaRuleSchema)),
  notifications: Schema.optional(
    Schema.Array(Schema.suspend(() => NotificationSchema)),
  ),
  linkedNotificationRules: Schema.optional(
    Schema.Array(Schema.suspend(() => LinkedNotificationRuleSchema)),
  ),
  resourceProviderAuthorizationRules: Schema.optional(
    Schema.suspend(() => ResourceProviderAuthorizationRulesSchema),
  ),
});
const RoutingTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Default",
  "ProxyOnly",
  "HostBased",
  "Extension",
  "Tenant",
  "Fanout",
  "LocationBased",
  "Failover",
  "CascadeExtension",
  "ChildFanout",
  "CascadeAuthorizedExtension",
  "BypassEndpointSelectionOptimization",
  "LocationMapping",
  "ServiceFanout",
]);
const AdditionalOptionsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "ProtectedAsyncOperationPolling",
  "ProtectedAsyncOperationPollingAuditOnly",
]);
const ResourceValidationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NotSpecified",
  "ReservedWords",
  "ProfaneWords",
]);
const AllowedUnauthorizedActionsExtensionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    action: Schema.optional(Schema.String),
    intent: Schema.optional(Schema.suspend(() => IntentSchema)),
  });
const IntentSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NOT_SPECIFIED",
  "LOW_PRIVILEGE",
  "DEFERRED_ACCESS_CHECK",
  "RP_CONTRACT",
]);
const AuthorizationActionMappingSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    original: Schema.optional(Schema.String),
    desired: Schema.optional(Schema.String),
  });
const LinkedAccessCheckSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  actionName: Schema.optional(Schema.String),
  linkedProperty: Schema.optional(Schema.String),
  linkedAction: Schema.optional(Schema.String),
  linkedActionVerb: Schema.optional(Schema.String),
  linkedType: Schema.optional(Schema.String),
});
const LoggingRuleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  action: Schema.String,
  direction: Schema.suspend(() => LoggingDirectionsSchema),
  detailLevel: Schema.suspend(() => LoggingDetailsSchema),
  hiddenPropertyPaths: Schema.optional(
    Schema.suspend(() => LoggingRuleHiddenPropertyPathsSchema),
  ),
});
const LoggingDirectionsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "None",
  "Request",
  "Response",
]);
const LoggingDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "None",
  "Body",
]);
const LoggingRuleHiddenPropertyPathsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hiddenPathsOnRequest: Schema.optional(Schema.Array(Schema.String)),
    hiddenPathsOnResponse: Schema.optional(Schema.Array(Schema.String)),
  });
const ThrottlingRuleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  action: Schema.String,
  metrics: Schema.Array(Schema.suspend(() => ThrottlingMetricSchema)),
  requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
  applicationId: Schema.optional(Schema.Array(Schema.String)),
});
const ThrottlingMetricSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.suspend(() => ThrottlingMetricTypeSchema),
  limit: Schema.Number,
  interval: Schema.optional(Schema.String),
});
const ThrottlingMetricTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NotSpecified",
  "NumberOfRequests",
  "NumberOfResources",
]);
const MarketplaceTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NotSpecified",
  "AddOn",
  "Bypass",
  "Store",
]);
const ResourceTypeIdentityManagementSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.suspend(() => IdentityManagementTypesSchema)),
  });
const IdentityManagementTypesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "NotSpecified",
    "SystemAssigned",
    "UserAssigned",
    "Actor",
    "DelegatedResourceIdentity",
  ]);
const ResourceTypeFeaturesRuleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requiredFeaturesPolicy: Schema.suspend(() => FeaturesPolicySchema),
  });
const SubscriptionStateRuleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  state: Schema.optional(Schema.suspend(() => SubscriptionStateSchema)),
  allowedActions: Schema.optional(Schema.Array(Schema.String)),
});
const SubscriptionStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NotDefined",
  "Enabled",
  "Warned",
  "PastDue",
  "Disabled",
  "Deleted",
]);
const ResourceTypeRequestHeaderOptionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    optInHeaders: Schema.optional(Schema.suspend(() => OptInHeaderTypeSchema)),
    optOutHeaders: Schema.optional(
      Schema.suspend(() => OptOutHeaderTypeSchema),
    ),
  });
const ResourceTypeTemplateDeploymentPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    capabilities: Schema.suspend(() => TemplateDeploymentCapabilitiesSchema),
    preflightOptions: Schema.suspend(
      () => TemplateDeploymentPreflightOptionsSchema,
    ),
    preflightNotifications: Schema.optional(
      Schema.suspend(() => TemplateDeploymentPreflightNotificationsSchema),
    ),
  });
const TemplateDeploymentCapabilitiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Default", "Preflight"]);
const TemplateDeploymentPreflightOptionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "None",
    "ValidationRequests",
    "DeploymentRequests",
    "TestOnly",
    "RegisteredOnly",
  ]);
const TemplateDeploymentPreflightNotificationsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "None",
    "UnregisteredSubscriptions",
  ]);
const ExtendedLocationOptionsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    type: Schema.optional(Schema.suspend(() => ExtendedLocationTypeSchema)),
    supportedPolicy: Schema.optional(
      Schema.suspend(() => ResourceTypeExtendedLocationPolicySchema),
    ),
  },
);
const ExtendedLocationTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NotSpecified",
  "CustomLocation",
  "EdgeZone",
  "ArcZone",
]);
const ResourceTypeExtendedLocationPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["NotSpecified", "All"]);
const LinkedOperationRuleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  linkedOperation: Schema.suspend(() => LinkedOperationSchema),
  linkedAction: Schema.suspend(() => LinkedActionSchema),
  dependsOnTypes: Schema.optional(Schema.Array(Schema.String)),
});
const LinkedOperationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "None",
  "CrossResourceGroupResourceMove",
  "CrossSubscriptionResourceMove",
]);
const LinkedActionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NotSpecified",
  "Blocked",
  "Validate",
  "Enabled",
]);
const ManifestResourceDeletionPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "NotSpecified",
    "Cascade",
    "Force",
  ]);
const QuotaRuleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  quotaPolicy: Schema.optional(Schema.suspend(() => QuotaPolicySchema)),
  locationRules: Schema.optional(
    Schema.Array(Schema.suspend(() => LocationQuotaRuleSchema)),
  ),
  requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
});
const QuotaPolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Default",
  "None",
  "Restricted",
]);
const LocationQuotaRuleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  policy: Schema.optional(Schema.suspend(() => QuotaPolicySchema)),
  quotaId: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
});
const LinkedNotificationRuleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  actions: Schema.optional(Schema.Array(Schema.String)),
  actionsOnFailedOperation: Schema.optional(Schema.Array(Schema.String)),
  fastPathActions: Schema.optional(Schema.Array(Schema.String)),
  fastPathActionsOnFailedOperation: Schema.optional(
    Schema.Array(Schema.String),
  ),
  linkedNotificationTimeout: Schema.optional(Schema.String),
});
const ResourceProviderManifestManagementSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schemaOwners: Schema.optional(Schema.Array(Schema.String)),
    manifestOwners: Schema.optional(Schema.Array(Schema.String)),
    authorizationOwners: Schema.optional(Schema.Array(Schema.String)),
    incidentRoutingService: Schema.optional(Schema.String),
    incidentRoutingTeam: Schema.optional(Schema.String),
    incidentContactEmail: Schema.optional(Schema.String),
    serviceTreeInfos: Schema.optional(
      Schema.Array(Schema.suspend(() => ServiceTreeInfoSchema)),
    ),
    resourceAccessPolicy: Schema.optional(
      Schema.suspend(() => ResourceAccessPolicySchema),
    ),
    resourceAccessRoles: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceAccessRoleSchema)),
    ),
    expeditedRolloutSubmitters: Schema.optional(Schema.Array(Schema.String)),
    errorResponseMessageOptions: Schema.optional(
      Schema.suspend(
        () => ResourceProviderManagementErrorResponseMessageOptionsSchema,
      ),
    ),
    expeditedRolloutMetadata: Schema.optional(
      Schema.suspend(
        () => ResourceProviderManagementExpeditedRolloutMetadataSchema,
      ),
    ),
    canaryManifestOwners: Schema.optional(Schema.Array(Schema.String)),
    pcCode: Schema.optional(Schema.String),
    profitCenterProgramId: Schema.optional(Schema.String),
  });
const ResourceProviderManifestReRegisterSubscriptionMetadataSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    concurrencyLimit: Schema.optional(Schema.Number),
  });
const FrontloadPayloadPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operationType: Schema.String,
    providerNamespace: Schema.String,
    frontloadLocation: Schema.String,
    copyFromLocation: Schema.String,
    environmentType: Schema.suspend(
      () => AvailableCheckInManifestEnvironmentSchema,
    ),
    serviceFeatureFlag: Schema.suspend(() => ServiceFeatureFlagActionSchema),
    includeResourceTypes: Schema.Array(Schema.String),
    excludeResourceTypes: Schema.Array(Schema.String),
    overrideManifestLevelFields: Schema.suspend(
      () => FrontloadPayloadPropertiesOverrideManifestLevelFieldsSchema,
    ),
    overrideEndpointLevelFields: Schema.suspend(
      () => FrontloadPayloadPropertiesOverrideEndpointLevelFieldsSchema,
    ),
    ignoreFields: Schema.Array(Schema.String),
  });
const AvailableCheckInManifestEnvironmentSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "NotSpecified",
    "Canary",
    "Prod",
    "All",
    "Mooncake",
    "Fairfax",
  ]);
const ServiceFeatureFlagActionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["DoNotCreate", "Create"]);
const FrontloadPayloadPropertiesOverrideManifestLevelFieldsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceHydrationAccounts: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceHydrationAccountSchema)),
    ),
  });
const FrontloadPayloadPropertiesOverrideEndpointLevelFieldsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    apiVersions: Schema.Array(Schema.String),
    endpointUri: Schema.String,
    locations: Schema.Array(Schema.String),
    requiredFeatures: Schema.Array(Schema.String),
    featuresRule: Schema.suspend(
      () => ResourceTypeEndpointBaseFeaturesRuleSchema,
    ),
    timeout: Schema.String,
    endpointType: Schema.suspend(() => EndpointTypeSchema),
    dstsConfiguration: Schema.suspend(
      () => ResourceTypeEndpointBaseDstsConfigurationSchema,
    ),
    skuLink: Schema.String,
    apiVersion: Schema.String,
    zones: Schema.Array(Schema.String),
  });
const ResourceTypeEndpointBaseFeaturesRuleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requiredFeaturesPolicy: Schema.suspend(() => FeaturesPolicySchema),
  });
const ResourceTypeEndpointBaseDstsConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceName: Schema.String,
    serviceDnsName: Schema.optional(Schema.String),
  });
const NotificationRegistrationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const NotificationRegistrationPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    notificationMode: Schema.optional(
      Schema.suspend(() => NotificationModeSchema),
    ),
    messageScope: Schema.optional(Schema.suspend(() => MessageScopeSchema)),
    includedEvents: Schema.optional(Schema.Array(Schema.String)),
    notificationEndpoints: Schema.optional(
      Schema.Array(Schema.suspend(() => NotificationEndpointSchema)),
    ),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  });
const NotificationModeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NotSpecified",
  "EventHub",
  "WebHook",
]);
const MessageScopeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NotSpecified",
  "RegisteredSubscriptions",
]);
const NotificationEndpointSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  notificationDestination: Schema.optional(Schema.String),
  locations: Schema.optional(Schema.Array(Schema.String)),
});
const OperationsPutContentPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contents: Schema.optional(
      Schema.Array(Schema.suspend(() => LocalizedOperationDefinitionSchema)),
    ),
  });
const LocalizedOperationDefinitionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    isDataAction: Schema.optional(Schema.Boolean),
    origin: Schema.optional(Schema.suspend(() => OperationOriginsSchema)),
    display: Schema.suspend(() => LocalizedOperationDefinitionDisplaySchema),
    actionType: Schema.optional(
      Schema.suspend(() => OperationActionTypeSchema),
    ),
  });
const LocalizedOperationDefinitionDisplaySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    default: Schema.suspend(
      () => LocalizedOperationDisplayDefinitionDefaultSchema,
    ),
    en: Schema.optional(
      Schema.suspend(() => LocalizedOperationDisplayDefinitionEnSchema),
    ),
    cs: Schema.optional(
      Schema.suspend(() => LocalizedOperationDisplayDefinitionCsSchema),
    ),
    de: Schema.optional(
      Schema.suspend(() => LocalizedOperationDisplayDefinitionDeSchema),
    ),
    es: Schema.optional(
      Schema.suspend(() => LocalizedOperationDisplayDefinitionEsSchema),
    ),
    fr: Schema.optional(
      Schema.suspend(() => LocalizedOperationDisplayDefinitionFrSchema),
    ),
    hu: Schema.optional(
      Schema.suspend(() => LocalizedOperationDisplayDefinitionHuSchema),
    ),
    it: Schema.optional(
      Schema.suspend(() => LocalizedOperationDisplayDefinitionItSchema),
    ),
    ja: Schema.optional(
      Schema.suspend(() => LocalizedOperationDisplayDefinitionJaSchema),
    ),
    ko: Schema.optional(
      Schema.suspend(() => LocalizedOperationDisplayDefinitionKoSchema),
    ),
    nl: Schema.optional(
      Schema.suspend(() => LocalizedOperationDisplayDefinitionNlSchema),
    ),
    pl: Schema.optional(
      Schema.suspend(() => LocalizedOperationDisplayDefinitionPlSchema),
    ),
    ptBR: Schema.optional(
      Schema.suspend(() => LocalizedOperationDisplayDefinitionPtBRSchema),
    ),
    ptPT: Schema.optional(
      Schema.suspend(() => LocalizedOperationDisplayDefinitionPtPTSchema),
    ),
    ru: Schema.optional(
      Schema.suspend(() => LocalizedOperationDisplayDefinitionRuSchema),
    ),
    sv: Schema.optional(
      Schema.suspend(() => LocalizedOperationDisplayDefinitionSvSchema),
    ),
    zhHans: Schema.optional(
      Schema.suspend(() => LocalizedOperationDisplayDefinitionZhHansSchema),
    ),
    zhHant: Schema.optional(
      Schema.suspend(() => LocalizedOperationDisplayDefinitionZhHantSchema),
    ),
  });
const LocalizedOperationDisplayDefinitionDefaultSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provider: Schema.String,
    resource: Schema.String,
    operation: Schema.String,
    description: Schema.String,
  });
const LocalizedOperationDisplayDefinitionEnSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provider: Schema.String,
    resource: Schema.String,
    operation: Schema.String,
    description: Schema.String,
  });
const LocalizedOperationDisplayDefinitionCsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provider: Schema.String,
    resource: Schema.String,
    operation: Schema.String,
    description: Schema.String,
  });
const LocalizedOperationDisplayDefinitionDeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provider: Schema.String,
    resource: Schema.String,
    operation: Schema.String,
    description: Schema.String,
  });
const LocalizedOperationDisplayDefinitionEsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provider: Schema.String,
    resource: Schema.String,
    operation: Schema.String,
    description: Schema.String,
  });
const LocalizedOperationDisplayDefinitionFrSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provider: Schema.String,
    resource: Schema.String,
    operation: Schema.String,
    description: Schema.String,
  });
const LocalizedOperationDisplayDefinitionHuSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provider: Schema.String,
    resource: Schema.String,
    operation: Schema.String,
    description: Schema.String,
  });
const LocalizedOperationDisplayDefinitionItSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provider: Schema.String,
    resource: Schema.String,
    operation: Schema.String,
    description: Schema.String,
  });
const LocalizedOperationDisplayDefinitionJaSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provider: Schema.String,
    resource: Schema.String,
    operation: Schema.String,
    description: Schema.String,
  });
const LocalizedOperationDisplayDefinitionKoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provider: Schema.String,
    resource: Schema.String,
    operation: Schema.String,
    description: Schema.String,
  });
const LocalizedOperationDisplayDefinitionNlSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provider: Schema.String,
    resource: Schema.String,
    operation: Schema.String,
    description: Schema.String,
  });
const LocalizedOperationDisplayDefinitionPlSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provider: Schema.String,
    resource: Schema.String,
    operation: Schema.String,
    description: Schema.String,
  });
const LocalizedOperationDisplayDefinitionPtBRSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provider: Schema.String,
    resource: Schema.String,
    operation: Schema.String,
    description: Schema.String,
  });
const LocalizedOperationDisplayDefinitionPtPTSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provider: Schema.String,
    resource: Schema.String,
    operation: Schema.String,
    description: Schema.String,
  });
const LocalizedOperationDisplayDefinitionRuSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provider: Schema.String,
    resource: Schema.String,
    operation: Schema.String,
    description: Schema.String,
  });
const LocalizedOperationDisplayDefinitionSvSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provider: Schema.String,
    resource: Schema.String,
    operation: Schema.String,
    description: Schema.String,
  });
const LocalizedOperationDisplayDefinitionZhHansSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provider: Schema.String,
    resource: Schema.String,
    operation: Schema.String,
    description: Schema.String,
  });
const LocalizedOperationDisplayDefinitionZhHantSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provider: Schema.String,
    resource: Schema.String,
    operation: Schema.String,
    description: Schema.String,
  });
const ResourceManagementEntitySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String,
    homeTenantId: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
  });
const ResourceTypeRegistrationPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    routingType: Schema.optional(Schema.suspend(() => RoutingTypeSchema)),
    additionalOptions: Schema.optional(
      Schema.suspend(() => AdditionalOptionsResourceTypeRegistrationSchema),
    ),
    crossTenantTokenValidation: Schema.optional(
      Schema.suspend(() => CrossTenantTokenValidationSchema),
    ),
    regionality: Schema.optional(Schema.suspend(() => RegionalitySchema)),
    endpoints: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceTypeEndpointSchema)),
    ),
    extensionOptions: Schema.optional(
      Schema.suspend(
        () => ResourceTypeRegistrationPropertiesExtensionOptionsSchema,
      ),
    ),
    marketplaceType: Schema.optional(
      Schema.suspend(() => MarketplaceTypeSchema),
    ),
    swaggerSpecifications: Schema.optional(
      Schema.Array(Schema.suspend(() => SwaggerSpecificationSchema)),
    ),
    allowedUnauthorizedActions: Schema.optional(Schema.Array(Schema.String)),
    allowedUnauthorizedActionsExtensions: Schema.optional(
      Schema.Array(
        Schema.suspend(() => AllowedUnauthorizedActionsExtensionSchema),
      ),
    ),
    authorizationActionMappings: Schema.optional(
      Schema.Array(Schema.suspend(() => AuthorizationActionMappingSchema)),
    ),
    linkedAccessChecks: Schema.optional(
      Schema.Array(Schema.suspend(() => LinkedAccessCheckSchema)),
    ),
    defaultApiVersion: Schema.optional(Schema.String),
    loggingRules: Schema.optional(
      Schema.Array(Schema.suspend(() => LoggingRuleSchema)),
    ),
    throttlingRules: Schema.optional(
      Schema.Array(Schema.suspend(() => ThrottlingRuleSchema)),
    ),
    requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
    featuresRule: Schema.optional(
      Schema.suspend(
        () => ResourceTypeRegistrationPropertiesFeaturesRuleSchema,
      ),
    ),
    enableAsyncOperation: Schema.optional(Schema.Boolean),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    enableThirdPartyS2S: Schema.optional(Schema.Boolean),
    subscriptionLifecycleNotificationSpecifications: Schema.optional(
      Schema.suspend(
        () =>
          ResourceTypeRegistrationPropertiesSubscriptionLifecycleNotificationSpecificationsSchema,
      ),
    ),
    isPureProxy: Schema.optional(Schema.Boolean),
    identityManagement: Schema.optional(
      Schema.suspend(
        () => ResourceTypeRegistrationPropertiesIdentityManagementSchema,
      ),
    ),
    checkNameAvailabilitySpecifications: Schema.optional(
      Schema.suspend(
        () =>
          ResourceTypeRegistrationPropertiesCheckNameAvailabilitySpecificationsSchema,
      ),
    ),
    disallowedActionVerbs: Schema.optional(Schema.Array(Schema.String)),
    serviceTreeInfos: Schema.optional(
      Schema.Array(Schema.suspend(() => ServiceTreeInfoSchema)),
    ),
    requestHeaderOptions: Schema.optional(
      Schema.suspend(
        () => ResourceTypeRegistrationPropertiesRequestHeaderOptionsSchema,
      ),
    ),
    subscriptionStateRules: Schema.optional(
      Schema.Array(Schema.suspend(() => SubscriptionStateRuleSchema)),
    ),
    templateDeploymentOptions: Schema.optional(
      Schema.suspend(
        () => ResourceTypeRegistrationPropertiesTemplateDeploymentOptionsSchema,
      ),
    ),
    extendedLocations: Schema.optional(
      Schema.Array(Schema.suspend(() => ExtendedLocationOptionsSchema)),
    ),
    resourceMovePolicy: Schema.optional(
      Schema.suspend(
        () => ResourceTypeRegistrationPropertiesResourceMovePolicySchema,
      ),
    ),
    resourceDeletionPolicy: Schema.optional(
      Schema.suspend(() => ResourceDeletionPolicySchema),
    ),
    resourceConcurrencyControlOptions: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => ResourceConcurrencyControlOptionSchema),
      ),
    ),
    resourceGraphConfiguration: Schema.optional(
      Schema.suspend(
        () =>
          ResourceTypeRegistrationPropertiesResourceGraphConfigurationSchema,
      ),
    ),
    management: Schema.optional(
      Schema.suspend(() => ResourceTypeRegistrationPropertiesManagementSchema),
    ),
    openApiConfiguration: Schema.optional(
      Schema.suspend(() => OpenApiConfigurationSchema),
    ),
    onBehalfOfTokens: Schema.optional(
      Schema.suspend(() => ResourceTypeOnBehalfOfTokenSchema),
    ),
    category: Schema.optional(Schema.suspend(() => ResourceTypeCategorySchema)),
    resourceValidation: Schema.optional(
      Schema.suspend(() => ResourceValidationSchema),
    ),
    disallowedEndUserOperations: Schema.optional(Schema.Array(Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    skuLink: Schema.optional(Schema.String),
    quotaRule: Schema.optional(Schema.suspend(() => QuotaRuleSchema)),
    notifications: Schema.optional(
      Schema.Array(Schema.suspend(() => NotificationSchema)),
    ),
    linkedNotificationRules: Schema.optional(
      Schema.Array(Schema.suspend(() => LinkedNotificationRuleSchema)),
    ),
    resourceProviderAuthorizationRules: Schema.optional(
      Schema.suspend(() => ResourceProviderAuthorizationRulesSchema),
    ),
    tokenAuthConfiguration: Schema.optional(
      Schema.suspend(() => TokenAuthConfigurationSchema),
    ),
    templateDeploymentPolicy: Schema.optional(
      Schema.suspend(
        () => ResourceTypeRegistrationPropertiesTemplateDeploymentPolicySchema,
      ),
    ),
    allowEmptyRoleAssignments: Schema.optional(Schema.Boolean),
    policyExecutionType: Schema.optional(
      Schema.suspend(() => PolicyExecutionTypeSchema),
    ),
    availabilityZoneRule: Schema.optional(
      Schema.suspend(
        () => ResourceTypeRegistrationPropertiesAvailabilityZoneRuleSchema,
      ),
    ),
    dstsConfiguration: Schema.optional(
      Schema.suspend(
        () => ResourceTypeRegistrationPropertiesDstsConfigurationSchema,
      ),
    ),
    asyncTimeoutRules: Schema.optional(
      Schema.Array(Schema.suspend(() => AsyncTimeoutRuleSchema)),
    ),
    commonApiVersions: Schema.optional(Schema.Array(Schema.String)),
    apiProfiles: Schema.optional(
      Schema.Array(Schema.suspend(() => ApiProfileSchema)),
    ),
    linkedOperationRules: Schema.optional(
      Schema.Array(Schema.suspend(() => LinkedOperationRuleSchema)),
    ),
    legacyName: Schema.optional(Schema.String),
    legacyNames: Schema.optional(Schema.Array(Schema.String)),
    allowedTemplateDeploymentReferenceActions: Schema.optional(
      Schema.Array(Schema.String),
    ),
    legacyPolicy: Schema.optional(
      Schema.suspend(
        () => ResourceTypeRegistrationPropertiesLegacyPolicySchema,
      ),
    ),
    manifestLink: Schema.optional(Schema.String),
    capacityRule: Schema.optional(
      Schema.suspend(
        () => ResourceTypeRegistrationPropertiesCapacityRuleSchema,
      ),
    ),
    marketplaceOptions: Schema.optional(
      Schema.suspend(
        () => ResourceTypeRegistrationPropertiesMarketplaceOptionsSchema,
      ),
    ),
    allowedResourceNames: Schema.optional(
      Schema.Array(Schema.suspend(() => AllowedResourceNameSchema)),
    ),
    resourceCache: Schema.optional(
      Schema.suspend(
        () => ResourceTypeRegistrationPropertiesResourceCacheSchema,
      ),
    ),
    resourceQueryManagement: Schema.optional(
      Schema.suspend(
        () => ResourceTypeRegistrationPropertiesResourceQueryManagementSchema,
      ),
    ),
    supportsTags: Schema.optional(Schema.Boolean),
    resourceManagementOptions: Schema.optional(
      Schema.suspend(
        () => ResourceTypeRegistrationPropertiesResourceManagementOptionsSchema,
      ),
    ),
    groupingTag: Schema.optional(Schema.String),
    addResourceListTargetLocations: Schema.optional(Schema.Boolean),
    resourceTypeCommonAttributeManagement: Schema.optional(
      Schema.suspend(
        () =>
          ResourceTypeRegistrationPropertiesResourceTypeCommonAttributeManagementSchema,
      ),
    ),
    routingRule: Schema.optional(
      Schema.suspend(() => ResourceTypeRegistrationPropertiesRoutingRuleSchema),
    ),
    frontdoorRequestMode: Schema.optional(
      Schema.suspend(() => FrontdoorRequestModeSchema),
    ),
    resourceSubType: Schema.optional(
      Schema.suspend(() => ResourceSubTypeSchema),
    ),
    asyncOperationResourceTypeName: Schema.optional(Schema.String),
  });
const AdditionalOptionsResourceTypeRegistrationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "ProtectedAsyncOperationPolling",
    "ProtectedAsyncOperationPollingAuditOnly",
  ]);
const RegionalitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NotSpecified",
  "Global",
  "Regional",
]);
const ResourceTypeEndpointSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.Literals(["Managed", "Direct"])),
  enabled: Schema.optional(Schema.Boolean),
  apiVersions: Schema.optional(Schema.Array(Schema.String)),
  locations: Schema.optional(Schema.Array(Schema.String)),
  requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
  featuresRule: Schema.optional(
    Schema.suspend(() => ResourceTypeEndpointFeaturesRuleSchema),
  ),
  extensions: Schema.optional(
    Schema.Array(Schema.suspend(() => ResourceTypeExtensionSchema)),
  ),
  timeout: Schema.optional(Schema.String),
  endpointType: Schema.optional(
    Schema.suspend(() => EndpointTypeResourceTypeSchema),
  ),
  tokenAuthConfiguration: Schema.optional(
    Schema.suspend(() => TokenAuthConfigurationSchema),
  ),
  skuLink: Schema.optional(Schema.String),
  endpointUri: Schema.optional(Schema.String),
  apiVersion: Schema.optional(Schema.String),
  zones: Schema.optional(Schema.Array(Schema.String)),
  dstsConfiguration: Schema.optional(
    Schema.suspend(() => ResourceTypeEndpointDstsConfigurationSchema),
  ),
  dataBoundary: Schema.optional(Schema.suspend(() => DataBoundarySchema)),
});
const ResourceTypeEndpointFeaturesRuleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requiredFeaturesPolicy: Schema.suspend(() => FeaturesPolicySchema),
  });
const ResourceTypeExtensionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  endpointUri: Schema.optional(Schema.String),
  extensionCategories: Schema.optional(
    Schema.Array(Schema.suspend(() => ExtensionCategorySchema)),
  ),
  timeout: Schema.optional(Schema.String),
});
const ExtensionCategorySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NotSpecified",
  "ResourceCreationValidate",
  "ResourceCreationBegin",
  "ResourceCreationCompleted",
  "ResourceReadValidate",
  "ResourceReadBegin",
  "ResourcePatchValidate",
  "ResourcePatchCompleted",
  "ResourceDeletionValidate",
  "ResourceDeletionBegin",
  "ResourceDeletionCompleted",
  "ResourcePostAction",
  "SubscriptionLifecycleNotification",
  "ResourcePatchBegin",
  "ResourceMoveBegin",
  "ResourceMoveCompleted",
  "BestMatchOperationBegin",
  "SubscriptionLifecycleNotificationDeletion",
]);
const EndpointTypeResourceTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "NotSpecified",
    "Canary",
    "Production",
    "TestInProduction",
  ]);
const ResourceTypeEndpointDstsConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceName: Schema.String,
    serviceDnsName: Schema.optional(Schema.String),
  });
const DataBoundarySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NotDefined",
  "Global",
  "EU",
  "US",
]);
const ResourceTypeRegistrationPropertiesExtensionOptionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceCreationBegin: Schema.optional(
      Schema.suspend(
        () => ResourceTypeExtensionOptionsResourceCreationBeginSchema,
      ),
    ),
  });
const ResourceTypeExtensionOptionsResourceCreationBeginSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    request: Schema.optional(
      Schema.Array(Schema.suspend(() => ExtensionOptionTypeSchema)),
    ),
    response: Schema.optional(
      Schema.Array(Schema.suspend(() => ExtensionOptionTypeSchema)),
    ),
  });
const ExtensionOptionTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NotSpecified",
  "DoNotMergeExistingReadOnlyAndSecretProperties",
  "IncludeInternalMetadata",
]);
const SwaggerSpecificationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  apiVersions: Schema.optional(Schema.Array(Schema.String)),
  swaggerSpecFolderUri: Schema.optional(Schema.String),
});
const ResourceTypeRegistrationPropertiesFeaturesRuleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requiredFeaturesPolicy: Schema.suspend(() => FeaturesPolicySchema),
  });
const ResourceTypeRegistrationPropertiesSubscriptionLifecycleNotificationSpecificationsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionStateOverrideActions: Schema.optional(
      Schema.Array(Schema.suspend(() => SubscriptionStateOverrideActionSchema)),
    ),
    softDeleteTTL: Schema.optional(Schema.String),
  });
const SubscriptionStateOverrideActionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.suspend(() => SubscriptionTransitioningStateSchema),
    action: Schema.suspend(() => SubscriptionNotificationOperationSchema),
  });
const SubscriptionTransitioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Registered",
    "Unregistered",
    "Warned",
    "Suspended",
    "Deleted",
    "WarnedToRegistered",
    "WarnedToSuspended",
    "WarnedToDeleted",
    "WarnedToUnregistered",
    "SuspendedToRegistered",
    "SuspendedToWarned",
    "SuspendedToDeleted",
    "SuspendedToUnregistered",
  ]);
const SubscriptionNotificationOperationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "NotDefined",
    "DeleteAllResources",
    "SoftDeleteAllResources",
    "NoOp",
    "BillingCancellation",
    "UndoSoftDelete",
  ]);
const ResourceTypeRegistrationPropertiesIdentityManagementSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.suspend(() => IdentityManagementTypesSchema)),
    applicationId: Schema.optional(Schema.String),
    applicationIds: Schema.optional(Schema.Array(Schema.String)),
    delegationAppIds: Schema.optional(Schema.Array(Schema.String)),
  });
const ResourceTypeRegistrationPropertiesCheckNameAvailabilitySpecificationsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableDefaultValidation: Schema.optional(Schema.Boolean),
    resourceTypesWithCustomValidation: Schema.optional(
      Schema.Array(Schema.String),
    ),
  });
const ResourceTypeRegistrationPropertiesRequestHeaderOptionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    optInHeaders: Schema.optional(Schema.suspend(() => OptInHeaderTypeSchema)),
    optOutHeaders: Schema.optional(
      Schema.suspend(() => OptOutHeaderTypeSchema),
    ),
  });
const ResourceTypeRegistrationPropertiesTemplateDeploymentOptionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    preflightSupported: Schema.optional(Schema.Boolean),
    preflightOptions: Schema.optional(
      Schema.Array(Schema.suspend(() => PreflightOptionSchema)),
    ),
  });
const ResourceTypeRegistrationPropertiesResourceMovePolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validationRequired: Schema.optional(Schema.Boolean),
    crossResourceGroupMoveEnabled: Schema.optional(Schema.Boolean),
    crossSubscriptionMoveEnabled: Schema.optional(Schema.Boolean),
  });
const ResourceDeletionPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "NotSpecified",
    "CascadeDeleteAll",
    "CascadeDeleteProxyOnlyChildren",
  ]);
const ResourceConcurrencyControlOptionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy: Schema.optional(Schema.suspend(() => PolicySchema)),
  });
const PolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NotSpecified",
  "SynchronizeBeginExtension",
]);
const ResourceTypeRegistrationPropertiesResourceGraphConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    apiVersion: Schema.optional(Schema.String),
  });
const ResourceTypeRegistrationPropertiesManagementSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schemaOwners: Schema.optional(Schema.Array(Schema.String)),
    manifestOwners: Schema.optional(Schema.Array(Schema.String)),
    authorizationOwners: Schema.optional(Schema.Array(Schema.String)),
    incidentRoutingService: Schema.optional(Schema.String),
    incidentRoutingTeam: Schema.optional(Schema.String),
    incidentContactEmail: Schema.optional(Schema.String),
    serviceTreeInfos: Schema.optional(
      Schema.Array(Schema.suspend(() => ServiceTreeInfoSchema)),
    ),
    resourceAccessPolicy: Schema.optional(
      Schema.suspend(() => ResourceAccessPolicySchema),
    ),
    resourceAccessRoles: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceAccessRoleSchema)),
    ),
    expeditedRolloutSubmitters: Schema.optional(Schema.Array(Schema.String)),
    errorResponseMessageOptions: Schema.optional(
      Schema.suspend(
        () => ResourceProviderManagementErrorResponseMessageOptionsSchema,
      ),
    ),
    expeditedRolloutMetadata: Schema.optional(
      Schema.suspend(
        () => ResourceProviderManagementExpeditedRolloutMetadataSchema,
      ),
    ),
    canaryManifestOwners: Schema.optional(Schema.Array(Schema.String)),
    pcCode: Schema.optional(Schema.String),
    profitCenterProgramId: Schema.optional(Schema.String),
  });
const OpenApiConfigurationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  validation: Schema.optional(Schema.suspend(() => OpenApiValidationSchema)),
});
const OpenApiValidationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  allowNoncompliantCollectionResponse: Schema.optional(Schema.Boolean),
});
const ResourceTypeOnBehalfOfTokenSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    actionName: Schema.optional(Schema.String),
    lifeTime: Schema.optional(Schema.String),
  });
const ResourceTypeCategorySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "None",
  "FreeForm",
  "Internal",
  "PureProxy",
]);
const ResourceTypeRegistrationPropertiesTemplateDeploymentPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    capabilities: Schema.suspend(() => TemplateDeploymentCapabilitiesSchema),
    preflightOptions: Schema.suspend(
      () => TemplateDeploymentPreflightOptionsSchema,
    ),
    preflightNotifications: Schema.optional(
      Schema.suspend(() => TemplateDeploymentPreflightNotificationsSchema),
    ),
  });
const PolicyExecutionTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NotSpecified",
  "ExecutePolicies",
  "BypassPolicies",
  "ExpectPartialPutRequests",
]);
const ResourceTypeRegistrationPropertiesAvailabilityZoneRuleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    availabilityZonePolicy: Schema.optional(
      Schema.suspend(() => AvailabilityZonePolicySchema),
    ),
  });
const AvailabilityZonePolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "NotSpecified",
    "SingleZoned",
    "MultiZoned",
  ]);
const ResourceTypeRegistrationPropertiesDstsConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceName: Schema.String,
    serviceDnsName: Schema.optional(Schema.String),
  });
const AsyncTimeoutRuleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  actionName: Schema.optional(Schema.String),
  timeout: Schema.optional(Schema.String),
});
const ApiProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileVersion: Schema.optional(Schema.String),
  apiVersion: Schema.optional(Schema.String),
});
const ResourceTypeRegistrationPropertiesLegacyPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disallowedLegacyOperations: Schema.optional(
      Schema.Array(Schema.suspend(() => LegacyOperationSchema)),
    ),
    disallowedConditions: Schema.optional(
      Schema.Array(Schema.suspend(() => LegacyDisallowedConditionSchema)),
    ),
  });
const LegacyOperationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NotSpecified",
  "Create",
  "Delete",
  "Waiting",
  "AzureAsyncOperationWaiting",
  "ResourceCacheWaiting",
  "Action",
  "Read",
  "EvaluateDeploymentOutput",
  "DeploymentCleanup",
]);
const LegacyDisallowedConditionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disallowedLegacyOperations: Schema.optional(
      Schema.Array(Schema.suspend(() => LegacyOperationSchema)),
    ),
    feature: Schema.optional(Schema.String),
  });
const ResourceTypeRegistrationPropertiesCapacityRuleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    capacityPolicy: Schema.optional(Schema.suspend(() => CapacityPolicySchema)),
    skuAlias: Schema.optional(Schema.String),
  });
const CapacityPolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Default",
  "Restricted",
]);
const ResourceTypeRegistrationPropertiesMarketplaceOptionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    addOnPlanConversionAllowed: Schema.optional(Schema.Boolean),
  });
const AllowedResourceNameSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  getActionVerb: Schema.optional(Schema.String),
});
const ResourceTypeRegistrationPropertiesResourceCacheSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableResourceCache: Schema.optional(Schema.Boolean),
    resourceCacheExpirationTimespan: Schema.optional(Schema.String),
  });
const ResourceTypeRegistrationPropertiesResourceQueryManagementSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filterOption: Schema.optional(Schema.suspend(() => FilterOptionSchema)),
  });
const FilterOptionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NotSpecified",
  "EnableSubscriptionFilterOnTenant",
]);
const ResourceTypeRegistrationPropertiesResourceManagementOptionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    batchProvisioningSupport: Schema.optional(
      Schema.suspend(
        () =>
          ResourceTypeRegistrationPropertiesResourceManagementOptionsBatchProvisioningSupportSchema,
      ),
    ),
    deleteDependencies: Schema.optional(
      Schema.Array(Schema.suspend(() => DeleteDependencySchema)),
    ),
    nestedProvisioningSupport: Schema.optional(
      Schema.suspend(
        () =>
          ResourceTypeRegistrationPropertiesResourceManagementOptionsNestedProvisioningSupportSchema,
      ),
    ),
  });
const ResourceTypeRegistrationPropertiesResourceManagementOptionsBatchProvisioningSupportSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    supportedOperations: Schema.optional(
      Schema.suspend(() => SupportedOperationsSchema),
    ),
  });
const SupportedOperationsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NotSpecified",
  "Get",
  "Delete",
]);
const DeleteDependencySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
  linkedProperty: Schema.optional(Schema.String),
  linkedType: Schema.optional(Schema.String),
});
const ResourceTypeRegistrationPropertiesResourceManagementOptionsNestedProvisioningSupportSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minimumApiVersion: Schema.optional(Schema.String),
  });
const ResourceTypeRegistrationPropertiesResourceTypeCommonAttributeManagementSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    commonApiVersionsMergeMode: Schema.optional(
      Schema.suspend(() => CommonApiVersionsMergeModeSchema),
    ),
  });
const CommonApiVersionsMergeModeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Merge", "Overwrite"]);
const ResourceTypeRegistrationPropertiesRoutingRuleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hostResourceType: Schema.optional(Schema.String),
  });
const FrontdoorRequestModeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NotSpecified",
  "UseManifest",
]);
const ResourceSubTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NotSpecified",
  "AsyncOperation",
]);
const SkuResourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const SkuResourcePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  skuSettings: Schema.Array(Schema.suspend(() => SkuSettingSchema)),
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
});
const SkuSettingSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  tier: Schema.optional(Schema.String),
  size: Schema.optional(Schema.String),
  family: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  locations: Schema.optional(Schema.Array(Schema.String)),
  locationInfo: Schema.optional(
    Schema.Array(Schema.suspend(() => SkuLocationInfoSchema)),
  ),
  requiredQuotaIds: Schema.optional(Schema.Array(Schema.String)),
  requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
  capacity: Schema.optional(Schema.suspend(() => SkuSettingCapacitySchema)),
  costs: Schema.optional(Schema.Array(Schema.suspend(() => SkuCostSchema))),
  capabilities: Schema.optional(
    Schema.Array(Schema.suspend(() => SkuCapabilitySchema)),
  ),
});
const SkuLocationInfoSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  location: Schema.String,
  zones: Schema.optional(Schema.Array(Schema.String)),
  zoneDetails: Schema.optional(
    Schema.Array(Schema.suspend(() => SkuZoneDetailSchema)),
  ),
  extendedLocations: Schema.optional(Schema.Array(Schema.String)),
  type: Schema.optional(Schema.suspend(() => ExtendedLocationTypeSchema)),
});
const SkuZoneDetailSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.Array(Schema.String)),
  capabilities: Schema.optional(
    Schema.Array(Schema.suspend(() => SkuCapabilitySchema)),
  ),
});
const SkuCapabilitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  value: Schema.String,
});
const SkuSettingCapacitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  minimum: Schema.Number,
  maximum: Schema.optional(Schema.Number),
  default: Schema.optional(Schema.Number),
  scaleType: Schema.optional(Schema.suspend(() => SkuScaleTypeSchema)),
});
const SkuScaleTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "None",
  "Manual",
  "Automatic",
]);
const SkuCostSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  meterId: Schema.String,
  quantity: Schema.optional(Schema.Number),
  extendedUnit: Schema.optional(Schema.String),
});
const ProviderMonitorSettingPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  });

// Input Schema
export const AuthorizedApplicationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    applicationId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => AuthorizedApplicationPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/authorizedApplications/{applicationId}",
      apiVersion: "2024-09-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type AuthorizedApplicationsCreateOrUpdateInput =
  typeof AuthorizedApplicationsCreateOrUpdateInput.Type;

// Output Schema
export const AuthorizedApplicationsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AuthorizedApplicationPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AuthorizedApplicationsCreateOrUpdateOutput =
  typeof AuthorizedApplicationsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates the authorized application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param applicationId - The application ID.
 */
export const AuthorizedApplicationsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthorizedApplicationsCreateOrUpdateInput,
    outputSchema: AuthorizedApplicationsCreateOrUpdateOutput,
  }));
// Input Schema
export const AuthorizedApplicationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    applicationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/authorizedApplications/{applicationId}",
      apiVersion: "2024-09-01",
    }),
  );
export type AuthorizedApplicationsDeleteInput =
  typeof AuthorizedApplicationsDeleteInput.Type;

// Output Schema
export const AuthorizedApplicationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AuthorizedApplicationsDeleteOutput =
  typeof AuthorizedApplicationsDeleteOutput.Type;

// The operation
/**
 * Deletes an authorized application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param applicationId - The application ID.
 */
export const AuthorizedApplicationsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthorizedApplicationsDeleteInput,
    outputSchema: AuthorizedApplicationsDeleteOutput,
  }));
// Input Schema
export const AuthorizedApplicationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    applicationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/authorizedApplications/{applicationId}",
      apiVersion: "2024-09-01",
    }),
  );
export type AuthorizedApplicationsGetInput =
  typeof AuthorizedApplicationsGetInput.Type;

// Output Schema
export const AuthorizedApplicationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AuthorizedApplicationPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AuthorizedApplicationsGetOutput =
  typeof AuthorizedApplicationsGetOutput.Type;

// The operation
/**
 * Gets the authorized application details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param applicationId - The application ID.
 */
export const AuthorizedApplicationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AuthorizedApplicationsGetInput,
    outputSchema: AuthorizedApplicationsGetOutput,
  }),
);
// Input Schema
export const AuthorizedApplicationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/authorizedApplications",
      apiVersion: "2024-09-01",
    }),
  );
export type AuthorizedApplicationsListInput =
  typeof AuthorizedApplicationsListInput.Type;

// Output Schema
export const AuthorizedApplicationsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => AuthorizedApplicationSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AuthorizedApplicationsListOutput =
  typeof AuthorizedApplicationsListOutput.Type;

// The operation
/**
 * Gets the list of the authorized applications in the provider namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 */
export const AuthorizedApplicationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AuthorizedApplicationsListInput,
    outputSchema: AuthorizedApplicationsListOutput,
  }),
);
// Input Schema
export const CheckinManifestInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  providerNamespace: Schema.String.pipe(T.PathParam()),
  environment: Schema.String,
  baselineArmManifestLocation: Schema.String,
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/checkinManifest",
    apiVersion: "2024-09-01",
  }),
);
export type CheckinManifestInput = typeof CheckinManifestInput.Type;

// Output Schema
export const CheckinManifestOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  isCheckedIn: Schema.Boolean,
  statusMessage: Schema.String,
  pullRequest: Schema.optional(Schema.String),
  commitId: Schema.optional(Schema.String),
});
export type CheckinManifestOutput = typeof CheckinManifestOutput.Type;

// The operation
/**
 * Checkin the manifest.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 */
export const CheckinManifest = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CheckinManifestInput,
  outputSchema: CheckinManifestOutput,
}));
// Input Schema
export const CustomRolloutsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    rolloutName: Schema.String.pipe(T.PathParam()),
    properties: Schema.suspend(() => CustomRolloutPropertiesSchema),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/customRollouts/{rolloutName}",
      apiVersion: "2024-09-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type CustomRolloutsCreateOrUpdateInput =
  typeof CustomRolloutsCreateOrUpdateInput.Type;

// Output Schema
export const CustomRolloutsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => CustomRolloutPropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type CustomRolloutsCreateOrUpdateOutput =
  typeof CustomRolloutsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates the rollout details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param rolloutName - The rollout name.
 */
export const CustomRolloutsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomRolloutsCreateOrUpdateInput,
    outputSchema: CustomRolloutsCreateOrUpdateOutput,
  }));
// Input Schema
export const CustomRolloutsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    rolloutName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/customRollouts/{rolloutName}",
      apiVersion: "2024-09-01",
    }),
  );
export type CustomRolloutsDeleteInput = typeof CustomRolloutsDeleteInput.Type;

// Output Schema
export const CustomRolloutsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CustomRolloutsDeleteOutput = typeof CustomRolloutsDeleteOutput.Type;

// The operation
/**
 * Deletes the custom rollout resource. Custom rollout must be in terminal state.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param rolloutName - The rollout name.
 */
export const CustomRolloutsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomRolloutsDeleteInput,
    outputSchema: CustomRolloutsDeleteOutput,
  }),
);
// Input Schema
export const CustomRolloutsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    rolloutName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/customRollouts/{rolloutName}",
    apiVersion: "2024-09-01",
  }),
);
export type CustomRolloutsGetInput = typeof CustomRolloutsGetInput.Type;

// Output Schema
export const CustomRolloutsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => CustomRolloutPropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type CustomRolloutsGetOutput = typeof CustomRolloutsGetOutput.Type;

// The operation
/**
 * Gets the custom rollout details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param rolloutName - The rollout name.
 */
export const CustomRolloutsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomRolloutsGetInput,
  outputSchema: CustomRolloutsGetOutput,
}));
// Input Schema
export const CustomRolloutsListByProviderRegistrationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/customRollouts",
      apiVersion: "2024-09-01",
    }),
  );
export type CustomRolloutsListByProviderRegistrationInput =
  typeof CustomRolloutsListByProviderRegistrationInput.Type;

// Output Schema
export const CustomRolloutsListByProviderRegistrationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => CustomRolloutSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type CustomRolloutsListByProviderRegistrationOutput =
  typeof CustomRolloutsListByProviderRegistrationOutput.Type;

// The operation
/**
 * Gets the list of the custom rollouts for the given provider.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 */
export const CustomRolloutsListByProviderRegistration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomRolloutsListByProviderRegistrationInput,
    outputSchema: CustomRolloutsListByProviderRegistrationOutput,
  }));
// Input Schema
export const CustomRolloutsStopInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    rolloutName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/customRollouts/{rolloutName}/stop",
      apiVersion: "2024-09-01",
    }),
  );
export type CustomRolloutsStopInput = typeof CustomRolloutsStopInput.Type;

// Output Schema
export const CustomRolloutsStopOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CustomRolloutsStopOutput = typeof CustomRolloutsStopOutput.Type;

// The operation
/**
 * Stops or cancels the custom rollout, if in progress.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param rolloutName - The rollout name.
 */
export const CustomRolloutsStop = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomRolloutsStopInput,
  outputSchema: CustomRolloutsStopOutput,
}));
// Input Schema
export const DefaultRolloutsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    rolloutName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => DefaultRolloutPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/defaultRollouts/{rolloutName}",
      apiVersion: "2024-09-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type DefaultRolloutsCreateOrUpdateInput =
  typeof DefaultRolloutsCreateOrUpdateInput.Type;

// Output Schema
export const DefaultRolloutsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => DefaultRolloutPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type DefaultRolloutsCreateOrUpdateOutput =
  typeof DefaultRolloutsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates the rollout details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param rolloutName - The rollout name.
 */
export const DefaultRolloutsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DefaultRolloutsCreateOrUpdateInput,
    outputSchema: DefaultRolloutsCreateOrUpdateOutput,
  }));
// Input Schema
export const DefaultRolloutsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    rolloutName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/defaultRollouts/{rolloutName}",
      apiVersion: "2024-09-01",
    }),
  );
export type DefaultRolloutsDeleteInput = typeof DefaultRolloutsDeleteInput.Type;

// Output Schema
export const DefaultRolloutsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DefaultRolloutsDeleteOutput =
  typeof DefaultRolloutsDeleteOutput.Type;

// The operation
/**
 * Deletes the rollout resource. Rollout must be in terminal state.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param rolloutName - The rollout name.
 */
export const DefaultRolloutsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DefaultRolloutsDeleteInput,
    outputSchema: DefaultRolloutsDeleteOutput,
  }),
);
// Input Schema
export const DefaultRolloutsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    rolloutName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/defaultRollouts/{rolloutName}",
      apiVersion: "2024-09-01",
    }),
  );
export type DefaultRolloutsGetInput = typeof DefaultRolloutsGetInput.Type;

// Output Schema
export const DefaultRolloutsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => DefaultRolloutPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type DefaultRolloutsGetOutput = typeof DefaultRolloutsGetOutput.Type;

// The operation
/**
 * Gets the default rollout details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param rolloutName - The rollout name.
 */
export const DefaultRolloutsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DefaultRolloutsGetInput,
  outputSchema: DefaultRolloutsGetOutput,
}));
// Input Schema
export const DefaultRolloutsListByProviderRegistrationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/defaultRollouts",
      apiVersion: "2024-09-01",
    }),
  );
export type DefaultRolloutsListByProviderRegistrationInput =
  typeof DefaultRolloutsListByProviderRegistrationInput.Type;

// Output Schema
export const DefaultRolloutsListByProviderRegistrationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => DefaultRolloutSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type DefaultRolloutsListByProviderRegistrationOutput =
  typeof DefaultRolloutsListByProviderRegistrationOutput.Type;

// The operation
/**
 * Gets the list of the rollouts for the given provider.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 */
export const DefaultRolloutsListByProviderRegistration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DefaultRolloutsListByProviderRegistrationInput,
    outputSchema: DefaultRolloutsListByProviderRegistrationOutput,
  }));
// Input Schema
export const DefaultRolloutsStopInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    rolloutName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/defaultRollouts/{rolloutName}/stop",
      apiVersion: "2024-09-01",
    }),
  );
export type DefaultRolloutsStopInput = typeof DefaultRolloutsStopInput.Type;

// Output Schema
export const DefaultRolloutsStopOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DefaultRolloutsStopOutput = typeof DefaultRolloutsStopOutput.Type;

// The operation
/**
 * Stops or cancels the rollout, if in progress.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param rolloutName - The rollout name.
 */
export const DefaultRolloutsStop = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DefaultRolloutsStopInput,
  outputSchema: DefaultRolloutsStopOutput,
}));
// Input Schema
export const GenerateManifestInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  providerNamespace: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/generateManifest",
    apiVersion: "2024-09-01",
  }),
);
export type GenerateManifestInput = typeof GenerateManifestInput.Type;

// Output Schema
export const GenerateManifestOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    providerAuthentication: Schema.optional(
      Schema.suspend(
        () => ResourceProviderManifestProviderAuthenticationSchema,
      ),
    ),
    providerAuthorizations: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceProviderAuthorizationSchema)),
    ),
    namespace: Schema.optional(Schema.String),
    services: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceProviderServiceSchema)),
    ),
    serviceName: Schema.optional(Schema.String),
    providerVersion: Schema.optional(Schema.String),
    providerType: Schema.optional(
      Schema.suspend(() => ResourceProviderTypeSchema),
    ),
    requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
    featuresRule: Schema.optional(
      Schema.suspend(() => ResourceProviderManifestFeaturesRuleSchema),
    ),
    requestHeaderOptions: Schema.optional(
      Schema.suspend(() => ResourceProviderManifestRequestHeaderOptionsSchema),
    ),
    resourceTypes: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceTypeSchema)),
    ),
    management: Schema.optional(
      Schema.suspend(() => ResourceProviderManifestManagementSchema),
    ),
    capabilities: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceProviderCapabilitiesSchema)),
    ),
    crossTenantTokenValidation: Schema.optional(
      Schema.suspend(() => CrossTenantTokenValidationSchema),
    ),
    metadata: Schema.optional(Schema.Unknown),
    globalNotificationEndpoints: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceProviderEndpointSchema)),
    ),
    reRegisterSubscriptionMetadata: Schema.optional(
      Schema.suspend(
        () => ResourceProviderManifestReRegisterSubscriptionMetadataSchema,
      ),
    ),
    enableTenantLinkedNotification: Schema.optional(
      Schema.NullOr(Schema.Boolean),
    ),
    notifications: Schema.optional(
      Schema.Array(Schema.suspend(() => NotificationSchema)),
    ),
    linkedNotificationRules: Schema.optional(
      Schema.Array(Schema.suspend(() => FanoutLinkedNotificationRuleSchema)),
    ),
    resourceProviderAuthorizationRules: Schema.optional(
      Schema.suspend(() => ResourceProviderAuthorizationRulesSchema),
    ),
  },
);
export type GenerateManifestOutput = typeof GenerateManifestOutput.Type;

// The operation
/**
 * Generates the manifest for the given provider.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 */
export const GenerateManifest = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GenerateManifestInput,
  outputSchema: GenerateManifestOutput,
}));
// Input Schema
export const NewRegionFrontloadReleaseCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    releaseName: Schema.String.pipe(T.PathParam()),
    properties: Schema.suspend(() => FrontloadPayloadPropertiesSchema),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/newRegionFrontloadRelease/{releaseName}",
      apiVersion: "2024-09-01",
    }),
  );
export type NewRegionFrontloadReleaseCreateOrUpdateInput =
  typeof NewRegionFrontloadReleaseCreateOrUpdateInput.Type;

// Output Schema
export const NewRegionFrontloadReleaseCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => DefaultRolloutPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type NewRegionFrontloadReleaseCreateOrUpdateOutput =
  typeof NewRegionFrontloadReleaseCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a new region frontload release.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param releaseName - The name of the release.
 */
export const NewRegionFrontloadReleaseCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NewRegionFrontloadReleaseCreateOrUpdateInput,
    outputSchema: NewRegionFrontloadReleaseCreateOrUpdateOutput,
  }));
// Input Schema
export const NewRegionFrontloadReleaseGenerateManifestInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    properties: Schema.suspend(() => FrontloadPayloadPropertiesSchema),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/generateNewRegionFrontloadManifest",
      apiVersion: "2024-09-01",
    }),
  );
export type NewRegionFrontloadReleaseGenerateManifestInput =
  typeof NewRegionFrontloadReleaseGenerateManifestInput.Type;

// Output Schema
export const NewRegionFrontloadReleaseGenerateManifestOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    providerAuthentication: Schema.optional(
      Schema.suspend(
        () => ResourceProviderManifestProviderAuthenticationSchema,
      ),
    ),
    providerAuthorizations: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceProviderAuthorizationSchema)),
    ),
    namespace: Schema.optional(Schema.String),
    services: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceProviderServiceSchema)),
    ),
    serviceName: Schema.optional(Schema.String),
    providerVersion: Schema.optional(Schema.String),
    providerType: Schema.optional(
      Schema.suspend(() => ResourceProviderTypeSchema),
    ),
    requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
    featuresRule: Schema.optional(
      Schema.suspend(() => ResourceProviderManifestFeaturesRuleSchema),
    ),
    requestHeaderOptions: Schema.optional(
      Schema.suspend(() => ResourceProviderManifestRequestHeaderOptionsSchema),
    ),
    resourceTypes: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceTypeSchema)),
    ),
    management: Schema.optional(
      Schema.suspend(() => ResourceProviderManifestManagementSchema),
    ),
    capabilities: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceProviderCapabilitiesSchema)),
    ),
    crossTenantTokenValidation: Schema.optional(
      Schema.suspend(() => CrossTenantTokenValidationSchema),
    ),
    metadata: Schema.optional(Schema.Unknown),
    globalNotificationEndpoints: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceProviderEndpointSchema)),
    ),
    reRegisterSubscriptionMetadata: Schema.optional(
      Schema.suspend(
        () => ResourceProviderManifestReRegisterSubscriptionMetadataSchema,
      ),
    ),
    enableTenantLinkedNotification: Schema.optional(
      Schema.NullOr(Schema.Boolean),
    ),
    notifications: Schema.optional(
      Schema.Array(Schema.suspend(() => NotificationSchema)),
    ),
    linkedNotificationRules: Schema.optional(
      Schema.Array(Schema.suspend(() => FanoutLinkedNotificationRuleSchema)),
    ),
    resourceProviderAuthorizationRules: Schema.optional(
      Schema.suspend(() => ResourceProviderAuthorizationRulesSchema),
    ),
  });
export type NewRegionFrontloadReleaseGenerateManifestOutput =
  typeof NewRegionFrontloadReleaseGenerateManifestOutput.Type;

// The operation
/**
 * Generates the new region frontload manifest.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 */
export const NewRegionFrontloadReleaseGenerateManifest =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NewRegionFrontloadReleaseGenerateManifestInput,
    outputSchema: NewRegionFrontloadReleaseGenerateManifestOutput,
  }));
// Input Schema
export const NewRegionFrontloadReleaseGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    releaseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/newRegionFrontloadRelease/{releaseName}",
      apiVersion: "2024-09-01",
    }),
  );
export type NewRegionFrontloadReleaseGetInput =
  typeof NewRegionFrontloadReleaseGetInput.Type;

// Output Schema
export const NewRegionFrontloadReleaseGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => DefaultRolloutPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type NewRegionFrontloadReleaseGetOutput =
  typeof NewRegionFrontloadReleaseGetOutput.Type;

// The operation
/**
 * Gets a new region frontload release.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param releaseName - The name of the release.
 */
export const NewRegionFrontloadReleaseGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NewRegionFrontloadReleaseGetInput,
    outputSchema: NewRegionFrontloadReleaseGetOutput,
  }));
// Input Schema
export const NewRegionFrontloadReleaseStopInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    releaseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/newRegionFrontloadRelease/{releaseName}/stop",
      apiVersion: "2024-09-01",
    }),
  );
export type NewRegionFrontloadReleaseStopInput =
  typeof NewRegionFrontloadReleaseStopInput.Type;

// Output Schema
export const NewRegionFrontloadReleaseStopOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NewRegionFrontloadReleaseStopOutput =
  typeof NewRegionFrontloadReleaseStopOutput.Type;

// The operation
/**
 * Stops a new region frontload release.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param releaseName - The name of the release.
 */
export const NewRegionFrontloadReleaseStop =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NewRegionFrontloadReleaseStopInput,
    outputSchema: NewRegionFrontloadReleaseStopOutput,
  }));
// Input Schema
export const NotificationRegistrationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    notificationRegistrationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => NotificationRegistrationPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/notificationRegistrations/{notificationRegistrationName}",
      apiVersion: "2024-09-01",
    }),
  );
export type NotificationRegistrationsCreateOrUpdateInput =
  typeof NotificationRegistrationsCreateOrUpdateInput.Type;

// Output Schema
export const NotificationRegistrationsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => NotificationRegistrationPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type NotificationRegistrationsCreateOrUpdateOutput =
  typeof NotificationRegistrationsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a notification registration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param notificationRegistrationName - The notification registration.
 */
export const NotificationRegistrationsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NotificationRegistrationsCreateOrUpdateInput,
    outputSchema: NotificationRegistrationsCreateOrUpdateOutput,
  }));
// Input Schema
export const NotificationRegistrationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    notificationRegistrationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/notificationRegistrations/{notificationRegistrationName}",
      apiVersion: "2024-09-01",
    }),
  );
export type NotificationRegistrationsDeleteInput =
  typeof NotificationRegistrationsDeleteInput.Type;

// Output Schema
export const NotificationRegistrationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NotificationRegistrationsDeleteOutput =
  typeof NotificationRegistrationsDeleteOutput.Type;

// The operation
/**
 * Deletes a notification registration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param notificationRegistrationName - The notification registration.
 */
export const NotificationRegistrationsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NotificationRegistrationsDeleteInput,
    outputSchema: NotificationRegistrationsDeleteOutput,
  }));
// Input Schema
export const NotificationRegistrationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    notificationRegistrationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/notificationRegistrations/{notificationRegistrationName}",
      apiVersion: "2024-09-01",
    }),
  );
export type NotificationRegistrationsGetInput =
  typeof NotificationRegistrationsGetInput.Type;

// Output Schema
export const NotificationRegistrationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => NotificationRegistrationPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type NotificationRegistrationsGetOutput =
  typeof NotificationRegistrationsGetOutput.Type;

// The operation
/**
 * Gets the notification registration details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param notificationRegistrationName - The notification registration.
 */
export const NotificationRegistrationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NotificationRegistrationsGetInput,
    outputSchema: NotificationRegistrationsGetOutput,
  }));
// Input Schema
export const NotificationRegistrationsListByProviderRegistrationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/notificationRegistrations",
      apiVersion: "2024-09-01",
    }),
  );
export type NotificationRegistrationsListByProviderRegistrationInput =
  typeof NotificationRegistrationsListByProviderRegistrationInput.Type;

// Output Schema
export const NotificationRegistrationsListByProviderRegistrationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => NotificationRegistrationSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type NotificationRegistrationsListByProviderRegistrationOutput =
  typeof NotificationRegistrationsListByProviderRegistrationOutput.Type;

// The operation
/**
 * Gets the list of the notification registrations for the given provider.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 */
export const NotificationRegistrationsListByProviderRegistration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NotificationRegistrationsListByProviderRegistrationInput,
    outputSchema: NotificationRegistrationsListByProviderRegistrationOutput,
  }));
// Input Schema
export const OperationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => OperationsPutContentPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/operations/default",
      apiVersion: "2024-09-01",
    }),
  );
export type OperationsCreateOrUpdateInput =
  typeof OperationsCreateOrUpdateInput.Type;

// Output Schema
export const OperationsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => OperationsPutContentPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type OperationsCreateOrUpdateOutput =
  typeof OperationsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates the operation supported by the given provider.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 */
export const OperationsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: OperationsCreateOrUpdateInput,
    outputSchema: OperationsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const OperationsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  providerNamespace: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/operations/default",
    apiVersion: "2024-09-01",
  }),
);
export type OperationsDeleteInput = typeof OperationsDeleteInput.Type;

// Output Schema
export const OperationsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type OperationsDeleteOutput = typeof OperationsDeleteOutput.Type;

// The operation
/**
 * Deletes an operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 */
export const OperationsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsDeleteInput,
  outputSchema: OperationsDeleteOutput,
}));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ProviderHub/operations",
    apiVersion: "2024-09-01",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(Schema.suspend(() => OperationsDefinitionSchema)),
  ),
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
export const OperationsListByProviderRegistrationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/operations/default",
      apiVersion: "2024-09-01",
    }),
  );
export type OperationsListByProviderRegistrationInput =
  typeof OperationsListByProviderRegistrationInput.Type;

// Output Schema
export const OperationsListByProviderRegistrationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => OperationsDefinitionSchema),
  );
export type OperationsListByProviderRegistrationOutput =
  typeof OperationsListByProviderRegistrationOutput.Type;

// The operation
/**
 * Gets the operations supported by the given provider.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 */
export const OperationsListByProviderRegistration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OperationsListByProviderRegistrationInput,
    outputSchema: OperationsListByProviderRegistrationOutput,
  }));
// Input Schema
export const ProviderMonitorSettingsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    providerMonitorSettingName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => ProviderMonitorSettingPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ProviderHub/providerMonitorSettings/{providerMonitorSettingName}",
      apiVersion: "2024-09-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type ProviderMonitorSettingsCreateInput =
  typeof ProviderMonitorSettingsCreateInput.Type;

// Output Schema
export const ProviderMonitorSettingsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ProviderMonitorSettingPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ProviderMonitorSettingsCreateOutput =
  typeof ProviderMonitorSettingsCreateOutput.Type;

// The operation
/**
 * Creates the provider monitor setting.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param providerMonitorSettingName - The name of the provider monitor setting.
 */
export const ProviderMonitorSettingsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProviderMonitorSettingsCreateInput,
    outputSchema: ProviderMonitorSettingsCreateOutput,
  }));
// Input Schema
export const ProviderMonitorSettingsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    providerMonitorSettingName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ProviderHub/providerMonitorSettings/{providerMonitorSettingName}",
      apiVersion: "2024-09-01",
    }),
  );
export type ProviderMonitorSettingsDeleteInput =
  typeof ProviderMonitorSettingsDeleteInput.Type;

// Output Schema
export const ProviderMonitorSettingsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ProviderMonitorSettingsDeleteOutput =
  typeof ProviderMonitorSettingsDeleteOutput.Type;

// The operation
/**
 * Deletes a provider monitor setting.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param providerMonitorSettingName - The name of the provider monitor setting.
 */
export const ProviderMonitorSettingsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProviderMonitorSettingsDeleteInput,
    outputSchema: ProviderMonitorSettingsDeleteOutput,
  }));
// Input Schema
export const ProviderMonitorSettingsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    providerMonitorSettingName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ProviderHub/providerMonitorSettings/{providerMonitorSettingName}",
      apiVersion: "2024-09-01",
    }),
  );
export type ProviderMonitorSettingsGetInput =
  typeof ProviderMonitorSettingsGetInput.Type;

// Output Schema
export const ProviderMonitorSettingsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ProviderMonitorSettingPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ProviderMonitorSettingsGetOutput =
  typeof ProviderMonitorSettingsGetOutput.Type;

// The operation
/**
 * Gets the provider monitor setting details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param providerMonitorSettingName - The name of the provider monitor setting.
 */
export const ProviderMonitorSettingsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProviderMonitorSettingsGetInput,
    outputSchema: ProviderMonitorSettingsGetOutput,
  }),
);
// Input Schema
export const ProviderMonitorSettingsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ProviderHub/providerMonitorSettings",
      apiVersion: "2024-09-01",
    }),
  );
export type ProviderMonitorSettingsListByResourceGroupInput =
  typeof ProviderMonitorSettingsListByResourceGroupInput.Type;

// Output Schema
export const ProviderMonitorSettingsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ProviderMonitorSettingSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ProviderMonitorSettingsListByResourceGroupOutput =
  typeof ProviderMonitorSettingsListByResourceGroupOutput.Type;

// The operation
/**
 * Gets the list of the provider monitor settings in the resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ProviderMonitorSettingsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProviderMonitorSettingsListByResourceGroupInput,
    outputSchema: ProviderMonitorSettingsListByResourceGroupOutput,
  }));
// Input Schema
export const ProviderMonitorSettingsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerMonitorSettings",
      apiVersion: "2024-09-01",
    }),
  );
export type ProviderMonitorSettingsListBySubscriptionInput =
  typeof ProviderMonitorSettingsListBySubscriptionInput.Type;

// Output Schema
export const ProviderMonitorSettingsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ProviderMonitorSettingSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ProviderMonitorSettingsListBySubscriptionOutput =
  typeof ProviderMonitorSettingsListBySubscriptionOutput.Type;

// The operation
/**
 * Gets the list of the provider monitor settings in the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const ProviderMonitorSettingsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProviderMonitorSettingsListBySubscriptionInput,
    outputSchema: ProviderMonitorSettingsListBySubscriptionOutput,
  }));
// Input Schema
export const ProviderMonitorSettingsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    providerMonitorSettingName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ProviderHub/providerMonitorSettings/{providerMonitorSettingName}",
      apiVersion: "2024-09-01",
    }),
  );
export type ProviderMonitorSettingsUpdateInput =
  typeof ProviderMonitorSettingsUpdateInput.Type;

// Output Schema
export const ProviderMonitorSettingsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ProviderMonitorSettingPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ProviderMonitorSettingsUpdateOutput =
  typeof ProviderMonitorSettingsUpdateOutput.Type;

// The operation
/**
 * Updates the provider monitor setting properties as specified in the request body. Update fails if the specified provider monitor setting does not already exist.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param providerMonitorSettingName - The name of the provider monitor setting.
 */
export const ProviderMonitorSettingsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProviderMonitorSettingsUpdateInput,
    outputSchema: ProviderMonitorSettingsUpdateOutput,
  }));
// Input Schema
export const ProviderRegistrationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => ProviderRegistrationPropertiesSchema),
    ),
    kind: Schema.optional(Schema.Literals(["Managed", "Hybrid", "Direct"])),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}",
      apiVersion: "2024-09-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type ProviderRegistrationsCreateOrUpdateInput =
  typeof ProviderRegistrationsCreateOrUpdateInput.Type;

// Output Schema
export const ProviderRegistrationsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ProviderRegistrationPropertiesSchema),
    ),
    kind: Schema.optional(Schema.Literals(["Managed", "Hybrid", "Direct"])),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ProviderRegistrationsCreateOrUpdateOutput =
  typeof ProviderRegistrationsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates the provider registration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 */
export const ProviderRegistrationsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProviderRegistrationsCreateOrUpdateInput,
    outputSchema: ProviderRegistrationsCreateOrUpdateOutput,
  }));
// Input Schema
export const ProviderRegistrationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}",
      apiVersion: "2024-09-01",
    }),
  );
export type ProviderRegistrationsDeleteInput =
  typeof ProviderRegistrationsDeleteInput.Type;

// Output Schema
export const ProviderRegistrationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ProviderRegistrationsDeleteOutput =
  typeof ProviderRegistrationsDeleteOutput.Type;

// The operation
/**
 * Deletes a provider registration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 */
export const ProviderRegistrationsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProviderRegistrationsDeleteInput,
    outputSchema: ProviderRegistrationsDeleteOutput,
  }),
);
// Input Schema
export const ProviderRegistrationsGenerateOperationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/generateOperations",
      apiVersion: "2024-09-01",
    }),
  );
export type ProviderRegistrationsGenerateOperationsInput =
  typeof ProviderRegistrationsGenerateOperationsInput.Type;

// Output Schema
export const ProviderRegistrationsGenerateOperationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => OperationsDefinitionSchema),
  );
export type ProviderRegistrationsGenerateOperationsOutput =
  typeof ProviderRegistrationsGenerateOperationsOutput.Type;

// The operation
/**
 * Generates the operations api for the given provider.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 */
export const ProviderRegistrationsGenerateOperations =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProviderRegistrationsGenerateOperationsInput,
    outputSchema: ProviderRegistrationsGenerateOperationsOutput,
  }));
// Input Schema
export const ProviderRegistrationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}",
      apiVersion: "2024-09-01",
    }),
  );
export type ProviderRegistrationsGetInput =
  typeof ProviderRegistrationsGetInput.Type;

// Output Schema
export const ProviderRegistrationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ProviderRegistrationPropertiesSchema),
    ),
    kind: Schema.optional(Schema.Literals(["Managed", "Hybrid", "Direct"])),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ProviderRegistrationsGetOutput =
  typeof ProviderRegistrationsGetOutput.Type;

// The operation
/**
 * Gets the provider registration details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 */
export const ProviderRegistrationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProviderRegistrationsGetInput,
    outputSchema: ProviderRegistrationsGetOutput,
  }),
);
// Input Schema
export const ProviderRegistrationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations",
      apiVersion: "2024-09-01",
    }),
  );
export type ProviderRegistrationsListInput =
  typeof ProviderRegistrationsListInput.Type;

// Output Schema
export const ProviderRegistrationsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ProviderRegistrationSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ProviderRegistrationsListOutput =
  typeof ProviderRegistrationsListOutput.Type;

// The operation
/**
 * Gets the list of the provider registrations in the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const ProviderRegistrationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProviderRegistrationsListInput,
    outputSchema: ProviderRegistrationsListOutput,
  }),
);
// Input Schema
export const ResourceActionsDeleteResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceActionName: Schema.String.pipe(T.PathParam()),
    resources: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceManagementEntitySchema)),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourceActions/{resourceActionName}/deleteResources",
      apiVersion: "2024-09-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type ResourceActionsDeleteResourcesInput =
  typeof ResourceActionsDeleteResourcesInput.Type;

// Output Schema
export const ResourceActionsDeleteResourcesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ResourceActionsDeleteResourcesOutput =
  typeof ResourceActionsDeleteResourcesOutput.Type;

// The operation
/**
 * Deletes resources.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceActionName - The resource action name.
 */
export const ResourceActionsDeleteResources =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ResourceActionsDeleteResourcesInput,
    outputSchema: ResourceActionsDeleteResourcesOutput,
  }));
// Input Schema
export const ResourceTypeRegistrationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => ResourceTypeRegistrationPropertiesSchema),
    ),
    kind: Schema.optional(Schema.Literals(["Managed", "Hybrid", "Direct"])),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}",
      apiVersion: "2024-09-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type ResourceTypeRegistrationsCreateOrUpdateInput =
  typeof ResourceTypeRegistrationsCreateOrUpdateInput.Type;

// Output Schema
export const ResourceTypeRegistrationsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ResourceTypeRegistrationPropertiesSchema),
    ),
    kind: Schema.optional(Schema.Literals(["Managed", "Hybrid", "Direct"])),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ResourceTypeRegistrationsCreateOrUpdateOutput =
  typeof ResourceTypeRegistrationsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a resource type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 */
export const ResourceTypeRegistrationsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ResourceTypeRegistrationsCreateOrUpdateInput,
    outputSchema: ResourceTypeRegistrationsCreateOrUpdateOutput,
  }));
// Input Schema
export const ResourceTypeRegistrationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}",
      apiVersion: "2024-09-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type ResourceTypeRegistrationsDeleteInput =
  typeof ResourceTypeRegistrationsDeleteInput.Type;

// Output Schema
export const ResourceTypeRegistrationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ResourceTypeRegistrationsDeleteOutput =
  typeof ResourceTypeRegistrationsDeleteOutput.Type;

// The operation
/**
 * Deletes a resource type
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 */
export const ResourceTypeRegistrationsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ResourceTypeRegistrationsDeleteInput,
    outputSchema: ResourceTypeRegistrationsDeleteOutput,
  }));
// Input Schema
export const ResourceTypeRegistrationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}",
      apiVersion: "2024-09-01",
    }),
  );
export type ResourceTypeRegistrationsGetInput =
  typeof ResourceTypeRegistrationsGetInput.Type;

// Output Schema
export const ResourceTypeRegistrationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ResourceTypeRegistrationPropertiesSchema),
    ),
    kind: Schema.optional(Schema.Literals(["Managed", "Hybrid", "Direct"])),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ResourceTypeRegistrationsGetOutput =
  typeof ResourceTypeRegistrationsGetOutput.Type;

// The operation
/**
 * Gets a resource type details in the given subscription and provider.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 */
export const ResourceTypeRegistrationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ResourceTypeRegistrationsGetInput,
    outputSchema: ResourceTypeRegistrationsGetOutput,
  }));
// Input Schema
export const ResourceTypeRegistrationsListByProviderRegistrationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations",
      apiVersion: "2024-09-01",
    }),
  );
export type ResourceTypeRegistrationsListByProviderRegistrationInput =
  typeof ResourceTypeRegistrationsListByProviderRegistrationInput.Type;

// Output Schema
export const ResourceTypeRegistrationsListByProviderRegistrationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ResourceTypeRegistrationSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ResourceTypeRegistrationsListByProviderRegistrationOutput =
  typeof ResourceTypeRegistrationsListByProviderRegistrationOutput.Type;

// The operation
/**
 * Gets the list of the resource types for the given provider.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 */
export const ResourceTypeRegistrationsListByProviderRegistration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ResourceTypeRegistrationsListByProviderRegistrationInput,
    outputSchema: ResourceTypeRegistrationsListByProviderRegistrationOutput,
  }));
// Input Schema
export const SkusCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    sku: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => SkuResourcePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}/skus/{sku}",
      apiVersion: "2024-09-01",
    }),
  );
export type SkusCreateOrUpdateInput = typeof SkusCreateOrUpdateInput.Type;

// Output Schema
export const SkusCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SkuResourcePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SkusCreateOrUpdateOutput = typeof SkusCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates the resource type skus in the given resource type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 * @param sku - The SKU.
 */
export const SkusCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SkusCreateOrUpdateInput,
  outputSchema: SkusCreateOrUpdateOutput,
}));
// Input Schema
export const SkusCreateOrUpdateNestedResourceTypeFirstInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeFirst: Schema.String.pipe(T.PathParam()),
    sku: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => SkuResourcePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}/resourcetypeRegistrations/{nestedResourceTypeFirst}/skus/{sku}",
      apiVersion: "2024-09-01",
    }),
  );
export type SkusCreateOrUpdateNestedResourceTypeFirstInput =
  typeof SkusCreateOrUpdateNestedResourceTypeFirstInput.Type;

// Output Schema
export const SkusCreateOrUpdateNestedResourceTypeFirstOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SkuResourcePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SkusCreateOrUpdateNestedResourceTypeFirstOutput =
  typeof SkusCreateOrUpdateNestedResourceTypeFirstOutput.Type;

// The operation
/**
 * Creates or updates the resource type skus in the given resource type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 * @param nestedResourceTypeFirst - The first child resource type.
 * @param sku - The SKU.
 */
export const SkusCreateOrUpdateNestedResourceTypeFirst =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SkusCreateOrUpdateNestedResourceTypeFirstInput,
    outputSchema: SkusCreateOrUpdateNestedResourceTypeFirstOutput,
  }));
// Input Schema
export const SkusCreateOrUpdateNestedResourceTypeSecondInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeFirst: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeSecond: Schema.String.pipe(T.PathParam()),
    sku: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => SkuResourcePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}/resourcetypeRegistrations/{nestedResourceTypeFirst}/resourcetypeRegistrations/{nestedResourceTypeSecond}/skus/{sku}",
      apiVersion: "2024-09-01",
    }),
  );
export type SkusCreateOrUpdateNestedResourceTypeSecondInput =
  typeof SkusCreateOrUpdateNestedResourceTypeSecondInput.Type;

// Output Schema
export const SkusCreateOrUpdateNestedResourceTypeSecondOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SkuResourcePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SkusCreateOrUpdateNestedResourceTypeSecondOutput =
  typeof SkusCreateOrUpdateNestedResourceTypeSecondOutput.Type;

// The operation
/**
 * Creates or updates the resource type skus in the given resource type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 * @param nestedResourceTypeFirst - The first child resource type.
 * @param nestedResourceTypeSecond - The second child resource type.
 * @param sku - The SKU.
 */
export const SkusCreateOrUpdateNestedResourceTypeSecond =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SkusCreateOrUpdateNestedResourceTypeSecondInput,
    outputSchema: SkusCreateOrUpdateNestedResourceTypeSecondOutput,
  }));
// Input Schema
export const SkusCreateOrUpdateNestedResourceTypeThirdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeFirst: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeSecond: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeThird: Schema.String.pipe(T.PathParam()),
    sku: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => SkuResourcePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}/resourcetypeRegistrations/{nestedResourceTypeFirst}/resourcetypeRegistrations/{nestedResourceTypeSecond}/resourcetypeRegistrations/{nestedResourceTypeThird}/skus/{sku}",
      apiVersion: "2024-09-01",
    }),
  );
export type SkusCreateOrUpdateNestedResourceTypeThirdInput =
  typeof SkusCreateOrUpdateNestedResourceTypeThirdInput.Type;

// Output Schema
export const SkusCreateOrUpdateNestedResourceTypeThirdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SkuResourcePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SkusCreateOrUpdateNestedResourceTypeThirdOutput =
  typeof SkusCreateOrUpdateNestedResourceTypeThirdOutput.Type;

// The operation
/**
 * Creates or updates the resource type skus in the given resource type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 * @param nestedResourceTypeFirst - The first child resource type.
 * @param nestedResourceTypeSecond - The second child resource type.
 * @param nestedResourceTypeThird - The third child resource type.
 * @param sku - The SKU.
 */
export const SkusCreateOrUpdateNestedResourceTypeThird =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SkusCreateOrUpdateNestedResourceTypeThirdInput,
    outputSchema: SkusCreateOrUpdateNestedResourceTypeThirdOutput,
  }));
// Input Schema
export const SkusDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  providerNamespace: Schema.String.pipe(T.PathParam()),
  resourceType: Schema.String.pipe(T.PathParam()),
  sku: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}/skus/{sku}",
    apiVersion: "2024-09-01",
  }),
);
export type SkusDeleteInput = typeof SkusDeleteInput.Type;

// Output Schema
export const SkusDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SkusDeleteOutput = typeof SkusDeleteOutput.Type;

// The operation
/**
 * Deletes a resource type sku.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 * @param sku - The SKU.
 */
export const SkusDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SkusDeleteInput,
  outputSchema: SkusDeleteOutput,
}));
// Input Schema
export const SkusDeleteNestedResourceTypeFirstInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeFirst: Schema.String.pipe(T.PathParam()),
    sku: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}/resourcetypeRegistrations/{nestedResourceTypeFirst}/skus/{sku}",
      apiVersion: "2024-09-01",
    }),
  );
export type SkusDeleteNestedResourceTypeFirstInput =
  typeof SkusDeleteNestedResourceTypeFirstInput.Type;

// Output Schema
export const SkusDeleteNestedResourceTypeFirstOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SkusDeleteNestedResourceTypeFirstOutput =
  typeof SkusDeleteNestedResourceTypeFirstOutput.Type;

// The operation
/**
 * Deletes a resource type sku.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 * @param nestedResourceTypeFirst - The first child resource type.
 * @param sku - The SKU.
 */
export const SkusDeleteNestedResourceTypeFirst =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SkusDeleteNestedResourceTypeFirstInput,
    outputSchema: SkusDeleteNestedResourceTypeFirstOutput,
  }));
// Input Schema
export const SkusDeleteNestedResourceTypeSecondInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeFirst: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeSecond: Schema.String.pipe(T.PathParam()),
    sku: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}/resourcetypeRegistrations/{nestedResourceTypeFirst}/resourcetypeRegistrations/{nestedResourceTypeSecond}/skus/{sku}",
      apiVersion: "2024-09-01",
    }),
  );
export type SkusDeleteNestedResourceTypeSecondInput =
  typeof SkusDeleteNestedResourceTypeSecondInput.Type;

// Output Schema
export const SkusDeleteNestedResourceTypeSecondOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SkusDeleteNestedResourceTypeSecondOutput =
  typeof SkusDeleteNestedResourceTypeSecondOutput.Type;

// The operation
/**
 * Deletes a resource type sku.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 * @param nestedResourceTypeFirst - The first child resource type.
 * @param nestedResourceTypeSecond - The second child resource type.
 * @param sku - The SKU.
 */
export const SkusDeleteNestedResourceTypeSecond =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SkusDeleteNestedResourceTypeSecondInput,
    outputSchema: SkusDeleteNestedResourceTypeSecondOutput,
  }));
// Input Schema
export const SkusDeleteNestedResourceTypeThirdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeFirst: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeSecond: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeThird: Schema.String.pipe(T.PathParam()),
    sku: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}/resourcetypeRegistrations/{nestedResourceTypeFirst}/resourcetypeRegistrations/{nestedResourceTypeSecond}/resourcetypeRegistrations/{nestedResourceTypeThird}/skus/{sku}",
      apiVersion: "2024-09-01",
    }),
  );
export type SkusDeleteNestedResourceTypeThirdInput =
  typeof SkusDeleteNestedResourceTypeThirdInput.Type;

// Output Schema
export const SkusDeleteNestedResourceTypeThirdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SkusDeleteNestedResourceTypeThirdOutput =
  typeof SkusDeleteNestedResourceTypeThirdOutput.Type;

// The operation
/**
 * Deletes a resource type sku.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 * @param nestedResourceTypeFirst - The first child resource type.
 * @param nestedResourceTypeSecond - The second child resource type.
 * @param nestedResourceTypeThird - The third child resource type.
 * @param sku - The SKU.
 */
export const SkusDeleteNestedResourceTypeThird =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SkusDeleteNestedResourceTypeThirdInput,
    outputSchema: SkusDeleteNestedResourceTypeThirdOutput,
  }));
// Input Schema
export const SkusGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  providerNamespace: Schema.String.pipe(T.PathParam()),
  resourceType: Schema.String.pipe(T.PathParam()),
  sku: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}/skus/{sku}",
    apiVersion: "2024-09-01",
  }),
);
export type SkusGetInput = typeof SkusGetInput.Type;

// Output Schema
export const SkusGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(
    Schema.suspend(() => SkuResourcePropertiesSchema),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type SkusGetOutput = typeof SkusGetOutput.Type;

// The operation
/**
 * Gets the sku details for the given resource type and sku name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 * @param sku - The SKU.
 */
export const SkusGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SkusGetInput,
  outputSchema: SkusGetOutput,
}));
// Input Schema
export const SkusGetNestedResourceTypeFirstInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeFirst: Schema.String.pipe(T.PathParam()),
    sku: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}/resourcetypeRegistrations/{nestedResourceTypeFirst}/skus/{sku}",
      apiVersion: "2024-09-01",
    }),
  );
export type SkusGetNestedResourceTypeFirstInput =
  typeof SkusGetNestedResourceTypeFirstInput.Type;

// Output Schema
export const SkusGetNestedResourceTypeFirstOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SkuResourcePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SkusGetNestedResourceTypeFirstOutput =
  typeof SkusGetNestedResourceTypeFirstOutput.Type;

// The operation
/**
 * Gets the sku details for the given resource type and sku name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 * @param nestedResourceTypeFirst - The first child resource type.
 * @param sku - The SKU.
 */
export const SkusGetNestedResourceTypeFirst =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SkusGetNestedResourceTypeFirstInput,
    outputSchema: SkusGetNestedResourceTypeFirstOutput,
  }));
// Input Schema
export const SkusGetNestedResourceTypeSecondInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeFirst: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeSecond: Schema.String.pipe(T.PathParam()),
    sku: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}/resourcetypeRegistrations/{nestedResourceTypeFirst}/resourcetypeRegistrations/{nestedResourceTypeSecond}/skus/{sku}",
      apiVersion: "2024-09-01",
    }),
  );
export type SkusGetNestedResourceTypeSecondInput =
  typeof SkusGetNestedResourceTypeSecondInput.Type;

// Output Schema
export const SkusGetNestedResourceTypeSecondOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SkuResourcePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SkusGetNestedResourceTypeSecondOutput =
  typeof SkusGetNestedResourceTypeSecondOutput.Type;

// The operation
/**
 * Gets the sku details for the given resource type and sku name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 * @param nestedResourceTypeFirst - The first child resource type.
 * @param nestedResourceTypeSecond - The second child resource type.
 * @param sku - The SKU.
 */
export const SkusGetNestedResourceTypeSecond =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SkusGetNestedResourceTypeSecondInput,
    outputSchema: SkusGetNestedResourceTypeSecondOutput,
  }));
// Input Schema
export const SkusGetNestedResourceTypeThirdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeFirst: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeSecond: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeThird: Schema.String.pipe(T.PathParam()),
    sku: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}/resourcetypeRegistrations/{nestedResourceTypeFirst}/resourcetypeRegistrations/{nestedResourceTypeSecond}/resourcetypeRegistrations/{nestedResourceTypeThird}/skus/{sku}",
      apiVersion: "2024-09-01",
    }),
  );
export type SkusGetNestedResourceTypeThirdInput =
  typeof SkusGetNestedResourceTypeThirdInput.Type;

// Output Schema
export const SkusGetNestedResourceTypeThirdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SkuResourcePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SkusGetNestedResourceTypeThirdOutput =
  typeof SkusGetNestedResourceTypeThirdOutput.Type;

// The operation
/**
 * Gets the sku details for the given resource type and sku name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 * @param nestedResourceTypeFirst - The first child resource type.
 * @param nestedResourceTypeSecond - The second child resource type.
 * @param nestedResourceTypeThird - The third child resource type.
 * @param sku - The SKU.
 */
export const SkusGetNestedResourceTypeThird =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SkusGetNestedResourceTypeThirdInput,
    outputSchema: SkusGetNestedResourceTypeThirdOutput,
  }));
// Input Schema
export const SkusListByResourceTypeRegistrationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}/skus",
      apiVersion: "2024-09-01",
    }),
  );
export type SkusListByResourceTypeRegistrationsInput =
  typeof SkusListByResourceTypeRegistrationsInput.Type;

// Output Schema
export const SkusListByResourceTypeRegistrationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => SkuResourceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type SkusListByResourceTypeRegistrationsOutput =
  typeof SkusListByResourceTypeRegistrationsOutput.Type;

// The operation
/**
 * Gets the list of skus for the given resource type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 */
export const SkusListByResourceTypeRegistrations =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SkusListByResourceTypeRegistrationsInput,
    outputSchema: SkusListByResourceTypeRegistrationsOutput,
  }));
// Input Schema
export const SkusListByResourceTypeRegistrationsNestedResourceTypeFirstInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeFirst: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}/resourcetypeRegistrations/{nestedResourceTypeFirst}/skus",
      apiVersion: "2024-09-01",
    }),
  );
export type SkusListByResourceTypeRegistrationsNestedResourceTypeFirstInput =
  typeof SkusListByResourceTypeRegistrationsNestedResourceTypeFirstInput.Type;

// Output Schema
export const SkusListByResourceTypeRegistrationsNestedResourceTypeFirstOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => SkuResourceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type SkusListByResourceTypeRegistrationsNestedResourceTypeFirstOutput =
  typeof SkusListByResourceTypeRegistrationsNestedResourceTypeFirstOutput.Type;

// The operation
/**
 * Gets the list of skus for the given resource type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 * @param nestedResourceTypeFirst - The first child resource type.
 */
export const SkusListByResourceTypeRegistrationsNestedResourceTypeFirst =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      SkusListByResourceTypeRegistrationsNestedResourceTypeFirstInput,
    outputSchema:
      SkusListByResourceTypeRegistrationsNestedResourceTypeFirstOutput,
  }));
// Input Schema
export const SkusListByResourceTypeRegistrationsNestedResourceTypeSecondInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeFirst: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeSecond: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}/resourcetypeRegistrations/{nestedResourceTypeFirst}/resourcetypeRegistrations/{nestedResourceTypeSecond}/skus",
      apiVersion: "2024-09-01",
    }),
  );
export type SkusListByResourceTypeRegistrationsNestedResourceTypeSecondInput =
  typeof SkusListByResourceTypeRegistrationsNestedResourceTypeSecondInput.Type;

// Output Schema
export const SkusListByResourceTypeRegistrationsNestedResourceTypeSecondOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => SkuResourceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type SkusListByResourceTypeRegistrationsNestedResourceTypeSecondOutput =
  typeof SkusListByResourceTypeRegistrationsNestedResourceTypeSecondOutput.Type;

// The operation
/**
 * Gets the list of skus for the given resource type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 * @param nestedResourceTypeFirst - The first child resource type.
 * @param nestedResourceTypeSecond - The second child resource type.
 */
export const SkusListByResourceTypeRegistrationsNestedResourceTypeSecond =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      SkusListByResourceTypeRegistrationsNestedResourceTypeSecondInput,
    outputSchema:
      SkusListByResourceTypeRegistrationsNestedResourceTypeSecondOutput,
  }));
// Input Schema
export const SkusListByResourceTypeRegistrationsNestedResourceTypeThirdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeFirst: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeSecond: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeThird: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}/resourcetypeRegistrations/{nestedResourceTypeFirst}/resourcetypeRegistrations/{nestedResourceTypeSecond}/resourcetypeRegistrations/{nestedResourceTypeThird}/skus",
      apiVersion: "2024-09-01",
    }),
  );
export type SkusListByResourceTypeRegistrationsNestedResourceTypeThirdInput =
  typeof SkusListByResourceTypeRegistrationsNestedResourceTypeThirdInput.Type;

// Output Schema
export const SkusListByResourceTypeRegistrationsNestedResourceTypeThirdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => SkuResourceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type SkusListByResourceTypeRegistrationsNestedResourceTypeThirdOutput =
  typeof SkusListByResourceTypeRegistrationsNestedResourceTypeThirdOutput.Type;

// The operation
/**
 * Gets the list of skus for the given resource type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 * @param nestedResourceTypeFirst - The first child resource type.
 * @param nestedResourceTypeSecond - The second child resource type.
 * @param nestedResourceTypeThird - The third child resource type.
 */
export const SkusListByResourceTypeRegistrationsNestedResourceTypeThird =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      SkusListByResourceTypeRegistrationsNestedResourceTypeThirdInput,
    outputSchema:
      SkusListByResourceTypeRegistrationsNestedResourceTypeThirdOutput,
  }));
