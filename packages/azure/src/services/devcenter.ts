/**
 * Azure Devcenter API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";

// Shared schemas
const SkuTierSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Free",
  "Basic",
  "Standard",
  "Premium",
]);
const PoolSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
const PoolPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  devBoxDefinitionType: Schema.optional(
    Schema.suspend(() => PoolDevBoxDefinitionTypeSchema),
  ),
  devBoxDefinitionName: Schema.optional(Schema.String),
  devBoxDefinition: Schema.optional(
    Schema.suspend(() => PoolDevBoxDefinitionSchema),
  ),
  networkConnectionName: Schema.optional(Schema.String),
  licenseType: Schema.optional(Schema.suspend(() => LicenseTypeSchema)),
  localAdministrator: Schema.optional(
    Schema.suspend(() => LocalAdminStatusSchema),
  ),
  stopOnDisconnect: Schema.optional(
    Schema.suspend(() => StopOnDisconnectConfigurationSchema),
  ),
  stopOnNoConnect: Schema.optional(
    Schema.suspend(() => StopOnNoConnectConfigurationSchema),
  ),
  singleSignOnStatus: Schema.optional(
    Schema.suspend(() => SingleSignOnStatusSchema),
  ),
  displayName: Schema.optional(Schema.String),
  virtualNetworkType: Schema.optional(
    Schema.suspend(() => VirtualNetworkTypeSchema),
  ),
  managedVirtualNetworkRegions: Schema.optional(Schema.Array(Schema.String)),
});
const PoolDevBoxDefinitionTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Reference", "Value"]);
const PoolDevBoxDefinitionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  imageReference: Schema.optional(Schema.suspend(() => ImageReferenceSchema)),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.String,
      tier: Schema.optional(Schema.suspend(() => SkuTierSchema)),
      size: Schema.optional(Schema.String),
      family: Schema.optional(Schema.String),
      capacity: Schema.optional(Schema.Number),
    }),
  ),
  activeImageReference: Schema.optional(
    Schema.suspend(() => ImageReferenceSchema),
  ),
});
const ImageReferenceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  exactVersion: Schema.optional(Schema.String),
});
const LicenseTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Windows_Client",
]);
const LocalAdminStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Disabled",
  "Enabled",
]);
const StopOnDisconnectConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(
      Schema.suspend(() => StopOnDisconnectEnableStatusSchema),
    ),
    gracePeriodMinutes: Schema.optional(Schema.Number),
  });
const StopOnDisconnectEnableStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Enabled", "Disabled"]);
const StopOnNoConnectConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(
      Schema.suspend(() => StopOnNoConnectEnableStatusSchema),
    ),
    gracePeriodMinutes: Schema.optional(Schema.Number),
  });
const StopOnNoConnectEnableStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Enabled", "Disabled"]);
const SingleSignOnStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Disabled",
  "Enabled",
]);
const VirtualNetworkTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Managed",
  "Unmanaged",
]);
const PoolUpdatePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  devBoxDefinitionType: Schema.optional(
    Schema.suspend(() => PoolDevBoxDefinitionTypeSchema),
  ),
  devBoxDefinitionName: Schema.optional(Schema.String),
  devBoxDefinition: Schema.optional(
    Schema.suspend(() => PoolDevBoxDefinitionSchema),
  ),
  networkConnectionName: Schema.optional(Schema.String),
  licenseType: Schema.optional(Schema.suspend(() => LicenseTypeSchema)),
  localAdministrator: Schema.optional(
    Schema.suspend(() => LocalAdminStatusSchema),
  ),
  stopOnDisconnect: Schema.optional(
    Schema.suspend(() => StopOnDisconnectConfigurationSchema),
  ),
  stopOnNoConnect: Schema.optional(
    Schema.suspend(() => StopOnNoConnectConfigurationSchema),
  ),
  singleSignOnStatus: Schema.optional(
    Schema.suspend(() => SingleSignOnStatusSchema),
  ),
  displayName: Schema.optional(Schema.String),
  virtualNetworkType: Schema.optional(
    Schema.suspend(() => VirtualNetworkTypeSchema),
  ),
  managedVirtualNetworkRegions: Schema.optional(Schema.Array(Schema.String)),
});
const TagsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
  Schema.String,
  Schema.String,
);
const ScheduleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const SchedulePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tags: Schema.optional(Schema.suspend(() => TagsSchema)),
  location: Schema.optional(Schema.String),
});
const ScheduleUpdatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tags: Schema.optional(Schema.suspend(() => TagsSchema)),
    location: Schema.optional(Schema.String),
  });
const NetworkConnectionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const NetworkPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subnetId: Schema.optional(Schema.String),
  domainName: Schema.optional(Schema.String),
  organizationUnit: Schema.optional(Schema.String),
  domainUsername: Schema.optional(Schema.String),
  domainPassword: Schema.optional(SensitiveOutputString),
});
const NetworkConnectionUpdatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subnetId: Schema.optional(Schema.String),
    domainName: Schema.optional(Schema.String),
    organizationUnit: Schema.optional(Schema.String),
    domainUsername: Schema.optional(Schema.String),
    domainPassword: Schema.optional(SensitiveOutputString),
  });
const HealthCheckStatusDetailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const HealthCheckStatusDetailsPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startDateTime: Schema.optional(Schema.String),
    endDateTime: Schema.optional(Schema.String),
    healthChecks: Schema.optional(
      Schema.Array(Schema.suspend(() => HealthCheckSchema)),
    ),
  });
const HealthCheckSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.optional(Schema.suspend(() => HealthCheckStatusSchema)),
  displayName: Schema.optional(Schema.String),
  startDateTime: Schema.optional(Schema.String),
  endDateTime: Schema.optional(Schema.String),
  errorType: Schema.optional(Schema.String),
  recommendedAction: Schema.optional(Schema.String),
  additionalDetails: Schema.optional(Schema.String),
});
const HealthCheckStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "Pending",
  "Running",
  "Passed",
  "Warning",
  "Failed",
  "Informational",
]);
const OutboundEnvironmentEndpointSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    category: Schema.optional(Schema.String),
    endpoints: Schema.optional(
      Schema.Array(Schema.suspend(() => EndpointDependencySchema)),
    ),
  });
const EndpointDependencySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  domainName: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  endpointDetails: Schema.optional(
    Schema.Array(Schema.suspend(() => EndpointDetailSchema)),
  ),
});
const EndpointDetailSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  port: Schema.optional(Schema.Number),
});
const DevCenterSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const DevCenterPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  encryption: Schema.optional(Schema.suspend(() => EncryptionSchema)),
  displayName: Schema.optional(Schema.String),
  projectCatalogSettings: Schema.optional(
    Schema.suspend(() => DevCenterProjectCatalogSettingsSchema),
  ),
  networkSettings: Schema.optional(
    Schema.suspend(() => DevCenterNetworkSettingsSchema),
  ),
  devBoxProvisioningSettings: Schema.optional(
    Schema.suspend(() => DevBoxProvisioningSettingsSchema),
  ),
});
const EncryptionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customerManagedKeyEncryption: Schema.optional(
    Schema.Struct({
      keyEncryptionKeyIdentity: Schema.optional(
        Schema.Struct({
          identityType: Schema.optional(
            Schema.Literals([
              "systemAssignedIdentity",
              "userAssignedIdentity",
              "delegatedResourceIdentity",
            ]),
          ),
          userAssignedIdentityResourceId: Schema.optional(Schema.String),
          delegatedIdentityClientId: Schema.optional(Schema.String),
        }),
      ),
      keyEncryptionKeyUrl: Schema.optional(Schema.String),
    }),
  ),
});
const DevCenterProjectCatalogSettingsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    catalogItemSyncEnableStatus: Schema.optional(
      Schema.suspend(() => CatalogItemSyncEnableStatusSchema),
    ),
  });
const CatalogItemSyncEnableStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Enabled", "Disabled"]);
const DevCenterNetworkSettingsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    microsoftHostedNetworkEnableStatus: Schema.optional(
      Schema.suspend(() => MicrosoftHostedNetworkEnableStatusSchema),
    ),
  });
const MicrosoftHostedNetworkEnableStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Enabled", "Disabled"]);
const DevBoxProvisioningSettingsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    installAzureMonitorAgentEnableStatus: Schema.optional(
      Schema.suspend(() => InstallAzureMonitorAgentEnableStatusSchema),
    ),
  });
const InstallAzureMonitorAgentEnableStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Enabled", "Disabled"]);
const ManagedServiceIdentityTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "None",
    "SystemAssigned",
    "UserAssigned",
    "SystemAssigned, UserAssigned",
  ]);
const UserAssignedIdentitiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
  Schema.String,
  Schema.suspend(() => UserAssignedIdentitySchema),
);
const UserAssignedIdentitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  principalId: Schema.optional(Schema.String),
  clientId: Schema.optional(Schema.String),
});
const DevCenterUpdatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    encryption: Schema.optional(Schema.suspend(() => EncryptionSchema)),
    displayName: Schema.optional(Schema.String),
    projectCatalogSettings: Schema.optional(
      Schema.suspend(() => DevCenterProjectCatalogSettingsSchema),
    ),
    networkSettings: Schema.optional(
      Schema.suspend(() => DevCenterNetworkSettingsSchema),
    ),
    devBoxProvisioningSettings: Schema.optional(
      Schema.suspend(() => DevBoxProvisioningSettingsSchema),
    ),
  });
const ProjectPolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const ProjectPolicyPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    resourcePolicies: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourcePolicySchema)),
    ),
    scopes: Schema.optional(Schema.Array(Schema.String)),
  },
);
const ResourcePolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resources: Schema.optional(Schema.String),
  filter: Schema.optional(Schema.String),
  action: Schema.optional(Schema.suspend(() => PolicyActionSchema)),
  resourceType: Schema.optional(
    Schema.suspend(() => DevCenterResourceTypeSchema),
  ),
});
const PolicyActionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Allow",
  "Deny",
]);
const DevCenterResourceTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(
  ["Images", "AttachedNetworks", "Skus"],
);
const ProjectPolicyUpdatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourcePolicies: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourcePolicySchema)),
    ),
    scopes: Schema.optional(Schema.Array(Schema.String)),
  });
const ProjectSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const ProjectPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  devCenterId: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  maxDevBoxesPerUser: Schema.optional(Schema.Number),
  displayName: Schema.optional(Schema.String),
  catalogSettings: Schema.optional(
    Schema.suspend(() => ProjectCatalogSettingsSchema),
  ),
});
const ProjectCatalogSettingsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  catalogItemSyncTypes: Schema.optional(
    Schema.Array(Schema.suspend(() => CatalogItemTypeSchema)),
  ),
});
const CatalogItemTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "EnvironmentDefinition",
  "ImageDefinition",
]);
const ProjectUpdatePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    devCenterId: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    maxDevBoxesPerUser: Schema.optional(Schema.Number),
    displayName: Schema.optional(Schema.String),
    catalogSettings: Schema.optional(
      Schema.suspend(() => ProjectCatalogSettingsSchema),
    ),
  },
);
const ProjectNetworkSettingsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  microsoftHostedNetworkEnableStatus: Schema.optional(
    Schema.suspend(() => MicrosoftHostedNetworkEnableStatusSchema),
  ),
});
const AttachedNetworkConnectionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const AttachedNetworkConnectionPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.Literals([
        "NotSpecified",
        "Accepted",
        "Running",
        "Creating",
        "Created",
        "Updating",
        "Updated",
        "Deleting",
        "Deleted",
        "Succeeded",
        "Failed",
        "Canceled",
        "MovingResources",
        "TransientFailure",
        "RolloutInProgress",
        "StorageProvisioningFailed",
      ]),
    ),
    networkConnectionId: Schema.String,
    networkConnectionLocation: Schema.optional(Schema.String),
    healthCheckStatus: Schema.optional(
      Schema.Literals([
        "Unknown",
        "Pending",
        "Running",
        "Passed",
        "Warning",
        "Failed",
        "Informational",
      ]),
    ),
    domainJoinType: Schema.optional(
      Schema.Literals(["HybridAzureADJoin", "AzureADJoin", "None"]),
    ),
  });
const CatalogSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const CatalogPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  gitHub: Schema.optional(Schema.suspend(() => GitCatalogSchema)),
  adoGit: Schema.optional(Schema.suspend(() => GitCatalogSchema)),
  syncType: Schema.optional(Schema.Literals(["Manual", "Scheduled"])),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
});
const GitCatalogSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uri: Schema.optional(Schema.String),
  branch: Schema.optional(Schema.String),
  secretIdentifier: Schema.optional(Schema.String),
  path: Schema.optional(Schema.String),
});
const CatalogUpdatePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    gitHub: Schema.optional(Schema.suspend(() => GitCatalogSchema)),
    adoGit: Schema.optional(Schema.suspend(() => GitCatalogSchema)),
    syncType: Schema.optional(Schema.Literals(["Manual", "Scheduled"])),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  },
);
const EnvironmentDefinitionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const EnvironmentDefinitionPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    parameters: Schema.optional(
      Schema.Array(Schema.suspend(() => EnvironmentDefinitionParameterSchema)),
    ),
    templatePath: Schema.optional(Schema.String),
    validationStatus: Schema.optional(
      Schema.Literals(["Unknown", "Pending", "Succeeded", "Failed"]),
    ),
  });
const EnvironmentDefinitionParameterSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    type: Schema.optional(Schema.suspend(() => ParameterTypeSchema)),
    readOnly: Schema.optional(Schema.Boolean),
    required: Schema.optional(Schema.Boolean),
  });
const ParameterTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "array",
  "boolean",
  "integer",
  "number",
  "object",
  "string",
]);
const CatalogErrorDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  code: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
});
const CatalogConflictErrorSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  path: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
});
const CatalogSyncErrorSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  path: Schema.optional(Schema.String),
  errorDetails: Schema.optional(
    Schema.Array(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
  ),
});
const GallerySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const GalleryPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provisioningState: Schema.optional(
    Schema.Literals([
      "NotSpecified",
      "Accepted",
      "Running",
      "Creating",
      "Created",
      "Updating",
      "Updated",
      "Deleting",
      "Deleted",
      "Succeeded",
      "Failed",
      "Canceled",
      "MovingResources",
      "TransientFailure",
      "RolloutInProgress",
      "StorageProvisioningFailed",
    ]),
  ),
  galleryResourceId: Schema.String,
});
const ImageSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const ImagePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  description: Schema.optional(Schema.String),
  publisher: Schema.optional(Schema.String),
  offer: Schema.optional(Schema.String),
  sku: Schema.optional(Schema.String),
  recommendedMachineConfiguration: Schema.optional(
    Schema.suspend(() => RecommendedMachineConfigurationSchema),
  ),
  provisioningState: Schema.optional(
    Schema.Literals([
      "NotSpecified",
      "Accepted",
      "Running",
      "Creating",
      "Created",
      "Updating",
      "Updated",
      "Deleting",
      "Deleted",
      "Succeeded",
      "Failed",
      "Canceled",
      "MovingResources",
      "TransientFailure",
      "RolloutInProgress",
      "StorageProvisioningFailed",
    ]),
  ),
  hibernateSupport: Schema.optional(
    Schema.suspend(() => HibernateSupportSchema),
  ),
});
const RecommendedMachineConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    memory: Schema.optional(Schema.suspend(() => ResourceRangeSchema)),
    vCPUs: Schema.optional(Schema.suspend(() => ResourceRangeSchema)),
  });
const ResourceRangeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  min: Schema.optional(Schema.Number),
  max: Schema.optional(Schema.Number),
});
const HibernateSupportSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Disabled",
  "Enabled",
]);
const ImageVersionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const ImageVersionPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  publishedDate: Schema.optional(Schema.String),
  excludeFromLatest: Schema.optional(Schema.Boolean),
  osDiskImageSizeInGb: Schema.optional(Schema.Number),
  provisioningState: Schema.optional(
    Schema.Literals([
      "NotSpecified",
      "Accepted",
      "Running",
      "Creating",
      "Created",
      "Updating",
      "Updated",
      "Deleting",
      "Deleted",
      "Succeeded",
      "Failed",
      "Canceled",
      "MovingResources",
      "TransientFailure",
      "RolloutInProgress",
      "StorageProvisioningFailed",
    ]),
  ),
});
const EnvironmentTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const EnvironmentTypePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
  });
const EnvironmentTypeUpdatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
  });
const AllowedEnvironmentTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const AllowedEnvironmentTypePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.Literals([
        "NotSpecified",
        "Accepted",
        "Running",
        "Creating",
        "Created",
        "Updating",
        "Updated",
        "Deleting",
        "Deleted",
        "Succeeded",
        "Failed",
        "Canceled",
        "MovingResources",
        "TransientFailure",
        "RolloutInProgress",
        "StorageProvisioningFailed",
      ]),
    ),
    displayName: Schema.optional(Schema.String),
  });
const ProjectEnvironmentTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const ProjectEnvironmentTypePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deploymentTargetId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.suspend(() => EnvironmentTypeEnableStatusSchema),
    ),
    creatorRoleAssignment: Schema.optional(
      Schema.Struct({
        roles: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.suspend(() => EnvironmentRoleSchema),
          ),
        ),
      }),
    ),
    userRoleAssignments: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => UserRoleAssignmentSchema),
      ),
    ),
  });
const EnvironmentTypeEnableStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Enabled", "Disabled"]);
const EnvironmentRoleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  roleName: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
});
const UserRoleAssignmentSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  roles: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => EnvironmentRoleSchema),
    ),
  ),
});
const ProjectEnvironmentTypeUpdatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deploymentTargetId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.suspend(() => EnvironmentTypeEnableStatusSchema),
    ),
    creatorRoleAssignment: Schema.optional(
      Schema.Struct({
        roles: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.suspend(() => EnvironmentRoleSchema),
          ),
        ),
      }),
    ),
    userRoleAssignments: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => UserRoleAssignmentSchema),
      ),
    ),
  });
const DevBoxDefinitionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const DevBoxDefinitionPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageReference: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        exactVersion: Schema.optional(Schema.String),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(Schema.suspend(() => SkuTierSchema)),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    osStorageType: Schema.optional(Schema.String),
    hibernateSupport: Schema.optional(
      Schema.suspend(() => HibernateSupportSchema),
    ),
  });
const DevBoxDefinitionUpdatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageReference: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        exactVersion: Schema.optional(Schema.String),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(Schema.suspend(() => SkuTierSchema)),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    osStorageType: Schema.optional(Schema.String),
    hibernateSupport: Schema.optional(
      Schema.suspend(() => HibernateSupportSchema),
    ),
  });
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
const OperationStatusResultSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  resourceId: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  status: Schema.String,
  percentComplete: Schema.optional(Schema.Number),
  startTime: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
  operations: Schema.optional(Schema.Array(Schema.Unknown)),
  error: Schema.optional(Schema.suspend(() => ErrorDetailSchema)),
});
const ErrorDetailSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  code: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
  target: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
  additionalInfo: Schema.optional(
    Schema.Array(Schema.suspend(() => ErrorAdditionalInfoSchema)),
  ),
});
const ErrorAdditionalInfoSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  info: Schema.optional(Schema.Unknown),
});
const UsageSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  currentValue: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
  unit: Schema.optional(Schema.Literals(["Count"])),
  name: Schema.optional(Schema.suspend(() => UsageNameSchema)),
  id: Schema.optional(Schema.String),
});
const UsageNameSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  localizedValue: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
});
const CustomizationTaskSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const CustomizationTaskPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputs: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => CustomizationTaskInputSchema),
      ),
    ),
    timeout: Schema.optional(Schema.Number),
    validationStatus: Schema.optional(
      Schema.Literals(["Unknown", "Pending", "Succeeded", "Failed"]),
    ),
  });
const CustomizationTaskInputSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  description: Schema.optional(Schema.String),
  type: Schema.optional(Schema.Literals(["string", "number", "boolean"])),
  required: Schema.optional(Schema.Boolean),
});
const ImageDefinitionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const ImageDefinitionPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageReference: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        exactVersion: Schema.optional(Schema.String),
      }),
    ),
    fileUrl: Schema.optional(Schema.String),
    latestBuild: Schema.optional(Schema.suspend(() => LatestImageBuildSchema)),
    imageValidationStatus: Schema.optional(
      Schema.Literals([
        "Unknown",
        "Pending",
        "Succeeded",
        "Failed",
        "TimedOut",
      ]),
    ),
    imageValidationErrorDetails: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
    validationStatus: Schema.optional(
      Schema.Literals(["Unknown", "Pending", "Succeeded", "Failed"]),
    ),
    activeImageReference: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        exactVersion: Schema.optional(Schema.String),
      }),
    ),
    autoImageBuild: Schema.optional(
      Schema.suspend(() => AutoImageBuildStatusSchema),
    ),
  });
const LatestImageBuildSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  startTime: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
  status: Schema.optional(
    Schema.suspend(() => ImageDefinitionBuildStatusSchema),
  ),
});
const ImageDefinitionBuildStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Running",
    "ValidationFailed",
    "Failed",
    "Cancelled",
    "TimedOut",
  ]);
const AutoImageBuildStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Disabled",
  "Enabled",
]);
const ImageDefinitionBuildSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const ImageDefinitionBuildPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageReference: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        exactVersion: Schema.optional(Schema.String),
      }),
    ),
    status: Schema.optional(
      Schema.suspend(() => ImageDefinitionBuildStatusSchema),
    ),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    errorDetails: Schema.optional(
      Schema.suspend(() => ImageCreationErrorDetailsSchema),
    ),
  });
const ImageCreationErrorDetailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  });
const ImageDefinitionBuildTaskGroupSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.suspend(() => ImageDefinitionBuildStatusSchema),
    ),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    tasks: Schema.optional(
      Schema.Array(Schema.suspend(() => ImageDefinitionBuildTaskSchema)),
    ),
  });
const ImageDefinitionBuildTaskSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    parameters: Schema.optional(
      Schema.Array(
        Schema.Struct({
          key: Schema.String,
          value: Schema.String,
        }),
      ),
    ),
    displayName: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.suspend(() => ImageDefinitionBuildStatusSchema),
    ),
    logUri: Schema.optional(Schema.String),
  });

// Input Schema
export const AttachedNetworksCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => AttachedNetworkConnectionPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/attachednetworks/{attachedNetworkConnectionName}",
      apiVersion: "2025-02-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type AttachedNetworksCreateOrUpdateInput =
  typeof AttachedNetworksCreateOrUpdateInput.Type;

// Output Schema
export const AttachedNetworksCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AttachedNetworkConnectionPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AttachedNetworksCreateOrUpdateOutput =
  typeof AttachedNetworksCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates an attached NetworkConnection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AttachedNetworksCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AttachedNetworksCreateOrUpdateInput,
    outputSchema: AttachedNetworksCreateOrUpdateOutput,
  }));
// Input Schema
export const AttachedNetworksDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/attachednetworks/{attachedNetworkConnectionName}",
      apiVersion: "2025-02-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type AttachedNetworksDeleteInput =
  typeof AttachedNetworksDeleteInput.Type;

// Output Schema
export const AttachedNetworksDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AttachedNetworksDeleteOutput =
  typeof AttachedNetworksDeleteOutput.Type;

// The operation
/**
 * Un-attach a NetworkConnection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AttachedNetworksDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AttachedNetworksDeleteInput,
    outputSchema: AttachedNetworksDeleteOutput,
  }),
);
// Input Schema
export const AttachedNetworksGetByDevCenterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/attachednetworks/{attachedNetworkConnectionName}",
      apiVersion: "2025-02-01",
    }),
  );
export type AttachedNetworksGetByDevCenterInput =
  typeof AttachedNetworksGetByDevCenterInput.Type;

// Output Schema
export const AttachedNetworksGetByDevCenterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AttachedNetworkConnectionPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AttachedNetworksGetByDevCenterOutput =
  typeof AttachedNetworksGetByDevCenterOutput.Type;

// The operation
/**
 * Gets an attached NetworkConnection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AttachedNetworksGetByDevCenter =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AttachedNetworksGetByDevCenterInput,
    outputSchema: AttachedNetworksGetByDevCenterOutput,
  }));
// Input Schema
export const AttachedNetworksGetByProjectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/attachednetworks/{attachedNetworkConnectionName}",
      apiVersion: "2025-02-01",
    }),
  );
export type AttachedNetworksGetByProjectInput =
  typeof AttachedNetworksGetByProjectInput.Type;

// Output Schema
export const AttachedNetworksGetByProjectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AttachedNetworkConnectionPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AttachedNetworksGetByProjectOutput =
  typeof AttachedNetworksGetByProjectOutput.Type;

// The operation
/**
 * Gets an attached NetworkConnection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AttachedNetworksGetByProject =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AttachedNetworksGetByProjectInput,
    outputSchema: AttachedNetworksGetByProjectOutput,
  }));
// Input Schema
export const AttachedNetworksListByDevCenterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/attachednetworks",
      apiVersion: "2025-02-01",
    }),
  );
export type AttachedNetworksListByDevCenterInput =
  typeof AttachedNetworksListByDevCenterInput.Type;

// Output Schema
export const AttachedNetworksListByDevCenterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => AttachedNetworkConnectionSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type AttachedNetworksListByDevCenterOutput =
  typeof AttachedNetworksListByDevCenterOutput.Type;

// The operation
/**
 * Lists the attached NetworkConnections for a DevCenter.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const AttachedNetworksListByDevCenter =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AttachedNetworksListByDevCenterInput,
    outputSchema: AttachedNetworksListByDevCenterOutput,
  }));
// Input Schema
export const AttachedNetworksListByProjectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/attachednetworks",
      apiVersion: "2025-02-01",
    }),
  );
export type AttachedNetworksListByProjectInput =
  typeof AttachedNetworksListByProjectInput.Type;

// Output Schema
export const AttachedNetworksListByProjectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => AttachedNetworkConnectionSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type AttachedNetworksListByProjectOutput =
  typeof AttachedNetworksListByProjectOutput.Type;

// The operation
/**
 * Lists the attached NetworkConnections for a Project.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const AttachedNetworksListByProject =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AttachedNetworksListByProjectInput,
    outputSchema: AttachedNetworksListByProjectOutput,
  }));
// Input Schema
export const CatalogsConnectInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs/{catalogName}/connect",
    apiVersion: "2025-02-01",
    longRunning: { finalStateVia: "azure-async-operation" },
  }),
);
export type CatalogsConnectInput = typeof CatalogsConnectInput.Type;

// Output Schema
export const CatalogsConnectOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CatalogsConnectOutput = typeof CatalogsConnectOutput.Type;

// The operation
/**
 * Connects a catalog to enable syncing.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const CatalogsConnect = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CatalogsConnectInput,
  outputSchema: CatalogsConnectOutput,
}));
// Input Schema
export const CatalogsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(Schema.suspend(() => CatalogPropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs/{catalogName}",
      apiVersion: "2025-02-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type CatalogsCreateOrUpdateInput =
  typeof CatalogsCreateOrUpdateInput.Type;

// Output Schema
export const CatalogsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => CatalogPropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type CatalogsCreateOrUpdateOutput =
  typeof CatalogsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a catalog.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const CatalogsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CatalogsCreateOrUpdateInput,
    outputSchema: CatalogsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const CatalogsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs/{catalogName}",
    apiVersion: "2025-02-01",
    longRunning: { finalStateVia: "azure-async-operation" },
  }),
);
export type CatalogsDeleteInput = typeof CatalogsDeleteInput.Type;

// Output Schema
export const CatalogsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CatalogsDeleteOutput = typeof CatalogsDeleteOutput.Type;

// The operation
/**
 * Deletes a catalog resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const CatalogsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CatalogsDeleteInput,
  outputSchema: CatalogsDeleteOutput,
}));
// Input Schema
export const CatalogsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs/{catalogName}",
    apiVersion: "2025-02-01",
  }),
);
export type CatalogsGetInput = typeof CatalogsGetInput.Type;

// Output Schema
export const CatalogsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => CatalogPropertiesSchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type CatalogsGetOutput = typeof CatalogsGetOutput.Type;

// The operation
/**
 * Gets a catalog
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const CatalogsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CatalogsGetInput,
  outputSchema: CatalogsGetOutput,
}));
// Input Schema
export const CatalogsGetSyncErrorDetailsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs/{catalogName}/getSyncErrorDetails",
      apiVersion: "2025-02-01",
    }),
  );
export type CatalogsGetSyncErrorDetailsInput =
  typeof CatalogsGetSyncErrorDetailsInput.Type;

// Output Schema
export const CatalogsGetSyncErrorDetailsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operationError: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
    conflicts: Schema.optional(
      Schema.Array(Schema.suspend(() => CatalogConflictErrorSchema)),
    ),
    errors: Schema.optional(
      Schema.Array(Schema.suspend(() => CatalogSyncErrorSchema)),
    ),
  });
export type CatalogsGetSyncErrorDetailsOutput =
  typeof CatalogsGetSyncErrorDetailsOutput.Type;

// The operation
/**
 * Gets catalog synchronization error details
 */
export const CatalogsGetSyncErrorDetails = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CatalogsGetSyncErrorDetailsInput,
    outputSchema: CatalogsGetSyncErrorDetailsOutput,
  }),
);
// Input Schema
export const CatalogsListByDevCenterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs",
      apiVersion: "2025-02-01",
    }),
  );
export type CatalogsListByDevCenterInput =
  typeof CatalogsListByDevCenterInput.Type;

// Output Schema
export const CatalogsListByDevCenterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(Schema.suspend(() => CatalogSchema))),
    nextLink: Schema.optional(Schema.String),
  });
export type CatalogsListByDevCenterOutput =
  typeof CatalogsListByDevCenterOutput.Type;

// The operation
/**
 * Lists catalogs for a devcenter.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const CatalogsListByDevCenter = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CatalogsListByDevCenterInput,
    outputSchema: CatalogsListByDevCenterOutput,
  }),
);
// Input Schema
export const CatalogsSyncInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs/{catalogName}/sync",
    apiVersion: "2025-02-01",
    longRunning: { finalStateVia: "azure-async-operation" },
  }),
);
export type CatalogsSyncInput = typeof CatalogsSyncInput.Type;

// Output Schema
export const CatalogsSyncOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CatalogsSyncOutput = typeof CatalogsSyncOutput.Type;

// The operation
/**
 * Syncs templates for a template source.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const CatalogsSync = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CatalogsSyncInput,
  outputSchema: CatalogsSyncOutput,
}));
// Input Schema
export const CatalogsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.suspend(() => CatalogUpdatePropertiesSchema),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs/{catalogName}",
    apiVersion: "2025-02-01",
    longRunning: { finalStateVia: "azure-async-operation" },
  }),
);
export type CatalogsUpdateInput = typeof CatalogsUpdateInput.Type;

// Output Schema
export const CatalogsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => CatalogPropertiesSchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type CatalogsUpdateOutput = typeof CatalogsUpdateOutput.Type;

// The operation
/**
 * Partially updates a catalog.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const CatalogsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CatalogsUpdateInput,
  outputSchema: CatalogsUpdateOutput,
}));
// Input Schema
export const CheckNameAvailabilityExecuteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DevCenter/checkNameAvailability",
      apiVersion: "2025-02-01",
    }),
  );
export type CheckNameAvailabilityExecuteInput =
  typeof CheckNameAvailabilityExecuteInput.Type;

// Output Schema
export const CheckNameAvailabilityExecuteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  });
export type CheckNameAvailabilityExecuteOutput =
  typeof CheckNameAvailabilityExecuteOutput.Type;

// The operation
/**
 * Check the availability of name for resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param name - The name of the resource for which availability needs to be checked.
 * @param type - The resource type.
 */
export const CheckNameAvailabilityExecute =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CheckNameAvailabilityExecuteInput,
    outputSchema: CheckNameAvailabilityExecuteOutput,
  }));
// Input Schema
export const CheckScopedNameAvailabilityExecuteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DevCenter/checkScopedNameAvailability",
      apiVersion: "2025-02-01",
    }),
  );
export type CheckScopedNameAvailabilityExecuteInput =
  typeof CheckScopedNameAvailabilityExecuteInput.Type;

// Output Schema
export const CheckScopedNameAvailabilityExecuteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  });
export type CheckScopedNameAvailabilityExecuteOutput =
  typeof CheckScopedNameAvailabilityExecuteOutput.Type;

// The operation
/**
 * Check the availability of name for resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const CheckScopedNameAvailabilityExecute =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CheckScopedNameAvailabilityExecuteInput,
    outputSchema: CheckScopedNameAvailabilityExecuteOutput,
  }));
// Input Schema
export const CustomizationTasksGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs/{catalogName}/tasks/{taskName}",
      apiVersion: "2025-02-01",
    }),
  );
export type CustomizationTasksGetInput = typeof CustomizationTasksGetInput.Type;

// Output Schema
export const CustomizationTasksGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => CustomizationTaskPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type CustomizationTasksGetOutput =
  typeof CustomizationTasksGetOutput.Type;

// The operation
/**
 * Gets a Task from the catalog
 */
export const CustomizationTasksGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomizationTasksGetInput,
    outputSchema: CustomizationTasksGetOutput,
  }),
);
// Input Schema
export const CustomizationTasksGetErrorDetailsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs/{catalogName}/tasks/{taskName}/getErrorDetails",
      apiVersion: "2025-02-01",
    }),
  );
export type CustomizationTasksGetErrorDetailsInput =
  typeof CustomizationTasksGetErrorDetailsInput.Type;

// Output Schema
export const CustomizationTasksGetErrorDetailsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(
      Schema.Array(Schema.suspend(() => CatalogErrorDetailsSchema)),
    ),
  });
export type CustomizationTasksGetErrorDetailsOutput =
  typeof CustomizationTasksGetErrorDetailsOutput.Type;

// The operation
/**
 * Gets Customization Task error details
 */
export const CustomizationTasksGetErrorDetails =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomizationTasksGetErrorDetailsInput,
    outputSchema: CustomizationTasksGetErrorDetailsOutput,
  }));
// Input Schema
export const CustomizationTasksListByCatalogInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs/{catalogName}/tasks",
      apiVersion: "2025-02-01",
    }),
  );
export type CustomizationTasksListByCatalogInput =
  typeof CustomizationTasksListByCatalogInput.Type;

// Output Schema
export const CustomizationTasksListByCatalogOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => CustomizationTaskSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type CustomizationTasksListByCatalogOutput =
  typeof CustomizationTasksListByCatalogOutput.Type;

// The operation
/**
 * List Tasks in the catalog.
 */
export const CustomizationTasksListByCatalog =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomizationTasksListByCatalogInput,
    outputSchema: CustomizationTasksListByCatalogOutput,
  }));
// Input Schema
export const DevBoxDefinitionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => DevBoxDefinitionPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/devboxdefinitions/{devBoxDefinitionName}",
      apiVersion: "2025-02-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type DevBoxDefinitionsCreateOrUpdateInput =
  typeof DevBoxDefinitionsCreateOrUpdateInput.Type;

// Output Schema
export const DevBoxDefinitionsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => DevBoxDefinitionPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type DevBoxDefinitionsCreateOrUpdateOutput =
  typeof DevBoxDefinitionsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a Dev Box definition.
 */
export const DevBoxDefinitionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DevBoxDefinitionsCreateOrUpdateInput,
    outputSchema: DevBoxDefinitionsCreateOrUpdateOutput,
  }));
// Input Schema
export const DevBoxDefinitionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/devboxdefinitions/{devBoxDefinitionName}",
      apiVersion: "2025-02-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type DevBoxDefinitionsDeleteInput =
  typeof DevBoxDefinitionsDeleteInput.Type;

// Output Schema
export const DevBoxDefinitionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DevBoxDefinitionsDeleteOutput =
  typeof DevBoxDefinitionsDeleteOutput.Type;

// The operation
/**
 * Deletes a Dev Box definition
 */
export const DevBoxDefinitionsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DevBoxDefinitionsDeleteInput,
    outputSchema: DevBoxDefinitionsDeleteOutput,
  }),
);
// Input Schema
export const DevBoxDefinitionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/devboxdefinitions/{devBoxDefinitionName}",
      apiVersion: "2025-02-01",
    }),
  );
export type DevBoxDefinitionsGetInput = typeof DevBoxDefinitionsGetInput.Type;

// Output Schema
export const DevBoxDefinitionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => DevBoxDefinitionPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type DevBoxDefinitionsGetOutput = typeof DevBoxDefinitionsGetOutput.Type;

// The operation
/**
 * Gets a Dev Box definition
 */
export const DevBoxDefinitionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DevBoxDefinitionsGetInput,
    outputSchema: DevBoxDefinitionsGetOutput,
  }),
);
// Input Schema
export const DevBoxDefinitionsGetByProjectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/devboxdefinitions/{devBoxDefinitionName}",
      apiVersion: "2025-02-01",
    }),
  );
export type DevBoxDefinitionsGetByProjectInput =
  typeof DevBoxDefinitionsGetByProjectInput.Type;

// Output Schema
export const DevBoxDefinitionsGetByProjectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => DevBoxDefinitionPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type DevBoxDefinitionsGetByProjectOutput =
  typeof DevBoxDefinitionsGetByProjectOutput.Type;

// The operation
/**
 * Gets a Dev Box definition configured for a project
 */
export const DevBoxDefinitionsGetByProject =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DevBoxDefinitionsGetByProjectInput,
    outputSchema: DevBoxDefinitionsGetByProjectOutput,
  }));
// Input Schema
export const DevBoxDefinitionsListByDevCenterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/devboxdefinitions",
      apiVersion: "2025-02-01",
    }),
  );
export type DevBoxDefinitionsListByDevCenterInput =
  typeof DevBoxDefinitionsListByDevCenterInput.Type;

// Output Schema
export const DevBoxDefinitionsListByDevCenterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => DevBoxDefinitionSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type DevBoxDefinitionsListByDevCenterOutput =
  typeof DevBoxDefinitionsListByDevCenterOutput.Type;

// The operation
/**
 * List Dev Box definitions for a devcenter.
 */
export const DevBoxDefinitionsListByDevCenter =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DevBoxDefinitionsListByDevCenterInput,
    outputSchema: DevBoxDefinitionsListByDevCenterOutput,
  }));
// Input Schema
export const DevBoxDefinitionsListByProjectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/devboxdefinitions",
      apiVersion: "2025-02-01",
    }),
  );
export type DevBoxDefinitionsListByProjectInput =
  typeof DevBoxDefinitionsListByProjectInput.Type;

// Output Schema
export const DevBoxDefinitionsListByProjectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => DevBoxDefinitionSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type DevBoxDefinitionsListByProjectOutput =
  typeof DevBoxDefinitionsListByProjectOutput.Type;

// The operation
/**
 * List Dev Box definitions configured for a project.
 */
export const DevBoxDefinitionsListByProject =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DevBoxDefinitionsListByProjectInput,
    outputSchema: DevBoxDefinitionsListByProjectOutput,
  }));
// Input Schema
export const DevBoxDefinitionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => DevBoxDefinitionUpdatePropertiesSchema),
    ),
    tags: Schema.optional(Schema.suspend(() => TagsSchema)),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/devboxdefinitions/{devBoxDefinitionName}",
      apiVersion: "2025-02-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type DevBoxDefinitionsUpdateInput =
  typeof DevBoxDefinitionsUpdateInput.Type;

// Output Schema
export const DevBoxDefinitionsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => DevBoxDefinitionPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type DevBoxDefinitionsUpdateOutput =
  typeof DevBoxDefinitionsUpdateOutput.Type;

// The operation
/**
 * Partially updates a Dev Box definition.
 */
export const DevBoxDefinitionsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DevBoxDefinitionsUpdateInput,
    outputSchema: DevBoxDefinitionsUpdateOutput,
  }),
);
// Input Schema
export const DevCentersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => DevCenterPropertiesSchema),
    ),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}",
      apiVersion: "2025-02-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type DevCentersCreateOrUpdateInput =
  typeof DevCentersCreateOrUpdateInput.Type;

// Output Schema
export const DevCentersCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => DevCenterPropertiesSchema),
    ),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type DevCentersCreateOrUpdateOutput =
  typeof DevCentersCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a devcenter resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const DevCentersCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DevCentersCreateOrUpdateInput,
    outputSchema: DevCentersCreateOrUpdateOutput,
  }),
);
// Input Schema
export const DevCentersDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}",
    apiVersion: "2025-02-01",
    longRunning: { finalStateVia: "azure-async-operation" },
  }),
);
export type DevCentersDeleteInput = typeof DevCentersDeleteInput.Type;

// Output Schema
export const DevCentersDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DevCentersDeleteOutput = typeof DevCentersDeleteOutput.Type;

// The operation
/**
 * Deletes a devcenter
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const DevCentersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DevCentersDeleteInput,
  outputSchema: DevCentersDeleteOutput,
}));
// Input Schema
export const DevCentersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}",
    apiVersion: "2025-02-01",
  }),
);
export type DevCentersGetInput = typeof DevCentersGetInput.Type;

// Output Schema
export const DevCentersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => DevCenterPropertiesSchema)),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type DevCentersGetOutput = typeof DevCentersGetOutput.Type;

// The operation
/**
 * Gets a devcenter.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const DevCentersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DevCentersGetInput,
  outputSchema: DevCentersGetOutput,
}));
// Input Schema
export const DevCentersListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters",
      apiVersion: "2025-02-01",
    }),
  );
export type DevCentersListByResourceGroupInput =
  typeof DevCentersListByResourceGroupInput.Type;

// Output Schema
export const DevCentersListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(Schema.suspend(() => DevCenterSchema))),
    nextLink: Schema.optional(Schema.String),
  });
export type DevCentersListByResourceGroupOutput =
  typeof DevCentersListByResourceGroupOutput.Type;

// The operation
/**
 * Lists all devcenters in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const DevCentersListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DevCentersListByResourceGroupInput,
    outputSchema: DevCentersListByResourceGroupOutput,
  }));
// Input Schema
export const DevCentersListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DevCenter/devcenters",
      apiVersion: "2025-02-01",
    }),
  );
export type DevCentersListBySubscriptionInput =
  typeof DevCentersListBySubscriptionInput.Type;

// Output Schema
export const DevCentersListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(Schema.suspend(() => DevCenterSchema))),
    nextLink: Schema.optional(Schema.String),
  });
export type DevCentersListBySubscriptionOutput =
  typeof DevCentersListBySubscriptionOutput.Type;

// The operation
/**
 * Lists all devcenters in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const DevCentersListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DevCentersListBySubscriptionInput,
    outputSchema: DevCentersListBySubscriptionOutput,
  }));
// Input Schema
export const DevCentersUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
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
  properties: Schema.optional(
    Schema.suspend(() => DevCenterUpdatePropertiesSchema),
  ),
  tags: Schema.optional(Schema.suspend(() => TagsSchema)),
  location: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}",
    apiVersion: "2025-02-01",
    longRunning: { finalStateVia: "azure-async-operation" },
  }),
);
export type DevCentersUpdateInput = typeof DevCentersUpdateInput.Type;

// Output Schema
export const DevCentersUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.optional(
      Schema.suspend(() => DevCenterPropertiesSchema),
    ),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
export type DevCentersUpdateOutput = typeof DevCentersUpdateOutput.Type;

// The operation
/**
 * Partially updates a devcenter.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const DevCentersUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DevCentersUpdateInput,
  outputSchema: DevCentersUpdateOutput,
}));
// Input Schema
export const EnvironmentDefinitionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs/{catalogName}/environmentDefinitions/{environmentDefinitionName}",
      apiVersion: "2025-02-01",
    }),
  );
export type EnvironmentDefinitionsGetInput =
  typeof EnvironmentDefinitionsGetInput.Type;

// Output Schema
export const EnvironmentDefinitionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => EnvironmentDefinitionPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type EnvironmentDefinitionsGetOutput =
  typeof EnvironmentDefinitionsGetOutput.Type;

// The operation
/**
 * Gets an environment definition from the catalog.
 */
export const EnvironmentDefinitionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EnvironmentDefinitionsGetInput,
    outputSchema: EnvironmentDefinitionsGetOutput,
  }),
);
// Input Schema
export const EnvironmentDefinitionsGetByProjectCatalogInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}/environmentDefinitions/{environmentDefinitionName}",
      apiVersion: "2025-02-01",
    }),
  );
export type EnvironmentDefinitionsGetByProjectCatalogInput =
  typeof EnvironmentDefinitionsGetByProjectCatalogInput.Type;

// Output Schema
export const EnvironmentDefinitionsGetByProjectCatalogOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => EnvironmentDefinitionPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type EnvironmentDefinitionsGetByProjectCatalogOutput =
  typeof EnvironmentDefinitionsGetByProjectCatalogOutput.Type;

// The operation
/**
 * Gets an environment definition from the catalog.
 */
export const EnvironmentDefinitionsGetByProjectCatalog =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EnvironmentDefinitionsGetByProjectCatalogInput,
    outputSchema: EnvironmentDefinitionsGetByProjectCatalogOutput,
  }));
// Input Schema
export const EnvironmentDefinitionsGetErrorDetailsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs/{catalogName}/environmentDefinitions/{environmentDefinitionName}/getErrorDetails",
      apiVersion: "2025-02-01",
    }),
  );
export type EnvironmentDefinitionsGetErrorDetailsInput =
  typeof EnvironmentDefinitionsGetErrorDetailsInput.Type;

// Output Schema
export const EnvironmentDefinitionsGetErrorDetailsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(
      Schema.Array(Schema.suspend(() => CatalogErrorDetailsSchema)),
    ),
  });
export type EnvironmentDefinitionsGetErrorDetailsOutput =
  typeof EnvironmentDefinitionsGetErrorDetailsOutput.Type;

// The operation
/**
 * Gets Environment Definition error details
 */
export const EnvironmentDefinitionsGetErrorDetails =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EnvironmentDefinitionsGetErrorDetailsInput,
    outputSchema: EnvironmentDefinitionsGetErrorDetailsOutput,
  }));
// Input Schema
export const EnvironmentDefinitionsListByCatalogInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs/{catalogName}/environmentDefinitions",
      apiVersion: "2025-02-01",
    }),
  );
export type EnvironmentDefinitionsListByCatalogInput =
  typeof EnvironmentDefinitionsListByCatalogInput.Type;

// Output Schema
export const EnvironmentDefinitionsListByCatalogOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => EnvironmentDefinitionSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type EnvironmentDefinitionsListByCatalogOutput =
  typeof EnvironmentDefinitionsListByCatalogOutput.Type;

// The operation
/**
 * List environment definitions in the catalog.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const EnvironmentDefinitionsListByCatalog =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EnvironmentDefinitionsListByCatalogInput,
    outputSchema: EnvironmentDefinitionsListByCatalogOutput,
  }));
// Input Schema
export const EnvironmentDefinitionsListByProjectCatalogInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}/environmentDefinitions",
      apiVersion: "2025-02-01",
    }),
  );
export type EnvironmentDefinitionsListByProjectCatalogInput =
  typeof EnvironmentDefinitionsListByProjectCatalogInput.Type;

// Output Schema
export const EnvironmentDefinitionsListByProjectCatalogOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => EnvironmentDefinitionSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type EnvironmentDefinitionsListByProjectCatalogOutput =
  typeof EnvironmentDefinitionsListByProjectCatalogOutput.Type;

// The operation
/**
 * Lists the environment definitions in this project catalog.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const EnvironmentDefinitionsListByProjectCatalog =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EnvironmentDefinitionsListByProjectCatalogInput,
    outputSchema: EnvironmentDefinitionsListByProjectCatalogOutput,
  }));
// Input Schema
export const EnvironmentTypesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => EnvironmentTypePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/environmentTypes/{environmentTypeName}",
      apiVersion: "2025-02-01",
    }),
  );
export type EnvironmentTypesCreateOrUpdateInput =
  typeof EnvironmentTypesCreateOrUpdateInput.Type;

// Output Schema
export const EnvironmentTypesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => EnvironmentTypePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type EnvironmentTypesCreateOrUpdateOutput =
  typeof EnvironmentTypesCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates an environment type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const EnvironmentTypesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EnvironmentTypesCreateOrUpdateInput,
    outputSchema: EnvironmentTypesCreateOrUpdateOutput,
  }));
// Input Schema
export const EnvironmentTypesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/environmentTypes/{environmentTypeName}",
      apiVersion: "2025-02-01",
    }),
  );
export type EnvironmentTypesDeleteInput =
  typeof EnvironmentTypesDeleteInput.Type;

// Output Schema
export const EnvironmentTypesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type EnvironmentTypesDeleteOutput =
  typeof EnvironmentTypesDeleteOutput.Type;

// The operation
/**
 * Deletes an environment type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const EnvironmentTypesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EnvironmentTypesDeleteInput,
    outputSchema: EnvironmentTypesDeleteOutput,
  }),
);
// Input Schema
export const EnvironmentTypesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/environmentTypes/{environmentTypeName}",
      apiVersion: "2025-02-01",
    }),
  );
export type EnvironmentTypesGetInput = typeof EnvironmentTypesGetInput.Type;

// Output Schema
export const EnvironmentTypesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => EnvironmentTypePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type EnvironmentTypesGetOutput = typeof EnvironmentTypesGetOutput.Type;

// The operation
/**
 * Gets an environment type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const EnvironmentTypesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EnvironmentTypesGetInput,
  outputSchema: EnvironmentTypesGetOutput,
}));
// Input Schema
export const EnvironmentTypesListByDevCenterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/environmentTypes",
      apiVersion: "2025-02-01",
    }),
  );
export type EnvironmentTypesListByDevCenterInput =
  typeof EnvironmentTypesListByDevCenterInput.Type;

// Output Schema
export const EnvironmentTypesListByDevCenterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => EnvironmentTypeSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type EnvironmentTypesListByDevCenterOutput =
  typeof EnvironmentTypesListByDevCenterOutput.Type;

// The operation
/**
 * Lists environment types for the devcenter.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const EnvironmentTypesListByDevCenter =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EnvironmentTypesListByDevCenterInput,
    outputSchema: EnvironmentTypesListByDevCenterOutput,
  }));
// Input Schema
export const EnvironmentTypesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => EnvironmentTypeUpdatePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/environmentTypes/{environmentTypeName}",
      apiVersion: "2025-02-01",
    }),
  );
export type EnvironmentTypesUpdateInput =
  typeof EnvironmentTypesUpdateInput.Type;

// Output Schema
export const EnvironmentTypesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => EnvironmentTypePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type EnvironmentTypesUpdateOutput =
  typeof EnvironmentTypesUpdateOutput.Type;

// The operation
/**
 * Partially updates an environment type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const EnvironmentTypesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EnvironmentTypesUpdateInput,
    outputSchema: EnvironmentTypesUpdateOutput,
  }),
);
// Input Schema
export const GalleriesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(Schema.suspend(() => GalleryPropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/galleries/{galleryName}",
      apiVersion: "2025-02-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type GalleriesCreateOrUpdateInput =
  typeof GalleriesCreateOrUpdateInput.Type;

// Output Schema
export const GalleriesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => GalleryPropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type GalleriesCreateOrUpdateOutput =
  typeof GalleriesCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a gallery.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const GalleriesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GalleriesCreateOrUpdateInput,
    outputSchema: GalleriesCreateOrUpdateOutput,
  }),
);
// Input Schema
export const GalleriesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/galleries/{galleryName}",
    apiVersion: "2025-02-01",
    longRunning: { finalStateVia: "azure-async-operation" },
  }),
);
export type GalleriesDeleteInput = typeof GalleriesDeleteInput.Type;

// Output Schema
export const GalleriesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type GalleriesDeleteOutput = typeof GalleriesDeleteOutput.Type;

// The operation
/**
 * Deletes a gallery resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const GalleriesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GalleriesDeleteInput,
  outputSchema: GalleriesDeleteOutput,
}));
// Input Schema
export const GalleriesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/galleries/{galleryName}",
    apiVersion: "2025-02-01",
  }),
);
export type GalleriesGetInput = typeof GalleriesGetInput.Type;

// Output Schema
export const GalleriesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => GalleryPropertiesSchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type GalleriesGetOutput = typeof GalleriesGetOutput.Type;

// The operation
/**
 * Gets a gallery
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const GalleriesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GalleriesGetInput,
  outputSchema: GalleriesGetOutput,
}));
// Input Schema
export const GalleriesListByDevCenterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/galleries",
      apiVersion: "2025-02-01",
    }),
  );
export type GalleriesListByDevCenterInput =
  typeof GalleriesListByDevCenterInput.Type;

// Output Schema
export const GalleriesListByDevCenterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(Schema.suspend(() => GallerySchema))),
    nextLink: Schema.optional(Schema.String),
  });
export type GalleriesListByDevCenterOutput =
  typeof GalleriesListByDevCenterOutput.Type;

// The operation
/**
 * Lists galleries for a devcenter.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const GalleriesListByDevCenter = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GalleriesListByDevCenterInput,
    outputSchema: GalleriesListByDevCenterOutput,
  }),
);
// Input Schema
export const ImagesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/galleries/{galleryName}/images/{imageName}",
    apiVersion: "2025-02-01",
  }),
);
export type ImagesGetInput = typeof ImagesGetInput.Type;

// Output Schema
export const ImagesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => ImagePropertiesSchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type ImagesGetOutput = typeof ImagesGetOutput.Type;

// The operation
/**
 * Gets a gallery image.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ImagesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ImagesGetInput,
  outputSchema: ImagesGetOutput,
}));
// Input Schema
export const ImagesGetByProjectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/images/{imageName}",
      apiVersion: "2025-02-01",
    }),
  );
export type ImagesGetByProjectInput = typeof ImagesGetByProjectInput.Type;

// Output Schema
export const ImagesGetByProjectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => ImagePropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ImagesGetByProjectOutput = typeof ImagesGetByProjectOutput.Type;

// The operation
/**
 * Gets an image.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 */
export const ImagesGetByProject = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ImagesGetByProjectInput,
  outputSchema: ImagesGetByProjectOutput,
}));
// Input Schema
export const ImagesListByDevCenterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/images",
      apiVersion: "2025-02-01",
    }),
  );
export type ImagesListByDevCenterInput = typeof ImagesListByDevCenterInput.Type;

// Output Schema
export const ImagesListByDevCenterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(Schema.suspend(() => ImageSchema))),
    nextLink: Schema.optional(Schema.String),
  });
export type ImagesListByDevCenterOutput =
  typeof ImagesListByDevCenterOutput.Type;

// The operation
/**
 * Lists images for a devcenter.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const ImagesListByDevCenter = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ImagesListByDevCenterInput,
    outputSchema: ImagesListByDevCenterOutput,
  }),
);
// Input Schema
export const ImagesListByGalleryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/galleries/{galleryName}/images",
      apiVersion: "2025-02-01",
    }),
  );
export type ImagesListByGalleryInput = typeof ImagesListByGalleryInput.Type;

// Output Schema
export const ImagesListByGalleryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(Schema.suspend(() => ImageSchema))),
    nextLink: Schema.optional(Schema.String),
  });
export type ImagesListByGalleryOutput = typeof ImagesListByGalleryOutput.Type;

// The operation
/**
 * Lists images for a gallery.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const ImagesListByGallery = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ImagesListByGalleryInput,
  outputSchema: ImagesListByGalleryOutput,
}));
// Input Schema
export const ImagesListByProjectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/images",
      apiVersion: "2025-02-01",
    }),
  );
export type ImagesListByProjectInput = typeof ImagesListByProjectInput.Type;

// Output Schema
export const ImagesListByProjectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(Schema.suspend(() => ImageSchema))),
    nextLink: Schema.optional(Schema.String),
  });
export type ImagesListByProjectOutput = typeof ImagesListByProjectOutput.Type;

// The operation
/**
 * Lists images for a project.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 */
export const ImagesListByProject = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ImagesListByProjectInput,
  outputSchema: ImagesListByProjectOutput,
}));
// Input Schema
export const ImageVersionsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/galleries/{galleryName}/images/{imageName}/versions/{versionName}",
    apiVersion: "2025-02-01",
  }),
);
export type ImageVersionsGetInput = typeof ImageVersionsGetInput.Type;

// Output Schema
export const ImageVersionsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.optional(
      Schema.suspend(() => ImageVersionPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
export type ImageVersionsGetOutput = typeof ImageVersionsGetOutput.Type;

// The operation
/**
 * Gets an image version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ImageVersionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ImageVersionsGetInput,
  outputSchema: ImageVersionsGetOutput,
}));
// Input Schema
export const ImageVersionsGetByProjectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/images/{imageName}/versions/{versionName}",
      apiVersion: "2025-02-01",
    }),
  );
export type ImageVersionsGetByProjectInput =
  typeof ImageVersionsGetByProjectInput.Type;

// Output Schema
export const ImageVersionsGetByProjectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ImageVersionPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ImageVersionsGetByProjectOutput =
  typeof ImageVersionsGetByProjectOutput.Type;

// The operation
/**
 * Gets an image version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 */
export const ImageVersionsGetByProject = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ImageVersionsGetByProjectInput,
    outputSchema: ImageVersionsGetByProjectOutput,
  }),
);
// Input Schema
export const ImageVersionsListByImageInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/galleries/{galleryName}/images/{imageName}/versions",
      apiVersion: "2025-02-01",
    }),
  );
export type ImageVersionsListByImageInput =
  typeof ImageVersionsListByImageInput.Type;

// Output Schema
export const ImageVersionsListByImageOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => ImageVersionSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ImageVersionsListByImageOutput =
  typeof ImageVersionsListByImageOutput.Type;

// The operation
/**
 * Lists versions for an image.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ImageVersionsListByImage = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ImageVersionsListByImageInput,
    outputSchema: ImageVersionsListByImageOutput,
  }),
);
// Input Schema
export const ImageVersionsListByProjectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/images/{imageName}/versions",
      apiVersion: "2025-02-01",
    }),
  );
export type ImageVersionsListByProjectInput =
  typeof ImageVersionsListByProjectInput.Type;

// Output Schema
export const ImageVersionsListByProjectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => ImageVersionSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ImageVersionsListByProjectOutput =
  typeof ImageVersionsListByProjectOutput.Type;

// The operation
/**
 * Lists versions for an image.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 */
export const ImageVersionsListByProject = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ImageVersionsListByProjectInput,
    outputSchema: ImageVersionsListByProjectOutput,
  }),
);
// Input Schema
export const NetworkConnectionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => NetworkPropertiesSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/networkConnections/{networkConnectionName}",
      apiVersion: "2025-02-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type NetworkConnectionsCreateOrUpdateInput =
  typeof NetworkConnectionsCreateOrUpdateInput.Type;

// Output Schema
export const NetworkConnectionsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => NetworkPropertiesSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type NetworkConnectionsCreateOrUpdateOutput =
  typeof NetworkConnectionsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a Network Connections resource
 */
export const NetworkConnectionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkConnectionsCreateOrUpdateInput,
    outputSchema: NetworkConnectionsCreateOrUpdateOutput,
  }));
// Input Schema
export const NetworkConnectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/networkConnections/{networkConnectionName}",
      apiVersion: "2025-02-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type NetworkConnectionsDeleteInput =
  typeof NetworkConnectionsDeleteInput.Type;

// Output Schema
export const NetworkConnectionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NetworkConnectionsDeleteOutput =
  typeof NetworkConnectionsDeleteOutput.Type;

// The operation
/**
 * Deletes a Network Connections resource
 */
export const NetworkConnectionsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkConnectionsDeleteInput,
    outputSchema: NetworkConnectionsDeleteOutput,
  }),
);
// Input Schema
export const NetworkConnectionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/networkConnections/{networkConnectionName}",
      apiVersion: "2025-02-01",
    }),
  );
export type NetworkConnectionsGetInput = typeof NetworkConnectionsGetInput.Type;

// Output Schema
export const NetworkConnectionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => NetworkPropertiesSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type NetworkConnectionsGetOutput =
  typeof NetworkConnectionsGetOutput.Type;

// The operation
/**
 * Gets a network connection resource
 */
export const NetworkConnectionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkConnectionsGetInput,
    outputSchema: NetworkConnectionsGetOutput,
  }),
);
// Input Schema
export const NetworkConnectionsGetHealthDetailsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/networkConnections/{networkConnectionName}/healthChecks/latest",
      apiVersion: "2025-02-01",
    }),
  );
export type NetworkConnectionsGetHealthDetailsInput =
  typeof NetworkConnectionsGetHealthDetailsInput.Type;

// Output Schema
export const NetworkConnectionsGetHealthDetailsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => HealthCheckStatusDetailsPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type NetworkConnectionsGetHealthDetailsOutput =
  typeof NetworkConnectionsGetHealthDetailsOutput.Type;

// The operation
/**
 * Gets health check status details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const NetworkConnectionsGetHealthDetails =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkConnectionsGetHealthDetailsInput,
    outputSchema: NetworkConnectionsGetHealthDetailsOutput,
  }));
// Input Schema
export const NetworkConnectionsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/networkConnections",
      apiVersion: "2025-02-01",
    }),
  );
export type NetworkConnectionsListByResourceGroupInput =
  typeof NetworkConnectionsListByResourceGroupInput.Type;

// Output Schema
export const NetworkConnectionsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => NetworkConnectionSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type NetworkConnectionsListByResourceGroupOutput =
  typeof NetworkConnectionsListByResourceGroupOutput.Type;

// The operation
/**
 * Lists network connections in a resource group
 */
export const NetworkConnectionsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkConnectionsListByResourceGroupInput,
    outputSchema: NetworkConnectionsListByResourceGroupOutput,
  }));
// Input Schema
export const NetworkConnectionsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DevCenter/networkConnections",
      apiVersion: "2025-02-01",
    }),
  );
export type NetworkConnectionsListBySubscriptionInput =
  typeof NetworkConnectionsListBySubscriptionInput.Type;

// Output Schema
export const NetworkConnectionsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => NetworkConnectionSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type NetworkConnectionsListBySubscriptionOutput =
  typeof NetworkConnectionsListBySubscriptionOutput.Type;

// The operation
/**
 * Lists network connections in a subscription
 */
export const NetworkConnectionsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkConnectionsListBySubscriptionInput,
    outputSchema: NetworkConnectionsListBySubscriptionOutput,
  }));
// Input Schema
export const NetworkConnectionsListHealthDetailsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/networkConnections/{networkConnectionName}/healthChecks",
      apiVersion: "2025-02-01",
    }),
  );
export type NetworkConnectionsListHealthDetailsInput =
  typeof NetworkConnectionsListHealthDetailsInput.Type;

// Output Schema
export const NetworkConnectionsListHealthDetailsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => HealthCheckStatusDetailsSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type NetworkConnectionsListHealthDetailsOutput =
  typeof NetworkConnectionsListHealthDetailsOutput.Type;

// The operation
/**
 * Lists health check status details
 */
export const NetworkConnectionsListHealthDetails =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkConnectionsListHealthDetailsInput,
    outputSchema: NetworkConnectionsListHealthDetailsOutput,
  }));
// Input Schema
export const NetworkConnectionsListOutboundNetworkDependenciesEndpointsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/networkConnections/{networkConnectionName}/outboundNetworkDependenciesEndpoints",
      apiVersion: "2025-02-01",
    }),
  );
export type NetworkConnectionsListOutboundNetworkDependenciesEndpointsInput =
  typeof NetworkConnectionsListOutboundNetworkDependenciesEndpointsInput.Type;

// Output Schema
export const NetworkConnectionsListOutboundNetworkDependenciesEndpointsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => OutboundEnvironmentEndpointSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type NetworkConnectionsListOutboundNetworkDependenciesEndpointsOutput =
  typeof NetworkConnectionsListOutboundNetworkDependenciesEndpointsOutput.Type;

// The operation
/**
 * Lists the endpoints that agents may call as part of Dev Box service administration. These FQDNs should be allowed for outbound access in order for the Dev Box service to function.
 */
export const NetworkConnectionsListOutboundNetworkDependenciesEndpoints =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      NetworkConnectionsListOutboundNetworkDependenciesEndpointsInput,
    outputSchema:
      NetworkConnectionsListOutboundNetworkDependenciesEndpointsOutput,
  }));
// Input Schema
export const NetworkConnectionsRunHealthChecksInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/networkConnections/{networkConnectionName}/runHealthChecks",
      apiVersion: "2025-02-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type NetworkConnectionsRunHealthChecksInput =
  typeof NetworkConnectionsRunHealthChecksInput.Type;

// Output Schema
export const NetworkConnectionsRunHealthChecksOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NetworkConnectionsRunHealthChecksOutput =
  typeof NetworkConnectionsRunHealthChecksOutput.Type;

// The operation
/**
 * Triggers a new health check run. The execution and health check result can be tracked via the network Connection health check details
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const NetworkConnectionsRunHealthChecks =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkConnectionsRunHealthChecksInput,
    outputSchema: NetworkConnectionsRunHealthChecksOutput,
  }));
// Input Schema
export const NetworkConnectionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => NetworkConnectionUpdatePropertiesSchema),
    ),
    tags: Schema.optional(Schema.suspend(() => TagsSchema)),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/networkConnections/{networkConnectionName}",
      apiVersion: "2025-02-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type NetworkConnectionsUpdateInput =
  typeof NetworkConnectionsUpdateInput.Type;

// Output Schema
export const NetworkConnectionsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => NetworkPropertiesSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type NetworkConnectionsUpdateOutput =
  typeof NetworkConnectionsUpdateOutput.Type;

// The operation
/**
 * Partially updates a Network Connection
 */
export const NetworkConnectionsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkConnectionsUpdateInput,
    outputSchema: NetworkConnectionsUpdateOutput,
  }),
);
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.DevCenter/operations",
    apiVersion: "2025-02-01",
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
 * Lists all of the available resource provider operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export const OperationStatusesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DevCenter/locations/{location}/operationStatuses/{operationId}",
      apiVersion: "2025-02-01",
    }),
  );
export type OperationStatusesGetInput = typeof OperationStatusesGetInput.Type;

// Output Schema
export const OperationStatusesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.Unknown),
    id: Schema.optional(Schema.String),
    resourceId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(Schema.suspend(() => OperationStatusResultSchema)),
    ),
    error: Schema.optional(Schema.suspend(() => ErrorDetailSchema)),
  });
export type OperationStatusesGetOutput = typeof OperationStatusesGetOutput.Type;

// The operation
/**
 * Get Operation Status
 *
 * Gets the current status of an async operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const OperationStatusesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: OperationStatusesGetInput,
    outputSchema: OperationStatusesGetOutput,
  }),
);
// Input Schema
export const PoolsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => PoolPropertiesSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/pools/{poolName}",
      apiVersion: "2025-02-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type PoolsCreateOrUpdateInput = typeof PoolsCreateOrUpdateInput.Type;

// Output Schema
export const PoolsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => PoolPropertiesSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PoolsCreateOrUpdateOutput = typeof PoolsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a machine pool
 */
export const PoolsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PoolsCreateOrUpdateInput,
  outputSchema: PoolsCreateOrUpdateOutput,
}));
// Input Schema
export const PoolsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/pools/{poolName}",
    apiVersion: "2025-02-01",
    longRunning: { finalStateVia: "azure-async-operation" },
  }),
);
export type PoolsDeleteInput = typeof PoolsDeleteInput.Type;

// Output Schema
export const PoolsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PoolsDeleteOutput = typeof PoolsDeleteOutput.Type;

// The operation
/**
 * Deletes a machine pool
 */
export const PoolsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PoolsDeleteInput,
  outputSchema: PoolsDeleteOutput,
}));
// Input Schema
export const PoolsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/pools/{poolName}",
    apiVersion: "2025-02-01",
  }),
);
export type PoolsGetInput = typeof PoolsGetInput.Type;

// Output Schema
export const PoolsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => PoolPropertiesSchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type PoolsGetOutput = typeof PoolsGetOutput.Type;

// The operation
/**
 * Gets a machine pool
 */
export const PoolsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PoolsGetInput,
  outputSchema: PoolsGetOutput,
}));
// Input Schema
export const PoolsListByProjectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/pools",
      apiVersion: "2025-02-01",
    }),
  );
export type PoolsListByProjectInput = typeof PoolsListByProjectInput.Type;

// Output Schema
export const PoolsListByProjectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(Schema.suspend(() => PoolSchema))),
    nextLink: Schema.optional(Schema.String),
  });
export type PoolsListByProjectOutput = typeof PoolsListByProjectOutput.Type;

// The operation
/**
 * Lists pools for a project
 */
export const PoolsListByProject = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PoolsListByProjectInput,
  outputSchema: PoolsListByProjectOutput,
}));
// Input Schema
export const PoolsRunHealthChecksInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/pools/{poolName}/runHealthChecks",
      apiVersion: "2025-02-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type PoolsRunHealthChecksInput = typeof PoolsRunHealthChecksInput.Type;

// Output Schema
export const PoolsRunHealthChecksOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PoolsRunHealthChecksOutput = typeof PoolsRunHealthChecksOutput.Type;

// The operation
/**
 * Triggers a refresh of the pool status.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 */
export const PoolsRunHealthChecks = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PoolsRunHealthChecksInput,
    outputSchema: PoolsRunHealthChecksOutput,
  }),
);
// Input Schema
export const PoolsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => PoolUpdatePropertiesSchema)),
  tags: Schema.optional(Schema.suspend(() => TagsSchema)),
  location: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/pools/{poolName}",
    apiVersion: "2025-02-01",
    longRunning: { finalStateVia: "azure-async-operation" },
  }),
);
export type PoolsUpdateInput = typeof PoolsUpdateInput.Type;

// Output Schema
export const PoolsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => PoolPropertiesSchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type PoolsUpdateOutput = typeof PoolsUpdateOutput.Type;

// The operation
/**
 * Partially updates a machine pool
 */
export const PoolsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PoolsUpdateInput,
  outputSchema: PoolsUpdateOutput,
}));
// Input Schema
export const ProjectAllowedEnvironmentTypesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/allowedEnvironmentTypes/{environmentTypeName}",
      apiVersion: "2025-02-01",
    }),
  );
export type ProjectAllowedEnvironmentTypesGetInput =
  typeof ProjectAllowedEnvironmentTypesGetInput.Type;

// Output Schema
export const ProjectAllowedEnvironmentTypesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AllowedEnvironmentTypePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ProjectAllowedEnvironmentTypesGetOutput =
  typeof ProjectAllowedEnvironmentTypesGetOutput.Type;

// The operation
/**
 * Gets an allowed environment type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ProjectAllowedEnvironmentTypesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProjectAllowedEnvironmentTypesGetInput,
    outputSchema: ProjectAllowedEnvironmentTypesGetOutput,
  }));
// Input Schema
export const ProjectAllowedEnvironmentTypesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/allowedEnvironmentTypes",
      apiVersion: "2025-02-01",
    }),
  );
export type ProjectAllowedEnvironmentTypesListInput =
  typeof ProjectAllowedEnvironmentTypesListInput.Type;

// Output Schema
export const ProjectAllowedEnvironmentTypesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => AllowedEnvironmentTypeSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ProjectAllowedEnvironmentTypesListOutput =
  typeof ProjectAllowedEnvironmentTypesListOutput.Type;

// The operation
/**
 * Lists allowed environment types for a project.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const ProjectAllowedEnvironmentTypesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProjectAllowedEnvironmentTypesListInput,
    outputSchema: ProjectAllowedEnvironmentTypesListOutput,
  }));
// Input Schema
export const ProjectCatalogEnvironmentDefinitionsGetErrorDetailsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}/environmentDefinitions/{environmentDefinitionName}/getErrorDetails",
      apiVersion: "2025-02-01",
    }),
  );
export type ProjectCatalogEnvironmentDefinitionsGetErrorDetailsInput =
  typeof ProjectCatalogEnvironmentDefinitionsGetErrorDetailsInput.Type;

// Output Schema
export const ProjectCatalogEnvironmentDefinitionsGetErrorDetailsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(
      Schema.Array(Schema.suspend(() => CatalogErrorDetailsSchema)),
    ),
  });
export type ProjectCatalogEnvironmentDefinitionsGetErrorDetailsOutput =
  typeof ProjectCatalogEnvironmentDefinitionsGetErrorDetailsOutput.Type;

// The operation
/**
 * Gets Environment Definition error details
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ProjectCatalogEnvironmentDefinitionsGetErrorDetails =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProjectCatalogEnvironmentDefinitionsGetErrorDetailsInput,
    outputSchema: ProjectCatalogEnvironmentDefinitionsGetErrorDetailsOutput,
  }));
// Input Schema
export const ProjectCatalogImageDefinitionBuildCancelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}/imageDefinitions/{imageDefinitionName}/builds/{buildName}/cancel",
      apiVersion: "2025-02-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type ProjectCatalogImageDefinitionBuildCancelInput =
  typeof ProjectCatalogImageDefinitionBuildCancelInput.Type;

// Output Schema
export const ProjectCatalogImageDefinitionBuildCancelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ProjectCatalogImageDefinitionBuildCancelOutput =
  typeof ProjectCatalogImageDefinitionBuildCancelOutput.Type;

// The operation
/**
 * Cancels the specified build for an image definition.
 */
export const ProjectCatalogImageDefinitionBuildCancel =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProjectCatalogImageDefinitionBuildCancelInput,
    outputSchema: ProjectCatalogImageDefinitionBuildCancelOutput,
  }));
// Input Schema
export const ProjectCatalogImageDefinitionBuildGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}/imageDefinitions/{imageDefinitionName}/builds/{buildName}",
      apiVersion: "2025-02-01",
    }),
  );
export type ProjectCatalogImageDefinitionBuildGetInput =
  typeof ProjectCatalogImageDefinitionBuildGetInput.Type;

// Output Schema
export const ProjectCatalogImageDefinitionBuildGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ImageDefinitionBuildPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ProjectCatalogImageDefinitionBuildGetOutput =
  typeof ProjectCatalogImageDefinitionBuildGetOutput.Type;

// The operation
/**
 * Gets a build for a specified image definition.
 */
export const ProjectCatalogImageDefinitionBuildGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProjectCatalogImageDefinitionBuildGetInput,
    outputSchema: ProjectCatalogImageDefinitionBuildGetOutput,
  }));
// Input Schema
export const ProjectCatalogImageDefinitionBuildGetBuildDetailsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}/imageDefinitions/{imageDefinitionName}/builds/{buildName}/getBuildDetails",
      apiVersion: "2025-02-01",
    }),
  );
export type ProjectCatalogImageDefinitionBuildGetBuildDetailsInput =
  typeof ProjectCatalogImageDefinitionBuildGetBuildDetailsInput.Type;

// Output Schema
export const ProjectCatalogImageDefinitionBuildGetBuildDetailsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageReference: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        exactVersion: Schema.optional(Schema.String),
      }),
    ),
    status: Schema.optional(
      Schema.suspend(() => ImageDefinitionBuildStatusSchema),
    ),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    errorDetails: Schema.optional(
      Schema.suspend(() => ImageCreationErrorDetailsSchema),
    ),
    taskGroups: Schema.optional(
      Schema.Array(Schema.suspend(() => ImageDefinitionBuildTaskGroupSchema)),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ProjectCatalogImageDefinitionBuildGetBuildDetailsOutput =
  typeof ProjectCatalogImageDefinitionBuildGetBuildDetailsOutput.Type;

// The operation
/**
 * Gets Build details
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ProjectCatalogImageDefinitionBuildGetBuildDetails =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProjectCatalogImageDefinitionBuildGetBuildDetailsInput,
    outputSchema: ProjectCatalogImageDefinitionBuildGetBuildDetailsOutput,
  }));
// Input Schema
export const ProjectCatalogImageDefinitionBuildsListByImageDefinitionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}/imageDefinitions/{imageDefinitionName}/builds",
      apiVersion: "2025-02-01",
    }),
  );
export type ProjectCatalogImageDefinitionBuildsListByImageDefinitionInput =
  typeof ProjectCatalogImageDefinitionBuildsListByImageDefinitionInput.Type;

// Output Schema
export const ProjectCatalogImageDefinitionBuildsListByImageDefinitionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => ImageDefinitionBuildSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ProjectCatalogImageDefinitionBuildsListByImageDefinitionOutput =
  typeof ProjectCatalogImageDefinitionBuildsListByImageDefinitionOutput.Type;

// The operation
/**
 * Lists builds for a specified image definition.
 */
export const ProjectCatalogImageDefinitionBuildsListByImageDefinition =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProjectCatalogImageDefinitionBuildsListByImageDefinitionInput,
    outputSchema:
      ProjectCatalogImageDefinitionBuildsListByImageDefinitionOutput,
  }));
// Input Schema
export const ProjectCatalogImageDefinitionsBuildImageInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}/imageDefinitions/{imageDefinitionName}/buildImage",
      apiVersion: "2025-02-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type ProjectCatalogImageDefinitionsBuildImageInput =
  typeof ProjectCatalogImageDefinitionsBuildImageInput.Type;

// Output Schema
export const ProjectCatalogImageDefinitionsBuildImageOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ProjectCatalogImageDefinitionsBuildImageOutput =
  typeof ProjectCatalogImageDefinitionsBuildImageOutput.Type;

// The operation
/**
 * Builds an image for the specified Image Definition.
 */
export const ProjectCatalogImageDefinitionsBuildImage =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProjectCatalogImageDefinitionsBuildImageInput,
    outputSchema: ProjectCatalogImageDefinitionsBuildImageOutput,
  }));
// Input Schema
export const ProjectCatalogImageDefinitionsGetByProjectCatalogInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}/imageDefinitions/{imageDefinitionName}",
      apiVersion: "2025-02-01",
    }),
  );
export type ProjectCatalogImageDefinitionsGetByProjectCatalogInput =
  typeof ProjectCatalogImageDefinitionsGetByProjectCatalogInput.Type;

// Output Schema
export const ProjectCatalogImageDefinitionsGetByProjectCatalogOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ImageDefinitionPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ProjectCatalogImageDefinitionsGetByProjectCatalogOutput =
  typeof ProjectCatalogImageDefinitionsGetByProjectCatalogOutput.Type;

// The operation
/**
 * Gets an Image Definition from the catalog
 */
export const ProjectCatalogImageDefinitionsGetByProjectCatalog =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProjectCatalogImageDefinitionsGetByProjectCatalogInput,
    outputSchema: ProjectCatalogImageDefinitionsGetByProjectCatalogOutput,
  }));
// Input Schema
export const ProjectCatalogImageDefinitionsGetErrorDetailsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}/imageDefinitions/{imageDefinitionName}/getErrorDetails",
      apiVersion: "2025-02-01",
    }),
  );
export type ProjectCatalogImageDefinitionsGetErrorDetailsInput =
  typeof ProjectCatalogImageDefinitionsGetErrorDetailsInput.Type;

// Output Schema
export const ProjectCatalogImageDefinitionsGetErrorDetailsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(
      Schema.Array(Schema.suspend(() => CatalogErrorDetailsSchema)),
    ),
  });
export type ProjectCatalogImageDefinitionsGetErrorDetailsOutput =
  typeof ProjectCatalogImageDefinitionsGetErrorDetailsOutput.Type;

// The operation
/**
 * Gets Image Definition error details
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ProjectCatalogImageDefinitionsGetErrorDetails =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProjectCatalogImageDefinitionsGetErrorDetailsInput,
    outputSchema: ProjectCatalogImageDefinitionsGetErrorDetailsOutput,
  }));
// Input Schema
export const ProjectCatalogImageDefinitionsListByProjectCatalogInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}/imageDefinitions",
      apiVersion: "2025-02-01",
    }),
  );
export type ProjectCatalogImageDefinitionsListByProjectCatalogInput =
  typeof ProjectCatalogImageDefinitionsListByProjectCatalogInput.Type;

// Output Schema
export const ProjectCatalogImageDefinitionsListByProjectCatalogOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => ImageDefinitionSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ProjectCatalogImageDefinitionsListByProjectCatalogOutput =
  typeof ProjectCatalogImageDefinitionsListByProjectCatalogOutput.Type;

// The operation
/**
 * List Image Definitions in the catalog.
 */
export const ProjectCatalogImageDefinitionsListByProjectCatalog =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProjectCatalogImageDefinitionsListByProjectCatalogInput,
    outputSchema: ProjectCatalogImageDefinitionsListByProjectCatalogOutput,
  }));
// Input Schema
export const ProjectCatalogsConnectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}/connect",
      apiVersion: "2025-02-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type ProjectCatalogsConnectInput =
  typeof ProjectCatalogsConnectInput.Type;

// Output Schema
export const ProjectCatalogsConnectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ProjectCatalogsConnectOutput =
  typeof ProjectCatalogsConnectOutput.Type;

// The operation
/**
 * Connects a project catalog to enable syncing.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ProjectCatalogsConnect = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProjectCatalogsConnectInput,
    outputSchema: ProjectCatalogsConnectOutput,
  }),
);
// Input Schema
export const ProjectCatalogsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(Schema.suspend(() => CatalogPropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}",
      apiVersion: "2025-02-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type ProjectCatalogsCreateOrUpdateInput =
  typeof ProjectCatalogsCreateOrUpdateInput.Type;

// Output Schema
export const ProjectCatalogsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => CatalogPropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ProjectCatalogsCreateOrUpdateOutput =
  typeof ProjectCatalogsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a project catalog.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ProjectCatalogsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProjectCatalogsCreateOrUpdateInput,
    outputSchema: ProjectCatalogsCreateOrUpdateOutput,
  }));
// Input Schema
export const ProjectCatalogsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}",
      apiVersion: "2025-02-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type ProjectCatalogsDeleteInput = typeof ProjectCatalogsDeleteInput.Type;

// Output Schema
export const ProjectCatalogsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ProjectCatalogsDeleteOutput =
  typeof ProjectCatalogsDeleteOutput.Type;

// The operation
/**
 * Deletes a project catalog resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ProjectCatalogsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProjectCatalogsDeleteInput,
    outputSchema: ProjectCatalogsDeleteOutput,
  }),
);
// Input Schema
export const ProjectCatalogsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}",
      apiVersion: "2025-02-01",
    }),
  );
export type ProjectCatalogsGetInput = typeof ProjectCatalogsGetInput.Type;

// Output Schema
export const ProjectCatalogsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => CatalogPropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ProjectCatalogsGetOutput = typeof ProjectCatalogsGetOutput.Type;

// The operation
/**
 * Gets an associated project catalog.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ProjectCatalogsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProjectCatalogsGetInput,
  outputSchema: ProjectCatalogsGetOutput,
}));
// Input Schema
export const ProjectCatalogsGetSyncErrorDetailsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}/getSyncErrorDetails",
      apiVersion: "2025-02-01",
    }),
  );
export type ProjectCatalogsGetSyncErrorDetailsInput =
  typeof ProjectCatalogsGetSyncErrorDetailsInput.Type;

// Output Schema
export const ProjectCatalogsGetSyncErrorDetailsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operationError: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
    conflicts: Schema.optional(
      Schema.Array(Schema.suspend(() => CatalogConflictErrorSchema)),
    ),
    errors: Schema.optional(
      Schema.Array(Schema.suspend(() => CatalogSyncErrorSchema)),
    ),
  });
export type ProjectCatalogsGetSyncErrorDetailsOutput =
  typeof ProjectCatalogsGetSyncErrorDetailsOutput.Type;

// The operation
/**
 * Gets project catalog synchronization error details
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ProjectCatalogsGetSyncErrorDetails =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProjectCatalogsGetSyncErrorDetailsInput,
    outputSchema: ProjectCatalogsGetSyncErrorDetailsOutput,
  }));
// Input Schema
export const ProjectCatalogsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs",
      apiVersion: "2025-02-01",
    }),
  );
export type ProjectCatalogsListInput = typeof ProjectCatalogsListInput.Type;

// Output Schema
export const ProjectCatalogsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(Schema.suspend(() => CatalogSchema))),
    nextLink: Schema.optional(Schema.String),
  });
export type ProjectCatalogsListOutput = typeof ProjectCatalogsListOutput.Type;

// The operation
/**
 * Lists the catalogs associated with a project.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const ProjectCatalogsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProjectCatalogsListInput,
  outputSchema: ProjectCatalogsListOutput,
}));
// Input Schema
export const ProjectCatalogsPatchInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => CatalogUpdatePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}",
      apiVersion: "2025-02-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type ProjectCatalogsPatchInput = typeof ProjectCatalogsPatchInput.Type;

// Output Schema
export const ProjectCatalogsPatchOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => CatalogPropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ProjectCatalogsPatchOutput = typeof ProjectCatalogsPatchOutput.Type;

// The operation
/**
 * Partially updates a project catalog.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ProjectCatalogsPatch = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProjectCatalogsPatchInput,
    outputSchema: ProjectCatalogsPatchOutput,
  }),
);
// Input Schema
export const ProjectCatalogsSyncInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}/sync",
      apiVersion: "2025-02-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type ProjectCatalogsSyncInput = typeof ProjectCatalogsSyncInput.Type;

// Output Schema
export const ProjectCatalogsSyncOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ProjectCatalogsSyncOutput = typeof ProjectCatalogsSyncOutput.Type;

// The operation
/**
 * Syncs templates for a template source.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ProjectCatalogsSync = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProjectCatalogsSyncInput,
  outputSchema: ProjectCatalogsSyncOutput,
}));
// Input Schema
export const ProjectEnvironmentTypesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => ProjectEnvironmentTypePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
    location: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/environmentTypes/{environmentTypeName}",
      apiVersion: "2025-02-01",
    }),
  );
export type ProjectEnvironmentTypesCreateOrUpdateInput =
  typeof ProjectEnvironmentTypesCreateOrUpdateInput.Type;

// Output Schema
export const ProjectEnvironmentTypesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ProjectEnvironmentTypePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
    location: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ProjectEnvironmentTypesCreateOrUpdateOutput =
  typeof ProjectEnvironmentTypesCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a project environment type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ProjectEnvironmentTypesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProjectEnvironmentTypesCreateOrUpdateInput,
    outputSchema: ProjectEnvironmentTypesCreateOrUpdateOutput,
  }));
// Input Schema
export const ProjectEnvironmentTypesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/environmentTypes/{environmentTypeName}",
      apiVersion: "2025-02-01",
    }),
  );
export type ProjectEnvironmentTypesDeleteInput =
  typeof ProjectEnvironmentTypesDeleteInput.Type;

// Output Schema
export const ProjectEnvironmentTypesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ProjectEnvironmentTypesDeleteOutput =
  typeof ProjectEnvironmentTypesDeleteOutput.Type;

// The operation
/**
 * Deletes a project environment type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ProjectEnvironmentTypesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProjectEnvironmentTypesDeleteInput,
    outputSchema: ProjectEnvironmentTypesDeleteOutput,
  }));
// Input Schema
export const ProjectEnvironmentTypesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/environmentTypes/{environmentTypeName}",
      apiVersion: "2025-02-01",
    }),
  );
export type ProjectEnvironmentTypesGetInput =
  typeof ProjectEnvironmentTypesGetInput.Type;

// Output Schema
export const ProjectEnvironmentTypesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ProjectEnvironmentTypePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
    location: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ProjectEnvironmentTypesGetOutput =
  typeof ProjectEnvironmentTypesGetOutput.Type;

// The operation
/**
 * Gets a project environment type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ProjectEnvironmentTypesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProjectEnvironmentTypesGetInput,
    outputSchema: ProjectEnvironmentTypesGetOutput,
  }),
);
// Input Schema
export const ProjectEnvironmentTypesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/environmentTypes",
      apiVersion: "2025-02-01",
    }),
  );
export type ProjectEnvironmentTypesListInput =
  typeof ProjectEnvironmentTypesListInput.Type;

// Output Schema
export const ProjectEnvironmentTypesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => ProjectEnvironmentTypeSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ProjectEnvironmentTypesListOutput =
  typeof ProjectEnvironmentTypesListOutput.Type;

// The operation
/**
 * Lists environment types for a project.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const ProjectEnvironmentTypesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProjectEnvironmentTypesListInput,
    outputSchema: ProjectEnvironmentTypesListOutput,
  }),
);
// Input Schema
export const ProjectEnvironmentTypesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => ProjectEnvironmentTypeUpdatePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/environmentTypes/{environmentTypeName}",
      apiVersion: "2025-02-01",
    }),
  );
export type ProjectEnvironmentTypesUpdateInput =
  typeof ProjectEnvironmentTypesUpdateInput.Type;

// Output Schema
export const ProjectEnvironmentTypesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ProjectEnvironmentTypePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
    location: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ProjectEnvironmentTypesUpdateOutput =
  typeof ProjectEnvironmentTypesUpdateOutput.Type;

// The operation
/**
 * Partially updates a project environment type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ProjectEnvironmentTypesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProjectEnvironmentTypesUpdateInput,
    outputSchema: ProjectEnvironmentTypesUpdateOutput,
  }));
// Input Schema
export const ProjectPoliciesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => ProjectPolicyPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/projectPolicies/{projectPolicyName}",
      apiVersion: "2025-02-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type ProjectPoliciesCreateOrUpdateInput =
  typeof ProjectPoliciesCreateOrUpdateInput.Type;

// Output Schema
export const ProjectPoliciesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ProjectPolicyPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ProjectPoliciesCreateOrUpdateOutput =
  typeof ProjectPoliciesCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates an project policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ProjectPoliciesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProjectPoliciesCreateOrUpdateInput,
    outputSchema: ProjectPoliciesCreateOrUpdateOutput,
  }));
// Input Schema
export const ProjectPoliciesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/projectPolicies/{projectPolicyName}",
      apiVersion: "2025-02-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type ProjectPoliciesDeleteInput = typeof ProjectPoliciesDeleteInput.Type;

// Output Schema
export const ProjectPoliciesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ProjectPoliciesDeleteOutput =
  typeof ProjectPoliciesDeleteOutput.Type;

// The operation
/**
 * Deletes an project policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ProjectPoliciesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProjectPoliciesDeleteInput,
    outputSchema: ProjectPoliciesDeleteOutput,
  }),
);
// Input Schema
export const ProjectPoliciesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/projectPolicies/{projectPolicyName}",
      apiVersion: "2025-02-01",
    }),
  );
export type ProjectPoliciesGetInput = typeof ProjectPoliciesGetInput.Type;

// Output Schema
export const ProjectPoliciesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ProjectPolicyPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ProjectPoliciesGetOutput = typeof ProjectPoliciesGetOutput.Type;

// The operation
/**
 * Gets a specific project policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ProjectPoliciesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProjectPoliciesGetInput,
  outputSchema: ProjectPoliciesGetOutput,
}));
// Input Schema
export const ProjectPoliciesListByDevCenterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/projectPolicies",
      apiVersion: "2025-02-01",
    }),
  );
export type ProjectPoliciesListByDevCenterInput =
  typeof ProjectPoliciesListByDevCenterInput.Type;

// Output Schema
export const ProjectPoliciesListByDevCenterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => ProjectPolicySchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ProjectPoliciesListByDevCenterOutput =
  typeof ProjectPoliciesListByDevCenterOutput.Type;

// The operation
/**
 * Lists all project policies in the dev center
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const ProjectPoliciesListByDevCenter =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProjectPoliciesListByDevCenterInput,
    outputSchema: ProjectPoliciesListByDevCenterOutput,
  }));
// Input Schema
export const ProjectPoliciesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => ProjectPolicyUpdatePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/projectPolicies/{projectPolicyName}",
      apiVersion: "2025-02-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type ProjectPoliciesUpdateInput = typeof ProjectPoliciesUpdateInput.Type;

// Output Schema
export const ProjectPoliciesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ProjectPolicyPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ProjectPoliciesUpdateOutput =
  typeof ProjectPoliciesUpdateOutput.Type;

// The operation
/**
 * Partially updates an project policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ProjectPoliciesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProjectPoliciesUpdateInput,
    outputSchema: ProjectPoliciesUpdateOutput,
  }),
);
// Input Schema
export const ProjectsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(Schema.suspend(() => ProjectPropertiesSchema)),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}",
      apiVersion: "2025-02-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type ProjectsCreateOrUpdateInput =
  typeof ProjectsCreateOrUpdateInput.Type;

// Output Schema
export const ProjectsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => ProjectPropertiesSchema)),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ProjectsCreateOrUpdateOutput =
  typeof ProjectsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a project.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ProjectsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProjectsCreateOrUpdateInput,
    outputSchema: ProjectsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const ProjectsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}",
    apiVersion: "2025-02-01",
    longRunning: { finalStateVia: "azure-async-operation" },
  }),
);
export type ProjectsDeleteInput = typeof ProjectsDeleteInput.Type;

// Output Schema
export const ProjectsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ProjectsDeleteOutput = typeof ProjectsDeleteOutput.Type;

// The operation
/**
 * Deletes a project resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ProjectsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProjectsDeleteInput,
  outputSchema: ProjectsDeleteOutput,
}));
// Input Schema
export const ProjectsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}",
    apiVersion: "2025-02-01",
  }),
);
export type ProjectsGetInput = typeof ProjectsGetInput.Type;

// Output Schema
export const ProjectsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => ProjectPropertiesSchema)),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type ProjectsGetOutput = typeof ProjectsGetOutput.Type;

// The operation
/**
 * Gets a specific project.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ProjectsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProjectsGetInput,
  outputSchema: ProjectsGetOutput,
}));
// Input Schema
export const ProjectsGetInheritedSettingsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/getInheritedSettings",
      apiVersion: "2025-02-01",
    }),
  );
export type ProjectsGetInheritedSettingsInput =
  typeof ProjectsGetInheritedSettingsInput.Type;

// Output Schema
export const ProjectsGetInheritedSettingsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectCatalogSettings: Schema.optional(
      Schema.suspend(() => DevCenterProjectCatalogSettingsSchema),
    ),
    networkSettings: Schema.optional(
      Schema.suspend(() => ProjectNetworkSettingsSchema),
    ),
  });
export type ProjectsGetInheritedSettingsOutput =
  typeof ProjectsGetInheritedSettingsOutput.Type;

// The operation
/**
 * Gets applicable inherited settings for this project.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ProjectsGetInheritedSettings =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProjectsGetInheritedSettingsInput,
    outputSchema: ProjectsGetInheritedSettingsOutput,
  }));
// Input Schema
export const ProjectsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects",
      apiVersion: "2025-02-01",
    }),
  );
export type ProjectsListByResourceGroupInput =
  typeof ProjectsListByResourceGroupInput.Type;

// Output Schema
export const ProjectsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(Schema.suspend(() => ProjectSchema))),
    nextLink: Schema.optional(Schema.String),
  });
export type ProjectsListByResourceGroupOutput =
  typeof ProjectsListByResourceGroupOutput.Type;

// The operation
/**
 * Lists all projects in the resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const ProjectsListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProjectsListByResourceGroupInput,
    outputSchema: ProjectsListByResourceGroupOutput,
  }),
);
// Input Schema
export const ProjectsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DevCenter/projects",
      apiVersion: "2025-02-01",
    }),
  );
export type ProjectsListBySubscriptionInput =
  typeof ProjectsListBySubscriptionInput.Type;

// Output Schema
export const ProjectsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(Schema.suspend(() => ProjectSchema))),
    nextLink: Schema.optional(Schema.String),
  });
export type ProjectsListBySubscriptionOutput =
  typeof ProjectsListBySubscriptionOutput.Type;

// The operation
/**
 * Lists all projects in the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const ProjectsListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProjectsListBySubscriptionInput,
    outputSchema: ProjectsListBySubscriptionOutput,
  }),
);
// Input Schema
export const ProjectsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.suspend(() => ProjectUpdatePropertiesSchema),
  ),
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
  tags: Schema.optional(Schema.suspend(() => TagsSchema)),
  location: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}",
    apiVersion: "2025-02-01",
    longRunning: { finalStateVia: "azure-async-operation" },
  }),
);
export type ProjectsUpdateInput = typeof ProjectsUpdateInput.Type;

// Output Schema
export const ProjectsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => ProjectPropertiesSchema)),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type ProjectsUpdateOutput = typeof ProjectsUpdateOutput.Type;

// The operation
/**
 * Partially updates a project.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ProjectsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProjectsUpdateInput,
  outputSchema: ProjectsUpdateOutput,
}));
// Input Schema
export const SchedulesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => SchedulePropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/pools/{poolName}/schedules/{scheduleName}",
      apiVersion: "2025-02-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type SchedulesCreateOrUpdateInput =
  typeof SchedulesCreateOrUpdateInput.Type;

// Output Schema
export const SchedulesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => SchedulePropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SchedulesCreateOrUpdateOutput =
  typeof SchedulesCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a Schedule.
 */
export const SchedulesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SchedulesCreateOrUpdateInput,
    outputSchema: SchedulesCreateOrUpdateOutput,
  }),
);
// Input Schema
export const SchedulesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/pools/{poolName}/schedules/{scheduleName}",
    apiVersion: "2025-02-01",
    longRunning: { finalStateVia: "azure-async-operation" },
  }),
);
export type SchedulesDeleteInput = typeof SchedulesDeleteInput.Type;

// Output Schema
export const SchedulesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SchedulesDeleteOutput = typeof SchedulesDeleteOutput.Type;

// The operation
/**
 * Deletes a Scheduled.
 */
export const SchedulesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SchedulesDeleteInput,
  outputSchema: SchedulesDeleteOutput,
}));
// Input Schema
export const SchedulesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/pools/{poolName}/schedules/{scheduleName}",
    apiVersion: "2025-02-01",
  }),
);
export type SchedulesGetInput = typeof SchedulesGetInput.Type;

// Output Schema
export const SchedulesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => SchedulePropertiesSchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type SchedulesGetOutput = typeof SchedulesGetOutput.Type;

// The operation
/**
 * Gets a schedule resource.
 */
export const SchedulesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SchedulesGetInput,
  outputSchema: SchedulesGetOutput,
}));
// Input Schema
export const SchedulesListByPoolInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/pools/{poolName}/schedules",
      apiVersion: "2025-02-01",
    }),
  );
export type SchedulesListByPoolInput = typeof SchedulesListByPoolInput.Type;

// Output Schema
export const SchedulesListByPoolOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(Schema.suspend(() => ScheduleSchema))),
    nextLink: Schema.optional(Schema.String),
  });
export type SchedulesListByPoolOutput = typeof SchedulesListByPoolOutput.Type;

// The operation
/**
 * Lists schedules for a pool
 */
export const SchedulesListByPool = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SchedulesListByPoolInput,
  outputSchema: SchedulesListByPoolOutput,
}));
// Input Schema
export const SchedulesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(
    Schema.suspend(() => ScheduleUpdatePropertiesSchema),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/pools/{poolName}/schedules/{scheduleName}",
    apiVersion: "2025-02-01",
    longRunning: { finalStateVia: "azure-async-operation" },
  }),
);
export type SchedulesUpdateInput = typeof SchedulesUpdateInput.Type;

// Output Schema
export const SchedulesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => SchedulePropertiesSchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type SchedulesUpdateOutput = typeof SchedulesUpdateOutput.Type;

// The operation
/**
 * Partially updates a Scheduled.
 */
export const SchedulesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SchedulesUpdateInput,
  outputSchema: SchedulesUpdateOutput,
}));
// Input Schema
export const SkusListByProjectInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/listSkus",
    apiVersion: "2025-02-01",
  }),
);
export type SkusListByProjectInput = typeof SkusListByProjectInput.Type;

// Output Schema
export const SkusListByProjectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.String,
          tier: Schema.optional(Schema.suspend(() => SkuTierSchema)),
          size: Schema.optional(Schema.String),
          family: Schema.optional(Schema.String),
          capacity: Schema.optional(Schema.Number),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type SkusListByProjectOutput = typeof SkusListByProjectOutput.Type;

// The operation
/**
 * Lists SKUs available to the project
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const SkusListByProject = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SkusListByProjectInput,
  outputSchema: SkusListByProjectOutput,
}));
// Input Schema
export const SkusListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DevCenter/skus",
      apiVersion: "2025-02-01",
    }),
  );
export type SkusListBySubscriptionInput =
  typeof SkusListBySubscriptionInput.Type;

// Output Schema
export const SkusListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.String,
          tier: Schema.optional(Schema.suspend(() => SkuTierSchema)),
          size: Schema.optional(Schema.String),
          family: Schema.optional(Schema.String),
          capacity: Schema.optional(Schema.Number),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type SkusListBySubscriptionOutput =
  typeof SkusListBySubscriptionOutput.Type;

// The operation
/**
 * Lists the Microsoft.DevCenter SKUs available in a subscription
 */
export const SkusListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SkusListBySubscriptionInput,
    outputSchema: SkusListBySubscriptionOutput,
  }),
);
// Input Schema
export const UsagesListByLocationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DevCenter/locations/{location}/usages",
      apiVersion: "2025-02-01",
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
 * Lists the current usages and limits in this location for the provided subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const UsagesListByLocation = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UsagesListByLocationInput,
    outputSchema: UsagesListByLocationOutput,
  }),
);
