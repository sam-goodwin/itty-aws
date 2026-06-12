/**
 * Azure Healthcareapis API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Shared schemas
const ServicesPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
  accessPolicies: Schema.optional(
    Schema.suspend(() => ServiceAccessPoliciesInfoSchema),
  ),
  cosmosDbConfiguration: Schema.optional(
    Schema.suspend(() => ServiceCosmosDbConfigurationInfoSchema),
  ),
  authenticationConfiguration: Schema.optional(
    Schema.suspend(() => ServiceAuthenticationConfigurationInfoSchema),
  ),
  corsConfiguration: Schema.optional(
    Schema.suspend(() => ServiceCorsConfigurationInfoSchema),
  ),
  exportConfiguration: Schema.optional(
    Schema.suspend(() => ServiceExportConfigurationInfoSchema),
  ),
  privateEndpointConnections: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
  ),
  publicNetworkAccess: Schema.optional(
    Schema.Literals(["Enabled", "Disabled"]),
  ),
  acrConfiguration: Schema.optional(
    Schema.suspend(() => ServiceAcrConfigurationInfoSchema),
  ),
  importConfiguration: Schema.optional(
    Schema.suspend(() => ServiceImportConfigurationInfoSchema),
  ),
});
const ProvisioningStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Deleting",
  "Succeeded",
  "Creating",
  "Accepted",
  "Verifying",
  "Updating",
  "Failed",
  "Canceled",
  "Deprovisioned",
  "Moving",
  "Suspended",
  "Warned",
  "SystemMaintenance",
]);
const ServiceAccessPoliciesInfoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => ServiceAccessPolicyEntrySchema),
  );
const ServiceAccessPolicyEntrySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectId: Schema.String,
  });
const ServiceCosmosDbConfigurationInfoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    offerThroughput: Schema.optional(Schema.Number),
    keyVaultKeyUri: Schema.optional(Schema.String),
    crossTenantCmkApplicationId: Schema.optional(Schema.String),
  });
const ServiceAuthenticationConfigurationInfoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authority: Schema.optional(Schema.String),
    audience: Schema.optional(Schema.String),
    smartProxyEnabled: Schema.optional(Schema.Boolean),
  });
const ServiceCorsConfigurationInfoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    origins: Schema.optional(
      Schema.Array(
        Schema.suspend(() => ServiceCorsConfigurationOriginEntrySchema),
      ),
    ),
    headers: Schema.optional(
      Schema.Array(
        Schema.suspend(() => ServiceCorsConfigurationHeaderEntrySchema),
      ),
    ),
    methods: Schema.optional(
      Schema.Array(
        Schema.suspend(() => ServiceCorsConfigurationMethodEntrySchema),
      ),
    ),
    maxAge: Schema.optional(Schema.Number),
    allowCredentials: Schema.optional(Schema.Boolean),
  });
const ServiceCorsConfigurationOriginEntrySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const ServiceCorsConfigurationHeaderEntrySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const ServiceCorsConfigurationMethodEntrySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const ServiceExportConfigurationInfoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storageAccountName: Schema.optional(Schema.String),
  });
const ServiceAcrConfigurationInfoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    loginServers: Schema.optional(Schema.Array(Schema.String)),
    ociArtifacts: Schema.optional(
      Schema.Array(Schema.suspend(() => ServiceOciArtifactEntrySchema)),
    ),
  });
const ServiceOciArtifactEntrySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    loginServer: Schema.optional(Schema.String),
    imageName: Schema.optional(Schema.String),
    digest: Schema.optional(Schema.String),
  },
);
const ServiceImportConfigurationInfoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    integrationDataStore: Schema.optional(Schema.String),
    initialImportMode: Schema.optional(Schema.Boolean),
    enabled: Schema.optional(Schema.Boolean),
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
const ServicesPropertiesUpdateParametersSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    publicNetworkAccess: Schema.optional(
      Schema.Literals(["Enabled", "Disabled"]),
    ),
  });
const ServicesDescriptionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
  location: Schema.String,
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  etag: Schema.optional(Schema.String),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
    }),
  ),
});
const PrivateEndpointConnectionDescriptionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
const PrivateLinkResourceDescriptionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
const PrivateLinkResourcePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupId: Schema.optional(Schema.String),
    requiredMembers: Schema.optional(Schema.Array(Schema.String)),
    requiredZoneNames: Schema.optional(Schema.Array(Schema.String)),
  });
const WorkspaceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.optional(Schema.String),
});
const ResourcePublicNetworkAccessSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Enabled", "Disabled"]);
const DicomServiceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  identity: Schema.optional(
    Schema.Struct({
      type: Schema.Literals([
        "None",
        "SystemAssigned",
        "UserAssigned",
        "SystemAssigned,UserAssigned",
      ]),
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      userAssignedIdentities: Schema.optional(
        Schema.suspend(() => UserAssignedIdentitiesSchema),
      ),
    }),
  ),
});
const UserAssignedIdentitiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
  Schema.String,
  Schema.suspend(() => UserAssignedIdentitySchema),
);
const UserAssignedIdentitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  principalId: Schema.optional(Schema.String),
  clientId: Schema.optional(Schema.String),
});
const DicomServicePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
  authenticationConfiguration: Schema.optional(
    Schema.suspend(() => DicomServiceAuthenticationConfigurationSchema),
  ),
  corsConfiguration: Schema.optional(
    Schema.suspend(() => CorsConfigurationSchema),
  ),
  serviceUrl: Schema.optional(Schema.String),
  privateEndpointConnections: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
  ),
  publicNetworkAccess: Schema.optional(
    Schema.suspend(() => ResourcePublicNetworkAccessSchema),
  ),
  eventState: Schema.optional(Schema.suspend(() => ResourceEventStateSchema)),
  encryption: Schema.optional(Schema.suspend(() => EncryptionSchema)),
  storageConfiguration: Schema.optional(
    Schema.suspend(() => StorageConfigurationSchema),
  ),
  enableDataPartitions: Schema.optional(
    Schema.suspend(() => EnableDataPartitionsSchema),
  ),
});
const DicomServiceAuthenticationConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authority: Schema.optional(Schema.String),
    audiences: Schema.optional(
      Schema.Array(Schema.suspend(() => DicomAudienceSchema)),
    ),
  });
const DicomAudienceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const CorsConfigurationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  origins: Schema.optional(
    Schema.Array(Schema.suspend(() => CorsConfigurationOriginEntrySchema)),
  ),
  headers: Schema.optional(
    Schema.Array(Schema.suspend(() => CorsConfigurationHeaderEntrySchema)),
  ),
  methods: Schema.optional(
    Schema.Array(Schema.suspend(() => CorsConfigurationMethodEntrySchema)),
  ),
  maxAge: Schema.optional(Schema.Number),
  allowCredentials: Schema.optional(Schema.Boolean),
});
const CorsConfigurationOriginEntrySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const CorsConfigurationHeaderEntrySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const CorsConfigurationMethodEntrySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const ResourceEventStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Disabled",
  "Enabled",
  "Updating",
]);
const EncryptionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customerManagedKeyEncryption: Schema.optional(
    Schema.Struct({
      keyEncryptionKeyUrl: Schema.optional(Schema.String),
    }),
  ),
});
const StorageConfigurationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  storageResourceId: Schema.optional(Schema.String),
  fileSystemName: Schema.optional(Schema.String),
});
const EnableDataPartitionsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Boolean;
const IotConnectorSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  identity: Schema.optional(
    Schema.Struct({
      type: Schema.Literals([
        "None",
        "SystemAssigned",
        "UserAssigned",
        "SystemAssigned,UserAssigned",
      ]),
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      userAssignedIdentities: Schema.optional(
        Schema.suspend(() => UserAssignedIdentitiesSchema),
      ),
    }),
  ),
});
const IotConnectorPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
  ingestionEndpointConfiguration: Schema.optional(
    Schema.suspend(() => IotEventHubIngestionEndpointConfigurationSchema),
  ),
  deviceMapping: Schema.optional(
    Schema.suspend(() => IotMappingPropertiesSchema),
  ),
});
const IotEventHubIngestionEndpointConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventHubName: Schema.optional(Schema.String),
    consumerGroup: Schema.optional(Schema.String),
    fullyQualifiedEventHubNamespace: Schema.optional(Schema.String),
  });
const IotMappingPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  content: Schema.optional(Schema.Unknown),
});
const IotFhirDestinationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
});
const IotFhirDestinationPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  });
const FhirServiceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  identity: Schema.optional(
    Schema.Struct({
      type: Schema.Literals([
        "None",
        "SystemAssigned",
        "UserAssigned",
        "SystemAssigned,UserAssigned",
      ]),
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      userAssignedIdentities: Schema.optional(
        Schema.suspend(() => UserAssignedIdentitiesSchema),
      ),
    }),
  ),
});
const FhirServicePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
  acrConfiguration: Schema.optional(
    Schema.suspend(() => FhirServiceAcrConfigurationSchema),
  ),
  authenticationConfiguration: Schema.optional(
    Schema.suspend(() => FhirServiceAuthenticationConfigurationSchema),
  ),
  corsConfiguration: Schema.optional(
    Schema.suspend(() => FhirServiceCorsConfigurationSchema),
  ),
  exportConfiguration: Schema.optional(
    Schema.suspend(() => FhirServiceExportConfigurationSchema),
  ),
  privateEndpointConnections: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
  ),
  publicNetworkAccess: Schema.optional(
    Schema.suspend(() => ResourcePublicNetworkAccessSchema),
  ),
  eventState: Schema.optional(Schema.suspend(() => ResourceEventStateSchema)),
  resourceVersionPolicyConfiguration: Schema.optional(
    Schema.suspend(() => ResourceVersionPolicyConfigurationSchema),
  ),
  importConfiguration: Schema.optional(
    Schema.suspend(() => FhirServiceImportConfigurationSchema),
  ),
  implementationGuidesConfiguration: Schema.optional(
    Schema.suspend(() => ImplementationGuidesConfigurationSchema),
  ),
  encryption: Schema.optional(Schema.suspend(() => EncryptionSchema)),
});
const FhirServiceAcrConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    loginServers: Schema.optional(Schema.Array(Schema.String)),
    ociArtifacts: Schema.optional(
      Schema.Array(Schema.suspend(() => ServiceOciArtifactEntrySchema)),
    ),
  });
const FhirServiceAuthenticationConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authority: Schema.optional(Schema.String),
    audience: Schema.optional(Schema.String),
    smartProxyEnabled: Schema.optional(Schema.Boolean),
    smartIdentityProviders: Schema.optional(
      Schema.Array(
        Schema.suspend(() => SmartIdentityProviderConfigurationSchema),
      ),
    ),
  });
const SmartIdentityProviderConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authority: Schema.optional(Schema.String),
    applications: Schema.optional(
      Schema.Array(
        Schema.suspend(() => SmartIdentityProviderApplicationSchema),
      ),
    ),
  });
const SmartIdentityProviderApplicationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientId: Schema.optional(Schema.String),
    audience: Schema.optional(Schema.String),
    allowedDataActions: Schema.optional(
      Schema.Array(Schema.suspend(() => SmartDataActionsSchema)),
    ),
  });
const SmartDataActionsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Read",
]);
const FhirServiceCorsConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    origins: Schema.optional(
      Schema.Array(Schema.suspend(() => CorsConfigurationOriginEntrySchema)),
    ),
    headers: Schema.optional(
      Schema.Array(Schema.suspend(() => CorsConfigurationHeaderEntrySchema)),
    ),
    methods: Schema.optional(
      Schema.Array(Schema.suspend(() => CorsConfigurationMethodEntrySchema)),
    ),
    maxAge: Schema.optional(Schema.Number),
    allowCredentials: Schema.optional(Schema.Boolean),
  });
const FhirServiceExportConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storageAccountName: Schema.optional(Schema.String),
  });
const ResourceVersionPolicyConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    default: Schema.optional(
      Schema.suspend(() => FhirResourceVersionPolicySchema),
    ),
    resourceTypeOverrides: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => FhirResourceVersionPolicySchema),
      ),
    ),
  });
const FhirResourceVersionPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "no-version",
    "versioned",
    "versioned-update",
  ]);
const FhirServiceImportConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    integrationDataStore: Schema.optional(Schema.String),
    initialImportMode: Schema.optional(Schema.Boolean),
    enabled: Schema.optional(Schema.Boolean),
  });
const ImplementationGuidesConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    usCoreMissingData: Schema.optional(Schema.Boolean),
  });
const OperationDetailSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  isDataAction: Schema.optional(Schema.Boolean),
  display: Schema.optional(Schema.suspend(() => OperationDisplaySchema)),
  origin: Schema.optional(Schema.String),
  actionType: Schema.optional(Schema.Literals(["Internal"])),
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
  logSpecifications: Schema.optional(
    Schema.Array(Schema.suspend(() => LogSpecificationSchema)),
  ),
  metricSpecifications: Schema.optional(
    Schema.Array(Schema.suspend(() => MetricSpecificationSchema)),
  ),
});
const LogSpecificationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  blobDuration: Schema.optional(Schema.String),
});
const MetricSpecificationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  displayDescription: Schema.optional(Schema.String),
  unit: Schema.optional(Schema.String),
  category: Schema.optional(Schema.String),
  aggregationType: Schema.optional(Schema.String),
  supportedAggregationTypes: Schema.optional(Schema.Array(Schema.String)),
  supportedTimeGrainTypes: Schema.optional(Schema.Array(Schema.String)),
  fillGapWithZero: Schema.optional(Schema.Boolean),
  metricFilterPattern: Schema.optional(Schema.String),
  dimensions: Schema.optional(
    Schema.Array(Schema.suspend(() => MetricDimensionSchema)),
  ),
  isInternal: Schema.optional(Schema.Boolean),
  sourceMdmAccount: Schema.optional(Schema.String),
  sourceMdmNamespace: Schema.optional(Schema.String),
  enableRegionalMdmAccount: Schema.optional(Schema.Boolean),
  resourceIdDimensionNameOverride: Schema.optional(Schema.String),
});
const MetricDimensionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  toBeExportedForShoebox: Schema.optional(Schema.Boolean),
});

// Input Schema
export const DicomServicesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => DicomServicePropertiesSchema),
    ),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        userAssignedIdentities: Schema.optional(
          Schema.suspend(() => UserAssignedIdentitiesSchema),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/dicomservices/{dicomServiceName}",
      apiVersion: "2024-03-31",
      longRunning: {},
    }),
  );
export type DicomServicesCreateOrUpdateInput =
  typeof DicomServicesCreateOrUpdateInput.Type;

// Output Schema
export const DicomServicesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => DicomServicePropertiesSchema),
    ),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        userAssignedIdentities: Schema.optional(
          Schema.suspend(() => UserAssignedIdentitiesSchema),
        ),
      }),
    ),
  });
export type DicomServicesCreateOrUpdateOutput =
  typeof DicomServicesCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a DICOM Service resource with the specified parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DicomServicesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DicomServicesCreateOrUpdateInput,
    outputSchema: DicomServicesCreateOrUpdateOutput,
  }),
);
// Input Schema
export const DicomServicesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/dicomservices/{dicomServiceName}",
      apiVersion: "2024-03-31",
      longRunning: {},
    }),
  );
export type DicomServicesDeleteInput = typeof DicomServicesDeleteInput.Type;

// Output Schema
export const DicomServicesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DicomServicesDeleteOutput = typeof DicomServicesDeleteOutput.Type;

// The operation
/**
 * Deletes a DICOM Service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DicomServicesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DicomServicesDeleteInput,
  outputSchema: DicomServicesDeleteOutput,
}));
// Input Schema
export const DicomServicesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/dicomservices/{dicomServiceName}",
    apiVersion: "2024-03-31",
  }),
);
export type DicomServicesGetInput = typeof DicomServicesGetInput.Type;

// Output Schema
export const DicomServicesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.optional(
      Schema.suspend(() => DicomServicePropertiesSchema),
    ),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        userAssignedIdentities: Schema.optional(
          Schema.suspend(() => UserAssignedIdentitiesSchema),
        ),
      }),
    ),
  },
);
export type DicomServicesGetOutput = typeof DicomServicesGetOutput.Type;

// The operation
/**
 * Gets the properties of the specified DICOM Service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DicomServicesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DicomServicesGetInput,
  outputSchema: DicomServicesGetOutput,
}));
// Input Schema
export const DicomServicesListByWorkspaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/dicomservices",
      apiVersion: "2024-03-31",
    }),
  );
export type DicomServicesListByWorkspaceInput =
  typeof DicomServicesListByWorkspaceInput.Type;

// Output Schema
export const DicomServicesListByWorkspaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => DicomServiceSchema)),
    ),
  });
export type DicomServicesListByWorkspaceOutput =
  typeof DicomServicesListByWorkspaceOutput.Type;

// The operation
/**
 * Lists all DICOM Services for the given workspace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DicomServicesListByWorkspace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DicomServicesListByWorkspaceInput,
    outputSchema: DicomServicesListByWorkspaceOutput,
  }));
// Input Schema
export const DicomServicesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        userAssignedIdentities: Schema.optional(
          Schema.suspend(() => UserAssignedIdentitiesSchema),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/dicomservices/{dicomServiceName}",
      apiVersion: "2024-03-31",
      longRunning: {},
    }),
  );
export type DicomServicesUpdateInput = typeof DicomServicesUpdateInput.Type;

// Output Schema
export const DicomServicesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => DicomServicePropertiesSchema),
    ),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        userAssignedIdentities: Schema.optional(
          Schema.suspend(() => UserAssignedIdentitiesSchema),
        ),
      }),
    ),
  });
export type DicomServicesUpdateOutput = typeof DicomServicesUpdateOutput.Type;

// The operation
/**
 * Patch DICOM Service details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DicomServicesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DicomServicesUpdateInput,
  outputSchema: DicomServicesUpdateOutput,
}));
// Input Schema
export const FhirDestinationsListByIotConnectorInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/iotconnectors/{iotConnectorName}/fhirdestinations",
      apiVersion: "2024-03-31",
    }),
  );
export type FhirDestinationsListByIotConnectorInput =
  typeof FhirDestinationsListByIotConnectorInput.Type;

// Output Schema
export const FhirDestinationsListByIotConnectorOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => IotFhirDestinationSchema)),
    ),
  });
export type FhirDestinationsListByIotConnectorOutput =
  typeof FhirDestinationsListByIotConnectorOutput.Type;

// The operation
/**
 * Lists all FHIR destinations for the given IoT Connector
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const FhirDestinationsListByIotConnector =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FhirDestinationsListByIotConnectorInput,
    outputSchema: FhirDestinationsListByIotConnectorOutput,
  }));
// Input Schema
export const FhirServicesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    kind: Schema.optional(Schema.Literals(["fhir-Stu3", "fhir-R4"])),
    properties: Schema.optional(
      Schema.suspend(() => FhirServicePropertiesSchema),
    ),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        userAssignedIdentities: Schema.optional(
          Schema.suspend(() => UserAssignedIdentitiesSchema),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/fhirservices/{fhirServiceName}",
      apiVersion: "2024-03-31",
      longRunning: {},
    }),
  );
export type FhirServicesCreateOrUpdateInput =
  typeof FhirServicesCreateOrUpdateInput.Type;

// Output Schema
export const FhirServicesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.Literals(["fhir-Stu3", "fhir-R4"])),
    properties: Schema.optional(
      Schema.suspend(() => FhirServicePropertiesSchema),
    ),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        userAssignedIdentities: Schema.optional(
          Schema.suspend(() => UserAssignedIdentitiesSchema),
        ),
      }),
    ),
  });
export type FhirServicesCreateOrUpdateOutput =
  typeof FhirServicesCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a FHIR Service resource with the specified parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const FhirServicesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FhirServicesCreateOrUpdateInput,
    outputSchema: FhirServicesCreateOrUpdateOutput,
  }),
);
// Input Schema
export const FhirServicesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/fhirservices/{fhirServiceName}",
      apiVersion: "2024-03-31",
      longRunning: {},
    }),
  );
export type FhirServicesDeleteInput = typeof FhirServicesDeleteInput.Type;

// Output Schema
export const FhirServicesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type FhirServicesDeleteOutput = typeof FhirServicesDeleteOutput.Type;

// The operation
/**
 * Deletes a FHIR Service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const FhirServicesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FhirServicesDeleteInput,
  outputSchema: FhirServicesDeleteOutput,
}));
// Input Schema
export const FhirServicesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/fhirservices/{fhirServiceName}",
    apiVersion: "2024-03-31",
  }),
);
export type FhirServicesGetInput = typeof FhirServicesGetInput.Type;

// Output Schema
export const FhirServicesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.Literals(["fhir-Stu3", "fhir-R4"])),
  properties: Schema.optional(
    Schema.suspend(() => FhirServicePropertiesSchema),
  ),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  identity: Schema.optional(
    Schema.Struct({
      type: Schema.Literals([
        "None",
        "SystemAssigned",
        "UserAssigned",
        "SystemAssigned,UserAssigned",
      ]),
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      userAssignedIdentities: Schema.optional(
        Schema.suspend(() => UserAssignedIdentitiesSchema),
      ),
    }),
  ),
});
export type FhirServicesGetOutput = typeof FhirServicesGetOutput.Type;

// The operation
/**
 * Gets the properties of the specified FHIR Service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const FhirServicesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FhirServicesGetInput,
  outputSchema: FhirServicesGetOutput,
}));
// Input Schema
export const FhirServicesListByWorkspaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/fhirservices",
      apiVersion: "2024-03-31",
    }),
  );
export type FhirServicesListByWorkspaceInput =
  typeof FhirServicesListByWorkspaceInput.Type;

// Output Schema
export const FhirServicesListByWorkspaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => FhirServiceSchema)),
    ),
  });
export type FhirServicesListByWorkspaceOutput =
  typeof FhirServicesListByWorkspaceOutput.Type;

// The operation
/**
 * Lists all FHIR Services for the given workspace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const FhirServicesListByWorkspace = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FhirServicesListByWorkspaceInput,
    outputSchema: FhirServicesListByWorkspaceOutput,
  }),
);
// Input Schema
export const FhirServicesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        userAssignedIdentities: Schema.optional(
          Schema.suspend(() => UserAssignedIdentitiesSchema),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/fhirservices/{fhirServiceName}",
      apiVersion: "2024-03-31",
      longRunning: {},
    }),
  );
export type FhirServicesUpdateInput = typeof FhirServicesUpdateInput.Type;

// Output Schema
export const FhirServicesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.Literals(["fhir-Stu3", "fhir-R4"])),
    properties: Schema.optional(
      Schema.suspend(() => FhirServicePropertiesSchema),
    ),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        userAssignedIdentities: Schema.optional(
          Schema.suspend(() => UserAssignedIdentitiesSchema),
        ),
      }),
    ),
  });
export type FhirServicesUpdateOutput = typeof FhirServicesUpdateOutput.Type;

// The operation
/**
 * Patch FHIR Service details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const FhirServicesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FhirServicesUpdateInput,
  outputSchema: FhirServicesUpdateOutput,
}));
// Input Schema
export const IotConnectorFhirDestinationCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.suspend(() => IotFhirDestinationPropertiesSchema),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/iotconnectors/{iotConnectorName}/fhirdestinations/{fhirDestinationName}",
      apiVersion: "2024-03-31",
      longRunning: {},
    }),
  );
export type IotConnectorFhirDestinationCreateOrUpdateInput =
  typeof IotConnectorFhirDestinationCreateOrUpdateInput.Type;

// Output Schema
export const IotConnectorFhirDestinationCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => IotFhirDestinationPropertiesSchema),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
    location: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  });
export type IotConnectorFhirDestinationCreateOrUpdateOutput =
  typeof IotConnectorFhirDestinationCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates an IoT Connector FHIR destination resource with the specified parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const IotConnectorFhirDestinationCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IotConnectorFhirDestinationCreateOrUpdateInput,
    outputSchema: IotConnectorFhirDestinationCreateOrUpdateOutput,
  }));
// Input Schema
export const IotConnectorFhirDestinationDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/iotconnectors/{iotConnectorName}/fhirdestinations/{fhirDestinationName}",
      apiVersion: "2024-03-31",
      longRunning: {},
    }),
  );
export type IotConnectorFhirDestinationDeleteInput =
  typeof IotConnectorFhirDestinationDeleteInput.Type;

// Output Schema
export const IotConnectorFhirDestinationDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type IotConnectorFhirDestinationDeleteOutput =
  typeof IotConnectorFhirDestinationDeleteOutput.Type;

// The operation
/**
 * Deletes an IoT Connector FHIR destination.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const IotConnectorFhirDestinationDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IotConnectorFhirDestinationDeleteInput,
    outputSchema: IotConnectorFhirDestinationDeleteOutput,
  }));
// Input Schema
export const IotConnectorFhirDestinationGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/iotconnectors/{iotConnectorName}/fhirdestinations/{fhirDestinationName}",
      apiVersion: "2024-03-31",
    }),
  );
export type IotConnectorFhirDestinationGetInput =
  typeof IotConnectorFhirDestinationGetInput.Type;

// Output Schema
export const IotConnectorFhirDestinationGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => IotFhirDestinationPropertiesSchema),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
    location: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  });
export type IotConnectorFhirDestinationGetOutput =
  typeof IotConnectorFhirDestinationGetOutput.Type;

// The operation
/**
 * Gets the properties of the specified Iot Connector FHIR destination.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const IotConnectorFhirDestinationGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IotConnectorFhirDestinationGetInput,
    outputSchema: IotConnectorFhirDestinationGetOutput,
  }));
// Input Schema
export const IotConnectorsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => IotConnectorPropertiesSchema),
    ),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        userAssignedIdentities: Schema.optional(
          Schema.suspend(() => UserAssignedIdentitiesSchema),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/iotconnectors/{iotConnectorName}",
      apiVersion: "2024-03-31",
      longRunning: {},
    }),
  );
export type IotConnectorsCreateOrUpdateInput =
  typeof IotConnectorsCreateOrUpdateInput.Type;

// Output Schema
export const IotConnectorsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => IotConnectorPropertiesSchema),
    ),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        userAssignedIdentities: Schema.optional(
          Schema.suspend(() => UserAssignedIdentitiesSchema),
        ),
      }),
    ),
  });
export type IotConnectorsCreateOrUpdateOutput =
  typeof IotConnectorsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates an IoT Connector resource with the specified parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const IotConnectorsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IotConnectorsCreateOrUpdateInput,
    outputSchema: IotConnectorsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const IotConnectorsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/iotconnectors/{iotConnectorName}",
      apiVersion: "2024-03-31",
      longRunning: {},
    }),
  );
export type IotConnectorsDeleteInput = typeof IotConnectorsDeleteInput.Type;

// Output Schema
export const IotConnectorsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type IotConnectorsDeleteOutput = typeof IotConnectorsDeleteOutput.Type;

// The operation
/**
 * Deletes an IoT Connector.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const IotConnectorsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: IotConnectorsDeleteInput,
  outputSchema: IotConnectorsDeleteOutput,
}));
// Input Schema
export const IotConnectorsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/iotconnectors/{iotConnectorName}",
    apiVersion: "2024-03-31",
  }),
);
export type IotConnectorsGetInput = typeof IotConnectorsGetInput.Type;

// Output Schema
export const IotConnectorsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.optional(
      Schema.suspend(() => IotConnectorPropertiesSchema),
    ),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        userAssignedIdentities: Schema.optional(
          Schema.suspend(() => UserAssignedIdentitiesSchema),
        ),
      }),
    ),
  },
);
export type IotConnectorsGetOutput = typeof IotConnectorsGetOutput.Type;

// The operation
/**
 * Gets the properties of the specified IoT Connector.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const IotConnectorsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: IotConnectorsGetInput,
  outputSchema: IotConnectorsGetOutput,
}));
// Input Schema
export const IotConnectorsListByWorkspaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/iotconnectors",
      apiVersion: "2024-03-31",
    }),
  );
export type IotConnectorsListByWorkspaceInput =
  typeof IotConnectorsListByWorkspaceInput.Type;

// Output Schema
export const IotConnectorsListByWorkspaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => IotConnectorSchema)),
    ),
  });
export type IotConnectorsListByWorkspaceOutput =
  typeof IotConnectorsListByWorkspaceOutput.Type;

// The operation
/**
 * Lists all IoT Connectors for the given workspace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const IotConnectorsListByWorkspace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IotConnectorsListByWorkspaceInput,
    outputSchema: IotConnectorsListByWorkspaceOutput,
  }));
// Input Schema
export const IotConnectorsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        userAssignedIdentities: Schema.optional(
          Schema.suspend(() => UserAssignedIdentitiesSchema),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/iotconnectors/{iotConnectorName}",
      apiVersion: "2024-03-31",
      longRunning: {},
    }),
  );
export type IotConnectorsUpdateInput = typeof IotConnectorsUpdateInput.Type;

// Output Schema
export const IotConnectorsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => IotConnectorPropertiesSchema),
    ),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        userAssignedIdentities: Schema.optional(
          Schema.suspend(() => UserAssignedIdentitiesSchema),
        ),
      }),
    ),
  });
export type IotConnectorsUpdateOutput = typeof IotConnectorsUpdateOutput.Type;

// The operation
/**
 * Patch an IoT Connector.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const IotConnectorsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: IotConnectorsUpdateInput,
  outputSchema: IotConnectorsUpdateOutput,
}));
// Input Schema
export const OperationResultsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HealthcareApis/locations/{locationName}/operationresults/{operationResultId}",
      apiVersion: "2024-03-31",
    }),
  );
export type OperationResultsGetInput = typeof OperationResultsGetInput.Type;

// Output Schema
export const OperationResultsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals([
        "Canceled",
        "Succeeded",
        "Failed",
        "Requested",
        "Running",
      ]),
    ),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.Unknown),
  });
export type OperationResultsGetOutput = typeof OperationResultsGetOutput.Type;

// The operation
/**
 * Get the operation result for a long running operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const OperationResultsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationResultsGetInput,
  outputSchema: OperationResultsGetOutput,
}));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.HealthcareApis/operations",
    apiVersion: "2024-03-31",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(Schema.suspend(() => OperationDetailSchema)),
  ),
  nextLink: Schema.optional(Schema.String),
});
export type OperationsListOutput = typeof OperationsListOutput.Type;

// The operation
/**
 * Lists all of the available operations supported by Microsoft Healthcare resource provider.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export const PrivateEndpointConnectionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => PrivateEndpointConnectionPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/services/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2024-03-31",
      longRunning: {},
    }),
  );
export type PrivateEndpointConnectionsCreateOrUpdateInput =
  typeof PrivateEndpointConnectionsCreateOrUpdateInput.Type;

// Output Schema
export const PrivateEndpointConnectionsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    properties: Schema.optional(
      Schema.suspend(() => PrivateEndpointConnectionPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type PrivateEndpointConnectionsCreateOrUpdateOutput =
  typeof PrivateEndpointConnectionsCreateOrUpdateOutput.Type;

// The operation
/**
 * Update the state of the specified private endpoint connection associated with the service.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
 * @param properties - Resource properties.
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
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/services/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2024-03-31",
      longRunning: {},
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
 * Deletes a private endpoint connection.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
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
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/services/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2024-03-31",
    }),
  );
export type PrivateEndpointConnectionsGetInput =
  typeof PrivateEndpointConnectionsGetInput.Type;

// Output Schema
export const PrivateEndpointConnectionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    properties: Schema.optional(
      Schema.suspend(() => PrivateEndpointConnectionPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type PrivateEndpointConnectionsGetOutput =
  typeof PrivateEndpointConnectionsGetOutput.Type;

// The operation
/**
 * Gets the specified private endpoint connection associated with the service.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionsListByServiceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/services/{resourceName}/privateEndpointConnections",
      apiVersion: "2024-03-31",
    }),
  );
export type PrivateEndpointConnectionsListByServiceInput =
  typeof PrivateEndpointConnectionsListByServiceInput.Type;

// Output Schema
export const PrivateEndpointConnectionsListByServiceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.suspend(() => PrivateEndpointConnectionDescriptionSchema),
      ),
    ),
  });
export type PrivateEndpointConnectionsListByServiceOutput =
  typeof PrivateEndpointConnectionsListByServiceOutput.Type;

// The operation
/**
 * Lists all private endpoint connections for a service.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 */
export const PrivateEndpointConnectionsListByService =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListByServiceInput,
    outputSchema: PrivateEndpointConnectionsListByServiceOutput,
  }));
// Input Schema
export const PrivateLinkResourcesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/services/{resourceName}/privateLinkResources/{groupName}",
      apiVersion: "2024-03-31",
    }),
  );
export type PrivateLinkResourcesGetInput =
  typeof PrivateLinkResourcesGetInput.Type;

// Output Schema
export const PrivateLinkResourcesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    properties: Schema.optional(
      Schema.suspend(() => PrivateLinkResourcePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type PrivateLinkResourcesGetOutput =
  typeof PrivateLinkResourcesGetOutput.Type;

// The operation
/**
 * Gets a private link resource that need to be created for a service.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 * @param groupName - The name of the private link resource group.
 */
export const PrivateLinkResourcesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateLinkResourcesGetInput,
    outputSchema: PrivateLinkResourcesGetOutput,
  }),
);
// Input Schema
export const PrivateLinkResourcesListByServiceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/services/{resourceName}/privateLinkResources",
      apiVersion: "2024-03-31",
    }),
  );
export type PrivateLinkResourcesListByServiceInput =
  typeof PrivateLinkResourcesListByServiceInput.Type;

// Output Schema
export const PrivateLinkResourcesListByServiceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => PrivateLinkResourceDescriptionSchema)),
    ),
  });
export type PrivateLinkResourcesListByServiceOutput =
  typeof PrivateLinkResourcesListByServiceOutput.Type;

// The operation
/**
 * Gets the private link resources that need to be created for a service.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 */
export const PrivateLinkResourcesListByService =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesListByServiceInput,
    outputSchema: PrivateLinkResourcesListByServiceOutput,
  }));
// Input Schema
export const ServicesCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HealthcareApis/checkNameAvailability",
      apiVersion: "2024-03-31",
    }),
  );
export type ServicesCheckNameAvailabilityInput =
  typeof ServicesCheckNameAvailabilityInput.Type;

// Output Schema
export const ServicesCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  });
export type ServicesCheckNameAvailabilityOutput =
  typeof ServicesCheckNameAvailabilityOutput.Type;

// The operation
/**
 * Check if a service instance name is available.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ServicesCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServicesCheckNameAvailabilityInput,
    outputSchema: ServicesCheckNameAvailabilityOutput,
  }));
// Input Schema
export const ServicesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(Schema.suspend(() => ServicesPropertiesSchema)),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/services/{resourceName}",
      apiVersion: "2024-03-31",
      longRunning: {},
    }),
  );
export type ServicesCreateOrUpdateInput =
  typeof ServicesCreateOrUpdateInput.Type;

// Output Schema
export const ServicesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => ServicesPropertiesSchema)),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
      }),
    ),
  });
export type ServicesCreateOrUpdateOutput =
  typeof ServicesCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update the metadata of a service instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ServicesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServicesCreateOrUpdateInput,
    outputSchema: ServicesCreateOrUpdateOutput,
  }),
);
// Input Schema
export const ServicesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/services/{resourceName}",
    apiVersion: "2024-03-31",
    longRunning: {},
  }),
);
export type ServicesDeleteInput = typeof ServicesDeleteInput.Type;

// Output Schema
export const ServicesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServicesDeleteOutput = typeof ServicesDeleteOutput.Type;

// The operation
/**
 * Delete a service instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ServicesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesDeleteInput,
  outputSchema: ServicesDeleteOutput,
}));
// Input Schema
export const ServicesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/services/{resourceName}",
    apiVersion: "2024-03-31",
  }),
);
export type ServicesGetInput = typeof ServicesGetInput.Type;

// Output Schema
export const ServicesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => ServicesPropertiesSchema)),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
  location: Schema.String,
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  etag: Schema.optional(Schema.String),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
    }),
  ),
});
export type ServicesGetOutput = typeof ServicesGetOutput.Type;

// The operation
/**
 * Get the metadata of a service instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ServicesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesGetInput,
  outputSchema: ServicesGetOutput,
}));
// Input Schema
export const ServicesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.HealthcareApis/services",
    apiVersion: "2024-03-31",
  }),
);
export type ServicesListInput = typeof ServicesListInput.Type;

// Output Schema
export const ServicesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.optional(
    Schema.Array(Schema.suspend(() => ServicesDescriptionSchema)),
  ),
});
export type ServicesListOutput = typeof ServicesListOutput.Type;

// The operation
/**
 * Get all the service instances in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ServicesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesListInput,
  outputSchema: ServicesListOutput,
}));
// Input Schema
export const ServicesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/services",
      apiVersion: "2024-03-31",
    }),
  );
export type ServicesListByResourceGroupInput =
  typeof ServicesListByResourceGroupInput.Type;

// Output Schema
export const ServicesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => ServicesDescriptionSchema)),
    ),
  });
export type ServicesListByResourceGroupOutput =
  typeof ServicesListByResourceGroupOutput.Type;

// The operation
/**
 * Get all the service instances in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ServicesListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServicesListByResourceGroupInput,
    outputSchema: ServicesListByResourceGroupOutput,
  }),
);
// Input Schema
export const ServicesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  properties: Schema.optional(
    Schema.suspend(() => ServicesPropertiesUpdateParametersSchema),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/services/{resourceName}",
    apiVersion: "2024-03-31",
    longRunning: {},
  }),
);
export type ServicesUpdateInput = typeof ServicesUpdateInput.Type;

// Output Schema
export const ServicesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => ServicesPropertiesSchema)),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
  location: Schema.String,
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  etag: Schema.optional(Schema.String),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
    }),
  ),
});
export type ServicesUpdateOutput = typeof ServicesUpdateOutput.Type;

// The operation
/**
 * Update the metadata of a service instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ServicesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesUpdateInput,
  outputSchema: ServicesUpdateOutput,
}));
// Input Schema
export const WorkspacePrivateEndpointConnectionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
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
    properties: Schema.optional(
      Schema.suspend(() => PrivateEndpointConnectionPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2024-03-31",
      longRunning: {},
    }),
  );
export type WorkspacePrivateEndpointConnectionsCreateOrUpdateInput =
  typeof WorkspacePrivateEndpointConnectionsCreateOrUpdateInput.Type;

// Output Schema
export const WorkspacePrivateEndpointConnectionsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    properties: Schema.optional(
      Schema.suspend(() => PrivateEndpointConnectionPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type WorkspacePrivateEndpointConnectionsCreateOrUpdateOutput =
  typeof WorkspacePrivateEndpointConnectionsCreateOrUpdateOutput.Type;

// The operation
/**
 * Update the state of the specified private endpoint connection associated with the workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
 */
export const WorkspacePrivateEndpointConnectionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkspacePrivateEndpointConnectionsCreateOrUpdateInput,
    outputSchema: WorkspacePrivateEndpointConnectionsCreateOrUpdateOutput,
  }));
// Input Schema
export const WorkspacePrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2024-03-31",
      longRunning: {},
    }),
  );
export type WorkspacePrivateEndpointConnectionsDeleteInput =
  typeof WorkspacePrivateEndpointConnectionsDeleteInput.Type;

// Output Schema
export const WorkspacePrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WorkspacePrivateEndpointConnectionsDeleteOutput =
  typeof WorkspacePrivateEndpointConnectionsDeleteOutput.Type;

// The operation
/**
 * Deletes a private endpoint connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
 */
export const WorkspacePrivateEndpointConnectionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkspacePrivateEndpointConnectionsDeleteInput,
    outputSchema: WorkspacePrivateEndpointConnectionsDeleteOutput,
  }));
// Input Schema
export const WorkspacePrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2024-03-31",
    }),
  );
export type WorkspacePrivateEndpointConnectionsGetInput =
  typeof WorkspacePrivateEndpointConnectionsGetInput.Type;

// Output Schema
export const WorkspacePrivateEndpointConnectionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    properties: Schema.optional(
      Schema.suspend(() => PrivateEndpointConnectionPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type WorkspacePrivateEndpointConnectionsGetOutput =
  typeof WorkspacePrivateEndpointConnectionsGetOutput.Type;

// The operation
/**
 * Gets the specified private endpoint connection associated with the workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
 */
export const WorkspacePrivateEndpointConnectionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkspacePrivateEndpointConnectionsGetInput,
    outputSchema: WorkspacePrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export const WorkspacePrivateEndpointConnectionsListByWorkspaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/privateEndpointConnections",
      apiVersion: "2024-03-31",
    }),
  );
export type WorkspacePrivateEndpointConnectionsListByWorkspaceInput =
  typeof WorkspacePrivateEndpointConnectionsListByWorkspaceInput.Type;

// Output Schema
export const WorkspacePrivateEndpointConnectionsListByWorkspaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.suspend(() => PrivateEndpointConnectionDescriptionSchema),
      ),
    ),
  });
export type WorkspacePrivateEndpointConnectionsListByWorkspaceOutput =
  typeof WorkspacePrivateEndpointConnectionsListByWorkspaceOutput.Type;

// The operation
/**
 * Lists all private endpoint connections for a workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const WorkspacePrivateEndpointConnectionsListByWorkspace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkspacePrivateEndpointConnectionsListByWorkspaceInput,
    outputSchema: WorkspacePrivateEndpointConnectionsListByWorkspaceOutput,
  }));
// Input Schema
export const WorkspacePrivateLinkResourcesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/privateLinkResources/{groupName}",
      apiVersion: "2024-03-31",
    }),
  );
export type WorkspacePrivateLinkResourcesGetInput =
  typeof WorkspacePrivateLinkResourcesGetInput.Type;

// Output Schema
export const WorkspacePrivateLinkResourcesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    properties: Schema.optional(
      Schema.suspend(() => PrivateLinkResourcePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type WorkspacePrivateLinkResourcesGetOutput =
  typeof WorkspacePrivateLinkResourcesGetOutput.Type;

// The operation
/**
 * Gets a private link resource that need to be created for a workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param groupName - The name of the private link resource group.
 */
export const WorkspacePrivateLinkResourcesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkspacePrivateLinkResourcesGetInput,
    outputSchema: WorkspacePrivateLinkResourcesGetOutput,
  }));
// Input Schema
export const WorkspacePrivateLinkResourcesListByWorkspaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/privateLinkResources",
      apiVersion: "2024-03-31",
    }),
  );
export type WorkspacePrivateLinkResourcesListByWorkspaceInput =
  typeof WorkspacePrivateLinkResourcesListByWorkspaceInput.Type;

// Output Schema
export const WorkspacePrivateLinkResourcesListByWorkspaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => PrivateLinkResourceDescriptionSchema)),
    ),
  });
export type WorkspacePrivateLinkResourcesListByWorkspaceOutput =
  typeof WorkspacePrivateLinkResourcesListByWorkspaceOutput.Type;

// The operation
/**
 * Gets the private link resources that need to be created for a workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const WorkspacePrivateLinkResourcesListByWorkspace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkspacePrivateLinkResourcesListByWorkspaceInput,
    outputSchema: WorkspacePrivateLinkResourcesListByWorkspaceOutput,
  }));
// Input Schema
export const WorkspacesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.suspend(() => ProvisioningStateSchema),
        ),
        privateEndpointConnections: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
        publicNetworkAccess: Schema.optional(
          Schema.suspend(() => ResourcePublicNetworkAccessSchema),
        ),
      }),
    ),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}",
      apiVersion: "2024-03-31",
      longRunning: {},
    }),
  );
export type WorkspacesCreateOrUpdateInput =
  typeof WorkspacesCreateOrUpdateInput.Type;

// Output Schema
export const WorkspacesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.suspend(() => ProvisioningStateSchema),
        ),
        privateEndpointConnections: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
        publicNetworkAccess: Schema.optional(
          Schema.suspend(() => ResourcePublicNetworkAccessSchema),
        ),
      }),
    ),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  });
export type WorkspacesCreateOrUpdateOutput =
  typeof WorkspacesCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a workspace resource with the specified parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const WorkspacesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkspacesCreateOrUpdateInput,
    outputSchema: WorkspacesCreateOrUpdateOutput,
  }),
);
// Input Schema
export const WorkspacesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}",
    apiVersion: "2024-03-31",
    longRunning: {},
  }),
);
export type WorkspacesDeleteInput = typeof WorkspacesDeleteInput.Type;

// Output Schema
export const WorkspacesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WorkspacesDeleteOutput = typeof WorkspacesDeleteOutput.Type;

// The operation
/**
 * Deletes a specified workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const WorkspacesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesDeleteInput,
  outputSchema: WorkspacesDeleteOutput,
}));
// Input Schema
export const WorkspacesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}",
    apiVersion: "2024-03-31",
  }),
);
export type WorkspacesGetInput = typeof WorkspacesGetInput.Type;

// Output Schema
export const WorkspacesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(
        Schema.suspend(() => ProvisioningStateSchema),
      ),
      privateEndpointConnections: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            type: Schema.optional(Schema.String),
          }),
        ),
      ),
      publicNetworkAccess: Schema.optional(
        Schema.suspend(() => ResourcePublicNetworkAccessSchema),
      ),
    }),
  ),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
});
export type WorkspacesGetOutput = typeof WorkspacesGetOutput.Type;

// The operation
/**
 * Gets the properties of the specified workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const WorkspacesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesGetInput,
  outputSchema: WorkspacesGetOutput,
}));
// Input Schema
export const WorkspacesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces",
      apiVersion: "2024-03-31",
    }),
  );
export type WorkspacesListByResourceGroupInput =
  typeof WorkspacesListByResourceGroupInput.Type;

// Output Schema
export const WorkspacesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Array(Schema.suspend(() => WorkspaceSchema))),
  });
export type WorkspacesListByResourceGroupOutput =
  typeof WorkspacesListByResourceGroupOutput.Type;

// The operation
/**
 * Lists all the available workspaces under the specified resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const WorkspacesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkspacesListByResourceGroupInput,
    outputSchema: WorkspacesListByResourceGroupOutput,
  }));
// Input Schema
export const WorkspacesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HealthcareApis/workspaces",
      apiVersion: "2024-03-31",
    }),
  );
export type WorkspacesListBySubscriptionInput =
  typeof WorkspacesListBySubscriptionInput.Type;

// Output Schema
export const WorkspacesListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Array(Schema.suspend(() => WorkspaceSchema))),
  });
export type WorkspacesListBySubscriptionOutput =
  typeof WorkspacesListBySubscriptionOutput.Type;

// The operation
/**
 * Lists all the available workspaces under the specified subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const WorkspacesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkspacesListBySubscriptionInput,
    outputSchema: WorkspacesListBySubscriptionOutput,
  }));
// Input Schema
export const WorkspacesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}",
    apiVersion: "2024-03-31",
    longRunning: {},
  }),
);
export type WorkspacesUpdateInput = typeof WorkspacesUpdateInput.Type;

// Output Schema
export const WorkspacesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.suspend(() => ProvisioningStateSchema),
        ),
        privateEndpointConnections: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
        publicNetworkAccess: Schema.optional(
          Schema.suspend(() => ResourcePublicNetworkAccessSchema),
        ),
      }),
    ),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  },
);
export type WorkspacesUpdateOutput = typeof WorkspacesUpdateOutput.Type;

// The operation
/**
 * Patch workspace details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const WorkspacesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesUpdateInput,
  outputSchema: WorkspacesUpdateOutput,
}));
