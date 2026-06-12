/**
 * Azure Monitor API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Shared schemas
const ScheduledQueryRuleResourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    identity: Schema.optional(Schema.suspend(() => IdentitySchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    kind: Schema.optional(
      Schema.Literals(["LogAlert", "SimpleLogAlert", "LogToMetric"]),
    ),
    etag: Schema.optional(Schema.String),
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
    properties: Schema.suspend(() => ScheduledQueryRulePropertiesSchema),
  });
const IdentitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  principalId: Schema.optional(Schema.String),
  tenantId: Schema.optional(Schema.String),
  type: Schema.Literals(["SystemAssigned", "UserAssigned", "None"]),
  userAssignedIdentities: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => UserIdentityPropertiesSchema),
    ),
  ),
});
const UserIdentityPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  principalId: Schema.optional(Schema.String),
  clientId: Schema.optional(Schema.String),
});
const ScheduledQueryRulePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createdWithApiVersion: Schema.optional(Schema.String),
    isLegacyLogAnalyticsRule: Schema.optional(Schema.Boolean),
    description: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.Literals([0, 1, 2, 3, 4])),
    enabled: Schema.optional(Schema.Boolean),
    scopes: Schema.optional(Schema.Array(Schema.String)),
    evaluationFrequency: Schema.optional(Schema.String),
    windowSize: Schema.optional(Schema.String),
    overrideQueryTimeRange: Schema.optional(Schema.String),
    targetResourceTypes: Schema.optional(Schema.Array(Schema.String)),
    criteria: Schema.optional(
      Schema.suspend(() => ScheduledQueryRuleCriteriaSchema),
    ),
    muteActionsDuration: Schema.optional(Schema.String),
    actions: Schema.optional(Schema.suspend(() => ActionsSchema)),
    isWorkspaceAlertsStorageConfigured: Schema.optional(Schema.Boolean),
    checkWorkspaceAlertsStorageConfigured: Schema.optional(Schema.Boolean),
    skipQueryValidation: Schema.optional(Schema.Boolean),
    autoMitigate: Schema.optional(Schema.Boolean),
    resolveConfiguration: Schema.optional(
      Schema.suspend(() => RuleResolveConfigurationSchema),
    ),
  });
const ScheduledQueryRuleCriteriaSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allOf: Schema.optional(Schema.Array(Schema.suspend(() => ConditionSchema))),
  });
const ConditionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  criterionType: Schema.optional(
    Schema.Literals(["StaticThresholdCriterion", "DynamicThresholdCriterion"]),
  ),
  query: Schema.optional(Schema.String),
  timeAggregation: Schema.optional(
    Schema.Literals(["Count", "Average", "Minimum", "Maximum", "Total"]),
  ),
  metricMeasureColumn: Schema.optional(Schema.String),
  resourceIdColumn: Schema.optional(Schema.String),
  dimensions: Schema.optional(
    Schema.Array(Schema.suspend(() => DimensionSchema)),
  ),
  operator: Schema.optional(
    Schema.Literals([
      "Equals",
      "GreaterThan",
      "GreaterThanOrEqual",
      "LessThan",
      "LessThanOrEqual",
      "GreaterOrLessThan",
    ]),
  ),
  threshold: Schema.optional(Schema.Number),
  alertSensitivity: Schema.optional(Schema.String),
  ignoreDataBefore: Schema.optional(Schema.String),
  failingPeriods: Schema.optional(
    Schema.Struct({
      numberOfEvaluationPeriods: Schema.optional(Schema.Number),
      minFailingPeriodsToAlert: Schema.optional(Schema.Number),
    }),
  ),
  metricName: Schema.optional(Schema.String),
  minRecurrenceCount: Schema.optional(Schema.Number),
});
const DimensionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  operator: Schema.Literals(["Include", "Exclude"]),
  values: Schema.Array(Schema.String),
});
const ActionsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  actionGroups: Schema.optional(Schema.Array(Schema.String)),
  customProperties: Schema.optional(
    Schema.Record(Schema.String, Schema.String),
  ),
  actionProperties: Schema.optional(
    Schema.Record(Schema.String, Schema.String),
  ),
});
const RuleResolveConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    autoResolved: Schema.optional(Schema.Boolean),
    timeToResolve: Schema.optional(Schema.String),
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
const PipelineGroupSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
const PipelineGroupPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    replicas: Schema.optional(Schema.Number),
    receivers: Schema.Array(Schema.suspend(() => ReceiverSchema)),
    processors: Schema.Array(Schema.suspend(() => ProcessorSchema)),
    exporters: Schema.Array(Schema.suspend(() => ExporterSchema)),
    service: Schema.suspend(() => ServiceSchema),
    executionPlacement: Schema.optional(
      Schema.suspend(() => ExecutionPlacementSchema),
    ),
    tlsConfigurations: Schema.optional(
      Schema.Array(Schema.suspend(() => TlsConfigurationSchema)),
    ),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  },
);
const ReceiverSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.suspend(() => ReceiverTypeSchema),
  name: Schema.String,
  tlsConfiguration: Schema.optional(Schema.String),
  syslog: Schema.optional(Schema.suspend(() => SyslogReceiverSchema)),
  otlp: Schema.optional(Schema.suspend(() => OtlpReceiverSchema)),
});
const ReceiverTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Syslog",
  "OTLP",
]);
const SyslogReceiverSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  endpoint: Schema.String,
  allowedFormats: Schema.optional(
    Schema.Array(Schema.suspend(() => AllowedFormatsSchema)),
  ),
  transportProtocol: Schema.optional(Schema.Literals(["tcp", "udp"])),
  allowSkipPriHeader: Schema.optional(Schema.Boolean),
});
const AllowedFormatsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "all",
  "syslogRfc3164",
  "syslogRfc5424",
  "cefRfc3164",
  "cefRfc5424",
  "rawCef",
]);
const OtlpReceiverSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  endpoint: Schema.String,
});
const ProcessorSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.suspend(() => ProcessorTypeSchema),
  name: Schema.String,
  batch: Schema.optional(Schema.suspend(() => BatchProcessorSchema)),
  transformLanguage: Schema.optional(
    Schema.suspend(() => TransformLanguageProcessorSchema),
  ),
});
const ProcessorTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Batch",
  "TransformLanguage",
  "MicrosoftSyslog",
  "MicrosoftCommonSecurityLog",
]);
const BatchProcessorSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  batchSize: Schema.optional(Schema.Number),
  timeout: Schema.optional(Schema.Number),
});
const TransformLanguageProcessorSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transformStatement: Schema.String,
  });
const ExporterSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.suspend(() => ExporterTypeSchema),
  name: Schema.String,
  azureMonitorWorkspaceLogs: Schema.optional(
    Schema.suspend(() => AzureMonitorWorkspaceLogsExporterSchema),
  ),
});
const ExporterTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "AzureMonitorWorkspaceLogs",
]);
const AzureMonitorWorkspaceLogsExporterSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    api: Schema.suspend(() => AzureMonitorWorkspaceLogsApiConfigSchema),
    persistence: Schema.optional(
      Schema.suspend(() => ExporterPersistenceConfigurationSchema),
    ),
  });
const AzureMonitorWorkspaceLogsApiConfigSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataCollectionEndpointUrl: Schema.String,
    stream: Schema.String,
    dataCollectionRule: Schema.String,
    schema: Schema.suspend(() => SchemaMapSchema),
  });
const SchemaMapSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  recordMap: Schema.Array(Schema.suspend(() => RecordMapSchema)),
  resourceMap: Schema.optional(
    Schema.Array(Schema.suspend(() => ResourceMapSchema)),
  ),
  scopeMap: Schema.optional(Schema.Array(Schema.suspend(() => ScopeMapSchema))),
});
const RecordMapSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  from: Schema.String,
  to: Schema.String,
});
const ResourceMapSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  from: Schema.String,
  to: Schema.String,
});
const ScopeMapSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  from: Schema.String,
  to: Schema.String,
});
const ExporterPersistenceConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxStorageUsage: Schema.optional(Schema.Number),
    retentionPeriod: Schema.optional(Schema.Number),
  });
const ServiceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pipelines: Schema.Array(Schema.suspend(() => PipelineSchema)),
  persistence: Schema.optional(
    Schema.suspend(() => PersistenceConfigurationsSchema),
  ),
});
const PipelineSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  type: Schema.suspend(() => PipelineTypeSchema),
  receivers: Schema.Array(Schema.String),
  processors: Schema.optional(Schema.Array(Schema.String)),
  exporters: Schema.Array(Schema.String),
});
const PipelineTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Logs",
]);
const PersistenceConfigurationsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    persistentVolumeName: Schema.String,
  });
const ExecutionPlacementSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  constraints: Schema.optional(
    Schema.Array(Schema.suspend(() => PlacementConstraintSchema)),
  ),
  distribution: Schema.optional(Schema.suspend(() => DistributionPolicySchema)),
});
const PlacementConstraintSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  capability: Schema.String,
  operator: Schema.suspend(() => CapabilityOperatorSchema),
  values: Schema.optional(Schema.Array(Schema.String)),
});
const CapabilityOperatorSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "In",
  "NotIn",
  "Exists",
  "DoesNotExist",
]);
const DistributionPolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  maxInstancesPerHost: Schema.optional(Schema.Number),
});
const TlsConfigurationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  mode: Schema.optional(
    Schema.Literals(["disabled", "serverOnly", "mutualTls"]),
  ),
  tlsCertificate: Schema.optional(
    Schema.suspend(() => CertificateWithKeySchema),
  ),
  clientCa: Schema.optional(Schema.suspend(() => CertificateSourceSchema)),
});
const CertificateWithKeySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  certificate: Schema.suspend(() => CertificateSourceSchema),
  privateKey: Schema.suspend(() => PrivateKeySourceSchema),
});
const CertificateSourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.suspend(() => CertificateSourceTypeSchema),
  location: Schema.String,
  subLocation: Schema.String,
});
const CertificateSourceTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(
  ["kubernetesSecret", "kubernetesConfigMap"],
);
const PrivateKeySourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.suspend(() => PrivateKeySourceTypeSchema),
  location: Schema.String,
  subLocation: Schema.String,
});
const PrivateKeySourceTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "kubernetesSecret",
]);
const ProvisioningStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Succeeded",
  "Failed",
  "Canceled",
  "Creating",
  "Deleting",
]);
const Azure_ResourceManager_CommonTypes_ExtendedLocationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    type: Schema.suspend(
      () => Azure_ResourceManager_CommonTypes_ExtendedLocationTypeSchema,
    ),
  });
const Azure_ResourceManager_CommonTypes_ExtendedLocationTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["EdgeZone", "CustomLocation"]);
const PipelineGroupPropertiesUpdateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    replicas: Schema.optional(Schema.Number),
    receivers: Schema.optional(
      Schema.Array(Schema.suspend(() => ReceiverSchema)),
    ),
    processors: Schema.optional(
      Schema.Array(Schema.suspend(() => ProcessorSchema)),
    ),
    exporters: Schema.optional(
      Schema.Array(Schema.suspend(() => ExporterSchema)),
    ),
    service: Schema.optional(Schema.suspend(() => ServiceUpdateSchema)),
    executionPlacement: Schema.optional(
      Schema.suspend(() => ExecutionPlacementSchema),
    ),
    tlsConfigurations: Schema.optional(
      Schema.Array(Schema.suspend(() => TlsConfigurationSchema)),
    ),
  });
const ServiceUpdateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pipelines: Schema.optional(
    Schema.Array(Schema.suspend(() => PipelineSchema)),
  ),
  persistence: Schema.optional(
    Schema.suspend(() => PersistenceConfigurationsUpdateSchema),
  ),
});
const PersistenceConfigurationsUpdateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    persistentVolumeName: Schema.optional(Schema.String),
  });

// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Monitor/operations",
    apiVersion: "2026-04-01",
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
export const PipelineGroupsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    pipelineGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => PipelineGroupPropertiesSchema),
    ),
    extendedLocation: Schema.optional(
      Schema.suspend(
        () => Azure_ResourceManager_CommonTypes_ExtendedLocationSchema,
      ),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/pipelineGroups/{pipelineGroupName}",
      apiVersion: "2026-04-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type PipelineGroupsCreateOrUpdateInput =
  typeof PipelineGroupsCreateOrUpdateInput.Type;

// Output Schema
export const PipelineGroupsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PipelineGroupPropertiesSchema),
    ),
    extendedLocation: Schema.optional(
      Schema.suspend(
        () => Azure_ResourceManager_CommonTypes_ExtendedLocationSchema,
      ),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PipelineGroupsCreateOrUpdateOutput =
  typeof PipelineGroupsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update a pipeline group instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param pipelineGroupName - The name of pipeline group. The name is case insensitive.
 */
export const PipelineGroupsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PipelineGroupsCreateOrUpdateInput,
    outputSchema: PipelineGroupsCreateOrUpdateOutput,
  }));
// Input Schema
export const PipelineGroupsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    pipelineGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/pipelineGroups/{pipelineGroupName}",
      apiVersion: "2026-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type PipelineGroupsDeleteInput = typeof PipelineGroupsDeleteInput.Type;

// Output Schema
export const PipelineGroupsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PipelineGroupsDeleteOutput = typeof PipelineGroupsDeleteOutput.Type;

// The operation
/**
 * Delete a pipeline group instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param pipelineGroupName - The name of pipeline group. The name is case insensitive.
 */
export const PipelineGroupsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PipelineGroupsDeleteInput,
    outputSchema: PipelineGroupsDeleteOutput,
  }),
);
// Input Schema
export const PipelineGroupsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    pipelineGroupName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/pipelineGroups/{pipelineGroupName}",
    apiVersion: "2026-04-01",
  }),
);
export type PipelineGroupsGetInput = typeof PipelineGroupsGetInput.Type;

// Output Schema
export const PipelineGroupsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PipelineGroupPropertiesSchema),
    ),
    extendedLocation: Schema.optional(
      Schema.suspend(
        () => Azure_ResourceManager_CommonTypes_ExtendedLocationSchema,
      ),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PipelineGroupsGetOutput = typeof PipelineGroupsGetOutput.Type;

// The operation
/**
 * Returns the specific pipeline group instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param pipelineGroupName - The name of pipeline group. The name is case insensitive.
 */
export const PipelineGroupsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PipelineGroupsGetInput,
  outputSchema: PipelineGroupsGetOutput,
}));
// Input Schema
export const PipelineGroupsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/pipelineGroups",
      apiVersion: "2026-04-01",
    }),
  );
export type PipelineGroupsListByResourceGroupInput =
  typeof PipelineGroupsListByResourceGroupInput.Type;

// Output Schema
export const PipelineGroupsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => PipelineGroupSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type PipelineGroupsListByResourceGroupOutput =
  typeof PipelineGroupsListByResourceGroupOutput.Type;

// The operation
/**
 * Lists all workspaces in the specified resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const PipelineGroupsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PipelineGroupsListByResourceGroupInput,
    outputSchema: PipelineGroupsListByResourceGroupOutput,
  }));
// Input Schema
export const PipelineGroupsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Monitor/pipelineGroups",
      apiVersion: "2026-04-01",
    }),
  );
export type PipelineGroupsListBySubscriptionInput =
  typeof PipelineGroupsListBySubscriptionInput.Type;

// Output Schema
export const PipelineGroupsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => PipelineGroupSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type PipelineGroupsListBySubscriptionOutput =
  typeof PipelineGroupsListBySubscriptionOutput.Type;

// The operation
/**
 * Lists all workspaces in the specified subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const PipelineGroupsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PipelineGroupsListBySubscriptionInput,
    outputSchema: PipelineGroupsListBySubscriptionOutput,
  }));
// Input Schema
export const PipelineGroupsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    pipelineGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => PipelineGroupPropertiesUpdateSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/pipelineGroups/{pipelineGroupName}",
      apiVersion: "2026-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type PipelineGroupsUpdateInput = typeof PipelineGroupsUpdateInput.Type;

// Output Schema
export const PipelineGroupsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PipelineGroupPropertiesSchema),
    ),
    extendedLocation: Schema.optional(
      Schema.suspend(
        () => Azure_ResourceManager_CommonTypes_ExtendedLocationSchema,
      ),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PipelineGroupsUpdateOutput = typeof PipelineGroupsUpdateOutput.Type;

// The operation
/**
 * Updates a pipeline group instance
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param pipelineGroupName - The name of pipeline group. The name is case insensitive.
 */
export const PipelineGroupsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PipelineGroupsUpdateInput,
    outputSchema: PipelineGroupsUpdateOutput,
  }),
);
// Input Schema
export const ScheduledQueryRulesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    identity: Schema.optional(Schema.suspend(() => IdentitySchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    kind: Schema.optional(
      Schema.Literals(["LogAlert", "SimpleLogAlert", "LogToMetric"]),
    ),
    etag: Schema.optional(Schema.String),
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
    properties: Schema.suspend(() => ScheduledQueryRulePropertiesSchema),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/scheduledQueryRules/{ruleName}",
      apiVersion: "2026-03-01",
    }),
  );
export type ScheduledQueryRulesCreateOrUpdateInput =
  typeof ScheduledQueryRulesCreateOrUpdateInput.Type;

// Output Schema
export const ScheduledQueryRulesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    identity: Schema.optional(Schema.suspend(() => IdentitySchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    kind: Schema.optional(
      Schema.Literals(["LogAlert", "SimpleLogAlert", "LogToMetric"]),
    ),
    etag: Schema.optional(Schema.String),
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
    properties: Schema.suspend(() => ScheduledQueryRulePropertiesSchema),
  });
export type ScheduledQueryRulesCreateOrUpdateOutput =
  typeof ScheduledQueryRulesCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a scheduled query rule.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const ScheduledQueryRulesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ScheduledQueryRulesCreateOrUpdateInput,
    outputSchema: ScheduledQueryRulesCreateOrUpdateOutput,
  }));
// Input Schema
export const ScheduledQueryRulesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/scheduledQueryRules/{ruleName}",
      apiVersion: "2026-03-01",
    }),
  );
export type ScheduledQueryRulesDeleteInput =
  typeof ScheduledQueryRulesDeleteInput.Type;

// Output Schema
export const ScheduledQueryRulesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ScheduledQueryRulesDeleteOutput =
  typeof ScheduledQueryRulesDeleteOutput.Type;

// The operation
/**
 * Deletes a scheduled query rule.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const ScheduledQueryRulesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ScheduledQueryRulesDeleteInput,
    outputSchema: ScheduledQueryRulesDeleteOutput,
  }),
);
// Input Schema
export const ScheduledQueryRulesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/scheduledQueryRules/{ruleName}",
      apiVersion: "2026-03-01",
    }),
  );
export type ScheduledQueryRulesGetInput =
  typeof ScheduledQueryRulesGetInput.Type;

// Output Schema
export const ScheduledQueryRulesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    identity: Schema.optional(Schema.suspend(() => IdentitySchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    kind: Schema.optional(
      Schema.Literals(["LogAlert", "SimpleLogAlert", "LogToMetric"]),
    ),
    etag: Schema.optional(Schema.String),
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
    properties: Schema.suspend(() => ScheduledQueryRulePropertiesSchema),
  });
export type ScheduledQueryRulesGetOutput =
  typeof ScheduledQueryRulesGetOutput.Type;

// The operation
/**
 * Retrieve an scheduled query rule definition.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const ScheduledQueryRulesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ScheduledQueryRulesGetInput,
    outputSchema: ScheduledQueryRulesGetOutput,
  }),
);
// Input Schema
export const ScheduledQueryRulesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/scheduledQueryRules",
      apiVersion: "2026-03-01",
    }),
  );
export type ScheduledQueryRulesListByResourceGroupInput =
  typeof ScheduledQueryRulesListByResourceGroupInput.Type;

// Output Schema
export const ScheduledQueryRulesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => ScheduledQueryRuleResourceSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ScheduledQueryRulesListByResourceGroupOutput =
  typeof ScheduledQueryRulesListByResourceGroupOutput.Type;

// The operation
/**
 * Retrieve scheduled query rule definitions in a resource group.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const ScheduledQueryRulesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ScheduledQueryRulesListByResourceGroupInput,
    outputSchema: ScheduledQueryRulesListByResourceGroupOutput,
  }));
// Input Schema
export const ScheduledQueryRulesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Insights/scheduledQueryRules",
      apiVersion: "2026-03-01",
    }),
  );
export type ScheduledQueryRulesListBySubscriptionInput =
  typeof ScheduledQueryRulesListBySubscriptionInput.Type;

// Output Schema
export const ScheduledQueryRulesListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => ScheduledQueryRuleResourceSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ScheduledQueryRulesListBySubscriptionOutput =
  typeof ScheduledQueryRulesListBySubscriptionOutput.Type;

// The operation
/**
 * Retrieve a scheduled query rule definitions in a subscription.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 */
export const ScheduledQueryRulesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ScheduledQueryRulesListBySubscriptionInput,
    outputSchema: ScheduledQueryRulesListBySubscriptionOutput,
  }));
// Input Schema
export const ScheduledQueryRulesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    identity: Schema.optional(Schema.suspend(() => IdentitySchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.suspend(() => ScheduledQueryRulePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/scheduledQueryRules/{ruleName}",
      apiVersion: "2026-03-01",
    }),
  );
export type ScheduledQueryRulesUpdateInput =
  typeof ScheduledQueryRulesUpdateInput.Type;

// Output Schema
export const ScheduledQueryRulesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    identity: Schema.optional(Schema.suspend(() => IdentitySchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    kind: Schema.optional(
      Schema.Literals(["LogAlert", "SimpleLogAlert", "LogToMetric"]),
    ),
    etag: Schema.optional(Schema.String),
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
    properties: Schema.suspend(() => ScheduledQueryRulePropertiesSchema),
  });
export type ScheduledQueryRulesUpdateOutput =
  typeof ScheduledQueryRulesUpdateOutput.Type;

// The operation
/**
 * Update a scheduled query rule.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const ScheduledQueryRulesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ScheduledQueryRulesUpdateInput,
    outputSchema: ScheduledQueryRulesUpdateOutput,
  }),
);
