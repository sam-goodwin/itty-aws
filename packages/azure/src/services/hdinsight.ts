/**
 * Azure Hdinsight API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString, SensitiveString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface ApplicationsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationName: string;
  etag?: string;
  tags?: Record<string, string>;
  properties?: {
    computeProfile?: {
      roles?: {
        name?: string;
        minInstanceCount?: number;
        targetInstanceCount?: number;
        VMGroupName?: string;
        autoscale?: {
          capacity?: { minInstanceCount?: number; maxInstanceCount?: number };
          recurrence?: {
            timeZone?: string;
            schedule?: {
              days?: (
                | "Monday"
                | "Tuesday"
                | "Wednesday"
                | "Thursday"
                | "Friday"
                | "Saturday"
                | "Sunday"
              )[];
              timeAndCapacity?: {
                time?: string;
                minInstanceCount?: number;
                maxInstanceCount?: number;
              };
            }[];
          };
        };
        hardwareProfile?: { vmSize?: string };
        osProfile?: {
          linuxOperatingSystemProfile?: {
            username?: string;
            password?: string | Redacted.Redacted<string>;
            sshProfile?: { publicKeys?: { certificateData?: string }[] };
          };
        };
        virtualNetworkProfile?: { id?: string; subnet?: string };
        dataDisksGroups?: {
          disksPerNode?: number;
          storageAccountType?: string;
          diskSizeGB?: number;
        }[];
        scriptActions?: { name: string; uri: string; parameters: string }[];
        encryptDataDisks?: boolean;
      }[];
    };
    installScriptActions?: {
      name: string;
      uri: string;
      parameters?: string;
      roles: string[];
      applicationName?: string;
    }[];
    uninstallScriptActions?: {
      name: string;
      uri: string;
      parameters?: string;
      roles: string[];
      applicationName?: string;
    }[];
    httpsEndpoints?: {
      accessModes?: string[];
      location?: string;
      destinationPort?: number;
      publicPort?: number;
      privateIPAddress?: string;
      subDomainSuffix?: string;
      disableGatewayAuth?: boolean;
    }[];
    sshEndpoints?: {
      location?: string;
      destinationPort?: number;
      publicPort?: number;
      privateIPAddress?: string;
    }[];
    provisioningState?: string;
    applicationType?: string;
    applicationState?: string;
    errors?: { code?: string; message?: string }[];
    createdDate?: string;
    marketplaceIdentifier?: string;
    privateLinkConfigurations?: {
      id?: string;
      name: string;
      type?: string;
      properties: {
        groupId: string;
        provisioningState?:
          | "InProgress"
          | "Failed"
          | "Succeeded"
          | "Canceled"
          | "Deleting";
        ipConfigurations: {
          id?: string;
          name: string;
          type?: string;
          properties?: {
            provisioningState?:
              | "InProgress"
              | "Failed"
              | "Succeeded"
              | "Canceled"
              | "Deleting";
            primary?: boolean;
            privateIPAddress?: string;
            privateIPAllocationMethod?: "dynamic" | "static";
            subnet?: { id?: string };
          };
        }[];
      };
    }[];
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
export const ApplicationsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        computeProfile: Schema.optional(
          Schema.Struct({
            roles: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  minInstanceCount: Schema.optional(Schema.Number),
                  targetInstanceCount: Schema.optional(Schema.Number),
                  VMGroupName: Schema.optional(Schema.String),
                  autoscale: Schema.optional(
                    Schema.Struct({
                      capacity: Schema.optional(
                        Schema.Struct({
                          minInstanceCount: Schema.optional(Schema.Number),
                          maxInstanceCount: Schema.optional(Schema.Number),
                        }),
                      ),
                      recurrence: Schema.optional(
                        Schema.Struct({
                          timeZone: Schema.optional(Schema.String),
                          schedule: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                days: Schema.optional(
                                  Schema.Array(
                                    Schema.Literals([
                                      "Monday",
                                      "Tuesday",
                                      "Wednesday",
                                      "Thursday",
                                      "Friday",
                                      "Saturday",
                                      "Sunday",
                                    ]),
                                  ),
                                ),
                                timeAndCapacity: Schema.optional(
                                  Schema.Struct({
                                    time: Schema.optional(Schema.String),
                                    minInstanceCount: Schema.optional(
                                      Schema.Number,
                                    ),
                                    maxInstanceCount: Schema.optional(
                                      Schema.Number,
                                    ),
                                  }),
                                ),
                              }),
                            ),
                          ),
                        }),
                      ),
                    }),
                  ),
                  hardwareProfile: Schema.optional(
                    Schema.Struct({
                      vmSize: Schema.optional(Schema.String),
                    }),
                  ),
                  osProfile: Schema.optional(
                    Schema.Struct({
                      linuxOperatingSystemProfile: Schema.optional(
                        Schema.Struct({
                          username: Schema.optional(Schema.String),
                          password: Schema.optional(SensitiveString),
                          sshProfile: Schema.optional(
                            Schema.Struct({
                              publicKeys: Schema.optional(
                                Schema.Array(
                                  Schema.Struct({
                                    certificateData: Schema.optional(
                                      Schema.String,
                                    ),
                                  }),
                                ),
                              ),
                            }),
                          ),
                        }),
                      ),
                    }),
                  ),
                  virtualNetworkProfile: Schema.optional(
                    Schema.Struct({
                      id: Schema.optional(Schema.String),
                      subnet: Schema.optional(Schema.String),
                    }),
                  ),
                  dataDisksGroups: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        disksPerNode: Schema.optional(Schema.Number),
                        storageAccountType: Schema.optional(Schema.String),
                        diskSizeGB: Schema.optional(Schema.Number),
                      }),
                    ),
                  ),
                  scriptActions: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        name: Schema.String,
                        uri: Schema.String,
                        parameters: Schema.String,
                      }),
                    ),
                  ),
                  encryptDataDisks: Schema.optional(Schema.Boolean),
                }),
              ),
            ),
          }),
        ),
        installScriptActions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              uri: Schema.String,
              parameters: Schema.optional(Schema.String),
              roles: Schema.Array(Schema.String),
              applicationName: Schema.optional(Schema.String),
            }),
          ),
        ),
        uninstallScriptActions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              uri: Schema.String,
              parameters: Schema.optional(Schema.String),
              roles: Schema.Array(Schema.String),
              applicationName: Schema.optional(Schema.String),
            }),
          ),
        ),
        httpsEndpoints: Schema.optional(
          Schema.Array(
            Schema.Struct({
              accessModes: Schema.optional(Schema.Array(Schema.String)),
              location: Schema.optional(Schema.String),
              destinationPort: Schema.optional(Schema.Number),
              publicPort: Schema.optional(Schema.Number),
              privateIPAddress: Schema.optional(Schema.String),
              subDomainSuffix: Schema.optional(Schema.String),
              disableGatewayAuth: Schema.optional(Schema.Boolean),
            }),
          ),
        ),
        sshEndpoints: Schema.optional(
          Schema.Array(
            Schema.Struct({
              location: Schema.optional(Schema.String),
              destinationPort: Schema.optional(Schema.Number),
              publicPort: Schema.optional(Schema.Number),
              privateIPAddress: Schema.optional(Schema.String),
            }),
          ),
        ),
        provisioningState: Schema.optional(Schema.String),
        applicationType: Schema.optional(Schema.String),
        applicationState: Schema.optional(Schema.String),
        errors: Schema.optional(
          Schema.Array(
            Schema.Struct({
              code: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
            }),
          ),
        ),
        createdDate: Schema.optional(Schema.String),
        marketplaceIdentifier: Schema.optional(Schema.String),
        privateLinkConfigurations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.String,
              type: Schema.optional(Schema.String),
              properties: Schema.Struct({
                groupId: Schema.String,
                provisioningState: Schema.optional(
                  Schema.Literals([
                    "InProgress",
                    "Failed",
                    "Succeeded",
                    "Canceled",
                    "Deleting",
                  ]),
                ),
                ipConfigurations: Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                    name: Schema.String,
                    type: Schema.optional(Schema.String),
                    properties: Schema.optional(
                      Schema.Struct({
                        provisioningState: Schema.optional(
                          Schema.Literals([
                            "InProgress",
                            "Failed",
                            "Succeeded",
                            "Canceled",
                            "Deleting",
                          ]),
                        ),
                        primary: Schema.optional(Schema.Boolean),
                        privateIPAddress: Schema.optional(Schema.String),
                        privateIPAllocationMethod: Schema.optional(
                          Schema.Literals(["dynamic", "static"]),
                        ),
                        subnet: Schema.optional(
                          Schema.Struct({
                            id: Schema.optional(Schema.String),
                          }),
                        ),
                      }),
                    ),
                  }),
                ),
              }),
            }),
          ),
        ),
      }),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/applications/{applicationName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ApplicationsCreateInput>;

// Output Schema
export interface ApplicationsCreateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ApplicationsCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ApplicationsCreateOutput>;

// The operation
/**
 * Creates applications for the HDInsight cluster.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param applicationName - The constant value for the application name.
 * @param api-version - The HDInsight client API Version.
 */
export const ApplicationsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsCreateInput,
  outputSchema: ApplicationsCreateOutput,
}));
// Input Schema
export interface ApplicationsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationName: string;
}
export const ApplicationsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/applications/{applicationName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ApplicationsDeleteInput>;

// Output Schema
export type ApplicationsDeleteOutput = void;
export const ApplicationsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ApplicationsDeleteOutput>;

// The operation
/**
 * Deletes the specified application on the HDInsight cluster.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param applicationName - The constant value for the application name.
 * @param api-version - The HDInsight client API Version.
 */
export const ApplicationsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsDeleteInput,
  outputSchema: ApplicationsDeleteOutput,
}));
// Input Schema
export interface ApplicationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationName: string;
}
export const ApplicationsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  applicationName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/applications/{applicationName}",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<ApplicationsGetInput>;

// Output Schema
export interface ApplicationsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ApplicationsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ApplicationsGetOutput>;

// The operation
/**
 * Gets properties of the specified application.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param applicationName - The constant value for the application name.
 * @param api-version - The HDInsight client API Version.
 */
export const ApplicationsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsGetInput,
  outputSchema: ApplicationsGetOutput,
}));
// Input Schema
export interface ApplicationsGetAzureAsyncOperationStatusInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationName: string;
  operationId: string;
}
export const ApplicationsGetAzureAsyncOperationStatusInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/applications/{applicationName}/azureasyncoperations/{operationId}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ApplicationsGetAzureAsyncOperationStatusInput>;

// Output Schema
export interface ApplicationsGetAzureAsyncOperationStatusOutput {
  status?: "InProgress" | "Succeeded" | "Failed";
  error?: { code?: string; message?: string };
}
export const ApplicationsGetAzureAsyncOperationStatusOutput =
  /*@__PURE__*/ Schema.Struct({
    status: Schema.optional(
      Schema.Literals(["InProgress", "Succeeded", "Failed"]),
    ),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ApplicationsGetAzureAsyncOperationStatusOutput>;

// The operation
/**
 * Gets the async operation status.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param applicationName - The constant value for the application name.
 * @param api-version - The HDInsight client API Version.
 * @param operationId - The long running operation id.
 */
export const ApplicationsGetAzureAsyncOperationStatus =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ApplicationsGetAzureAsyncOperationStatusInput,
    outputSchema: ApplicationsGetAzureAsyncOperationStatusOutput,
  }));
// Input Schema
export interface ApplicationsListByClusterInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ApplicationsListByClusterInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/applications",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ApplicationsListByClusterInput>;

// Output Schema
export interface ApplicationsListByClusterOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const ApplicationsListByClusterOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ApplicationsListByClusterOutput>;

// The operation
/**
 * Lists all of the applications for the HDInsight cluster.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param api-version - The HDInsight client API Version.
 */
export const ApplicationsListByCluster = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsListByClusterInput,
  outputSchema: ApplicationsListByClusterOutput,
}));
// Input Schema
export interface ClustersCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  location?: string;
  tags?: Record<string, string>;
  zones?: string[];
  properties?: {
    clusterVersion?: string;
    osType?: "Windows" | "Linux";
    tier?: "Standard" | "Premium";
    clusterDefinition?: {
      blueprint?: string;
      kind?: string;
      componentVersion?: Record<string, string>;
      configurations?: unknown;
    };
    kafkaRestProperties?: {
      clientGroupInfo?: { groupName?: string; groupId?: string };
      configurationOverride?: Record<string, string>;
    };
    securityProfile?: {
      directoryType?: "ActiveDirectory";
      domain?: string;
      organizationalUnitDN?: string;
      ldapsUrls?: string[];
      domainUsername?: string;
      domainUserPassword?: string | Redacted.Redacted<string>;
      clusterUsersGroupDNs?: string[];
      aaddsResourceId?: string;
      msiResourceId?: string;
    };
    computeProfile?: {
      roles?: {
        name?: string;
        minInstanceCount?: number;
        targetInstanceCount?: number;
        VMGroupName?: string;
        autoscale?: {
          capacity?: { minInstanceCount?: number; maxInstanceCount?: number };
          recurrence?: {
            timeZone?: string;
            schedule?: {
              days?: (
                | "Monday"
                | "Tuesday"
                | "Wednesday"
                | "Thursday"
                | "Friday"
                | "Saturday"
                | "Sunday"
              )[];
              timeAndCapacity?: {
                time?: string;
                minInstanceCount?: number;
                maxInstanceCount?: number;
              };
            }[];
          };
        };
        hardwareProfile?: { vmSize?: string };
        osProfile?: {
          linuxOperatingSystemProfile?: {
            username?: string;
            password?: string | Redacted.Redacted<string>;
            sshProfile?: { publicKeys?: { certificateData?: string }[] };
          };
        };
        virtualNetworkProfile?: { id?: string; subnet?: string };
        dataDisksGroups?: {
          disksPerNode?: number;
          storageAccountType?: string;
          diskSizeGB?: number;
        }[];
        scriptActions?: { name: string; uri: string; parameters: string }[];
        encryptDataDisks?: boolean;
      }[];
    };
    storageProfile?: {
      storageaccounts?: {
        name?: string;
        isDefault?: boolean;
        container?: string;
        fileSystem?: string;
        key?: string;
        resourceId?: string;
        msiResourceId?: string;
        saskey?: string;
        fileshare?: string;
      }[];
    };
    diskEncryptionProperties?: {
      vaultUri?: string;
      keyName?: string;
      keyVersion?: string;
      encryptionAlgorithm?: "RSA-OAEP" | "RSA-OAEP-256" | "RSA1_5";
      msiResourceId?: string;
      encryptionAtHost?: boolean;
    };
    encryptionInTransitProperties?: { isEncryptionInTransitEnabled?: boolean };
    minSupportedTlsVersion?: string;
    networkProperties?: {
      resourceProviderConnection?: "Inbound" | "Outbound";
      privateLink?: "Disabled" | "Enabled";
    };
    computeIsolationProperties?: {
      enableComputeIsolation?: boolean;
      hostSku?: string;
    };
    privateLinkConfigurations?: {
      id?: string;
      name: string;
      type?: string;
      properties: {
        groupId: string;
        provisioningState?:
          | "InProgress"
          | "Failed"
          | "Succeeded"
          | "Canceled"
          | "Deleting";
        ipConfigurations: {
          id?: string;
          name: string;
          type?: string;
          properties?: {
            provisioningState?:
              | "InProgress"
              | "Failed"
              | "Succeeded"
              | "Canceled"
              | "Deleting";
            primary?: boolean;
            privateIPAddress?: string;
            privateIPAllocationMethod?: "dynamic" | "static";
            subnet?: { id?: string };
          };
        }[];
      };
    }[];
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned"
      | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string; tenantId?: string }
    >;
  };
}
export const ClustersCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  zones: Schema.optional(Schema.Array(Schema.String)),
  properties: Schema.optional(
    Schema.Struct({
      clusterVersion: Schema.optional(Schema.String),
      osType: Schema.optional(Schema.Literals(["Windows", "Linux"])),
      tier: Schema.optional(Schema.Literals(["Standard", "Premium"])),
      clusterDefinition: Schema.optional(
        Schema.Struct({
          blueprint: Schema.optional(Schema.String),
          kind: Schema.optional(Schema.String),
          componentVersion: Schema.optional(
            Schema.Record(Schema.String, Schema.String),
          ),
          configurations: Schema.optional(Schema.Unknown),
        }),
      ),
      kafkaRestProperties: Schema.optional(
        Schema.Struct({
          clientGroupInfo: Schema.optional(
            Schema.Struct({
              groupName: Schema.optional(Schema.String),
              groupId: Schema.optional(Schema.String),
            }),
          ),
          configurationOverride: Schema.optional(
            Schema.Record(Schema.String, Schema.String),
          ),
        }),
      ),
      securityProfile: Schema.optional(
        Schema.Struct({
          directoryType: Schema.optional(Schema.Literals(["ActiveDirectory"])),
          domain: Schema.optional(Schema.String),
          organizationalUnitDN: Schema.optional(Schema.String),
          ldapsUrls: Schema.optional(Schema.Array(Schema.String)),
          domainUsername: Schema.optional(Schema.String),
          domainUserPassword: Schema.optional(SensitiveString),
          clusterUsersGroupDNs: Schema.optional(Schema.Array(Schema.String)),
          aaddsResourceId: Schema.optional(Schema.String),
          msiResourceId: Schema.optional(Schema.String),
        }),
      ),
      computeProfile: Schema.optional(
        Schema.Struct({
          roles: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                minInstanceCount: Schema.optional(Schema.Number),
                targetInstanceCount: Schema.optional(Schema.Number),
                VMGroupName: Schema.optional(Schema.String),
                autoscale: Schema.optional(
                  Schema.Struct({
                    capacity: Schema.optional(
                      Schema.Struct({
                        minInstanceCount: Schema.optional(Schema.Number),
                        maxInstanceCount: Schema.optional(Schema.Number),
                      }),
                    ),
                    recurrence: Schema.optional(
                      Schema.Struct({
                        timeZone: Schema.optional(Schema.String),
                        schedule: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              days: Schema.optional(
                                Schema.Array(
                                  Schema.Literals([
                                    "Monday",
                                    "Tuesday",
                                    "Wednesday",
                                    "Thursday",
                                    "Friday",
                                    "Saturday",
                                    "Sunday",
                                  ]),
                                ),
                              ),
                              timeAndCapacity: Schema.optional(
                                Schema.Struct({
                                  time: Schema.optional(Schema.String),
                                  minInstanceCount: Schema.optional(
                                    Schema.Number,
                                  ),
                                  maxInstanceCount: Schema.optional(
                                    Schema.Number,
                                  ),
                                }),
                              ),
                            }),
                          ),
                        ),
                      }),
                    ),
                  }),
                ),
                hardwareProfile: Schema.optional(
                  Schema.Struct({
                    vmSize: Schema.optional(Schema.String),
                  }),
                ),
                osProfile: Schema.optional(
                  Schema.Struct({
                    linuxOperatingSystemProfile: Schema.optional(
                      Schema.Struct({
                        username: Schema.optional(Schema.String),
                        password: Schema.optional(SensitiveString),
                        sshProfile: Schema.optional(
                          Schema.Struct({
                            publicKeys: Schema.optional(
                              Schema.Array(
                                Schema.Struct({
                                  certificateData: Schema.optional(
                                    Schema.String,
                                  ),
                                }),
                              ),
                            ),
                          }),
                        ),
                      }),
                    ),
                  }),
                ),
                virtualNetworkProfile: Schema.optional(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                    subnet: Schema.optional(Schema.String),
                  }),
                ),
                dataDisksGroups: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      disksPerNode: Schema.optional(Schema.Number),
                      storageAccountType: Schema.optional(Schema.String),
                      diskSizeGB: Schema.optional(Schema.Number),
                    }),
                  ),
                ),
                scriptActions: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.String,
                      uri: Schema.String,
                      parameters: Schema.String,
                    }),
                  ),
                ),
                encryptDataDisks: Schema.optional(Schema.Boolean),
              }),
            ),
          ),
        }),
      ),
      storageProfile: Schema.optional(
        Schema.Struct({
          storageaccounts: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                isDefault: Schema.optional(Schema.Boolean),
                container: Schema.optional(Schema.String),
                fileSystem: Schema.optional(Schema.String),
                key: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                msiResourceId: Schema.optional(Schema.String),
                saskey: Schema.optional(Schema.String),
                fileshare: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
      diskEncryptionProperties: Schema.optional(
        Schema.Struct({
          vaultUri: Schema.optional(Schema.String),
          keyName: Schema.optional(Schema.String),
          keyVersion: Schema.optional(Schema.String),
          encryptionAlgorithm: Schema.optional(
            Schema.Literals(["RSA-OAEP", "RSA-OAEP-256", "RSA1_5"]),
          ),
          msiResourceId: Schema.optional(Schema.String),
          encryptionAtHost: Schema.optional(Schema.Boolean),
        }),
      ),
      encryptionInTransitProperties: Schema.optional(
        Schema.Struct({
          isEncryptionInTransitEnabled: Schema.optional(Schema.Boolean),
        }),
      ),
      minSupportedTlsVersion: Schema.optional(Schema.String),
      networkProperties: Schema.optional(
        Schema.Struct({
          resourceProviderConnection: Schema.optional(
            Schema.Literals(["Inbound", "Outbound"]),
          ),
          privateLink: Schema.optional(
            Schema.Literals(["Disabled", "Enabled"]),
          ),
        }),
      ),
      computeIsolationProperties: Schema.optional(
        Schema.Struct({
          enableComputeIsolation: Schema.optional(Schema.Boolean),
          hostSku: Schema.optional(Schema.String),
        }),
      ),
      privateLinkConfigurations: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            name: Schema.String,
            type: Schema.optional(Schema.String),
            properties: Schema.Struct({
              groupId: Schema.String,
              provisioningState: Schema.optional(
                Schema.Literals([
                  "InProgress",
                  "Failed",
                  "Succeeded",
                  "Canceled",
                  "Deleting",
                ]),
              ),
              ipConfigurations: Schema.Array(
                Schema.Struct({
                  id: Schema.optional(Schema.String),
                  name: Schema.String,
                  type: Schema.optional(Schema.String),
                  properties: Schema.optional(
                    Schema.Struct({
                      provisioningState: Schema.optional(
                        Schema.Literals([
                          "InProgress",
                          "Failed",
                          "Succeeded",
                          "Canceled",
                          "Deleting",
                        ]),
                      ),
                      primary: Schema.optional(Schema.Boolean),
                      privateIPAddress: Schema.optional(Schema.String),
                      privateIPAllocationMethod: Schema.optional(
                        Schema.Literals(["dynamic", "static"]),
                      ),
                      subnet: Schema.optional(
                        Schema.Struct({
                          id: Schema.optional(Schema.String),
                        }),
                      ),
                    }),
                  ),
                }),
              ),
            }),
          }),
        ),
      ),
    }),
  ),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.optional(
        Schema.Literals([
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned, UserAssigned",
          "None",
        ]),
      ),
      userAssignedIdentities: Schema.optional(
        Schema.Record(
          Schema.String,
          Schema.Struct({
            principalId: Schema.optional(Schema.String),
            clientId: Schema.optional(Schema.String),
            tenantId: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<ClustersCreateInput>;

// Output Schema
export interface ClustersCreateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ClustersCreateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ClustersCreateOutput>;

// The operation
/**
 * Creates a new HDInsight cluster with the specified parameters.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param api-version - The HDInsight client API Version.
 */
export const ClustersCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersCreateInput,
  outputSchema: ClustersCreateOutput,
}));
// Input Schema
export interface ClustersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ClustersDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<ClustersDeleteInput>;

// Output Schema
export type ClustersDeleteOutput = void;
export const ClustersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ClustersDeleteOutput>;

// The operation
/**
 * Deletes the specified HDInsight cluster.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param api-version - The HDInsight client API Version.
 */
export const ClustersDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersDeleteInput,
  outputSchema: ClustersDeleteOutput,
}));
// Input Schema
export interface ClustersExecuteScriptActionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  scriptActions?: {
    name: string;
    uri: string;
    parameters?: string;
    roles: string[];
    applicationName?: string;
  }[];
  persistOnSuccess: boolean;
}
export const ClustersExecuteScriptActionsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    scriptActions: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.String,
          uri: Schema.String,
          parameters: Schema.optional(Schema.String),
          roles: Schema.Array(Schema.String),
          applicationName: Schema.optional(Schema.String),
        }),
      ),
    ),
    persistOnSuccess: Schema.Boolean,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/executeScriptActions",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ClustersExecuteScriptActionsInput>;

// Output Schema
export type ClustersExecuteScriptActionsOutput = void;
export const ClustersExecuteScriptActionsOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ClustersExecuteScriptActionsOutput>;

// The operation
/**
 * Executes script actions on the specified HDInsight cluster.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param api-version - The HDInsight client API Version.
 * @param scriptActions - The list of run time script actions.
 * @param persistOnSuccess - Gets or sets if the scripts needs to be persisted.
 */
export const ClustersExecuteScriptActions =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ClustersExecuteScriptActionsInput,
    outputSchema: ClustersExecuteScriptActionsOutput,
  }));
// Input Schema
export interface ClustersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ClustersGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<ClustersGetInput>;

// Output Schema
export interface ClustersGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ClustersGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ClustersGetOutput>;

// The operation
/**
 * Gets the specified cluster.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param api-version - The HDInsight client API Version.
 */
export const ClustersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersGetInput,
  outputSchema: ClustersGetOutput,
}));
// Input Schema
export interface ClustersGetAzureAsyncOperationStatusInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  operationId: string;
}
export const ClustersGetAzureAsyncOperationStatusInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/azureasyncoperations/{operationId}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ClustersGetAzureAsyncOperationStatusInput>;

// Output Schema
export interface ClustersGetAzureAsyncOperationStatusOutput {
  status?: "InProgress" | "Succeeded" | "Failed";
  error?: { code?: string; message?: string };
}
export const ClustersGetAzureAsyncOperationStatusOutput =
  /*@__PURE__*/ Schema.Struct({
    status: Schema.optional(
      Schema.Literals(["InProgress", "Succeeded", "Failed"]),
    ),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ClustersGetAzureAsyncOperationStatusOutput>;

// The operation
/**
 * The the async operation status.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param api-version - The HDInsight client API Version.
 * @param operationId - The long running operation id.
 */
export const ClustersGetAzureAsyncOperationStatus =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ClustersGetAzureAsyncOperationStatusInput,
    outputSchema: ClustersGetAzureAsyncOperationStatusOutput,
  }));
// Input Schema
export interface ClustersGetGatewaySettingsInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ClustersGetGatewaySettingsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/getGatewaySettings",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ClustersGetGatewaySettingsInput>;

// Output Schema
export interface ClustersGetGatewaySettingsOutput {
  "restAuthCredential.isEnabled"?: string;
  "restAuthCredential.username"?: string;
  "restAuthCredential.password"?: Redacted.Redacted<string>;
}
export const ClustersGetGatewaySettingsOutput =
  /*@__PURE__*/ Schema.Struct({
    "restAuthCredential.isEnabled": Schema.optional(Schema.String),
    "restAuthCredential.username": Schema.optional(Schema.String),
    "restAuthCredential.password": Schema.optional(SensitiveOutputString),
  }) as unknown as Schema.Codec<ClustersGetGatewaySettingsOutput>;

// The operation
/**
 * Gets the gateway settings for the specified cluster.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param api-version - The HDInsight client API Version.
 */
export const ClustersGetGatewaySettings = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersGetGatewaySettingsInput,
  outputSchema: ClustersGetGatewaySettingsOutput,
}));
// Input Schema
export interface ClustersListInput {
  subscriptionId: string;
}
export const ClustersListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.HDInsight/clusters",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<ClustersListInput>;

// Output Schema
export interface ClustersListOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const ClustersListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ClustersListOutput>;

// The operation
/**
 * Lists all the HDInsight clusters under the subscription.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param api-version - The HDInsight client API Version.
 */
export const ClustersList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersListInput,
  outputSchema: ClustersListOutput,
}));
// Input Schema
export interface ClustersListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const ClustersListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ClustersListByResourceGroupInput>;

// Output Schema
export interface ClustersListByResourceGroupOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const ClustersListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ClustersListByResourceGroupOutput>;

// The operation
/**
 * Lists the HDInsight clusters in a resource group.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param api-version - The HDInsight client API Version.
 */
export const ClustersListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersListByResourceGroupInput,
  outputSchema: ClustersListByResourceGroupOutput,
}));
// Input Schema
export interface ClustersResizeInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  roleName: "workernode";
  targetInstanceCount?: number;
}
export const ClustersResizeInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  roleName: Schema.Literals(["workernode"]).pipe(T.PathParam()),
  targetInstanceCount: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/roles/{roleName}/resize",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<ClustersResizeInput>;

// Output Schema
export type ClustersResizeOutput = void;
export const ClustersResizeOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ClustersResizeOutput>;

// The operation
/**
 * Resizes the specified HDInsight cluster to the specified size.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param roleName - The constant value for the roleName
 * @param api-version - The HDInsight client API Version.
 */
export const ClustersResize = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersResizeInput,
  outputSchema: ClustersResizeOutput,
}));
// Input Schema
export interface ClustersRotateDiskEncryptionKeyInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  vaultUri?: string;
  keyName?: string;
  keyVersion?: string;
}
export const ClustersRotateDiskEncryptionKeyInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    vaultUri: Schema.optional(Schema.String),
    keyName: Schema.optional(Schema.String),
    keyVersion: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/rotatediskencryptionkey",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ClustersRotateDiskEncryptionKeyInput>;

// Output Schema
export type ClustersRotateDiskEncryptionKeyOutput = void;
export const ClustersRotateDiskEncryptionKeyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ClustersRotateDiskEncryptionKeyOutput>;

// The operation
/**
 * Rotate disk encryption key of the specified HDInsight cluster.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param api-version - The HDInsight client API Version.
 */
export const ClustersRotateDiskEncryptionKey =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ClustersRotateDiskEncryptionKeyInput,
    outputSchema: ClustersRotateDiskEncryptionKeyOutput,
  }));
// Input Schema
export interface ClustersUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  tags?: Record<string, string> | null;
}
export const ClustersUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(
    Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<ClustersUpdateInput>;

// Output Schema
export interface ClustersUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ClustersUpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ClustersUpdateOutput>;

// The operation
/**
 * Patch HDInsight cluster with the specified parameters.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param api-version - The HDInsight client API Version.
 */
export const ClustersUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersUpdateInput,
  outputSchema: ClustersUpdateOutput,
}));
// Input Schema
export interface ClustersUpdateAutoScaleConfigurationInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  roleName: "workernode";
  autoscale?: {
    capacity?: { minInstanceCount?: number; maxInstanceCount?: number };
    recurrence?: {
      timeZone?: string;
      schedule?: {
        days?: (
          | "Monday"
          | "Tuesday"
          | "Wednesday"
          | "Thursday"
          | "Friday"
          | "Saturday"
          | "Sunday"
        )[];
        timeAndCapacity?: {
          time?: string;
          minInstanceCount?: number;
          maxInstanceCount?: number;
        };
      }[];
    };
  };
}
export const ClustersUpdateAutoScaleConfigurationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    roleName: Schema.Literals(["workernode"]).pipe(T.PathParam()),
    autoscale: Schema.optional(
      Schema.Struct({
        capacity: Schema.optional(
          Schema.Struct({
            minInstanceCount: Schema.optional(Schema.Number),
            maxInstanceCount: Schema.optional(Schema.Number),
          }),
        ),
        recurrence: Schema.optional(
          Schema.Struct({
            timeZone: Schema.optional(Schema.String),
            schedule: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  days: Schema.optional(
                    Schema.Array(
                      Schema.Literals([
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday",
                      ]),
                    ),
                  ),
                  timeAndCapacity: Schema.optional(
                    Schema.Struct({
                      time: Schema.optional(Schema.String),
                      minInstanceCount: Schema.optional(Schema.Number),
                      maxInstanceCount: Schema.optional(Schema.Number),
                    }),
                  ),
                }),
              ),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/roles/{roleName}/autoscale",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ClustersUpdateAutoScaleConfigurationInput>;

// Output Schema
export type ClustersUpdateAutoScaleConfigurationOutput = void;
export const ClustersUpdateAutoScaleConfigurationOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ClustersUpdateAutoScaleConfigurationOutput>;

// The operation
/**
 * Updates the Autoscale Configuration for HDInsight cluster.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param roleName - The constant value for the roleName
 * @param api-version - The HDInsight client API Version.
 */
export const ClustersUpdateAutoScaleConfiguration =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ClustersUpdateAutoScaleConfigurationInput,
    outputSchema: ClustersUpdateAutoScaleConfigurationOutput,
  }));
// Input Schema
export interface ClustersUpdateGatewaySettingsInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  "restAuthCredential.isEnabled"?: boolean;
  "restAuthCredential.username"?: string;
  "restAuthCredential.password"?: string | Redacted.Redacted<string>;
}
export const ClustersUpdateGatewaySettingsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    "restAuthCredential.isEnabled": Schema.optional(Schema.Boolean),
    "restAuthCredential.username": Schema.optional(Schema.String),
    "restAuthCredential.password": Schema.optional(SensitiveString),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/updateGatewaySettings",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ClustersUpdateGatewaySettingsInput>;

// Output Schema
export type ClustersUpdateGatewaySettingsOutput = void;
export const ClustersUpdateGatewaySettingsOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ClustersUpdateGatewaySettingsOutput>;

// The operation
/**
 * Configures the gateway settings on the specified cluster.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param api-version - The HDInsight client API Version.
 */
export const ClustersUpdateGatewaySettings =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ClustersUpdateGatewaySettingsInput,
    outputSchema: ClustersUpdateGatewaySettingsOutput,
  }));
// Input Schema
export interface ClustersUpdateIdentityCertificateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationId?: string;
  certificate?: string;
  certificatePassword?: string | Redacted.Redacted<string>;
}
export const ClustersUpdateIdentityCertificateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    applicationId: Schema.optional(Schema.String),
    certificate: Schema.optional(Schema.String),
    certificatePassword: Schema.optional(SensitiveString),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/updateClusterIdentityCertificate",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ClustersUpdateIdentityCertificateInput>;

// Output Schema
export type ClustersUpdateIdentityCertificateOutput = void;
export const ClustersUpdateIdentityCertificateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ClustersUpdateIdentityCertificateOutput>;

// The operation
/**
 * Updates the cluster identity certificate.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param api-version - The HDInsight client API Version.
 */
export const ClustersUpdateIdentityCertificate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ClustersUpdateIdentityCertificateInput,
    outputSchema: ClustersUpdateIdentityCertificateOutput,
  }));
// Input Schema
export interface ConfigurationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  configurationName: string;
}
export const ConfigurationsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  configurationName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/configurations/{configurationName}",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<ConfigurationsGetInput>;

// Output Schema
export type ConfigurationsGetOutput = Record<string, string>;
export const ConfigurationsGetOutput =
  /*@__PURE__*/ Schema.Record(
    Schema.String,
    Schema.String,
  ) as unknown as Schema.Codec<ConfigurationsGetOutput>;

// The operation
/**
 * The configuration object for the specified cluster. This API is not recommended and might be removed in the future. Please consider using List configurations API instead.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param configurationName - The name of the cluster configuration.
 * @param api-version - The HDInsight client API Version.
 */
export const ConfigurationsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConfigurationsGetInput,
  outputSchema: ConfigurationsGetOutput,
}));
// Input Schema
export interface ConfigurationsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ConfigurationsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/configurations",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationsListInput>;

// Output Schema
export interface ConfigurationsListOutput {
  configurations?: Record<string, Record<string, string>>;
}
export const ConfigurationsListOutput =
  /*@__PURE__*/ Schema.Struct({
    configurations: Schema.optional(
      Schema.Record(Schema.String, Schema.Record(Schema.String, Schema.String)),
    ),
  }) as unknown as Schema.Codec<ConfigurationsListOutput>;

// The operation
/**
 * Gets all configuration information for an HDI cluster.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param api-version - The HDInsight client API Version.
 */
export const ConfigurationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConfigurationsListInput,
  outputSchema: ConfigurationsListOutput,
}));
// Input Schema
export interface ExtensionsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  extensionName: string;
  workspaceId?: string;
  primaryKey?: string;
}
export const ExtensionsCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  extensionName: Schema.String.pipe(T.PathParam()),
  workspaceId: Schema.optional(Schema.String),
  primaryKey: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/{extensionName}",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<ExtensionsCreateInput>;

// Output Schema
export type ExtensionsCreateOutput = void;
export const ExtensionsCreateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ExtensionsCreateOutput>;

// The operation
/**
 * Creates an HDInsight cluster extension.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param extensionName - The name of the cluster extension.
 * @param api-version - The HDInsight client API Version.
 */
export const ExtensionsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ExtensionsCreateInput,
  outputSchema: ExtensionsCreateOutput,
}));
// Input Schema
export interface ExtensionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  extensionName: string;
}
export const ExtensionsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  extensionName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/{extensionName}",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<ExtensionsDeleteInput>;

// Output Schema
export type ExtensionsDeleteOutput = void;
export const ExtensionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ExtensionsDeleteOutput>;

// The operation
/**
 * Deletes the specified extension for HDInsight cluster.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param extensionName - The name of the cluster extension.
 * @param api-version - The HDInsight client API Version.
 */
export const ExtensionsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ExtensionsDeleteInput,
  outputSchema: ExtensionsDeleteOutput,
}));
// Input Schema
export interface ExtensionsDisableAzureMonitorInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ExtensionsDisableAzureMonitorInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/azureMonitor",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ExtensionsDisableAzureMonitorInput>;

// Output Schema
export type ExtensionsDisableAzureMonitorOutput = void;
export const ExtensionsDisableAzureMonitorOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ExtensionsDisableAzureMonitorOutput>;

// The operation
/**
 * Disables the Azure Monitor on the HDInsight cluster.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param api-version - The HDInsight client API Version.
 */
export const ExtensionsDisableAzureMonitor =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ExtensionsDisableAzureMonitorInput,
    outputSchema: ExtensionsDisableAzureMonitorOutput,
  }));
// Input Schema
export interface ExtensionsDisableMonitoringInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ExtensionsDisableMonitoringInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/clustermonitoring",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ExtensionsDisableMonitoringInput>;

// Output Schema
export type ExtensionsDisableMonitoringOutput = void;
export const ExtensionsDisableMonitoringOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ExtensionsDisableMonitoringOutput>;

// The operation
/**
 * Disables the Operations Management Suite (OMS) on the HDInsight cluster.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param api-version - The HDInsight client API Version.
 */
export const ExtensionsDisableMonitoring = /*@__PURE__*/ API.make(() => ({
  inputSchema: ExtensionsDisableMonitoringInput,
  outputSchema: ExtensionsDisableMonitoringOutput,
}));
// Input Schema
export interface ExtensionsEnableAzureMonitorInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  workspaceId?: string;
  primaryKey?: string;
  selectedConfigurations?: {
    configurationVersion?: string;
    globalConfigurations?: Record<string, string>;
    tableList?: { name?: string }[];
  };
}
export const ExtensionsEnableAzureMonitorInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    workspaceId: Schema.optional(Schema.String),
    primaryKey: Schema.optional(Schema.String),
    selectedConfigurations: Schema.optional(
      Schema.Struct({
        configurationVersion: Schema.optional(Schema.String),
        globalConfigurations: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        tableList: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/azureMonitor",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ExtensionsEnableAzureMonitorInput>;

// Output Schema
export type ExtensionsEnableAzureMonitorOutput = void;
export const ExtensionsEnableAzureMonitorOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ExtensionsEnableAzureMonitorOutput>;

// The operation
/**
 * Enables the Azure Monitor on the HDInsight cluster.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param api-version - The HDInsight client API Version.
 */
export const ExtensionsEnableAzureMonitor =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ExtensionsEnableAzureMonitorInput,
    outputSchema: ExtensionsEnableAzureMonitorOutput,
  }));
// Input Schema
export interface ExtensionsEnableMonitoringInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  workspaceId?: string;
  primaryKey?: string;
}
export const ExtensionsEnableMonitoringInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    workspaceId: Schema.optional(Schema.String),
    primaryKey: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/clustermonitoring",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ExtensionsEnableMonitoringInput>;

// Output Schema
export type ExtensionsEnableMonitoringOutput = void;
export const ExtensionsEnableMonitoringOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ExtensionsEnableMonitoringOutput>;

// The operation
/**
 * Enables the Operations Management Suite (OMS) on the HDInsight cluster.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param api-version - The HDInsight client API Version.
 */
export const ExtensionsEnableMonitoring = /*@__PURE__*/ API.make(() => ({
  inputSchema: ExtensionsEnableMonitoringInput,
  outputSchema: ExtensionsEnableMonitoringOutput,
}));
// Input Schema
export interface ExtensionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  extensionName: string;
}
export const ExtensionsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  extensionName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/{extensionName}",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<ExtensionsGetInput>;

// Output Schema
export interface ExtensionsGetOutput {
  clusterMonitoringEnabled?: boolean;
  workspaceId?: string;
}
export const ExtensionsGetOutput = /*@__PURE__*/ Schema.Struct({
  clusterMonitoringEnabled: Schema.optional(Schema.Boolean),
  workspaceId: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ExtensionsGetOutput>;

// The operation
/**
 * Gets the extension properties for the specified HDInsight cluster extension.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param extensionName - The name of the cluster extension.
 * @param api-version - The HDInsight client API Version.
 */
export const ExtensionsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ExtensionsGetInput,
  outputSchema: ExtensionsGetOutput,
}));
// Input Schema
export interface ExtensionsGetAzureAsyncOperationStatusInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  extensionName: string;
  operationId: string;
}
export const ExtensionsGetAzureAsyncOperationStatusInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    extensionName: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/{extensionName}/azureAsyncOperations/{operationId}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ExtensionsGetAzureAsyncOperationStatusInput>;

// Output Schema
export interface ExtensionsGetAzureAsyncOperationStatusOutput {
  status?: "InProgress" | "Succeeded" | "Failed";
  error?: { code?: string; message?: string };
}
export const ExtensionsGetAzureAsyncOperationStatusOutput =
  /*@__PURE__*/ Schema.Struct({
    status: Schema.optional(
      Schema.Literals(["InProgress", "Succeeded", "Failed"]),
    ),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ExtensionsGetAzureAsyncOperationStatusOutput>;

// The operation
/**
 * Gets the async operation status.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param extensionName - The name of the cluster extension.
 * @param api-version - The HDInsight client API Version.
 * @param operationId - The long running operation id.
 */
export const ExtensionsGetAzureAsyncOperationStatus =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ExtensionsGetAzureAsyncOperationStatusInput,
    outputSchema: ExtensionsGetAzureAsyncOperationStatusOutput,
  }));
// Input Schema
export interface ExtensionsGetAzureMonitorStatusInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ExtensionsGetAzureMonitorStatusInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/azureMonitor",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ExtensionsGetAzureMonitorStatusInput>;

// Output Schema
export interface ExtensionsGetAzureMonitorStatusOutput {
  clusterMonitoringEnabled?: boolean;
  workspaceId?: string;
  selectedConfigurations?: {
    configurationVersion?: string;
    globalConfigurations?: Record<string, string>;
    tableList?: { name?: string }[];
  };
}
export const ExtensionsGetAzureMonitorStatusOutput =
  /*@__PURE__*/ Schema.Struct({
    clusterMonitoringEnabled: Schema.optional(Schema.Boolean),
    workspaceId: Schema.optional(Schema.String),
    selectedConfigurations: Schema.optional(
      Schema.Struct({
        configurationVersion: Schema.optional(Schema.String),
        globalConfigurations: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        tableList: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ExtensionsGetAzureMonitorStatusOutput>;

// The operation
/**
 * Gets the status of Azure Monitor on the HDInsight cluster.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param api-version - The HDInsight client API Version.
 */
export const ExtensionsGetAzureMonitorStatus =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ExtensionsGetAzureMonitorStatusInput,
    outputSchema: ExtensionsGetAzureMonitorStatusOutput,
  }));
// Input Schema
export interface ExtensionsGetMonitoringStatusInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ExtensionsGetMonitoringStatusInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/clustermonitoring",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ExtensionsGetMonitoringStatusInput>;

// Output Schema
export interface ExtensionsGetMonitoringStatusOutput {
  clusterMonitoringEnabled?: boolean;
  workspaceId?: string;
}
export const ExtensionsGetMonitoringStatusOutput =
  /*@__PURE__*/ Schema.Struct({
    clusterMonitoringEnabled: Schema.optional(Schema.Boolean),
    workspaceId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ExtensionsGetMonitoringStatusOutput>;

// The operation
/**
 * Gets the status of Operations Management Suite (OMS) on the HDInsight cluster.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param api-version - The HDInsight client API Version.
 */
export const ExtensionsGetMonitoringStatus =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ExtensionsGetMonitoringStatusInput,
    outputSchema: ExtensionsGetMonitoringStatusOutput,
  }));
// Input Schema
export interface LocationsCheckNameAvailabilityInput {
  subscriptionId: string;
  location: string;
  name?: string;
  type?: string;
}
export const LocationsCheckNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HDInsight/locations/{location}/checkNameAvailability",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<LocationsCheckNameAvailabilityInput>;

// Output Schema
export interface LocationsCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: string;
  message?: string;
}
export const LocationsCheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<LocationsCheckNameAvailabilityOutput>;

// The operation
/**
 * Check the cluster name is available or not.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param location - The Azure location (region) for which to make the request.
 * @param api-version - The HDInsight client API Version.
 */
export const LocationsCheckNameAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: LocationsCheckNameAvailabilityInput,
    outputSchema: LocationsCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface LocationsGetAzureAsyncOperationStatusInput {
  subscriptionId: string;
  location: string;
  operationId: string;
}
export const LocationsGetAzureAsyncOperationStatusInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HDInsight/locations/{location}/azureasyncoperations/{operationId}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<LocationsGetAzureAsyncOperationStatusInput>;

// Output Schema
export interface LocationsGetAzureAsyncOperationStatusOutput {
  status?: "InProgress" | "Succeeded" | "Failed";
  error?: { code?: string; message?: string };
}
export const LocationsGetAzureAsyncOperationStatusOutput =
  /*@__PURE__*/ Schema.Struct({
    status: Schema.optional(
      Schema.Literals(["InProgress", "Succeeded", "Failed"]),
    ),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<LocationsGetAzureAsyncOperationStatusOutput>;

// The operation
/**
 * Get the async operation status.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param location - The Azure location (region) for which to make the request.
 * @param api-version - The HDInsight client API Version.
 * @param operationId - The long running operation id.
 */
export const LocationsGetAzureAsyncOperationStatus =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: LocationsGetAzureAsyncOperationStatusInput,
    outputSchema: LocationsGetAzureAsyncOperationStatusOutput,
  }));
// Input Schema
export interface LocationsGetCapabilitiesInput {
  subscriptionId: string;
  location: string;
}
export const LocationsGetCapabilitiesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HDInsight/locations/{location}/capabilities",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<LocationsGetCapabilitiesInput>;

// Output Schema
export interface LocationsGetCapabilitiesOutput {
  versions?: Record<
    string,
    {
      available?: {
        friendlyName?: string;
        displayName?: string;
        isDefault?: boolean;
        componentVersions?: Record<string, string>;
      }[];
    }
  >;
  regions?: Record<string, { available?: string[] }>;
  features?: string[];
  quota?: {
    coresUsed?: number;
    maxCoresAllowed?: number;
    regionalQuotas?: {
      regionName?: string;
      coresUsed?: number;
      coresAvailable?: number;
    }[];
  };
}
export const LocationsGetCapabilitiesOutput =
  /*@__PURE__*/ Schema.Struct({
    versions: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Struct({
          available: Schema.optional(
            Schema.Array(
              Schema.Struct({
                friendlyName: Schema.optional(Schema.String),
                displayName: Schema.optional(Schema.String),
                isDefault: Schema.optional(Schema.Boolean),
                componentVersions: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
              }),
            ),
          ),
        }),
      ),
    ),
    regions: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Struct({
          available: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
    features: Schema.optional(Schema.Array(Schema.String)),
    quota: Schema.optional(
      Schema.Struct({
        coresUsed: Schema.optional(Schema.Number),
        maxCoresAllowed: Schema.optional(Schema.Number),
        regionalQuotas: Schema.optional(
          Schema.Array(
            Schema.Struct({
              regionName: Schema.optional(Schema.String),
              coresUsed: Schema.optional(Schema.Number),
              coresAvailable: Schema.optional(Schema.Number),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<LocationsGetCapabilitiesOutput>;

// The operation
/**
 * Gets the capabilities for the specified location.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param location - The Azure location (region) for which to make the request.
 * @param api-version - The HDInsight client API Version.
 */
export const LocationsGetCapabilities = /*@__PURE__*/ API.make(() => ({
  inputSchema: LocationsGetCapabilitiesInput,
  outputSchema: LocationsGetCapabilitiesOutput,
}));
// Input Schema
export interface LocationsListBillingSpecsInput {
  subscriptionId: string;
  location: string;
}
export const LocationsListBillingSpecsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HDInsight/locations/{location}/billingSpecs",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<LocationsListBillingSpecsInput>;

// Output Schema
export interface LocationsListBillingSpecsOutput {
  vmSizes?: string[];
  vmSizesWithEncryptionAtHost?: string[];
  vmSizeFilters?: {
    filterMode?: "Exclude" | "Include" | "Recommend" | "Default";
    regions?: string[];
    clusterFlavors?: string[];
    nodeTypes?: string[];
    clusterVersions?: string[];
    osType?: ("Windows" | "Linux")[];
    vmSizes?: string[];
    espApplied?: string;
    computeIsolationSupported?: string;
  }[];
  vmSizeProperties?: {
    name?: string;
    cores?: number;
    dataDiskStorageTier?: string;
    label?: string;
    maxDataDiskCount?: number;
    memoryInMb?: number;
    supportedByVirtualMachines?: boolean;
    supportedByWebWorkerRoles?: boolean;
    virtualMachineResourceDiskSizeInMb?: number;
    webWorkerResourceDiskSizeInMb?: number;
  }[];
  billingResources?: {
    region?: string;
    billingMeters?: {
      meterParameter?: string;
      meter?: string;
      unit?: string;
    }[];
    diskBillingMeters?: {
      diskRpMeter?: string;
      sku?: string;
      tier?: "Standard" | "Premium";
    }[];
  }[];
}
export const LocationsListBillingSpecsOutput =
  /*@__PURE__*/ Schema.Struct({
    vmSizes: Schema.optional(Schema.Array(Schema.String)),
    vmSizesWithEncryptionAtHost: Schema.optional(Schema.Array(Schema.String)),
    vmSizeFilters: Schema.optional(
      Schema.Array(
        Schema.Struct({
          filterMode: Schema.optional(
            Schema.Literals(["Exclude", "Include", "Recommend", "Default"]),
          ),
          regions: Schema.optional(Schema.Array(Schema.String)),
          clusterFlavors: Schema.optional(Schema.Array(Schema.String)),
          nodeTypes: Schema.optional(Schema.Array(Schema.String)),
          clusterVersions: Schema.optional(Schema.Array(Schema.String)),
          osType: Schema.optional(
            Schema.Array(Schema.Literals(["Windows", "Linux"])),
          ),
          vmSizes: Schema.optional(Schema.Array(Schema.String)),
          espApplied: Schema.optional(Schema.String),
          computeIsolationSupported: Schema.optional(Schema.String),
        }),
      ),
    ),
    vmSizeProperties: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          cores: Schema.optional(Schema.Number),
          dataDiskStorageTier: Schema.optional(Schema.String),
          label: Schema.optional(Schema.String),
          maxDataDiskCount: Schema.optional(Schema.Number),
          memoryInMb: Schema.optional(Schema.Number),
          supportedByVirtualMachines: Schema.optional(Schema.Boolean),
          supportedByWebWorkerRoles: Schema.optional(Schema.Boolean),
          virtualMachineResourceDiskSizeInMb: Schema.optional(Schema.Number),
          webWorkerResourceDiskSizeInMb: Schema.optional(Schema.Number),
        }),
      ),
    ),
    billingResources: Schema.optional(
      Schema.Array(
        Schema.Struct({
          region: Schema.optional(Schema.String),
          billingMeters: Schema.optional(
            Schema.Array(
              Schema.Struct({
                meterParameter: Schema.optional(Schema.String),
                meter: Schema.optional(Schema.String),
                unit: Schema.optional(Schema.String),
              }),
            ),
          ),
          diskBillingMeters: Schema.optional(
            Schema.Array(
              Schema.Struct({
                diskRpMeter: Schema.optional(Schema.String),
                sku: Schema.optional(Schema.String),
                tier: Schema.optional(Schema.Literals(["Standard", "Premium"])),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<LocationsListBillingSpecsOutput>;

// The operation
/**
 * Lists the billingSpecs for the specified subscription and location.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param location - The Azure location (region) for which to make the request.
 * @param api-version - The HDInsight client API Version.
 */
export const LocationsListBillingSpecs = /*@__PURE__*/ API.make(() => ({
  inputSchema: LocationsListBillingSpecsInput,
  outputSchema: LocationsListBillingSpecsOutput,
}));
// Input Schema
export interface LocationsListUsagesInput {
  subscriptionId: string;
  location: string;
}
export const LocationsListUsagesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HDInsight/locations/{location}/usages",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<LocationsListUsagesInput>;

// Output Schema
export interface LocationsListUsagesOutput {
  value?: {
    unit?: string;
    currentValue?: number;
    limit?: number;
    name?: { value?: string; localizedValue?: string };
  }[];
}
export const LocationsListUsagesOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          unit: Schema.optional(Schema.String),
          currentValue: Schema.optional(Schema.Number),
          limit: Schema.optional(Schema.Number),
          name: Schema.optional(
            Schema.Struct({
              value: Schema.optional(Schema.String),
              localizedValue: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<LocationsListUsagesOutput>;

// The operation
/**
 * Lists the usages for the specified location.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param location - The Azure location (region) for which to make the request.
 * @param api-version - The HDInsight client API Version.
 */
export const LocationsListUsages = /*@__PURE__*/ API.make(() => ({
  inputSchema: LocationsListUsagesInput,
  outputSchema: LocationsListUsagesOutput,
}));
// Input Schema
export interface LocationsValidateClusterCreateRequestInput {
  subscriptionId: string;
  location: string;
  name?: string;
  type?: string;
  tenantId?: string;
  fetchAaddsResource?: boolean;
  tags?: Record<string, string>;
  zones?: string[];
  properties?: {
    clusterVersion?: string;
    osType?: "Windows" | "Linux";
    tier?: "Standard" | "Premium";
    clusterDefinition?: {
      blueprint?: string;
      kind?: string;
      componentVersion?: Record<string, string>;
      configurations?: unknown;
    };
    kafkaRestProperties?: {
      clientGroupInfo?: { groupName?: string; groupId?: string };
      configurationOverride?: Record<string, string>;
    };
    securityProfile?: {
      directoryType?: "ActiveDirectory";
      domain?: string;
      organizationalUnitDN?: string;
      ldapsUrls?: string[];
      domainUsername?: string;
      domainUserPassword?: string | Redacted.Redacted<string>;
      clusterUsersGroupDNs?: string[];
      aaddsResourceId?: string;
      msiResourceId?: string;
    };
    computeProfile?: {
      roles?: {
        name?: string;
        minInstanceCount?: number;
        targetInstanceCount?: number;
        VMGroupName?: string;
        autoscale?: {
          capacity?: { minInstanceCount?: number; maxInstanceCount?: number };
          recurrence?: {
            timeZone?: string;
            schedule?: {
              days?: (
                | "Monday"
                | "Tuesday"
                | "Wednesday"
                | "Thursday"
                | "Friday"
                | "Saturday"
                | "Sunday"
              )[];
              timeAndCapacity?: {
                time?: string;
                minInstanceCount?: number;
                maxInstanceCount?: number;
              };
            }[];
          };
        };
        hardwareProfile?: { vmSize?: string };
        osProfile?: {
          linuxOperatingSystemProfile?: {
            username?: string;
            password?: string | Redacted.Redacted<string>;
            sshProfile?: { publicKeys?: { certificateData?: string }[] };
          };
        };
        virtualNetworkProfile?: { id?: string; subnet?: string };
        dataDisksGroups?: {
          disksPerNode?: number;
          storageAccountType?: string;
          diskSizeGB?: number;
        }[];
        scriptActions?: { name: string; uri: string; parameters: string }[];
        encryptDataDisks?: boolean;
      }[];
    };
    storageProfile?: {
      storageaccounts?: {
        name?: string;
        isDefault?: boolean;
        container?: string;
        fileSystem?: string;
        key?: string;
        resourceId?: string;
        msiResourceId?: string;
        saskey?: string;
        fileshare?: string;
      }[];
    };
    diskEncryptionProperties?: {
      vaultUri?: string;
      keyName?: string;
      keyVersion?: string;
      encryptionAlgorithm?: "RSA-OAEP" | "RSA-OAEP-256" | "RSA1_5";
      msiResourceId?: string;
      encryptionAtHost?: boolean;
    };
    encryptionInTransitProperties?: { isEncryptionInTransitEnabled?: boolean };
    minSupportedTlsVersion?: string;
    networkProperties?: {
      resourceProviderConnection?: "Inbound" | "Outbound";
      privateLink?: "Disabled" | "Enabled";
    };
    computeIsolationProperties?: {
      enableComputeIsolation?: boolean;
      hostSku?: string;
    };
    privateLinkConfigurations?: {
      id?: string;
      name: string;
      type?: string;
      properties: {
        groupId: string;
        provisioningState?:
          | "InProgress"
          | "Failed"
          | "Succeeded"
          | "Canceled"
          | "Deleting";
        ipConfigurations: {
          id?: string;
          name: string;
          type?: string;
          properties?: {
            provisioningState?:
              | "InProgress"
              | "Failed"
              | "Succeeded"
              | "Canceled"
              | "Deleting";
            primary?: boolean;
            privateIPAddress?: string;
            privateIPAllocationMethod?: "dynamic" | "static";
            subnet?: { id?: string };
          };
        }[];
      };
    }[];
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned"
      | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string; tenantId?: string }
    >;
  };
}
export const LocationsValidateClusterCreateRequestInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    tenantId: Schema.optional(Schema.String),
    fetchAaddsResource: Schema.optional(Schema.Boolean),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    zones: Schema.optional(Schema.Array(Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        clusterVersion: Schema.optional(Schema.String),
        osType: Schema.optional(Schema.Literals(["Windows", "Linux"])),
        tier: Schema.optional(Schema.Literals(["Standard", "Premium"])),
        clusterDefinition: Schema.optional(
          Schema.Struct({
            blueprint: Schema.optional(Schema.String),
            kind: Schema.optional(Schema.String),
            componentVersion: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            configurations: Schema.optional(Schema.Unknown),
          }),
        ),
        kafkaRestProperties: Schema.optional(
          Schema.Struct({
            clientGroupInfo: Schema.optional(
              Schema.Struct({
                groupName: Schema.optional(Schema.String),
                groupId: Schema.optional(Schema.String),
              }),
            ),
            configurationOverride: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
          }),
        ),
        securityProfile: Schema.optional(
          Schema.Struct({
            directoryType: Schema.optional(
              Schema.Literals(["ActiveDirectory"]),
            ),
            domain: Schema.optional(Schema.String),
            organizationalUnitDN: Schema.optional(Schema.String),
            ldapsUrls: Schema.optional(Schema.Array(Schema.String)),
            domainUsername: Schema.optional(Schema.String),
            domainUserPassword: Schema.optional(SensitiveString),
            clusterUsersGroupDNs: Schema.optional(Schema.Array(Schema.String)),
            aaddsResourceId: Schema.optional(Schema.String),
            msiResourceId: Schema.optional(Schema.String),
          }),
        ),
        computeProfile: Schema.optional(
          Schema.Struct({
            roles: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  minInstanceCount: Schema.optional(Schema.Number),
                  targetInstanceCount: Schema.optional(Schema.Number),
                  VMGroupName: Schema.optional(Schema.String),
                  autoscale: Schema.optional(
                    Schema.Struct({
                      capacity: Schema.optional(
                        Schema.Struct({
                          minInstanceCount: Schema.optional(Schema.Number),
                          maxInstanceCount: Schema.optional(Schema.Number),
                        }),
                      ),
                      recurrence: Schema.optional(
                        Schema.Struct({
                          timeZone: Schema.optional(Schema.String),
                          schedule: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                days: Schema.optional(
                                  Schema.Array(
                                    Schema.Literals([
                                      "Monday",
                                      "Tuesday",
                                      "Wednesday",
                                      "Thursday",
                                      "Friday",
                                      "Saturday",
                                      "Sunday",
                                    ]),
                                  ),
                                ),
                                timeAndCapacity: Schema.optional(
                                  Schema.Struct({
                                    time: Schema.optional(Schema.String),
                                    minInstanceCount: Schema.optional(
                                      Schema.Number,
                                    ),
                                    maxInstanceCount: Schema.optional(
                                      Schema.Number,
                                    ),
                                  }),
                                ),
                              }),
                            ),
                          ),
                        }),
                      ),
                    }),
                  ),
                  hardwareProfile: Schema.optional(
                    Schema.Struct({
                      vmSize: Schema.optional(Schema.String),
                    }),
                  ),
                  osProfile: Schema.optional(
                    Schema.Struct({
                      linuxOperatingSystemProfile: Schema.optional(
                        Schema.Struct({
                          username: Schema.optional(Schema.String),
                          password: Schema.optional(SensitiveString),
                          sshProfile: Schema.optional(
                            Schema.Struct({
                              publicKeys: Schema.optional(
                                Schema.Array(
                                  Schema.Struct({
                                    certificateData: Schema.optional(
                                      Schema.String,
                                    ),
                                  }),
                                ),
                              ),
                            }),
                          ),
                        }),
                      ),
                    }),
                  ),
                  virtualNetworkProfile: Schema.optional(
                    Schema.Struct({
                      id: Schema.optional(Schema.String),
                      subnet: Schema.optional(Schema.String),
                    }),
                  ),
                  dataDisksGroups: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        disksPerNode: Schema.optional(Schema.Number),
                        storageAccountType: Schema.optional(Schema.String),
                        diskSizeGB: Schema.optional(Schema.Number),
                      }),
                    ),
                  ),
                  scriptActions: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        name: Schema.String,
                        uri: Schema.String,
                        parameters: Schema.String,
                      }),
                    ),
                  ),
                  encryptDataDisks: Schema.optional(Schema.Boolean),
                }),
              ),
            ),
          }),
        ),
        storageProfile: Schema.optional(
          Schema.Struct({
            storageaccounts: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  isDefault: Schema.optional(Schema.Boolean),
                  container: Schema.optional(Schema.String),
                  fileSystem: Schema.optional(Schema.String),
                  key: Schema.optional(Schema.String),
                  resourceId: Schema.optional(Schema.String),
                  msiResourceId: Schema.optional(Schema.String),
                  saskey: Schema.optional(Schema.String),
                  fileshare: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        diskEncryptionProperties: Schema.optional(
          Schema.Struct({
            vaultUri: Schema.optional(Schema.String),
            keyName: Schema.optional(Schema.String),
            keyVersion: Schema.optional(Schema.String),
            encryptionAlgorithm: Schema.optional(
              Schema.Literals(["RSA-OAEP", "RSA-OAEP-256", "RSA1_5"]),
            ),
            msiResourceId: Schema.optional(Schema.String),
            encryptionAtHost: Schema.optional(Schema.Boolean),
          }),
        ),
        encryptionInTransitProperties: Schema.optional(
          Schema.Struct({
            isEncryptionInTransitEnabled: Schema.optional(Schema.Boolean),
          }),
        ),
        minSupportedTlsVersion: Schema.optional(Schema.String),
        networkProperties: Schema.optional(
          Schema.Struct({
            resourceProviderConnection: Schema.optional(
              Schema.Literals(["Inbound", "Outbound"]),
            ),
            privateLink: Schema.optional(
              Schema.Literals(["Disabled", "Enabled"]),
            ),
          }),
        ),
        computeIsolationProperties: Schema.optional(
          Schema.Struct({
            enableComputeIsolation: Schema.optional(Schema.Boolean),
            hostSku: Schema.optional(Schema.String),
          }),
        ),
        privateLinkConfigurations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.String,
              type: Schema.optional(Schema.String),
              properties: Schema.Struct({
                groupId: Schema.String,
                provisioningState: Schema.optional(
                  Schema.Literals([
                    "InProgress",
                    "Failed",
                    "Succeeded",
                    "Canceled",
                    "Deleting",
                  ]),
                ),
                ipConfigurations: Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                    name: Schema.String,
                    type: Schema.optional(Schema.String),
                    properties: Schema.optional(
                      Schema.Struct({
                        provisioningState: Schema.optional(
                          Schema.Literals([
                            "InProgress",
                            "Failed",
                            "Succeeded",
                            "Canceled",
                            "Deleting",
                          ]),
                        ),
                        primary: Schema.optional(Schema.Boolean),
                        privateIPAddress: Schema.optional(Schema.String),
                        privateIPAllocationMethod: Schema.optional(
                          Schema.Literals(["dynamic", "static"]),
                        ),
                        subnet: Schema.optional(
                          Schema.Struct({
                            id: Schema.optional(Schema.String),
                          }),
                        ),
                      }),
                    ),
                  }),
                ),
              }),
            }),
          ),
        ),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned, UserAssigned",
            "None",
          ]),
        ),
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
              tenantId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HDInsight/locations/{location}/validateCreateRequest",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<LocationsValidateClusterCreateRequestInput>;

// Output Schema
export interface LocationsValidateClusterCreateRequestOutput {
  validationErrors?: {
    code?: string;
    message?: string;
    errorResource?: string;
    messageArguments?: string[];
  }[];
  validationWarnings?: {
    code?: string;
    message?: string;
    errorResource?: string;
    messageArguments?: string[];
  }[];
  estimatedCreationDuration?: string;
  aaddsResourcesDetails?: {
    domainName?: string;
    initialSyncComplete?: boolean;
    ldapsEnabled?: boolean;
    ldapsPublicCertificateInBase64?: string;
    resourceId?: string;
    subnetId?: string;
    tenantId?: string;
  }[];
}
export const LocationsValidateClusterCreateRequestOutput =
  /*@__PURE__*/ Schema.Struct({
    validationErrors: Schema.optional(
      Schema.Array(
        Schema.Struct({
          code: Schema.optional(Schema.String),
          message: Schema.optional(Schema.String),
          errorResource: Schema.optional(Schema.String),
          messageArguments: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
    validationWarnings: Schema.optional(
      Schema.Array(
        Schema.Struct({
          code: Schema.optional(Schema.String),
          message: Schema.optional(Schema.String),
          errorResource: Schema.optional(Schema.String),
          messageArguments: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
    estimatedCreationDuration: Schema.optional(Schema.String),
    aaddsResourcesDetails: Schema.optional(
      Schema.Array(
        Schema.Struct({
          domainName: Schema.optional(Schema.String),
          initialSyncComplete: Schema.optional(Schema.Boolean),
          ldapsEnabled: Schema.optional(Schema.Boolean),
          ldapsPublicCertificateInBase64: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          subnetId: Schema.optional(Schema.String),
          tenantId: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<LocationsValidateClusterCreateRequestOutput>;

// The operation
/**
 * Validate the cluster create request spec is valid or not.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param location - The Azure location (region) for which to make the request.
 * @param api-version - The HDInsight client API Version.
 */
export const LocationsValidateClusterCreateRequest =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: LocationsValidateClusterCreateRequestInput,
    outputSchema: LocationsValidateClusterCreateRequestOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.HDInsight/operations",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value?: {
    name?: string;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
    properties?: {
      serviceSpecification?: {
        metricSpecifications?: {
          name?: string;
          displayName?: string;
          displayDescription?: string;
          unit?: string;
          aggregationType?: string;
          supportedAggregationTypes?: string[];
          supportedTimeGrainTypes?: string[];
          enableRegionalMdmAccount?: boolean;
          sourceMdmAccount?: string;
          sourceMdmNamespace?: string;
          metricFilterPattern?: string;
          fillGapWithZero?: boolean;
          category?: string;
          resourceIdDimensionNameOverride?: string;
          isInternal?: boolean;
          delegateMetricNameOverride?: string;
          dimensions?: {
            name?: string;
            displayName?: string;
            internalName?: string;
            toBeExportedForShoebox?: boolean;
          }[];
        }[];
      };
    };
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        display: Schema.optional(
          Schema.Struct({
            provider: Schema.optional(Schema.String),
            resource: Schema.optional(Schema.String),
            operation: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
          }),
        ),
        properties: Schema.optional(
          Schema.Struct({
            serviceSpecification: Schema.optional(
              Schema.Struct({
                metricSpecifications: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      displayName: Schema.optional(Schema.String),
                      displayDescription: Schema.optional(Schema.String),
                      unit: Schema.optional(Schema.String),
                      aggregationType: Schema.optional(Schema.String),
                      supportedAggregationTypes: Schema.optional(
                        Schema.Array(Schema.String),
                      ),
                      supportedTimeGrainTypes: Schema.optional(
                        Schema.Array(Schema.String),
                      ),
                      enableRegionalMdmAccount: Schema.optional(Schema.Boolean),
                      sourceMdmAccount: Schema.optional(Schema.String),
                      sourceMdmNamespace: Schema.optional(Schema.String),
                      metricFilterPattern: Schema.optional(Schema.String),
                      fillGapWithZero: Schema.optional(Schema.Boolean),
                      category: Schema.optional(Schema.String),
                      resourceIdDimensionNameOverride: Schema.optional(
                        Schema.String,
                      ),
                      isInternal: Schema.optional(Schema.Boolean),
                      delegateMetricNameOverride: Schema.optional(
                        Schema.String,
                      ),
                      dimensions: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            name: Schema.optional(Schema.String),
                            displayName: Schema.optional(Schema.String),
                            internalName: Schema.optional(Schema.String),
                            toBeExportedForShoebox: Schema.optional(
                              Schema.Boolean,
                            ),
                          }),
                        ),
                      ),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all of the available HDInsight REST API operations.
 *
 * @param api-version - The HDInsight client API Version.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PrivateEndpointConnectionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  privateEndpointConnectionName: string;
  properties: {
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState: {
      status: "Approved" | "Rejected" | "Pending" | "Removed";
      description?: string;
      actionsRequired?: string;
    };
    linkIdentifier?: string;
    provisioningState?:
      | "InProgress"
      | "Updating"
      | "Failed"
      | "Succeeded"
      | "Canceled"
      | "Deleting";
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateEndpointConnectionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      privateEndpoint: Schema.optional(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
      privateLinkServiceConnectionState: Schema.Struct({
        status: Schema.Literals(["Approved", "Rejected", "Pending", "Removed"]),
        description: Schema.optional(Schema.String),
        actionsRequired: Schema.optional(Schema.String),
      }),
      linkIdentifier: Schema.optional(Schema.String),
      provisioningState: Schema.optional(
        Schema.Literals([
          "InProgress",
          "Updating",
          "Failed",
          "Succeeded",
          "Canceled",
          "Deleting",
        ]),
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
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsCreateOrUpdateInput>;

// Output Schema
export interface PrivateEndpointConnectionsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateEndpointConnectionsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsCreateOrUpdateOutput>;

// The operation
/**
 * Approve or reject a private endpoint connection manually.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param api-version - The HDInsight client API Version.
 * @param clusterName - The name of the cluster.
 * @param privateEndpointConnectionName - The name of the private endpoint connection.
 */
export const PrivateEndpointConnectionsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsCreateOrUpdateInput,
    outputSchema: PrivateEndpointConnectionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsDeleteOutput = void;
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteOutput>;

// The operation
/**
 * Deletes the specific private endpoint connection.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param api-version - The HDInsight client API Version.
 * @param clusterName - The name of the cluster.
 * @param privateEndpointConnectionName - The name of the private endpoint connection.
 */
export const PrivateEndpointConnectionsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsDeleteInput,
    outputSchema: PrivateEndpointConnectionsDeleteOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsGetInput>;

// Output Schema
export interface PrivateEndpointConnectionsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateEndpointConnectionsGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsGetOutput>;

// The operation
/**
 * Gets the specific private endpoint connection.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param api-version - The HDInsight client API Version.
 * @param clusterName - The name of the cluster.
 * @param privateEndpointConnectionName - The name of the private endpoint connection.
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsListByClusterInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const PrivateEndpointConnectionsListByClusterInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/privateEndpointConnections",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListByClusterInput>;

// Output Schema
export interface PrivateEndpointConnectionsListByClusterOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const PrivateEndpointConnectionsListByClusterOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListByClusterOutput>;

// The operation
/**
 * Lists the private endpoint connections for a HDInsight cluster.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param api-version - The HDInsight client API Version.
 * @param clusterName - The name of the cluster.
 */
export const PrivateEndpointConnectionsListByCluster =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListByClusterInput,
    outputSchema: PrivateEndpointConnectionsListByClusterOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  privateLinkResourceName: string;
}
export const PrivateLinkResourcesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    privateLinkResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/privateLinkResources/{privateLinkResourceName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesGetInput>;

// Output Schema
export interface PrivateLinkResourcesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateLinkResourcesGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateLinkResourcesGetOutput>;

// The operation
/**
 * Gets the specific private link resource.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param api-version - The HDInsight client API Version.
 * @param clusterName - The name of the cluster.
 * @param privateLinkResourceName - The name of the private link resource.
 */
export const PrivateLinkResourcesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateLinkResourcesGetInput,
  outputSchema: PrivateLinkResourcesGetOutput,
}));
// Input Schema
export interface PrivateLinkResourcesListByClusterInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const PrivateLinkResourcesListByClusterInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/privateLinkResources",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesListByClusterInput>;

// Output Schema
export interface PrivateLinkResourcesListByClusterOutput {
  value?: { id?: string; name?: string; type?: string }[];
}
export const PrivateLinkResourcesListByClusterOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PrivateLinkResourcesListByClusterOutput>;

// The operation
/**
 * Lists the private link resources in a HDInsight cluster.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param api-version - The HDInsight client API Version.
 * @param clusterName - The name of the cluster.
 */
export const PrivateLinkResourcesListByCluster =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesListByClusterInput,
    outputSchema: PrivateLinkResourcesListByClusterOutput,
  }));
// Input Schema
export interface ScriptActionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  scriptName: string;
}
export const ScriptActionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    scriptName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/scriptActions/{scriptName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ScriptActionsDeleteInput>;

// Output Schema
export type ScriptActionsDeleteOutput = void;
export const ScriptActionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ScriptActionsDeleteOutput>;

// The operation
/**
 * Deletes a specified persisted script action of the cluster.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param scriptName - The name of the script.
 * @param api-version - The HDInsight client API Version.
 */
export const ScriptActionsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ScriptActionsDeleteInput,
  outputSchema: ScriptActionsDeleteOutput,
}));
// Input Schema
export interface ScriptActionsGetExecutionAsyncOperationStatusInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  operationId: string;
}
export const ScriptActionsGetExecutionAsyncOperationStatusInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/executeScriptActions/azureasyncoperations/{operationId}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ScriptActionsGetExecutionAsyncOperationStatusInput>;

// Output Schema
export interface ScriptActionsGetExecutionAsyncOperationStatusOutput {
  status?: "InProgress" | "Succeeded" | "Failed";
  error?: { code?: string; message?: string };
}
export const ScriptActionsGetExecutionAsyncOperationStatusOutput =
  /*@__PURE__*/ Schema.Struct({
    status: Schema.optional(
      Schema.Literals(["InProgress", "Succeeded", "Failed"]),
    ),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ScriptActionsGetExecutionAsyncOperationStatusOutput>;

// The operation
/**
 * Gets the async operation status of execution operation.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param api-version - The HDInsight client API Version.
 * @param operationId - The long running operation id.
 */
export const ScriptActionsGetExecutionAsyncOperationStatus =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ScriptActionsGetExecutionAsyncOperationStatusInput,
    outputSchema: ScriptActionsGetExecutionAsyncOperationStatusOutput,
  }));
// Input Schema
export interface ScriptActionsGetExecutionDetailInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  scriptExecutionId: string;
}
export const ScriptActionsGetExecutionDetailInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    scriptExecutionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/scriptExecutionHistory/{scriptExecutionId}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ScriptActionsGetExecutionDetailInput>;

// Output Schema
export interface ScriptActionsGetExecutionDetailOutput {
  name: string;
  uri: string;
  parameters?: string;
  roles: string[];
  applicationName?: string;
}
export const ScriptActionsGetExecutionDetailOutput =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String,
    uri: Schema.String,
    parameters: Schema.optional(Schema.String),
    roles: Schema.Array(Schema.String),
    applicationName: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ScriptActionsGetExecutionDetailOutput>;

// The operation
/**
 * Gets the script execution detail for the given script execution ID.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param scriptExecutionId - The script execution Id
 * @param api-version - The HDInsight client API Version.
 */
export const ScriptActionsGetExecutionDetail =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ScriptActionsGetExecutionDetailInput,
    outputSchema: ScriptActionsGetExecutionDetailOutput,
  }));
// Input Schema
export interface ScriptActionsListByClusterInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ScriptActionsListByClusterInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/scriptActions",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ScriptActionsListByClusterInput>;

// Output Schema
export interface ScriptActionsListByClusterOutput {
  value?: {
    name: string;
    uri: string;
    parameters?: string;
    roles: string[];
    applicationName?: string;
  }[];
  nextLink?: string;
}
export const ScriptActionsListByClusterOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.String,
          uri: Schema.String,
          parameters: Schema.optional(Schema.String),
          roles: Schema.Array(Schema.String),
          applicationName: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ScriptActionsListByClusterOutput>;

// The operation
/**
 * Lists all the persisted script actions for the specified cluster.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param api-version - The HDInsight client API Version.
 */
export const ScriptActionsListByCluster = /*@__PURE__*/ API.make(() => ({
  inputSchema: ScriptActionsListByClusterInput,
  outputSchema: ScriptActionsListByClusterOutput,
}));
// Input Schema
export interface ScriptExecutionHistoryListByClusterInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ScriptExecutionHistoryListByClusterInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/scriptExecutionHistory",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ScriptExecutionHistoryListByClusterInput>;

// Output Schema
export interface ScriptExecutionHistoryListByClusterOutput {
  value?: {
    name: string;
    uri: string;
    parameters?: string;
    roles: string[];
    applicationName?: string;
  }[];
  nextLink?: string;
}
export const ScriptExecutionHistoryListByClusterOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.String,
          uri: Schema.String,
          parameters: Schema.optional(Schema.String),
          roles: Schema.Array(Schema.String),
          applicationName: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ScriptExecutionHistoryListByClusterOutput>;

// The operation
/**
 * Lists all scripts' execution history for the specified cluster.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param api-version - The HDInsight client API Version.
 */
export const ScriptExecutionHistoryListByCluster =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ScriptExecutionHistoryListByClusterInput,
    outputSchema: ScriptExecutionHistoryListByClusterOutput,
  }));
// Input Schema
export interface ScriptExecutionHistoryPromoteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  scriptExecutionId: string;
}
export const ScriptExecutionHistoryPromoteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    scriptExecutionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/scriptExecutionHistory/{scriptExecutionId}/promote",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ScriptExecutionHistoryPromoteInput>;

// Output Schema
export type ScriptExecutionHistoryPromoteOutput = void;
export const ScriptExecutionHistoryPromoteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ScriptExecutionHistoryPromoteOutput>;

// The operation
/**
 * Promotes the specified ad-hoc script execution to a persisted script.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param scriptExecutionId - The script execution Id
 * @param api-version - The HDInsight client API Version.
 */
export const ScriptExecutionHistoryPromote =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ScriptExecutionHistoryPromoteInput,
    outputSchema: ScriptExecutionHistoryPromoteOutput,
  }));
// Input Schema
export interface VirtualMachinesGetAsyncOperationStatusInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  operationId: string;
}
export const VirtualMachinesGetAsyncOperationStatusInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/restartHosts/azureasyncoperations/{operationId}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesGetAsyncOperationStatusInput>;

// Output Schema
export interface VirtualMachinesGetAsyncOperationStatusOutput {
  status?: "InProgress" | "Succeeded" | "Failed";
  error?: { code?: string; message?: string };
}
export const VirtualMachinesGetAsyncOperationStatusOutput =
  /*@__PURE__*/ Schema.Struct({
    status: Schema.optional(
      Schema.Literals(["InProgress", "Succeeded", "Failed"]),
    ),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<VirtualMachinesGetAsyncOperationStatusOutput>;

// The operation
/**
 * Gets the async operation status.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param api-version - The HDInsight client API Version.
 * @param operationId - The long running operation id.
 */
export const VirtualMachinesGetAsyncOperationStatus =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachinesGetAsyncOperationStatusInput,
    outputSchema: VirtualMachinesGetAsyncOperationStatusOutput,
  }));
// Input Schema
export interface VirtualMachinesListHostsInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const VirtualMachinesListHostsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/listHosts",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesListHostsInput>;

// Output Schema
export type VirtualMachinesListHostsOutput = {
  name?: string;
  fqdn?: string;
  effectiveDiskEncryptionKeyUrl?: string;
}[];
export const VirtualMachinesListHostsOutput =
  /*@__PURE__*/ Schema.Array(
    Schema.Struct({
      name: Schema.optional(Schema.String),
      fqdn: Schema.optional(Schema.String),
      effectiveDiskEncryptionKeyUrl: Schema.optional(Schema.String),
    }),
  ) as unknown as Schema.Codec<VirtualMachinesListHostsOutput>;

// The operation
/**
 * Lists the HDInsight clusters hosts
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param api-version - The HDInsight client API Version.
 */
export const VirtualMachinesListHosts = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualMachinesListHostsInput,
  outputSchema: VirtualMachinesListHostsOutput,
}));
// Input Schema
export interface VirtualMachinesRestartHostsInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const VirtualMachinesRestartHostsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/restartHosts",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesRestartHostsInput>;

// Output Schema
export type VirtualMachinesRestartHostsOutput = void;
export const VirtualMachinesRestartHostsOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachinesRestartHostsOutput>;

// The operation
/**
 * Restarts the specified HDInsight cluster hosts.
 *
 * @param subscriptionId - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster.
 * @param api-version - The HDInsight client API Version.
 */
export const VirtualMachinesRestartHosts = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualMachinesRestartHostsInput,
  outputSchema: VirtualMachinesRestartHostsOutput,
}));
