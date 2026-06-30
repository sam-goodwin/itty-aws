/**
 * Azure Containerinstance API
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
export interface CGProfileCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerGroupProfileName: string;
  properties?: {
    sku?: "NotSpecified" | "Standard" | "Dedicated" | "Confidential";
    encryptionProperties?: {
      vaultBaseUrl: string;
      keyName: string;
      keyVersion: string;
      identity?: string;
    };
    containers: {
      name: string;
      properties: {
        image?: string;
        command?: string[];
        ports?: { protocol?: "TCP" | "UDP"; port: number }[];
        environmentVariables?: {
          name: string;
          value?: string;
          secureValue?: string;
          secureValueReference?: string;
        }[];
        instanceView?: {
          restartCount?: number;
          currentState?: {
            state?: string;
            startTime?: string;
            exitCode?: number;
            finishTime?: string;
            detailStatus?: string;
          };
          previousState?: {
            state?: string;
            startTime?: string;
            exitCode?: number;
            finishTime?: string;
            detailStatus?: string;
          };
          events?: {
            count?: number;
            firstTimestamp?: string;
            lastTimestamp?: string;
            name?: string;
            message?: string;
            type?: string;
          }[];
        };
        resources?: {
          requests: {
            memoryInGB: number;
            cpu: number;
            gpu?: { count: number; sku: "K80" | "P100" | "V100" };
          };
          limits?: {
            memoryInGB?: number;
            cpu?: number;
            gpu?: { count: number; sku: "K80" | "P100" | "V100" };
          };
        };
        volumeMounts?: {
          name: string;
          mountPath: string;
          readOnly?: boolean;
        }[];
        livenessProbe?: {
          exec?: { command?: string[] };
          httpGet?: {
            path?: string;
            port: number;
            scheme?: "http" | "https";
            httpHeaders?: { name?: string; value?: string }[];
          };
          initialDelaySeconds?: number;
          periodSeconds?: number;
          failureThreshold?: number;
          successThreshold?: number;
          timeoutSeconds?: number;
        };
        readinessProbe?: {
          exec?: { command?: string[] };
          httpGet?: {
            path?: string;
            port: number;
            scheme?: "http" | "https";
            httpHeaders?: { name?: string; value?: string }[];
          };
          initialDelaySeconds?: number;
          periodSeconds?: number;
          failureThreshold?: number;
          successThreshold?: number;
          timeoutSeconds?: number;
        };
        securityContext?: {
          privileged?: boolean;
          allowPrivilegeEscalation?: boolean;
          capabilities?: { add?: string[]; drop?: string[] };
          runAsGroup?: number;
          runAsUser?: number;
          seccompProfile?: string;
        };
        configMap?: { keyValuePairs?: Record<string, string> };
      };
    }[];
    initContainers?: {
      name: string;
      properties: {
        image?: string;
        command?: string[];
        environmentVariables?: {
          name: string;
          value?: string;
          secureValue?: string;
          secureValueReference?: string;
        }[];
        instanceView?: {
          restartCount?: number;
          currentState?: {
            state?: string;
            startTime?: string;
            exitCode?: number;
            finishTime?: string;
            detailStatus?: string;
          };
          previousState?: {
            state?: string;
            startTime?: string;
            exitCode?: number;
            finishTime?: string;
            detailStatus?: string;
          };
          events?: {
            count?: number;
            firstTimestamp?: string;
            lastTimestamp?: string;
            name?: string;
            message?: string;
            type?: string;
          }[];
        };
        volumeMounts?: {
          name: string;
          mountPath: string;
          readOnly?: boolean;
        }[];
        securityContext?: {
          privileged?: boolean;
          allowPrivilegeEscalation?: boolean;
          capabilities?: { add?: string[]; drop?: string[] };
          runAsGroup?: number;
          runAsUser?: number;
          seccompProfile?: string;
        };
      };
    }[];
    extensions?: {
      name: string;
      properties?: {
        extensionType: string;
        version: string;
        settings?: unknown;
        protectedSettings?: unknown;
      };
    }[];
    imageRegistryCredentials?: {
      server: string;
      username?: string;
      password?: string | Redacted.Redacted<string>;
      passwordReference?: string | Redacted.Redacted<string>;
      identity?: string;
      identityUrl?: string;
    }[];
    restartPolicy?: "Always" | "OnFailure" | "Never";
    shutdownGracePeriod?: string;
    ipAddress?: {
      ports: { protocol?: "TCP" | "UDP"; port: number }[];
      type: "Public" | "Private";
      ip?: string;
      dnsNameLabel?: string;
      autoGeneratedDomainNameLabelScope?:
        | "Unsecure"
        | "TenantReuse"
        | "SubscriptionReuse"
        | "ResourceGroupReuse"
        | "Noreuse";
      fqdn?: string;
    };
    timeToLive?: string;
    osType: "Windows" | "Linux";
    volumes?: {
      name: string;
      azureFile?: {
        shareName: string;
        readOnly?: boolean;
        storageAccountName: string;
        storageAccountKey?: string;
        storageAccountKeyReference?: string;
      };
      emptyDir?: unknown;
      secret?: Record<string, string>;
      secretReference?: Record<string, string>;
      gitRepo?: { directory?: string; repository: string; revision?: string };
    }[];
    diagnostics?: {
      logAnalytics?: {
        workspaceId: string;
        workspaceKey: string;
        logType?: "ContainerInsights" | "ContainerInstanceLogs";
        metadata?: Record<string, string>;
        workspaceResourceId?: string;
      };
    };
    priority?: "Regular" | "Spot";
    confidentialComputeProperties?: { ccePolicy?: string };
    securityContext?: {
      privileged?: boolean;
      allowPrivilegeEscalation?: boolean;
      capabilities?: { add?: string[]; drop?: string[] };
      runAsGroup?: number;
      runAsUser?: number;
      seccompProfile?: string;
    };
    revision?: number;
    registeredRevisions?: number[];
    useKrypton?: boolean;
  };
  tags?: Record<string, string>;
  location?: string;
  zones?: string[];
}
export const CGProfileCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerGroupProfileName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        sku: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Standard",
            "Dedicated",
            "Confidential",
          ]),
        ),
        encryptionProperties: Schema.optional(
          Schema.Struct({
            vaultBaseUrl: Schema.String,
            keyName: Schema.String,
            keyVersion: Schema.String,
            identity: Schema.optional(Schema.String),
          }),
        ),
        containers: Schema.Array(
          Schema.Struct({
            name: Schema.String,
            properties: Schema.Struct({
              image: Schema.optional(Schema.String),
              command: Schema.optional(Schema.Array(Schema.String)),
              ports: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    protocol: Schema.optional(Schema.Literals(["TCP", "UDP"])),
                    port: Schema.Number,
                  }),
                ),
              ),
              environmentVariables: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.String,
                    value: Schema.optional(Schema.String),
                    secureValue: Schema.optional(Schema.String),
                    secureValueReference: Schema.optional(Schema.String),
                  }),
                ),
              ),
              instanceView: Schema.optional(
                Schema.Struct({
                  restartCount: Schema.optional(Schema.Number),
                  currentState: Schema.optional(
                    Schema.Struct({
                      state: Schema.optional(Schema.String),
                      startTime: Schema.optional(Schema.String),
                      exitCode: Schema.optional(Schema.Number),
                      finishTime: Schema.optional(Schema.String),
                      detailStatus: Schema.optional(Schema.String),
                    }),
                  ),
                  previousState: Schema.optional(
                    Schema.Struct({
                      state: Schema.optional(Schema.String),
                      startTime: Schema.optional(Schema.String),
                      exitCode: Schema.optional(Schema.Number),
                      finishTime: Schema.optional(Schema.String),
                      detailStatus: Schema.optional(Schema.String),
                    }),
                  ),
                  events: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        count: Schema.optional(Schema.Number),
                        firstTimestamp: Schema.optional(Schema.String),
                        lastTimestamp: Schema.optional(Schema.String),
                        name: Schema.optional(Schema.String),
                        message: Schema.optional(Schema.String),
                        type: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                }),
              ),
              resources: Schema.optional(
                Schema.Struct({
                  requests: Schema.Struct({
                    memoryInGB: Schema.Number,
                    cpu: Schema.Number,
                    gpu: Schema.optional(
                      Schema.Struct({
                        count: Schema.Number,
                        sku: Schema.Literals(["K80", "P100", "V100"]),
                      }),
                    ),
                  }),
                  limits: Schema.optional(
                    Schema.Struct({
                      memoryInGB: Schema.optional(Schema.Number),
                      cpu: Schema.optional(Schema.Number),
                      gpu: Schema.optional(
                        Schema.Struct({
                          count: Schema.Number,
                          sku: Schema.Literals(["K80", "P100", "V100"]),
                        }),
                      ),
                    }),
                  ),
                }),
              ),
              volumeMounts: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.String,
                    mountPath: Schema.String,
                    readOnly: Schema.optional(Schema.Boolean),
                  }),
                ),
              ),
              livenessProbe: Schema.optional(
                Schema.Struct({
                  exec: Schema.optional(
                    Schema.Struct({
                      command: Schema.optional(Schema.Array(Schema.String)),
                    }),
                  ),
                  httpGet: Schema.optional(
                    Schema.Struct({
                      path: Schema.optional(Schema.String),
                      port: Schema.Number,
                      scheme: Schema.optional(
                        Schema.Literals(["http", "https"]),
                      ),
                      httpHeaders: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            name: Schema.optional(Schema.String),
                            value: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                    }),
                  ),
                  initialDelaySeconds: Schema.optional(Schema.Number),
                  periodSeconds: Schema.optional(Schema.Number),
                  failureThreshold: Schema.optional(Schema.Number),
                  successThreshold: Schema.optional(Schema.Number),
                  timeoutSeconds: Schema.optional(Schema.Number),
                }),
              ),
              readinessProbe: Schema.optional(
                Schema.Struct({
                  exec: Schema.optional(
                    Schema.Struct({
                      command: Schema.optional(Schema.Array(Schema.String)),
                    }),
                  ),
                  httpGet: Schema.optional(
                    Schema.Struct({
                      path: Schema.optional(Schema.String),
                      port: Schema.Number,
                      scheme: Schema.optional(
                        Schema.Literals(["http", "https"]),
                      ),
                      httpHeaders: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            name: Schema.optional(Schema.String),
                            value: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                    }),
                  ),
                  initialDelaySeconds: Schema.optional(Schema.Number),
                  periodSeconds: Schema.optional(Schema.Number),
                  failureThreshold: Schema.optional(Schema.Number),
                  successThreshold: Schema.optional(Schema.Number),
                  timeoutSeconds: Schema.optional(Schema.Number),
                }),
              ),
              securityContext: Schema.optional(
                Schema.Struct({
                  privileged: Schema.optional(Schema.Boolean),
                  allowPrivilegeEscalation: Schema.optional(Schema.Boolean),
                  capabilities: Schema.optional(
                    Schema.Struct({
                      add: Schema.optional(Schema.Array(Schema.String)),
                      drop: Schema.optional(Schema.Array(Schema.String)),
                    }),
                  ),
                  runAsGroup: Schema.optional(Schema.Number),
                  runAsUser: Schema.optional(Schema.Number),
                  seccompProfile: Schema.optional(Schema.String),
                }),
              ),
              configMap: Schema.optional(
                Schema.Struct({
                  keyValuePairs: Schema.optional(
                    Schema.Record(Schema.String, Schema.String),
                  ),
                }),
              ),
            }),
          }),
        ),
        initContainers: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              properties: Schema.Struct({
                image: Schema.optional(Schema.String),
                command: Schema.optional(Schema.Array(Schema.String)),
                environmentVariables: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.String,
                      value: Schema.optional(Schema.String),
                      secureValue: Schema.optional(Schema.String),
                      secureValueReference: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                instanceView: Schema.optional(
                  Schema.Struct({
                    restartCount: Schema.optional(Schema.Number),
                    currentState: Schema.optional(
                      Schema.Struct({
                        state: Schema.optional(Schema.String),
                        startTime: Schema.optional(Schema.String),
                        exitCode: Schema.optional(Schema.Number),
                        finishTime: Schema.optional(Schema.String),
                        detailStatus: Schema.optional(Schema.String),
                      }),
                    ),
                    previousState: Schema.optional(
                      Schema.Struct({
                        state: Schema.optional(Schema.String),
                        startTime: Schema.optional(Schema.String),
                        exitCode: Schema.optional(Schema.Number),
                        finishTime: Schema.optional(Schema.String),
                        detailStatus: Schema.optional(Schema.String),
                      }),
                    ),
                    events: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          count: Schema.optional(Schema.Number),
                          firstTimestamp: Schema.optional(Schema.String),
                          lastTimestamp: Schema.optional(Schema.String),
                          name: Schema.optional(Schema.String),
                          message: Schema.optional(Schema.String),
                          type: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                  }),
                ),
                volumeMounts: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.String,
                      mountPath: Schema.String,
                      readOnly: Schema.optional(Schema.Boolean),
                    }),
                  ),
                ),
                securityContext: Schema.optional(
                  Schema.Struct({
                    privileged: Schema.optional(Schema.Boolean),
                    allowPrivilegeEscalation: Schema.optional(Schema.Boolean),
                    capabilities: Schema.optional(
                      Schema.Struct({
                        add: Schema.optional(Schema.Array(Schema.String)),
                        drop: Schema.optional(Schema.Array(Schema.String)),
                      }),
                    ),
                    runAsGroup: Schema.optional(Schema.Number),
                    runAsUser: Schema.optional(Schema.Number),
                    seccompProfile: Schema.optional(Schema.String),
                  }),
                ),
              }),
            }),
          ),
        ),
        extensions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              properties: Schema.optional(
                Schema.Struct({
                  extensionType: Schema.String,
                  version: Schema.String,
                  settings: Schema.optional(Schema.Unknown),
                  protectedSettings: Schema.optional(Schema.Unknown),
                }),
              ),
            }),
          ),
        ),
        imageRegistryCredentials: Schema.optional(
          Schema.Array(
            Schema.Struct({
              server: Schema.String,
              username: Schema.optional(Schema.String),
              password: Schema.optional(SensitiveString),
              passwordReference: Schema.optional(SensitiveString),
              identity: Schema.optional(Schema.String),
              identityUrl: Schema.optional(Schema.String),
            }),
          ),
        ),
        restartPolicy: Schema.optional(
          Schema.Literals(["Always", "OnFailure", "Never"]),
        ),
        shutdownGracePeriod: Schema.optional(Schema.String),
        ipAddress: Schema.optional(
          Schema.Struct({
            ports: Schema.Array(
              Schema.Struct({
                protocol: Schema.optional(Schema.Literals(["TCP", "UDP"])),
                port: Schema.Number,
              }),
            ),
            type: Schema.Literals(["Public", "Private"]),
            ip: Schema.optional(Schema.String),
            dnsNameLabel: Schema.optional(Schema.String),
            autoGeneratedDomainNameLabelScope: Schema.optional(
              Schema.Literals([
                "Unsecure",
                "TenantReuse",
                "SubscriptionReuse",
                "ResourceGroupReuse",
                "Noreuse",
              ]),
            ),
            fqdn: Schema.optional(Schema.String),
          }),
        ),
        timeToLive: Schema.optional(Schema.String),
        osType: Schema.Literals(["Windows", "Linux"]),
        volumes: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              azureFile: Schema.optional(
                Schema.Struct({
                  shareName: Schema.String,
                  readOnly: Schema.optional(Schema.Boolean),
                  storageAccountName: Schema.String,
                  storageAccountKey: Schema.optional(Schema.String),
                  storageAccountKeyReference: Schema.optional(Schema.String),
                }),
              ),
              emptyDir: Schema.optional(Schema.Unknown),
              secret: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
              secretReference: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
              gitRepo: Schema.optional(
                Schema.Struct({
                  directory: Schema.optional(Schema.String),
                  repository: Schema.String,
                  revision: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
        ),
        diagnostics: Schema.optional(
          Schema.Struct({
            logAnalytics: Schema.optional(
              Schema.Struct({
                workspaceId: Schema.String,
                workspaceKey: Schema.String,
                logType: Schema.optional(
                  Schema.Literals([
                    "ContainerInsights",
                    "ContainerInstanceLogs",
                  ]),
                ),
                metadata: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                workspaceResourceId: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        priority: Schema.optional(Schema.Literals(["Regular", "Spot"])),
        confidentialComputeProperties: Schema.optional(
          Schema.Struct({
            ccePolicy: Schema.optional(Schema.String),
          }),
        ),
        securityContext: Schema.optional(
          Schema.Struct({
            privileged: Schema.optional(Schema.Boolean),
            allowPrivilegeEscalation: Schema.optional(Schema.Boolean),
            capabilities: Schema.optional(
              Schema.Struct({
                add: Schema.optional(Schema.Array(Schema.String)),
                drop: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
            runAsGroup: Schema.optional(Schema.Number),
            runAsUser: Schema.optional(Schema.Number),
            seccompProfile: Schema.optional(Schema.String),
          }),
        ),
        revision: Schema.optional(Schema.Number),
        registeredRevisions: Schema.optional(Schema.Array(Schema.Number)),
        useKrypton: Schema.optional(Schema.Boolean),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    zones: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroupProfiles/{containerGroupProfileName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<CGProfileCreateOrUpdateInput>;

// Output Schema
export interface CGProfileCreateOrUpdateOutput {
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
export const CGProfileCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<CGProfileCreateOrUpdateOutput>;

// The operation
/**
 * Create or Update a ContainerGroupProfile
 *
 * Create a CGProfile if it doesn't exist or update an existing CGProfile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerGroupProfileName - ContainerGroupProfile name.
 */
export const CGProfileCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CGProfileCreateOrUpdateInput,
    outputSchema: CGProfileCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface CGProfileDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerGroupProfileName: string;
}
export const CGProfileDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  containerGroupProfileName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroupProfiles/{containerGroupProfileName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<CGProfileDeleteInput>;

// Output Schema
export type CGProfileDeleteOutput = void;
export const CGProfileDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CGProfileDeleteOutput>;

// The operation
/**
 * Container group profile DELETE REST API.
 *
 * Deletes a container group profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerGroupProfileName - ContainerGroupProfile name.
 */
export const CGProfileDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CGProfileDeleteInput,
  outputSchema: CGProfileDeleteOutput,
}));
// Input Schema
export interface CGProfileGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerGroupProfileName: string;
}
export const CGProfileGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  containerGroupProfileName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroupProfiles/{containerGroupProfileName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<CGProfileGetInput>;

// Output Schema
export interface CGProfileGetOutput {
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
export const CGProfileGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<CGProfileGetOutput>;

// The operation
/**
 * Display information about a specified ContainerGroupProfile.
 *
 * Get the properties of the specified container group profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerGroupProfileName - ContainerGroupProfile name.
 */
export const CGProfileGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CGProfileGetInput,
  outputSchema: CGProfileGetOutput,
}));
// Input Schema
export interface CGProfileGetByRevisionNumberInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerGroupProfileName: string;
  revisionNumber: string;
}
export const CGProfileGetByRevisionNumberInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerGroupProfileName: Schema.String.pipe(T.PathParam()),
    revisionNumber: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroupProfiles/{containerGroupProfileName}/revisions/{revisionNumber}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<CGProfileGetByRevisionNumberInput>;

// Output Schema
export interface CGProfileGetByRevisionNumberOutput {
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
export const CGProfileGetByRevisionNumberOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<CGProfileGetByRevisionNumberOutput>;

// The operation
/**
 * Get the properties of the specified revision of the container group profile.
 *
 * Gets the properties of the specified revision of the container group profile in the given subscription and resource group. The operation returns the properties of container group profile including containers, image registry credentials, restart policy, IP address type, OS type, volumes, current revision number, etc.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerGroupProfileName - ContainerGroupProfile name.
 * @param revisionNumber - The revision number of the container group profile.
 */
export const CGProfileGetByRevisionNumber =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CGProfileGetByRevisionNumberInput,
    outputSchema: CGProfileGetByRevisionNumberOutput,
  }));
// Input Schema
export interface CGProfileListAllRevisionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerGroupProfileName: string;
}
export const CGProfileListAllRevisionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerGroupProfileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroupProfiles/{containerGroupProfileName}/revisions",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<CGProfileListAllRevisionsInput>;

// Output Schema
export interface CGProfileListAllRevisionsOutput {
  value: {
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
  nextLink?: string;
}
export const CGProfileListAllRevisionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CGProfileListAllRevisionsOutput>;

// The operation
/**
 * Get a list of all the revisions of the specified container group profile in the given subscription and resource group.
 *
 * Get a list of all the revisions of the specified container group profile in the given subscription and resource group. This operation returns properties of each revision of the specified container group profile including containers, image registry credentials, restart policy, IP address type, OS type volumes, revision number, etc.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerGroupProfileName - ContainerGroupProfile name.
 */
export const CGProfileListAllRevisions = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CGProfileListAllRevisionsInput,
    outputSchema: CGProfileListAllRevisionsOutput,
  }),
);
// Input Schema
export interface CGProfilesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const CGProfilesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroupProfiles",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<CGProfilesListByResourceGroupInput>;

// Output Schema
export interface CGProfilesListByResourceGroupOutput {
  value: {
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
  nextLink?: string;
}
export const CGProfilesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CGProfilesListByResourceGroupOutput>;

// The operation
/**
 * List container group profiles in a resource group.
 *
 * Gets a list of all container group profiles under a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const CGProfilesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CGProfilesListByResourceGroupInput,
    outputSchema: CGProfilesListByResourceGroupOutput,
  }));
// Input Schema
export interface CGProfilesListBySubscriptionInput {
  subscriptionId: string;
}
export const CGProfilesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ContainerInstance/containerGroupProfiles",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<CGProfilesListBySubscriptionInput>;

// Output Schema
export interface CGProfilesListBySubscriptionOutput {
  value: {
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
  nextLink?: string;
}
export const CGProfilesListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CGProfilesListBySubscriptionOutput>;

// The operation
/**
 * List container group profiles in a subscription.
 *
 * Gets a list of all container group profiles under a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const CGProfilesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CGProfilesListBySubscriptionInput,
    outputSchema: CGProfilesListBySubscriptionOutput,
  }));
// Input Schema
export interface CGProfileUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerGroupProfileName: string;
  tags?: Record<string, string>;
}
export const CGProfileUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  containerGroupProfileName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroupProfiles/{containerGroupProfileName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<CGProfileUpdateInput>;

// Output Schema
export interface CGProfileUpdateOutput {
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
export const CGProfileUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<CGProfileUpdateOutput>;

// The operation
/**
 * Container group profile PATCH REST API.
 *
 * Update a specified container group profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerGroupProfileName - ContainerGroupProfile name.
 */
export const CGProfileUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CGProfileUpdateInput,
  outputSchema: CGProfileUpdateOutput,
}));
// Input Schema
export interface ContainerGroupsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerGroupName: string;
  location?: string;
  tags?: Record<string, string>;
  zones?: string[];
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
      { principalId?: string; clientId?: string }
    >;
  };
  properties: {
    provisioningState?: string;
    secretReferences?: {
      name: string;
      identity: string;
      secretReferenceUri: string;
    }[];
    containers: {
      name: string;
      properties: {
        image?: string;
        command?: string[];
        ports?: { protocol?: "TCP" | "UDP"; port: number }[];
        environmentVariables?: {
          name: string;
          value?: string;
          secureValue?: string;
          secureValueReference?: string;
        }[];
        instanceView?: {
          restartCount?: number;
          currentState?: {
            state?: string;
            startTime?: string;
            exitCode?: number;
            finishTime?: string;
            detailStatus?: string;
          };
          previousState?: {
            state?: string;
            startTime?: string;
            exitCode?: number;
            finishTime?: string;
            detailStatus?: string;
          };
          events?: {
            count?: number;
            firstTimestamp?: string;
            lastTimestamp?: string;
            name?: string;
            message?: string;
            type?: string;
          }[];
        };
        resources?: {
          requests: {
            memoryInGB: number;
            cpu: number;
            gpu?: { count: number; sku: "K80" | "P100" | "V100" };
          };
          limits?: {
            memoryInGB?: number;
            cpu?: number;
            gpu?: { count: number; sku: "K80" | "P100" | "V100" };
          };
        };
        volumeMounts?: {
          name: string;
          mountPath: string;
          readOnly?: boolean;
        }[];
        livenessProbe?: {
          exec?: { command?: string[] };
          httpGet?: {
            path?: string;
            port: number;
            scheme?: "http" | "https";
            httpHeaders?: { name?: string; value?: string }[];
          };
          initialDelaySeconds?: number;
          periodSeconds?: number;
          failureThreshold?: number;
          successThreshold?: number;
          timeoutSeconds?: number;
        };
        readinessProbe?: {
          exec?: { command?: string[] };
          httpGet?: {
            path?: string;
            port: number;
            scheme?: "http" | "https";
            httpHeaders?: { name?: string; value?: string }[];
          };
          initialDelaySeconds?: number;
          periodSeconds?: number;
          failureThreshold?: number;
          successThreshold?: number;
          timeoutSeconds?: number;
        };
        securityContext?: {
          privileged?: boolean;
          allowPrivilegeEscalation?: boolean;
          capabilities?: { add?: string[]; drop?: string[] };
          runAsGroup?: number;
          runAsUser?: number;
          seccompProfile?: string;
        };
        configMap?: { keyValuePairs?: Record<string, string> };
      };
    }[];
    imageRegistryCredentials?: {
      server: string;
      username?: string;
      password?: string | Redacted.Redacted<string>;
      passwordReference?: string | Redacted.Redacted<string>;
      identity?: string;
      identityUrl?: string;
    }[];
    restartPolicy?: "Always" | "OnFailure" | "Never";
    ipAddress?: {
      ports: { protocol?: "TCP" | "UDP"; port: number }[];
      type: "Public" | "Private";
      ip?: string;
      dnsNameLabel?: string;
      autoGeneratedDomainNameLabelScope?:
        | "Unsecure"
        | "TenantReuse"
        | "SubscriptionReuse"
        | "ResourceGroupReuse"
        | "Noreuse";
      fqdn?: string;
    };
    osType?: "Windows" | "Linux";
    volumes?: {
      name: string;
      azureFile?: {
        shareName: string;
        readOnly?: boolean;
        storageAccountName: string;
        storageAccountKey?: string;
        storageAccountKeyReference?: string;
      };
      emptyDir?: unknown;
      secret?: Record<string, string>;
      secretReference?: Record<string, string>;
      gitRepo?: { directory?: string; repository: string; revision?: string };
    }[];
    instanceView?: {
      events?: {
        count?: number;
        firstTimestamp?: string;
        lastTimestamp?: string;
        name?: string;
        message?: string;
        type?: string;
      }[];
      state?: string;
    };
    diagnostics?: {
      logAnalytics?: {
        workspaceId: string;
        workspaceKey: string;
        logType?: "ContainerInsights" | "ContainerInstanceLogs";
        metadata?: Record<string, string>;
        workspaceResourceId?: string;
      };
    };
    subnetIds?: { id: string; name?: string }[];
    dnsConfig?: {
      nameServers: string[];
      searchDomains?: string;
      options?: string;
    };
    sku?: "NotSpecified" | "Standard" | "Dedicated" | "Confidential";
    encryptionProperties?: {
      vaultBaseUrl: string;
      keyName: string;
      keyVersion: string;
      identity?: string;
    };
    initContainers?: {
      name: string;
      properties: {
        image?: string;
        command?: string[];
        environmentVariables?: {
          name: string;
          value?: string;
          secureValue?: string;
          secureValueReference?: string;
        }[];
        instanceView?: {
          restartCount?: number;
          currentState?: {
            state?: string;
            startTime?: string;
            exitCode?: number;
            finishTime?: string;
            detailStatus?: string;
          };
          previousState?: {
            state?: string;
            startTime?: string;
            exitCode?: number;
            finishTime?: string;
            detailStatus?: string;
          };
          events?: {
            count?: number;
            firstTimestamp?: string;
            lastTimestamp?: string;
            name?: string;
            message?: string;
            type?: string;
          }[];
        };
        volumeMounts?: {
          name: string;
          mountPath: string;
          readOnly?: boolean;
        }[];
        securityContext?: {
          privileged?: boolean;
          allowPrivilegeEscalation?: boolean;
          capabilities?: { add?: string[]; drop?: string[] };
          runAsGroup?: number;
          runAsUser?: number;
          seccompProfile?: string;
        };
      };
    }[];
    extensions?: {
      name: string;
      properties?: {
        extensionType: string;
        version: string;
        settings?: unknown;
        protectedSettings?: unknown;
      };
    }[];
    confidentialComputeProperties?: { ccePolicy?: string };
    priority?: "Regular" | "Spot";
    identityAcls?: {
      defaultAccess?: "All" | "System" | "User";
      acls?: { access?: "All" | "System" | "User"; identity?: string }[];
    };
    containerGroupProfile?: { id?: string; revision?: number };
    standbyPoolProfile?: {
      id?: string;
      failContainerGroupCreateOnReuseFailure?: boolean;
    };
    isCreatedFromStandbyPool?: boolean;
  };
}
export const ContainerGroupsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    zones: Schema.optional(Schema.Array(Schema.String)),
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
            }),
          ),
        ),
      }),
    ),
    properties: Schema.Struct({
      provisioningState: Schema.optional(Schema.String),
      secretReferences: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            identity: Schema.String,
            secretReferenceUri: Schema.String,
          }),
        ),
      ),
      containers: Schema.Array(
        Schema.Struct({
          name: Schema.String,
          properties: Schema.Struct({
            image: Schema.optional(Schema.String),
            command: Schema.optional(Schema.Array(Schema.String)),
            ports: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  protocol: Schema.optional(Schema.Literals(["TCP", "UDP"])),
                  port: Schema.Number,
                }),
              ),
            ),
            environmentVariables: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.String,
                  value: Schema.optional(Schema.String),
                  secureValue: Schema.optional(Schema.String),
                  secureValueReference: Schema.optional(Schema.String),
                }),
              ),
            ),
            instanceView: Schema.optional(
              Schema.Struct({
                restartCount: Schema.optional(Schema.Number),
                currentState: Schema.optional(
                  Schema.Struct({
                    state: Schema.optional(Schema.String),
                    startTime: Schema.optional(Schema.String),
                    exitCode: Schema.optional(Schema.Number),
                    finishTime: Schema.optional(Schema.String),
                    detailStatus: Schema.optional(Schema.String),
                  }),
                ),
                previousState: Schema.optional(
                  Schema.Struct({
                    state: Schema.optional(Schema.String),
                    startTime: Schema.optional(Schema.String),
                    exitCode: Schema.optional(Schema.Number),
                    finishTime: Schema.optional(Schema.String),
                    detailStatus: Schema.optional(Schema.String),
                  }),
                ),
                events: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      count: Schema.optional(Schema.Number),
                      firstTimestamp: Schema.optional(Schema.String),
                      lastTimestamp: Schema.optional(Schema.String),
                      name: Schema.optional(Schema.String),
                      message: Schema.optional(Schema.String),
                      type: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
            resources: Schema.optional(
              Schema.Struct({
                requests: Schema.Struct({
                  memoryInGB: Schema.Number,
                  cpu: Schema.Number,
                  gpu: Schema.optional(
                    Schema.Struct({
                      count: Schema.Number,
                      sku: Schema.Literals(["K80", "P100", "V100"]),
                    }),
                  ),
                }),
                limits: Schema.optional(
                  Schema.Struct({
                    memoryInGB: Schema.optional(Schema.Number),
                    cpu: Schema.optional(Schema.Number),
                    gpu: Schema.optional(
                      Schema.Struct({
                        count: Schema.Number,
                        sku: Schema.Literals(["K80", "P100", "V100"]),
                      }),
                    ),
                  }),
                ),
              }),
            ),
            volumeMounts: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.String,
                  mountPath: Schema.String,
                  readOnly: Schema.optional(Schema.Boolean),
                }),
              ),
            ),
            livenessProbe: Schema.optional(
              Schema.Struct({
                exec: Schema.optional(
                  Schema.Struct({
                    command: Schema.optional(Schema.Array(Schema.String)),
                  }),
                ),
                httpGet: Schema.optional(
                  Schema.Struct({
                    path: Schema.optional(Schema.String),
                    port: Schema.Number,
                    scheme: Schema.optional(Schema.Literals(["http", "https"])),
                    httpHeaders: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          name: Schema.optional(Schema.String),
                          value: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                  }),
                ),
                initialDelaySeconds: Schema.optional(Schema.Number),
                periodSeconds: Schema.optional(Schema.Number),
                failureThreshold: Schema.optional(Schema.Number),
                successThreshold: Schema.optional(Schema.Number),
                timeoutSeconds: Schema.optional(Schema.Number),
              }),
            ),
            readinessProbe: Schema.optional(
              Schema.Struct({
                exec: Schema.optional(
                  Schema.Struct({
                    command: Schema.optional(Schema.Array(Schema.String)),
                  }),
                ),
                httpGet: Schema.optional(
                  Schema.Struct({
                    path: Schema.optional(Schema.String),
                    port: Schema.Number,
                    scheme: Schema.optional(Schema.Literals(["http", "https"])),
                    httpHeaders: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          name: Schema.optional(Schema.String),
                          value: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                  }),
                ),
                initialDelaySeconds: Schema.optional(Schema.Number),
                periodSeconds: Schema.optional(Schema.Number),
                failureThreshold: Schema.optional(Schema.Number),
                successThreshold: Schema.optional(Schema.Number),
                timeoutSeconds: Schema.optional(Schema.Number),
              }),
            ),
            securityContext: Schema.optional(
              Schema.Struct({
                privileged: Schema.optional(Schema.Boolean),
                allowPrivilegeEscalation: Schema.optional(Schema.Boolean),
                capabilities: Schema.optional(
                  Schema.Struct({
                    add: Schema.optional(Schema.Array(Schema.String)),
                    drop: Schema.optional(Schema.Array(Schema.String)),
                  }),
                ),
                runAsGroup: Schema.optional(Schema.Number),
                runAsUser: Schema.optional(Schema.Number),
                seccompProfile: Schema.optional(Schema.String),
              }),
            ),
            configMap: Schema.optional(
              Schema.Struct({
                keyValuePairs: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
              }),
            ),
          }),
        }),
      ),
      imageRegistryCredentials: Schema.optional(
        Schema.Array(
          Schema.Struct({
            server: Schema.String,
            username: Schema.optional(Schema.String),
            password: Schema.optional(SensitiveString),
            passwordReference: Schema.optional(SensitiveString),
            identity: Schema.optional(Schema.String),
            identityUrl: Schema.optional(Schema.String),
          }),
        ),
      ),
      restartPolicy: Schema.optional(
        Schema.Literals(["Always", "OnFailure", "Never"]),
      ),
      ipAddress: Schema.optional(
        Schema.Struct({
          ports: Schema.Array(
            Schema.Struct({
              protocol: Schema.optional(Schema.Literals(["TCP", "UDP"])),
              port: Schema.Number,
            }),
          ),
          type: Schema.Literals(["Public", "Private"]),
          ip: Schema.optional(Schema.String),
          dnsNameLabel: Schema.optional(Schema.String),
          autoGeneratedDomainNameLabelScope: Schema.optional(
            Schema.Literals([
              "Unsecure",
              "TenantReuse",
              "SubscriptionReuse",
              "ResourceGroupReuse",
              "Noreuse",
            ]),
          ),
          fqdn: Schema.optional(Schema.String),
        }),
      ),
      osType: Schema.optional(Schema.Literals(["Windows", "Linux"])),
      volumes: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            azureFile: Schema.optional(
              Schema.Struct({
                shareName: Schema.String,
                readOnly: Schema.optional(Schema.Boolean),
                storageAccountName: Schema.String,
                storageAccountKey: Schema.optional(Schema.String),
                storageAccountKeyReference: Schema.optional(Schema.String),
              }),
            ),
            emptyDir: Schema.optional(Schema.Unknown),
            secret: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            secretReference: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            gitRepo: Schema.optional(
              Schema.Struct({
                directory: Schema.optional(Schema.String),
                repository: Schema.String,
                revision: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      ),
      instanceView: Schema.optional(
        Schema.Struct({
          events: Schema.optional(
            Schema.Array(
              Schema.Struct({
                count: Schema.optional(Schema.Number),
                firstTimestamp: Schema.optional(Schema.String),
                lastTimestamp: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                type: Schema.optional(Schema.String),
              }),
            ),
          ),
          state: Schema.optional(Schema.String),
        }),
      ),
      diagnostics: Schema.optional(
        Schema.Struct({
          logAnalytics: Schema.optional(
            Schema.Struct({
              workspaceId: Schema.String,
              workspaceKey: Schema.String,
              logType: Schema.optional(
                Schema.Literals(["ContainerInsights", "ContainerInstanceLogs"]),
              ),
              metadata: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
              workspaceResourceId: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      subnetIds: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.String,
            name: Schema.optional(Schema.String),
          }),
        ),
      ),
      dnsConfig: Schema.optional(
        Schema.Struct({
          nameServers: Schema.Array(Schema.String),
          searchDomains: Schema.optional(Schema.String),
          options: Schema.optional(Schema.String),
        }),
      ),
      sku: Schema.optional(
        Schema.Literals([
          "NotSpecified",
          "Standard",
          "Dedicated",
          "Confidential",
        ]),
      ),
      encryptionProperties: Schema.optional(
        Schema.Struct({
          vaultBaseUrl: Schema.String,
          keyName: Schema.String,
          keyVersion: Schema.String,
          identity: Schema.optional(Schema.String),
        }),
      ),
      initContainers: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            properties: Schema.Struct({
              image: Schema.optional(Schema.String),
              command: Schema.optional(Schema.Array(Schema.String)),
              environmentVariables: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.String,
                    value: Schema.optional(Schema.String),
                    secureValue: Schema.optional(Schema.String),
                    secureValueReference: Schema.optional(Schema.String),
                  }),
                ),
              ),
              instanceView: Schema.optional(
                Schema.Struct({
                  restartCount: Schema.optional(Schema.Number),
                  currentState: Schema.optional(
                    Schema.Struct({
                      state: Schema.optional(Schema.String),
                      startTime: Schema.optional(Schema.String),
                      exitCode: Schema.optional(Schema.Number),
                      finishTime: Schema.optional(Schema.String),
                      detailStatus: Schema.optional(Schema.String),
                    }),
                  ),
                  previousState: Schema.optional(
                    Schema.Struct({
                      state: Schema.optional(Schema.String),
                      startTime: Schema.optional(Schema.String),
                      exitCode: Schema.optional(Schema.Number),
                      finishTime: Schema.optional(Schema.String),
                      detailStatus: Schema.optional(Schema.String),
                    }),
                  ),
                  events: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        count: Schema.optional(Schema.Number),
                        firstTimestamp: Schema.optional(Schema.String),
                        lastTimestamp: Schema.optional(Schema.String),
                        name: Schema.optional(Schema.String),
                        message: Schema.optional(Schema.String),
                        type: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                }),
              ),
              volumeMounts: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.String,
                    mountPath: Schema.String,
                    readOnly: Schema.optional(Schema.Boolean),
                  }),
                ),
              ),
              securityContext: Schema.optional(
                Schema.Struct({
                  privileged: Schema.optional(Schema.Boolean),
                  allowPrivilegeEscalation: Schema.optional(Schema.Boolean),
                  capabilities: Schema.optional(
                    Schema.Struct({
                      add: Schema.optional(Schema.Array(Schema.String)),
                      drop: Schema.optional(Schema.Array(Schema.String)),
                    }),
                  ),
                  runAsGroup: Schema.optional(Schema.Number),
                  runAsUser: Schema.optional(Schema.Number),
                  seccompProfile: Schema.optional(Schema.String),
                }),
              ),
            }),
          }),
        ),
      ),
      extensions: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            properties: Schema.optional(
              Schema.Struct({
                extensionType: Schema.String,
                version: Schema.String,
                settings: Schema.optional(Schema.Unknown),
                protectedSettings: Schema.optional(Schema.Unknown),
              }),
            ),
          }),
        ),
      ),
      confidentialComputeProperties: Schema.optional(
        Schema.Struct({
          ccePolicy: Schema.optional(Schema.String),
        }),
      ),
      priority: Schema.optional(Schema.Literals(["Regular", "Spot"])),
      identityAcls: Schema.optional(
        Schema.Struct({
          defaultAccess: Schema.optional(
            Schema.Literals(["All", "System", "User"]),
          ),
          acls: Schema.optional(
            Schema.Array(
              Schema.Struct({
                access: Schema.optional(
                  Schema.Literals(["All", "System", "User"]),
                ),
                identity: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
      containerGroupProfile: Schema.optional(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          revision: Schema.optional(Schema.Number),
        }),
      ),
      standbyPoolProfile: Schema.optional(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          failContainerGroupCreateOnReuseFailure: Schema.optional(
            Schema.Boolean,
          ),
        }),
      ),
      isCreatedFromStandbyPool: Schema.optional(Schema.Boolean),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ContainerGroupsCreateOrUpdateInput>;

// Output Schema
export interface ContainerGroupsCreateOrUpdateOutput {
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
export const ContainerGroupsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ContainerGroupsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update container groups.
 *
 * Create or update container groups with specified configurations.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerGroupName - The name of the container group.
 */
export const ContainerGroupsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ContainerGroupsCreateOrUpdateInput,
    outputSchema: ContainerGroupsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ContainerGroupsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerGroupName: string;
}
export const ContainerGroupsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ContainerGroupsDeleteInput>;

// Output Schema
export interface ContainerGroupsDeleteOutput {
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
export const ContainerGroupsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ContainerGroupsDeleteOutput>;

// The operation
/**
 * Delete the specified container group.
 *
 * Delete the specified container group in the specified subscription and resource group. The operation does not delete other resources provided by the user, such as volumes.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerGroupName - The name of the container group.
 */
export const ContainerGroupsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ContainerGroupsDeleteInput,
    outputSchema: ContainerGroupsDeleteOutput,
  }),
);
// Input Schema
export interface ContainerGroupsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerGroupName: string;
}
export const ContainerGroupsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ContainerGroupsGetInput>;

// Output Schema
export interface ContainerGroupsGetOutput {
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
export const ContainerGroupsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ContainerGroupsGetOutput>;

// The operation
/**
 * Get the properties of the specified container group.
 *
 * Gets the properties of the specified container group in the specified subscription and resource group. The operation returns the properties of each container group including containers, image registry credentials, restart policy, IP address type, OS type, state, and volumes.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerGroupName - The name of the container group.
 */
export const ContainerGroupsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ContainerGroupsGetInput,
  outputSchema: ContainerGroupsGetOutput,
}));
// Input Schema
export interface ContainerGroupsGetOutboundNetworkDependenciesEndpointsInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerGroupName: string;
}
export const ContainerGroupsGetOutboundNetworkDependenciesEndpointsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName}/outboundNetworkDependenciesEndpoints",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ContainerGroupsGetOutboundNetworkDependenciesEndpointsInput>;

// Output Schema
export type ContainerGroupsGetOutboundNetworkDependenciesEndpointsOutput =
  string[];
export const ContainerGroupsGetOutboundNetworkDependenciesEndpointsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.String,
  ) as unknown as Schema.Codec<ContainerGroupsGetOutboundNetworkDependenciesEndpointsOutput>;

// The operation
/**
 * Get all network dependencies for container group.
 *
 * Gets all the network dependencies for this container group to allow complete control of network setting and configuration. For container groups, this will always be an empty list.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerGroupName - The name of the container group.
 */
export const ContainerGroupsGetOutboundNetworkDependenciesEndpoints =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ContainerGroupsGetOutboundNetworkDependenciesEndpointsInput,
    outputSchema: ContainerGroupsGetOutboundNetworkDependenciesEndpointsOutput,
  }));
// Input Schema
export interface ContainerGroupsListInput {
  subscriptionId: string;
}
export const ContainerGroupsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ContainerInstance/containerGroups",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ContainerGroupsListInput>;

// Output Schema
export interface ContainerGroupsListOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
    zones?: string[];
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
        { principalId?: string; clientId?: string }
      >;
    };
    properties: {
      provisioningState?:
        | "NotSpecified"
        | "Accepted"
        | "Pending"
        | "Updating"
        | "Creating"
        | "Repairing"
        | "Unhealthy"
        | "Failed"
        | "Canceled"
        | "Succeeded"
        | "Deleting"
        | "NotAccessible"
        | "PreProvisioned";
      secretReferences?: {
        name: string;
        identity: string;
        secretReferenceUri: string;
      }[];
      containers: {
        name: string;
        properties: {
          image?: string;
          command?: string[];
          ports?: { protocol?: "TCP" | "UDP"; port: number }[];
          environmentVariables?: {
            name: string;
            value?: string;
            secureValue?: string;
            secureValueReference?: string;
          }[];
          instanceView?: {
            restartCount?: number;
            currentState?: {
              state?: string;
              startTime?: string;
              exitCode?: number;
              finishTime?: string;
              detailStatus?: string;
            };
            previousState?: {
              state?: string;
              startTime?: string;
              exitCode?: number;
              finishTime?: string;
              detailStatus?: string;
            };
            events?: {
              count?: number;
              firstTimestamp?: string;
              lastTimestamp?: string;
              name?: string;
              message?: string;
              type?: string;
            }[];
          };
          resources?: {
            requests: {
              memoryInGB: number;
              cpu: number;
              gpu?: { count: number; sku: "K80" | "P100" | "V100" };
            };
            limits?: {
              memoryInGB?: number;
              cpu?: number;
              gpu?: { count: number; sku: "K80" | "P100" | "V100" };
            };
          };
          volumeMounts?: {
            name: string;
            mountPath: string;
            readOnly?: boolean;
          }[];
          livenessProbe?: {
            exec?: { command?: string[] };
            httpGet?: {
              path?: string;
              port: number;
              scheme?: "http" | "https";
              httpHeaders?: { name?: string; value?: string }[];
            };
            initialDelaySeconds?: number;
            periodSeconds?: number;
            failureThreshold?: number;
            successThreshold?: number;
            timeoutSeconds?: number;
          };
          readinessProbe?: {
            exec?: { command?: string[] };
            httpGet?: {
              path?: string;
              port: number;
              scheme?: "http" | "https";
              httpHeaders?: { name?: string; value?: string }[];
            };
            initialDelaySeconds?: number;
            periodSeconds?: number;
            failureThreshold?: number;
            successThreshold?: number;
            timeoutSeconds?: number;
          };
          securityContext?: {
            privileged?: boolean;
            allowPrivilegeEscalation?: boolean;
            capabilities?: { add?: string[]; drop?: string[] };
            runAsGroup?: number;
            runAsUser?: number;
            seccompProfile?: string;
          };
          configMap?: { keyValuePairs?: Record<string, string> };
        };
      }[];
      imageRegistryCredentials?: {
        server: string;
        username?: string;
        password?: Redacted.Redacted<string>;
        passwordReference?: Redacted.Redacted<string>;
        identity?: string;
        identityUrl?: string;
      }[];
      restartPolicy?: "Always" | "OnFailure" | "Never";
      ipAddress?: {
        ports: { protocol?: "TCP" | "UDP"; port: number }[];
        type: "Public" | "Private";
        ip?: string;
        dnsNameLabel?: string;
        autoGeneratedDomainNameLabelScope?:
          | "Unsecure"
          | "TenantReuse"
          | "SubscriptionReuse"
          | "ResourceGroupReuse"
          | "Noreuse";
        fqdn?: string;
      };
      osType: "Windows" | "Linux";
      volumes?: {
        name: string;
        azureFile?: {
          shareName: string;
          readOnly?: boolean;
          storageAccountName: string;
          storageAccountKey?: string;
          storageAccountKeyReference?: string;
        };
        emptyDir?: unknown;
        secret?: Record<string, string>;
        secretReference?: Record<string, string>;
        gitRepo?: { directory?: string; repository: string; revision?: string };
      }[];
      diagnostics?: {
        logAnalytics?: {
          workspaceId: string;
          workspaceKey: string;
          logType?: "ContainerInsights" | "ContainerInstanceLogs";
          metadata?: Record<string, string>;
          workspaceResourceId?: string;
        };
      };
      subnetIds?: { id: string; name?: string }[];
      dnsConfig?: {
        nameServers: string[];
        searchDomains?: string;
        options?: string;
      };
      sku?: "NotSpecified" | "Standard" | "Dedicated" | "Confidential";
      encryptionProperties?: {
        vaultBaseUrl: string;
        keyName: string;
        keyVersion: string;
        identity?: string;
      };
      initContainers?: {
        name: string;
        properties: {
          image?: string;
          command?: string[];
          environmentVariables?: {
            name: string;
            value?: string;
            secureValue?: string;
            secureValueReference?: string;
          }[];
          instanceView?: {
            restartCount?: number;
            currentState?: {
              state?: string;
              startTime?: string;
              exitCode?: number;
              finishTime?: string;
              detailStatus?: string;
            };
            previousState?: {
              state?: string;
              startTime?: string;
              exitCode?: number;
              finishTime?: string;
              detailStatus?: string;
            };
            events?: {
              count?: number;
              firstTimestamp?: string;
              lastTimestamp?: string;
              name?: string;
              message?: string;
              type?: string;
            }[];
          };
          volumeMounts?: {
            name: string;
            mountPath: string;
            readOnly?: boolean;
          }[];
          securityContext?: {
            privileged?: boolean;
            allowPrivilegeEscalation?: boolean;
            capabilities?: { add?: string[]; drop?: string[] };
            runAsGroup?: number;
            runAsUser?: number;
            seccompProfile?: string;
          };
        };
      }[];
      extensions?: {
        name: string;
        properties?: {
          extensionType: string;
          version: string;
          settings?: unknown;
          protectedSettings?: unknown;
        };
      }[];
      confidentialComputeProperties?: { ccePolicy?: string };
      priority?: "Regular" | "Spot";
      identityAcls?: {
        defaultAccess?: "All" | "System" | "User";
        acls?: { access?: "All" | "System" | "User"; identity?: string }[];
      };
      containerGroupProfile?: { id?: string; revision?: number };
      standbyPoolProfile?: {
        id?: string;
        failContainerGroupCreateOnReuseFailure?: boolean;
      };
      isCreatedFromStandbyPool?: boolean;
    };
  }[];
  nextLink?: string;
}
export const ContainerGroupsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        location: Schema.optional(Schema.String),
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        zones: Schema.optional(Schema.Array(Schema.String)),
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
                }),
              ),
            ),
          }),
        ),
        properties: Schema.Struct({
          provisioningState: Schema.optional(
            Schema.Literals([
              "NotSpecified",
              "Accepted",
              "Pending",
              "Updating",
              "Creating",
              "Repairing",
              "Unhealthy",
              "Failed",
              "Canceled",
              "Succeeded",
              "Deleting",
              "NotAccessible",
              "PreProvisioned",
            ]),
          ),
          secretReferences: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.String,
                identity: Schema.String,
                secretReferenceUri: Schema.String,
              }),
            ),
          ),
          containers: Schema.Array(
            Schema.Struct({
              name: Schema.String,
              properties: Schema.Struct({
                image: Schema.optional(Schema.String),
                command: Schema.optional(Schema.Array(Schema.String)),
                ports: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      protocol: Schema.optional(
                        Schema.Literals(["TCP", "UDP"]),
                      ),
                      port: Schema.Number,
                    }),
                  ),
                ),
                environmentVariables: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.String,
                      value: Schema.optional(Schema.String),
                      secureValue: Schema.optional(Schema.String),
                      secureValueReference: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                instanceView: Schema.optional(
                  Schema.Struct({
                    restartCount: Schema.optional(Schema.Number),
                    currentState: Schema.optional(
                      Schema.Struct({
                        state: Schema.optional(Schema.String),
                        startTime: Schema.optional(Schema.String),
                        exitCode: Schema.optional(Schema.Number),
                        finishTime: Schema.optional(Schema.String),
                        detailStatus: Schema.optional(Schema.String),
                      }),
                    ),
                    previousState: Schema.optional(
                      Schema.Struct({
                        state: Schema.optional(Schema.String),
                        startTime: Schema.optional(Schema.String),
                        exitCode: Schema.optional(Schema.Number),
                        finishTime: Schema.optional(Schema.String),
                        detailStatus: Schema.optional(Schema.String),
                      }),
                    ),
                    events: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          count: Schema.optional(Schema.Number),
                          firstTimestamp: Schema.optional(Schema.String),
                          lastTimestamp: Schema.optional(Schema.String),
                          name: Schema.optional(Schema.String),
                          message: Schema.optional(Schema.String),
                          type: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                  }),
                ),
                resources: Schema.optional(
                  Schema.Struct({
                    requests: Schema.Struct({
                      memoryInGB: Schema.Number,
                      cpu: Schema.Number,
                      gpu: Schema.optional(
                        Schema.Struct({
                          count: Schema.Number,
                          sku: Schema.Literals(["K80", "P100", "V100"]),
                        }),
                      ),
                    }),
                    limits: Schema.optional(
                      Schema.Struct({
                        memoryInGB: Schema.optional(Schema.Number),
                        cpu: Schema.optional(Schema.Number),
                        gpu: Schema.optional(
                          Schema.Struct({
                            count: Schema.Number,
                            sku: Schema.Literals(["K80", "P100", "V100"]),
                          }),
                        ),
                      }),
                    ),
                  }),
                ),
                volumeMounts: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.String,
                      mountPath: Schema.String,
                      readOnly: Schema.optional(Schema.Boolean),
                    }),
                  ),
                ),
                livenessProbe: Schema.optional(
                  Schema.Struct({
                    exec: Schema.optional(
                      Schema.Struct({
                        command: Schema.optional(Schema.Array(Schema.String)),
                      }),
                    ),
                    httpGet: Schema.optional(
                      Schema.Struct({
                        path: Schema.optional(Schema.String),
                        port: Schema.Number,
                        scheme: Schema.optional(
                          Schema.Literals(["http", "https"]),
                        ),
                        httpHeaders: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              name: Schema.optional(Schema.String),
                              value: Schema.optional(Schema.String),
                            }),
                          ),
                        ),
                      }),
                    ),
                    initialDelaySeconds: Schema.optional(Schema.Number),
                    periodSeconds: Schema.optional(Schema.Number),
                    failureThreshold: Schema.optional(Schema.Number),
                    successThreshold: Schema.optional(Schema.Number),
                    timeoutSeconds: Schema.optional(Schema.Number),
                  }),
                ),
                readinessProbe: Schema.optional(
                  Schema.Struct({
                    exec: Schema.optional(
                      Schema.Struct({
                        command: Schema.optional(Schema.Array(Schema.String)),
                      }),
                    ),
                    httpGet: Schema.optional(
                      Schema.Struct({
                        path: Schema.optional(Schema.String),
                        port: Schema.Number,
                        scheme: Schema.optional(
                          Schema.Literals(["http", "https"]),
                        ),
                        httpHeaders: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              name: Schema.optional(Schema.String),
                              value: Schema.optional(Schema.String),
                            }),
                          ),
                        ),
                      }),
                    ),
                    initialDelaySeconds: Schema.optional(Schema.Number),
                    periodSeconds: Schema.optional(Schema.Number),
                    failureThreshold: Schema.optional(Schema.Number),
                    successThreshold: Schema.optional(Schema.Number),
                    timeoutSeconds: Schema.optional(Schema.Number),
                  }),
                ),
                securityContext: Schema.optional(
                  Schema.Struct({
                    privileged: Schema.optional(Schema.Boolean),
                    allowPrivilegeEscalation: Schema.optional(Schema.Boolean),
                    capabilities: Schema.optional(
                      Schema.Struct({
                        add: Schema.optional(Schema.Array(Schema.String)),
                        drop: Schema.optional(Schema.Array(Schema.String)),
                      }),
                    ),
                    runAsGroup: Schema.optional(Schema.Number),
                    runAsUser: Schema.optional(Schema.Number),
                    seccompProfile: Schema.optional(Schema.String),
                  }),
                ),
                configMap: Schema.optional(
                  Schema.Struct({
                    keyValuePairs: Schema.optional(
                      Schema.Record(Schema.String, Schema.String),
                    ),
                  }),
                ),
              }),
            }),
          ),
          imageRegistryCredentials: Schema.optional(
            Schema.Array(
              Schema.Struct({
                server: Schema.String,
                username: Schema.optional(Schema.String),
                password: Schema.optional(SensitiveOutputString),
                passwordReference: Schema.optional(SensitiveOutputString),
                identity: Schema.optional(Schema.String),
                identityUrl: Schema.optional(Schema.String),
              }),
            ),
          ),
          restartPolicy: Schema.optional(
            Schema.Literals(["Always", "OnFailure", "Never"]),
          ),
          ipAddress: Schema.optional(
            Schema.Struct({
              ports: Schema.Array(
                Schema.Struct({
                  protocol: Schema.optional(Schema.Literals(["TCP", "UDP"])),
                  port: Schema.Number,
                }),
              ),
              type: Schema.Literals(["Public", "Private"]),
              ip: Schema.optional(Schema.String),
              dnsNameLabel: Schema.optional(Schema.String),
              autoGeneratedDomainNameLabelScope: Schema.optional(
                Schema.Literals([
                  "Unsecure",
                  "TenantReuse",
                  "SubscriptionReuse",
                  "ResourceGroupReuse",
                  "Noreuse",
                ]),
              ),
              fqdn: Schema.optional(Schema.String),
            }),
          ),
          osType: Schema.Literals(["Windows", "Linux"]),
          volumes: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.String,
                azureFile: Schema.optional(
                  Schema.Struct({
                    shareName: Schema.String,
                    readOnly: Schema.optional(Schema.Boolean),
                    storageAccountName: Schema.String,
                    storageAccountKey: Schema.optional(Schema.String),
                    storageAccountKeyReference: Schema.optional(Schema.String),
                  }),
                ),
                emptyDir: Schema.optional(Schema.Unknown),
                secret: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                secretReference: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                gitRepo: Schema.optional(
                  Schema.Struct({
                    directory: Schema.optional(Schema.String),
                    repository: Schema.String,
                    revision: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
          ),
          diagnostics: Schema.optional(
            Schema.Struct({
              logAnalytics: Schema.optional(
                Schema.Struct({
                  workspaceId: Schema.String,
                  workspaceKey: Schema.String,
                  logType: Schema.optional(
                    Schema.Literals([
                      "ContainerInsights",
                      "ContainerInstanceLogs",
                    ]),
                  ),
                  metadata: Schema.optional(
                    Schema.Record(Schema.String, Schema.String),
                  ),
                  workspaceResourceId: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
          subnetIds: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.String,
                name: Schema.optional(Schema.String),
              }),
            ),
          ),
          dnsConfig: Schema.optional(
            Schema.Struct({
              nameServers: Schema.Array(Schema.String),
              searchDomains: Schema.optional(Schema.String),
              options: Schema.optional(Schema.String),
            }),
          ),
          sku: Schema.optional(
            Schema.Literals([
              "NotSpecified",
              "Standard",
              "Dedicated",
              "Confidential",
            ]),
          ),
          encryptionProperties: Schema.optional(
            Schema.Struct({
              vaultBaseUrl: Schema.String,
              keyName: Schema.String,
              keyVersion: Schema.String,
              identity: Schema.optional(Schema.String),
            }),
          ),
          initContainers: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.String,
                properties: Schema.Struct({
                  image: Schema.optional(Schema.String),
                  command: Schema.optional(Schema.Array(Schema.String)),
                  environmentVariables: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        name: Schema.String,
                        value: Schema.optional(Schema.String),
                        secureValue: Schema.optional(Schema.String),
                        secureValueReference: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  instanceView: Schema.optional(
                    Schema.Struct({
                      restartCount: Schema.optional(Schema.Number),
                      currentState: Schema.optional(
                        Schema.Struct({
                          state: Schema.optional(Schema.String),
                          startTime: Schema.optional(Schema.String),
                          exitCode: Schema.optional(Schema.Number),
                          finishTime: Schema.optional(Schema.String),
                          detailStatus: Schema.optional(Schema.String),
                        }),
                      ),
                      previousState: Schema.optional(
                        Schema.Struct({
                          state: Schema.optional(Schema.String),
                          startTime: Schema.optional(Schema.String),
                          exitCode: Schema.optional(Schema.Number),
                          finishTime: Schema.optional(Schema.String),
                          detailStatus: Schema.optional(Schema.String),
                        }),
                      ),
                      events: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            count: Schema.optional(Schema.Number),
                            firstTimestamp: Schema.optional(Schema.String),
                            lastTimestamp: Schema.optional(Schema.String),
                            name: Schema.optional(Schema.String),
                            message: Schema.optional(Schema.String),
                            type: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                    }),
                  ),
                  volumeMounts: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        name: Schema.String,
                        mountPath: Schema.String,
                        readOnly: Schema.optional(Schema.Boolean),
                      }),
                    ),
                  ),
                  securityContext: Schema.optional(
                    Schema.Struct({
                      privileged: Schema.optional(Schema.Boolean),
                      allowPrivilegeEscalation: Schema.optional(Schema.Boolean),
                      capabilities: Schema.optional(
                        Schema.Struct({
                          add: Schema.optional(Schema.Array(Schema.String)),
                          drop: Schema.optional(Schema.Array(Schema.String)),
                        }),
                      ),
                      runAsGroup: Schema.optional(Schema.Number),
                      runAsUser: Schema.optional(Schema.Number),
                      seccompProfile: Schema.optional(Schema.String),
                    }),
                  ),
                }),
              }),
            ),
          ),
          extensions: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.String,
                properties: Schema.optional(
                  Schema.Struct({
                    extensionType: Schema.String,
                    version: Schema.String,
                    settings: Schema.optional(Schema.Unknown),
                    protectedSettings: Schema.optional(Schema.Unknown),
                  }),
                ),
              }),
            ),
          ),
          confidentialComputeProperties: Schema.optional(
            Schema.Struct({
              ccePolicy: Schema.optional(Schema.String),
            }),
          ),
          priority: Schema.optional(Schema.Literals(["Regular", "Spot"])),
          identityAcls: Schema.optional(
            Schema.Struct({
              defaultAccess: Schema.optional(
                Schema.Literals(["All", "System", "User"]),
              ),
              acls: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    access: Schema.optional(
                      Schema.Literals(["All", "System", "User"]),
                    ),
                    identity: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
          containerGroupProfile: Schema.optional(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              revision: Schema.optional(Schema.Number),
            }),
          ),
          standbyPoolProfile: Schema.optional(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              failContainerGroupCreateOnReuseFailure: Schema.optional(
                Schema.Boolean,
              ),
            }),
          ),
          isCreatedFromStandbyPool: Schema.optional(Schema.Boolean),
        }),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ContainerGroupsListOutput>;

// The operation
/**
 * Get a list of container groups in the specified subscription.
 *
 * Get a list of container groups in the specified subscription. This operation returns properties of each container group including containers, image registry credentials, restart policy, IP address type, OS type, state, and volumes.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const ContainerGroupsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ContainerGroupsListInput,
  outputSchema: ContainerGroupsListOutput,
}));
// Input Schema
export interface ContainerGroupsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const ContainerGroupsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ContainerGroupsListByResourceGroupInput>;

// Output Schema
export interface ContainerGroupsListByResourceGroupOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
    zones?: string[];
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
        { principalId?: string; clientId?: string }
      >;
    };
    properties: {
      provisioningState?:
        | "NotSpecified"
        | "Accepted"
        | "Pending"
        | "Updating"
        | "Creating"
        | "Repairing"
        | "Unhealthy"
        | "Failed"
        | "Canceled"
        | "Succeeded"
        | "Deleting"
        | "NotAccessible"
        | "PreProvisioned";
      secretReferences?: {
        name: string;
        identity: string;
        secretReferenceUri: string;
      }[];
      containers: {
        name: string;
        properties: {
          image?: string;
          command?: string[];
          ports?: { protocol?: "TCP" | "UDP"; port: number }[];
          environmentVariables?: {
            name: string;
            value?: string;
            secureValue?: string;
            secureValueReference?: string;
          }[];
          instanceView?: {
            restartCount?: number;
            currentState?: {
              state?: string;
              startTime?: string;
              exitCode?: number;
              finishTime?: string;
              detailStatus?: string;
            };
            previousState?: {
              state?: string;
              startTime?: string;
              exitCode?: number;
              finishTime?: string;
              detailStatus?: string;
            };
            events?: {
              count?: number;
              firstTimestamp?: string;
              lastTimestamp?: string;
              name?: string;
              message?: string;
              type?: string;
            }[];
          };
          resources?: {
            requests: {
              memoryInGB: number;
              cpu: number;
              gpu?: { count: number; sku: "K80" | "P100" | "V100" };
            };
            limits?: {
              memoryInGB?: number;
              cpu?: number;
              gpu?: { count: number; sku: "K80" | "P100" | "V100" };
            };
          };
          volumeMounts?: {
            name: string;
            mountPath: string;
            readOnly?: boolean;
          }[];
          livenessProbe?: {
            exec?: { command?: string[] };
            httpGet?: {
              path?: string;
              port: number;
              scheme?: "http" | "https";
              httpHeaders?: { name?: string; value?: string }[];
            };
            initialDelaySeconds?: number;
            periodSeconds?: number;
            failureThreshold?: number;
            successThreshold?: number;
            timeoutSeconds?: number;
          };
          readinessProbe?: {
            exec?: { command?: string[] };
            httpGet?: {
              path?: string;
              port: number;
              scheme?: "http" | "https";
              httpHeaders?: { name?: string; value?: string }[];
            };
            initialDelaySeconds?: number;
            periodSeconds?: number;
            failureThreshold?: number;
            successThreshold?: number;
            timeoutSeconds?: number;
          };
          securityContext?: {
            privileged?: boolean;
            allowPrivilegeEscalation?: boolean;
            capabilities?: { add?: string[]; drop?: string[] };
            runAsGroup?: number;
            runAsUser?: number;
            seccompProfile?: string;
          };
          configMap?: { keyValuePairs?: Record<string, string> };
        };
      }[];
      imageRegistryCredentials?: {
        server: string;
        username?: string;
        password?: Redacted.Redacted<string>;
        passwordReference?: Redacted.Redacted<string>;
        identity?: string;
        identityUrl?: string;
      }[];
      restartPolicy?: "Always" | "OnFailure" | "Never";
      ipAddress?: {
        ports: { protocol?: "TCP" | "UDP"; port: number }[];
        type: "Public" | "Private";
        ip?: string;
        dnsNameLabel?: string;
        autoGeneratedDomainNameLabelScope?:
          | "Unsecure"
          | "TenantReuse"
          | "SubscriptionReuse"
          | "ResourceGroupReuse"
          | "Noreuse";
        fqdn?: string;
      };
      osType: "Windows" | "Linux";
      volumes?: {
        name: string;
        azureFile?: {
          shareName: string;
          readOnly?: boolean;
          storageAccountName: string;
          storageAccountKey?: string;
          storageAccountKeyReference?: string;
        };
        emptyDir?: unknown;
        secret?: Record<string, string>;
        secretReference?: Record<string, string>;
        gitRepo?: { directory?: string; repository: string; revision?: string };
      }[];
      diagnostics?: {
        logAnalytics?: {
          workspaceId: string;
          workspaceKey: string;
          logType?: "ContainerInsights" | "ContainerInstanceLogs";
          metadata?: Record<string, string>;
          workspaceResourceId?: string;
        };
      };
      subnetIds?: { id: string; name?: string }[];
      dnsConfig?: {
        nameServers: string[];
        searchDomains?: string;
        options?: string;
      };
      sku?: "NotSpecified" | "Standard" | "Dedicated" | "Confidential";
      encryptionProperties?: {
        vaultBaseUrl: string;
        keyName: string;
        keyVersion: string;
        identity?: string;
      };
      initContainers?: {
        name: string;
        properties: {
          image?: string;
          command?: string[];
          environmentVariables?: {
            name: string;
            value?: string;
            secureValue?: string;
            secureValueReference?: string;
          }[];
          instanceView?: {
            restartCount?: number;
            currentState?: {
              state?: string;
              startTime?: string;
              exitCode?: number;
              finishTime?: string;
              detailStatus?: string;
            };
            previousState?: {
              state?: string;
              startTime?: string;
              exitCode?: number;
              finishTime?: string;
              detailStatus?: string;
            };
            events?: {
              count?: number;
              firstTimestamp?: string;
              lastTimestamp?: string;
              name?: string;
              message?: string;
              type?: string;
            }[];
          };
          volumeMounts?: {
            name: string;
            mountPath: string;
            readOnly?: boolean;
          }[];
          securityContext?: {
            privileged?: boolean;
            allowPrivilegeEscalation?: boolean;
            capabilities?: { add?: string[]; drop?: string[] };
            runAsGroup?: number;
            runAsUser?: number;
            seccompProfile?: string;
          };
        };
      }[];
      extensions?: {
        name: string;
        properties?: {
          extensionType: string;
          version: string;
          settings?: unknown;
          protectedSettings?: unknown;
        };
      }[];
      confidentialComputeProperties?: { ccePolicy?: string };
      priority?: "Regular" | "Spot";
      identityAcls?: {
        defaultAccess?: "All" | "System" | "User";
        acls?: { access?: "All" | "System" | "User"; identity?: string }[];
      };
      containerGroupProfile?: { id?: string; revision?: number };
      standbyPoolProfile?: {
        id?: string;
        failContainerGroupCreateOnReuseFailure?: boolean;
      };
      isCreatedFromStandbyPool?: boolean;
    };
  }[];
  nextLink?: string;
}
export const ContainerGroupsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        location: Schema.optional(Schema.String),
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        zones: Schema.optional(Schema.Array(Schema.String)),
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
                }),
              ),
            ),
          }),
        ),
        properties: Schema.Struct({
          provisioningState: Schema.optional(
            Schema.Literals([
              "NotSpecified",
              "Accepted",
              "Pending",
              "Updating",
              "Creating",
              "Repairing",
              "Unhealthy",
              "Failed",
              "Canceled",
              "Succeeded",
              "Deleting",
              "NotAccessible",
              "PreProvisioned",
            ]),
          ),
          secretReferences: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.String,
                identity: Schema.String,
                secretReferenceUri: Schema.String,
              }),
            ),
          ),
          containers: Schema.Array(
            Schema.Struct({
              name: Schema.String,
              properties: Schema.Struct({
                image: Schema.optional(Schema.String),
                command: Schema.optional(Schema.Array(Schema.String)),
                ports: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      protocol: Schema.optional(
                        Schema.Literals(["TCP", "UDP"]),
                      ),
                      port: Schema.Number,
                    }),
                  ),
                ),
                environmentVariables: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.String,
                      value: Schema.optional(Schema.String),
                      secureValue: Schema.optional(Schema.String),
                      secureValueReference: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                instanceView: Schema.optional(
                  Schema.Struct({
                    restartCount: Schema.optional(Schema.Number),
                    currentState: Schema.optional(
                      Schema.Struct({
                        state: Schema.optional(Schema.String),
                        startTime: Schema.optional(Schema.String),
                        exitCode: Schema.optional(Schema.Number),
                        finishTime: Schema.optional(Schema.String),
                        detailStatus: Schema.optional(Schema.String),
                      }),
                    ),
                    previousState: Schema.optional(
                      Schema.Struct({
                        state: Schema.optional(Schema.String),
                        startTime: Schema.optional(Schema.String),
                        exitCode: Schema.optional(Schema.Number),
                        finishTime: Schema.optional(Schema.String),
                        detailStatus: Schema.optional(Schema.String),
                      }),
                    ),
                    events: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          count: Schema.optional(Schema.Number),
                          firstTimestamp: Schema.optional(Schema.String),
                          lastTimestamp: Schema.optional(Schema.String),
                          name: Schema.optional(Schema.String),
                          message: Schema.optional(Schema.String),
                          type: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                  }),
                ),
                resources: Schema.optional(
                  Schema.Struct({
                    requests: Schema.Struct({
                      memoryInGB: Schema.Number,
                      cpu: Schema.Number,
                      gpu: Schema.optional(
                        Schema.Struct({
                          count: Schema.Number,
                          sku: Schema.Literals(["K80", "P100", "V100"]),
                        }),
                      ),
                    }),
                    limits: Schema.optional(
                      Schema.Struct({
                        memoryInGB: Schema.optional(Schema.Number),
                        cpu: Schema.optional(Schema.Number),
                        gpu: Schema.optional(
                          Schema.Struct({
                            count: Schema.Number,
                            sku: Schema.Literals(["K80", "P100", "V100"]),
                          }),
                        ),
                      }),
                    ),
                  }),
                ),
                volumeMounts: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.String,
                      mountPath: Schema.String,
                      readOnly: Schema.optional(Schema.Boolean),
                    }),
                  ),
                ),
                livenessProbe: Schema.optional(
                  Schema.Struct({
                    exec: Schema.optional(
                      Schema.Struct({
                        command: Schema.optional(Schema.Array(Schema.String)),
                      }),
                    ),
                    httpGet: Schema.optional(
                      Schema.Struct({
                        path: Schema.optional(Schema.String),
                        port: Schema.Number,
                        scheme: Schema.optional(
                          Schema.Literals(["http", "https"]),
                        ),
                        httpHeaders: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              name: Schema.optional(Schema.String),
                              value: Schema.optional(Schema.String),
                            }),
                          ),
                        ),
                      }),
                    ),
                    initialDelaySeconds: Schema.optional(Schema.Number),
                    periodSeconds: Schema.optional(Schema.Number),
                    failureThreshold: Schema.optional(Schema.Number),
                    successThreshold: Schema.optional(Schema.Number),
                    timeoutSeconds: Schema.optional(Schema.Number),
                  }),
                ),
                readinessProbe: Schema.optional(
                  Schema.Struct({
                    exec: Schema.optional(
                      Schema.Struct({
                        command: Schema.optional(Schema.Array(Schema.String)),
                      }),
                    ),
                    httpGet: Schema.optional(
                      Schema.Struct({
                        path: Schema.optional(Schema.String),
                        port: Schema.Number,
                        scheme: Schema.optional(
                          Schema.Literals(["http", "https"]),
                        ),
                        httpHeaders: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              name: Schema.optional(Schema.String),
                              value: Schema.optional(Schema.String),
                            }),
                          ),
                        ),
                      }),
                    ),
                    initialDelaySeconds: Schema.optional(Schema.Number),
                    periodSeconds: Schema.optional(Schema.Number),
                    failureThreshold: Schema.optional(Schema.Number),
                    successThreshold: Schema.optional(Schema.Number),
                    timeoutSeconds: Schema.optional(Schema.Number),
                  }),
                ),
                securityContext: Schema.optional(
                  Schema.Struct({
                    privileged: Schema.optional(Schema.Boolean),
                    allowPrivilegeEscalation: Schema.optional(Schema.Boolean),
                    capabilities: Schema.optional(
                      Schema.Struct({
                        add: Schema.optional(Schema.Array(Schema.String)),
                        drop: Schema.optional(Schema.Array(Schema.String)),
                      }),
                    ),
                    runAsGroup: Schema.optional(Schema.Number),
                    runAsUser: Schema.optional(Schema.Number),
                    seccompProfile: Schema.optional(Schema.String),
                  }),
                ),
                configMap: Schema.optional(
                  Schema.Struct({
                    keyValuePairs: Schema.optional(
                      Schema.Record(Schema.String, Schema.String),
                    ),
                  }),
                ),
              }),
            }),
          ),
          imageRegistryCredentials: Schema.optional(
            Schema.Array(
              Schema.Struct({
                server: Schema.String,
                username: Schema.optional(Schema.String),
                password: Schema.optional(SensitiveOutputString),
                passwordReference: Schema.optional(SensitiveOutputString),
                identity: Schema.optional(Schema.String),
                identityUrl: Schema.optional(Schema.String),
              }),
            ),
          ),
          restartPolicy: Schema.optional(
            Schema.Literals(["Always", "OnFailure", "Never"]),
          ),
          ipAddress: Schema.optional(
            Schema.Struct({
              ports: Schema.Array(
                Schema.Struct({
                  protocol: Schema.optional(Schema.Literals(["TCP", "UDP"])),
                  port: Schema.Number,
                }),
              ),
              type: Schema.Literals(["Public", "Private"]),
              ip: Schema.optional(Schema.String),
              dnsNameLabel: Schema.optional(Schema.String),
              autoGeneratedDomainNameLabelScope: Schema.optional(
                Schema.Literals([
                  "Unsecure",
                  "TenantReuse",
                  "SubscriptionReuse",
                  "ResourceGroupReuse",
                  "Noreuse",
                ]),
              ),
              fqdn: Schema.optional(Schema.String),
            }),
          ),
          osType: Schema.Literals(["Windows", "Linux"]),
          volumes: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.String,
                azureFile: Schema.optional(
                  Schema.Struct({
                    shareName: Schema.String,
                    readOnly: Schema.optional(Schema.Boolean),
                    storageAccountName: Schema.String,
                    storageAccountKey: Schema.optional(Schema.String),
                    storageAccountKeyReference: Schema.optional(Schema.String),
                  }),
                ),
                emptyDir: Schema.optional(Schema.Unknown),
                secret: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                secretReference: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                gitRepo: Schema.optional(
                  Schema.Struct({
                    directory: Schema.optional(Schema.String),
                    repository: Schema.String,
                    revision: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
          ),
          diagnostics: Schema.optional(
            Schema.Struct({
              logAnalytics: Schema.optional(
                Schema.Struct({
                  workspaceId: Schema.String,
                  workspaceKey: Schema.String,
                  logType: Schema.optional(
                    Schema.Literals([
                      "ContainerInsights",
                      "ContainerInstanceLogs",
                    ]),
                  ),
                  metadata: Schema.optional(
                    Schema.Record(Schema.String, Schema.String),
                  ),
                  workspaceResourceId: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
          subnetIds: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.String,
                name: Schema.optional(Schema.String),
              }),
            ),
          ),
          dnsConfig: Schema.optional(
            Schema.Struct({
              nameServers: Schema.Array(Schema.String),
              searchDomains: Schema.optional(Schema.String),
              options: Schema.optional(Schema.String),
            }),
          ),
          sku: Schema.optional(
            Schema.Literals([
              "NotSpecified",
              "Standard",
              "Dedicated",
              "Confidential",
            ]),
          ),
          encryptionProperties: Schema.optional(
            Schema.Struct({
              vaultBaseUrl: Schema.String,
              keyName: Schema.String,
              keyVersion: Schema.String,
              identity: Schema.optional(Schema.String),
            }),
          ),
          initContainers: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.String,
                properties: Schema.Struct({
                  image: Schema.optional(Schema.String),
                  command: Schema.optional(Schema.Array(Schema.String)),
                  environmentVariables: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        name: Schema.String,
                        value: Schema.optional(Schema.String),
                        secureValue: Schema.optional(Schema.String),
                        secureValueReference: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  instanceView: Schema.optional(
                    Schema.Struct({
                      restartCount: Schema.optional(Schema.Number),
                      currentState: Schema.optional(
                        Schema.Struct({
                          state: Schema.optional(Schema.String),
                          startTime: Schema.optional(Schema.String),
                          exitCode: Schema.optional(Schema.Number),
                          finishTime: Schema.optional(Schema.String),
                          detailStatus: Schema.optional(Schema.String),
                        }),
                      ),
                      previousState: Schema.optional(
                        Schema.Struct({
                          state: Schema.optional(Schema.String),
                          startTime: Schema.optional(Schema.String),
                          exitCode: Schema.optional(Schema.Number),
                          finishTime: Schema.optional(Schema.String),
                          detailStatus: Schema.optional(Schema.String),
                        }),
                      ),
                      events: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            count: Schema.optional(Schema.Number),
                            firstTimestamp: Schema.optional(Schema.String),
                            lastTimestamp: Schema.optional(Schema.String),
                            name: Schema.optional(Schema.String),
                            message: Schema.optional(Schema.String),
                            type: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                    }),
                  ),
                  volumeMounts: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        name: Schema.String,
                        mountPath: Schema.String,
                        readOnly: Schema.optional(Schema.Boolean),
                      }),
                    ),
                  ),
                  securityContext: Schema.optional(
                    Schema.Struct({
                      privileged: Schema.optional(Schema.Boolean),
                      allowPrivilegeEscalation: Schema.optional(Schema.Boolean),
                      capabilities: Schema.optional(
                        Schema.Struct({
                          add: Schema.optional(Schema.Array(Schema.String)),
                          drop: Schema.optional(Schema.Array(Schema.String)),
                        }),
                      ),
                      runAsGroup: Schema.optional(Schema.Number),
                      runAsUser: Schema.optional(Schema.Number),
                      seccompProfile: Schema.optional(Schema.String),
                    }),
                  ),
                }),
              }),
            ),
          ),
          extensions: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.String,
                properties: Schema.optional(
                  Schema.Struct({
                    extensionType: Schema.String,
                    version: Schema.String,
                    settings: Schema.optional(Schema.Unknown),
                    protectedSettings: Schema.optional(Schema.Unknown),
                  }),
                ),
              }),
            ),
          ),
          confidentialComputeProperties: Schema.optional(
            Schema.Struct({
              ccePolicy: Schema.optional(Schema.String),
            }),
          ),
          priority: Schema.optional(Schema.Literals(["Regular", "Spot"])),
          identityAcls: Schema.optional(
            Schema.Struct({
              defaultAccess: Schema.optional(
                Schema.Literals(["All", "System", "User"]),
              ),
              acls: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    access: Schema.optional(
                      Schema.Literals(["All", "System", "User"]),
                    ),
                    identity: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
          containerGroupProfile: Schema.optional(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              revision: Schema.optional(Schema.Number),
            }),
          ),
          standbyPoolProfile: Schema.optional(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              failContainerGroupCreateOnReuseFailure: Schema.optional(
                Schema.Boolean,
              ),
            }),
          ),
          isCreatedFromStandbyPool: Schema.optional(Schema.Boolean),
        }),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ContainerGroupsListByResourceGroupOutput>;

// The operation
/**
 * Get a list of container groups in the specified subscription and resource group.
 *
 * Get a list of container groups in a specified subscription and resource group. This operation returns properties of each container group including containers, image registry credentials, restart policy, IP address type, OS type, state, and volumes.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ContainerGroupsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ContainerGroupsListByResourceGroupInput,
    outputSchema: ContainerGroupsListByResourceGroupOutput,
  }));
// Input Schema
export interface ContainerGroupsRestartInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerGroupName: string;
}
export const ContainerGroupsRestartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName}/restart",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ContainerGroupsRestartInput>;

// Output Schema
export type ContainerGroupsRestartOutput = void;
export const ContainerGroupsRestartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ContainerGroupsRestartOutput>;

// The operation
/**
 * Restarts all containers in a container group.
 *
 * Restarts all containers in a container group in place. If container image has updates, new image will be downloaded.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerGroupName - The name of the container group.
 */
export const ContainerGroupsRestart = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ContainerGroupsRestartInput,
    outputSchema: ContainerGroupsRestartOutput,
  }),
);
// Input Schema
export interface ContainerGroupsStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerGroupName: string;
}
export const ContainerGroupsStartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName}/start",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ContainerGroupsStartInput>;

// Output Schema
export type ContainerGroupsStartOutput = void;
export const ContainerGroupsStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ContainerGroupsStartOutput>;

// The operation
/**
 * Starts all containers in a container group.
 *
 * Starts all containers in a container group. Compute resources will be allocated and billing will start.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerGroupName - The name of the container group.
 */
export const ContainerGroupsStart = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ContainerGroupsStartInput,
    outputSchema: ContainerGroupsStartOutput,
  }),
);
// Input Schema
export interface ContainerGroupsStopInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerGroupName: string;
}
export const ContainerGroupsStopInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName}/stop",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ContainerGroupsStopInput>;

// Output Schema
export type ContainerGroupsStopOutput = void;
export const ContainerGroupsStopOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ContainerGroupsStopOutput>;

// The operation
/**
 * Stops all containers in a container group.
 *
 * Stops all containers in a container group. Compute resources will be deallocated and billing will stop.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerGroupName - The name of the container group.
 */
export const ContainerGroupsStop = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ContainerGroupsStopInput,
  outputSchema: ContainerGroupsStopOutput,
}));
// Input Schema
export interface ContainerGroupsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerGroupName: string;
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  zones?: string[];
}
export const ContainerGroupsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerGroupName: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    zones: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ContainerGroupsUpdateInput>;

// Output Schema
export interface ContainerGroupsUpdateOutput {
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
export const ContainerGroupsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ContainerGroupsUpdateOutput>;

// The operation
/**
 * Update container groups.
 *
 * Updates container group tags with specified values.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerGroupName - The name of the container group.
 */
export const ContainerGroupsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ContainerGroupsUpdateInput,
    outputSchema: ContainerGroupsUpdateOutput,
  }),
);
// Input Schema
export interface ContainersAttachInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerGroupName: string;
  containerName: string;
}
export const ContainersAttachInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  containerGroupName: Schema.String.pipe(T.PathParam()),
  containerName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName}/containers/{containerName}/attach",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<ContainersAttachInput>;

// Output Schema
export interface ContainersAttachOutput {
  webSocketUri?: string;
  password?: Redacted.Redacted<string>;
}
export const ContainersAttachOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    webSocketUri: Schema.optional(Schema.String),
    password: Schema.optional(SensitiveOutputString),
  },
) as unknown as Schema.Codec<ContainersAttachOutput>;

// The operation
/**
 * Attach to the output of a specific container instance.
 *
 * Attach to the output stream of a specific container instance in a specified resource group and container group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerGroupName - The name of the container group.
 * @param containerName - The name of the container instance.
 */
export const ContainersAttach = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ContainersAttachInput,
  outputSchema: ContainersAttachOutput,
}));
// Input Schema
export interface ContainersExecuteCommandInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerGroupName: string;
  containerName: string;
  command?: string;
  terminalSize?: { rows?: number; cols?: number };
}
export const ContainersExecuteCommandInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerGroupName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    command: Schema.optional(Schema.String),
    terminalSize: Schema.optional(
      Schema.Struct({
        rows: Schema.optional(Schema.Number),
        cols: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName}/containers/{containerName}/exec",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ContainersExecuteCommandInput>;

// Output Schema
export interface ContainersExecuteCommandOutput {
  webSocketUri?: string;
  password?: Redacted.Redacted<string>;
}
export const ContainersExecuteCommandOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webSocketUri: Schema.optional(Schema.String),
    password: Schema.optional(SensitiveOutputString),
  }) as unknown as Schema.Codec<ContainersExecuteCommandOutput>;

// The operation
/**
 * Executes a command in a specific container instance.
 *
 * Executes a command for a specific container instance in a specified resource group and container group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerGroupName - The name of the container group.
 * @param containerName - The name of the container instance.
 */
export const ContainersExecuteCommand = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ContainersExecuteCommandInput,
    outputSchema: ContainersExecuteCommandOutput,
  }),
);
// Input Schema
export interface ContainersListLogsInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerGroupName: string;
  containerName: string;
  tail?: number;
  timestamps?: boolean;
}
export const ContainersListLogsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerGroupName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    tail: Schema.optional(Schema.Number),
    timestamps: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName}/containers/{containerName}/logs",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ContainersListLogsInput>;

// Output Schema
export interface ContainersListLogsOutput {
  content?: string;
}
export const ContainersListLogsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ContainersListLogsOutput>;

// The operation
/**
 * Get the logs for a specified container instance.
 *
 * Get the logs for a specified container instance in a specified resource group and container group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerGroupName - The name of the container group.
 * @param containerName - The name of the container instance.
 * @param tail - The number of lines to show from the tail of the container instance log. If not provided, all available logs are shown up to 4mb.
 * @param timestamps - If true, adds a timestamp at the beginning of every line of log output. If not provided, defaults to false.
 */
export const ContainersListLogs = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ContainersListLogsInput,
  outputSchema: ContainersListLogsOutput,
}));
// Input Schema
export interface LocationListCachedImagesInput {
  subscriptionId: string;
  location: string;
}
export const LocationListCachedImagesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ContainerInstance/locations/{location}/cachedImages",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<LocationListCachedImagesInput>;

// Output Schema
export interface LocationListCachedImagesOutput {
  value?: { osType: string; image: string }[];
  nextLink?: string;
}
export const LocationListCachedImagesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          osType: Schema.String,
          image: Schema.String,
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<LocationListCachedImagesOutput>;

// The operation
/**
 * Get the list of cached images.
 *
 * Get the list of cached images on specific OS type for a subscription in a region.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const LocationListCachedImages = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LocationListCachedImagesInput,
    outputSchema: LocationListCachedImagesOutput,
  }),
);
// Input Schema
export interface LocationListCapabilitiesInput {
  subscriptionId: string;
  location: string;
}
export const LocationListCapabilitiesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ContainerInstance/locations/{location}/capabilities",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<LocationListCapabilitiesInput>;

// Output Schema
export interface LocationListCapabilitiesOutput {
  value?: {
    resourceType?: string;
    osType?: string;
    location?: string;
    ipAddressType?: string;
    gpu?: string;
    capabilities?: {
      maxMemoryInGB?: number;
      maxCpu?: number;
      maxGpuCount?: number;
    };
  }[];
  nextLink?: string;
}
export const LocationListCapabilitiesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          resourceType: Schema.optional(Schema.String),
          osType: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          ipAddressType: Schema.optional(Schema.String),
          gpu: Schema.optional(Schema.String),
          capabilities: Schema.optional(
            Schema.Struct({
              maxMemoryInGB: Schema.optional(Schema.Number),
              maxCpu: Schema.optional(Schema.Number),
              maxGpuCount: Schema.optional(Schema.Number),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<LocationListCapabilitiesOutput>;

// The operation
/**
 * Get the list of capabilities of the location.
 *
 * Get the list of CPU/memory/GPU capabilities of a region.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const LocationListCapabilities = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LocationListCapabilitiesInput,
    outputSchema: LocationListCapabilitiesOutput,
  }),
);
// Input Schema
export interface LocationListUsageInput {
  subscriptionId: string;
  location: string;
}
export const LocationListUsageInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ContainerInstance/locations/{location}/usages",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<LocationListUsageInput>;

// Output Schema
export interface LocationListUsageOutput {
  value?: {
    id?: string;
    unit?: string;
    currentValue?: number;
    limit?: number;
    name?: { value?: string; localizedValue?: string };
  }[];
  nextLink?: string;
}
export const LocationListUsageOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<LocationListUsageOutput>;

// The operation
/**
 * Get the usage for a subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const LocationListUsage = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LocationListUsageInput,
  outputSchema: LocationListUsageOutput,
}));
// Input Schema
export interface NGroupsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  ngroupsName: string;
  properties?: {
    elasticProfile?: {
      desiredCount?: number;
      maintainDesiredCount?: boolean;
      containerGroupNamingPolicy?: { guidNamingPolicy?: { prefix?: string } };
    };
    placementProfile?: { faultDomainCount?: number };
    containerGroupProfiles?: {
      resource?: { id?: string };
      revision?: number;
      networkProfile?: {
        loadBalancer?: { backendAddressPools?: { resource?: string }[] };
        applicationGateway?: {
          resource?: string;
          backendAddressPools?: { resource?: string }[];
        };
      };
      storageProfile?: {
        fileShares?: {
          name?: string;
          resourceGroupName?: string;
          storageAccountName?: string;
          properties?: {
            shareAccessType?: "Shared" | "Exclusive";
            shareAccessTier?:
              | "Cool"
              | "Hot"
              | "Premium"
              | "TransactionOptimized";
          };
        }[];
      };
      containerGroupProperties?: {
        subnetIds?: { id: string; name?: string }[];
        volumes?: {
          name: string;
          azureFile?: {
            shareName: string;
            readOnly?: boolean;
            storageAccountName: string;
            storageAccountKey?: string;
            storageAccountKeyReference?: string;
          };
        }[];
        containers?: {
          name?: string;
          properties?: {
            volumeMounts?: {
              name: string;
              mountPath: string;
              readOnly?: boolean;
            }[];
          };
        }[];
      };
    }[];
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Failed"
      | "Succeeded"
      | "Canceled"
      | "Deleting"
      | "Migrating";
    updateProfile?: {
      updateMode?: "Manual" | "Rolling";
      rollingUpdateProfile?: {
        maxBatchPercent?: number;
        maxUnhealthyPercent?: number;
        pauseTimeBetweenBatches?: string;
        inPlaceUpdate?: boolean;
      };
    };
  };
  tags?: Record<string, string>;
  location?: string;
  zones?: string[];
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
      { principalId?: string; clientId?: string }
    >;
  };
}
export const NGroupsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    ngroupsName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        elasticProfile: Schema.optional(
          Schema.Struct({
            desiredCount: Schema.optional(Schema.Number),
            maintainDesiredCount: Schema.optional(Schema.Boolean),
            containerGroupNamingPolicy: Schema.optional(
              Schema.Struct({
                guidNamingPolicy: Schema.optional(
                  Schema.Struct({
                    prefix: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
          }),
        ),
        placementProfile: Schema.optional(
          Schema.Struct({
            faultDomainCount: Schema.optional(Schema.Number),
          }),
        ),
        containerGroupProfiles: Schema.optional(
          Schema.Array(
            Schema.Struct({
              resource: Schema.optional(
                Schema.Struct({
                  id: Schema.optional(Schema.String),
                }),
              ),
              revision: Schema.optional(Schema.Number),
              networkProfile: Schema.optional(
                Schema.Struct({
                  loadBalancer: Schema.optional(
                    Schema.Struct({
                      backendAddressPools: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            resource: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                    }),
                  ),
                  applicationGateway: Schema.optional(
                    Schema.Struct({
                      resource: Schema.optional(Schema.String),
                      backendAddressPools: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            resource: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                    }),
                  ),
                }),
              ),
              storageProfile: Schema.optional(
                Schema.Struct({
                  fileShares: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        name: Schema.optional(Schema.String),
                        resourceGroupName: Schema.optional(Schema.String),
                        storageAccountName: Schema.optional(Schema.String),
                        properties: Schema.optional(
                          Schema.Struct({
                            shareAccessType: Schema.optional(
                              Schema.Literals(["Shared", "Exclusive"]),
                            ),
                            shareAccessTier: Schema.optional(
                              Schema.Literals([
                                "Cool",
                                "Hot",
                                "Premium",
                                "TransactionOptimized",
                              ]),
                            ),
                          }),
                        ),
                      }),
                    ),
                  ),
                }),
              ),
              containerGroupProperties: Schema.optional(
                Schema.Struct({
                  subnetIds: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        id: Schema.String,
                        name: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  volumes: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        name: Schema.String,
                        azureFile: Schema.optional(
                          Schema.Struct({
                            shareName: Schema.String,
                            readOnly: Schema.optional(Schema.Boolean),
                            storageAccountName: Schema.String,
                            storageAccountKey: Schema.optional(Schema.String),
                            storageAccountKeyReference: Schema.optional(
                              Schema.String,
                            ),
                          }),
                        ),
                      }),
                    ),
                  ),
                  containers: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        name: Schema.optional(Schema.String),
                        properties: Schema.optional(
                          Schema.Struct({
                            volumeMounts: Schema.optional(
                              Schema.Array(
                                Schema.Struct({
                                  name: Schema.String,
                                  mountPath: Schema.String,
                                  readOnly: Schema.optional(Schema.Boolean),
                                }),
                              ),
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
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Failed",
            "Succeeded",
            "Canceled",
            "Deleting",
            "Migrating",
          ]),
        ),
        updateProfile: Schema.optional(
          Schema.Struct({
            updateMode: Schema.optional(Schema.Literals(["Manual", "Rolling"])),
            rollingUpdateProfile: Schema.optional(
              Schema.Struct({
                maxBatchPercent: Schema.optional(Schema.Number),
                maxUnhealthyPercent: Schema.optional(Schema.Number),
                pauseTimeBetweenBatches: Schema.optional(Schema.String),
                inPlaceUpdate: Schema.optional(Schema.Boolean),
              }),
            ),
          }),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    zones: Schema.optional(Schema.Array(Schema.String)),
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
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/ngroups/{ngroupsName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<NGroupsCreateOrUpdateInput>;

// Output Schema
export interface NGroupsCreateOrUpdateOutput {
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
export const NGroupsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<NGroupsCreateOrUpdateOutput>;

// The operation
/**
 * NGroup PUT REST API
 *
 * Create or update a NGroups resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ngroupsName - The NGroups name.
 */
export const NGroupsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NGroupsCreateOrUpdateInput,
    outputSchema: NGroupsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface NGroupsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  ngroupsName: string;
}
export const NGroupsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  ngroupsName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/ngroups/{ngroupsName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<NGroupsDeleteInput>;

// Output Schema
export type NGroupsDeleteOutput = void;
export const NGroupsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<NGroupsDeleteOutput>;

// The operation
/**
 * NGroups Delete REST API
 *
 * Deletes the NGroups resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ngroupsName - The NGroups name.
 */
export const NGroupsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NGroupsDeleteInput,
  outputSchema: NGroupsDeleteOutput,
}));
// Input Schema
export interface NGroupsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  ngroupsName: string;
}
export const NGroupsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  ngroupsName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/ngroups/{ngroupsName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<NGroupsGetInput>;

// Output Schema
export interface NGroupsGetOutput {
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
export const NGroupsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<NGroupsGetOutput>;

// The operation
/**
 * NGroups GET REST API
 *
 * Get the properties of the specified NGroups resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ngroupsName - The NGroups name.
 */
export const NGroupsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NGroupsGetInput,
  outputSchema: NGroupsGetOutput,
}));
// Input Schema
export interface NGroupsListInput {
  subscriptionId: string;
}
export const NGroupsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ContainerInstance/ngroups",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<NGroupsListInput>;

// Output Schema
export interface NGroupsListOutput {
  value: {
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
  nextLink?: string;
}
export const NGroupsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
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
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<NGroupsListOutput>;

// The operation
/**
 * List NGroups in a subscription.
 *
 * Gets a list of all NGroups resources under a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const NGroupsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NGroupsListInput,
  outputSchema: NGroupsListOutput,
}));
// Input Schema
export interface NGroupsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const NGroupsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/ngroups",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<NGroupsListByResourceGroupInput>;

// Output Schema
export interface NGroupsListByResourceGroupOutput {
  value: {
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
  nextLink?: string;
}
export const NGroupsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NGroupsListByResourceGroupOutput>;

// The operation
/**
 * GET NGroups under a resource group REST API.
 *
 * Gets a list of all NGroups resources under a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const NGroupsListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NGroupsListByResourceGroupInput,
    outputSchema: NGroupsListByResourceGroupOutput,
  }),
);
// Input Schema
export interface NGroupsRestartInput {
  subscriptionId: string;
  resourceGroupName: string;
  ngroupsName: string;
}
export const NGroupsRestartInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  ngroupsName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/ngroups/{ngroupsName}/restart",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<NGroupsRestartInput>;

// Output Schema
export type NGroupsRestartOutput = void;
export const NGroupsRestartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<NGroupsRestartOutput>;

// The operation
/**
 * Restarts all container groups in the specified NGroups resource.
 *
 * Restarts all container groups in the specified NGroups resource in place. If container image has updates, new image will be downloaded.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ngroupsName - The NGroups name.
 */
export const NGroupsRestart = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NGroupsRestartInput,
  outputSchema: NGroupsRestartOutput,
}));
// Input Schema
export interface NGroupsStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  ngroupsName: string;
}
export const NGroupsStartInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  ngroupsName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/ngroups/{ngroupsName}/start",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<NGroupsStartInput>;

// Output Schema
export type NGroupsStartOutput = void;
export const NGroupsStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<NGroupsStartOutput>;

// The operation
/**
 * Starts all container groups in the specified NGroups resource.
 *
 * Starts all container groups in the specified NGroups resource. Compute resources will be allocated and billing will start.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ngroupsName - The NGroups name.
 */
export const NGroupsStart = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NGroupsStartInput,
  outputSchema: NGroupsStartOutput,
}));
// Input Schema
export interface NGroupsStopInput {
  subscriptionId: string;
  resourceGroupName: string;
  ngroupsName: string;
}
export const NGroupsStopInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  ngroupsName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/ngroups/{ngroupsName}/stop",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<NGroupsStopInput>;

// Output Schema
export type NGroupsStopOutput = void;
export const NGroupsStopOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<NGroupsStopOutput>;

// The operation
/**
 * Stops all container groups in the specified NGroups resource.
 *
 * Stops all container groups in the specified NGroups resource. Compute resources will be deallocated and billing will stop.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ngroupsName - The NGroups name.
 */
export const NGroupsStop = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NGroupsStopInput,
  outputSchema: NGroupsStopOutput,
}));
// Input Schema
export interface NGroupsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  ngroupsName: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  properties?: {
    elasticProfile?: {
      desiredCount?: number;
      maintainDesiredCount?: boolean;
      containerGroupNamingPolicy?: { guidNamingPolicy?: { prefix?: string } };
    };
    placementProfile?: { faultDomainCount?: number };
    containerGroupProfiles?: {
      resource?: { id?: string };
      revision?: number;
      networkProfile?: {
        loadBalancer?: { backendAddressPools?: { resource?: string }[] };
        applicationGateway?: {
          resource?: string;
          backendAddressPools?: { resource?: string }[];
        };
      };
      storageProfile?: {
        fileShares?: {
          name?: string;
          resourceGroupName?: string;
          storageAccountName?: string;
          properties?: {
            shareAccessType?: "Shared" | "Exclusive";
            shareAccessTier?:
              | "Cool"
              | "Hot"
              | "Premium"
              | "TransactionOptimized";
          };
        }[];
      };
      containerGroupProperties?: {
        subnetIds?: { id: string; name?: string }[];
        volumes?: {
          name: string;
          azureFile?: {
            shareName: string;
            readOnly?: boolean;
            storageAccountName: string;
            storageAccountKey?: string;
            storageAccountKeyReference?: string;
          };
        }[];
        containers?: {
          name?: string;
          properties?: {
            volumeMounts?: {
              name: string;
              mountPath: string;
              readOnly?: boolean;
            }[];
          };
        }[];
      };
    }[];
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Failed"
      | "Succeeded"
      | "Canceled"
      | "Deleting"
      | "Migrating";
    updateProfile?: {
      updateMode?: "Manual" | "Rolling";
      rollingUpdateProfile?: {
        maxBatchPercent?: number;
        maxUnhealthyPercent?: number;
        pauseTimeBetweenBatches?: string;
        inPlaceUpdate?: boolean;
      };
    };
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
      { principalId?: string; clientId?: string }
    >;
  };
  tags?: Record<string, string>;
  zones?: string[];
}
export const NGroupsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  ngroupsName: Schema.String.pipe(T.PathParam()),
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
    Schema.Struct({
      elasticProfile: Schema.optional(
        Schema.Struct({
          desiredCount: Schema.optional(Schema.Number),
          maintainDesiredCount: Schema.optional(Schema.Boolean),
          containerGroupNamingPolicy: Schema.optional(
            Schema.Struct({
              guidNamingPolicy: Schema.optional(
                Schema.Struct({
                  prefix: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
        }),
      ),
      placementProfile: Schema.optional(
        Schema.Struct({
          faultDomainCount: Schema.optional(Schema.Number),
        }),
      ),
      containerGroupProfiles: Schema.optional(
        Schema.Array(
          Schema.Struct({
            resource: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
              }),
            ),
            revision: Schema.optional(Schema.Number),
            networkProfile: Schema.optional(
              Schema.Struct({
                loadBalancer: Schema.optional(
                  Schema.Struct({
                    backendAddressPools: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          resource: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                  }),
                ),
                applicationGateway: Schema.optional(
                  Schema.Struct({
                    resource: Schema.optional(Schema.String),
                    backendAddressPools: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          resource: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                  }),
                ),
              }),
            ),
            storageProfile: Schema.optional(
              Schema.Struct({
                fileShares: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      resourceGroupName: Schema.optional(Schema.String),
                      storageAccountName: Schema.optional(Schema.String),
                      properties: Schema.optional(
                        Schema.Struct({
                          shareAccessType: Schema.optional(
                            Schema.Literals(["Shared", "Exclusive"]),
                          ),
                          shareAccessTier: Schema.optional(
                            Schema.Literals([
                              "Cool",
                              "Hot",
                              "Premium",
                              "TransactionOptimized",
                            ]),
                          ),
                        }),
                      ),
                    }),
                  ),
                ),
              }),
            ),
            containerGroupProperties: Schema.optional(
              Schema.Struct({
                subnetIds: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      id: Schema.String,
                      name: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                volumes: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.String,
                      azureFile: Schema.optional(
                        Schema.Struct({
                          shareName: Schema.String,
                          readOnly: Schema.optional(Schema.Boolean),
                          storageAccountName: Schema.String,
                          storageAccountKey: Schema.optional(Schema.String),
                          storageAccountKeyReference: Schema.optional(
                            Schema.String,
                          ),
                        }),
                      ),
                    }),
                  ),
                ),
                containers: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      properties: Schema.optional(
                        Schema.Struct({
                          volumeMounts: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                name: Schema.String,
                                mountPath: Schema.String,
                                readOnly: Schema.optional(Schema.Boolean),
                              }),
                            ),
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
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Creating",
          "Updating",
          "Failed",
          "Succeeded",
          "Canceled",
          "Deleting",
          "Migrating",
        ]),
      ),
      updateProfile: Schema.optional(
        Schema.Struct({
          updateMode: Schema.optional(Schema.Literals(["Manual", "Rolling"])),
          rollingUpdateProfile: Schema.optional(
            Schema.Struct({
              maxBatchPercent: Schema.optional(Schema.Number),
              maxUnhealthyPercent: Schema.optional(Schema.Number),
              pauseTimeBetweenBatches: Schema.optional(Schema.String),
              inPlaceUpdate: Schema.optional(Schema.Boolean),
            }),
          ),
        }),
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
          }),
        ),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  zones: Schema.optional(Schema.Array(Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/ngroups/{ngroupsName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<NGroupsUpdateInput>;

// Output Schema
export interface NGroupsUpdateOutput {
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
export const NGroupsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<NGroupsUpdateOutput>;

// The operation
/**
 * NGroups PATCH REST API
 *
 * Update a specified NGroups resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ngroupsName - The NGroups name.
 */
export const NGroupsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NGroupsUpdateInput,
  outputSchema: NGroupsUpdateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ContainerInstance/operations",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value: {
    name: string;
    display: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
    properties?: unknown;
    origin?: "User" | "System";
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
      name: Schema.String,
      display: Schema.Struct({
        provider: Schema.optional(Schema.String),
        resource: Schema.optional(Schema.String),
        operation: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
      }),
      properties: Schema.optional(Schema.Unknown),
      origin: Schema.optional(Schema.Literals(["User", "System"])),
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

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
export interface SubnetServiceAssociationLinkDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualNetworkName: string;
  subnetName: string;
}
export const SubnetServiceAssociationLinkDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualNetworkName: Schema.String.pipe(T.PathParam()),
    subnetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}/providers/Microsoft.ContainerInstance/serviceAssociationLinks/default",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<SubnetServiceAssociationLinkDeleteInput>;

// Output Schema
export type SubnetServiceAssociationLinkDeleteOutput = void;
export const SubnetServiceAssociationLinkDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SubnetServiceAssociationLinkDeleteOutput>;

// The operation
/**
 * Delete container group virtual network association links.
 *
 * Delete container group virtual network association links. The operation does not delete other resources provided by the user.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualNetworkName - The name of the virtual network.
 * @param subnetName - The name of the subnet.
 */
export const SubnetServiceAssociationLinkDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SubnetServiceAssociationLinkDeleteInput,
    outputSchema: SubnetServiceAssociationLinkDeleteOutput,
  }));
