/**
 * Azure Servicelinker API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Shared schemas
const DryrunResourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
const DryrunPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  parameters: Schema.optional(Schema.suspend(() => DryrunParametersSchema)),
  prerequisiteResults: Schema.optional(
    Schema.Array(Schema.suspend(() => DryrunPrerequisiteResultSchema)),
  ),
  operationPreviews: Schema.optional(
    Schema.Array(Schema.suspend(() => DryrunOperationPreviewSchema)),
  ),
  provisioningState: Schema.optional(Schema.String),
});
const DryrunParametersSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  actionName: Schema.suspend(() => DryrunActionNameSchema),
});
const DryrunActionNameSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "createOrUpdate",
]);
const DryrunPrerequisiteResultSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.suspend(() => DryrunPrerequisiteResultTypeSchema),
  });
const DryrunPrerequisiteResultTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "basicError",
    "permissionsMissing",
  ]);
const DryrunOperationPreviewSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  operationType: Schema.optional(
    Schema.Literals(["configConnection", "configNetwork", "configAuth"]),
  ),
  description: Schema.optional(Schema.String),
  action: Schema.optional(Schema.String),
  scope: Schema.optional(Schema.String),
});
const LinkerResourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const LinkerPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  targetService: Schema.optional(Schema.suspend(() => TargetServiceBaseSchema)),
  authInfo: Schema.optional(Schema.suspend(() => AuthInfoBaseSchema)),
  clientType: Schema.optional(Schema.suspend(() => ClientTypeSchema)),
  provisioningState: Schema.optional(Schema.String),
  vNetSolution: Schema.optional(Schema.suspend(() => VNetSolutionSchema)),
  secretStore: Schema.optional(Schema.suspend(() => SecretStoreSchema)),
  scope: Schema.optional(Schema.NullOr(Schema.String)),
  publicNetworkSolution: Schema.optional(
    Schema.suspend(() => PublicNetworkSolutionSchema),
  ),
  configurationInfo: Schema.optional(
    Schema.suspend(() => ConfigurationInfoSchema),
  ),
});
const TargetServiceBaseSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.suspend(() => TargetServiceTypeSchema),
});
const TargetServiceTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "AzureResource",
  "ConfluentBootstrapServer",
  "ConfluentSchemaRegistry",
  "SelfHostedServer",
]);
const AuthInfoBaseSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  authType: Schema.suspend(() => AuthTypeSchema),
  authMode: Schema.optional(Schema.suspend(() => AuthModeSchema)),
});
const AuthTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "systemAssignedIdentity",
  "userAssignedIdentity",
  "servicePrincipalSecret",
  "servicePrincipalCertificate",
  "secret",
  "accessKey",
  "userAccount",
  "easyAuthMicrosoftEntraID",
]);
const AuthModeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "optInAllAuth",
  "optOutAllAuth",
]);
const ClientTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "none",
  "dotnet",
  "java",
  "python",
  "go",
  "php",
  "ruby",
  "django",
  "nodejs",
  "springBoot",
  "kafka-springBoot",
  "jms-springBoot",
  "dapr",
]);
const VNetSolutionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(
    Schema.NullOr(Schema.Literals(["serviceEndpoint", "privateLink"])),
  ),
  deleteOrUpdateBehavior: Schema.optional(
    Schema.suspend(() => DeleteOrUpdateBehaviorSchema),
  ),
});
const DeleteOrUpdateBehaviorSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Default", "ForcedCleanup"]);
const SecretStoreSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  keyVaultId: Schema.optional(Schema.NullOr(Schema.String)),
  keyVaultSecretName: Schema.optional(Schema.NullOr(Schema.String)),
});
const PublicNetworkSolutionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  deleteOrUpdateBehavior: Schema.optional(
    Schema.suspend(() => DeleteOrUpdateBehaviorSchema),
  ),
  action: Schema.optional(Schema.suspend(() => ActionTypeSchema)),
  firewallRules: Schema.optional(Schema.suspend(() => FirewallRulesSchema)),
});
const ActionTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "enable",
  "optOut",
]);
const FirewallRulesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ipRanges: Schema.optional(Schema.Array(Schema.String)),
  azureServices: Schema.optional(Schema.suspend(() => AllowTypeSchema)),
  callerClientIP: Schema.optional(Schema.suspend(() => AllowTypeSchema)),
});
const AllowTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "true",
  "false",
]);
const ConfigurationInfoSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  deleteOrUpdateBehavior: Schema.optional(
    Schema.suspend(() => DeleteOrUpdateBehaviorSchema),
  ),
  action: Schema.optional(Schema.suspend(() => ActionTypeSchema)),
  customizedKeys: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  daprProperties: Schema.optional(Schema.suspend(() => DaprPropertiesSchema)),
  additionalConfigurations: Schema.optional(
    Schema.Record(Schema.String, Schema.String),
  ),
  additionalConnectionStringProperties: Schema.optional(
    Schema.Record(Schema.String, Schema.String),
  ),
  configurationStore: Schema.optional(
    Schema.suspend(() => ConfigurationStoreSchema),
  ),
});
const DaprPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  version: Schema.optional(Schema.NullOr(Schema.String)),
  componentType: Schema.optional(Schema.NullOr(Schema.String)),
  secretStoreComponent: Schema.optional(Schema.NullOr(Schema.String)),
  metadata: Schema.optional(
    Schema.Array(Schema.suspend(() => DaprMetadataSchema)),
  ),
  scopes: Schema.optional(Schema.Array(Schema.String)),
  runtimeVersion: Schema.optional(Schema.NullOr(Schema.String)),
  bindingComponentDirection: Schema.optional(
    Schema.NullOr(Schema.Literals(["input", "output"])),
  ),
});
const DaprMetadataSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
  secretRef: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  required: Schema.optional(Schema.Literals(["true", "false"])),
});
const ConfigurationStoreSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  appConfigurationId: Schema.optional(Schema.NullOr(Schema.String)),
});
const ValidateResultSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  linkerName: Schema.optional(Schema.NullOr(Schema.String)),
  isConnectionAvailable: Schema.optional(Schema.NullOr(Schema.Boolean)),
  reportStartTimeUtc: Schema.optional(Schema.NullOr(Schema.String)),
  reportEndTimeUtc: Schema.optional(Schema.NullOr(Schema.String)),
  sourceId: Schema.optional(Schema.NullOr(Schema.String)),
  targetId: Schema.optional(Schema.NullOr(Schema.String)),
  authType: Schema.optional(Schema.suspend(() => AuthTypeSchema)),
  validationDetail: Schema.optional(
    Schema.Array(Schema.suspend(() => ValidationResultItemSchema)),
  ),
});
const ValidationResultItemSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  description: Schema.optional(Schema.NullOr(Schema.String)),
  result: Schema.optional(
    Schema.NullOr(Schema.Literals(["success", "failure", "warning"])),
  ),
  errorMessage: Schema.optional(Schema.NullOr(Schema.String)),
  errorCode: Schema.optional(Schema.NullOr(Schema.String)),
});
const SourceConfigurationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  value: Schema.optional(Schema.NullOr(Schema.String)),
  configType: Schema.optional(
    Schema.suspend(() => LinkerConfigurationTypeSchema),
  ),
  keyVaultReferenceIdentity: Schema.optional(Schema.NullOr(Schema.String)),
  description: Schema.optional(Schema.NullOr(Schema.String)),
});
const LinkerConfigurationTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Default", "KeyVaultSecret"]);
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
const ConfigurationNameItemSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => ConfigurationNamesSchema)),
});
const ConfigurationNamesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  targetService: Schema.optional(Schema.String),
  clientType: Schema.optional(Schema.suspend(() => ClientTypeSchema)),
  authType: Schema.optional(Schema.suspend(() => AuthTypeSchema)),
  secretType: Schema.optional(Schema.suspend(() => SecretSourceTypeSchema)),
  daprProperties: Schema.optional(Schema.suspend(() => DaprPropertiesSchema)),
  names: Schema.optional(
    Schema.Array(Schema.suspend(() => ConfigurationNameSchema)),
  ),
});
const SecretSourceTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "rawValue",
  "keyVaultSecret",
]);
const ConfigurationNameSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  required: Schema.optional(Schema.Boolean),
});
const DaprConfigurationResourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => DaprConfigurationPropertiesSchema),
    ),
  });
const DaprConfigurationPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetType: Schema.optional(Schema.String),
    authType: Schema.optional(Schema.suspend(() => AuthTypeSchema)),
    daprProperties: Schema.optional(Schema.suspend(() => DaprPropertiesSchema)),
  });

// Input Schema
export const ConfigurationNamesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    $filter: Schema.optional(Schema.String),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ServiceLinker/configurationNames",
      apiVersion: "2024-04-01",
    }),
  );
export type ConfigurationNamesListInput =
  typeof ConfigurationNamesListInput.Type;

// Output Schema
export const ConfigurationNamesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => ConfigurationNameItemSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ConfigurationNamesListOutput =
  typeof ConfigurationNamesListOutput.Type;

// The operation
/**
 * Lists the configuration names generated by Service Connector for all target, client types, auth types.
 *
 * @param api-version - The API version to use for this operation.
 * @param $filter - OData filter options.
 * @param $skipToken - OData skipToken option for pagination.
 */
export const ConfigurationNamesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConfigurationNamesListInput,
    outputSchema: ConfigurationNamesListOutput,
  }),
);
// Input Schema
export const ConnectorCreateDryrunInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    dryrunName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(Schema.suspend(() => DryrunPropertiesSchema)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.ServiceLinker/locations/{location}/dryruns/{dryrunName}",
      apiVersion: "2024-04-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type ConnectorCreateDryrunInput = typeof ConnectorCreateDryrunInput.Type;

// Output Schema
export const ConnectorCreateDryrunOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => DryrunPropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ConnectorCreateDryrunOutput =
  typeof ConnectorCreateDryrunOutput.Type;

// The operation
/**
 * create a dryrun job to do necessary check before actual creation
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The name of Azure region.
 * @param api-version - The API version to use for this operation.
 * @param dryrunName - The name of dryrun.
 */
export const ConnectorCreateDryrun = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConnectorCreateDryrunInput,
    outputSchema: ConnectorCreateDryrunOutput,
  }),
);
// Input Schema
export const ConnectorCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    properties: Schema.suspend(() => LinkerPropertiesSchema),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.ServiceLinker/locations/{location}/connectors/{connectorName}",
      apiVersion: "2024-04-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type ConnectorCreateOrUpdateInput =
  typeof ConnectorCreateOrUpdateInput.Type;

// Output Schema
export const ConnectorCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => LinkerPropertiesSchema),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type ConnectorCreateOrUpdateOutput =
  typeof ConnectorCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update Connector resource.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The name of Azure region.
 * @param api-version - The API version to use for this operation.
 */
export const ConnectorCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConnectorCreateOrUpdateInput,
    outputSchema: ConnectorCreateOrUpdateOutput,
  }),
);
// Input Schema
export const ConnectorDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.ServiceLinker/locations/{location}/connectors/{connectorName}",
    apiVersion: "2024-04-01",
    longRunning: { finalStateVia: "azure-async-operation" },
  }),
);
export type ConnectorDeleteInput = typeof ConnectorDeleteInput.Type;

// Output Schema
export const ConnectorDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ConnectorDeleteOutput = typeof ConnectorDeleteOutput.Type;

// The operation
/**
 * Delete a Connector.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The name of Azure region.
 * @param api-version - The API version to use for this operation.
 */
export const ConnectorDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConnectorDeleteInput,
  outputSchema: ConnectorDeleteOutput,
}));
// Input Schema
export const ConnectorDeleteDryrunInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    dryrunName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.ServiceLinker/locations/{location}/dryruns/{dryrunName}",
      apiVersion: "2024-04-01",
    }),
  );
export type ConnectorDeleteDryrunInput = typeof ConnectorDeleteDryrunInput.Type;

// Output Schema
export const ConnectorDeleteDryrunOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ConnectorDeleteDryrunOutput =
  typeof ConnectorDeleteDryrunOutput.Type;

// The operation
/**
 * delete a dryrun job
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The name of Azure region.
 * @param api-version - The API version to use for this operation.
 * @param dryrunName - The name of dryrun.
 */
export const ConnectorDeleteDryrun = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConnectorDeleteDryrunInput,
    outputSchema: ConnectorDeleteDryrunOutput,
  }),
);
// Input Schema
export const ConnectorGenerateConfigurationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    deleteOrUpdateBehavior: Schema.optional(
      Schema.suspend(() => DeleteOrUpdateBehaviorSchema),
    ),
    action: Schema.optional(Schema.suspend(() => ActionTypeSchema)),
    customizedKeys: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    daprProperties: Schema.optional(Schema.suspend(() => DaprPropertiesSchema)),
    additionalConfigurations: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    additionalConnectionStringProperties: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    configurationStore: Schema.optional(
      Schema.suspend(() => ConfigurationStoreSchema),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.ServiceLinker/locations/{location}/connectors/{connectorName}/generateConfigurations",
      apiVersion: "2024-04-01",
    }),
  );
export type ConnectorGenerateConfigurationsInput =
  typeof ConnectorGenerateConfigurationsInput.Type;

// Output Schema
export const ConnectorGenerateConfigurationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configurations: Schema.optional(
      Schema.Array(Schema.suspend(() => SourceConfigurationSchema)),
    ),
  });
export type ConnectorGenerateConfigurationsOutput =
  typeof ConnectorGenerateConfigurationsOutput.Type;

// The operation
/**
 * Generate configurations for a Connector.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The name of Azure region.
 * @param api-version - The API version to use for this operation.
 */
export const ConnectorGenerateConfigurations =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectorGenerateConfigurationsInput,
    outputSchema: ConnectorGenerateConfigurationsOutput,
  }));
// Input Schema
export const ConnectorGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.ServiceLinker/locations/{location}/connectors/{connectorName}",
    apiVersion: "2024-04-01",
  }),
);
export type ConnectorGetInput = typeof ConnectorGetInput.Type;

// Output Schema
export const ConnectorGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => LinkerPropertiesSchema),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});
export type ConnectorGetOutput = typeof ConnectorGetOutput.Type;

// The operation
/**
 * Returns Connector resource for a given name.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The name of Azure region.
 * @param api-version - The API version to use for this operation.
 */
export const ConnectorGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConnectorGetInput,
  outputSchema: ConnectorGetOutput,
}));
// Input Schema
export const ConnectorGetDryrunInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    dryrunName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.ServiceLinker/locations/{location}/dryruns/{dryrunName}",
      apiVersion: "2024-04-01",
    }),
  );
export type ConnectorGetDryrunInput = typeof ConnectorGetDryrunInput.Type;

// Output Schema
export const ConnectorGetDryrunOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => DryrunPropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ConnectorGetDryrunOutput = typeof ConnectorGetDryrunOutput.Type;

// The operation
/**
 * get a dryrun job
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The name of Azure region.
 * @param api-version - The API version to use for this operation.
 * @param dryrunName - The name of dryrun.
 */
export const ConnectorGetDryrun = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConnectorGetDryrunInput,
  outputSchema: ConnectorGetDryrunOutput,
}));
// Input Schema
export const ConnectorListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.ServiceLinker/locations/{location}/connectors",
    apiVersion: "2024-04-01",
  }),
);
export type ConnectorListInput = typeof ConnectorListInput.Type;

// Output Schema
export const ConnectorListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.NullOr(Schema.String)),
  value: Schema.optional(
    Schema.Array(Schema.suspend(() => LinkerResourceSchema)),
  ),
});
export type ConnectorListOutput = typeof ConnectorListOutput.Type;

// The operation
/**
 * Returns list of connector which connects to the resource, which supports to config the target service during the resource provision.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The name of Azure region.
 * @param api-version - The API version to use for this operation.
 */
export const ConnectorList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConnectorListInput,
  outputSchema: ConnectorListOutput,
}));
// Input Schema
export const ConnectorListDryrunInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.ServiceLinker/locations/{location}/dryruns",
      apiVersion: "2024-04-01",
    }),
  );
export type ConnectorListDryrunInput = typeof ConnectorListDryrunInput.Type;

// Output Schema
export const ConnectorListDryrunOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.NullOr(Schema.String)),
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => DryrunResourceSchema)),
    ),
  });
export type ConnectorListDryrunOutput = typeof ConnectorListDryrunOutput.Type;

// The operation
/**
 * list dryrun jobs
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The name of Azure region.
 * @param api-version - The API version to use for this operation.
 */
export const ConnectorListDryrun = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConnectorListDryrunInput,
  outputSchema: ConnectorListDryrunOutput,
}));
// Input Schema
export const ConnectorUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(Schema.suspend(() => LinkerPropertiesSchema)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.ServiceLinker/locations/{location}/connectors/{connectorName}",
    apiVersion: "2024-04-01",
    longRunning: { finalStateVia: "azure-async-operation" },
  }),
);
export type ConnectorUpdateInput = typeof ConnectorUpdateInput.Type;

// Output Schema
export const ConnectorUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => LinkerPropertiesSchema),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});
export type ConnectorUpdateOutput = typeof ConnectorUpdateOutput.Type;

// The operation
/**
 * Operation to update an existing Connector.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The name of Azure region.
 * @param api-version - The API version to use for this operation.
 */
export const ConnectorUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConnectorUpdateInput,
  outputSchema: ConnectorUpdateOutput,
}));
// Input Schema
export const ConnectorUpdateDryrunInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    dryrunName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(Schema.suspend(() => DryrunPropertiesSchema)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.ServiceLinker/locations/{location}/dryruns/{dryrunName}",
      apiVersion: "2024-04-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type ConnectorUpdateDryrunInput = typeof ConnectorUpdateDryrunInput.Type;

// Output Schema
export const ConnectorUpdateDryrunOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => DryrunPropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ConnectorUpdateDryrunOutput =
  typeof ConnectorUpdateDryrunOutput.Type;

// The operation
/**
 * update a dryrun job to do necessary check before actual creation
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The name of Azure region.
 * @param api-version - The API version to use for this operation.
 * @param dryrunName - The name of dryrun.
 */
export const ConnectorUpdateDryrun = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConnectorUpdateDryrunInput,
    outputSchema: ConnectorUpdateDryrunOutput,
  }),
);
// Input Schema
export const ConnectorValidateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.ServiceLinker/locations/{location}/connectors/{connectorName}/validate",
    apiVersion: "2024-04-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type ConnectorValidateInput = typeof ConnectorValidateInput.Type;

// Output Schema
export const ConnectorValidateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => ValidateResultSchema)),
    resourceId: Schema.optional(Schema.NullOr(Schema.String)),
    status: Schema.optional(Schema.NullOr(Schema.String)),
  });
export type ConnectorValidateOutput = typeof ConnectorValidateOutput.Type;

// The operation
/**
 * Validate a Connector.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The name of Azure region.
 * @param api-version - The API version to use for this operation.
 */
export const ConnectorValidate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConnectorValidateInput,
  outputSchema: ConnectorValidateOutput,
}));
// Input Schema
export const LinkerCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => LinkerPropertiesSchema),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{resourceUri}/providers/Microsoft.ServiceLinker/linkers/{linkerName}",
      apiVersion: "2024-04-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type LinkerCreateOrUpdateInput = typeof LinkerCreateOrUpdateInput.Type;

// Output Schema
export const LinkerCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => LinkerPropertiesSchema),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type LinkerCreateOrUpdateOutput = typeof LinkerCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update Linker resource.
 *
 * @param api-version - The API version to use for this operation.
 */
export const LinkerCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LinkerCreateOrUpdateInput,
    outputSchema: LinkerCreateOrUpdateOutput,
  }),
);
// Input Schema
export const LinkerDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "DELETE",
    path: "/{resourceUri}/providers/Microsoft.ServiceLinker/linkers/{linkerName}",
    apiVersion: "2024-04-01",
    longRunning: { finalStateVia: "azure-async-operation" },
  }),
);
export type LinkerDeleteInput = typeof LinkerDeleteInput.Type;

// Output Schema
export const LinkerDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type LinkerDeleteOutput = typeof LinkerDeleteOutput.Type;

// The operation
/**
 * Delete a Linker.
 *
 * @param api-version - The API version to use for this operation.
 */
export const LinkerDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LinkerDeleteInput,
  outputSchema: LinkerDeleteOutput,
}));
// Input Schema
export const LinkerGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.ServiceLinker/linkers/{linkerName}",
    apiVersion: "2024-04-01",
  }),
);
export type LinkerGetInput = typeof LinkerGetInput.Type;

// Output Schema
export const LinkerGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => LinkerPropertiesSchema),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});
export type LinkerGetOutput = typeof LinkerGetOutput.Type;

// The operation
/**
 * Returns Linker resource for a given name.
 *
 * @param api-version - The API version to use for this operation.
 */
export const LinkerGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LinkerGetInput,
  outputSchema: LinkerGetOutput,
}));
// Input Schema
export const LinkerListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.ServiceLinker/linkers",
    apiVersion: "2024-04-01",
  }),
);
export type LinkerListInput = typeof LinkerListInput.Type;

// Output Schema
export const LinkerListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.NullOr(Schema.String)),
  value: Schema.optional(
    Schema.Array(Schema.suspend(() => LinkerResourceSchema)),
  ),
});
export type LinkerListOutput = typeof LinkerListOutput.Type;

// The operation
/**
 * Returns list of Linkers which connects to the resource. which supports to config both application and target service during the resource provision.
 *
 * @param api-version - The API version to use for this operation.
 */
export const LinkerList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LinkerListInput,
  outputSchema: LinkerListOutput,
}));
// Input Schema
export const LinkerListConfigurationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceUri}/providers/Microsoft.ServiceLinker/linkers/{linkerName}/listConfigurations",
      apiVersion: "2024-04-01",
    }),
  );
export type LinkerListConfigurationsInput =
  typeof LinkerListConfigurationsInput.Type;

// Output Schema
export const LinkerListConfigurationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configurations: Schema.optional(
      Schema.Array(Schema.suspend(() => SourceConfigurationSchema)),
    ),
  });
export type LinkerListConfigurationsOutput =
  typeof LinkerListConfigurationsOutput.Type;

// The operation
/**
 * list source configurations for a Linker.
 *
 * @param api-version - The API version to use for this operation.
 */
export const LinkerListConfigurations = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LinkerListConfigurationsInput,
    outputSchema: LinkerListConfigurationsOutput,
  }),
);
// Input Schema
export const LinkersCreateDryrunInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryrunName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(Schema.suspend(() => DryrunPropertiesSchema)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{resourceUri}/providers/Microsoft.ServiceLinker/dryruns/{dryrunName}",
      apiVersion: "2024-04-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type LinkersCreateDryrunInput = typeof LinkersCreateDryrunInput.Type;

// Output Schema
export const LinkersCreateDryrunOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => DryrunPropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type LinkersCreateDryrunOutput = typeof LinkersCreateDryrunOutput.Type;

// The operation
/**
 * create a dryrun job to do necessary check before actual creation
 *
 * @param api-version - The API version to use for this operation.
 * @param dryrunName - The name of dryrun.
 */
export const LinkersCreateDryrun = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LinkersCreateDryrunInput,
  outputSchema: LinkersCreateDryrunOutput,
}));
// Input Schema
export const LinkersDeleteDryrunInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryrunName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/{resourceUri}/providers/Microsoft.ServiceLinker/dryruns/{dryrunName}",
      apiVersion: "2024-04-01",
    }),
  );
export type LinkersDeleteDryrunInput = typeof LinkersDeleteDryrunInput.Type;

// Output Schema
export const LinkersDeleteDryrunOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type LinkersDeleteDryrunOutput = typeof LinkersDeleteDryrunOutput.Type;

// The operation
/**
 * delete a dryrun job
 *
 * @param api-version - The API version to use for this operation.
 * @param dryrunName - The name of dryrun.
 */
export const LinkersDeleteDryrun = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LinkersDeleteDryrunInput,
  outputSchema: LinkersDeleteDryrunOutput,
}));
// Input Schema
export const LinkersGenerateConfigurationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deleteOrUpdateBehavior: Schema.optional(
      Schema.suspend(() => DeleteOrUpdateBehaviorSchema),
    ),
    action: Schema.optional(Schema.suspend(() => ActionTypeSchema)),
    customizedKeys: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    daprProperties: Schema.optional(Schema.suspend(() => DaprPropertiesSchema)),
    additionalConfigurations: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    additionalConnectionStringProperties: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    configurationStore: Schema.optional(
      Schema.suspend(() => ConfigurationStoreSchema),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceUri}/providers/Microsoft.ServiceLinker/linkers/{linkerName}/generateConfigurations",
      apiVersion: "2024-04-01",
    }),
  );
export type LinkersGenerateConfigurationsInput =
  typeof LinkersGenerateConfigurationsInput.Type;

// Output Schema
export const LinkersGenerateConfigurationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configurations: Schema.optional(
      Schema.Array(Schema.suspend(() => SourceConfigurationSchema)),
    ),
  });
export type LinkersGenerateConfigurationsOutput =
  typeof LinkersGenerateConfigurationsOutput.Type;

// The operation
/**
 * Generate configurations for a Linker.
 *
 * @param api-version - The API version to use for this operation.
 */
export const LinkersGenerateConfigurations =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LinkersGenerateConfigurationsInput,
    outputSchema: LinkersGenerateConfigurationsOutput,
  }));
// Input Schema
export const LinkersGetDryrunInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dryrunName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.ServiceLinker/dryruns/{dryrunName}",
    apiVersion: "2024-04-01",
  }),
);
export type LinkersGetDryrunInput = typeof LinkersGetDryrunInput.Type;

// Output Schema
export const LinkersGetDryrunOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.optional(Schema.suspend(() => DryrunPropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
export type LinkersGetDryrunOutput = typeof LinkersGetDryrunOutput.Type;

// The operation
/**
 * get a dryrun job
 *
 * @param api-version - The API version to use for this operation.
 * @param dryrunName - The name of dryrun.
 */
export const LinkersGetDryrun = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LinkersGetDryrunInput,
  outputSchema: LinkersGetDryrunOutput,
}));
// Input Schema
export const LinkersListDaprConfigurationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.ServiceLinker/daprConfigurations",
      apiVersion: "2024-04-01",
    }),
  );
export type LinkersListDaprConfigurationsInput =
  typeof LinkersListDaprConfigurationsInput.Type;

// Output Schema
export const LinkersListDaprConfigurationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => DaprConfigurationResourceSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type LinkersListDaprConfigurationsOutput =
  typeof LinkersListDaprConfigurationsOutput.Type;

// The operation
/**
 * List the dapr configuration supported by Service Connector.
 *
 * @param api-version - The API version to use for this operation.
 */
export const LinkersListDaprConfigurations =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LinkersListDaprConfigurationsInput,
    outputSchema: LinkersListDaprConfigurationsOutput,
  }));
// Input Schema
export const LinkersListDryrunInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.ServiceLinker/dryruns",
    apiVersion: "2024-04-01",
  }),
);
export type LinkersListDryrunInput = typeof LinkersListDryrunInput.Type;

// Output Schema
export const LinkersListDryrunOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.NullOr(Schema.String)),
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => DryrunResourceSchema)),
    ),
  });
export type LinkersListDryrunOutput = typeof LinkersListDryrunOutput.Type;

// The operation
/**
 * list dryrun jobs
 *
 * @param api-version - The API version to use for this operation.
 */
export const LinkersListDryrun = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LinkersListDryrunInput,
  outputSchema: LinkersListDryrunOutput,
}));
// Input Schema
export const LinkersUpdateDryrunInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryrunName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(Schema.suspend(() => DryrunPropertiesSchema)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/{resourceUri}/providers/Microsoft.ServiceLinker/dryruns/{dryrunName}",
      apiVersion: "2024-04-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type LinkersUpdateDryrunInput = typeof LinkersUpdateDryrunInput.Type;

// Output Schema
export const LinkersUpdateDryrunOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => DryrunPropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type LinkersUpdateDryrunOutput = typeof LinkersUpdateDryrunOutput.Type;

// The operation
/**
 * add a dryrun job to do necessary check before actual creation
 *
 * @param api-version - The API version to use for this operation.
 * @param dryrunName - The name of dryrun.
 */
export const LinkersUpdateDryrun = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LinkersUpdateDryrunInput,
  outputSchema: LinkersUpdateDryrunOutput,
}));
// Input Schema
export const LinkerUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => LinkerPropertiesSchema)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/{resourceUri}/providers/Microsoft.ServiceLinker/linkers/{linkerName}",
    apiVersion: "2024-04-01",
    longRunning: { finalStateVia: "azure-async-operation" },
  }),
);
export type LinkerUpdateInput = typeof LinkerUpdateInput.Type;

// Output Schema
export const LinkerUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => LinkerPropertiesSchema),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});
export type LinkerUpdateOutput = typeof LinkerUpdateOutput.Type;

// The operation
/**
 * Operation to update an existing Linker.
 *
 * @param api-version - The API version to use for this operation.
 */
export const LinkerUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LinkerUpdateInput,
  outputSchema: LinkerUpdateOutput,
}));
// Input Schema
export const LinkerValidateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "POST",
    path: "/{resourceUri}/providers/Microsoft.ServiceLinker/linkers/{linkerName}/validateLinker",
    apiVersion: "2024-04-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type LinkerValidateInput = typeof LinkerValidateInput.Type;

// Output Schema
export const LinkerValidateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => ValidateResultSchema)),
  resourceId: Schema.optional(Schema.NullOr(Schema.String)),
  status: Schema.optional(Schema.NullOr(Schema.String)),
});
export type LinkerValidateOutput = typeof LinkerValidateOutput.Type;

// The operation
/**
 * Validate a Linker.
 *
 * @param api-version - The API version to use for this operation.
 */
export const LinkerValidate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LinkerValidateInput,
  outputSchema: LinkerValidateOutput,
}));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ServiceLinker/operations",
    apiVersion: "2024-04-01",
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
 * Lists the available ServiceLinker REST API operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
