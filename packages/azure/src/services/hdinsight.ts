/**
 * Azure Hdinsight API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString, SensitiveString } from "../sensitive.ts";

// Input Schema
export const ApplicationsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type ApplicationsCreateInput = typeof ApplicationsCreateInput.Type;

// Output Schema
export const ApplicationsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type ApplicationsCreateOutput = typeof ApplicationsCreateOutput.Type;

// The operation
/**
 * Creates applications for the HDInsight cluster.
 */
export const ApplicationsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsCreateInput,
  outputSchema: ApplicationsCreateOutput,
}));
// Input Schema
export const ApplicationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/applications/{applicationName}",
      apiVersion: "2021-06-01",
    }),
  );
export type ApplicationsDeleteInput = typeof ApplicationsDeleteInput.Type;

// Output Schema
export const ApplicationsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ApplicationsDeleteOutput = typeof ApplicationsDeleteOutput.Type;

// The operation
/**
 * Deletes the specified application on the HDInsight cluster.
 */
export const ApplicationsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsDeleteInput,
  outputSchema: ApplicationsDeleteOutput,
}));
// Input Schema
export const ApplicationsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/applications/{applicationName}",
    apiVersion: "2021-06-01",
  }),
);
export type ApplicationsGetInput = typeof ApplicationsGetInput.Type;

// Output Schema
export const ApplicationsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});
export type ApplicationsGetOutput = typeof ApplicationsGetOutput.Type;

// The operation
/**
 * Gets properties of the specified application.
 */
export const ApplicationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsGetInput,
  outputSchema: ApplicationsGetOutput,
}));
// Input Schema
export const ApplicationsGetAzureAsyncOperationStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/applications/{applicationName}/azureasyncoperations/{operationId}",
      apiVersion: "2021-06-01",
    }),
  );
export type ApplicationsGetAzureAsyncOperationStatusInput =
  typeof ApplicationsGetAzureAsyncOperationStatusInput.Type;

// Output Schema
export const ApplicationsGetAzureAsyncOperationStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(
      Schema.Literals(["InProgress", "Succeeded", "Failed"]),
    ),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
  });
export type ApplicationsGetAzureAsyncOperationStatusOutput =
  typeof ApplicationsGetAzureAsyncOperationStatusOutput.Type;

// The operation
/**
 * Gets the async operation status.
 */
export const ApplicationsGetAzureAsyncOperationStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationsGetAzureAsyncOperationStatusInput,
    outputSchema: ApplicationsGetAzureAsyncOperationStatusOutput,
  }));
// Input Schema
export const ApplicationsListByClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/applications",
      apiVersion: "2021-06-01",
    }),
  );
export type ApplicationsListByClusterInput =
  typeof ApplicationsListByClusterInput.Type;

// Output Schema
export const ApplicationsListByClusterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type ApplicationsListByClusterOutput =
  typeof ApplicationsListByClusterOutput.Type;

// The operation
/**
 * Lists all of the applications for the HDInsight cluster.
 */
export const ApplicationsListByCluster = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationsListByClusterInput,
    outputSchema: ApplicationsListByClusterOutput,
  }),
);
// Input Schema
export const ClustersCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
);
export type ClustersCreateInput = typeof ClustersCreateInput.Type;

// Output Schema
export const ClustersCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});
export type ClustersCreateOutput = typeof ClustersCreateOutput.Type;

// The operation
/**
 * Creates a new HDInsight cluster with the specified parameters.
 */
export const ClustersCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersCreateInput,
  outputSchema: ClustersCreateOutput,
}));
// Input Schema
export const ClustersDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}",
    apiVersion: "2021-06-01",
  }),
);
export type ClustersDeleteInput = typeof ClustersDeleteInput.Type;

// Output Schema
export const ClustersDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ClustersDeleteOutput = typeof ClustersDeleteOutput.Type;

// The operation
/**
 * Deletes the specified HDInsight cluster.
 */
export const ClustersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersDeleteInput,
  outputSchema: ClustersDeleteOutput,
}));
// Input Schema
export const ClustersExecuteScriptActionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type ClustersExecuteScriptActionsInput =
  typeof ClustersExecuteScriptActionsInput.Type;

// Output Schema
export const ClustersExecuteScriptActionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ClustersExecuteScriptActionsOutput =
  typeof ClustersExecuteScriptActionsOutput.Type;

// The operation
/**
 * Executes script actions on the specified HDInsight cluster.
 * @param scriptActions - The list of run time script actions.
 * @param persistOnSuccess - Gets or sets if the scripts needs to be persisted.
 */
export const ClustersExecuteScriptActions =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ClustersExecuteScriptActionsInput,
    outputSchema: ClustersExecuteScriptActionsOutput,
  }));
// Input Schema
export const ClustersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}",
    apiVersion: "2021-06-01",
  }),
);
export type ClustersGetInput = typeof ClustersGetInput.Type;

// Output Schema
export const ClustersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});
export type ClustersGetOutput = typeof ClustersGetOutput.Type;

// The operation
/**
 * Gets the specified cluster.
 */
export const ClustersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersGetInput,
  outputSchema: ClustersGetOutput,
}));
// Input Schema
export const ClustersGetAzureAsyncOperationStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/azureasyncoperations/{operationId}",
      apiVersion: "2021-06-01",
    }),
  );
export type ClustersGetAzureAsyncOperationStatusInput =
  typeof ClustersGetAzureAsyncOperationStatusInput.Type;

// Output Schema
export const ClustersGetAzureAsyncOperationStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(
      Schema.Literals(["InProgress", "Succeeded", "Failed"]),
    ),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
  });
export type ClustersGetAzureAsyncOperationStatusOutput =
  typeof ClustersGetAzureAsyncOperationStatusOutput.Type;

// The operation
/**
 * The the async operation status.
 */
export const ClustersGetAzureAsyncOperationStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ClustersGetAzureAsyncOperationStatusInput,
    outputSchema: ClustersGetAzureAsyncOperationStatusOutput,
  }));
// Input Schema
export const ClustersGetGatewaySettingsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/getGatewaySettings",
      apiVersion: "2021-06-01",
    }),
  );
export type ClustersGetGatewaySettingsInput =
  typeof ClustersGetGatewaySettingsInput.Type;

// Output Schema
export const ClustersGetGatewaySettingsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "restAuthCredential.isEnabled": Schema.optional(Schema.String),
    "restAuthCredential.username": Schema.optional(Schema.String),
    "restAuthCredential.password": Schema.optional(SensitiveOutputString),
  });
export type ClustersGetGatewaySettingsOutput =
  typeof ClustersGetGatewaySettingsOutput.Type;

// The operation
/**
 * Gets the gateway settings for the specified cluster.
 */
export const ClustersGetGatewaySettings = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClustersGetGatewaySettingsInput,
    outputSchema: ClustersGetGatewaySettingsOutput,
  }),
);
// Input Schema
export const ClustersListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.HDInsight/clusters",
    apiVersion: "2021-06-01",
  }),
);
export type ClustersListInput = typeof ClustersListInput.Type;

// Output Schema
export const ClustersListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type ClustersListOutput = typeof ClustersListOutput.Type;

// The operation
/**
 * Lists all the HDInsight clusters under the subscription.
 */
export const ClustersList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersListInput,
  outputSchema: ClustersListOutput,
}));
// Input Schema
export const ClustersListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters",
      apiVersion: "2021-06-01",
    }),
  );
export type ClustersListByResourceGroupInput =
  typeof ClustersListByResourceGroupInput.Type;

// Output Schema
export const ClustersListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type ClustersListByResourceGroupOutput =
  typeof ClustersListByResourceGroupOutput.Type;

// The operation
/**
 * Lists the HDInsight clusters in a resource group.
 */
export const ClustersListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClustersListByResourceGroupInput,
    outputSchema: ClustersListByResourceGroupOutput,
  }),
);
// Input Schema
export const ClustersResizeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  roleName: Schema.Literals(["workernode"]).pipe(T.PathParam()),
  targetInstanceCount: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/roles/{roleName}/resize",
    apiVersion: "2021-06-01",
  }),
);
export type ClustersResizeInput = typeof ClustersResizeInput.Type;

// Output Schema
export const ClustersResizeOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ClustersResizeOutput = typeof ClustersResizeOutput.Type;

// The operation
/**
 * Resizes the specified HDInsight cluster to the specified size.
 *
 * @param roleName - The constant value for the roleName
 */
export const ClustersResize = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersResizeInput,
  outputSchema: ClustersResizeOutput,
}));
// Input Schema
export const ClustersRotateDiskEncryptionKeyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vaultUri: Schema.optional(Schema.String),
    keyName: Schema.optional(Schema.String),
    keyVersion: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/rotatediskencryptionkey",
      apiVersion: "2021-06-01",
    }),
  );
export type ClustersRotateDiskEncryptionKeyInput =
  typeof ClustersRotateDiskEncryptionKeyInput.Type;

// Output Schema
export const ClustersRotateDiskEncryptionKeyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ClustersRotateDiskEncryptionKeyOutput =
  typeof ClustersRotateDiskEncryptionKeyOutput.Type;

// The operation
/**
 * Rotate disk encryption key of the specified HDInsight cluster.
 */
export const ClustersRotateDiskEncryptionKey =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ClustersRotateDiskEncryptionKeyInput,
    outputSchema: ClustersRotateDiskEncryptionKeyOutput,
  }));
// Input Schema
export const ClustersUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tags: Schema.optional(
    Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}",
    apiVersion: "2021-06-01",
  }),
);
export type ClustersUpdateInput = typeof ClustersUpdateInput.Type;

// Output Schema
export const ClustersUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});
export type ClustersUpdateOutput = typeof ClustersUpdateOutput.Type;

// The operation
/**
 * Patch HDInsight cluster with the specified parameters.
 */
export const ClustersUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersUpdateInput,
  outputSchema: ClustersUpdateOutput,
}));
// Input Schema
export const ClustersUpdateAutoScaleConfigurationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type ClustersUpdateAutoScaleConfigurationInput =
  typeof ClustersUpdateAutoScaleConfigurationInput.Type;

// Output Schema
export const ClustersUpdateAutoScaleConfigurationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ClustersUpdateAutoScaleConfigurationOutput =
  typeof ClustersUpdateAutoScaleConfigurationOutput.Type;

// The operation
/**
 * Updates the Autoscale Configuration for HDInsight cluster.
 *
 * @param roleName - The constant value for the roleName
 */
export const ClustersUpdateAutoScaleConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ClustersUpdateAutoScaleConfigurationInput,
    outputSchema: ClustersUpdateAutoScaleConfigurationOutput,
  }));
// Input Schema
export const ClustersUpdateGatewaySettingsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "restAuthCredential.isEnabled": Schema.optional(Schema.Boolean),
    "restAuthCredential.username": Schema.optional(Schema.String),
    "restAuthCredential.password": Schema.optional(SensitiveString),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/updateGatewaySettings",
      apiVersion: "2021-06-01",
    }),
  );
export type ClustersUpdateGatewaySettingsInput =
  typeof ClustersUpdateGatewaySettingsInput.Type;

// Output Schema
export const ClustersUpdateGatewaySettingsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ClustersUpdateGatewaySettingsOutput =
  typeof ClustersUpdateGatewaySettingsOutput.Type;

// The operation
/**
 * Configures the gateway settings on the specified cluster.
 */
export const ClustersUpdateGatewaySettings =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ClustersUpdateGatewaySettingsInput,
    outputSchema: ClustersUpdateGatewaySettingsOutput,
  }));
// Input Schema
export const ClustersUpdateIdentityCertificateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationId: Schema.optional(Schema.String),
    certificate: Schema.optional(Schema.String),
    certificatePassword: Schema.optional(SensitiveString),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/updateClusterIdentityCertificate",
      apiVersion: "2021-06-01",
    }),
  );
export type ClustersUpdateIdentityCertificateInput =
  typeof ClustersUpdateIdentityCertificateInput.Type;

// Output Schema
export const ClustersUpdateIdentityCertificateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ClustersUpdateIdentityCertificateOutput =
  typeof ClustersUpdateIdentityCertificateOutput.Type;

// The operation
/**
 * Updates the cluster identity certificate.
 */
export const ClustersUpdateIdentityCertificate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ClustersUpdateIdentityCertificateInput,
    outputSchema: ClustersUpdateIdentityCertificateOutput,
  }));
// Input Schema
export const ConfigurationsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/configurations/{configurationName}",
    apiVersion: "2021-06-01",
  }),
);
export type ConfigurationsGetInput = typeof ConfigurationsGetInput.Type;

// Output Schema
export const ConfigurationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(Schema.String, Schema.String);
export type ConfigurationsGetOutput = typeof ConfigurationsGetOutput.Type;

// The operation
/**
 * The configuration object for the specified cluster. This API is not recommended and might be removed in the future. Please consider using List configurations API instead.
 */
export const ConfigurationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConfigurationsGetInput,
  outputSchema: ConfigurationsGetOutput,
}));
// Input Schema
export const ConfigurationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/configurations",
      apiVersion: "2021-06-01",
    }),
  );
export type ConfigurationsListInput = typeof ConfigurationsListInput.Type;

// Output Schema
export const ConfigurationsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configurations: Schema.optional(
      Schema.Record(Schema.String, Schema.Record(Schema.String, Schema.String)),
    ),
  });
export type ConfigurationsListOutput = typeof ConfigurationsListOutput.Type;

// The operation
/**
 * Gets all configuration information for an HDI cluster.
 */
export const ConfigurationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConfigurationsListInput,
  outputSchema: ConfigurationsListOutput,
}));
// Input Schema
export const ExtensionsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  workspaceId: Schema.optional(Schema.String),
  primaryKey: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/{extensionName}",
    apiVersion: "2021-06-01",
  }),
);
export type ExtensionsCreateInput = typeof ExtensionsCreateInput.Type;

// Output Schema
export const ExtensionsCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ExtensionsCreateOutput = typeof ExtensionsCreateOutput.Type;

// The operation
/**
 * Creates an HDInsight cluster extension.
 */
export const ExtensionsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ExtensionsCreateInput,
  outputSchema: ExtensionsCreateOutput,
}));
// Input Schema
export const ExtensionsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/{extensionName}",
    apiVersion: "2021-06-01",
  }),
);
export type ExtensionsDeleteInput = typeof ExtensionsDeleteInput.Type;

// Output Schema
export const ExtensionsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ExtensionsDeleteOutput = typeof ExtensionsDeleteOutput.Type;

// The operation
/**
 * Deletes the specified extension for HDInsight cluster.
 */
export const ExtensionsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ExtensionsDeleteInput,
  outputSchema: ExtensionsDeleteOutput,
}));
// Input Schema
export const ExtensionsDisableAzureMonitorInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/azureMonitor",
      apiVersion: "2021-06-01",
    }),
  );
export type ExtensionsDisableAzureMonitorInput =
  typeof ExtensionsDisableAzureMonitorInput.Type;

// Output Schema
export const ExtensionsDisableAzureMonitorOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ExtensionsDisableAzureMonitorOutput =
  typeof ExtensionsDisableAzureMonitorOutput.Type;

// The operation
/**
 * Disables the Azure Monitor on the HDInsight cluster.
 */
export const ExtensionsDisableAzureMonitor =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExtensionsDisableAzureMonitorInput,
    outputSchema: ExtensionsDisableAzureMonitorOutput,
  }));
// Input Schema
export const ExtensionsDisableMonitoringInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/clustermonitoring",
      apiVersion: "2021-06-01",
    }),
  );
export type ExtensionsDisableMonitoringInput =
  typeof ExtensionsDisableMonitoringInput.Type;

// Output Schema
export const ExtensionsDisableMonitoringOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ExtensionsDisableMonitoringOutput =
  typeof ExtensionsDisableMonitoringOutput.Type;

// The operation
/**
 * Disables the Operations Management Suite (OMS) on the HDInsight cluster.
 */
export const ExtensionsDisableMonitoring = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ExtensionsDisableMonitoringInput,
    outputSchema: ExtensionsDisableMonitoringOutput,
  }),
);
// Input Schema
export const ExtensionsEnableAzureMonitorInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type ExtensionsEnableAzureMonitorInput =
  typeof ExtensionsEnableAzureMonitorInput.Type;

// Output Schema
export const ExtensionsEnableAzureMonitorOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ExtensionsEnableAzureMonitorOutput =
  typeof ExtensionsEnableAzureMonitorOutput.Type;

// The operation
/**
 * Enables the Azure Monitor on the HDInsight cluster.
 */
export const ExtensionsEnableAzureMonitor =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExtensionsEnableAzureMonitorInput,
    outputSchema: ExtensionsEnableAzureMonitorOutput,
  }));
// Input Schema
export const ExtensionsEnableMonitoringInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workspaceId: Schema.optional(Schema.String),
    primaryKey: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/clustermonitoring",
      apiVersion: "2021-06-01",
    }),
  );
export type ExtensionsEnableMonitoringInput =
  typeof ExtensionsEnableMonitoringInput.Type;

// Output Schema
export const ExtensionsEnableMonitoringOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ExtensionsEnableMonitoringOutput =
  typeof ExtensionsEnableMonitoringOutput.Type;

// The operation
/**
 * Enables the Operations Management Suite (OMS) on the HDInsight cluster.
 */
export const ExtensionsEnableMonitoring = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ExtensionsEnableMonitoringInput,
    outputSchema: ExtensionsEnableMonitoringOutput,
  }),
);
// Input Schema
export const ExtensionsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/{extensionName}",
    apiVersion: "2021-06-01",
  }),
);
export type ExtensionsGetInput = typeof ExtensionsGetInput.Type;

// Output Schema
export const ExtensionsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  clusterMonitoringEnabled: Schema.optional(Schema.Boolean),
  workspaceId: Schema.optional(Schema.String),
});
export type ExtensionsGetOutput = typeof ExtensionsGetOutput.Type;

// The operation
/**
 * Gets the extension properties for the specified HDInsight cluster extension.
 */
export const ExtensionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ExtensionsGetInput,
  outputSchema: ExtensionsGetOutput,
}));
// Input Schema
export const ExtensionsGetAzureAsyncOperationStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/{extensionName}/azureAsyncOperations/{operationId}",
      apiVersion: "2021-06-01",
    }),
  );
export type ExtensionsGetAzureAsyncOperationStatusInput =
  typeof ExtensionsGetAzureAsyncOperationStatusInput.Type;

// Output Schema
export const ExtensionsGetAzureAsyncOperationStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(
      Schema.Literals(["InProgress", "Succeeded", "Failed"]),
    ),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
  });
export type ExtensionsGetAzureAsyncOperationStatusOutput =
  typeof ExtensionsGetAzureAsyncOperationStatusOutput.Type;

// The operation
/**
 * Gets the async operation status.
 */
export const ExtensionsGetAzureAsyncOperationStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExtensionsGetAzureAsyncOperationStatusInput,
    outputSchema: ExtensionsGetAzureAsyncOperationStatusOutput,
  }));
// Input Schema
export const ExtensionsGetAzureMonitorStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/azureMonitor",
      apiVersion: "2021-06-01",
    }),
  );
export type ExtensionsGetAzureMonitorStatusInput =
  typeof ExtensionsGetAzureMonitorStatusInput.Type;

// Output Schema
export const ExtensionsGetAzureMonitorStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type ExtensionsGetAzureMonitorStatusOutput =
  typeof ExtensionsGetAzureMonitorStatusOutput.Type;

// The operation
/**
 * Gets the status of Azure Monitor on the HDInsight cluster.
 */
export const ExtensionsGetAzureMonitorStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExtensionsGetAzureMonitorStatusInput,
    outputSchema: ExtensionsGetAzureMonitorStatusOutput,
  }));
// Input Schema
export const ExtensionsGetMonitoringStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/clustermonitoring",
      apiVersion: "2021-06-01",
    }),
  );
export type ExtensionsGetMonitoringStatusInput =
  typeof ExtensionsGetMonitoringStatusInput.Type;

// Output Schema
export const ExtensionsGetMonitoringStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusterMonitoringEnabled: Schema.optional(Schema.Boolean),
    workspaceId: Schema.optional(Schema.String),
  });
export type ExtensionsGetMonitoringStatusOutput =
  typeof ExtensionsGetMonitoringStatusOutput.Type;

// The operation
/**
 * Gets the status of Operations Management Suite (OMS) on the HDInsight cluster.
 */
export const ExtensionsGetMonitoringStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExtensionsGetMonitoringStatusInput,
    outputSchema: ExtensionsGetMonitoringStatusOutput,
  }));
// Input Schema
export const LocationsCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HDInsight/locations/{location}/checkNameAvailability",
      apiVersion: "2021-06-01",
    }),
  );
export type LocationsCheckNameAvailabilityInput =
  typeof LocationsCheckNameAvailabilityInput.Type;

// Output Schema
export const LocationsCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  });
export type LocationsCheckNameAvailabilityOutput =
  typeof LocationsCheckNameAvailabilityOutput.Type;

// The operation
/**
 * Check the cluster name is available or not.
 */
export const LocationsCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LocationsCheckNameAvailabilityInput,
    outputSchema: LocationsCheckNameAvailabilityOutput,
  }));
// Input Schema
export const LocationsGetAzureAsyncOperationStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HDInsight/locations/{location}/azureasyncoperations/{operationId}",
      apiVersion: "2021-06-01",
    }),
  );
export type LocationsGetAzureAsyncOperationStatusInput =
  typeof LocationsGetAzureAsyncOperationStatusInput.Type;

// Output Schema
export const LocationsGetAzureAsyncOperationStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(
      Schema.Literals(["InProgress", "Succeeded", "Failed"]),
    ),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
  });
export type LocationsGetAzureAsyncOperationStatusOutput =
  typeof LocationsGetAzureAsyncOperationStatusOutput.Type;

// The operation
/**
 * Get the async operation status.
 */
export const LocationsGetAzureAsyncOperationStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LocationsGetAzureAsyncOperationStatusInput,
    outputSchema: LocationsGetAzureAsyncOperationStatusOutput,
  }));
// Input Schema
export const LocationsGetCapabilitiesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HDInsight/locations/{location}/capabilities",
      apiVersion: "2021-06-01",
    }),
  );
export type LocationsGetCapabilitiesInput =
  typeof LocationsGetCapabilitiesInput.Type;

// Output Schema
export const LocationsGetCapabilitiesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type LocationsGetCapabilitiesOutput =
  typeof LocationsGetCapabilitiesOutput.Type;

// The operation
/**
 * Gets the capabilities for the specified location.
 */
export const LocationsGetCapabilities = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LocationsGetCapabilitiesInput,
    outputSchema: LocationsGetCapabilitiesOutput,
  }),
);
// Input Schema
export const LocationsListBillingSpecsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HDInsight/locations/{location}/billingSpecs",
      apiVersion: "2021-06-01",
    }),
  );
export type LocationsListBillingSpecsInput =
  typeof LocationsListBillingSpecsInput.Type;

// Output Schema
export const LocationsListBillingSpecsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type LocationsListBillingSpecsOutput =
  typeof LocationsListBillingSpecsOutput.Type;

// The operation
/**
 * Lists the billingSpecs for the specified subscription and location.
 */
export const LocationsListBillingSpecs = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LocationsListBillingSpecsInput,
    outputSchema: LocationsListBillingSpecsOutput,
  }),
);
// Input Schema
export const LocationsListUsagesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HDInsight/locations/{location}/usages",
      apiVersion: "2021-06-01",
    }),
  );
export type LocationsListUsagesInput = typeof LocationsListUsagesInput.Type;

// Output Schema
export const LocationsListUsagesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type LocationsListUsagesOutput = typeof LocationsListUsagesOutput.Type;

// The operation
/**
 * Lists the usages for the specified location.
 */
export const LocationsListUsages = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LocationsListUsagesInput,
  outputSchema: LocationsListUsagesOutput,
}));
// Input Schema
export const LocationsValidateClusterCreateRequestInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    tenantId: Schema.optional(Schema.String),
    fetchAaddsResource: Schema.optional(Schema.Boolean),
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
  );
export type LocationsValidateClusterCreateRequestInput =
  typeof LocationsValidateClusterCreateRequestInput.Type;

// Output Schema
export const LocationsValidateClusterCreateRequestOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type LocationsValidateClusterCreateRequestOutput =
  typeof LocationsValidateClusterCreateRequestOutput.Type;

// The operation
/**
 * Validate the cluster create request spec is valid or not.
 */
export const LocationsValidateClusterCreateRequest =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LocationsValidateClusterCreateRequestInput,
    outputSchema: LocationsValidateClusterCreateRequestOutput,
  }));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.HDInsight/operations",
    apiVersion: "2021-06-01",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type OperationsListOutput = typeof OperationsListOutput.Type;

// The operation
/**
 * Lists all of the available HDInsight REST API operations.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export const PrivateEndpointConnectionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type PrivateEndpointConnectionsCreateOrUpdateInput =
  typeof PrivateEndpointConnectionsCreateOrUpdateInput.Type;

// Output Schema
export const PrivateEndpointConnectionsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type PrivateEndpointConnectionsCreateOrUpdateOutput =
  typeof PrivateEndpointConnectionsCreateOrUpdateOutput.Type;

// The operation
/**
 * Approve or reject a private endpoint connection manually.
 */
export const PrivateEndpointConnectionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsCreateOrUpdateInput,
    outputSchema: PrivateEndpointConnectionsCreateOrUpdateOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2021-06-01",
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
 * Deletes the specific private endpoint connection.
 */
export const PrivateEndpointConnectionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsDeleteInput,
    outputSchema: PrivateEndpointConnectionsDeleteOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2021-06-01",
    }),
  );
export type PrivateEndpointConnectionsGetInput =
  typeof PrivateEndpointConnectionsGetInput.Type;

// Output Schema
export const PrivateEndpointConnectionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type PrivateEndpointConnectionsGetOutput =
  typeof PrivateEndpointConnectionsGetOutput.Type;

// The operation
/**
 * Gets the specific private endpoint connection.
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionsListByClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/privateEndpointConnections",
      apiVersion: "2021-06-01",
    }),
  );
export type PrivateEndpointConnectionsListByClusterInput =
  typeof PrivateEndpointConnectionsListByClusterInput.Type;

// Output Schema
export const PrivateEndpointConnectionsListByClusterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PrivateEndpointConnectionsListByClusterOutput =
  typeof PrivateEndpointConnectionsListByClusterOutput.Type;

// The operation
/**
 * Lists the private endpoint connections for a HDInsight cluster.
 */
export const PrivateEndpointConnectionsListByCluster =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListByClusterInput,
    outputSchema: PrivateEndpointConnectionsListByClusterOutput,
  }));
// Input Schema
export const PrivateLinkResourcesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/privateLinkResources/{privateLinkResourceName}",
      apiVersion: "2021-06-01",
    }),
  );
export type PrivateLinkResourcesGetInput =
  typeof PrivateLinkResourcesGetInput.Type;

// Output Schema
export const PrivateLinkResourcesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type PrivateLinkResourcesGetOutput =
  typeof PrivateLinkResourcesGetOutput.Type;

// The operation
/**
 * Gets the specific private link resource.
 */
export const PrivateLinkResourcesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateLinkResourcesGetInput,
    outputSchema: PrivateLinkResourcesGetOutput,
  }),
);
// Input Schema
export const PrivateLinkResourcesListByClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/privateLinkResources",
      apiVersion: "2021-06-01",
    }),
  );
export type PrivateLinkResourcesListByClusterInput =
  typeof PrivateLinkResourcesListByClusterInput.Type;

// Output Schema
export const PrivateLinkResourcesListByClusterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export type PrivateLinkResourcesListByClusterOutput =
  typeof PrivateLinkResourcesListByClusterOutput.Type;

// The operation
/**
 * Lists the private link resources in a HDInsight cluster.
 */
export const PrivateLinkResourcesListByCluster =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesListByClusterInput,
    outputSchema: PrivateLinkResourcesListByClusterOutput,
  }));
// Input Schema
export const ScriptActionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/scriptActions/{scriptName}",
      apiVersion: "2021-06-01",
    }),
  );
export type ScriptActionsDeleteInput = typeof ScriptActionsDeleteInput.Type;

// Output Schema
export const ScriptActionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ScriptActionsDeleteOutput = typeof ScriptActionsDeleteOutput.Type;

// The operation
/**
 * Deletes a specified persisted script action of the cluster.
 */
export const ScriptActionsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScriptActionsDeleteInput,
  outputSchema: ScriptActionsDeleteOutput,
}));
// Input Schema
export const ScriptActionsGetExecutionAsyncOperationStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/executeScriptActions/azureasyncoperations/{operationId}",
      apiVersion: "2021-06-01",
    }),
  );
export type ScriptActionsGetExecutionAsyncOperationStatusInput =
  typeof ScriptActionsGetExecutionAsyncOperationStatusInput.Type;

// Output Schema
export const ScriptActionsGetExecutionAsyncOperationStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(
      Schema.Literals(["InProgress", "Succeeded", "Failed"]),
    ),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
  });
export type ScriptActionsGetExecutionAsyncOperationStatusOutput =
  typeof ScriptActionsGetExecutionAsyncOperationStatusOutput.Type;

// The operation
/**
 * Gets the async operation status of execution operation.
 */
export const ScriptActionsGetExecutionAsyncOperationStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ScriptActionsGetExecutionAsyncOperationStatusInput,
    outputSchema: ScriptActionsGetExecutionAsyncOperationStatusOutput,
  }));
// Input Schema
export const ScriptActionsGetExecutionDetailInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/scriptExecutionHistory/{scriptExecutionId}",
      apiVersion: "2021-06-01",
    }),
  );
export type ScriptActionsGetExecutionDetailInput =
  typeof ScriptActionsGetExecutionDetailInput.Type;

// Output Schema
export const ScriptActionsGetExecutionDetailOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    uri: Schema.String,
    parameters: Schema.optional(Schema.String),
    roles: Schema.Array(Schema.String),
    applicationName: Schema.optional(Schema.String),
  });
export type ScriptActionsGetExecutionDetailOutput =
  typeof ScriptActionsGetExecutionDetailOutput.Type;

// The operation
/**
 * Gets the script execution detail for the given script execution ID.
 */
export const ScriptActionsGetExecutionDetail =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ScriptActionsGetExecutionDetailInput,
    outputSchema: ScriptActionsGetExecutionDetailOutput,
  }));
// Input Schema
export const ScriptActionsListByClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/scriptActions",
      apiVersion: "2021-06-01",
    }),
  );
export type ScriptActionsListByClusterInput =
  typeof ScriptActionsListByClusterInput.Type;

// Output Schema
export const ScriptActionsListByClusterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type ScriptActionsListByClusterOutput =
  typeof ScriptActionsListByClusterOutput.Type;

// The operation
/**
 * Lists all the persisted script actions for the specified cluster.
 */
export const ScriptActionsListByCluster = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ScriptActionsListByClusterInput,
    outputSchema: ScriptActionsListByClusterOutput,
  }),
);
// Input Schema
export const ScriptExecutionHistoryListByClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/scriptExecutionHistory",
      apiVersion: "2021-06-01",
    }),
  );
export type ScriptExecutionHistoryListByClusterInput =
  typeof ScriptExecutionHistoryListByClusterInput.Type;

// Output Schema
export const ScriptExecutionHistoryListByClusterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type ScriptExecutionHistoryListByClusterOutput =
  typeof ScriptExecutionHistoryListByClusterOutput.Type;

// The operation
/**
 * Lists all scripts' execution history for the specified cluster.
 */
export const ScriptExecutionHistoryListByCluster =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ScriptExecutionHistoryListByClusterInput,
    outputSchema: ScriptExecutionHistoryListByClusterOutput,
  }));
// Input Schema
export const ScriptExecutionHistoryPromoteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/scriptExecutionHistory/{scriptExecutionId}/promote",
      apiVersion: "2021-06-01",
    }),
  );
export type ScriptExecutionHistoryPromoteInput =
  typeof ScriptExecutionHistoryPromoteInput.Type;

// Output Schema
export const ScriptExecutionHistoryPromoteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ScriptExecutionHistoryPromoteOutput =
  typeof ScriptExecutionHistoryPromoteOutput.Type;

// The operation
/**
 * Promotes the specified ad-hoc script execution to a persisted script.
 */
export const ScriptExecutionHistoryPromote =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ScriptExecutionHistoryPromoteInput,
    outputSchema: ScriptExecutionHistoryPromoteOutput,
  }));
// Input Schema
export const VirtualMachinesGetAsyncOperationStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/restartHosts/azureasyncoperations/{operationId}",
      apiVersion: "2021-06-01",
    }),
  );
export type VirtualMachinesGetAsyncOperationStatusInput =
  typeof VirtualMachinesGetAsyncOperationStatusInput.Type;

// Output Schema
export const VirtualMachinesGetAsyncOperationStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(
      Schema.Literals(["InProgress", "Succeeded", "Failed"]),
    ),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
  });
export type VirtualMachinesGetAsyncOperationStatusOutput =
  typeof VirtualMachinesGetAsyncOperationStatusOutput.Type;

// The operation
/**
 * Gets the async operation status.
 */
export const VirtualMachinesGetAsyncOperationStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachinesGetAsyncOperationStatusInput,
    outputSchema: VirtualMachinesGetAsyncOperationStatusOutput,
  }));
// Input Schema
export const VirtualMachinesListHostsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/listHosts",
      apiVersion: "2021-06-01",
    }),
  );
export type VirtualMachinesListHostsInput =
  typeof VirtualMachinesListHostsInput.Type;

// Output Schema
export const VirtualMachinesListHostsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      name: Schema.optional(Schema.String),
      fqdn: Schema.optional(Schema.String),
      effectiveDiskEncryptionKeyUrl: Schema.optional(Schema.String),
    }),
  );
export type VirtualMachinesListHostsOutput =
  typeof VirtualMachinesListHostsOutput.Type;

// The operation
/**
 * Lists the HDInsight clusters hosts
 */
export const VirtualMachinesListHosts = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachinesListHostsInput,
    outputSchema: VirtualMachinesListHostsOutput,
  }),
);
// Input Schema
export const VirtualMachinesRestartHostsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/restartHosts",
      apiVersion: "2021-06-01",
    }),
  );
export type VirtualMachinesRestartHostsInput =
  typeof VirtualMachinesRestartHostsInput.Type;

// Output Schema
export const VirtualMachinesRestartHostsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachinesRestartHostsOutput =
  typeof VirtualMachinesRestartHostsOutput.Type;

// The operation
/**
 * Restarts the specified HDInsight cluster hosts.
 */
export const VirtualMachinesRestartHosts = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachinesRestartHostsInput,
    outputSchema: VirtualMachinesRestartHostsOutput,
  }),
);
