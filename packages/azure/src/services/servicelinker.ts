/**
 * Azure Servicelinker API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ConfigurationNamesListInput {
  $filter?: string;
  $skipToken?: string;
}
export const ConfigurationNamesListInput =
  /*@__PURE__*/ Schema.Struct({
    $filter: Schema.optional(Schema.String),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ServiceLinker/configurationNames",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationNamesListInput>;

// Output Schema
export interface ConfigurationNamesListOutput {
  value?: {
    properties?: {
      targetService?: string;
      clientType?:
        | "none"
        | "dotnet"
        | "java"
        | "python"
        | "go"
        | "php"
        | "ruby"
        | "django"
        | "nodejs"
        | "springBoot"
        | "kafka-springBoot"
        | "jms-springBoot"
        | "dapr";
      authType?:
        | "systemAssignedIdentity"
        | "userAssignedIdentity"
        | "servicePrincipalSecret"
        | "servicePrincipalCertificate"
        | "secret"
        | "accessKey"
        | "userAccount"
        | "easyAuthMicrosoftEntraID";
      secretType?: "rawValue" | "keyVaultSecret";
      daprProperties?: {
        version?: string | null;
        componentType?: string | null;
        secretStoreComponent?: string | null;
        metadata?: {
          name?: string;
          value?: string;
          secretRef?: string;
          description?: string;
          required?: "true" | "false";
        }[];
        scopes?: string[];
        runtimeVersion?: string | null;
        bindingComponentDirection?: "input" | "output" | null;
      };
      names?: { value?: string; description?: string; required?: boolean }[];
    };
  }[];
  nextLink?: string;
}
export const ConfigurationNamesListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          properties: Schema.optional(
            Schema.Struct({
              targetService: Schema.optional(Schema.String),
              clientType: Schema.optional(
                Schema.Literals([
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
                ]),
              ),
              authType: Schema.optional(
                Schema.Literals([
                  "systemAssignedIdentity",
                  "userAssignedIdentity",
                  "servicePrincipalSecret",
                  "servicePrincipalCertificate",
                  "secret",
                  "accessKey",
                  "userAccount",
                  "easyAuthMicrosoftEntraID",
                ]),
              ),
              secretType: Schema.optional(
                Schema.Literals(["rawValue", "keyVaultSecret"]),
              ),
              daprProperties: Schema.optional(
                Schema.Struct({
                  version: Schema.optional(Schema.NullOr(Schema.String)),
                  componentType: Schema.optional(Schema.NullOr(Schema.String)),
                  secretStoreComponent: Schema.optional(
                    Schema.NullOr(Schema.String),
                  ),
                  metadata: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        name: Schema.optional(Schema.String),
                        value: Schema.optional(Schema.String),
                        secretRef: Schema.optional(Schema.String),
                        description: Schema.optional(Schema.String),
                        required: Schema.optional(
                          Schema.Literals(["true", "false"]),
                        ),
                      }),
                    ),
                  ),
                  scopes: Schema.optional(Schema.Array(Schema.String)),
                  runtimeVersion: Schema.optional(Schema.NullOr(Schema.String)),
                  bindingComponentDirection: Schema.optional(
                    Schema.NullOr(Schema.Literals(["input", "output"])),
                  ),
                }),
              ),
              names: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    value: Schema.optional(Schema.String),
                    description: Schema.optional(Schema.String),
                    required: Schema.optional(Schema.Boolean),
                  }),
                ),
              ),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ConfigurationNamesListOutput>;

// The operation
/**
 * Lists the configuration names generated by Service Connector for all target, client types, auth types.
 *
 * @param api-version - The API version to use for this operation.
 * @param $filter - OData filter options.
 * @param $skipToken - OData skipToken option for pagination.
 */
export const ConfigurationNamesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConfigurationNamesListInput,
  outputSchema: ConfigurationNamesListOutput,
}));
// Input Schema
export interface ConnectorCreateDryrunInput {
  subscriptionId: string;
  resourceGroupName: string;
  location: string;
  dryrunName: string;
  properties?: {
    parameters?: { actionName: "createOrUpdate" };
    prerequisiteResults?: { type: "basicError" | "permissionsMissing" }[];
    operationPreviews?: {
      name?: string;
      operationType?: "configConnection" | "configNetwork" | "configAuth";
      description?: string;
      action?: string;
      scope?: string;
    }[];
    provisioningState?: string;
  };
}
export const ConnectorCreateDryrunInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    dryrunName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        parameters: Schema.optional(
          Schema.Struct({
            actionName: Schema.Literals(["createOrUpdate"]),
          }),
        ),
        prerequisiteResults: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.Literals(["basicError", "permissionsMissing"]),
            }),
          ),
        ),
        operationPreviews: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              operationType: Schema.optional(
                Schema.Literals([
                  "configConnection",
                  "configNetwork",
                  "configAuth",
                ]),
              ),
              description: Schema.optional(Schema.String),
              action: Schema.optional(Schema.String),
              scope: Schema.optional(Schema.String),
            }),
          ),
        ),
        provisioningState: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.ServiceLinker/locations/{location}/dryruns/{dryrunName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<ConnectorCreateDryrunInput>;

// Output Schema
export interface ConnectorCreateDryrunOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ConnectorCreateDryrunOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<ConnectorCreateDryrunOutput>;

// The operation
/**
 * create a dryrun job to do necessary check before actual creation
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The name of Azure region.
 * @param api-version - The API version to use for this operation.
 * @param dryrunName - The name of dryrun.
 */
export const ConnectorCreateDryrun = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConnectorCreateDryrunInput,
  outputSchema: ConnectorCreateDryrunOutput,
}));
// Input Schema
export interface ConnectorCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  location: string;
  connectorName: string;
  properties: {
    targetService?: {
      type:
        | "AzureResource"
        | "ConfluentBootstrapServer"
        | "ConfluentSchemaRegistry"
        | "SelfHostedServer";
    };
    authInfo?: {
      authType:
        | "systemAssignedIdentity"
        | "userAssignedIdentity"
        | "servicePrincipalSecret"
        | "servicePrincipalCertificate"
        | "secret"
        | "accessKey"
        | "userAccount"
        | "easyAuthMicrosoftEntraID";
      authMode?: "optInAllAuth" | "optOutAllAuth";
    };
    clientType?:
      | "none"
      | "dotnet"
      | "java"
      | "python"
      | "go"
      | "php"
      | "ruby"
      | "django"
      | "nodejs"
      | "springBoot"
      | "kafka-springBoot"
      | "jms-springBoot"
      | "dapr";
    provisioningState?: string;
    vNetSolution?: {
      type?: "serviceEndpoint" | "privateLink" | null;
      deleteOrUpdateBehavior?: "Default" | "ForcedCleanup";
    };
    secretStore?: {
      keyVaultId?: string | null;
      keyVaultSecretName?: string | null;
    };
    scope?: string | null;
    publicNetworkSolution?: {
      deleteOrUpdateBehavior?: "Default" | "ForcedCleanup";
      action?: "enable" | "optOut";
      firewallRules?: {
        ipRanges?: string[];
        azureServices?: "true" | "false";
        callerClientIP?: "true" | "false";
      };
    };
    configurationInfo?: {
      deleteOrUpdateBehavior?: "Default" | "ForcedCleanup";
      action?: "enable" | "optOut";
      customizedKeys?: Record<string, string>;
      daprProperties?: {
        version?: string | null;
        componentType?: string | null;
        secretStoreComponent?: string | null;
        metadata?: {
          name?: string;
          value?: string;
          secretRef?: string;
          description?: string;
          required?: "true" | "false";
        }[];
        scopes?: string[];
        runtimeVersion?: string | null;
        bindingComponentDirection?: "input" | "output" | null;
      };
      additionalConfigurations?: Record<string, string>;
      additionalConnectionStringProperties?: Record<string, string>;
      configurationStore?: { appConfigurationId?: string | null };
    };
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ConnectorCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      targetService: Schema.optional(
        Schema.Struct({
          type: Schema.Literals([
            "AzureResource",
            "ConfluentBootstrapServer",
            "ConfluentSchemaRegistry",
            "SelfHostedServer",
          ]),
        }),
      ),
      authInfo: Schema.optional(
        Schema.Struct({
          authType: Schema.Literals([
            "systemAssignedIdentity",
            "userAssignedIdentity",
            "servicePrincipalSecret",
            "servicePrincipalCertificate",
            "secret",
            "accessKey",
            "userAccount",
            "easyAuthMicrosoftEntraID",
          ]),
          authMode: Schema.optional(
            Schema.Literals(["optInAllAuth", "optOutAllAuth"]),
          ),
        }),
      ),
      clientType: Schema.optional(
        Schema.Literals([
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
        ]),
      ),
      provisioningState: Schema.optional(Schema.String),
      vNetSolution: Schema.optional(
        Schema.Struct({
          type: Schema.optional(
            Schema.NullOr(Schema.Literals(["serviceEndpoint", "privateLink"])),
          ),
          deleteOrUpdateBehavior: Schema.optional(
            Schema.Literals(["Default", "ForcedCleanup"]),
          ),
        }),
      ),
      secretStore: Schema.optional(
        Schema.Struct({
          keyVaultId: Schema.optional(Schema.NullOr(Schema.String)),
          keyVaultSecretName: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
      scope: Schema.optional(Schema.NullOr(Schema.String)),
      publicNetworkSolution: Schema.optional(
        Schema.Struct({
          deleteOrUpdateBehavior: Schema.optional(
            Schema.Literals(["Default", "ForcedCleanup"]),
          ),
          action: Schema.optional(Schema.Literals(["enable", "optOut"])),
          firewallRules: Schema.optional(
            Schema.Struct({
              ipRanges: Schema.optional(Schema.Array(Schema.String)),
              azureServices: Schema.optional(
                Schema.Literals(["true", "false"]),
              ),
              callerClientIP: Schema.optional(
                Schema.Literals(["true", "false"]),
              ),
            }),
          ),
        }),
      ),
      configurationInfo: Schema.optional(
        Schema.Struct({
          deleteOrUpdateBehavior: Schema.optional(
            Schema.Literals(["Default", "ForcedCleanup"]),
          ),
          action: Schema.optional(Schema.Literals(["enable", "optOut"])),
          customizedKeys: Schema.optional(
            Schema.Record(Schema.String, Schema.String),
          ),
          daprProperties: Schema.optional(
            Schema.Struct({
              version: Schema.optional(Schema.NullOr(Schema.String)),
              componentType: Schema.optional(Schema.NullOr(Schema.String)),
              secretStoreComponent: Schema.optional(
                Schema.NullOr(Schema.String),
              ),
              metadata: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                    secretRef: Schema.optional(Schema.String),
                    description: Schema.optional(Schema.String),
                    required: Schema.optional(
                      Schema.Literals(["true", "false"]),
                    ),
                  }),
                ),
              ),
              scopes: Schema.optional(Schema.Array(Schema.String)),
              runtimeVersion: Schema.optional(Schema.NullOr(Schema.String)),
              bindingComponentDirection: Schema.optional(
                Schema.NullOr(Schema.Literals(["input", "output"])),
              ),
            }),
          ),
          additionalConfigurations: Schema.optional(
            Schema.Record(Schema.String, Schema.String),
          ),
          additionalConnectionStringProperties: Schema.optional(
            Schema.Record(Schema.String, Schema.String),
          ),
          configurationStore: Schema.optional(
            Schema.Struct({
              appConfigurationId: Schema.optional(Schema.NullOr(Schema.String)),
            }),
          ),
        }),
      ),
    }),
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
    }),
  ) as unknown as Schema.Codec<ConnectorCreateOrUpdateInput>;

// Output Schema
export interface ConnectorCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ConnectorCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<ConnectorCreateOrUpdateOutput>;

// The operation
/**
 * Create or update Connector resource.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The name of Azure region.
 * @param connectorName - The name of resource.
 * @param api-version - The API version to use for this operation.
 */
export const ConnectorCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConnectorCreateOrUpdateInput,
  outputSchema: ConnectorCreateOrUpdateOutput,
}));
// Input Schema
export interface ConnectorDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  location: string;
  connectorName: string;
}
export const ConnectorDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
  connectorName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.ServiceLinker/locations/{location}/connectors/{connectorName}",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<ConnectorDeleteInput>;

// Output Schema
export type ConnectorDeleteOutput = void;
export const ConnectorDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ConnectorDeleteOutput>;

// The operation
/**
 * Delete a Connector.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The name of Azure region.
 * @param connectorName - The name of resource.
 * @param api-version - The API version to use for this operation.
 */
export const ConnectorDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConnectorDeleteInput,
  outputSchema: ConnectorDeleteOutput,
}));
// Input Schema
export interface ConnectorDeleteDryrunInput {
  subscriptionId: string;
  resourceGroupName: string;
  location: string;
  dryrunName: string;
}
export const ConnectorDeleteDryrunInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    dryrunName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.ServiceLinker/locations/{location}/dryruns/{dryrunName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<ConnectorDeleteDryrunInput>;

// Output Schema
export type ConnectorDeleteDryrunOutput = void;
export const ConnectorDeleteDryrunOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ConnectorDeleteDryrunOutput>;

// The operation
/**
 * delete a dryrun job
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The name of Azure region.
 * @param api-version - The API version to use for this operation.
 * @param dryrunName - The name of dryrun.
 */
export const ConnectorDeleteDryrun = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConnectorDeleteDryrunInput,
  outputSchema: ConnectorDeleteDryrunOutput,
}));
// Input Schema
export interface ConnectorGenerateConfigurationsInput {
  subscriptionId: string;
  resourceGroupName: string;
  location: string;
  connectorName: string;
  deleteOrUpdateBehavior?: "Default" | "ForcedCleanup";
  action?: "enable" | "optOut";
  customizedKeys?: Record<string, string>;
  daprProperties?: {
    version?: string | null;
    componentType?: string | null;
    secretStoreComponent?: string | null;
    metadata?: {
      name?: string;
      value?: string;
      secretRef?: string;
      description?: string;
      required?: "true" | "false";
    }[];
    scopes?: string[];
    runtimeVersion?: string | null;
    bindingComponentDirection?: "input" | "output" | null;
  };
  additionalConfigurations?: Record<string, string>;
  additionalConnectionStringProperties?: Record<string, string>;
  configurationStore?: { appConfigurationId?: string | null };
}
export const ConnectorGenerateConfigurationsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
    deleteOrUpdateBehavior: Schema.optional(
      Schema.Literals(["Default", "ForcedCleanup"]),
    ),
    action: Schema.optional(Schema.Literals(["enable", "optOut"])),
    customizedKeys: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    daprProperties: Schema.optional(
      Schema.Struct({
        version: Schema.optional(Schema.NullOr(Schema.String)),
        componentType: Schema.optional(Schema.NullOr(Schema.String)),
        secretStoreComponent: Schema.optional(Schema.NullOr(Schema.String)),
        metadata: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              value: Schema.optional(Schema.String),
              secretRef: Schema.optional(Schema.String),
              description: Schema.optional(Schema.String),
              required: Schema.optional(Schema.Literals(["true", "false"])),
            }),
          ),
        ),
        scopes: Schema.optional(Schema.Array(Schema.String)),
        runtimeVersion: Schema.optional(Schema.NullOr(Schema.String)),
        bindingComponentDirection: Schema.optional(
          Schema.NullOr(Schema.Literals(["input", "output"])),
        ),
      }),
    ),
    additionalConfigurations: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    additionalConnectionStringProperties: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    configurationStore: Schema.optional(
      Schema.Struct({
        appConfigurationId: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.ServiceLinker/locations/{location}/connectors/{connectorName}/generateConfigurations",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<ConnectorGenerateConfigurationsInput>;

// Output Schema
export interface ConnectorGenerateConfigurationsOutput {
  configurations?: {
    name?: string;
    value?: string | null;
    configType?: "Default" | "KeyVaultSecret";
    keyVaultReferenceIdentity?: string | null;
    description?: string | null;
  }[];
}
export const ConnectorGenerateConfigurationsOutput =
  /*@__PURE__*/ Schema.Struct({
    configurations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          value: Schema.optional(Schema.NullOr(Schema.String)),
          configType: Schema.optional(
            Schema.Literals(["Default", "KeyVaultSecret"]),
          ),
          keyVaultReferenceIdentity: Schema.optional(
            Schema.NullOr(Schema.String),
          ),
          description: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ConnectorGenerateConfigurationsOutput>;

// The operation
/**
 * Generate configurations for a Connector.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The name of Azure region.
 * @param connectorName - The name of resource.
 * @param api-version - The API version to use for this operation.
 */
export const ConnectorGenerateConfigurations =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConnectorGenerateConfigurationsInput,
    outputSchema: ConnectorGenerateConfigurationsOutput,
  }));
// Input Schema
export interface ConnectorGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  location: string;
  connectorName: string;
}
export const ConnectorGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
  connectorName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.ServiceLinker/locations/{location}/connectors/{connectorName}",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<ConnectorGetInput>;

// Output Schema
export interface ConnectorGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ConnectorGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
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
}) as unknown as Schema.Codec<ConnectorGetOutput>;

// The operation
/**
 * Returns Connector resource for a given name.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The name of Azure region.
 * @param connectorName - The name of resource.
 * @param api-version - The API version to use for this operation.
 */
export const ConnectorGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConnectorGetInput,
  outputSchema: ConnectorGetOutput,
}));
// Input Schema
export interface ConnectorGetDryrunInput {
  subscriptionId: string;
  resourceGroupName: string;
  location: string;
  dryrunName: string;
}
export const ConnectorGetDryrunInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    dryrunName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.ServiceLinker/locations/{location}/dryruns/{dryrunName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<ConnectorGetDryrunInput>;

// Output Schema
export interface ConnectorGetDryrunOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ConnectorGetDryrunOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<ConnectorGetDryrunOutput>;

// The operation
/**
 * get a dryrun job
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The name of Azure region.
 * @param api-version - The API version to use for this operation.
 * @param dryrunName - The name of dryrun.
 */
export const ConnectorGetDryrun = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConnectorGetDryrunInput,
  outputSchema: ConnectorGetDryrunOutput,
}));
// Input Schema
export interface ConnectorListInput {
  subscriptionId: string;
  resourceGroupName: string;
  location: string;
}
export const ConnectorListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.ServiceLinker/locations/{location}/connectors",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<ConnectorListInput>;

// Output Schema
export interface ConnectorListOutput {
  nextLink?: string | null;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const ConnectorListOutput = /*@__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.NullOr(Schema.String)),
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            createdAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  ),
}) as unknown as Schema.Codec<ConnectorListOutput>;

// The operation
/**
 * Returns list of connector which connects to the resource, which supports to config the target service during the resource provision.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The name of Azure region.
 * @param api-version - The API version to use for this operation.
 */
export const ConnectorList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConnectorListInput,
  outputSchema: ConnectorListOutput,
}));
// Input Schema
export interface ConnectorListDryrunInput {
  subscriptionId: string;
  resourceGroupName: string;
  location: string;
}
export const ConnectorListDryrunInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.ServiceLinker/locations/{location}/dryruns",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<ConnectorListDryrunInput>;

// Output Schema
export interface ConnectorListDryrunOutput {
  nextLink?: string | null;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const ConnectorListDryrunOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.NullOr(Schema.String)),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ConnectorListDryrunOutput>;

// The operation
/**
 * list dryrun jobs
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The name of Azure region.
 * @param api-version - The API version to use for this operation.
 */
export const ConnectorListDryrun = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConnectorListDryrunInput,
  outputSchema: ConnectorListDryrunOutput,
}));
// Input Schema
export interface ConnectorUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  location: string;
  connectorName: string;
  properties?: {
    targetService?: {
      type:
        | "AzureResource"
        | "ConfluentBootstrapServer"
        | "ConfluentSchemaRegistry"
        | "SelfHostedServer";
    };
    authInfo?: {
      authType:
        | "systemAssignedIdentity"
        | "userAssignedIdentity"
        | "servicePrincipalSecret"
        | "servicePrincipalCertificate"
        | "secret"
        | "accessKey"
        | "userAccount"
        | "easyAuthMicrosoftEntraID";
      authMode?: "optInAllAuth" | "optOutAllAuth";
    };
    clientType?:
      | "none"
      | "dotnet"
      | "java"
      | "python"
      | "go"
      | "php"
      | "ruby"
      | "django"
      | "nodejs"
      | "springBoot"
      | "kafka-springBoot"
      | "jms-springBoot"
      | "dapr";
    provisioningState?: string;
    vNetSolution?: {
      type?: "serviceEndpoint" | "privateLink" | null;
      deleteOrUpdateBehavior?: "Default" | "ForcedCleanup";
    };
    secretStore?: {
      keyVaultId?: string | null;
      keyVaultSecretName?: string | null;
    };
    scope?: string | null;
    publicNetworkSolution?: {
      deleteOrUpdateBehavior?: "Default" | "ForcedCleanup";
      action?: "enable" | "optOut";
      firewallRules?: {
        ipRanges?: string[];
        azureServices?: "true" | "false";
        callerClientIP?: "true" | "false";
      };
    };
    configurationInfo?: {
      deleteOrUpdateBehavior?: "Default" | "ForcedCleanup";
      action?: "enable" | "optOut";
      customizedKeys?: Record<string, string>;
      daprProperties?: {
        version?: string | null;
        componentType?: string | null;
        secretStoreComponent?: string | null;
        metadata?: {
          name?: string;
          value?: string;
          secretRef?: string;
          description?: string;
          required?: "true" | "false";
        }[];
        scopes?: string[];
        runtimeVersion?: string | null;
        bindingComponentDirection?: "input" | "output" | null;
      };
      additionalConfigurations?: Record<string, string>;
      additionalConnectionStringProperties?: Record<string, string>;
      configurationStore?: { appConfigurationId?: string | null };
    };
  };
}
export const ConnectorUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
  connectorName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      targetService: Schema.optional(
        Schema.Struct({
          type: Schema.Literals([
            "AzureResource",
            "ConfluentBootstrapServer",
            "ConfluentSchemaRegistry",
            "SelfHostedServer",
          ]),
        }),
      ),
      authInfo: Schema.optional(
        Schema.Struct({
          authType: Schema.Literals([
            "systemAssignedIdentity",
            "userAssignedIdentity",
            "servicePrincipalSecret",
            "servicePrincipalCertificate",
            "secret",
            "accessKey",
            "userAccount",
            "easyAuthMicrosoftEntraID",
          ]),
          authMode: Schema.optional(
            Schema.Literals(["optInAllAuth", "optOutAllAuth"]),
          ),
        }),
      ),
      clientType: Schema.optional(
        Schema.Literals([
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
        ]),
      ),
      provisioningState: Schema.optional(Schema.String),
      vNetSolution: Schema.optional(
        Schema.Struct({
          type: Schema.optional(
            Schema.NullOr(Schema.Literals(["serviceEndpoint", "privateLink"])),
          ),
          deleteOrUpdateBehavior: Schema.optional(
            Schema.Literals(["Default", "ForcedCleanup"]),
          ),
        }),
      ),
      secretStore: Schema.optional(
        Schema.Struct({
          keyVaultId: Schema.optional(Schema.NullOr(Schema.String)),
          keyVaultSecretName: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
      scope: Schema.optional(Schema.NullOr(Schema.String)),
      publicNetworkSolution: Schema.optional(
        Schema.Struct({
          deleteOrUpdateBehavior: Schema.optional(
            Schema.Literals(["Default", "ForcedCleanup"]),
          ),
          action: Schema.optional(Schema.Literals(["enable", "optOut"])),
          firewallRules: Schema.optional(
            Schema.Struct({
              ipRanges: Schema.optional(Schema.Array(Schema.String)),
              azureServices: Schema.optional(
                Schema.Literals(["true", "false"]),
              ),
              callerClientIP: Schema.optional(
                Schema.Literals(["true", "false"]),
              ),
            }),
          ),
        }),
      ),
      configurationInfo: Schema.optional(
        Schema.Struct({
          deleteOrUpdateBehavior: Schema.optional(
            Schema.Literals(["Default", "ForcedCleanup"]),
          ),
          action: Schema.optional(Schema.Literals(["enable", "optOut"])),
          customizedKeys: Schema.optional(
            Schema.Record(Schema.String, Schema.String),
          ),
          daprProperties: Schema.optional(
            Schema.Struct({
              version: Schema.optional(Schema.NullOr(Schema.String)),
              componentType: Schema.optional(Schema.NullOr(Schema.String)),
              secretStoreComponent: Schema.optional(
                Schema.NullOr(Schema.String),
              ),
              metadata: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                    secretRef: Schema.optional(Schema.String),
                    description: Schema.optional(Schema.String),
                    required: Schema.optional(
                      Schema.Literals(["true", "false"]),
                    ),
                  }),
                ),
              ),
              scopes: Schema.optional(Schema.Array(Schema.String)),
              runtimeVersion: Schema.optional(Schema.NullOr(Schema.String)),
              bindingComponentDirection: Schema.optional(
                Schema.NullOr(Schema.Literals(["input", "output"])),
              ),
            }),
          ),
          additionalConfigurations: Schema.optional(
            Schema.Record(Schema.String, Schema.String),
          ),
          additionalConnectionStringProperties: Schema.optional(
            Schema.Record(Schema.String, Schema.String),
          ),
          configurationStore: Schema.optional(
            Schema.Struct({
              appConfigurationId: Schema.optional(Schema.NullOr(Schema.String)),
            }),
          ),
        }),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.ServiceLinker/locations/{location}/connectors/{connectorName}",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<ConnectorUpdateInput>;

// Output Schema
export interface ConnectorUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ConnectorUpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
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
}) as unknown as Schema.Codec<ConnectorUpdateOutput>;

// The operation
/**
 * Operation to update an existing Connector.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The name of Azure region.
 * @param connectorName - The name of resource.
 * @param api-version - The API version to use for this operation.
 */
export const ConnectorUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConnectorUpdateInput,
  outputSchema: ConnectorUpdateOutput,
}));
// Input Schema
export interface ConnectorUpdateDryrunInput {
  subscriptionId: string;
  resourceGroupName: string;
  location: string;
  dryrunName: string;
  properties?: {
    parameters?: { actionName: "createOrUpdate" };
    prerequisiteResults?: { type: "basicError" | "permissionsMissing" }[];
    operationPreviews?: {
      name?: string;
      operationType?: "configConnection" | "configNetwork" | "configAuth";
      description?: string;
      action?: string;
      scope?: string;
    }[];
    provisioningState?: string;
  };
}
export const ConnectorUpdateDryrunInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    dryrunName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        parameters: Schema.optional(
          Schema.Struct({
            actionName: Schema.Literals(["createOrUpdate"]),
          }),
        ),
        prerequisiteResults: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.Literals(["basicError", "permissionsMissing"]),
            }),
          ),
        ),
        operationPreviews: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              operationType: Schema.optional(
                Schema.Literals([
                  "configConnection",
                  "configNetwork",
                  "configAuth",
                ]),
              ),
              description: Schema.optional(Schema.String),
              action: Schema.optional(Schema.String),
              scope: Schema.optional(Schema.String),
            }),
          ),
        ),
        provisioningState: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.ServiceLinker/locations/{location}/dryruns/{dryrunName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<ConnectorUpdateDryrunInput>;

// Output Schema
export interface ConnectorUpdateDryrunOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ConnectorUpdateDryrunOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<ConnectorUpdateDryrunOutput>;

// The operation
/**
 * update a dryrun job to do necessary check before actual creation
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The name of Azure region.
 * @param api-version - The API version to use for this operation.
 * @param dryrunName - The name of dryrun.
 */
export const ConnectorUpdateDryrun = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConnectorUpdateDryrunInput,
  outputSchema: ConnectorUpdateDryrunOutput,
}));
// Input Schema
export interface ConnectorValidateInput {
  subscriptionId: string;
  resourceGroupName: string;
  location: string;
  connectorName: string;
}
export const ConnectorValidateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
  connectorName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.ServiceLinker/locations/{location}/connectors/{connectorName}/validate",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<ConnectorValidateInput>;

// Output Schema
export interface ConnectorValidateOutput {
  properties?: {
    linkerName?: string | null;
    isConnectionAvailable?: boolean | null;
    reportStartTimeUtc?: string | null;
    reportEndTimeUtc?: string | null;
    sourceId?: string | null;
    targetId?: string | null;
    authType?:
      | "systemAssignedIdentity"
      | "userAssignedIdentity"
      | "servicePrincipalSecret"
      | "servicePrincipalCertificate"
      | "secret"
      | "accessKey"
      | "userAccount"
      | "easyAuthMicrosoftEntraID";
    validationDetail?: {
      name?: string;
      description?: string | null;
      result?: "success" | "failure" | "warning" | null;
      errorMessage?: string | null;
      errorCode?: string | null;
    }[];
  };
  resourceId?: string | null;
  status?: string | null;
}
export const ConnectorValidateOutput =
  /*@__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        linkerName: Schema.optional(Schema.NullOr(Schema.String)),
        isConnectionAvailable: Schema.optional(Schema.NullOr(Schema.Boolean)),
        reportStartTimeUtc: Schema.optional(Schema.NullOr(Schema.String)),
        reportEndTimeUtc: Schema.optional(Schema.NullOr(Schema.String)),
        sourceId: Schema.optional(Schema.NullOr(Schema.String)),
        targetId: Schema.optional(Schema.NullOr(Schema.String)),
        authType: Schema.optional(
          Schema.Literals([
            "systemAssignedIdentity",
            "userAssignedIdentity",
            "servicePrincipalSecret",
            "servicePrincipalCertificate",
            "secret",
            "accessKey",
            "userAccount",
            "easyAuthMicrosoftEntraID",
          ]),
        ),
        validationDetail: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              description: Schema.optional(Schema.NullOr(Schema.String)),
              result: Schema.optional(
                Schema.NullOr(
                  Schema.Literals(["success", "failure", "warning"]),
                ),
              ),
              errorMessage: Schema.optional(Schema.NullOr(Schema.String)),
              errorCode: Schema.optional(Schema.NullOr(Schema.String)),
            }),
          ),
        ),
      }),
    ),
    resourceId: Schema.optional(Schema.NullOr(Schema.String)),
    status: Schema.optional(Schema.NullOr(Schema.String)),
  }) as unknown as Schema.Codec<ConnectorValidateOutput>;

// The operation
/**
 * Validate a Connector.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The name of Azure region.
 * @param connectorName - The name of resource.
 * @param api-version - The API version to use for this operation.
 */
export const ConnectorValidate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConnectorValidateInput,
  outputSchema: ConnectorValidateOutput,
}));
// Input Schema
export interface LinkerCreateOrUpdateInput {
  resourceUri: string;
  linkerName: string;
  properties: {
    targetService?: {
      type:
        | "AzureResource"
        | "ConfluentBootstrapServer"
        | "ConfluentSchemaRegistry"
        | "SelfHostedServer";
    };
    authInfo?: {
      authType:
        | "systemAssignedIdentity"
        | "userAssignedIdentity"
        | "servicePrincipalSecret"
        | "servicePrincipalCertificate"
        | "secret"
        | "accessKey"
        | "userAccount"
        | "easyAuthMicrosoftEntraID";
      authMode?: "optInAllAuth" | "optOutAllAuth";
    };
    clientType?:
      | "none"
      | "dotnet"
      | "java"
      | "python"
      | "go"
      | "php"
      | "ruby"
      | "django"
      | "nodejs"
      | "springBoot"
      | "kafka-springBoot"
      | "jms-springBoot"
      | "dapr";
    provisioningState?: string;
    vNetSolution?: {
      type?: "serviceEndpoint" | "privateLink" | null;
      deleteOrUpdateBehavior?: "Default" | "ForcedCleanup";
    };
    secretStore?: {
      keyVaultId?: string | null;
      keyVaultSecretName?: string | null;
    };
    scope?: string | null;
    publicNetworkSolution?: {
      deleteOrUpdateBehavior?: "Default" | "ForcedCleanup";
      action?: "enable" | "optOut";
      firewallRules?: {
        ipRanges?: string[];
        azureServices?: "true" | "false";
        callerClientIP?: "true" | "false";
      };
    };
    configurationInfo?: {
      deleteOrUpdateBehavior?: "Default" | "ForcedCleanup";
      action?: "enable" | "optOut";
      customizedKeys?: Record<string, string>;
      daprProperties?: {
        version?: string | null;
        componentType?: string | null;
        secretStoreComponent?: string | null;
        metadata?: {
          name?: string;
          value?: string;
          secretRef?: string;
          description?: string;
          required?: "true" | "false";
        }[];
        scopes?: string[];
        runtimeVersion?: string | null;
        bindingComponentDirection?: "input" | "output" | null;
      };
      additionalConfigurations?: Record<string, string>;
      additionalConnectionStringProperties?: Record<string, string>;
      configurationStore?: { appConfigurationId?: string | null };
    };
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const LinkerCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    linkerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      targetService: Schema.optional(
        Schema.Struct({
          type: Schema.Literals([
            "AzureResource",
            "ConfluentBootstrapServer",
            "ConfluentSchemaRegistry",
            "SelfHostedServer",
          ]),
        }),
      ),
      authInfo: Schema.optional(
        Schema.Struct({
          authType: Schema.Literals([
            "systemAssignedIdentity",
            "userAssignedIdentity",
            "servicePrincipalSecret",
            "servicePrincipalCertificate",
            "secret",
            "accessKey",
            "userAccount",
            "easyAuthMicrosoftEntraID",
          ]),
          authMode: Schema.optional(
            Schema.Literals(["optInAllAuth", "optOutAllAuth"]),
          ),
        }),
      ),
      clientType: Schema.optional(
        Schema.Literals([
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
        ]),
      ),
      provisioningState: Schema.optional(Schema.String),
      vNetSolution: Schema.optional(
        Schema.Struct({
          type: Schema.optional(
            Schema.NullOr(Schema.Literals(["serviceEndpoint", "privateLink"])),
          ),
          deleteOrUpdateBehavior: Schema.optional(
            Schema.Literals(["Default", "ForcedCleanup"]),
          ),
        }),
      ),
      secretStore: Schema.optional(
        Schema.Struct({
          keyVaultId: Schema.optional(Schema.NullOr(Schema.String)),
          keyVaultSecretName: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
      scope: Schema.optional(Schema.NullOr(Schema.String)),
      publicNetworkSolution: Schema.optional(
        Schema.Struct({
          deleteOrUpdateBehavior: Schema.optional(
            Schema.Literals(["Default", "ForcedCleanup"]),
          ),
          action: Schema.optional(Schema.Literals(["enable", "optOut"])),
          firewallRules: Schema.optional(
            Schema.Struct({
              ipRanges: Schema.optional(Schema.Array(Schema.String)),
              azureServices: Schema.optional(
                Schema.Literals(["true", "false"]),
              ),
              callerClientIP: Schema.optional(
                Schema.Literals(["true", "false"]),
              ),
            }),
          ),
        }),
      ),
      configurationInfo: Schema.optional(
        Schema.Struct({
          deleteOrUpdateBehavior: Schema.optional(
            Schema.Literals(["Default", "ForcedCleanup"]),
          ),
          action: Schema.optional(Schema.Literals(["enable", "optOut"])),
          customizedKeys: Schema.optional(
            Schema.Record(Schema.String, Schema.String),
          ),
          daprProperties: Schema.optional(
            Schema.Struct({
              version: Schema.optional(Schema.NullOr(Schema.String)),
              componentType: Schema.optional(Schema.NullOr(Schema.String)),
              secretStoreComponent: Schema.optional(
                Schema.NullOr(Schema.String),
              ),
              metadata: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                    secretRef: Schema.optional(Schema.String),
                    description: Schema.optional(Schema.String),
                    required: Schema.optional(
                      Schema.Literals(["true", "false"]),
                    ),
                  }),
                ),
              ),
              scopes: Schema.optional(Schema.Array(Schema.String)),
              runtimeVersion: Schema.optional(Schema.NullOr(Schema.String)),
              bindingComponentDirection: Schema.optional(
                Schema.NullOr(Schema.Literals(["input", "output"])),
              ),
            }),
          ),
          additionalConfigurations: Schema.optional(
            Schema.Record(Schema.String, Schema.String),
          ),
          additionalConnectionStringProperties: Schema.optional(
            Schema.Record(Schema.String, Schema.String),
          ),
          configurationStore: Schema.optional(
            Schema.Struct({
              appConfigurationId: Schema.optional(Schema.NullOr(Schema.String)),
            }),
          ),
        }),
      ),
    }),
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
    }),
  ) as unknown as Schema.Codec<LinkerCreateOrUpdateInput>;

// Output Schema
export interface LinkerCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const LinkerCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<LinkerCreateOrUpdateOutput>;

// The operation
/**
 * Create or update Linker resource.
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource to be connected.
 * @param api-version - The API version to use for this operation.
 * @param linkerName - The name Linker resource.
 */
export const LinkerCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: LinkerCreateOrUpdateInput,
  outputSchema: LinkerCreateOrUpdateOutput,
}));
// Input Schema
export interface LinkerDeleteInput {
  resourceUri: string;
  linkerName: string;
}
export const LinkerDeleteInput = /*@__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
  linkerName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/{resourceUri}/providers/Microsoft.ServiceLinker/linkers/{linkerName}",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<LinkerDeleteInput>;

// Output Schema
export type LinkerDeleteOutput = void;
export const LinkerDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<LinkerDeleteOutput>;

// The operation
/**
 * Delete a Linker.
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource to be connected.
 * @param api-version - The API version to use for this operation.
 * @param linkerName - The name Linker resource.
 */
export const LinkerDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: LinkerDeleteInput,
  outputSchema: LinkerDeleteOutput,
}));
// Input Schema
export interface LinkerGetInput {
  resourceUri: string;
  linkerName: string;
}
export const LinkerGetInput = /*@__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
  linkerName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.ServiceLinker/linkers/{linkerName}",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<LinkerGetInput>;

// Output Schema
export interface LinkerGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const LinkerGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
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
}) as unknown as Schema.Codec<LinkerGetOutput>;

// The operation
/**
 * Returns Linker resource for a given name.
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource to be connected.
 * @param api-version - The API version to use for this operation.
 * @param linkerName - The name Linker resource.
 */
export const LinkerGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: LinkerGetInput,
  outputSchema: LinkerGetOutput,
}));
// Input Schema
export interface LinkerListInput {
  resourceUri: string;
}
export const LinkerListInput = /*@__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.ServiceLinker/linkers",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<LinkerListInput>;

// Output Schema
export interface LinkerListOutput {
  nextLink?: string | null;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const LinkerListOutput = /*@__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.NullOr(Schema.String)),
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            createdAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  ),
}) as unknown as Schema.Codec<LinkerListOutput>;

// The operation
/**
 * Returns list of Linkers which connects to the resource. which supports to config both application and target service during the resource provision.
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource to be connected.
 * @param api-version - The API version to use for this operation.
 */
export const LinkerList = /*@__PURE__*/ API.make(() => ({
  inputSchema: LinkerListInput,
  outputSchema: LinkerListOutput,
}));
// Input Schema
export interface LinkerListConfigurationsInput {
  resourceUri: string;
  linkerName: string;
}
export const LinkerListConfigurationsInput =
  /*@__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    linkerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceUri}/providers/Microsoft.ServiceLinker/linkers/{linkerName}/listConfigurations",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<LinkerListConfigurationsInput>;

// Output Schema
export interface LinkerListConfigurationsOutput {
  configurations?: {
    name?: string;
    value?: string | null;
    configType?: "Default" | "KeyVaultSecret";
    keyVaultReferenceIdentity?: string | null;
    description?: string | null;
  }[];
}
export const LinkerListConfigurationsOutput =
  /*@__PURE__*/ Schema.Struct({
    configurations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          value: Schema.optional(Schema.NullOr(Schema.String)),
          configType: Schema.optional(
            Schema.Literals(["Default", "KeyVaultSecret"]),
          ),
          keyVaultReferenceIdentity: Schema.optional(
            Schema.NullOr(Schema.String),
          ),
          description: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<LinkerListConfigurationsOutput>;

// The operation
/**
 * list source configurations for a Linker.
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource to be connected.
 * @param api-version - The API version to use for this operation.
 * @param linkerName - The name Linker resource.
 */
export const LinkerListConfigurations = /*@__PURE__*/ API.make(() => ({
  inputSchema: LinkerListConfigurationsInput,
  outputSchema: LinkerListConfigurationsOutput,
}));
// Input Schema
export interface LinkersCreateDryrunInput {
  resourceUri: string;
  dryrunName: string;
  properties?: {
    parameters?: { actionName: "createOrUpdate" };
    prerequisiteResults?: { type: "basicError" | "permissionsMissing" }[];
    operationPreviews?: {
      name?: string;
      operationType?: "configConnection" | "configNetwork" | "configAuth";
      description?: string;
      action?: string;
      scope?: string;
    }[];
    provisioningState?: string;
  };
}
export const LinkersCreateDryrunInput =
  /*@__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    dryrunName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        parameters: Schema.optional(
          Schema.Struct({
            actionName: Schema.Literals(["createOrUpdate"]),
          }),
        ),
        prerequisiteResults: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.Literals(["basicError", "permissionsMissing"]),
            }),
          ),
        ),
        operationPreviews: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              operationType: Schema.optional(
                Schema.Literals([
                  "configConnection",
                  "configNetwork",
                  "configAuth",
                ]),
              ),
              description: Schema.optional(Schema.String),
              action: Schema.optional(Schema.String),
              scope: Schema.optional(Schema.String),
            }),
          ),
        ),
        provisioningState: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{resourceUri}/providers/Microsoft.ServiceLinker/dryruns/{dryrunName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<LinkersCreateDryrunInput>;

// Output Schema
export interface LinkersCreateDryrunOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const LinkersCreateDryrunOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<LinkersCreateDryrunOutput>;

// The operation
/**
 * create a dryrun job to do necessary check before actual creation
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource to be connected.
 * @param api-version - The API version to use for this operation.
 * @param dryrunName - The name of dryrun.
 */
export const LinkersCreateDryrun = /*@__PURE__*/ API.make(() => ({
  inputSchema: LinkersCreateDryrunInput,
  outputSchema: LinkersCreateDryrunOutput,
}));
// Input Schema
export interface LinkersDeleteDryrunInput {
  resourceUri: string;
  dryrunName: string;
}
export const LinkersDeleteDryrunInput =
  /*@__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    dryrunName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/{resourceUri}/providers/Microsoft.ServiceLinker/dryruns/{dryrunName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<LinkersDeleteDryrunInput>;

// Output Schema
export type LinkersDeleteDryrunOutput = void;
export const LinkersDeleteDryrunOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<LinkersDeleteDryrunOutput>;

// The operation
/**
 * delete a dryrun job
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource to be connected.
 * @param api-version - The API version to use for this operation.
 * @param dryrunName - The name of dryrun.
 */
export const LinkersDeleteDryrun = /*@__PURE__*/ API.make(() => ({
  inputSchema: LinkersDeleteDryrunInput,
  outputSchema: LinkersDeleteDryrunOutput,
}));
// Input Schema
export interface LinkersGenerateConfigurationsInput {
  resourceUri: string;
  linkerName: string;
  deleteOrUpdateBehavior?: "Default" | "ForcedCleanup";
  action?: "enable" | "optOut";
  customizedKeys?: Record<string, string>;
  daprProperties?: {
    version?: string | null;
    componentType?: string | null;
    secretStoreComponent?: string | null;
    metadata?: {
      name?: string;
      value?: string;
      secretRef?: string;
      description?: string;
      required?: "true" | "false";
    }[];
    scopes?: string[];
    runtimeVersion?: string | null;
    bindingComponentDirection?: "input" | "output" | null;
  };
  additionalConfigurations?: Record<string, string>;
  additionalConnectionStringProperties?: Record<string, string>;
  configurationStore?: { appConfigurationId?: string | null };
}
export const LinkersGenerateConfigurationsInput =
  /*@__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    linkerName: Schema.String.pipe(T.PathParam()),
    deleteOrUpdateBehavior: Schema.optional(
      Schema.Literals(["Default", "ForcedCleanup"]),
    ),
    action: Schema.optional(Schema.Literals(["enable", "optOut"])),
    customizedKeys: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    daprProperties: Schema.optional(
      Schema.Struct({
        version: Schema.optional(Schema.NullOr(Schema.String)),
        componentType: Schema.optional(Schema.NullOr(Schema.String)),
        secretStoreComponent: Schema.optional(Schema.NullOr(Schema.String)),
        metadata: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              value: Schema.optional(Schema.String),
              secretRef: Schema.optional(Schema.String),
              description: Schema.optional(Schema.String),
              required: Schema.optional(Schema.Literals(["true", "false"])),
            }),
          ),
        ),
        scopes: Schema.optional(Schema.Array(Schema.String)),
        runtimeVersion: Schema.optional(Schema.NullOr(Schema.String)),
        bindingComponentDirection: Schema.optional(
          Schema.NullOr(Schema.Literals(["input", "output"])),
        ),
      }),
    ),
    additionalConfigurations: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    additionalConnectionStringProperties: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    configurationStore: Schema.optional(
      Schema.Struct({
        appConfigurationId: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceUri}/providers/Microsoft.ServiceLinker/linkers/{linkerName}/generateConfigurations",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<LinkersGenerateConfigurationsInput>;

// Output Schema
export interface LinkersGenerateConfigurationsOutput {
  configurations?: {
    name?: string;
    value?: string | null;
    configType?: "Default" | "KeyVaultSecret";
    keyVaultReferenceIdentity?: string | null;
    description?: string | null;
  }[];
}
export const LinkersGenerateConfigurationsOutput =
  /*@__PURE__*/ Schema.Struct({
    configurations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          value: Schema.optional(Schema.NullOr(Schema.String)),
          configType: Schema.optional(
            Schema.Literals(["Default", "KeyVaultSecret"]),
          ),
          keyVaultReferenceIdentity: Schema.optional(
            Schema.NullOr(Schema.String),
          ),
          description: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<LinkersGenerateConfigurationsOutput>;

// The operation
/**
 * Generate configurations for a Linker.
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource to be connected.
 * @param api-version - The API version to use for this operation.
 * @param linkerName - The name Linker resource.
 */
export const LinkersGenerateConfigurations =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: LinkersGenerateConfigurationsInput,
    outputSchema: LinkersGenerateConfigurationsOutput,
  }));
// Input Schema
export interface LinkersGetDryrunInput {
  resourceUri: string;
  dryrunName: string;
}
export const LinkersGetDryrunInput = /*@__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
  dryrunName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.ServiceLinker/dryruns/{dryrunName}",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<LinkersGetDryrunInput>;

// Output Schema
export interface LinkersGetDryrunOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const LinkersGetDryrunOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
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
}) as unknown as Schema.Codec<LinkersGetDryrunOutput>;

// The operation
/**
 * get a dryrun job
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource to be connected.
 * @param api-version - The API version to use for this operation.
 * @param dryrunName - The name of dryrun.
 */
export const LinkersGetDryrun = /*@__PURE__*/ API.make(() => ({
  inputSchema: LinkersGetDryrunInput,
  outputSchema: LinkersGetDryrunOutput,
}));
// Input Schema
export interface LinkersListDaprConfigurationsInput {
  resourceUri: string;
}
export const LinkersListDaprConfigurationsInput =
  /*@__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.ServiceLinker/daprConfigurations",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<LinkersListDaprConfigurationsInput>;

// Output Schema
export interface LinkersListDaprConfigurationsOutput {
  value?: {
    properties?: {
      targetType?: string;
      authType?:
        | "systemAssignedIdentity"
        | "userAssignedIdentity"
        | "servicePrincipalSecret"
        | "servicePrincipalCertificate"
        | "secret"
        | "accessKey"
        | "userAccount"
        | "easyAuthMicrosoftEntraID";
      daprProperties?: {
        version?: string | null;
        componentType?: string | null;
        secretStoreComponent?: string | null;
        metadata?: {
          name?: string;
          value?: string;
          secretRef?: string;
          description?: string;
          required?: "true" | "false";
        }[];
        scopes?: string[];
        runtimeVersion?: string | null;
        bindingComponentDirection?: "input" | "output" | null;
      };
    };
  }[];
  nextLink?: string;
}
export const LinkersListDaprConfigurationsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          properties: Schema.optional(
            Schema.Struct({
              targetType: Schema.optional(Schema.String),
              authType: Schema.optional(
                Schema.Literals([
                  "systemAssignedIdentity",
                  "userAssignedIdentity",
                  "servicePrincipalSecret",
                  "servicePrincipalCertificate",
                  "secret",
                  "accessKey",
                  "userAccount",
                  "easyAuthMicrosoftEntraID",
                ]),
              ),
              daprProperties: Schema.optional(
                Schema.Struct({
                  version: Schema.optional(Schema.NullOr(Schema.String)),
                  componentType: Schema.optional(Schema.NullOr(Schema.String)),
                  secretStoreComponent: Schema.optional(
                    Schema.NullOr(Schema.String),
                  ),
                  metadata: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        name: Schema.optional(Schema.String),
                        value: Schema.optional(Schema.String),
                        secretRef: Schema.optional(Schema.String),
                        description: Schema.optional(Schema.String),
                        required: Schema.optional(
                          Schema.Literals(["true", "false"]),
                        ),
                      }),
                    ),
                  ),
                  scopes: Schema.optional(Schema.Array(Schema.String)),
                  runtimeVersion: Schema.optional(Schema.NullOr(Schema.String)),
                  bindingComponentDirection: Schema.optional(
                    Schema.NullOr(Schema.Literals(["input", "output"])),
                  ),
                }),
              ),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<LinkersListDaprConfigurationsOutput>;

// The operation
/**
 * List the dapr configuration supported by Service Connector.
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource to be connected.
 * @param api-version - The API version to use for this operation.
 */
export const LinkersListDaprConfigurations =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: LinkersListDaprConfigurationsInput,
    outputSchema: LinkersListDaprConfigurationsOutput,
  }));
// Input Schema
export interface LinkersListDryrunInput {
  resourceUri: string;
}
export const LinkersListDryrunInput = /*@__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.ServiceLinker/dryruns",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<LinkersListDryrunInput>;

// Output Schema
export interface LinkersListDryrunOutput {
  nextLink?: string | null;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const LinkersListDryrunOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.NullOr(Schema.String)),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<LinkersListDryrunOutput>;

// The operation
/**
 * list dryrun jobs
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource to be connected.
 * @param api-version - The API version to use for this operation.
 */
export const LinkersListDryrun = /*@__PURE__*/ API.make(() => ({
  inputSchema: LinkersListDryrunInput,
  outputSchema: LinkersListDryrunOutput,
}));
// Input Schema
export interface LinkersUpdateDryrunInput {
  resourceUri: string;
  dryrunName: string;
  properties?: {
    parameters?: { actionName: "createOrUpdate" };
    prerequisiteResults?: { type: "basicError" | "permissionsMissing" }[];
    operationPreviews?: {
      name?: string;
      operationType?: "configConnection" | "configNetwork" | "configAuth";
      description?: string;
      action?: string;
      scope?: string;
    }[];
    provisioningState?: string;
  };
}
export const LinkersUpdateDryrunInput =
  /*@__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    dryrunName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        parameters: Schema.optional(
          Schema.Struct({
            actionName: Schema.Literals(["createOrUpdate"]),
          }),
        ),
        prerequisiteResults: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.Literals(["basicError", "permissionsMissing"]),
            }),
          ),
        ),
        operationPreviews: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              operationType: Schema.optional(
                Schema.Literals([
                  "configConnection",
                  "configNetwork",
                  "configAuth",
                ]),
              ),
              description: Schema.optional(Schema.String),
              action: Schema.optional(Schema.String),
              scope: Schema.optional(Schema.String),
            }),
          ),
        ),
        provisioningState: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/{resourceUri}/providers/Microsoft.ServiceLinker/dryruns/{dryrunName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<LinkersUpdateDryrunInput>;

// Output Schema
export interface LinkersUpdateDryrunOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const LinkersUpdateDryrunOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<LinkersUpdateDryrunOutput>;

// The operation
/**
 * add a dryrun job to do necessary check before actual creation
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource to be connected.
 * @param api-version - The API version to use for this operation.
 * @param dryrunName - The name of dryrun.
 */
export const LinkersUpdateDryrun = /*@__PURE__*/ API.make(() => ({
  inputSchema: LinkersUpdateDryrunInput,
  outputSchema: LinkersUpdateDryrunOutput,
}));
// Input Schema
export interface LinkerUpdateInput {
  resourceUri: string;
  linkerName: string;
  properties?: {
    targetService?: {
      type:
        | "AzureResource"
        | "ConfluentBootstrapServer"
        | "ConfluentSchemaRegistry"
        | "SelfHostedServer";
    };
    authInfo?: {
      authType:
        | "systemAssignedIdentity"
        | "userAssignedIdentity"
        | "servicePrincipalSecret"
        | "servicePrincipalCertificate"
        | "secret"
        | "accessKey"
        | "userAccount"
        | "easyAuthMicrosoftEntraID";
      authMode?: "optInAllAuth" | "optOutAllAuth";
    };
    clientType?:
      | "none"
      | "dotnet"
      | "java"
      | "python"
      | "go"
      | "php"
      | "ruby"
      | "django"
      | "nodejs"
      | "springBoot"
      | "kafka-springBoot"
      | "jms-springBoot"
      | "dapr";
    provisioningState?: string;
    vNetSolution?: {
      type?: "serviceEndpoint" | "privateLink" | null;
      deleteOrUpdateBehavior?: "Default" | "ForcedCleanup";
    };
    secretStore?: {
      keyVaultId?: string | null;
      keyVaultSecretName?: string | null;
    };
    scope?: string | null;
    publicNetworkSolution?: {
      deleteOrUpdateBehavior?: "Default" | "ForcedCleanup";
      action?: "enable" | "optOut";
      firewallRules?: {
        ipRanges?: string[];
        azureServices?: "true" | "false";
        callerClientIP?: "true" | "false";
      };
    };
    configurationInfo?: {
      deleteOrUpdateBehavior?: "Default" | "ForcedCleanup";
      action?: "enable" | "optOut";
      customizedKeys?: Record<string, string>;
      daprProperties?: {
        version?: string | null;
        componentType?: string | null;
        secretStoreComponent?: string | null;
        metadata?: {
          name?: string;
          value?: string;
          secretRef?: string;
          description?: string;
          required?: "true" | "false";
        }[];
        scopes?: string[];
        runtimeVersion?: string | null;
        bindingComponentDirection?: "input" | "output" | null;
      };
      additionalConfigurations?: Record<string, string>;
      additionalConnectionStringProperties?: Record<string, string>;
      configurationStore?: { appConfigurationId?: string | null };
    };
  };
}
export const LinkerUpdateInput = /*@__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
  linkerName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      targetService: Schema.optional(
        Schema.Struct({
          type: Schema.Literals([
            "AzureResource",
            "ConfluentBootstrapServer",
            "ConfluentSchemaRegistry",
            "SelfHostedServer",
          ]),
        }),
      ),
      authInfo: Schema.optional(
        Schema.Struct({
          authType: Schema.Literals([
            "systemAssignedIdentity",
            "userAssignedIdentity",
            "servicePrincipalSecret",
            "servicePrincipalCertificate",
            "secret",
            "accessKey",
            "userAccount",
            "easyAuthMicrosoftEntraID",
          ]),
          authMode: Schema.optional(
            Schema.Literals(["optInAllAuth", "optOutAllAuth"]),
          ),
        }),
      ),
      clientType: Schema.optional(
        Schema.Literals([
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
        ]),
      ),
      provisioningState: Schema.optional(Schema.String),
      vNetSolution: Schema.optional(
        Schema.Struct({
          type: Schema.optional(
            Schema.NullOr(Schema.Literals(["serviceEndpoint", "privateLink"])),
          ),
          deleteOrUpdateBehavior: Schema.optional(
            Schema.Literals(["Default", "ForcedCleanup"]),
          ),
        }),
      ),
      secretStore: Schema.optional(
        Schema.Struct({
          keyVaultId: Schema.optional(Schema.NullOr(Schema.String)),
          keyVaultSecretName: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
      scope: Schema.optional(Schema.NullOr(Schema.String)),
      publicNetworkSolution: Schema.optional(
        Schema.Struct({
          deleteOrUpdateBehavior: Schema.optional(
            Schema.Literals(["Default", "ForcedCleanup"]),
          ),
          action: Schema.optional(Schema.Literals(["enable", "optOut"])),
          firewallRules: Schema.optional(
            Schema.Struct({
              ipRanges: Schema.optional(Schema.Array(Schema.String)),
              azureServices: Schema.optional(
                Schema.Literals(["true", "false"]),
              ),
              callerClientIP: Schema.optional(
                Schema.Literals(["true", "false"]),
              ),
            }),
          ),
        }),
      ),
      configurationInfo: Schema.optional(
        Schema.Struct({
          deleteOrUpdateBehavior: Schema.optional(
            Schema.Literals(["Default", "ForcedCleanup"]),
          ),
          action: Schema.optional(Schema.Literals(["enable", "optOut"])),
          customizedKeys: Schema.optional(
            Schema.Record(Schema.String, Schema.String),
          ),
          daprProperties: Schema.optional(
            Schema.Struct({
              version: Schema.optional(Schema.NullOr(Schema.String)),
              componentType: Schema.optional(Schema.NullOr(Schema.String)),
              secretStoreComponent: Schema.optional(
                Schema.NullOr(Schema.String),
              ),
              metadata: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                    secretRef: Schema.optional(Schema.String),
                    description: Schema.optional(Schema.String),
                    required: Schema.optional(
                      Schema.Literals(["true", "false"]),
                    ),
                  }),
                ),
              ),
              scopes: Schema.optional(Schema.Array(Schema.String)),
              runtimeVersion: Schema.optional(Schema.NullOr(Schema.String)),
              bindingComponentDirection: Schema.optional(
                Schema.NullOr(Schema.Literals(["input", "output"])),
              ),
            }),
          ),
          additionalConfigurations: Schema.optional(
            Schema.Record(Schema.String, Schema.String),
          ),
          additionalConnectionStringProperties: Schema.optional(
            Schema.Record(Schema.String, Schema.String),
          ),
          configurationStore: Schema.optional(
            Schema.Struct({
              appConfigurationId: Schema.optional(Schema.NullOr(Schema.String)),
            }),
          ),
        }),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/{resourceUri}/providers/Microsoft.ServiceLinker/linkers/{linkerName}",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<LinkerUpdateInput>;

// Output Schema
export interface LinkerUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const LinkerUpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
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
}) as unknown as Schema.Codec<LinkerUpdateOutput>;

// The operation
/**
 * Operation to update an existing Linker.
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource to be connected.
 * @param api-version - The API version to use for this operation.
 * @param linkerName - The name Linker resource.
 */
export const LinkerUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: LinkerUpdateInput,
  outputSchema: LinkerUpdateOutput,
}));
// Input Schema
export interface LinkerValidateInput {
  resourceUri: string;
  linkerName: string;
}
export const LinkerValidateInput = /*@__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
  linkerName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/{resourceUri}/providers/Microsoft.ServiceLinker/linkers/{linkerName}/validateLinker",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<LinkerValidateInput>;

// Output Schema
export interface LinkerValidateOutput {
  properties?: {
    linkerName?: string | null;
    isConnectionAvailable?: boolean | null;
    reportStartTimeUtc?: string | null;
    reportEndTimeUtc?: string | null;
    sourceId?: string | null;
    targetId?: string | null;
    authType?:
      | "systemAssignedIdentity"
      | "userAssignedIdentity"
      | "servicePrincipalSecret"
      | "servicePrincipalCertificate"
      | "secret"
      | "accessKey"
      | "userAccount"
      | "easyAuthMicrosoftEntraID";
    validationDetail?: {
      name?: string;
      description?: string | null;
      result?: "success" | "failure" | "warning" | null;
      errorMessage?: string | null;
      errorCode?: string | null;
    }[];
  };
  resourceId?: string | null;
  status?: string | null;
}
export const LinkerValidateOutput = /*@__PURE__*/ Schema.Struct({
  properties: Schema.optional(
    Schema.Struct({
      linkerName: Schema.optional(Schema.NullOr(Schema.String)),
      isConnectionAvailable: Schema.optional(Schema.NullOr(Schema.Boolean)),
      reportStartTimeUtc: Schema.optional(Schema.NullOr(Schema.String)),
      reportEndTimeUtc: Schema.optional(Schema.NullOr(Schema.String)),
      sourceId: Schema.optional(Schema.NullOr(Schema.String)),
      targetId: Schema.optional(Schema.NullOr(Schema.String)),
      authType: Schema.optional(
        Schema.Literals([
          "systemAssignedIdentity",
          "userAssignedIdentity",
          "servicePrincipalSecret",
          "servicePrincipalCertificate",
          "secret",
          "accessKey",
          "userAccount",
          "easyAuthMicrosoftEntraID",
        ]),
      ),
      validationDetail: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            description: Schema.optional(Schema.NullOr(Schema.String)),
            result: Schema.optional(
              Schema.NullOr(Schema.Literals(["success", "failure", "warning"])),
            ),
            errorMessage: Schema.optional(Schema.NullOr(Schema.String)),
            errorCode: Schema.optional(Schema.NullOr(Schema.String)),
          }),
        ),
      ),
    }),
  ),
  resourceId: Schema.optional(Schema.NullOr(Schema.String)),
  status: Schema.optional(Schema.NullOr(Schema.String)),
}) as unknown as Schema.Codec<LinkerValidateOutput>;

// The operation
/**
 * Validate a Linker.
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource to be connected.
 * @param api-version - The API version to use for this operation.
 * @param linkerName - The name Linker resource.
 */
export const LinkerValidate = /*@__PURE__*/ API.make(() => ({
  inputSchema: LinkerValidateInput,
  outputSchema: LinkerValidateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ServiceLinker/operations",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value?: {
    name?: string;
    isDataAction?: boolean;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
    origin?: "user" | "system" | "user,system";
    actionType?: "Internal";
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
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
        origin: Schema.optional(
          Schema.Literals(["user", "system", "user,system"]),
        ),
        actionType: Schema.optional(Schema.Literals(["Internal"])),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists the available ServiceLinker REST API operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
