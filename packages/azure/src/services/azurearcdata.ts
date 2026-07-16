/**
 * Azure Azurearcdata API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface ActiveDirectoryConnectorsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  dataControllerName: string;
  activeDirectoryConnectorName: string;
  properties: {
    domainServiceAccountLoginInformation?: {
      username?: string;
      password?: string | Redacted.Redacted<string>;
    };
    provisioningState?: string;
    spec: {
      activeDirectory: {
        realm: string;
        netbiosDomainName?: string;
        serviceAccountProvisioning?: "automatic" | "manual";
        ouDistinguishedName?: string;
        domainControllers?: {
          primaryDomainController?: { hostname: string };
          secondaryDomainControllers?: { hostname: string }[];
        };
      };
      dns: {
        domainName?: string;
        nameserverIPAddresses: string[];
        replicas?: number;
        preferK8sDnsForPtrLookups?: boolean;
      };
    };
    status?: {
      lastUpdateTime?: string;
      observedGeneration?: number;
      state?: string;
    };
  };
}
export const ActiveDirectoryConnectorsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dataControllerName: Schema.String.pipe(T.PathParam()),
    activeDirectoryConnectorName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      domainServiceAccountLoginInformation: Schema.optional(
        Schema.Struct({
          username: Schema.optional(Schema.String),
          password: Schema.optional(SensitiveString),
        }),
      ),
      provisioningState: Schema.optional(Schema.String),
      spec: Schema.Struct({
        activeDirectory: Schema.Struct({
          realm: Schema.String,
          netbiosDomainName: Schema.optional(Schema.String),
          serviceAccountProvisioning: Schema.optional(
            Schema.Literals(["automatic", "manual"]),
          ),
          ouDistinguishedName: Schema.optional(Schema.String),
          domainControllers: Schema.optional(
            Schema.Struct({
              primaryDomainController: Schema.optional(
                Schema.Struct({
                  hostname: Schema.String,
                }),
              ),
              secondaryDomainControllers: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    hostname: Schema.String,
                  }),
                ),
              ),
            }),
          ),
        }),
        dns: Schema.Struct({
          domainName: Schema.optional(Schema.String),
          nameserverIPAddresses: Schema.Array(Schema.String),
          replicas: Schema.optional(Schema.Number),
          preferK8sDnsForPtrLookups: Schema.optional(Schema.Boolean),
        }),
      }),
      status: Schema.optional(
        Schema.Struct({
          lastUpdateTime: Schema.optional(Schema.String),
          observedGeneration: Schema.optional(Schema.Number),
          state: Schema.optional(Schema.String),
        }),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/dataControllers/{dataControllerName}/activeDirectoryConnectors/{activeDirectoryConnectorName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ActiveDirectoryConnectorsCreateInput>;

// Output Schema
export interface ActiveDirectoryConnectorsCreateOutput {
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
export const ActiveDirectoryConnectorsCreateOutput =
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
  }) as unknown as Schema.Codec<ActiveDirectoryConnectorsCreateOutput>;

// The operation
/**
 * Creates or replaces an Active Directory connector resource.
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param dataControllerName - The name of the data controller
 * @param activeDirectoryConnectorName - The name of the Active Directory connector instance
 * @param api-version - The API version to use for the request
 * @param properties - null
 */
export const ActiveDirectoryConnectorsCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ActiveDirectoryConnectorsCreateInput,
    outputSchema: ActiveDirectoryConnectorsCreateOutput,
  }));
// Input Schema
export interface ActiveDirectoryConnectorsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  dataControllerName: string;
  activeDirectoryConnectorName: string;
}
export const ActiveDirectoryConnectorsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dataControllerName: Schema.String.pipe(T.PathParam()),
    activeDirectoryConnectorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/dataControllers/{dataControllerName}/activeDirectoryConnectors/{activeDirectoryConnectorName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ActiveDirectoryConnectorsDeleteInput>;

// Output Schema
export type ActiveDirectoryConnectorsDeleteOutput = void;
export const ActiveDirectoryConnectorsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ActiveDirectoryConnectorsDeleteOutput>;

// The operation
/**
 * Deletes an Active Directory connector resource
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param dataControllerName - The name of the data controller
 * @param activeDirectoryConnectorName - The name of the Active Directory connector instance
 * @param api-version - The API version to use for the request
 */
export const ActiveDirectoryConnectorsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ActiveDirectoryConnectorsDeleteInput,
    outputSchema: ActiveDirectoryConnectorsDeleteOutput,
  }));
// Input Schema
export interface ActiveDirectoryConnectorsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  dataControllerName: string;
  activeDirectoryConnectorName: string;
}
export const ActiveDirectoryConnectorsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dataControllerName: Schema.String.pipe(T.PathParam()),
    activeDirectoryConnectorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/dataControllers/{dataControllerName}/activeDirectoryConnectors/{activeDirectoryConnectorName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ActiveDirectoryConnectorsGetInput>;

// Output Schema
export interface ActiveDirectoryConnectorsGetOutput {
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
export const ActiveDirectoryConnectorsGetOutput =
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
  }) as unknown as Schema.Codec<ActiveDirectoryConnectorsGetOutput>;

// The operation
/**
 * Retrieves an Active Directory connector resource
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param dataControllerName - The name of the data controller
 * @param activeDirectoryConnectorName - The name of the Active Directory connector instance
 * @param api-version - The API version to use for the request
 */
export const ActiveDirectoryConnectorsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ActiveDirectoryConnectorsGetInput,
    outputSchema: ActiveDirectoryConnectorsGetOutput,
  }));
// Input Schema
export interface ActiveDirectoryConnectorsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  dataControllerName: string;
}
export const ActiveDirectoryConnectorsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dataControllerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/dataControllers/{dataControllerName}/activeDirectoryConnectors",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ActiveDirectoryConnectorsListInput>;

// Output Schema
export interface ActiveDirectoryConnectorsListOutput {
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
  nextLink?: string;
}
export const ActiveDirectoryConnectorsListOutput =
  /*@__PURE__*/ Schema.Struct({
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ActiveDirectoryConnectorsListOutput>;

// The operation
/**
 * List the active directory connectors associated with the given data controller.
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param dataControllerName - The name of the data controller
 * @param api-version - The API version to use for the request
 */
export const ActiveDirectoryConnectorsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ActiveDirectoryConnectorsListInput,
    outputSchema: ActiveDirectoryConnectorsListOutput,
  }));
// Input Schema
export interface DataControllersDeleteDataControllerInput {
  subscriptionId: string;
  resourceGroupName: string;
  dataControllerName: string;
}
export const DataControllersDeleteDataControllerInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dataControllerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/dataControllers/{dataControllerName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<DataControllersDeleteDataControllerInput>;

// Output Schema
export type DataControllersDeleteDataControllerOutput = void;
export const DataControllersDeleteDataControllerOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DataControllersDeleteDataControllerOutput>;

// The operation
/**
 * Deletes a dataController resource
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param dataControllerName - The name of the data controller
 * @param api-version - The API version to use for the request
 */
export const DataControllersDeleteDataController =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DataControllersDeleteDataControllerInput,
    outputSchema: DataControllersDeleteDataControllerOutput,
  }));
// Input Schema
export interface DataControllersGetDataControllerInput {
  subscriptionId: string;
  resourceGroupName: string;
  dataControllerName: string;
}
export const DataControllersGetDataControllerInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dataControllerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/dataControllers/{dataControllerName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<DataControllersGetDataControllerInput>;

// Output Schema
export interface DataControllersGetDataControllerOutput {
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
export const DataControllersGetDataControllerOutput =
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
  }) as unknown as Schema.Codec<DataControllersGetDataControllerOutput>;

// The operation
/**
 * Retrieves a dataController resource
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param dataControllerName - The name of the data controller
 * @param api-version - The API version to use for the request
 */
export const DataControllersGetDataController =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DataControllersGetDataControllerInput,
    outputSchema: DataControllersGetDataControllerOutput,
  }));
// Input Schema
export interface DataControllersListInGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const DataControllersListInGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/dataControllers",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<DataControllersListInGroupInput>;

// Output Schema
export interface DataControllersListInGroupOutput {
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
  nextLink?: string;
}
export const DataControllersListInGroupOutput =
  /*@__PURE__*/ Schema.Struct({
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DataControllersListInGroupOutput>;

// The operation
/**
 * List dataController resources in the resource group
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param api-version - The API version to use for the request
 */
export const DataControllersListInGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: DataControllersListInGroupInput,
  outputSchema: DataControllersListInGroupOutput,
}));
// Input Schema
export interface DataControllersListInSubscriptionInput {
  subscriptionId: string;
}
export const DataControllersListInSubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureArcData/dataControllers",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<DataControllersListInSubscriptionInput>;

// Output Schema
export interface DataControllersListInSubscriptionOutput {
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
  nextLink?: string;
}
export const DataControllersListInSubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DataControllersListInSubscriptionOutput>;

// The operation
/**
 * List dataController resources in the subscription
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param api-version - The API version to use for the request
 */
export const DataControllersListInSubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DataControllersListInSubscriptionInput,
    outputSchema: DataControllersListInSubscriptionOutput,
  }));
// Input Schema
export interface DataControllersPatchDataControllerInput {
  subscriptionId: string;
  resourceGroupName: string;
  dataControllerName: string;
  tags?: Record<string, string>;
  properties?: {
    infrastructure?:
      | "azure"
      | "gcp"
      | "aws"
      | "alibaba"
      | "onpremises"
      | "other";
    onPremiseProperty?: {
      id: string;
      publicSigningKey: string;
      signingCertificateThumbprint?: string;
    };
    k8sRaw?: unknown;
    uploadWatermark?: { metrics?: string; logs?: string; usages?: string };
    lastUploadedDate?: string;
    basicLoginInformation?: {
      username?: string;
      password?: string | Redacted.Redacted<string>;
    };
    metricsDashboardCredential?: {
      username?: string;
      password?: string | Redacted.Redacted<string>;
    };
    logsDashboardCredential?: {
      username?: string;
      password?: string | Redacted.Redacted<string>;
    };
    logAnalyticsWorkspaceConfig?: { workspaceId?: string; primaryKey?: string };
    uploadServicePrincipal?: {
      clientId?: string;
      tenantId?: string;
      authority?: string;
      clientSecret?: string | Redacted.Redacted<string>;
    };
    provisioningState?: string;
    clusterId?: string;
    extensionId?: string;
  };
}
export const DataControllersPatchDataControllerInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dataControllerName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        infrastructure: Schema.optional(
          Schema.Literals([
            "azure",
            "gcp",
            "aws",
            "alibaba",
            "onpremises",
            "other",
          ]),
        ),
        onPremiseProperty: Schema.optional(
          Schema.Struct({
            id: Schema.String,
            publicSigningKey: Schema.String,
            signingCertificateThumbprint: Schema.optional(Schema.String),
          }),
        ),
        k8sRaw: Schema.optional(Schema.Unknown),
        uploadWatermark: Schema.optional(
          Schema.Struct({
            metrics: Schema.optional(Schema.String),
            logs: Schema.optional(Schema.String),
            usages: Schema.optional(Schema.String),
          }),
        ),
        lastUploadedDate: Schema.optional(Schema.String),
        basicLoginInformation: Schema.optional(
          Schema.Struct({
            username: Schema.optional(Schema.String),
            password: Schema.optional(SensitiveString),
          }),
        ),
        metricsDashboardCredential: Schema.optional(
          Schema.Struct({
            username: Schema.optional(Schema.String),
            password: Schema.optional(SensitiveString),
          }),
        ),
        logsDashboardCredential: Schema.optional(
          Schema.Struct({
            username: Schema.optional(Schema.String),
            password: Schema.optional(SensitiveString),
          }),
        ),
        logAnalyticsWorkspaceConfig: Schema.optional(
          Schema.Struct({
            workspaceId: Schema.optional(Schema.String),
            primaryKey: Schema.optional(Schema.String),
          }),
        ),
        uploadServicePrincipal: Schema.optional(
          Schema.Struct({
            clientId: Schema.optional(Schema.String),
            tenantId: Schema.optional(Schema.String),
            authority: Schema.optional(Schema.String),
            clientSecret: Schema.optional(SensitiveString),
          }),
        ),
        provisioningState: Schema.optional(Schema.String),
        clusterId: Schema.optional(Schema.String),
        extensionId: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/dataControllers/{dataControllerName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<DataControllersPatchDataControllerInput>;

// Output Schema
export interface DataControllersPatchDataControllerOutput {
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
export const DataControllersPatchDataControllerOutput =
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
  }) as unknown as Schema.Codec<DataControllersPatchDataControllerOutput>;

// The operation
/**
 * Updates a dataController resource
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param dataControllerName - The name of the data controller
 * @param api-version - The API version to use for the request
 * @param tags - Resource tags
 * @param properties - The data controller's properties
 */
export const DataControllersPatchDataController =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DataControllersPatchDataControllerInput,
    outputSchema: DataControllersPatchDataControllerOutput,
  }));
// Input Schema
export interface DataControllersPutDataControllerInput {
  subscriptionId: string;
  resourceGroupName: string;
  dataControllerName: string;
  extendedLocation?: { name?: string; type?: "CustomLocation" };
  properties: {
    infrastructure?:
      | "azure"
      | "gcp"
      | "aws"
      | "alibaba"
      | "onpremises"
      | "other";
    onPremiseProperty?: {
      id: string;
      publicSigningKey: string;
      signingCertificateThumbprint?: string;
    };
    k8sRaw?: unknown;
    uploadWatermark?: { metrics?: string; logs?: string; usages?: string };
    lastUploadedDate?: string;
    basicLoginInformation?: {
      username?: string;
      password?: string | Redacted.Redacted<string>;
    };
    metricsDashboardCredential?: {
      username?: string;
      password?: string | Redacted.Redacted<string>;
    };
    logsDashboardCredential?: {
      username?: string;
      password?: string | Redacted.Redacted<string>;
    };
    logAnalyticsWorkspaceConfig?: { workspaceId?: string; primaryKey?: string };
    uploadServicePrincipal?: {
      clientId?: string;
      tenantId?: string;
      authority?: string;
      clientSecret?: string | Redacted.Redacted<string>;
    };
    provisioningState?: string;
    clusterId?: string;
    extensionId?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const DataControllersPutDataControllerInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dataControllerName: Schema.String.pipe(T.PathParam()),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["CustomLocation"])),
      }),
    ),
    properties: Schema.Struct({
      infrastructure: Schema.optional(
        Schema.Literals([
          "azure",
          "gcp",
          "aws",
          "alibaba",
          "onpremises",
          "other",
        ]),
      ),
      onPremiseProperty: Schema.optional(
        Schema.Struct({
          id: Schema.String,
          publicSigningKey: Schema.String,
          signingCertificateThumbprint: Schema.optional(Schema.String),
        }),
      ),
      k8sRaw: Schema.optional(Schema.Unknown),
      uploadWatermark: Schema.optional(
        Schema.Struct({
          metrics: Schema.optional(Schema.String),
          logs: Schema.optional(Schema.String),
          usages: Schema.optional(Schema.String),
        }),
      ),
      lastUploadedDate: Schema.optional(Schema.String),
      basicLoginInformation: Schema.optional(
        Schema.Struct({
          username: Schema.optional(Schema.String),
          password: Schema.optional(SensitiveString),
        }),
      ),
      metricsDashboardCredential: Schema.optional(
        Schema.Struct({
          username: Schema.optional(Schema.String),
          password: Schema.optional(SensitiveString),
        }),
      ),
      logsDashboardCredential: Schema.optional(
        Schema.Struct({
          username: Schema.optional(Schema.String),
          password: Schema.optional(SensitiveString),
        }),
      ),
      logAnalyticsWorkspaceConfig: Schema.optional(
        Schema.Struct({
          workspaceId: Schema.optional(Schema.String),
          primaryKey: Schema.optional(Schema.String),
        }),
      ),
      uploadServicePrincipal: Schema.optional(
        Schema.Struct({
          clientId: Schema.optional(Schema.String),
          tenantId: Schema.optional(Schema.String),
          authority: Schema.optional(Schema.String),
          clientSecret: Schema.optional(SensitiveString),
        }),
      ),
      provisioningState: Schema.optional(Schema.String),
      clusterId: Schema.optional(Schema.String),
      extensionId: Schema.optional(Schema.String),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/dataControllers/{dataControllerName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<DataControllersPutDataControllerInput>;

// Output Schema
export interface DataControllersPutDataControllerOutput {
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
export const DataControllersPutDataControllerOutput =
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
  }) as unknown as Schema.Codec<DataControllersPutDataControllerOutput>;

// The operation
/**
 * Creates or replaces a dataController resource
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param dataControllerName - The name of the data controller
 * @param api-version - The API version to use for the request
 * @param extendedLocation - The complex type of the extended location.
 * @param properties - The data controller's properties
 */
export const DataControllersPutDataController =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DataControllersPutDataControllerInput,
    outputSchema: DataControllersPutDataControllerOutput,
  }));
// Input Schema
export interface FailoverGroupsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlManagedInstanceName: string;
  failoverGroupName: string;
  properties: {
    provisioningState?: "Succeeded" | "Failed" | "Canceled" | "Accepted";
    partnerManagedInstanceId: string;
    spec: {
      sharedName?: string;
      sourceMI?: string;
      partnerMI?: string;
      partnerMirroringURL?: string;
      partnerMirroringCert?: string;
      partnerSyncMode?: "async" | "sync";
      role:
        | "primary"
        | "secondary"
        | "force-primary-allow-data-loss"
        | "force-secondary";
    };
    status?: unknown;
  };
}
export const FailoverGroupsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlManagedInstanceName: Schema.String.pipe(T.PathParam()),
    failoverGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals(["Succeeded", "Failed", "Canceled", "Accepted"]),
      ),
      partnerManagedInstanceId: Schema.String,
      spec: Schema.Struct({
        sharedName: Schema.optional(Schema.String),
        sourceMI: Schema.optional(Schema.String),
        partnerMI: Schema.optional(Schema.String),
        partnerMirroringURL: Schema.optional(Schema.String),
        partnerMirroringCert: Schema.optional(Schema.String),
        partnerSyncMode: Schema.optional(Schema.Literals(["async", "sync"])),
        role: Schema.Literals([
          "primary",
          "secondary",
          "force-primary-allow-data-loss",
          "force-secondary",
        ]),
      }),
      status: Schema.optional(Schema.Unknown),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlManagedInstances/{sqlManagedInstanceName}/failoverGroups/{failoverGroupName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<FailoverGroupsCreateInput>;

// Output Schema
export interface FailoverGroupsCreateOutput {
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
export const FailoverGroupsCreateOutput =
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
  }) as unknown as Schema.Codec<FailoverGroupsCreateOutput>;

// The operation
/**
 * Creates or replaces a failover group resource.
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlManagedInstanceName - Name of SQL Managed Instance
 * @param failoverGroupName - The name of the Failover Group
 * @param api-version - The API version to use for the request
 * @param properties - null
 */
export const FailoverGroupsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: FailoverGroupsCreateInput,
  outputSchema: FailoverGroupsCreateOutput,
}));
// Input Schema
export interface FailoverGroupsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlManagedInstanceName: string;
  failoverGroupName: string;
}
export const FailoverGroupsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlManagedInstanceName: Schema.String.pipe(T.PathParam()),
    failoverGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlManagedInstances/{sqlManagedInstanceName}/failoverGroups/{failoverGroupName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<FailoverGroupsDeleteInput>;

// Output Schema
export type FailoverGroupsDeleteOutput = void;
export const FailoverGroupsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<FailoverGroupsDeleteOutput>;

// The operation
/**
 * Deletes a failover group resource
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlManagedInstanceName - Name of SQL Managed Instance
 * @param failoverGroupName - The name of the Failover Group
 * @param api-version - The API version to use for the request
 */
export const FailoverGroupsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: FailoverGroupsDeleteInput,
  outputSchema: FailoverGroupsDeleteOutput,
}));
// Input Schema
export interface FailoverGroupsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlManagedInstanceName: string;
  failoverGroupName: string;
}
export const FailoverGroupsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  sqlManagedInstanceName: Schema.String.pipe(T.PathParam()),
  failoverGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlManagedInstances/{sqlManagedInstanceName}/failoverGroups/{failoverGroupName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<FailoverGroupsGetInput>;

// Output Schema
export interface FailoverGroupsGetOutput {
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
export const FailoverGroupsGetOutput =
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
  }) as unknown as Schema.Codec<FailoverGroupsGetOutput>;

// The operation
/**
 * Retrieves a failover group resource
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlManagedInstanceName - Name of SQL Managed Instance
 * @param failoverGroupName - The name of the Failover Group
 * @param api-version - The API version to use for the request
 */
export const FailoverGroupsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: FailoverGroupsGetInput,
  outputSchema: FailoverGroupsGetOutput,
}));
// Input Schema
export interface FailoverGroupsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlManagedInstanceName: string;
}
export const FailoverGroupsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlManagedInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlManagedInstances/{sqlManagedInstanceName}/failoverGroups",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<FailoverGroupsListInput>;

// Output Schema
export interface FailoverGroupsListOutput {
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
  nextLink?: string;
}
export const FailoverGroupsListOutput =
  /*@__PURE__*/ Schema.Struct({
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<FailoverGroupsListOutput>;

// The operation
/**
 * List the failover groups associated with the given sql managed instance.
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlManagedInstanceName - Name of SQL Managed Instance
 * @param api-version - The API version to use for the request
 */
export const FailoverGroupsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: FailoverGroupsListInput,
  outputSchema: FailoverGroupsListOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.AzureArcData/operations",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value?: {
    name: string;
    display: {
      provider: string;
      resource: string;
      operation: string;
      description: string;
    };
    origin?: "user" | "system";
    isDataAction: boolean;
    properties?: Record<string, unknown>;
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.String,
        display: Schema.Struct({
          provider: Schema.String,
          resource: Schema.String,
          operation: Schema.String,
          description: Schema.String,
        }),
        origin: Schema.optional(Schema.Literals(["user", "system"])),
        isDataAction: Schema.Boolean,
        properties: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all of the available Azure Data Services on Azure Arc API operations.
 *
 * @param api-version - The API version to use for the request
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PostgresInstancesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  postgresInstanceName: string;
  extendedLocation?: { name?: string; type?: "CustomLocation" };
  properties: {
    dataControllerId?: string;
    admin?: string;
    basicLoginInformation?: {
      username?: string;
      password?: string | Redacted.Redacted<string>;
    };
    k8sRaw?: unknown;
    lastUploadedDate?: string;
    provisioningState?: string;
  };
  sku?: {
    name: string;
    dev?: boolean;
    size?: string;
    family?: string;
    capacity?: number;
  };
  tags?: Record<string, string>;
  location: string;
}
export const PostgresInstancesCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    postgresInstanceName: Schema.String.pipe(T.PathParam()),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["CustomLocation"])),
      }),
    ),
    properties: Schema.Struct({
      dataControllerId: Schema.optional(Schema.String),
      admin: Schema.optional(Schema.String),
      basicLoginInformation: Schema.optional(
        Schema.Struct({
          username: Schema.optional(Schema.String),
          password: Schema.optional(SensitiveString),
        }),
      ),
      k8sRaw: Schema.optional(Schema.Unknown),
      lastUploadedDate: Schema.optional(Schema.String),
      provisioningState: Schema.optional(Schema.String),
    }),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        dev: Schema.optional(Schema.Boolean),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/postgresInstances/{postgresInstanceName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<PostgresInstancesCreateInput>;

// Output Schema
export interface PostgresInstancesCreateOutput {
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
export const PostgresInstancesCreateOutput =
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
  }) as unknown as Schema.Codec<PostgresInstancesCreateOutput>;

// The operation
/**
 * Creates or replaces a postgres Instance resource
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param postgresInstanceName - Name of Postgres Instance
 * @param api-version - The API version to use for the request
 * @param extendedLocation - The complex type of the extended location.
 * @param properties - null
 * @param sku - Resource sku.
 */
export const PostgresInstancesCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: PostgresInstancesCreateInput,
  outputSchema: PostgresInstancesCreateOutput,
}));
// Input Schema
export interface PostgresInstancesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  postgresInstanceName: string;
}
export const PostgresInstancesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    postgresInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/postgresInstances/{postgresInstanceName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<PostgresInstancesDeleteInput>;

// Output Schema
export type PostgresInstancesDeleteOutput = void;
export const PostgresInstancesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PostgresInstancesDeleteOutput>;

// The operation
/**
 * Deletes a postgres Instance resource
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param postgresInstanceName - Name of Postgres Instance
 * @param api-version - The API version to use for the request
 */
export const PostgresInstancesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: PostgresInstancesDeleteInput,
  outputSchema: PostgresInstancesDeleteOutput,
}));
// Input Schema
export interface PostgresInstancesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  postgresInstanceName: string;
}
export const PostgresInstancesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    postgresInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/postgresInstances/{postgresInstanceName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<PostgresInstancesGetInput>;

// Output Schema
export interface PostgresInstancesGetOutput {
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
export const PostgresInstancesGetOutput =
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
  }) as unknown as Schema.Codec<PostgresInstancesGetOutput>;

// The operation
/**
 * Retrieves a postgres Instance resource
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param postgresInstanceName - Name of Postgres Instance
 * @param api-version - The API version to use for the request
 */
export const PostgresInstancesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PostgresInstancesGetInput,
  outputSchema: PostgresInstancesGetOutput,
}));
// Input Schema
export interface PostgresInstancesListInput {
  subscriptionId: string;
}
export const PostgresInstancesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureArcData/postgresInstances",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<PostgresInstancesListInput>;

// Output Schema
export interface PostgresInstancesListOutput {
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
  nextLink?: string;
}
export const PostgresInstancesListOutput =
  /*@__PURE__*/ Schema.Struct({
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PostgresInstancesListOutput>;

// The operation
/**
 * List postgres Instance resources in the subscription
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param api-version - The API version to use for the request
 */
export const PostgresInstancesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: PostgresInstancesListInput,
  outputSchema: PostgresInstancesListOutput,
}));
// Input Schema
export interface PostgresInstancesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const PostgresInstancesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/postgresInstances",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<PostgresInstancesListByResourceGroupInput>;

// Output Schema
export interface PostgresInstancesListByResourceGroupOutput {
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
  nextLink?: string;
}
export const PostgresInstancesListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PostgresInstancesListByResourceGroupOutput>;

// The operation
/**
 * List postgres Instance resources in the resource group
 *
 * Get a postgres Instances list by Resource group name.
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param api-version - The API version to use for the request
 */
export const PostgresInstancesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PostgresInstancesListByResourceGroupInput,
    outputSchema: PostgresInstancesListByResourceGroupOutput,
  }));
// Input Schema
export interface PostgresInstancesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  postgresInstanceName: string;
  tags?: Record<string, string>;
  properties?: {
    dataControllerId?: string;
    admin?: string;
    basicLoginInformation?: {
      username?: string;
      password?: string | Redacted.Redacted<string>;
    };
    k8sRaw?: unknown;
    lastUploadedDate?: string;
    provisioningState?: string;
  };
}
export const PostgresInstancesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    postgresInstanceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        dataControllerId: Schema.optional(Schema.String),
        admin: Schema.optional(Schema.String),
        basicLoginInformation: Schema.optional(
          Schema.Struct({
            username: Schema.optional(Schema.String),
            password: Schema.optional(SensitiveString),
          }),
        ),
        k8sRaw: Schema.optional(Schema.Unknown),
        lastUploadedDate: Schema.optional(Schema.String),
        provisioningState: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/postgresInstances/{postgresInstanceName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<PostgresInstancesUpdateInput>;

// Output Schema
export interface PostgresInstancesUpdateOutput {
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
export const PostgresInstancesUpdateOutput =
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
  }) as unknown as Schema.Codec<PostgresInstancesUpdateOutput>;

// The operation
/**
 * Updates a postgres Instance resource
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param postgresInstanceName - Name of Postgres Instance
 * @param api-version - The API version to use for the request
 * @param tags - Resource tags.
 */
export const PostgresInstancesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: PostgresInstancesUpdateInput,
  outputSchema: PostgresInstancesUpdateOutput,
}));
// Input Schema
export interface SqlManagedInstancesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlManagedInstanceName: string;
  properties: {
    dataControllerId?: string;
    admin?: string;
    startTime?: string;
    endTime?: string;
    k8sRaw?: {
      spec?: {
        scheduling?: {
          default?: {
            resources?: {
              requests?: Record<string, string>;
              limits?: Record<string, string>;
            };
          };
        };
        replicas?: number;
        security?: {
          adminLoginSecret?: string;
          serviceCertificateSecret?: string;
          activeDirectory?: {
            connector?: { name?: string; namespace?: string };
            accountName?: string;
            keytabSecret?: string;
            encryptionTypes?: string[];
          };
          transparentDataEncryption?: {
            mode?: string;
            protectorSecret?: string;
          };
        };
        settings?: {
          network?: {
            forceencryption?: number;
            tlsciphers?: string;
            tlsprotocols?: string;
          };
        };
      };
    };
    basicLoginInformation?: {
      username?: string;
      password?: string | Redacted.Redacted<string>;
    };
    lastUploadedDate?: string;
    provisioningState?: string;
    activeDirectoryInformation?: { keytabInformation?: { keytab?: string } };
    licenseType?: "BasePrice" | "LicenseIncluded" | "DisasterRecovery";
    clusterId?: string;
    extensionId?: string;
  };
  extendedLocation?: { name?: string; type?: "CustomLocation" };
  sku?: {
    name: "vCore";
    tier?: "GeneralPurpose" | "BusinessCritical";
    dev?: boolean;
    size?: string;
    family?: string;
    capacity?: number;
  };
  tags?: Record<string, string>;
  location: string;
}
export const SqlManagedInstancesCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlManagedInstanceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      dataControllerId: Schema.optional(Schema.String),
      admin: Schema.optional(Schema.String),
      startTime: Schema.optional(Schema.String),
      endTime: Schema.optional(Schema.String),
      k8sRaw: Schema.optional(
        Schema.Struct({
          spec: Schema.optional(
            Schema.Struct({
              scheduling: Schema.optional(
                Schema.Struct({
                  default: Schema.optional(
                    Schema.Struct({
                      resources: Schema.optional(
                        Schema.Struct({
                          requests: Schema.optional(
                            Schema.Record(Schema.String, Schema.String),
                          ),
                          limits: Schema.optional(
                            Schema.Record(Schema.String, Schema.String),
                          ),
                        }),
                      ),
                    }),
                  ),
                }),
              ),
              replicas: Schema.optional(Schema.Number),
              security: Schema.optional(
                Schema.Struct({
                  adminLoginSecret: Schema.optional(Schema.String),
                  serviceCertificateSecret: Schema.optional(Schema.String),
                  activeDirectory: Schema.optional(
                    Schema.Struct({
                      connector: Schema.optional(
                        Schema.Struct({
                          name: Schema.optional(Schema.String),
                          namespace: Schema.optional(Schema.String),
                        }),
                      ),
                      accountName: Schema.optional(Schema.String),
                      keytabSecret: Schema.optional(Schema.String),
                      encryptionTypes: Schema.optional(
                        Schema.Array(Schema.String),
                      ),
                    }),
                  ),
                  transparentDataEncryption: Schema.optional(
                    Schema.Struct({
                      mode: Schema.optional(Schema.String),
                      protectorSecret: Schema.optional(Schema.String),
                    }),
                  ),
                }),
              ),
              settings: Schema.optional(
                Schema.Struct({
                  network: Schema.optional(
                    Schema.Struct({
                      forceencryption: Schema.optional(Schema.Number),
                      tlsciphers: Schema.optional(Schema.String),
                      tlsprotocols: Schema.optional(Schema.String),
                    }),
                  ),
                }),
              ),
            }),
          ),
        }),
      ),
      basicLoginInformation: Schema.optional(
        Schema.Struct({
          username: Schema.optional(Schema.String),
          password: Schema.optional(SensitiveString),
        }),
      ),
      lastUploadedDate: Schema.optional(Schema.String),
      provisioningState: Schema.optional(Schema.String),
      activeDirectoryInformation: Schema.optional(
        Schema.Struct({
          keytabInformation: Schema.optional(
            Schema.Struct({
              keytab: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      licenseType: Schema.optional(
        Schema.Literals(["BasePrice", "LicenseIncluded", "DisasterRecovery"]),
      ),
      clusterId: Schema.optional(Schema.String),
      extensionId: Schema.optional(Schema.String),
    }),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["CustomLocation"])),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.Literals(["vCore"]),
        tier: Schema.optional(
          Schema.Literals(["GeneralPurpose", "BusinessCritical"]),
        ),
        dev: Schema.optional(Schema.Boolean),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlManagedInstances/{sqlManagedInstanceName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlManagedInstancesCreateInput>;

// Output Schema
export interface SqlManagedInstancesCreateOutput {
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
export const SqlManagedInstancesCreateOutput =
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
  }) as unknown as Schema.Codec<SqlManagedInstancesCreateOutput>;

// The operation
/**
 * Creates or replaces a SQL Managed Instance resource
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlManagedInstanceName - Name of SQL Managed Instance
 * @param api-version - The API version to use for the request
 * @param properties - null
 * @param extendedLocation - The complex type of the extended location.
 * @param sku - Resource sku.
 */
export const SqlManagedInstancesCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: SqlManagedInstancesCreateInput,
  outputSchema: SqlManagedInstancesCreateOutput,
}));
// Input Schema
export interface SqlManagedInstancesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlManagedInstanceName: string;
}
export const SqlManagedInstancesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlManagedInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlManagedInstances/{sqlManagedInstanceName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlManagedInstancesDeleteInput>;

// Output Schema
export type SqlManagedInstancesDeleteOutput = void;
export const SqlManagedInstancesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SqlManagedInstancesDeleteOutput>;

// The operation
/**
 * Deletes a SQL Managed Instance resource
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlManagedInstanceName - Name of SQL Managed Instance
 * @param api-version - The API version to use for the request
 */
export const SqlManagedInstancesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: SqlManagedInstancesDeleteInput,
  outputSchema: SqlManagedInstancesDeleteOutput,
}));
// Input Schema
export interface SqlManagedInstancesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlManagedInstanceName: string;
}
export const SqlManagedInstancesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlManagedInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlManagedInstances/{sqlManagedInstanceName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlManagedInstancesGetInput>;

// Output Schema
export interface SqlManagedInstancesGetOutput {
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
export const SqlManagedInstancesGetOutput =
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
  }) as unknown as Schema.Codec<SqlManagedInstancesGetOutput>;

// The operation
/**
 * Retrieves a SQL Managed Instance resource
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlManagedInstanceName - Name of SQL Managed Instance
 * @param api-version - The API version to use for the request
 */
export const SqlManagedInstancesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: SqlManagedInstancesGetInput,
  outputSchema: SqlManagedInstancesGetOutput,
}));
// Input Schema
export interface SqlManagedInstancesListInput {
  subscriptionId: string;
}
export const SqlManagedInstancesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureArcData/sqlManagedInstances",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlManagedInstancesListInput>;

// Output Schema
export interface SqlManagedInstancesListOutput {
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
  nextLink?: string;
}
export const SqlManagedInstancesListOutput =
  /*@__PURE__*/ Schema.Struct({
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlManagedInstancesListOutput>;

// The operation
/**
 * List sqlManagedInstance resources in the subscription
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param api-version - The API version to use for the request
 */
export const SqlManagedInstancesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: SqlManagedInstancesListInput,
  outputSchema: SqlManagedInstancesListOutput,
}));
// Input Schema
export interface SqlManagedInstancesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const SqlManagedInstancesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlManagedInstances",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlManagedInstancesListByResourceGroupInput>;

// Output Schema
export interface SqlManagedInstancesListByResourceGroupOutput {
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
  nextLink?: string;
}
export const SqlManagedInstancesListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlManagedInstancesListByResourceGroupOutput>;

// The operation
/**
 * List sqlManagedInstance resources in the resource group
 *
 * Gets all sqlManagedInstances in a resource group.
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param api-version - The API version to use for the request
 */
export const SqlManagedInstancesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlManagedInstancesListByResourceGroupInput,
    outputSchema: SqlManagedInstancesListByResourceGroupOutput,
  }));
// Input Schema
export interface SqlManagedInstancesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlManagedInstanceName: string;
  tags?: Record<string, string>;
}
export const SqlManagedInstancesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlManagedInstanceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlManagedInstances/{sqlManagedInstanceName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlManagedInstancesUpdateInput>;

// Output Schema
export interface SqlManagedInstancesUpdateOutput {
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
export const SqlManagedInstancesUpdateOutput =
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
  }) as unknown as Schema.Codec<SqlManagedInstancesUpdateOutput>;

// The operation
/**
 * Updates a SQL Managed Instance resource
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlManagedInstanceName - Name of SQL Managed Instance
 * @param api-version - The API version to use for the request
 * @param tags - Resource tags.
 */
export const SqlManagedInstancesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: SqlManagedInstancesUpdateInput,
  outputSchema: SqlManagedInstancesUpdateOutput,
}));
// Input Schema
export interface SqlServerAvailabilityGroupsAddDatabasesInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerInstanceName: string;
  availabilityGroupName: string;
  values?: string[];
}
export const SqlServerAvailabilityGroupsAddDatabasesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerInstanceName: Schema.String.pipe(T.PathParam()),
    availabilityGroupName: Schema.String.pipe(T.PathParam()),
    values: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}/availabilityGroups/{availabilityGroupName}/addDatabases",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerAvailabilityGroupsAddDatabasesInput>;

// Output Schema
export interface SqlServerAvailabilityGroupsAddDatabasesOutput {
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
export const SqlServerAvailabilityGroupsAddDatabasesOutput =
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
  }) as unknown as Schema.Codec<SqlServerAvailabilityGroupsAddDatabasesOutput>;

// The operation
/**
 * Request adding database(s) to an existing availability group.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlServerInstanceName - Name of SQL Server Instance
 * @param availabilityGroupName - Name of SQL Availability Group
 * @param api-version - The API version to use for this operation.
 */
export const SqlServerAvailabilityGroupsAddDatabases =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlServerAvailabilityGroupsAddDatabasesInput,
    outputSchema: SqlServerAvailabilityGroupsAddDatabasesOutput,
  }));
// Input Schema
export interface SqlServerAvailabilityGroupsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerInstanceName: string;
  availabilityGroupName: string;
  properties: {
    availabilityGroupId?: string;
    serverName?: string;
    instanceName?: string;
    vmId?: string;
    collectionTimestamp?: string;
    info?: {
      failureConditionLevel?: number;
      healthCheckTimeout?: number;
      automatedBackupPreferenceDescription?: string;
      version?: number;
      basicFeatures?: boolean;
      dtcSupport?: boolean;
      dbFailover?: boolean;
      isDistributed?: boolean;
      clusterTypeDescription?: string;
      requiredSynchronizedSecondariesToCommit?: number;
      isContained?: boolean;
      primaryReplica?: string;
      primaryRecoveryHealthDescription?: string;
      secondaryRecoveryHealthDescription?: string;
      synchronizationHealthDescription?: string;
      replicationPartnerType?:
        | "SQLServer"
        | "AzureSQLVM"
        | "AzureSQLManagedInstance"
        | "Unknown";
      listener?: {
        dnsName?: string;
        ipV4AddressesAndMasks?: { ipAddress?: string; mask?: string }[];
        ipV6Addresses?: string[];
        port?: number;
      };
    };
    replicas?: {
      value?: {
        replicaId?: string;
        replicaName?: string;
        replicaResourceId?: string;
        configure?: {
          endpointName?: string;
          endpointUrl?: string;
          endpointAuthenticationMode?:
            | "Windows_NTLM"
            | "Windows_Kerberos"
            | "Windows_Negotiate"
            | "Certificate"
            | "Windows_NTLM_Certificate"
            | "Windows_Kerberos_Certificate"
            | "Windows_Negotiate_Certificate"
            | "Certificate_Windows_NTLM"
            | "Certificate_Windows_Kerberos"
            | "Certificate_Windows_Negotiate";
          certificateName?: string;
          endpointConnectLogin?: string;
          availabilityMode?: "SYNCHRONOUS_COMMIT" | "ASYNCHRONOUS_COMMIT";
          availabilityModeDescription?: string;
          failoverMode?: "AUTOMATIC" | "MANUAL" | "EXTERNAL" | "NONE";
          failoverModeDescription?: string;
          sessionTimeout?: number;
          primaryAllowConnections?: "ALL" | "READ_WRITE";
          primaryRoleAllowConnectionsDescription?: string;
          secondaryAllowConnections?: "NO" | "ALL" | "READ_ONLY";
          secondaryRoleAllowConnectionsDescription?: string;
          replicaCreateDate?: string;
          replicaModifyDate?: string;
          backupPriority?: number;
          readOnlyRoutingUrl?: string;
          readWriteRoutingUrl?: string;
          seedingMode?: "AUTOMATIC" | "MANUAL";
          seedingModeDescription?: string;
        };
        state?: {
          availabilityGroupReplicaRole?: string;
          operationalStateDescription?: string;
          recoveryHealthDescription?: string;
          synchronizationHealthDescription?: string;
          connectedStateDescription?: string;
          lastConnectErrorDescription?: string;
          lastConnectErrorTimestamp?: string;
        };
      }[];
      nextLink?: string;
    };
    databases?: {
      value?: {
        databaseName?: string;
        replicaName?: string;
        isLocal?: boolean;
        isPrimaryReplica?: boolean;
        synchronizationStateDescription?: string;
        isCommitParticipant?: boolean;
        synchronizationHealthDescription?: string;
        databaseStateDescription?: string;
        isSuspended?: boolean;
        suspendReasonDescription?: string;
      }[];
      nextLink?: string;
    };
    provisioningState?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const SqlServerAvailabilityGroupsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerInstanceName: Schema.String.pipe(T.PathParam()),
    availabilityGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      availabilityGroupId: Schema.optional(Schema.String),
      serverName: Schema.optional(Schema.String),
      instanceName: Schema.optional(Schema.String),
      vmId: Schema.optional(Schema.String),
      collectionTimestamp: Schema.optional(Schema.String),
      info: Schema.optional(
        Schema.Struct({
          failureConditionLevel: Schema.optional(Schema.Number),
          healthCheckTimeout: Schema.optional(Schema.Number),
          automatedBackupPreferenceDescription: Schema.optional(Schema.String),
          version: Schema.optional(Schema.Number),
          basicFeatures: Schema.optional(Schema.Boolean),
          dtcSupport: Schema.optional(Schema.Boolean),
          dbFailover: Schema.optional(Schema.Boolean),
          isDistributed: Schema.optional(Schema.Boolean),
          clusterTypeDescription: Schema.optional(Schema.String),
          requiredSynchronizedSecondariesToCommit: Schema.optional(
            Schema.Number,
          ),
          isContained: Schema.optional(Schema.Boolean),
          primaryReplica: Schema.optional(Schema.String),
          primaryRecoveryHealthDescription: Schema.optional(Schema.String),
          secondaryRecoveryHealthDescription: Schema.optional(Schema.String),
          synchronizationHealthDescription: Schema.optional(Schema.String),
          replicationPartnerType: Schema.optional(
            Schema.Literals([
              "SQLServer",
              "AzureSQLVM",
              "AzureSQLManagedInstance",
              "Unknown",
            ]),
          ),
          listener: Schema.optional(
            Schema.Struct({
              dnsName: Schema.optional(Schema.String),
              ipV4AddressesAndMasks: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    ipAddress: Schema.optional(Schema.String),
                    mask: Schema.optional(Schema.String),
                  }),
                ),
              ),
              ipV6Addresses: Schema.optional(Schema.Array(Schema.String)),
              port: Schema.optional(Schema.Number),
            }),
          ),
        }),
      ),
      replicas: Schema.optional(
        Schema.Struct({
          value: Schema.optional(
            Schema.Array(
              Schema.Struct({
                replicaId: Schema.optional(Schema.String),
                replicaName: Schema.optional(Schema.String),
                replicaResourceId: Schema.optional(Schema.String),
                configure: Schema.optional(
                  Schema.Struct({
                    endpointName: Schema.optional(Schema.String),
                    endpointUrl: Schema.optional(Schema.String),
                    endpointAuthenticationMode: Schema.optional(
                      Schema.Literals([
                        "Windows_NTLM",
                        "Windows_Kerberos",
                        "Windows_Negotiate",
                        "Certificate",
                        "Windows_NTLM_Certificate",
                        "Windows_Kerberos_Certificate",
                        "Windows_Negotiate_Certificate",
                        "Certificate_Windows_NTLM",
                        "Certificate_Windows_Kerberos",
                        "Certificate_Windows_Negotiate",
                      ]),
                    ),
                    certificateName: Schema.optional(Schema.String),
                    endpointConnectLogin: Schema.optional(Schema.String),
                    availabilityMode: Schema.optional(
                      Schema.Literals([
                        "SYNCHRONOUS_COMMIT",
                        "ASYNCHRONOUS_COMMIT",
                      ]),
                    ),
                    availabilityModeDescription: Schema.optional(Schema.String),
                    failoverMode: Schema.optional(
                      Schema.Literals([
                        "AUTOMATIC",
                        "MANUAL",
                        "EXTERNAL",
                        "NONE",
                      ]),
                    ),
                    failoverModeDescription: Schema.optional(Schema.String),
                    sessionTimeout: Schema.optional(Schema.Number),
                    primaryAllowConnections: Schema.optional(
                      Schema.Literals(["ALL", "READ_WRITE"]),
                    ),
                    primaryRoleAllowConnectionsDescription: Schema.optional(
                      Schema.String,
                    ),
                    secondaryAllowConnections: Schema.optional(
                      Schema.Literals(["NO", "ALL", "READ_ONLY"]),
                    ),
                    secondaryRoleAllowConnectionsDescription: Schema.optional(
                      Schema.String,
                    ),
                    replicaCreateDate: Schema.optional(Schema.String),
                    replicaModifyDate: Schema.optional(Schema.String),
                    backupPriority: Schema.optional(Schema.Number),
                    readOnlyRoutingUrl: Schema.optional(Schema.String),
                    readWriteRoutingUrl: Schema.optional(Schema.String),
                    seedingMode: Schema.optional(
                      Schema.Literals(["AUTOMATIC", "MANUAL"]),
                    ),
                    seedingModeDescription: Schema.optional(Schema.String),
                  }),
                ),
                state: Schema.optional(
                  Schema.Struct({
                    availabilityGroupReplicaRole: Schema.optional(
                      Schema.String,
                    ),
                    operationalStateDescription: Schema.optional(Schema.String),
                    recoveryHealthDescription: Schema.optional(Schema.String),
                    synchronizationHealthDescription: Schema.optional(
                      Schema.String,
                    ),
                    connectedStateDescription: Schema.optional(Schema.String),
                    lastConnectErrorDescription: Schema.optional(Schema.String),
                    lastConnectErrorTimestamp: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
          ),
          nextLink: Schema.optional(Schema.String),
        }),
      ),
      databases: Schema.optional(
        Schema.Struct({
          value: Schema.optional(
            Schema.Array(
              Schema.Struct({
                databaseName: Schema.optional(Schema.String),
                replicaName: Schema.optional(Schema.String),
                isLocal: Schema.optional(Schema.Boolean),
                isPrimaryReplica: Schema.optional(Schema.Boolean),
                synchronizationStateDescription: Schema.optional(Schema.String),
                isCommitParticipant: Schema.optional(Schema.Boolean),
                synchronizationHealthDescription: Schema.optional(
                  Schema.String,
                ),
                databaseStateDescription: Schema.optional(Schema.String),
                isSuspended: Schema.optional(Schema.Boolean),
                suspendReasonDescription: Schema.optional(Schema.String),
              }),
            ),
          ),
          nextLink: Schema.optional(Schema.String),
        }),
      ),
      provisioningState: Schema.optional(Schema.String),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}/availabilityGroups/{availabilityGroupName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerAvailabilityGroupsCreateInput>;

// Output Schema
export interface SqlServerAvailabilityGroupsCreateOutput {
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
export const SqlServerAvailabilityGroupsCreateOutput =
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
  }) as unknown as Schema.Codec<SqlServerAvailabilityGroupsCreateOutput>;

// The operation
/**
 * Creates or replaces an Arc Sql Server Availability Group.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlServerInstanceName - Name of SQL Server Instance
 * @param availabilityGroupName - Name of SQL Availability Group
 * @param api-version - The API version to use for this operation.
 */
export const SqlServerAvailabilityGroupsCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlServerAvailabilityGroupsCreateInput,
    outputSchema: SqlServerAvailabilityGroupsCreateOutput,
  }));
// Input Schema
export interface SqlServerAvailabilityGroupsCreateAvailabilityGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerInstanceName: string;
  availabilityGroupName?: string;
  replicas?: {
    serverInstance?: string;
    endpointName?: string;
    endpointUrl?: string;
    endpointAuthenticationMode?:
      | "Windows_NTLM"
      | "Windows_Kerberos"
      | "Windows_Negotiate"
      | "Certificate"
      | "Windows_NTLM_Certificate"
      | "Windows_Kerberos_Certificate"
      | "Windows_Negotiate_Certificate"
      | "Certificate_Windows_NTLM"
      | "Certificate_Windows_Kerberos"
      | "Certificate_Windows_Negotiate";
    certificateName?: string;
    endpointConnectLogin?: string;
    availabilityMode?: "SYNCHRONOUS_COMMIT" | "ASYNCHRONOUS_COMMIT";
    failoverMode?: "AUTOMATIC" | "MANUAL" | "EXTERNAL" | "NONE";
    seedingMode?: "AUTOMATIC" | "MANUAL";
    backupPriority?: number;
    secondaryRoleAllowConnections?: "NO" | "ALL" | "READ_ONLY";
    secondaryRoleReadOnlyRoutingUrl?: string;
    primaryRoleAllowConnections?: "ALL" | "READ_WRITE";
    primaryRoleReadOnlyRoutingList?: string[];
    sessionTimeout?: number;
  }[];
  databases?: string[];
  automatedBackupPreference?:
    | "PRIMARY"
    | "SECONDARY_ONLY"
    | "SECONDARY"
    | "NONE";
  failureConditionLevel?: 1 | 2 | 3 | 4 | 5;
  healthCheckTimeout?: number;
  dbFailover?: "ON" | "OFF";
  dtcSupport?: "PER_DB" | "NONE";
  requiredSynchronizedSecondariesToCommit?: number;
  clusterType?: "WSFC" | "NONE";
  listener?: {
    dnsName?: string;
    ipV4AddressesAndMasks?: { ipAddress?: string; mask?: string }[];
    ipV6Addresses?: string[];
    port?: number;
  };
}
export const SqlServerAvailabilityGroupsCreateAvailabilityGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerInstanceName: Schema.String.pipe(T.PathParam()),
    availabilityGroupName: Schema.optional(Schema.String),
    replicas: Schema.optional(
      Schema.Array(
        Schema.Struct({
          serverInstance: Schema.optional(Schema.String),
          endpointName: Schema.optional(Schema.String),
          endpointUrl: Schema.optional(Schema.String),
          endpointAuthenticationMode: Schema.optional(
            Schema.Literals([
              "Windows_NTLM",
              "Windows_Kerberos",
              "Windows_Negotiate",
              "Certificate",
              "Windows_NTLM_Certificate",
              "Windows_Kerberos_Certificate",
              "Windows_Negotiate_Certificate",
              "Certificate_Windows_NTLM",
              "Certificate_Windows_Kerberos",
              "Certificate_Windows_Negotiate",
            ]),
          ),
          certificateName: Schema.optional(Schema.String),
          endpointConnectLogin: Schema.optional(Schema.String),
          availabilityMode: Schema.optional(
            Schema.Literals(["SYNCHRONOUS_COMMIT", "ASYNCHRONOUS_COMMIT"]),
          ),
          failoverMode: Schema.optional(
            Schema.Literals(["AUTOMATIC", "MANUAL", "EXTERNAL", "NONE"]),
          ),
          seedingMode: Schema.optional(
            Schema.Literals(["AUTOMATIC", "MANUAL"]),
          ),
          backupPriority: Schema.optional(Schema.Number),
          secondaryRoleAllowConnections: Schema.optional(
            Schema.Literals(["NO", "ALL", "READ_ONLY"]),
          ),
          secondaryRoleReadOnlyRoutingUrl: Schema.optional(Schema.String),
          primaryRoleAllowConnections: Schema.optional(
            Schema.Literals(["ALL", "READ_WRITE"]),
          ),
          primaryRoleReadOnlyRoutingList: Schema.optional(
            Schema.Array(Schema.String),
          ),
          sessionTimeout: Schema.optional(Schema.Number),
        }),
      ),
    ),
    databases: Schema.optional(Schema.Array(Schema.String)),
    automatedBackupPreference: Schema.optional(
      Schema.Literals(["PRIMARY", "SECONDARY_ONLY", "SECONDARY", "NONE"]),
    ),
    failureConditionLevel: Schema.optional(Schema.Literals([1, 2, 3, 4, 5])),
    healthCheckTimeout: Schema.optional(Schema.Number),
    dbFailover: Schema.optional(Schema.Literals(["ON", "OFF"])),
    dtcSupport: Schema.optional(Schema.Literals(["PER_DB", "NONE"])),
    requiredSynchronizedSecondariesToCommit: Schema.optional(Schema.Number),
    clusterType: Schema.optional(Schema.Literals(["WSFC", "NONE"])),
    listener: Schema.optional(
      Schema.Struct({
        dnsName: Schema.optional(Schema.String),
        ipV4AddressesAndMasks: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ipAddress: Schema.optional(Schema.String),
              mask: Schema.optional(Schema.String),
            }),
          ),
        ),
        ipV6Addresses: Schema.optional(Schema.Array(Schema.String)),
        port: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}/createAvailabilityGroup",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerAvailabilityGroupsCreateAvailabilityGroupInput>;

// Output Schema
export interface SqlServerAvailabilityGroupsCreateAvailabilityGroupOutput {
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
export const SqlServerAvailabilityGroupsCreateAvailabilityGroupOutput =
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
  }) as unknown as Schema.Codec<SqlServerAvailabilityGroupsCreateAvailabilityGroupOutput>;

// The operation
/**
 * Create a SQL Server availability group
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlServerInstanceName - Name of SQL Server Instance
 * @param api-version - The API version to use for this operation.
 */
export const SqlServerAvailabilityGroupsCreateAvailabilityGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlServerAvailabilityGroupsCreateAvailabilityGroupInput,
    outputSchema: SqlServerAvailabilityGroupsCreateAvailabilityGroupOutput,
  }));
// Input Schema
export interface SqlServerAvailabilityGroupsCreateDistributedAvailabilityGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerInstanceName: string;
  availabilityGroupName?: string;
  primaryAvailabilityGroup?: {
    availabilityGroup?: string;
    listenerUrl?: string;
    availabilityMode?: "SYNCHRONOUS_COMMIT" | "ASYNCHRONOUS_COMMIT";
    failoverMode?: "AUTOMATIC" | "MANUAL" | "EXTERNAL" | "NONE";
    seedingMode?: "AUTOMATIC" | "MANUAL";
    certificateConfiguration?: { certificateName?: string };
  };
  secondaryAvailabilityGroup?: {
    availabilityGroup?: string;
    listenerUrl?: string;
    availabilityMode?: "SYNCHRONOUS_COMMIT" | "ASYNCHRONOUS_COMMIT";
    failoverMode?: "AUTOMATIC" | "MANUAL" | "EXTERNAL" | "NONE";
    seedingMode?: "AUTOMATIC" | "MANUAL";
    certificateConfiguration?: { certificateName?: string };
  };
}
export const SqlServerAvailabilityGroupsCreateDistributedAvailabilityGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerInstanceName: Schema.String.pipe(T.PathParam()),
    availabilityGroupName: Schema.optional(Schema.String),
    primaryAvailabilityGroup: Schema.optional(
      Schema.Struct({
        availabilityGroup: Schema.optional(Schema.String),
        listenerUrl: Schema.optional(Schema.String),
        availabilityMode: Schema.optional(
          Schema.Literals(["SYNCHRONOUS_COMMIT", "ASYNCHRONOUS_COMMIT"]),
        ),
        failoverMode: Schema.optional(
          Schema.Literals(["AUTOMATIC", "MANUAL", "EXTERNAL", "NONE"]),
        ),
        seedingMode: Schema.optional(Schema.Literals(["AUTOMATIC", "MANUAL"])),
        certificateConfiguration: Schema.optional(
          Schema.Struct({
            certificateName: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    secondaryAvailabilityGroup: Schema.optional(
      Schema.Struct({
        availabilityGroup: Schema.optional(Schema.String),
        listenerUrl: Schema.optional(Schema.String),
        availabilityMode: Schema.optional(
          Schema.Literals(["SYNCHRONOUS_COMMIT", "ASYNCHRONOUS_COMMIT"]),
        ),
        failoverMode: Schema.optional(
          Schema.Literals(["AUTOMATIC", "MANUAL", "EXTERNAL", "NONE"]),
        ),
        seedingMode: Schema.optional(Schema.Literals(["AUTOMATIC", "MANUAL"])),
        certificateConfiguration: Schema.optional(
          Schema.Struct({
            certificateName: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}/createDistributedAvailabilityGroup",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerAvailabilityGroupsCreateDistributedAvailabilityGroupInput>;

// Output Schema
export interface SqlServerAvailabilityGroupsCreateDistributedAvailabilityGroupOutput {
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
export const SqlServerAvailabilityGroupsCreateDistributedAvailabilityGroupOutput =
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
  }) as unknown as Schema.Codec<SqlServerAvailabilityGroupsCreateDistributedAvailabilityGroupOutput>;

// The operation
/**
 * Create a SQL Server distributed availability group
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlServerInstanceName - Name of SQL Server Instance
 * @param api-version - The API version to use for this operation.
 */
export const SqlServerAvailabilityGroupsCreateDistributedAvailabilityGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema:
      SqlServerAvailabilityGroupsCreateDistributedAvailabilityGroupInput,
    outputSchema:
      SqlServerAvailabilityGroupsCreateDistributedAvailabilityGroupOutput,
  }));
// Input Schema
export interface SqlServerAvailabilityGroupsCreateManagedInstanceLinkInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerInstanceName: string;
  availabilityGroup?: {
    availabilityGroupName?: string;
    replicas?: {
      serverInstance?: string;
      endpointName?: string;
      endpointUrl?: string;
      endpointAuthenticationMode?:
        | "Windows_NTLM"
        | "Windows_Kerberos"
        | "Windows_Negotiate"
        | "Certificate"
        | "Windows_NTLM_Certificate"
        | "Windows_Kerberos_Certificate"
        | "Windows_Negotiate_Certificate"
        | "Certificate_Windows_NTLM"
        | "Certificate_Windows_Kerberos"
        | "Certificate_Windows_Negotiate";
      certificateName?: string;
      endpointConnectLogin?: string;
      availabilityMode?: "SYNCHRONOUS_COMMIT" | "ASYNCHRONOUS_COMMIT";
      failoverMode?: "AUTOMATIC" | "MANUAL" | "EXTERNAL" | "NONE";
      seedingMode?: "AUTOMATIC" | "MANUAL";
      backupPriority?: number;
      secondaryRoleAllowConnections?: "NO" | "ALL" | "READ_ONLY";
      secondaryRoleReadOnlyRoutingUrl?: string;
      primaryRoleAllowConnections?: "ALL" | "READ_WRITE";
      primaryRoleReadOnlyRoutingList?: string[];
      sessionTimeout?: number;
    }[];
    databases?: string[];
    automatedBackupPreference?:
      | "PRIMARY"
      | "SECONDARY_ONLY"
      | "SECONDARY"
      | "NONE";
    failureConditionLevel?: 1 | 2 | 3 | 4 | 5;
    healthCheckTimeout?: number;
    dbFailover?: "ON" | "OFF";
    dtcSupport?: "PER_DB" | "NONE";
    requiredSynchronizedSecondariesToCommit?: number;
    clusterType?: "WSFC" | "NONE";
    listener?: {
      dnsName?: string;
      ipV4AddressesAndMasks?: { ipAddress?: string; mask?: string }[];
      ipV6Addresses?: string[];
      port?: number;
    };
  };
  distributedAvailabilityGroup?: {
    availabilityGroupName?: string;
    primaryAvailabilityGroup?: {
      availabilityGroup?: string;
      listenerUrl?: string;
      availabilityMode?: "SYNCHRONOUS_COMMIT" | "ASYNCHRONOUS_COMMIT";
      failoverMode?: "AUTOMATIC" | "MANUAL" | "EXTERNAL" | "NONE";
      seedingMode?: "AUTOMATIC" | "MANUAL";
      certificateConfiguration?: { certificateName?: string };
    };
    secondaryAvailabilityGroup?: {
      availabilityGroup?: string;
      listenerUrl?: string;
      availabilityMode?: "SYNCHRONOUS_COMMIT" | "ASYNCHRONOUS_COMMIT";
      failoverMode?: "AUTOMATIC" | "MANUAL" | "EXTERNAL" | "NONE";
      seedingMode?: "AUTOMATIC" | "MANUAL";
      certificateConfiguration?: { certificateName?: string };
    };
  };
  miLinkConfiguration?: { instanceAvailabilityGroupName?: string };
}
export const SqlServerAvailabilityGroupsCreateManagedInstanceLinkInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerInstanceName: Schema.String.pipe(T.PathParam()),
    availabilityGroup: Schema.optional(
      Schema.Struct({
        availabilityGroupName: Schema.optional(Schema.String),
        replicas: Schema.optional(
          Schema.Array(
            Schema.Struct({
              serverInstance: Schema.optional(Schema.String),
              endpointName: Schema.optional(Schema.String),
              endpointUrl: Schema.optional(Schema.String),
              endpointAuthenticationMode: Schema.optional(
                Schema.Literals([
                  "Windows_NTLM",
                  "Windows_Kerberos",
                  "Windows_Negotiate",
                  "Certificate",
                  "Windows_NTLM_Certificate",
                  "Windows_Kerberos_Certificate",
                  "Windows_Negotiate_Certificate",
                  "Certificate_Windows_NTLM",
                  "Certificate_Windows_Kerberos",
                  "Certificate_Windows_Negotiate",
                ]),
              ),
              certificateName: Schema.optional(Schema.String),
              endpointConnectLogin: Schema.optional(Schema.String),
              availabilityMode: Schema.optional(
                Schema.Literals(["SYNCHRONOUS_COMMIT", "ASYNCHRONOUS_COMMIT"]),
              ),
              failoverMode: Schema.optional(
                Schema.Literals(["AUTOMATIC", "MANUAL", "EXTERNAL", "NONE"]),
              ),
              seedingMode: Schema.optional(
                Schema.Literals(["AUTOMATIC", "MANUAL"]),
              ),
              backupPriority: Schema.optional(Schema.Number),
              secondaryRoleAllowConnections: Schema.optional(
                Schema.Literals(["NO", "ALL", "READ_ONLY"]),
              ),
              secondaryRoleReadOnlyRoutingUrl: Schema.optional(Schema.String),
              primaryRoleAllowConnections: Schema.optional(
                Schema.Literals(["ALL", "READ_WRITE"]),
              ),
              primaryRoleReadOnlyRoutingList: Schema.optional(
                Schema.Array(Schema.String),
              ),
              sessionTimeout: Schema.optional(Schema.Number),
            }),
          ),
        ),
        databases: Schema.optional(Schema.Array(Schema.String)),
        automatedBackupPreference: Schema.optional(
          Schema.Literals(["PRIMARY", "SECONDARY_ONLY", "SECONDARY", "NONE"]),
        ),
        failureConditionLevel: Schema.optional(
          Schema.Literals([1, 2, 3, 4, 5]),
        ),
        healthCheckTimeout: Schema.optional(Schema.Number),
        dbFailover: Schema.optional(Schema.Literals(["ON", "OFF"])),
        dtcSupport: Schema.optional(Schema.Literals(["PER_DB", "NONE"])),
        requiredSynchronizedSecondariesToCommit: Schema.optional(Schema.Number),
        clusterType: Schema.optional(Schema.Literals(["WSFC", "NONE"])),
        listener: Schema.optional(
          Schema.Struct({
            dnsName: Schema.optional(Schema.String),
            ipV4AddressesAndMasks: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  ipAddress: Schema.optional(Schema.String),
                  mask: Schema.optional(Schema.String),
                }),
              ),
            ),
            ipV6Addresses: Schema.optional(Schema.Array(Schema.String)),
            port: Schema.optional(Schema.Number),
          }),
        ),
      }),
    ),
    distributedAvailabilityGroup: Schema.optional(
      Schema.Struct({
        availabilityGroupName: Schema.optional(Schema.String),
        primaryAvailabilityGroup: Schema.optional(
          Schema.Struct({
            availabilityGroup: Schema.optional(Schema.String),
            listenerUrl: Schema.optional(Schema.String),
            availabilityMode: Schema.optional(
              Schema.Literals(["SYNCHRONOUS_COMMIT", "ASYNCHRONOUS_COMMIT"]),
            ),
            failoverMode: Schema.optional(
              Schema.Literals(["AUTOMATIC", "MANUAL", "EXTERNAL", "NONE"]),
            ),
            seedingMode: Schema.optional(
              Schema.Literals(["AUTOMATIC", "MANUAL"]),
            ),
            certificateConfiguration: Schema.optional(
              Schema.Struct({
                certificateName: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        secondaryAvailabilityGroup: Schema.optional(
          Schema.Struct({
            availabilityGroup: Schema.optional(Schema.String),
            listenerUrl: Schema.optional(Schema.String),
            availabilityMode: Schema.optional(
              Schema.Literals(["SYNCHRONOUS_COMMIT", "ASYNCHRONOUS_COMMIT"]),
            ),
            failoverMode: Schema.optional(
              Schema.Literals(["AUTOMATIC", "MANUAL", "EXTERNAL", "NONE"]),
            ),
            seedingMode: Schema.optional(
              Schema.Literals(["AUTOMATIC", "MANUAL"]),
            ),
            certificateConfiguration: Schema.optional(
              Schema.Struct({
                certificateName: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      }),
    ),
    miLinkConfiguration: Schema.optional(
      Schema.Struct({
        instanceAvailabilityGroupName: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}/createManagedInstanceLink",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerAvailabilityGroupsCreateManagedInstanceLinkInput>;

// Output Schema
export interface SqlServerAvailabilityGroupsCreateManagedInstanceLinkOutput {
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
export const SqlServerAvailabilityGroupsCreateManagedInstanceLinkOutput =
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
  }) as unknown as Schema.Codec<SqlServerAvailabilityGroupsCreateManagedInstanceLinkOutput>;

// The operation
/**
 * Create an Managed Instance Link
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlServerInstanceName - Name of SQL Server Instance
 * @param api-version - The API version to use for this operation.
 */
export const SqlServerAvailabilityGroupsCreateManagedInstanceLink =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlServerAvailabilityGroupsCreateManagedInstanceLinkInput,
    outputSchema: SqlServerAvailabilityGroupsCreateManagedInstanceLinkOutput,
  }));
// Input Schema
export interface SqlServerAvailabilityGroupsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerInstanceName: string;
  availabilityGroupName: string;
}
export const SqlServerAvailabilityGroupsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerInstanceName: Schema.String.pipe(T.PathParam()),
    availabilityGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}/availabilityGroups/{availabilityGroupName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerAvailabilityGroupsDeleteInput>;

// Output Schema
export type SqlServerAvailabilityGroupsDeleteOutput = void;
export const SqlServerAvailabilityGroupsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SqlServerAvailabilityGroupsDeleteOutput>;

// The operation
/**
 * Deletes an Arc Sql Server availability group resource.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlServerInstanceName - Name of SQL Server Instance
 * @param availabilityGroupName - Name of SQL Availability Group
 * @param api-version - The API version to use for this operation.
 */
export const SqlServerAvailabilityGroupsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlServerAvailabilityGroupsDeleteInput,
    outputSchema: SqlServerAvailabilityGroupsDeleteOutput,
  }));
// Input Schema
export interface SqlServerAvailabilityGroupsDeleteMiLinkInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerInstanceName: string;
  availabilityGroupName: string;
}
export const SqlServerAvailabilityGroupsDeleteMiLinkInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerInstanceName: Schema.String.pipe(T.PathParam()),
    availabilityGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}/availabilityGroups/{availabilityGroupName}/deleteMiLink",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerAvailabilityGroupsDeleteMiLinkInput>;

// Output Schema
export type SqlServerAvailabilityGroupsDeleteMiLinkOutput = void;
export const SqlServerAvailabilityGroupsDeleteMiLinkOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SqlServerAvailabilityGroupsDeleteMiLinkOutput>;

// The operation
/**
 * Deletes the MI Link between an Azure Arc-enabled SQL Server and an Azure SQL Managed Instance.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlServerInstanceName - Name of SQL Server Instance
 * @param availabilityGroupName - Name of SQL Availability Group
 * @param api-version - The API version to use for this operation.
 */
export const SqlServerAvailabilityGroupsDeleteMiLink =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlServerAvailabilityGroupsDeleteMiLinkInput,
    outputSchema: SqlServerAvailabilityGroupsDeleteMiLinkOutput,
  }));
// Input Schema
export interface SqlServerAvailabilityGroupsDetailViewInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerInstanceName: string;
  availabilityGroupName: string;
}
export const SqlServerAvailabilityGroupsDetailViewInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerInstanceName: Schema.String.pipe(T.PathParam()),
    availabilityGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}/availabilityGroups/{availabilityGroupName}/getDetailView",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerAvailabilityGroupsDetailViewInput>;

// Output Schema
export interface SqlServerAvailabilityGroupsDetailViewOutput {
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
export const SqlServerAvailabilityGroupsDetailViewOutput =
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
  }) as unknown as Schema.Codec<SqlServerAvailabilityGroupsDetailViewOutput>;

// The operation
/**
 * Retrieves detailed properties of the Availability Group.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlServerInstanceName - Name of SQL Server Instance
 * @param availabilityGroupName - Name of SQL Availability Group
 * @param api-version - The API version to use for this operation.
 */
export const SqlServerAvailabilityGroupsDetailView =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlServerAvailabilityGroupsDetailViewInput,
    outputSchema: SqlServerAvailabilityGroupsDetailViewOutput,
  }));
// Input Schema
export interface SqlServerAvailabilityGroupsFailoverInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerInstanceName: string;
  availabilityGroupName: string;
}
export const SqlServerAvailabilityGroupsFailoverInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerInstanceName: Schema.String.pipe(T.PathParam()),
    availabilityGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}/availabilityGroups/{availabilityGroupName}/failover",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerAvailabilityGroupsFailoverInput>;

// Output Schema
export interface SqlServerAvailabilityGroupsFailoverOutput {
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
export const SqlServerAvailabilityGroupsFailoverOutput =
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
  }) as unknown as Schema.Codec<SqlServerAvailabilityGroupsFailoverOutput>;

// The operation
/**
 * Request manual failover of the availability group to this server.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlServerInstanceName - Name of SQL Server Instance
 * @param availabilityGroupName - Name of SQL Availability Group
 * @param api-version - The API version to use for this operation.
 */
export const SqlServerAvailabilityGroupsFailover =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlServerAvailabilityGroupsFailoverInput,
    outputSchema: SqlServerAvailabilityGroupsFailoverOutput,
  }));
// Input Schema
export interface SqlServerAvailabilityGroupsFailoverMiLinkInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerInstanceName: string;
  availabilityGroupName: string;
  managedInstanceId?: string;
  force?: boolean;
}
export const SqlServerAvailabilityGroupsFailoverMiLinkInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerInstanceName: Schema.String.pipe(T.PathParam()),
    availabilityGroupName: Schema.String.pipe(T.PathParam()),
    managedInstanceId: Schema.optional(Schema.String),
    force: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}/availabilityGroups/{availabilityGroupName}/failoverMiLink",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerAvailabilityGroupsFailoverMiLinkInput>;

// Output Schema
export interface SqlServerAvailabilityGroupsFailoverMiLinkOutput {
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
export const SqlServerAvailabilityGroupsFailoverMiLinkOutput =
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
  }) as unknown as Schema.Codec<SqlServerAvailabilityGroupsFailoverMiLinkOutput>;

// The operation
/**
 * Request failover of Arc Sql Server to Azure Managed Instance.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlServerInstanceName - Name of SQL Server Instance
 * @param availabilityGroupName - Name of SQL Availability Group
 * @param api-version - The API version to use for this operation.
 */
export const SqlServerAvailabilityGroupsFailoverMiLink =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlServerAvailabilityGroupsFailoverMiLinkInput,
    outputSchema: SqlServerAvailabilityGroupsFailoverMiLinkOutput,
  }));
// Input Schema
export interface SqlServerAvailabilityGroupsForceFailoverAllowDataLossInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerInstanceName: string;
  availabilityGroupName: string;
}
export const SqlServerAvailabilityGroupsForceFailoverAllowDataLossInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerInstanceName: Schema.String.pipe(T.PathParam()),
    availabilityGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}/availabilityGroups/{availabilityGroupName}/forceFailoverAllowDataLoss",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerAvailabilityGroupsForceFailoverAllowDataLossInput>;

// Output Schema
export interface SqlServerAvailabilityGroupsForceFailoverAllowDataLossOutput {
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
export const SqlServerAvailabilityGroupsForceFailoverAllowDataLossOutput =
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
  }) as unknown as Schema.Codec<SqlServerAvailabilityGroupsForceFailoverAllowDataLossOutput>;

// The operation
/**
 * Request forced failover of the availability group to this server.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlServerInstanceName - Name of SQL Server Instance
 * @param availabilityGroupName - Name of SQL Availability Group
 * @param api-version - The API version to use for this operation.
 */
export const SqlServerAvailabilityGroupsForceFailoverAllowDataLoss =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlServerAvailabilityGroupsForceFailoverAllowDataLossInput,
    outputSchema: SqlServerAvailabilityGroupsForceFailoverAllowDataLossOutput,
  }));
// Input Schema
export interface SqlServerAvailabilityGroupsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerInstanceName: string;
  availabilityGroupName: string;
}
export const SqlServerAvailabilityGroupsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerInstanceName: Schema.String.pipe(T.PathParam()),
    availabilityGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}/availabilityGroups/{availabilityGroupName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerAvailabilityGroupsGetInput>;

// Output Schema
export interface SqlServerAvailabilityGroupsGetOutput {
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
export const SqlServerAvailabilityGroupsGetOutput =
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
  }) as unknown as Schema.Codec<SqlServerAvailabilityGroupsGetOutput>;

// The operation
/**
 * Retrieves an Arc Sql Server availability group.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlServerInstanceName - Name of SQL Server Instance
 * @param availabilityGroupName - Name of SQL Availability Group
 * @param api-version - The API version to use for this operation.
 */
export const SqlServerAvailabilityGroupsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlServerAvailabilityGroupsGetInput,
    outputSchema: SqlServerAvailabilityGroupsGetOutput,
  }));
// Input Schema
export interface SqlServerAvailabilityGroupsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerInstanceName: string;
}
export const SqlServerAvailabilityGroupsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}/availabilityGroups",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerAvailabilityGroupsListInput>;

// Output Schema
export interface SqlServerAvailabilityGroupsListOutput {
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
  nextLink?: string;
}
export const SqlServerAvailabilityGroupsListOutput =
  /*@__PURE__*/ Schema.Struct({
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlServerAvailabilityGroupsListOutput>;

// The operation
/**
 * List the availability group associated with the given Arc Sql Server.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlServerInstanceName - Name of SQL Server Instance
 * @param api-version - The API version to use for this operation.
 */
export const SqlServerAvailabilityGroupsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlServerAvailabilityGroupsListInput,
    outputSchema: SqlServerAvailabilityGroupsListOutput,
  }));
// Input Schema
export interface SqlServerAvailabilityGroupsRemoveDatabasesInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerInstanceName: string;
  availabilityGroupName: string;
  values?: string[];
}
export const SqlServerAvailabilityGroupsRemoveDatabasesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerInstanceName: Schema.String.pipe(T.PathParam()),
    availabilityGroupName: Schema.String.pipe(T.PathParam()),
    values: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}/availabilityGroups/{availabilityGroupName}/removeDatabases",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerAvailabilityGroupsRemoveDatabasesInput>;

// Output Schema
export interface SqlServerAvailabilityGroupsRemoveDatabasesOutput {
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
export const SqlServerAvailabilityGroupsRemoveDatabasesOutput =
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
  }) as unknown as Schema.Codec<SqlServerAvailabilityGroupsRemoveDatabasesOutput>;

// The operation
/**
 * Request removing database(s) from an existing availability group.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlServerInstanceName - Name of SQL Server Instance
 * @param availabilityGroupName - Name of SQL Availability Group
 * @param api-version - The API version to use for this operation.
 */
export const SqlServerAvailabilityGroupsRemoveDatabases =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlServerAvailabilityGroupsRemoveDatabasesInput,
    outputSchema: SqlServerAvailabilityGroupsRemoveDatabasesOutput,
  }));
// Input Schema
export interface SqlServerAvailabilityGroupsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerInstanceName: string;
  availabilityGroupName: string;
  tags?: Record<string, string>;
  properties?: {
    availabilityGroupId?: string;
    serverName?: string;
    instanceName?: string;
    vmId?: string;
    collectionTimestamp?: string;
    info?: {
      failureConditionLevel?: number;
      healthCheckTimeout?: number;
      automatedBackupPreferenceDescription?: string;
      version?: number;
      basicFeatures?: boolean;
      dtcSupport?: boolean;
      dbFailover?: boolean;
      isDistributed?: boolean;
      clusterTypeDescription?: string;
      requiredSynchronizedSecondariesToCommit?: number;
      isContained?: boolean;
      primaryReplica?: string;
      primaryRecoveryHealthDescription?: string;
      secondaryRecoveryHealthDescription?: string;
      synchronizationHealthDescription?: string;
      replicationPartnerType?:
        | "SQLServer"
        | "AzureSQLVM"
        | "AzureSQLManagedInstance"
        | "Unknown";
      listener?: {
        dnsName?: string;
        ipV4AddressesAndMasks?: { ipAddress?: string; mask?: string }[];
        ipV6Addresses?: string[];
        port?: number;
      };
    };
    replicas?: {
      value?: {
        replicaId?: string;
        replicaName?: string;
        replicaResourceId?: string;
        configure?: {
          endpointName?: string;
          endpointUrl?: string;
          endpointAuthenticationMode?:
            | "Windows_NTLM"
            | "Windows_Kerberos"
            | "Windows_Negotiate"
            | "Certificate"
            | "Windows_NTLM_Certificate"
            | "Windows_Kerberos_Certificate"
            | "Windows_Negotiate_Certificate"
            | "Certificate_Windows_NTLM"
            | "Certificate_Windows_Kerberos"
            | "Certificate_Windows_Negotiate";
          certificateName?: string;
          endpointConnectLogin?: string;
          availabilityMode?: "SYNCHRONOUS_COMMIT" | "ASYNCHRONOUS_COMMIT";
          availabilityModeDescription?: string;
          failoverMode?: "AUTOMATIC" | "MANUAL" | "EXTERNAL" | "NONE";
          failoverModeDescription?: string;
          sessionTimeout?: number;
          primaryAllowConnections?: "ALL" | "READ_WRITE";
          primaryRoleAllowConnectionsDescription?: string;
          secondaryAllowConnections?: "NO" | "ALL" | "READ_ONLY";
          secondaryRoleAllowConnectionsDescription?: string;
          replicaCreateDate?: string;
          replicaModifyDate?: string;
          backupPriority?: number;
          readOnlyRoutingUrl?: string;
          readWriteRoutingUrl?: string;
          seedingMode?: "AUTOMATIC" | "MANUAL";
          seedingModeDescription?: string;
        };
        state?: {
          availabilityGroupReplicaRole?: string;
          operationalStateDescription?: string;
          recoveryHealthDescription?: string;
          synchronizationHealthDescription?: string;
          connectedStateDescription?: string;
          lastConnectErrorDescription?: string;
          lastConnectErrorTimestamp?: string;
        };
      }[];
      nextLink?: string;
    };
    databases?: {
      value?: {
        databaseName?: string;
        replicaName?: string;
        isLocal?: boolean;
        isPrimaryReplica?: boolean;
        synchronizationStateDescription?: string;
        isCommitParticipant?: boolean;
        synchronizationHealthDescription?: string;
        databaseStateDescription?: string;
        isSuspended?: boolean;
        suspendReasonDescription?: string;
      }[];
      nextLink?: string;
    };
    provisioningState?: string;
  };
}
export const SqlServerAvailabilityGroupsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerInstanceName: Schema.String.pipe(T.PathParam()),
    availabilityGroupName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        availabilityGroupId: Schema.optional(Schema.String),
        serverName: Schema.optional(Schema.String),
        instanceName: Schema.optional(Schema.String),
        vmId: Schema.optional(Schema.String),
        collectionTimestamp: Schema.optional(Schema.String),
        info: Schema.optional(
          Schema.Struct({
            failureConditionLevel: Schema.optional(Schema.Number),
            healthCheckTimeout: Schema.optional(Schema.Number),
            automatedBackupPreferenceDescription: Schema.optional(
              Schema.String,
            ),
            version: Schema.optional(Schema.Number),
            basicFeatures: Schema.optional(Schema.Boolean),
            dtcSupport: Schema.optional(Schema.Boolean),
            dbFailover: Schema.optional(Schema.Boolean),
            isDistributed: Schema.optional(Schema.Boolean),
            clusterTypeDescription: Schema.optional(Schema.String),
            requiredSynchronizedSecondariesToCommit: Schema.optional(
              Schema.Number,
            ),
            isContained: Schema.optional(Schema.Boolean),
            primaryReplica: Schema.optional(Schema.String),
            primaryRecoveryHealthDescription: Schema.optional(Schema.String),
            secondaryRecoveryHealthDescription: Schema.optional(Schema.String),
            synchronizationHealthDescription: Schema.optional(Schema.String),
            replicationPartnerType: Schema.optional(
              Schema.Literals([
                "SQLServer",
                "AzureSQLVM",
                "AzureSQLManagedInstance",
                "Unknown",
              ]),
            ),
            listener: Schema.optional(
              Schema.Struct({
                dnsName: Schema.optional(Schema.String),
                ipV4AddressesAndMasks: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      ipAddress: Schema.optional(Schema.String),
                      mask: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                ipV6Addresses: Schema.optional(Schema.Array(Schema.String)),
                port: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
        replicas: Schema.optional(
          Schema.Struct({
            value: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  replicaId: Schema.optional(Schema.String),
                  replicaName: Schema.optional(Schema.String),
                  replicaResourceId: Schema.optional(Schema.String),
                  configure: Schema.optional(
                    Schema.Struct({
                      endpointName: Schema.optional(Schema.String),
                      endpointUrl: Schema.optional(Schema.String),
                      endpointAuthenticationMode: Schema.optional(
                        Schema.Literals([
                          "Windows_NTLM",
                          "Windows_Kerberos",
                          "Windows_Negotiate",
                          "Certificate",
                          "Windows_NTLM_Certificate",
                          "Windows_Kerberos_Certificate",
                          "Windows_Negotiate_Certificate",
                          "Certificate_Windows_NTLM",
                          "Certificate_Windows_Kerberos",
                          "Certificate_Windows_Negotiate",
                        ]),
                      ),
                      certificateName: Schema.optional(Schema.String),
                      endpointConnectLogin: Schema.optional(Schema.String),
                      availabilityMode: Schema.optional(
                        Schema.Literals([
                          "SYNCHRONOUS_COMMIT",
                          "ASYNCHRONOUS_COMMIT",
                        ]),
                      ),
                      availabilityModeDescription: Schema.optional(
                        Schema.String,
                      ),
                      failoverMode: Schema.optional(
                        Schema.Literals([
                          "AUTOMATIC",
                          "MANUAL",
                          "EXTERNAL",
                          "NONE",
                        ]),
                      ),
                      failoverModeDescription: Schema.optional(Schema.String),
                      sessionTimeout: Schema.optional(Schema.Number),
                      primaryAllowConnections: Schema.optional(
                        Schema.Literals(["ALL", "READ_WRITE"]),
                      ),
                      primaryRoleAllowConnectionsDescription: Schema.optional(
                        Schema.String,
                      ),
                      secondaryAllowConnections: Schema.optional(
                        Schema.Literals(["NO", "ALL", "READ_ONLY"]),
                      ),
                      secondaryRoleAllowConnectionsDescription: Schema.optional(
                        Schema.String,
                      ),
                      replicaCreateDate: Schema.optional(Schema.String),
                      replicaModifyDate: Schema.optional(Schema.String),
                      backupPriority: Schema.optional(Schema.Number),
                      readOnlyRoutingUrl: Schema.optional(Schema.String),
                      readWriteRoutingUrl: Schema.optional(Schema.String),
                      seedingMode: Schema.optional(
                        Schema.Literals(["AUTOMATIC", "MANUAL"]),
                      ),
                      seedingModeDescription: Schema.optional(Schema.String),
                    }),
                  ),
                  state: Schema.optional(
                    Schema.Struct({
                      availabilityGroupReplicaRole: Schema.optional(
                        Schema.String,
                      ),
                      operationalStateDescription: Schema.optional(
                        Schema.String,
                      ),
                      recoveryHealthDescription: Schema.optional(Schema.String),
                      synchronizationHealthDescription: Schema.optional(
                        Schema.String,
                      ),
                      connectedStateDescription: Schema.optional(Schema.String),
                      lastConnectErrorDescription: Schema.optional(
                        Schema.String,
                      ),
                      lastConnectErrorTimestamp: Schema.optional(Schema.String),
                    }),
                  ),
                }),
              ),
            ),
            nextLink: Schema.optional(Schema.String),
          }),
        ),
        databases: Schema.optional(
          Schema.Struct({
            value: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  databaseName: Schema.optional(Schema.String),
                  replicaName: Schema.optional(Schema.String),
                  isLocal: Schema.optional(Schema.Boolean),
                  isPrimaryReplica: Schema.optional(Schema.Boolean),
                  synchronizationStateDescription: Schema.optional(
                    Schema.String,
                  ),
                  isCommitParticipant: Schema.optional(Schema.Boolean),
                  synchronizationHealthDescription: Schema.optional(
                    Schema.String,
                  ),
                  databaseStateDescription: Schema.optional(Schema.String),
                  isSuspended: Schema.optional(Schema.Boolean),
                  suspendReasonDescription: Schema.optional(Schema.String),
                }),
              ),
            ),
            nextLink: Schema.optional(Schema.String),
          }),
        ),
        provisioningState: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}/availabilityGroups/{availabilityGroupName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerAvailabilityGroupsUpdateInput>;

// Output Schema
export interface SqlServerAvailabilityGroupsUpdateOutput {
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
export const SqlServerAvailabilityGroupsUpdateOutput =
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
  }) as unknown as Schema.Codec<SqlServerAvailabilityGroupsUpdateOutput>;

// The operation
/**
 * Updates an existing Availability Group.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlServerInstanceName - Name of SQL Server Instance
 * @param availabilityGroupName - Name of SQL Availability Group
 * @param api-version - The API version to use for this operation.
 */
export const SqlServerAvailabilityGroupsUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlServerAvailabilityGroupsUpdateInput,
    outputSchema: SqlServerAvailabilityGroupsUpdateOutput,
  }));
// Input Schema
export interface SqlServerDatabasesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerInstanceName: string;
  databaseName: string;
  properties: {
    collationName?: string;
    databaseCreationDate?: string;
    compatibilityLevel?: number;
    sizeMB?: number;
    logFileSizeMB?: number;
    dataFileSizeMB?: number;
    spaceAvailableMB?: number;
    state?:
      | "Online"
      | "Restoring"
      | "Recovering"
      | "RecoveryPending"
      | "Suspect"
      | "Emergency"
      | "Offline"
      | "Copying"
      | "OfflineSecondary";
    isReadOnly?: boolean;
    recoveryMode?: "Full" | "Bulk-logged" | "Simple";
    databaseOptions?: {
      isAutoCloseOn?: boolean;
      isAutoShrinkOn?: boolean;
      isAutoCreateStatsOn?: boolean;
      isAutoUpdateStatsOn?: boolean;
      isRemoteDataArchiveEnabled?: boolean;
      isMemoryOptimizationEnabled?: boolean;
      isEncrypted?: boolean;
      isTrustworthyOn?: boolean;
      isHekatonFilesOn?: boolean;
      numberOfHekatonFiles?: number;
    };
    backupInformation?: { lastFullBackup?: string; lastLogBackup?: string };
    backupPolicy?: {
      retentionPeriodDays?: number;
      fullBackupDays?: number;
      differentialBackupHours?: 12 | 24;
      transactionLogBackupMinutes?: number;
    };
    earliestRestoreDate?: string;
    createMode?: "Default" | "PointInTimeRestore";
    sourceDatabaseId?: string;
    vmId?: string;
    restorePointInTime?: string;
    provisioningState?: string;
    lastDatabaseUploadTime?: string;
    migration?: {
      assessment?: {
        assessmentUploadTime?: string;
        databaseAssessments?: {
          appliesToMigrationTargetPlatform?: string;
          featureId?: string;
          issueCategory?: string;
          moreInformation?: string;
        }[];
        targetReadiness?: {
          azureSqlDatabase?: {
            numOfBlockerIssues?: number;
            recommendationStatus?:
              | "NotReady"
              | "Ready"
              | "ReadyWithConditions"
              | "Unknown";
            impactedObjectsSummary?: {
              featureId?: string;
              numberImpacted?: number;
              issueCategory?: string;
            }[];
            monthlyCost?: {
              computeCost?: number;
              storageCost?: number;
              iopsCost?: number;
              sqlLicenseCost?: number;
              windowsLicenseCost?: number;
              totalCost?: number;
            };
            monthlyCostOptions?: {
              keyName?: string;
              keyValue?: {
                computeCost?: number;
                storageCost?: number;
                iopsCost?: number;
              };
            }[];
            targetSku?: {
              category?: {
                computeTier?: string;
                hardwareType?: string;
                sqlPurchasingModel?: string;
                sqlServiceTier?: string;
                zoneRedundancyAvailable?: boolean;
              };
              computeSize?: number;
              storageMaxSizeInMb?: number;
              predictedDataSizeInMb?: number;
              predictedLogSizeInMb?: number;
              maxStorageIops?: number;
              maxThroughputMBps?: number;
            };
          };
          azureSqlManagedInstance?: {
            numOfBlockerIssues?: number;
            recommendationStatus?:
              | "NotReady"
              | "Ready"
              | "ReadyWithConditions"
              | "Unknown";
            impactedObjectsSummary?: {
              featureId?: string;
              numberImpacted?: number;
              issueCategory?: string;
            }[];
            monthlyCost?: {
              computeCost?: number;
              storageCost?: number;
              iopsCost?: number;
              sqlLicenseCost?: number;
              windowsLicenseCost?: number;
              totalCost?: number;
            };
            monthlyCostOptions?: {
              keyName?: string;
              keyValue?: {
                computeCost?: number;
                storageCost?: number;
                iopsCost?: number;
              };
            }[];
            targetSku?: {
              category?: {
                computeTier?: string;
                hardwareType?: string;
                sqlPurchasingModel?: string;
                sqlServiceTier?: string;
                zoneRedundancyAvailable?: boolean;
              };
              computeSize?: number;
              storageMaxSizeInMb?: number;
              predictedDataSizeInMb?: number;
              predictedLogSizeInMb?: number;
              maxStorageIops?: number;
              maxThroughputMBps?: number;
            };
          };
          azureSqlVirtualMachine?: {
            numOfBlockerIssues?: number;
            recommendationStatus?:
              | "NotReady"
              | "Ready"
              | "ReadyWithConditions"
              | "Unknown";
            impactedObjectsSummary?: {
              featureId?: string;
              numberImpacted?: number;
              issueCategory?: string;
            }[];
            monthlyCost?: {
              computeCost?: number;
              storageCost?: number;
              iopsCost?: number;
              sqlLicenseCost?: number;
              windowsLicenseCost?: number;
              totalCost?: number;
            };
            monthlyCostOptions?: {
              keyName?: string;
              keyValue?: {
                computeCost?: number;
                storageCost?: number;
                iopsCost?: number;
              };
            }[];
            targetSku?: {
              category?: {
                computeTier?: string;
                hardwareType?: string;
                sqlPurchasingModel?: string;
                sqlServiceTier?: string;
                zoneRedundancyAvailable?: boolean;
              };
              computeSize?: number;
              storageMaxSizeInMb?: number;
              predictedDataSizeInMb?: number;
              predictedLogSizeInMb?: number;
              maxStorageIops?: number;
              maxThroughputMBps?: number;
            };
          };
        };
      };
    };
  };
  tags?: Record<string, string>;
  location: string;
}
export const SqlServerDatabasesCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerInstanceName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      collationName: Schema.optional(Schema.String),
      databaseCreationDate: Schema.optional(Schema.String),
      compatibilityLevel: Schema.optional(Schema.Number),
      sizeMB: Schema.optional(Schema.Number),
      logFileSizeMB: Schema.optional(Schema.Number),
      dataFileSizeMB: Schema.optional(Schema.Number),
      spaceAvailableMB: Schema.optional(Schema.Number),
      state: Schema.optional(
        Schema.Literals([
          "Online",
          "Restoring",
          "Recovering",
          "RecoveryPending",
          "Suspect",
          "Emergency",
          "Offline",
          "Copying",
          "OfflineSecondary",
        ]),
      ),
      isReadOnly: Schema.optional(Schema.Boolean),
      recoveryMode: Schema.optional(
        Schema.Literals(["Full", "Bulk-logged", "Simple"]),
      ),
      databaseOptions: Schema.optional(
        Schema.Struct({
          isAutoCloseOn: Schema.optional(Schema.Boolean),
          isAutoShrinkOn: Schema.optional(Schema.Boolean),
          isAutoCreateStatsOn: Schema.optional(Schema.Boolean),
          isAutoUpdateStatsOn: Schema.optional(Schema.Boolean),
          isRemoteDataArchiveEnabled: Schema.optional(Schema.Boolean),
          isMemoryOptimizationEnabled: Schema.optional(Schema.Boolean),
          isEncrypted: Schema.optional(Schema.Boolean),
          isTrustworthyOn: Schema.optional(Schema.Boolean),
          isHekatonFilesOn: Schema.optional(Schema.Boolean),
          numberOfHekatonFiles: Schema.optional(Schema.Number),
        }),
      ),
      backupInformation: Schema.optional(
        Schema.Struct({
          lastFullBackup: Schema.optional(Schema.String),
          lastLogBackup: Schema.optional(Schema.String),
        }),
      ),
      backupPolicy: Schema.optional(
        Schema.Struct({
          retentionPeriodDays: Schema.optional(Schema.Number),
          fullBackupDays: Schema.optional(Schema.Number),
          differentialBackupHours: Schema.optional(Schema.Literals([12, 24])),
          transactionLogBackupMinutes: Schema.optional(Schema.Number),
        }),
      ),
      earliestRestoreDate: Schema.optional(Schema.String),
      createMode: Schema.optional(
        Schema.Literals(["Default", "PointInTimeRestore"]),
      ),
      sourceDatabaseId: Schema.optional(Schema.String),
      vmId: Schema.optional(Schema.String),
      restorePointInTime: Schema.optional(Schema.String),
      provisioningState: Schema.optional(Schema.String),
      lastDatabaseUploadTime: Schema.optional(Schema.String),
      migration: Schema.optional(
        Schema.Struct({
          assessment: Schema.optional(
            Schema.Struct({
              assessmentUploadTime: Schema.optional(Schema.String),
              databaseAssessments: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    appliesToMigrationTargetPlatform: Schema.optional(
                      Schema.String,
                    ),
                    featureId: Schema.optional(Schema.String),
                    issueCategory: Schema.optional(Schema.String),
                    moreInformation: Schema.optional(Schema.String),
                  }),
                ),
              ),
              targetReadiness: Schema.optional(
                Schema.Struct({
                  azureSqlDatabase: Schema.optional(
                    Schema.Struct({
                      numOfBlockerIssues: Schema.optional(Schema.Number),
                      recommendationStatus: Schema.optional(
                        Schema.Literals([
                          "NotReady",
                          "Ready",
                          "ReadyWithConditions",
                          "Unknown",
                        ]),
                      ),
                      impactedObjectsSummary: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            featureId: Schema.optional(Schema.String),
                            numberImpacted: Schema.optional(Schema.Number),
                            issueCategory: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                      monthlyCost: Schema.optional(
                        Schema.Struct({
                          computeCost: Schema.optional(Schema.Number),
                          storageCost: Schema.optional(Schema.Number),
                          iopsCost: Schema.optional(Schema.Number),
                          sqlLicenseCost: Schema.optional(Schema.Number),
                          windowsLicenseCost: Schema.optional(Schema.Number),
                          totalCost: Schema.optional(Schema.Number),
                        }),
                      ),
                      monthlyCostOptions: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            keyName: Schema.optional(Schema.String),
                            keyValue: Schema.optional(
                              Schema.Struct({
                                computeCost: Schema.optional(Schema.Number),
                                storageCost: Schema.optional(Schema.Number),
                                iopsCost: Schema.optional(Schema.Number),
                              }),
                            ),
                          }),
                        ),
                      ),
                      targetSku: Schema.optional(
                        Schema.Struct({
                          category: Schema.optional(
                            Schema.Struct({
                              computeTier: Schema.optional(Schema.String),
                              hardwareType: Schema.optional(Schema.String),
                              sqlPurchasingModel: Schema.optional(
                                Schema.String,
                              ),
                              sqlServiceTier: Schema.optional(Schema.String),
                              zoneRedundancyAvailable: Schema.optional(
                                Schema.Boolean,
                              ),
                            }),
                          ),
                          computeSize: Schema.optional(Schema.Number),
                          storageMaxSizeInMb: Schema.optional(Schema.Number),
                          predictedDataSizeInMb: Schema.optional(Schema.Number),
                          predictedLogSizeInMb: Schema.optional(Schema.Number),
                          maxStorageIops: Schema.optional(Schema.Number),
                          maxThroughputMBps: Schema.optional(Schema.Number),
                        }),
                      ),
                    }),
                  ),
                  azureSqlManagedInstance: Schema.optional(
                    Schema.Struct({
                      numOfBlockerIssues: Schema.optional(Schema.Number),
                      recommendationStatus: Schema.optional(
                        Schema.Literals([
                          "NotReady",
                          "Ready",
                          "ReadyWithConditions",
                          "Unknown",
                        ]),
                      ),
                      impactedObjectsSummary: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            featureId: Schema.optional(Schema.String),
                            numberImpacted: Schema.optional(Schema.Number),
                            issueCategory: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                      monthlyCost: Schema.optional(
                        Schema.Struct({
                          computeCost: Schema.optional(Schema.Number),
                          storageCost: Schema.optional(Schema.Number),
                          iopsCost: Schema.optional(Schema.Number),
                          sqlLicenseCost: Schema.optional(Schema.Number),
                          windowsLicenseCost: Schema.optional(Schema.Number),
                          totalCost: Schema.optional(Schema.Number),
                        }),
                      ),
                      monthlyCostOptions: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            keyName: Schema.optional(Schema.String),
                            keyValue: Schema.optional(
                              Schema.Struct({
                                computeCost: Schema.optional(Schema.Number),
                                storageCost: Schema.optional(Schema.Number),
                                iopsCost: Schema.optional(Schema.Number),
                              }),
                            ),
                          }),
                        ),
                      ),
                      targetSku: Schema.optional(
                        Schema.Struct({
                          category: Schema.optional(
                            Schema.Struct({
                              computeTier: Schema.optional(Schema.String),
                              hardwareType: Schema.optional(Schema.String),
                              sqlPurchasingModel: Schema.optional(
                                Schema.String,
                              ),
                              sqlServiceTier: Schema.optional(Schema.String),
                              zoneRedundancyAvailable: Schema.optional(
                                Schema.Boolean,
                              ),
                            }),
                          ),
                          computeSize: Schema.optional(Schema.Number),
                          storageMaxSizeInMb: Schema.optional(Schema.Number),
                          predictedDataSizeInMb: Schema.optional(Schema.Number),
                          predictedLogSizeInMb: Schema.optional(Schema.Number),
                          maxStorageIops: Schema.optional(Schema.Number),
                          maxThroughputMBps: Schema.optional(Schema.Number),
                        }),
                      ),
                    }),
                  ),
                  azureSqlVirtualMachine: Schema.optional(
                    Schema.Struct({
                      numOfBlockerIssues: Schema.optional(Schema.Number),
                      recommendationStatus: Schema.optional(
                        Schema.Literals([
                          "NotReady",
                          "Ready",
                          "ReadyWithConditions",
                          "Unknown",
                        ]),
                      ),
                      impactedObjectsSummary: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            featureId: Schema.optional(Schema.String),
                            numberImpacted: Schema.optional(Schema.Number),
                            issueCategory: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                      monthlyCost: Schema.optional(
                        Schema.Struct({
                          computeCost: Schema.optional(Schema.Number),
                          storageCost: Schema.optional(Schema.Number),
                          iopsCost: Schema.optional(Schema.Number),
                          sqlLicenseCost: Schema.optional(Schema.Number),
                          windowsLicenseCost: Schema.optional(Schema.Number),
                          totalCost: Schema.optional(Schema.Number),
                        }),
                      ),
                      monthlyCostOptions: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            keyName: Schema.optional(Schema.String),
                            keyValue: Schema.optional(
                              Schema.Struct({
                                computeCost: Schema.optional(Schema.Number),
                                storageCost: Schema.optional(Schema.Number),
                                iopsCost: Schema.optional(Schema.Number),
                              }),
                            ),
                          }),
                        ),
                      ),
                      targetSku: Schema.optional(
                        Schema.Struct({
                          category: Schema.optional(
                            Schema.Struct({
                              computeTier: Schema.optional(Schema.String),
                              hardwareType: Schema.optional(Schema.String),
                              sqlPurchasingModel: Schema.optional(
                                Schema.String,
                              ),
                              sqlServiceTier: Schema.optional(Schema.String),
                              zoneRedundancyAvailable: Schema.optional(
                                Schema.Boolean,
                              ),
                            }),
                          ),
                          computeSize: Schema.optional(Schema.Number),
                          storageMaxSizeInMb: Schema.optional(Schema.Number),
                          predictedDataSizeInMb: Schema.optional(Schema.Number),
                          predictedLogSizeInMb: Schema.optional(Schema.Number),
                          maxStorageIops: Schema.optional(Schema.Number),
                          maxThroughputMBps: Schema.optional(Schema.Number),
                        }),
                      ),
                    }),
                  ),
                }),
              ),
            }),
          ),
        }),
      ),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}/databases/{databaseName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerDatabasesCreateInput>;

// Output Schema
export interface SqlServerDatabasesCreateOutput {
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
export const SqlServerDatabasesCreateOutput =
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
  }) as unknown as Schema.Codec<SqlServerDatabasesCreateOutput>;

// The operation
/**
 * Creates or replaces an Arc Sql Server Database.
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlServerInstanceName - Name of SQL Server Instance
 * @param databaseName - Name of the database
 * @param api-version - The API version to use for the request
 */
export const SqlServerDatabasesCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: SqlServerDatabasesCreateInput,
  outputSchema: SqlServerDatabasesCreateOutput,
}));
// Input Schema
export interface SqlServerDatabasesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerInstanceName: string;
  databaseName: string;
}
export const SqlServerDatabasesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerInstanceName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}/databases/{databaseName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerDatabasesDeleteInput>;

// Output Schema
export type SqlServerDatabasesDeleteOutput = void;
export const SqlServerDatabasesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SqlServerDatabasesDeleteOutput>;

// The operation
/**
 * Deletes an Arc Sql Server database resource.
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlServerInstanceName - Name of SQL Server Instance
 * @param databaseName - Name of the database
 * @param api-version - The API version to use for the request
 */
export const SqlServerDatabasesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: SqlServerDatabasesDeleteInput,
  outputSchema: SqlServerDatabasesDeleteOutput,
}));
// Input Schema
export interface SqlServerDatabasesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerInstanceName: string;
  databaseName: string;
}
export const SqlServerDatabasesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerInstanceName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}/databases/{databaseName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerDatabasesGetInput>;

// Output Schema
export interface SqlServerDatabasesGetOutput {
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
export const SqlServerDatabasesGetOutput =
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
  }) as unknown as Schema.Codec<SqlServerDatabasesGetOutput>;

// The operation
/**
 * Retrieves an Arc Sql Server database.
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlServerInstanceName - Name of SQL Server Instance
 * @param databaseName - Name of the database
 * @param api-version - The API version to use for the request
 */
export const SqlServerDatabasesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: SqlServerDatabasesGetInput,
  outputSchema: SqlServerDatabasesGetOutput,
}));
// Input Schema
export interface SqlServerDatabasesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerInstanceName: string;
}
export const SqlServerDatabasesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}/databases",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerDatabasesListInput>;

// Output Schema
export interface SqlServerDatabasesListOutput {
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
  nextLink?: string;
}
export const SqlServerDatabasesListOutput =
  /*@__PURE__*/ Schema.Struct({
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlServerDatabasesListOutput>;

// The operation
/**
 * List the databases associated with the given Arc Sql Server.
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlServerInstanceName - Name of SQL Server Instance
 * @param api-version - The API version to use for the request
 */
export const SqlServerDatabasesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: SqlServerDatabasesListInput,
  outputSchema: SqlServerDatabasesListOutput,
}));
// Input Schema
export interface SqlServerDatabasesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerInstanceName: string;
  databaseName: string;
  tags?: Record<string, string>;
  properties?: {
    collationName?: string;
    databaseCreationDate?: string;
    compatibilityLevel?: number;
    sizeMB?: number;
    logFileSizeMB?: number;
    dataFileSizeMB?: number;
    spaceAvailableMB?: number;
    state?:
      | "Online"
      | "Restoring"
      | "Recovering"
      | "RecoveryPending"
      | "Suspect"
      | "Emergency"
      | "Offline"
      | "Copying"
      | "OfflineSecondary";
    isReadOnly?: boolean;
    recoveryMode?: "Full" | "Bulk-logged" | "Simple";
    databaseOptions?: {
      isAutoCloseOn?: boolean;
      isAutoShrinkOn?: boolean;
      isAutoCreateStatsOn?: boolean;
      isAutoUpdateStatsOn?: boolean;
      isRemoteDataArchiveEnabled?: boolean;
      isMemoryOptimizationEnabled?: boolean;
      isEncrypted?: boolean;
      isTrustworthyOn?: boolean;
      isHekatonFilesOn?: boolean;
      numberOfHekatonFiles?: number;
    };
    backupInformation?: { lastFullBackup?: string; lastLogBackup?: string };
    backupPolicy?: {
      retentionPeriodDays?: number;
      fullBackupDays?: number;
      differentialBackupHours?: 12 | 24;
      transactionLogBackupMinutes?: number;
    };
    earliestRestoreDate?: string;
    createMode?: "Default" | "PointInTimeRestore";
    sourceDatabaseId?: string;
    vmId?: string;
    restorePointInTime?: string;
    provisioningState?: string;
    lastDatabaseUploadTime?: string;
    migration?: {
      assessment?: {
        assessmentUploadTime?: string;
        databaseAssessments?: {
          appliesToMigrationTargetPlatform?: string;
          featureId?: string;
          issueCategory?: string;
          moreInformation?: string;
        }[];
        targetReadiness?: {
          azureSqlDatabase?: {
            numOfBlockerIssues?: number;
            recommendationStatus?:
              | "NotReady"
              | "Ready"
              | "ReadyWithConditions"
              | "Unknown";
            impactedObjectsSummary?: {
              featureId?: string;
              numberImpacted?: number;
              issueCategory?: string;
            }[];
            monthlyCost?: {
              computeCost?: number;
              storageCost?: number;
              iopsCost?: number;
              sqlLicenseCost?: number;
              windowsLicenseCost?: number;
              totalCost?: number;
            };
            monthlyCostOptions?: {
              keyName?: string;
              keyValue?: {
                computeCost?: number;
                storageCost?: number;
                iopsCost?: number;
              };
            }[];
            targetSku?: {
              category?: {
                computeTier?: string;
                hardwareType?: string;
                sqlPurchasingModel?: string;
                sqlServiceTier?: string;
                zoneRedundancyAvailable?: boolean;
              };
              computeSize?: number;
              storageMaxSizeInMb?: number;
              predictedDataSizeInMb?: number;
              predictedLogSizeInMb?: number;
              maxStorageIops?: number;
              maxThroughputMBps?: number;
            };
          };
          azureSqlManagedInstance?: {
            numOfBlockerIssues?: number;
            recommendationStatus?:
              | "NotReady"
              | "Ready"
              | "ReadyWithConditions"
              | "Unknown";
            impactedObjectsSummary?: {
              featureId?: string;
              numberImpacted?: number;
              issueCategory?: string;
            }[];
            monthlyCost?: {
              computeCost?: number;
              storageCost?: number;
              iopsCost?: number;
              sqlLicenseCost?: number;
              windowsLicenseCost?: number;
              totalCost?: number;
            };
            monthlyCostOptions?: {
              keyName?: string;
              keyValue?: {
                computeCost?: number;
                storageCost?: number;
                iopsCost?: number;
              };
            }[];
            targetSku?: {
              category?: {
                computeTier?: string;
                hardwareType?: string;
                sqlPurchasingModel?: string;
                sqlServiceTier?: string;
                zoneRedundancyAvailable?: boolean;
              };
              computeSize?: number;
              storageMaxSizeInMb?: number;
              predictedDataSizeInMb?: number;
              predictedLogSizeInMb?: number;
              maxStorageIops?: number;
              maxThroughputMBps?: number;
            };
          };
          azureSqlVirtualMachine?: {
            numOfBlockerIssues?: number;
            recommendationStatus?:
              | "NotReady"
              | "Ready"
              | "ReadyWithConditions"
              | "Unknown";
            impactedObjectsSummary?: {
              featureId?: string;
              numberImpacted?: number;
              issueCategory?: string;
            }[];
            monthlyCost?: {
              computeCost?: number;
              storageCost?: number;
              iopsCost?: number;
              sqlLicenseCost?: number;
              windowsLicenseCost?: number;
              totalCost?: number;
            };
            monthlyCostOptions?: {
              keyName?: string;
              keyValue?: {
                computeCost?: number;
                storageCost?: number;
                iopsCost?: number;
              };
            }[];
            targetSku?: {
              category?: {
                computeTier?: string;
                hardwareType?: string;
                sqlPurchasingModel?: string;
                sqlServiceTier?: string;
                zoneRedundancyAvailable?: boolean;
              };
              computeSize?: number;
              storageMaxSizeInMb?: number;
              predictedDataSizeInMb?: number;
              predictedLogSizeInMb?: number;
              maxStorageIops?: number;
              maxThroughputMBps?: number;
            };
          };
        };
      };
    };
  };
}
export const SqlServerDatabasesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerInstanceName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        collationName: Schema.optional(Schema.String),
        databaseCreationDate: Schema.optional(Schema.String),
        compatibilityLevel: Schema.optional(Schema.Number),
        sizeMB: Schema.optional(Schema.Number),
        logFileSizeMB: Schema.optional(Schema.Number),
        dataFileSizeMB: Schema.optional(Schema.Number),
        spaceAvailableMB: Schema.optional(Schema.Number),
        state: Schema.optional(
          Schema.Literals([
            "Online",
            "Restoring",
            "Recovering",
            "RecoveryPending",
            "Suspect",
            "Emergency",
            "Offline",
            "Copying",
            "OfflineSecondary",
          ]),
        ),
        isReadOnly: Schema.optional(Schema.Boolean),
        recoveryMode: Schema.optional(
          Schema.Literals(["Full", "Bulk-logged", "Simple"]),
        ),
        databaseOptions: Schema.optional(
          Schema.Struct({
            isAutoCloseOn: Schema.optional(Schema.Boolean),
            isAutoShrinkOn: Schema.optional(Schema.Boolean),
            isAutoCreateStatsOn: Schema.optional(Schema.Boolean),
            isAutoUpdateStatsOn: Schema.optional(Schema.Boolean),
            isRemoteDataArchiveEnabled: Schema.optional(Schema.Boolean),
            isMemoryOptimizationEnabled: Schema.optional(Schema.Boolean),
            isEncrypted: Schema.optional(Schema.Boolean),
            isTrustworthyOn: Schema.optional(Schema.Boolean),
            isHekatonFilesOn: Schema.optional(Schema.Boolean),
            numberOfHekatonFiles: Schema.optional(Schema.Number),
          }),
        ),
        backupInformation: Schema.optional(
          Schema.Struct({
            lastFullBackup: Schema.optional(Schema.String),
            lastLogBackup: Schema.optional(Schema.String),
          }),
        ),
        backupPolicy: Schema.optional(
          Schema.Struct({
            retentionPeriodDays: Schema.optional(Schema.Number),
            fullBackupDays: Schema.optional(Schema.Number),
            differentialBackupHours: Schema.optional(Schema.Literals([12, 24])),
            transactionLogBackupMinutes: Schema.optional(Schema.Number),
          }),
        ),
        earliestRestoreDate: Schema.optional(Schema.String),
        createMode: Schema.optional(
          Schema.Literals(["Default", "PointInTimeRestore"]),
        ),
        sourceDatabaseId: Schema.optional(Schema.String),
        vmId: Schema.optional(Schema.String),
        restorePointInTime: Schema.optional(Schema.String),
        provisioningState: Schema.optional(Schema.String),
        lastDatabaseUploadTime: Schema.optional(Schema.String),
        migration: Schema.optional(
          Schema.Struct({
            assessment: Schema.optional(
              Schema.Struct({
                assessmentUploadTime: Schema.optional(Schema.String),
                databaseAssessments: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      appliesToMigrationTargetPlatform: Schema.optional(
                        Schema.String,
                      ),
                      featureId: Schema.optional(Schema.String),
                      issueCategory: Schema.optional(Schema.String),
                      moreInformation: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                targetReadiness: Schema.optional(
                  Schema.Struct({
                    azureSqlDatabase: Schema.optional(
                      Schema.Struct({
                        numOfBlockerIssues: Schema.optional(Schema.Number),
                        recommendationStatus: Schema.optional(
                          Schema.Literals([
                            "NotReady",
                            "Ready",
                            "ReadyWithConditions",
                            "Unknown",
                          ]),
                        ),
                        impactedObjectsSummary: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              featureId: Schema.optional(Schema.String),
                              numberImpacted: Schema.optional(Schema.Number),
                              issueCategory: Schema.optional(Schema.String),
                            }),
                          ),
                        ),
                        monthlyCost: Schema.optional(
                          Schema.Struct({
                            computeCost: Schema.optional(Schema.Number),
                            storageCost: Schema.optional(Schema.Number),
                            iopsCost: Schema.optional(Schema.Number),
                            sqlLicenseCost: Schema.optional(Schema.Number),
                            windowsLicenseCost: Schema.optional(Schema.Number),
                            totalCost: Schema.optional(Schema.Number),
                          }),
                        ),
                        monthlyCostOptions: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              keyName: Schema.optional(Schema.String),
                              keyValue: Schema.optional(
                                Schema.Struct({
                                  computeCost: Schema.optional(Schema.Number),
                                  storageCost: Schema.optional(Schema.Number),
                                  iopsCost: Schema.optional(Schema.Number),
                                }),
                              ),
                            }),
                          ),
                        ),
                        targetSku: Schema.optional(
                          Schema.Struct({
                            category: Schema.optional(
                              Schema.Struct({
                                computeTier: Schema.optional(Schema.String),
                                hardwareType: Schema.optional(Schema.String),
                                sqlPurchasingModel: Schema.optional(
                                  Schema.String,
                                ),
                                sqlServiceTier: Schema.optional(Schema.String),
                                zoneRedundancyAvailable: Schema.optional(
                                  Schema.Boolean,
                                ),
                              }),
                            ),
                            computeSize: Schema.optional(Schema.Number),
                            storageMaxSizeInMb: Schema.optional(Schema.Number),
                            predictedDataSizeInMb: Schema.optional(
                              Schema.Number,
                            ),
                            predictedLogSizeInMb: Schema.optional(
                              Schema.Number,
                            ),
                            maxStorageIops: Schema.optional(Schema.Number),
                            maxThroughputMBps: Schema.optional(Schema.Number),
                          }),
                        ),
                      }),
                    ),
                    azureSqlManagedInstance: Schema.optional(
                      Schema.Struct({
                        numOfBlockerIssues: Schema.optional(Schema.Number),
                        recommendationStatus: Schema.optional(
                          Schema.Literals([
                            "NotReady",
                            "Ready",
                            "ReadyWithConditions",
                            "Unknown",
                          ]),
                        ),
                        impactedObjectsSummary: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              featureId: Schema.optional(Schema.String),
                              numberImpacted: Schema.optional(Schema.Number),
                              issueCategory: Schema.optional(Schema.String),
                            }),
                          ),
                        ),
                        monthlyCost: Schema.optional(
                          Schema.Struct({
                            computeCost: Schema.optional(Schema.Number),
                            storageCost: Schema.optional(Schema.Number),
                            iopsCost: Schema.optional(Schema.Number),
                            sqlLicenseCost: Schema.optional(Schema.Number),
                            windowsLicenseCost: Schema.optional(Schema.Number),
                            totalCost: Schema.optional(Schema.Number),
                          }),
                        ),
                        monthlyCostOptions: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              keyName: Schema.optional(Schema.String),
                              keyValue: Schema.optional(
                                Schema.Struct({
                                  computeCost: Schema.optional(Schema.Number),
                                  storageCost: Schema.optional(Schema.Number),
                                  iopsCost: Schema.optional(Schema.Number),
                                }),
                              ),
                            }),
                          ),
                        ),
                        targetSku: Schema.optional(
                          Schema.Struct({
                            category: Schema.optional(
                              Schema.Struct({
                                computeTier: Schema.optional(Schema.String),
                                hardwareType: Schema.optional(Schema.String),
                                sqlPurchasingModel: Schema.optional(
                                  Schema.String,
                                ),
                                sqlServiceTier: Schema.optional(Schema.String),
                                zoneRedundancyAvailable: Schema.optional(
                                  Schema.Boolean,
                                ),
                              }),
                            ),
                            computeSize: Schema.optional(Schema.Number),
                            storageMaxSizeInMb: Schema.optional(Schema.Number),
                            predictedDataSizeInMb: Schema.optional(
                              Schema.Number,
                            ),
                            predictedLogSizeInMb: Schema.optional(
                              Schema.Number,
                            ),
                            maxStorageIops: Schema.optional(Schema.Number),
                            maxThroughputMBps: Schema.optional(Schema.Number),
                          }),
                        ),
                      }),
                    ),
                    azureSqlVirtualMachine: Schema.optional(
                      Schema.Struct({
                        numOfBlockerIssues: Schema.optional(Schema.Number),
                        recommendationStatus: Schema.optional(
                          Schema.Literals([
                            "NotReady",
                            "Ready",
                            "ReadyWithConditions",
                            "Unknown",
                          ]),
                        ),
                        impactedObjectsSummary: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              featureId: Schema.optional(Schema.String),
                              numberImpacted: Schema.optional(Schema.Number),
                              issueCategory: Schema.optional(Schema.String),
                            }),
                          ),
                        ),
                        monthlyCost: Schema.optional(
                          Schema.Struct({
                            computeCost: Schema.optional(Schema.Number),
                            storageCost: Schema.optional(Schema.Number),
                            iopsCost: Schema.optional(Schema.Number),
                            sqlLicenseCost: Schema.optional(Schema.Number),
                            windowsLicenseCost: Schema.optional(Schema.Number),
                            totalCost: Schema.optional(Schema.Number),
                          }),
                        ),
                        monthlyCostOptions: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              keyName: Schema.optional(Schema.String),
                              keyValue: Schema.optional(
                                Schema.Struct({
                                  computeCost: Schema.optional(Schema.Number),
                                  storageCost: Schema.optional(Schema.Number),
                                  iopsCost: Schema.optional(Schema.Number),
                                }),
                              ),
                            }),
                          ),
                        ),
                        targetSku: Schema.optional(
                          Schema.Struct({
                            category: Schema.optional(
                              Schema.Struct({
                                computeTier: Schema.optional(Schema.String),
                                hardwareType: Schema.optional(Schema.String),
                                sqlPurchasingModel: Schema.optional(
                                  Schema.String,
                                ),
                                sqlServiceTier: Schema.optional(Schema.String),
                                zoneRedundancyAvailable: Schema.optional(
                                  Schema.Boolean,
                                ),
                              }),
                            ),
                            computeSize: Schema.optional(Schema.Number),
                            storageMaxSizeInMb: Schema.optional(Schema.Number),
                            predictedDataSizeInMb: Schema.optional(
                              Schema.Number,
                            ),
                            predictedLogSizeInMb: Schema.optional(
                              Schema.Number,
                            ),
                            maxStorageIops: Schema.optional(Schema.Number),
                            maxThroughputMBps: Schema.optional(Schema.Number),
                          }),
                        ),
                      }),
                    ),
                  }),
                ),
              }),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}/databases/{databaseName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerDatabasesUpdateInput>;

// Output Schema
export interface SqlServerDatabasesUpdateOutput {
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
export const SqlServerDatabasesUpdateOutput =
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
  }) as unknown as Schema.Codec<SqlServerDatabasesUpdateOutput>;

// The operation
/**
 * Updates an existing database.
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlServerInstanceName - Name of SQL Server Instance
 * @param databaseName - Name of the database
 * @param api-version - The API version to use for the request
 */
export const SqlServerDatabasesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: SqlServerDatabasesUpdateInput,
  outputSchema: SqlServerDatabasesUpdateOutput,
}));
// Input Schema
export interface SqlServerEsuLicensesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerEsuLicenseName: string;
  properties: {
    billingPlan: "PAYG";
    version: "SQL Server 2012" | "SQL Server 2014";
    uniqueId?: string;
    physicalCores: number;
    activationState: "Inactive" | "Active" | "Terminated";
    scopeType: "Tenant" | "Subscription" | "ResourceGroup";
    activatedAt?: string;
    terminatedAt?: string;
    tenantId?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const SqlServerEsuLicensesCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerEsuLicenseName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      billingPlan: Schema.Literals(["PAYG"]),
      version: Schema.Literals(["SQL Server 2012", "SQL Server 2014"]),
      uniqueId: Schema.optional(Schema.String),
      physicalCores: Schema.Number,
      activationState: Schema.Literals(["Inactive", "Active", "Terminated"]),
      scopeType: Schema.Literals(["Tenant", "Subscription", "ResourceGroup"]),
      activatedAt: Schema.optional(Schema.String),
      terminatedAt: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerEsuLicenses/{sqlServerEsuLicenseName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerEsuLicensesCreateInput>;

// Output Schema
export interface SqlServerEsuLicensesCreateOutput {
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
export const SqlServerEsuLicensesCreateOutput =
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
  }) as unknown as Schema.Codec<SqlServerEsuLicensesCreateOutput>;

// The operation
/**
 * Creates or replaces a SQL Server ESU license resource
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlServerEsuLicenseName - Name of SQL Server ESU License
 * @param api-version - The API version to use for this operation.
 */
export const SqlServerEsuLicensesCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: SqlServerEsuLicensesCreateInput,
  outputSchema: SqlServerEsuLicensesCreateOutput,
}));
// Input Schema
export interface SqlServerEsuLicensesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerEsuLicenseName: string;
}
export const SqlServerEsuLicensesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerEsuLicenseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerEsuLicenses/{sqlServerEsuLicenseName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerEsuLicensesDeleteInput>;

// Output Schema
export type SqlServerEsuLicensesDeleteOutput = void;
export const SqlServerEsuLicensesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SqlServerEsuLicensesDeleteOutput>;

// The operation
/**
 * Deletes a SQL Server ESU license resource
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlServerEsuLicenseName - Name of SQL Server ESU License
 * @param api-version - The API version to use for this operation.
 */
export const SqlServerEsuLicensesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: SqlServerEsuLicensesDeleteInput,
  outputSchema: SqlServerEsuLicensesDeleteOutput,
}));
// Input Schema
export interface SqlServerEsuLicensesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerEsuLicenseName: string;
}
export const SqlServerEsuLicensesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerEsuLicenseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerEsuLicenses/{sqlServerEsuLicenseName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerEsuLicensesGetInput>;

// Output Schema
export interface SqlServerEsuLicensesGetOutput {
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
export const SqlServerEsuLicensesGetOutput =
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
  }) as unknown as Schema.Codec<SqlServerEsuLicensesGetOutput>;

// The operation
/**
 * Retrieves a SQL Server ESU license resource
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlServerEsuLicenseName - Name of SQL Server ESU License
 * @param api-version - The API version to use for this operation.
 */
export const SqlServerEsuLicensesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: SqlServerEsuLicensesGetInput,
  outputSchema: SqlServerEsuLicensesGetOutput,
}));
// Input Schema
export interface SqlServerEsuLicensesListInput {
  subscriptionId: string;
}
export const SqlServerEsuLicensesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureArcData/sqlServerEsuLicenses",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerEsuLicensesListInput>;

// Output Schema
export interface SqlServerEsuLicensesListOutput {
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
  nextLink?: string;
}
export const SqlServerEsuLicensesListOutput =
  /*@__PURE__*/ Schema.Struct({
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlServerEsuLicensesListOutput>;

// The operation
/**
 * List sqlServerEsuLicense resources in the subscription
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param api-version - The API version to use for this operation.
 */
export const SqlServerEsuLicensesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: SqlServerEsuLicensesListInput,
  outputSchema: SqlServerEsuLicensesListOutput,
}));
// Input Schema
export interface SqlServerEsuLicensesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const SqlServerEsuLicensesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerEsuLicenses",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerEsuLicensesListByResourceGroupInput>;

// Output Schema
export interface SqlServerEsuLicensesListByResourceGroupOutput {
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
  nextLink?: string;
}
export const SqlServerEsuLicensesListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlServerEsuLicensesListByResourceGroupOutput>;

// The operation
/**
 * List sqlServerEsuLicense resources in the resource group
 *
 * Gets all sqlServerEsuLicenses in a resource group.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const SqlServerEsuLicensesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlServerEsuLicensesListByResourceGroupInput,
    outputSchema: SqlServerEsuLicensesListByResourceGroupOutput,
  }));
// Input Schema
export interface SqlServerEsuLicensesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerEsuLicenseName: string;
  tags?: Record<string, string>;
  properties?: {
    billingPlan?: "PAYG";
    version?: "SQL Server 2012" | "SQL Server 2014";
    uniqueId?: string;
    physicalCores?: number;
    activationState?: "Inactive" | "Active" | "Terminated";
    scopeType?: "Tenant" | "Subscription" | "ResourceGroup";
    activatedAt?: string;
    terminatedAt?: string;
    tenantId?: string;
  };
}
export const SqlServerEsuLicensesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerEsuLicenseName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        billingPlan: Schema.optional(Schema.Literals(["PAYG"])),
        version: Schema.optional(
          Schema.Literals(["SQL Server 2012", "SQL Server 2014"]),
        ),
        uniqueId: Schema.optional(Schema.String),
        physicalCores: Schema.optional(Schema.Number),
        activationState: Schema.optional(
          Schema.Literals(["Inactive", "Active", "Terminated"]),
        ),
        scopeType: Schema.optional(
          Schema.Literals(["Tenant", "Subscription", "ResourceGroup"]),
        ),
        activatedAt: Schema.optional(Schema.String),
        terminatedAt: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerEsuLicenses/{sqlServerEsuLicenseName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerEsuLicensesUpdateInput>;

// Output Schema
export interface SqlServerEsuLicensesUpdateOutput {
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
export const SqlServerEsuLicensesUpdateOutput =
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
  }) as unknown as Schema.Codec<SqlServerEsuLicensesUpdateOutput>;

// The operation
/**
 * Updates a SQL Server ESU license resource
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlServerEsuLicenseName - Name of SQL Server ESU License
 * @param api-version - The API version to use for this operation.
 */
export const SqlServerEsuLicensesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: SqlServerEsuLicensesUpdateInput,
  outputSchema: SqlServerEsuLicensesUpdateOutput,
}));
// Input Schema
export interface SqlServerInstancesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerInstanceName: string;
  properties?: {
    version?:
      | "Unknown"
      | "SQL Server 2012"
      | "SQL Server 2014"
      | "SQL Server 2016"
      | "SQL Server 2017"
      | "SQL Server 2019"
      | "SQL Server 2022"
      | "SQL Server 2025";
    edition?:
      | "Evaluation"
      | "Enterprise"
      | "Standard"
      | "Web"
      | "Developer"
      | "Express"
      | "Business Intelligence"
      | "Standard Developer";
    containerResourceId?: string;
    vmId?: string;
    createTime?: string;
    vCore?: string;
    cores?: string;
    status?: "Connected" | "Disconnected" | "Registered" | "Unknown";
    patchLevel?: string;
    collation?: string;
    dbMasterKeyExists?: boolean;
    isHadrEnabled?: boolean;
    traceFlags?: number[];
    currentVersion?: string;
    instanceName?: string;
    tcpDynamicPorts?: string;
    tcpStaticPorts?: string;
    productId?: string;
    licenseType?:
      | "Undefined"
      | "Free"
      | "HADR"
      | "ServerCAL"
      | "LicenseOnly"
      | "PAYG"
      | "Paid"
      | "FabricCapacity";
    azureDefenderStatusLastUpdated?: string;
    azureDefenderStatus?: "Protected" | "Unprotected" | "Unknown";
    provisioningState?: string;
    lastInventoryUploadTime?: string;
    lastUsageUploadTime?: string;
    hostType?:
      | "Azure Virtual Machine"
      | "Azure VMWare Virtual Machine"
      | "Azure Kubernetes Service"
      | "AWS VMWare Virtual Machine"
      | "AWS Kubernetes Service"
      | "GCP VMWare Virtual Machine"
      | "GCP Kubernetes Service"
      | "Container"
      | "Virtual Machine"
      | "Physical Server"
      | "AWS Virtual Machine"
      | "GCP Virtual Machine"
      | "Other";
    alwaysOnRole?:
      | "None"
      | "FailoverClusterInstance"
      | "FailoverClusterNode"
      | "AvailabilityGroupReplica";
    databaseMirroringEndpoint?: {
      endpointName?: string;
      role?: "NONE" | "PARTNER" | "WITNESS" | "ALL";
      isEncryptionEnabled?: boolean;
      encryptionAlgorithm?:
        | "NONE"
        | "RC4"
        | "AES"
        | "NONE, RC4"
        | "NONE, AES"
        | "RC4, AES"
        | "AES, RC4"
        | "NONE, RC4, AES"
        | "NONE, AES, RC4";
      connectionAuth?:
        | "Windows_NTLM"
        | "Windows_Kerberos"
        | "Windows_Negotiate"
        | "Certificate"
        | "Windows_NTLM_Certificate"
        | "Windows_Kerberos_Certificate"
        | "Windows_Negotiate_Certificate"
        | "Certificate_Windows_NTLM"
        | "Certificate_Windows_Kerberos"
        | "Certificate_Windows_Negotiate";
      port?: number;
      isDynamicPort?: boolean;
      ipAddress?: string;
      certificateName?: string;
      certificateExpiryDate?: string;
    };
    failoverCluster?: {
      id?: string;
      networkName?: string;
      sqlInstanceIds?: string[];
      hostNames?: string[];
      hostIPAddresses?: { ipAddress?: string; subnetMask?: string }[];
    };
    backupPolicy?: {
      retentionPeriodDays?: number;
      fullBackupDays?: number;
      differentialBackupHours?: 12 | 24;
      transactionLogBackupMinutes?: number;
    };
    upgradeLockedUntil?: string;
    monitoring?: { enabled?: boolean };
    migration?: {
      assessment?: {
        enabled?: boolean;
        assessmentUploadTime?: string;
        version?: string;
        settings?: {
          targetLocation?: string;
          percentile?: number;
          lookbackPeriodInDays?: number;
          strategy?: string;
          currency?: string;
          discountPercentage?: number;
          costOptions?: {
            computeAndStorageCostOption?: string;
            sqlLicenseCostOption?: string;
            windowsLicenseCostOption?: string;
          };
        };
        serverAssessments?: {
          appliesToMigrationTargetPlatform?: string;
          featureId?: string;
          impactedObjects?: {
            impactDetail?: string;
            name?: string;
            objectType?: string;
          }[];
          issueCategory?: string;
          moreInformation?: string;
        }[];
        skuRecommendationResults?: {
          azureSqlDatabase?: {
            recommendationStatus?:
              | "NotReady"
              | "Ready"
              | "ReadyWithConditions"
              | "Unknown";
            numberOfServerBlockerIssues?: number;
            monthlyCost?: {
              computeCost?: number;
              storageCost?: number;
              iopsCost?: number;
              sqlLicenseCost?: number;
              windowsLicenseCost?: number;
              totalCost?: number;
            };
            monthlyCostOptions?: {
              keyName?: string;
              keyValue?: {
                computeCost?: number;
                storageCost?: number;
                iopsCost?: number;
              };
            }[];
            targetSku?: {
              category?: {
                computeTier?: string;
                hardwareType?: string;
                sqlPurchasingModel?: string;
                sqlServiceTier?: string;
                zoneRedundancyAvailable?: boolean;
              };
              computeSize?: number;
              storageMaxSizeInMb?: number;
              predictedDataSizeInMb?: number;
              predictedLogSizeInMb?: number;
              maxStorageIops?: number;
              maxThroughputMBps?: number;
            };
          };
          azureSqlManagedInstance?: {
            recommendationStatus?:
              | "NotReady"
              | "Ready"
              | "ReadyWithConditions"
              | "Unknown";
            numberOfServerBlockerIssues?: number;
            monthlyCost?: {
              computeCost?: number;
              storageCost?: number;
              iopsCost?: number;
              sqlLicenseCost?: number;
              windowsLicenseCost?: number;
              totalCost?: number;
            };
            monthlyCostOptions?: {
              keyName?: string;
              keyValue?: {
                computeCost?: number;
                storageCost?: number;
                iopsCost?: number;
              };
            }[];
            targetSku?: {
              category?: {
                computeTier?: string;
                hardwareType?: string;
                sqlPurchasingModel?: string;
                sqlServiceTier?: string;
                zoneRedundancyAvailable?: boolean;
              };
              computeSize?: number;
              storageMaxSizeInMb?: number;
              predictedDataSizeInMb?: number;
              predictedLogSizeInMb?: number;
              maxStorageIops?: number;
              maxThroughputMBps?: number;
            };
          };
          azureSqlVirtualMachine?: {
            recommendationStatus?:
              | "NotReady"
              | "Ready"
              | "ReadyWithConditions"
              | "Unknown";
            numberOfServerBlockerIssues?: number;
            monthlyCost?: {
              computeCost?: number;
              storageCost?: number;
              iopsCost?: number;
              sqlLicenseCost?: number;
              windowsLicenseCost?: number;
              totalCost?: number;
            };
            monthlyCostOptions?: {
              keyName?: string;
              keyValue?: {
                computeCost?: number;
                storageCost?: number;
                iopsCost?: number;
              };
            }[];
            targetSku?: {
              category?: {
                availableVmSkus?: string[];
                virtualMachineFamily?: string;
              };
              computeSize?: number;
              predictedDataSizeInMb?: number;
              predictedLogSizeInMb?: number;
              virtualMachineSize?: {
                virtualMachineFamily?: string;
                sizeName?: string;
                computeSize?: number;
                azureSkuName?: string;
                vCPUsAvailable?: number;
                maxNetworkInterfaces?: number;
              };
              dataDiskSizes?: {
                diskType?: string;
                redundancy?: string;
                size?: string;
                caching?: string;
                maxSizeInGib?: number;
                maxThroughputInMbps?: number;
                maxIops?: number;
              }[];
              logDiskSizes?: {
                diskType?: string;
                redundancy?: string;
                size?: string;
                caching?: string;
                maxSizeInGib?: number;
                maxThroughputInMbps?: number;
                maxIops?: number;
              }[];
              tempDbDiskSizes?: {
                diskType?: string;
                redundancy?: string;
                size?: string;
                caching?: string;
                maxSizeInGib?: number;
                maxThroughputInMbps?: number;
                maxIops?: number;
              }[];
            };
          };
        };
        impactedObjectsSummary?: {
          azureSqlDatabase?: {
            featureId?: string;
            numberImpacted?: number;
            issueCategory?: string;
          }[];
          azureSqlManagedInstance?: {
            featureId?: string;
            numberImpacted?: number;
            issueCategory?: string;
          }[];
        };
      };
    };
    bestPracticesAssessment?: {
      enabled?: boolean;
      schedule?: {
        enabled?: boolean;
        cronTrigger?: {
          startTime?: string;
          timeZone?: string;
          expression?: string;
        };
      };
    };
    clientConnection?: { enabled?: boolean };
    serviceType?: "Engine" | "SSRS" | "SSAS" | "SSIS" | "PBIRS";
    maxServerMemoryMB?: number;
    isMicrosoftPkiCertTrustConfigured?: boolean;
    isDigiCertPkiCertTrustConfigured?: boolean;
    authentication?: {
      mode?: "Mixed" | "Windows" | "Undefined";
      sqlServerEntraIdentity?: {
        identityType?:
          | "SystemAssignedManagedIdentity"
          | "UserAssignedManagedIdentity";
        clientId?: string;
      }[];
    };
  };
  tags?: Record<string, string>;
  location: string;
}
export const SqlServerInstancesCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerInstanceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        version: Schema.optional(
          Schema.Literals([
            "Unknown",
            "SQL Server 2012",
            "SQL Server 2014",
            "SQL Server 2016",
            "SQL Server 2017",
            "SQL Server 2019",
            "SQL Server 2022",
            "SQL Server 2025",
          ]),
        ),
        edition: Schema.optional(
          Schema.Literals([
            "Evaluation",
            "Enterprise",
            "Standard",
            "Web",
            "Developer",
            "Express",
            "Business Intelligence",
            "Standard Developer",
          ]),
        ),
        containerResourceId: Schema.optional(Schema.String),
        vmId: Schema.optional(Schema.String),
        createTime: Schema.optional(Schema.String),
        vCore: Schema.optional(Schema.String),
        cores: Schema.optional(Schema.String),
        status: Schema.optional(
          Schema.Literals([
            "Connected",
            "Disconnected",
            "Registered",
            "Unknown",
          ]),
        ),
        patchLevel: Schema.optional(Schema.String),
        collation: Schema.optional(Schema.String),
        dbMasterKeyExists: Schema.optional(Schema.Boolean),
        isHadrEnabled: Schema.optional(Schema.Boolean),
        traceFlags: Schema.optional(Schema.Array(Schema.Number)),
        currentVersion: Schema.optional(Schema.String),
        instanceName: Schema.optional(Schema.String),
        tcpDynamicPorts: Schema.optional(Schema.String),
        tcpStaticPorts: Schema.optional(Schema.String),
        productId: Schema.optional(Schema.String),
        licenseType: Schema.optional(
          Schema.Literals([
            "Undefined",
            "Free",
            "HADR",
            "ServerCAL",
            "LicenseOnly",
            "PAYG",
            "Paid",
            "FabricCapacity",
          ]),
        ),
        azureDefenderStatusLastUpdated: Schema.optional(Schema.String),
        azureDefenderStatus: Schema.optional(
          Schema.Literals(["Protected", "Unprotected", "Unknown"]),
        ),
        provisioningState: Schema.optional(Schema.String),
        lastInventoryUploadTime: Schema.optional(Schema.String),
        lastUsageUploadTime: Schema.optional(Schema.String),
        hostType: Schema.optional(
          Schema.Literals([
            "Azure Virtual Machine",
            "Azure VMWare Virtual Machine",
            "Azure Kubernetes Service",
            "AWS VMWare Virtual Machine",
            "AWS Kubernetes Service",
            "GCP VMWare Virtual Machine",
            "GCP Kubernetes Service",
            "Container",
            "Virtual Machine",
            "Physical Server",
            "AWS Virtual Machine",
            "GCP Virtual Machine",
            "Other",
          ]),
        ),
        alwaysOnRole: Schema.optional(
          Schema.Literals([
            "None",
            "FailoverClusterInstance",
            "FailoverClusterNode",
            "AvailabilityGroupReplica",
          ]),
        ),
        databaseMirroringEndpoint: Schema.optional(
          Schema.Struct({
            endpointName: Schema.optional(Schema.String),
            role: Schema.optional(
              Schema.Literals(["NONE", "PARTNER", "WITNESS", "ALL"]),
            ),
            isEncryptionEnabled: Schema.optional(Schema.Boolean),
            encryptionAlgorithm: Schema.optional(
              Schema.Literals([
                "NONE",
                "RC4",
                "AES",
                "NONE, RC4",
                "NONE, AES",
                "RC4, AES",
                "AES, RC4",
                "NONE, RC4, AES",
                "NONE, AES, RC4",
              ]),
            ),
            connectionAuth: Schema.optional(
              Schema.Literals([
                "Windows_NTLM",
                "Windows_Kerberos",
                "Windows_Negotiate",
                "Certificate",
                "Windows_NTLM_Certificate",
                "Windows_Kerberos_Certificate",
                "Windows_Negotiate_Certificate",
                "Certificate_Windows_NTLM",
                "Certificate_Windows_Kerberos",
                "Certificate_Windows_Negotiate",
              ]),
            ),
            port: Schema.optional(Schema.Number),
            isDynamicPort: Schema.optional(Schema.Boolean),
            ipAddress: Schema.optional(Schema.String),
            certificateName: Schema.optional(Schema.String),
            certificateExpiryDate: Schema.optional(Schema.String),
          }),
        ),
        failoverCluster: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            networkName: Schema.optional(Schema.String),
            sqlInstanceIds: Schema.optional(Schema.Array(Schema.String)),
            hostNames: Schema.optional(Schema.Array(Schema.String)),
            hostIPAddresses: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  ipAddress: Schema.optional(Schema.String),
                  subnetMask: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        backupPolicy: Schema.optional(
          Schema.Struct({
            retentionPeriodDays: Schema.optional(Schema.Number),
            fullBackupDays: Schema.optional(Schema.Number),
            differentialBackupHours: Schema.optional(Schema.Literals([12, 24])),
            transactionLogBackupMinutes: Schema.optional(Schema.Number),
          }),
        ),
        upgradeLockedUntil: Schema.optional(Schema.String),
        monitoring: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
          }),
        ),
        migration: Schema.optional(
          Schema.Struct({
            assessment: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
                assessmentUploadTime: Schema.optional(Schema.String),
                version: Schema.optional(Schema.String),
                settings: Schema.optional(
                  Schema.Struct({
                    targetLocation: Schema.optional(Schema.String),
                    percentile: Schema.optional(Schema.Number),
                    lookbackPeriodInDays: Schema.optional(Schema.Number),
                    strategy: Schema.optional(Schema.String),
                    currency: Schema.optional(Schema.String),
                    discountPercentage: Schema.optional(Schema.Number),
                    costOptions: Schema.optional(
                      Schema.Struct({
                        computeAndStorageCostOption: Schema.optional(
                          Schema.String,
                        ),
                        sqlLicenseCostOption: Schema.optional(Schema.String),
                        windowsLicenseCostOption: Schema.optional(
                          Schema.String,
                        ),
                      }),
                    ),
                  }),
                ),
                serverAssessments: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      appliesToMigrationTargetPlatform: Schema.optional(
                        Schema.String,
                      ),
                      featureId: Schema.optional(Schema.String),
                      impactedObjects: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            impactDetail: Schema.optional(Schema.String),
                            name: Schema.optional(Schema.String),
                            objectType: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                      issueCategory: Schema.optional(Schema.String),
                      moreInformation: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                skuRecommendationResults: Schema.optional(
                  Schema.Struct({
                    azureSqlDatabase: Schema.optional(
                      Schema.Struct({
                        recommendationStatus: Schema.optional(
                          Schema.Literals([
                            "NotReady",
                            "Ready",
                            "ReadyWithConditions",
                            "Unknown",
                          ]),
                        ),
                        numberOfServerBlockerIssues: Schema.optional(
                          Schema.Number,
                        ),
                        monthlyCost: Schema.optional(
                          Schema.Struct({
                            computeCost: Schema.optional(Schema.Number),
                            storageCost: Schema.optional(Schema.Number),
                            iopsCost: Schema.optional(Schema.Number),
                            sqlLicenseCost: Schema.optional(Schema.Number),
                            windowsLicenseCost: Schema.optional(Schema.Number),
                            totalCost: Schema.optional(Schema.Number),
                          }),
                        ),
                        monthlyCostOptions: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              keyName: Schema.optional(Schema.String),
                              keyValue: Schema.optional(
                                Schema.Struct({
                                  computeCost: Schema.optional(Schema.Number),
                                  storageCost: Schema.optional(Schema.Number),
                                  iopsCost: Schema.optional(Schema.Number),
                                }),
                              ),
                            }),
                          ),
                        ),
                        targetSku: Schema.optional(
                          Schema.Struct({
                            category: Schema.optional(
                              Schema.Struct({
                                computeTier: Schema.optional(Schema.String),
                                hardwareType: Schema.optional(Schema.String),
                                sqlPurchasingModel: Schema.optional(
                                  Schema.String,
                                ),
                                sqlServiceTier: Schema.optional(Schema.String),
                                zoneRedundancyAvailable: Schema.optional(
                                  Schema.Boolean,
                                ),
                              }),
                            ),
                            computeSize: Schema.optional(Schema.Number),
                            storageMaxSizeInMb: Schema.optional(Schema.Number),
                            predictedDataSizeInMb: Schema.optional(
                              Schema.Number,
                            ),
                            predictedLogSizeInMb: Schema.optional(
                              Schema.Number,
                            ),
                            maxStorageIops: Schema.optional(Schema.Number),
                            maxThroughputMBps: Schema.optional(Schema.Number),
                          }),
                        ),
                      }),
                    ),
                    azureSqlManagedInstance: Schema.optional(
                      Schema.Struct({
                        recommendationStatus: Schema.optional(
                          Schema.Literals([
                            "NotReady",
                            "Ready",
                            "ReadyWithConditions",
                            "Unknown",
                          ]),
                        ),
                        numberOfServerBlockerIssues: Schema.optional(
                          Schema.Number,
                        ),
                        monthlyCost: Schema.optional(
                          Schema.Struct({
                            computeCost: Schema.optional(Schema.Number),
                            storageCost: Schema.optional(Schema.Number),
                            iopsCost: Schema.optional(Schema.Number),
                            sqlLicenseCost: Schema.optional(Schema.Number),
                            windowsLicenseCost: Schema.optional(Schema.Number),
                            totalCost: Schema.optional(Schema.Number),
                          }),
                        ),
                        monthlyCostOptions: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              keyName: Schema.optional(Schema.String),
                              keyValue: Schema.optional(
                                Schema.Struct({
                                  computeCost: Schema.optional(Schema.Number),
                                  storageCost: Schema.optional(Schema.Number),
                                  iopsCost: Schema.optional(Schema.Number),
                                }),
                              ),
                            }),
                          ),
                        ),
                        targetSku: Schema.optional(
                          Schema.Struct({
                            category: Schema.optional(
                              Schema.Struct({
                                computeTier: Schema.optional(Schema.String),
                                hardwareType: Schema.optional(Schema.String),
                                sqlPurchasingModel: Schema.optional(
                                  Schema.String,
                                ),
                                sqlServiceTier: Schema.optional(Schema.String),
                                zoneRedundancyAvailable: Schema.optional(
                                  Schema.Boolean,
                                ),
                              }),
                            ),
                            computeSize: Schema.optional(Schema.Number),
                            storageMaxSizeInMb: Schema.optional(Schema.Number),
                            predictedDataSizeInMb: Schema.optional(
                              Schema.Number,
                            ),
                            predictedLogSizeInMb: Schema.optional(
                              Schema.Number,
                            ),
                            maxStorageIops: Schema.optional(Schema.Number),
                            maxThroughputMBps: Schema.optional(Schema.Number),
                          }),
                        ),
                      }),
                    ),
                    azureSqlVirtualMachine: Schema.optional(
                      Schema.Struct({
                        recommendationStatus: Schema.optional(
                          Schema.Literals([
                            "NotReady",
                            "Ready",
                            "ReadyWithConditions",
                            "Unknown",
                          ]),
                        ),
                        numberOfServerBlockerIssues: Schema.optional(
                          Schema.Number,
                        ),
                        monthlyCost: Schema.optional(
                          Schema.Struct({
                            computeCost: Schema.optional(Schema.Number),
                            storageCost: Schema.optional(Schema.Number),
                            iopsCost: Schema.optional(Schema.Number),
                            sqlLicenseCost: Schema.optional(Schema.Number),
                            windowsLicenseCost: Schema.optional(Schema.Number),
                            totalCost: Schema.optional(Schema.Number),
                          }),
                        ),
                        monthlyCostOptions: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              keyName: Schema.optional(Schema.String),
                              keyValue: Schema.optional(
                                Schema.Struct({
                                  computeCost: Schema.optional(Schema.Number),
                                  storageCost: Schema.optional(Schema.Number),
                                  iopsCost: Schema.optional(Schema.Number),
                                }),
                              ),
                            }),
                          ),
                        ),
                        targetSku: Schema.optional(
                          Schema.Struct({
                            category: Schema.optional(
                              Schema.Struct({
                                availableVmSkus: Schema.optional(
                                  Schema.Array(Schema.String),
                                ),
                                virtualMachineFamily: Schema.optional(
                                  Schema.String,
                                ),
                              }),
                            ),
                            computeSize: Schema.optional(Schema.Number),
                            predictedDataSizeInMb: Schema.optional(
                              Schema.Number,
                            ),
                            predictedLogSizeInMb: Schema.optional(
                              Schema.Number,
                            ),
                            virtualMachineSize: Schema.optional(
                              Schema.Struct({
                                virtualMachineFamily: Schema.optional(
                                  Schema.String,
                                ),
                                sizeName: Schema.optional(Schema.String),
                                computeSize: Schema.optional(Schema.Number),
                                azureSkuName: Schema.optional(Schema.String),
                                vCPUsAvailable: Schema.optional(Schema.Number),
                                maxNetworkInterfaces: Schema.optional(
                                  Schema.Number,
                                ),
                              }),
                            ),
                            dataDiskSizes: Schema.optional(
                              Schema.Array(
                                Schema.Struct({
                                  diskType: Schema.optional(Schema.String),
                                  redundancy: Schema.optional(Schema.String),
                                  size: Schema.optional(Schema.String),
                                  caching: Schema.optional(Schema.String),
                                  maxSizeInGib: Schema.optional(Schema.Number),
                                  maxThroughputInMbps: Schema.optional(
                                    Schema.Number,
                                  ),
                                  maxIops: Schema.optional(Schema.Number),
                                }),
                              ),
                            ),
                            logDiskSizes: Schema.optional(
                              Schema.Array(
                                Schema.Struct({
                                  diskType: Schema.optional(Schema.String),
                                  redundancy: Schema.optional(Schema.String),
                                  size: Schema.optional(Schema.String),
                                  caching: Schema.optional(Schema.String),
                                  maxSizeInGib: Schema.optional(Schema.Number),
                                  maxThroughputInMbps: Schema.optional(
                                    Schema.Number,
                                  ),
                                  maxIops: Schema.optional(Schema.Number),
                                }),
                              ),
                            ),
                            tempDbDiskSizes: Schema.optional(
                              Schema.Array(
                                Schema.Struct({
                                  diskType: Schema.optional(Schema.String),
                                  redundancy: Schema.optional(Schema.String),
                                  size: Schema.optional(Schema.String),
                                  caching: Schema.optional(Schema.String),
                                  maxSizeInGib: Schema.optional(Schema.Number),
                                  maxThroughputInMbps: Schema.optional(
                                    Schema.Number,
                                  ),
                                  maxIops: Schema.optional(Schema.Number),
                                }),
                              ),
                            ),
                          }),
                        ),
                      }),
                    ),
                  }),
                ),
                impactedObjectsSummary: Schema.optional(
                  Schema.Struct({
                    azureSqlDatabase: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          featureId: Schema.optional(Schema.String),
                          numberImpacted: Schema.optional(Schema.Number),
                          issueCategory: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                    azureSqlManagedInstance: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          featureId: Schema.optional(Schema.String),
                          numberImpacted: Schema.optional(Schema.Number),
                          issueCategory: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                  }),
                ),
              }),
            ),
          }),
        ),
        bestPracticesAssessment: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
            schedule: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
                cronTrigger: Schema.optional(
                  Schema.Struct({
                    startTime: Schema.optional(Schema.String),
                    timeZone: Schema.optional(Schema.String),
                    expression: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
          }),
        ),
        clientConnection: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
          }),
        ),
        serviceType: Schema.optional(
          Schema.Literals(["Engine", "SSRS", "SSAS", "SSIS", "PBIRS"]),
        ),
        maxServerMemoryMB: Schema.optional(Schema.Number),
        isMicrosoftPkiCertTrustConfigured: Schema.optional(Schema.Boolean),
        isDigiCertPkiCertTrustConfigured: Schema.optional(Schema.Boolean),
        authentication: Schema.optional(
          Schema.Struct({
            mode: Schema.optional(
              Schema.Literals(["Mixed", "Windows", "Undefined"]),
            ),
            sqlServerEntraIdentity: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  identityType: Schema.optional(
                    Schema.Literals([
                      "SystemAssignedManagedIdentity",
                      "UserAssignedManagedIdentity",
                    ]),
                  ),
                  clientId: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerInstancesCreateInput>;

// Output Schema
export interface SqlServerInstancesCreateOutput {
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
export const SqlServerInstancesCreateOutput =
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
  }) as unknown as Schema.Codec<SqlServerInstancesCreateOutput>;

// The operation
/**
 * Creates or replaces a SQL Server Instance resource
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlServerInstanceName - Name of SQL Server Instance
 * @param api-version - The API version to use for the request
 * @param properties - null
 */
export const SqlServerInstancesCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: SqlServerInstancesCreateInput,
  outputSchema: SqlServerInstancesCreateOutput,
}));
// Input Schema
export interface SqlServerInstancesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerInstanceName: string;
}
export const SqlServerInstancesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerInstancesDeleteInput>;

// Output Schema
export type SqlServerInstancesDeleteOutput = void;
export const SqlServerInstancesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SqlServerInstancesDeleteOutput>;

// The operation
/**
 * Deletes a SQL Server Instance resource
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlServerInstanceName - Name of SQL Server Instance
 * @param api-version - The API version to use for the request
 */
export const SqlServerInstancesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: SqlServerInstancesDeleteInput,
  outputSchema: SqlServerInstancesDeleteOutput,
}));
// Input Schema
export interface SqlServerInstancesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerInstanceName: string;
}
export const SqlServerInstancesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerInstancesGetInput>;

// Output Schema
export interface SqlServerInstancesGetOutput {
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
export const SqlServerInstancesGetOutput =
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
  }) as unknown as Schema.Codec<SqlServerInstancesGetOutput>;

// The operation
/**
 * Retrieves a SQL Server Instance resource
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlServerInstanceName - Name of SQL Server Instance
 * @param api-version - The API version to use for the request
 */
export const SqlServerInstancesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: SqlServerInstancesGetInput,
  outputSchema: SqlServerInstancesGetOutput,
}));
// Input Schema
export interface SqlServerInstancesGetAllAvailabilityGroupsInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerInstanceName: string;
  availabilityGroupTypeFilter?: "CONTAINED" | "DISTRIBUTED" | "DEFAULT";
  replicationPartnerTypeFilter?:
    | "SQLServer"
    | "AzureSQLVM"
    | "AzureSQLManagedInstance"
    | "Unknown";
}
export const SqlServerInstancesGetAllAvailabilityGroupsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerInstanceName: Schema.String.pipe(T.PathParam()),
    availabilityGroupTypeFilter: Schema.optional(
      Schema.Literals(["CONTAINED", "DISTRIBUTED", "DEFAULT"]),
    ),
    replicationPartnerTypeFilter: Schema.optional(
      Schema.Literals([
        "SQLServer",
        "AzureSQLVM",
        "AzureSQLManagedInstance",
        "Unknown",
      ]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}/getAllAvailabilityGroups",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerInstancesGetAllAvailabilityGroupsInput>;

// Output Schema
export interface SqlServerInstancesGetAllAvailabilityGroupsOutput {
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
  nextLink?: string;
}
export const SqlServerInstancesGetAllAvailabilityGroupsOutput =
  /*@__PURE__*/ Schema.Struct({
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlServerInstancesGetAllAvailabilityGroupsOutput>;

// The operation
/**
 * Retrieves full properties of all the Availability Groups in a SQL Server instance.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlServerInstanceName - Name of SQL Server Instance
 * @param api-version - The API version to use for this operation.
 */
export const SqlServerInstancesGetAllAvailabilityGroups =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlServerInstancesGetAllAvailabilityGroupsInput,
    outputSchema: SqlServerInstancesGetAllAvailabilityGroupsOutput,
  }));
// Input Schema
export interface SqlServerInstancesGetBestPracticesAssessmentInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerInstanceName: string;
  reportType?: "AssessmentDataPoint" | "AssessmentSummary";
  reportId?: string;
  skipToken?: string;
}
export const SqlServerInstancesGetBestPracticesAssessmentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerInstanceName: Schema.String.pipe(T.PathParam()),
    reportType: Schema.optional(
      Schema.Literals(["AssessmentDataPoint", "AssessmentSummary"]),
    ),
    reportId: Schema.optional(Schema.String),
    skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}/getBestPracticesAssessment",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerInstancesGetBestPracticesAssessmentInput>;

// Output Schema
export interface SqlServerInstancesGetBestPracticesAssessmentOutput {
  columns: {
    name?: string;
    type?:
      | "bool"
      | "datetime"
      | "int"
      | "long"
      | "double"
      | "string"
      | "guid"
      | "timespan";
  }[];
  rows: string[][];
  nextLink?: string;
}
export const SqlServerInstancesGetBestPracticesAssessmentOutput =
  /*@__PURE__*/ Schema.Struct({
    columns: Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "bool",
            "datetime",
            "int",
            "long",
            "double",
            "string",
            "guid",
            "timespan",
          ]),
        ),
      }),
    ),
    rows: Schema.Array(Schema.Array(Schema.String)),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlServerInstancesGetBestPracticesAssessmentOutput>;

// The operation
/**
 * Retrieves SQL best practices assessment results for the SQL Server instance.
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlServerInstanceName - Name of SQL Server Instance
 * @param api-version - The API version to use for the request
 * @param reportType - The report type that needs to be fetched. If not specified, the default is AssessmentSummary.
 * @param reportId - The GUID of the report to return best practices assessment results for. If not specified, summaries for all reports will be returned.
 * @param skipToken - The opaque token to use to skip to a specific page of the report. If not specified, the first page will be returned.
 */
export const SqlServerInstancesGetBestPracticesAssessment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlServerInstancesGetBestPracticesAssessmentInput,
    outputSchema: SqlServerInstancesGetBestPracticesAssessmentOutput,
  }));
// Input Schema
export interface SqlServerInstancesGetJobsStatusInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerInstanceName: string;
  featureName?: string;
  jobType?: string;
}
export const SqlServerInstancesGetJobsStatusInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerInstanceName: Schema.String.pipe(T.PathParam()),
    featureName: Schema.optional(Schema.String),
    jobType: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}/getJobsStatus",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerInstancesGetJobsStatusInput>;

// Output Schema
export interface SqlServerInstancesGetJobsStatusOutput {
  jobsStatus?: {
    id?: string;
    instanceName?: string;
    jobStatus?: "NotStarted" | "InProgress" | "Succeeded" | "Failed";
    jobException?: string;
    backgroundJob?: {
      state?:
        | "Enabled"
        | "Disabled"
        | "Deleted"
        | "Completed"
        | "Faulted"
        | "Suspended";
      executionState?: "Waiting" | "Running";
      startTime?: string;
      endTime?: string;
      lastExecutionStatus?:
        | "Succeeded"
        | "Completed"
        | "Failed"
        | "Faulted"
        | "Postponed"
        | "Rescheduled";
      lastExecutionTime?: string;
    };
    sequencerActions?: {
      actionId?: string;
      state?:
        | "NotStarted"
        | "WaitingPredecessors"
        | "ExecutingAction"
        | "CreatingSuccessors"
        | "Completed";
      result?: "NotCompleted" | "Succeeded" | "Failed" | "TimedOut" | "Skipped";
    }[];
  }[];
}
export const SqlServerInstancesGetJobsStatusOutput =
  /*@__PURE__*/ Schema.Struct({
    jobsStatus: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          instanceName: Schema.optional(Schema.String),
          jobStatus: Schema.optional(
            Schema.Literals([
              "NotStarted",
              "InProgress",
              "Succeeded",
              "Failed",
            ]),
          ),
          jobException: Schema.optional(Schema.String),
          backgroundJob: Schema.optional(
            Schema.Struct({
              state: Schema.optional(
                Schema.Literals([
                  "Enabled",
                  "Disabled",
                  "Deleted",
                  "Completed",
                  "Faulted",
                  "Suspended",
                ]),
              ),
              executionState: Schema.optional(
                Schema.Literals(["Waiting", "Running"]),
              ),
              startTime: Schema.optional(Schema.String),
              endTime: Schema.optional(Schema.String),
              lastExecutionStatus: Schema.optional(
                Schema.Literals([
                  "Succeeded",
                  "Completed",
                  "Failed",
                  "Faulted",
                  "Postponed",
                  "Rescheduled",
                ]),
              ),
              lastExecutionTime: Schema.optional(Schema.String),
            }),
          ),
          sequencerActions: Schema.optional(
            Schema.Array(
              Schema.Struct({
                actionId: Schema.optional(Schema.String),
                state: Schema.optional(
                  Schema.Literals([
                    "NotStarted",
                    "WaitingPredecessors",
                    "ExecutingAction",
                    "CreatingSuccessors",
                    "Completed",
                  ]),
                ),
                result: Schema.optional(
                  Schema.Literals([
                    "NotCompleted",
                    "Succeeded",
                    "Failed",
                    "TimedOut",
                    "Skipped",
                  ]),
                ),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<SqlServerInstancesGetJobsStatusOutput>;

// The operation
/**
 * Gets jobs status details for sql arc resource
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlServerInstanceName - Name of SQL Server Instance
 * @param api-version - The API version to use for the request
 * @param featureName - The name of the feature to retrieve the job status for.
 * @param jobType - The type of the job to retrieve the status for.
 */
export const SqlServerInstancesGetJobsStatus =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlServerInstancesGetJobsStatusInput,
    outputSchema: SqlServerInstancesGetJobsStatusOutput,
  }));
// Input Schema
export interface SqlServerInstancesGetTelemetryInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerInstanceName: string;
  datasetName: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  aggregationType?: "Average" | "Minimum" | "Maximum" | "Sum" | "Count";
  databaseNames?: string[];
}
export const SqlServerInstancesGetTelemetryInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerInstanceName: Schema.String.pipe(T.PathParam()),
    datasetName: Schema.String,
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    interval: Schema.optional(Schema.String),
    aggregationType: Schema.optional(
      Schema.Literals(["Average", "Minimum", "Maximum", "Sum", "Count"]),
    ),
    databaseNames: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}/getTelemetry",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerInstancesGetTelemetryInput>;

// Output Schema
export interface SqlServerInstancesGetTelemetryOutput {
  columns: {
    name?: string;
    type?:
      | "bool"
      | "datetime"
      | "int"
      | "long"
      | "double"
      | "string"
      | "guid"
      | "timespan";
  }[];
  rows: string[][];
  nextLink?: string;
}
export const SqlServerInstancesGetTelemetryOutput =
  /*@__PURE__*/ Schema.Struct({
    columns: Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "bool",
            "datetime",
            "int",
            "long",
            "double",
            "string",
            "guid",
            "timespan",
          ]),
        ),
      }),
    ),
    rows: Schema.Array(Schema.Array(Schema.String)),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlServerInstancesGetTelemetryOutput>;

// The operation
/**
 * Retrieves SQL Server instance telemetry
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlServerInstanceName - Name of SQL Server Instance
 * @param api-version - The API version to use for the request
 * @param datasetName - The name of the telemetry dataset to retrieve.
 * @param startTime - The start time for the time range to fetch telemetry for. If not specified, the current time minus 1 hour is used.
 * @param endTime - The end time for the time range to fetch telemetry for. If not specified, the current time is used.
 * @param interval - The time granularity to fetch telemetry for. This is an ISO8601 duration. Examples: PT15M, PT1H, P1D
 * @param aggregationType - The aggregation type to use for the numerical columns in the dataset.
 * @param databaseNames - The list of database names to return telemetry for. If not specified, telemetry for all databases will be aggregated and returned.
 */
export const SqlServerInstancesGetTelemetry =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlServerInstancesGetTelemetryInput,
    outputSchema: SqlServerInstancesGetTelemetryOutput,
  }));
// Input Schema
export interface SqlServerInstancesListInput {
  subscriptionId: string;
}
export const SqlServerInstancesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureArcData/sqlServerInstances",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerInstancesListInput>;

// Output Schema
export interface SqlServerInstancesListOutput {
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
  nextLink?: string;
}
export const SqlServerInstancesListOutput =
  /*@__PURE__*/ Schema.Struct({
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlServerInstancesListOutput>;

// The operation
/**
 * List sqlServerInstance resources in the subscription
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param api-version - The API version to use for the request
 */
export const SqlServerInstancesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: SqlServerInstancesListInput,
  outputSchema: SqlServerInstancesListOutput,
}));
// Input Schema
export interface SqlServerInstancesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const SqlServerInstancesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerInstancesListByResourceGroupInput>;

// Output Schema
export interface SqlServerInstancesListByResourceGroupOutput {
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
  nextLink?: string;
}
export const SqlServerInstancesListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlServerInstancesListByResourceGroupOutput>;

// The operation
/**
 * List sqlServerInstance resources in the resource group
 *
 * Gets all sqlServerInstances in a resource group.
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param api-version - The API version to use for the request
 */
export const SqlServerInstancesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlServerInstancesListByResourceGroupInput,
    outputSchema: SqlServerInstancesListByResourceGroupOutput,
  }));
// Input Schema
export interface SqlServerInstancesPostUpgradeInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerInstanceName: string;
}
export const SqlServerInstancesPostUpgradeInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}/postUpgrade",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerInstancesPostUpgradeInput>;

// Output Schema
export interface SqlServerInstancesPostUpgradeOutput {
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
export const SqlServerInstancesPostUpgradeOutput =
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
  }) as unknown as Schema.Codec<SqlServerInstancesPostUpgradeOutput>;

// The operation
/**
 * Clean up after upgrading.
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlServerInstanceName - Name of SQL Server Instance
 * @param api-version - The API version to use for this operation.
 */
export const SqlServerInstancesPostUpgrade =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlServerInstancesPostUpgradeInput,
    outputSchema: SqlServerInstancesPostUpgradeOutput,
  }));
// Input Schema
export interface SqlServerInstancesPreUpgradeInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerInstanceName: string;
}
export const SqlServerInstancesPreUpgradeInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}/preUpgrade",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerInstancesPreUpgradeInput>;

// Output Schema
export interface SqlServerInstancesPreUpgradeOutput {
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
export const SqlServerInstancesPreUpgradeOutput =
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
  }) as unknown as Schema.Codec<SqlServerInstancesPreUpgradeOutput>;

// The operation
/**
 * Request Upgrade Permission before upgrading.
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlServerInstanceName - Name of SQL Server Instance
 * @param api-version - The API version to use for this operation.
 */
export const SqlServerInstancesPreUpgrade =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlServerInstancesPreUpgradeInput,
    outputSchema: SqlServerInstancesPreUpgradeOutput,
  }));
// Input Schema
export interface SqlServerInstancesRunBestPracticesAssessmentInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerInstanceName: string;
}
export const SqlServerInstancesRunBestPracticesAssessmentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}/runBestPracticesAssessment",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerInstancesRunBestPracticesAssessmentInput>;

// Output Schema
export interface SqlServerInstancesRunBestPracticesAssessmentOutput {
  id?: string;
  instanceName?: string;
  jobStatus?: "NotStarted" | "InProgress" | "Succeeded" | "Failed";
  jobException?: string;
  backgroundJob?: {
    state?:
      | "Enabled"
      | "Disabled"
      | "Deleted"
      | "Completed"
      | "Faulted"
      | "Suspended";
    executionState?: "Waiting" | "Running";
    startTime?: string;
    endTime?: string;
    lastExecutionStatus?:
      | "Succeeded"
      | "Completed"
      | "Failed"
      | "Faulted"
      | "Postponed"
      | "Rescheduled";
    lastExecutionTime?: string;
  };
  sequencerActions?: {
    actionId?: string;
    state?:
      | "NotStarted"
      | "WaitingPredecessors"
      | "ExecutingAction"
      | "CreatingSuccessors"
      | "Completed";
    result?: "NotCompleted" | "Succeeded" | "Failed" | "TimedOut" | "Skipped";
  }[];
}
export const SqlServerInstancesRunBestPracticesAssessmentOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    instanceName: Schema.optional(Schema.String),
    jobStatus: Schema.optional(
      Schema.Literals(["NotStarted", "InProgress", "Succeeded", "Failed"]),
    ),
    jobException: Schema.optional(Schema.String),
    backgroundJob: Schema.optional(
      Schema.Struct({
        state: Schema.optional(
          Schema.Literals([
            "Enabled",
            "Disabled",
            "Deleted",
            "Completed",
            "Faulted",
            "Suspended",
          ]),
        ),
        executionState: Schema.optional(
          Schema.Literals(["Waiting", "Running"]),
        ),
        startTime: Schema.optional(Schema.String),
        endTime: Schema.optional(Schema.String),
        lastExecutionStatus: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Completed",
            "Failed",
            "Faulted",
            "Postponed",
            "Rescheduled",
          ]),
        ),
        lastExecutionTime: Schema.optional(Schema.String),
      }),
    ),
    sequencerActions: Schema.optional(
      Schema.Array(
        Schema.Struct({
          actionId: Schema.optional(Schema.String),
          state: Schema.optional(
            Schema.Literals([
              "NotStarted",
              "WaitingPredecessors",
              "ExecutingAction",
              "CreatingSuccessors",
              "Completed",
            ]),
          ),
          result: Schema.optional(
            Schema.Literals([
              "NotCompleted",
              "Succeeded",
              "Failed",
              "TimedOut",
              "Skipped",
            ]),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<SqlServerInstancesRunBestPracticesAssessmentOutput>;

// The operation
/**
 * The request to run SQL best practices assessment.
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlServerInstanceName - Name of SQL Server Instance
 * @param api-version - The API version to use for the request
 */
export const SqlServerInstancesRunBestPracticesAssessment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlServerInstancesRunBestPracticesAssessmentInput,
    outputSchema: SqlServerInstancesRunBestPracticesAssessmentOutput,
  }));
// Input Schema
export interface SqlServerInstancesRunManagedInstanceLinkAssessmentInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerInstanceName: string;
  azureManagedInstanceResourceId: string;
  azureManagedInstanceRole?: "Primary" | "Secondary";
  databaseNames: string[];
  availabilityGroupName: string;
  distributedAvailabilityGroupName: string;
  assessmentCategories?: (
    | "SqlInstance"
    | "SqlInstanceDatabase"
    | "ManagedInstance"
    | "ManagedInstanceDatabase"
    | "ManagedInstanceCrossValidation"
    | "Certificates"
    | "BoxToMiNetworkConnectivity"
    | "MiToBoxNetworkConnectivity"
    | "SqlInstanceAg"
    | "DagCrossValidation"
  )[];
  sqlServerIpAddress?: string;
}
export const SqlServerInstancesRunManagedInstanceLinkAssessmentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerInstanceName: Schema.String.pipe(T.PathParam()),
    azureManagedInstanceResourceId: Schema.String,
    azureManagedInstanceRole: Schema.optional(
      Schema.Literals(["Primary", "Secondary"]),
    ),
    databaseNames: Schema.Array(Schema.String),
    availabilityGroupName: Schema.String,
    distributedAvailabilityGroupName: Schema.String,
    assessmentCategories: Schema.optional(
      Schema.Array(
        Schema.Literals([
          "SqlInstance",
          "SqlInstanceDatabase",
          "ManagedInstance",
          "ManagedInstanceDatabase",
          "ManagedInstanceCrossValidation",
          "Certificates",
          "BoxToMiNetworkConnectivity",
          "MiToBoxNetworkConnectivity",
          "SqlInstanceAg",
          "DagCrossValidation",
        ]),
      ),
    ),
    sqlServerIpAddress: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}/runManagedInstanceLinkAssessment",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerInstancesRunManagedInstanceLinkAssessmentInput>;

// Output Schema
export interface SqlServerInstancesRunManagedInstanceLinkAssessmentOutput {
  assessments?: {
    name?: string;
    category?:
      | "SqlInstance"
      | "SqlInstanceDatabase"
      | "ManagedInstance"
      | "ManagedInstanceDatabase"
      | "ManagedInstanceCrossValidation"
      | "Certificates"
      | "BoxToMiNetworkConnectivity"
      | "MiToBoxNetworkConnectivity"
      | "SqlInstanceAg"
      | "DagCrossValidation";
    status?: "Success" | "Warning" | "Failure";
    information?: string;
    additionalInformation?: string;
    failingDbs?: string[];
  }[];
}
export const SqlServerInstancesRunManagedInstanceLinkAssessmentOutput =
  /*@__PURE__*/ Schema.Struct({
    assessments: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          category: Schema.optional(
            Schema.Literals([
              "SqlInstance",
              "SqlInstanceDatabase",
              "ManagedInstance",
              "ManagedInstanceDatabase",
              "ManagedInstanceCrossValidation",
              "Certificates",
              "BoxToMiNetworkConnectivity",
              "MiToBoxNetworkConnectivity",
              "SqlInstanceAg",
              "DagCrossValidation",
            ]),
          ),
          status: Schema.optional(
            Schema.Literals(["Success", "Warning", "Failure"]),
          ),
          information: Schema.optional(Schema.String),
          additionalInformation: Schema.optional(Schema.String),
          failingDbs: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<SqlServerInstancesRunManagedInstanceLinkAssessmentOutput>;

// The operation
/**
 * Runs Managed Instance Link assessment for SQL Server instance
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlServerInstanceName - Name of SQL Server Instance
 * @param api-version - The API version to use for this operation.
 * @param azureManagedInstanceResourceId - The Azure SQL Managed Instance resource ID to link with the SQL Server instance.
 * @param azureManagedInstanceRole - The role of managed instance in a distributed availability group, can be Primary or Secondary.
 * @param databaseNames - An array of strings, where each value represents the name of a database to be replicated to the Azure SQL Managed Instance.
 * @param availabilityGroupName - The name of the availability group to be used for the database replication.
 * @param distributedAvailabilityGroupName - The name of the DAG to be used for the database replication. Also referred to as Link Name.
 * @param assessmentCategories - An array of strings, where each value represents the category of the assessment to be run. If this field is not provided, all assessment categories will be run.
 * @param sqlServerIpAddress - The IP address of the SQL Server instance.
 */
export const SqlServerInstancesRunManagedInstanceLinkAssessment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlServerInstancesRunManagedInstanceLinkAssessmentInput,
    outputSchema: SqlServerInstancesRunManagedInstanceLinkAssessmentOutput,
  }));
// Input Schema
export interface SqlServerInstancesRunMigrationAssessmentInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerInstanceName: string;
}
export const SqlServerInstancesRunMigrationAssessmentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}/runMigrationAssessment",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerInstancesRunMigrationAssessmentInput>;

// Output Schema
export interface SqlServerInstancesRunMigrationAssessmentOutput {
  id?: string;
  instanceName?: string;
  jobStatus?: "NotStarted" | "InProgress" | "Succeeded" | "Failed";
  jobException?: string;
  backgroundJob?: {
    state?:
      | "Enabled"
      | "Disabled"
      | "Deleted"
      | "Completed"
      | "Faulted"
      | "Suspended";
    executionState?: "Waiting" | "Running";
    startTime?: string;
    endTime?: string;
    lastExecutionStatus?:
      | "Succeeded"
      | "Completed"
      | "Failed"
      | "Faulted"
      | "Postponed"
      | "Rescheduled";
    lastExecutionTime?: string;
  };
  sequencerActions?: {
    actionId?: string;
    state?:
      | "NotStarted"
      | "WaitingPredecessors"
      | "ExecutingAction"
      | "CreatingSuccessors"
      | "Completed";
    result?: "NotCompleted" | "Succeeded" | "Failed" | "TimedOut" | "Skipped";
  }[];
}
export const SqlServerInstancesRunMigrationAssessmentOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    instanceName: Schema.optional(Schema.String),
    jobStatus: Schema.optional(
      Schema.Literals(["NotStarted", "InProgress", "Succeeded", "Failed"]),
    ),
    jobException: Schema.optional(Schema.String),
    backgroundJob: Schema.optional(
      Schema.Struct({
        state: Schema.optional(
          Schema.Literals([
            "Enabled",
            "Disabled",
            "Deleted",
            "Completed",
            "Faulted",
            "Suspended",
          ]),
        ),
        executionState: Schema.optional(
          Schema.Literals(["Waiting", "Running"]),
        ),
        startTime: Schema.optional(Schema.String),
        endTime: Schema.optional(Schema.String),
        lastExecutionStatus: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Completed",
            "Failed",
            "Faulted",
            "Postponed",
            "Rescheduled",
          ]),
        ),
        lastExecutionTime: Schema.optional(Schema.String),
      }),
    ),
    sequencerActions: Schema.optional(
      Schema.Array(
        Schema.Struct({
          actionId: Schema.optional(Schema.String),
          state: Schema.optional(
            Schema.Literals([
              "NotStarted",
              "WaitingPredecessors",
              "ExecutingAction",
              "CreatingSuccessors",
              "Completed",
            ]),
          ),
          result: Schema.optional(
            Schema.Literals([
              "NotCompleted",
              "Succeeded",
              "Failed",
              "TimedOut",
              "Skipped",
            ]),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<SqlServerInstancesRunMigrationAssessmentOutput>;

// The operation
/**
 * Runs migration assessment for SQL Server instance
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlServerInstanceName - Name of SQL Server Instance
 * @param api-version - The API version to use for the request
 */
export const SqlServerInstancesRunMigrationAssessment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlServerInstancesRunMigrationAssessmentInput,
    outputSchema: SqlServerInstancesRunMigrationAssessmentOutput,
  }));
// Input Schema
export interface SqlServerInstancesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerInstanceName: string;
  tags?: Record<string, string>;
  properties?: {
    version?:
      | "Unknown"
      | "SQL Server 2012"
      | "SQL Server 2014"
      | "SQL Server 2016"
      | "SQL Server 2017"
      | "SQL Server 2019"
      | "SQL Server 2022"
      | "SQL Server 2025";
    edition?:
      | "Evaluation"
      | "Enterprise"
      | "Standard"
      | "Web"
      | "Developer"
      | "Express"
      | "Business Intelligence"
      | "Standard Developer";
    containerResourceId?: string;
    vmId?: string;
    createTime?: string;
    vCore?: string;
    cores?: string;
    status?: "Connected" | "Disconnected" | "Registered" | "Unknown";
    patchLevel?: string;
    collation?: string;
    dbMasterKeyExists?: boolean;
    isHadrEnabled?: boolean;
    traceFlags?: number[];
    currentVersion?: string;
    instanceName?: string;
    tcpDynamicPorts?: string;
    tcpStaticPorts?: string;
    productId?: string;
    licenseType?:
      | "Undefined"
      | "Free"
      | "HADR"
      | "ServerCAL"
      | "LicenseOnly"
      | "PAYG"
      | "Paid"
      | "FabricCapacity";
    azureDefenderStatusLastUpdated?: string;
    azureDefenderStatus?: "Protected" | "Unprotected" | "Unknown";
    provisioningState?: string;
    lastInventoryUploadTime?: string;
    lastUsageUploadTime?: string;
    hostType?:
      | "Azure Virtual Machine"
      | "Azure VMWare Virtual Machine"
      | "Azure Kubernetes Service"
      | "AWS VMWare Virtual Machine"
      | "AWS Kubernetes Service"
      | "GCP VMWare Virtual Machine"
      | "GCP Kubernetes Service"
      | "Container"
      | "Virtual Machine"
      | "Physical Server"
      | "AWS Virtual Machine"
      | "GCP Virtual Machine"
      | "Other";
    alwaysOnRole?:
      | "None"
      | "FailoverClusterInstance"
      | "FailoverClusterNode"
      | "AvailabilityGroupReplica";
    failoverCluster?: {
      id?: string;
      networkName?: string;
      sqlInstanceIds?: string[];
      hostNames?: string[];
      hostIPAddresses?: { ipAddress?: string; subnetMask?: string }[];
    };
    backupPolicy?: {
      retentionPeriodDays?: number;
      fullBackupDays?: number;
      differentialBackupHours?: 12 | 24;
      transactionLogBackupMinutes?: number;
    };
    upgradeLockedUntil?: string;
    monitoring?: { enabled?: boolean };
    migration?: {
      assessment?: {
        enabled?: boolean;
        assessmentUploadTime?: string;
        version?: string;
        settings?: {
          targetLocation?: string;
          percentile?: number;
          lookbackPeriodInDays?: number;
          strategy?: string;
          currency?: string;
          discountPercentage?: number;
          costOptions?: {
            computeAndStorageCostOption?: string;
            sqlLicenseCostOption?: string;
            windowsLicenseCostOption?: string;
          };
        };
        serverAssessments?: {
          appliesToMigrationTargetPlatform?: string;
          featureId?: string;
          impactedObjects?: {
            impactDetail?: string;
            name?: string;
            objectType?: string;
          }[];
          issueCategory?: string;
          moreInformation?: string;
        }[];
        skuRecommendationResults?: {
          azureSqlDatabase?: {
            recommendationStatus?:
              | "NotReady"
              | "Ready"
              | "ReadyWithConditions"
              | "Unknown";
            numberOfServerBlockerIssues?: number;
            monthlyCost?: {
              computeCost?: number;
              storageCost?: number;
              iopsCost?: number;
              sqlLicenseCost?: number;
              windowsLicenseCost?: number;
              totalCost?: number;
            };
            monthlyCostOptions?: {
              keyName?: string;
              keyValue?: {
                computeCost?: number;
                storageCost?: number;
                iopsCost?: number;
              };
            }[];
            targetSku?: {
              category?: {
                computeTier?: string;
                hardwareType?: string;
                sqlPurchasingModel?: string;
                sqlServiceTier?: string;
                zoneRedundancyAvailable?: boolean;
              };
              computeSize?: number;
              storageMaxSizeInMb?: number;
              predictedDataSizeInMb?: number;
              predictedLogSizeInMb?: number;
              maxStorageIops?: number;
              maxThroughputMBps?: number;
            };
          };
          azureSqlManagedInstance?: {
            recommendationStatus?:
              | "NotReady"
              | "Ready"
              | "ReadyWithConditions"
              | "Unknown";
            numberOfServerBlockerIssues?: number;
            monthlyCost?: {
              computeCost?: number;
              storageCost?: number;
              iopsCost?: number;
              sqlLicenseCost?: number;
              windowsLicenseCost?: number;
              totalCost?: number;
            };
            monthlyCostOptions?: {
              keyName?: string;
              keyValue?: {
                computeCost?: number;
                storageCost?: number;
                iopsCost?: number;
              };
            }[];
            targetSku?: {
              category?: {
                computeTier?: string;
                hardwareType?: string;
                sqlPurchasingModel?: string;
                sqlServiceTier?: string;
                zoneRedundancyAvailable?: boolean;
              };
              computeSize?: number;
              storageMaxSizeInMb?: number;
              predictedDataSizeInMb?: number;
              predictedLogSizeInMb?: number;
              maxStorageIops?: number;
              maxThroughputMBps?: number;
            };
          };
          azureSqlVirtualMachine?: {
            recommendationStatus?:
              | "NotReady"
              | "Ready"
              | "ReadyWithConditions"
              | "Unknown";
            numberOfServerBlockerIssues?: number;
            monthlyCost?: {
              computeCost?: number;
              storageCost?: number;
              iopsCost?: number;
              sqlLicenseCost?: number;
              windowsLicenseCost?: number;
              totalCost?: number;
            };
            monthlyCostOptions?: {
              keyName?: string;
              keyValue?: {
                computeCost?: number;
                storageCost?: number;
                iopsCost?: number;
              };
            }[];
            targetSku?: {
              category?: {
                availableVmSkus?: string[];
                virtualMachineFamily?: string;
              };
              computeSize?: number;
              predictedDataSizeInMb?: number;
              predictedLogSizeInMb?: number;
              virtualMachineSize?: {
                virtualMachineFamily?: string;
                sizeName?: string;
                computeSize?: number;
                azureSkuName?: string;
                vCPUsAvailable?: number;
                maxNetworkInterfaces?: number;
              };
              dataDiskSizes?: {
                diskType?: string;
                redundancy?: string;
                size?: string;
                caching?: string;
                maxSizeInGib?: number;
                maxThroughputInMbps?: number;
                maxIops?: number;
              }[];
              logDiskSizes?: {
                diskType?: string;
                redundancy?: string;
                size?: string;
                caching?: string;
                maxSizeInGib?: number;
                maxThroughputInMbps?: number;
                maxIops?: number;
              }[];
              tempDbDiskSizes?: {
                diskType?: string;
                redundancy?: string;
                size?: string;
                caching?: string;
                maxSizeInGib?: number;
                maxThroughputInMbps?: number;
                maxIops?: number;
              }[];
            };
          };
        };
        impactedObjectsSummary?: {
          azureSqlDatabase?: {
            featureId?: string;
            numberImpacted?: number;
            issueCategory?: string;
          }[];
          azureSqlManagedInstance?: {
            featureId?: string;
            numberImpacted?: number;
            issueCategory?: string;
          }[];
        };
      };
    };
    bestPracticesAssessment?: {
      enabled?: boolean;
      schedule?: {
        enabled?: boolean;
        cronTrigger?: {
          startTime?: string;
          timeZone?: string;
          expression?: string;
        };
      };
    };
    clientConnection?: { enabled?: boolean };
    serviceType?: "Engine" | "SSRS" | "SSAS" | "SSIS" | "PBIRS";
    authentication?: {
      mode?: "Mixed" | "Windows" | "Undefined";
      sqlServerEntraIdentity?: {
        identityType?:
          | "SystemAssignedManagedIdentity"
          | "UserAssignedManagedIdentity";
        clientId?: string;
      }[];
    };
    databaseMirroringEndpoint?: {
      endpointName?: string;
      role?: "NONE" | "PARTNER" | "WITNESS" | "ALL";
      isEncryptionEnabled?: boolean;
      encryptionAlgorithm?:
        | "NONE"
        | "RC4"
        | "AES"
        | "NONE, RC4"
        | "NONE, AES"
        | "RC4, AES"
        | "AES, RC4"
        | "NONE, RC4, AES"
        | "NONE, AES, RC4";
      connectionAuth?:
        | "Windows_NTLM"
        | "Windows_Kerberos"
        | "Windows_Negotiate"
        | "Certificate"
        | "Windows_NTLM_Certificate"
        | "Windows_Kerberos_Certificate"
        | "Windows_Negotiate_Certificate"
        | "Certificate_Windows_NTLM"
        | "Certificate_Windows_Kerberos"
        | "Certificate_Windows_Negotiate";
      port?: number;
      isDynamicPort?: boolean;
      ipAddress?: string;
      certificateName?: string;
      certificateExpiryDate?: string;
    };
    isMicrosoftPkiCertTrustConfigured?: boolean;
    isDigiCertPkiCertTrustConfigured?: boolean;
    maxServerMemoryMB?: number;
  };
}
export const SqlServerInstancesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerInstanceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        version: Schema.optional(
          Schema.Literals([
            "Unknown",
            "SQL Server 2012",
            "SQL Server 2014",
            "SQL Server 2016",
            "SQL Server 2017",
            "SQL Server 2019",
            "SQL Server 2022",
            "SQL Server 2025",
          ]),
        ),
        edition: Schema.optional(
          Schema.Literals([
            "Evaluation",
            "Enterprise",
            "Standard",
            "Web",
            "Developer",
            "Express",
            "Business Intelligence",
            "Standard Developer",
          ]),
        ),
        containerResourceId: Schema.optional(Schema.String),
        vmId: Schema.optional(Schema.String),
        createTime: Schema.optional(Schema.String),
        vCore: Schema.optional(Schema.String),
        cores: Schema.optional(Schema.String),
        status: Schema.optional(
          Schema.Literals([
            "Connected",
            "Disconnected",
            "Registered",
            "Unknown",
          ]),
        ),
        patchLevel: Schema.optional(Schema.String),
        collation: Schema.optional(Schema.String),
        dbMasterKeyExists: Schema.optional(Schema.Boolean),
        isHadrEnabled: Schema.optional(Schema.Boolean),
        traceFlags: Schema.optional(Schema.Array(Schema.Number)),
        currentVersion: Schema.optional(Schema.String),
        instanceName: Schema.optional(Schema.String),
        tcpDynamicPorts: Schema.optional(Schema.String),
        tcpStaticPorts: Schema.optional(Schema.String),
        productId: Schema.optional(Schema.String),
        licenseType: Schema.optional(
          Schema.Literals([
            "Undefined",
            "Free",
            "HADR",
            "ServerCAL",
            "LicenseOnly",
            "PAYG",
            "Paid",
            "FabricCapacity",
          ]),
        ),
        azureDefenderStatusLastUpdated: Schema.optional(Schema.String),
        azureDefenderStatus: Schema.optional(
          Schema.Literals(["Protected", "Unprotected", "Unknown"]),
        ),
        provisioningState: Schema.optional(Schema.String),
        lastInventoryUploadTime: Schema.optional(Schema.String),
        lastUsageUploadTime: Schema.optional(Schema.String),
        hostType: Schema.optional(
          Schema.Literals([
            "Azure Virtual Machine",
            "Azure VMWare Virtual Machine",
            "Azure Kubernetes Service",
            "AWS VMWare Virtual Machine",
            "AWS Kubernetes Service",
            "GCP VMWare Virtual Machine",
            "GCP Kubernetes Service",
            "Container",
            "Virtual Machine",
            "Physical Server",
            "AWS Virtual Machine",
            "GCP Virtual Machine",
            "Other",
          ]),
        ),
        alwaysOnRole: Schema.optional(
          Schema.Literals([
            "None",
            "FailoverClusterInstance",
            "FailoverClusterNode",
            "AvailabilityGroupReplica",
          ]),
        ),
        failoverCluster: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            networkName: Schema.optional(Schema.String),
            sqlInstanceIds: Schema.optional(Schema.Array(Schema.String)),
            hostNames: Schema.optional(Schema.Array(Schema.String)),
            hostIPAddresses: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  ipAddress: Schema.optional(Schema.String),
                  subnetMask: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        backupPolicy: Schema.optional(
          Schema.Struct({
            retentionPeriodDays: Schema.optional(Schema.Number),
            fullBackupDays: Schema.optional(Schema.Number),
            differentialBackupHours: Schema.optional(Schema.Literals([12, 24])),
            transactionLogBackupMinutes: Schema.optional(Schema.Number),
          }),
        ),
        upgradeLockedUntil: Schema.optional(Schema.String),
        monitoring: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
          }),
        ),
        migration: Schema.optional(
          Schema.Struct({
            assessment: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
                assessmentUploadTime: Schema.optional(Schema.String),
                version: Schema.optional(Schema.String),
                settings: Schema.optional(
                  Schema.Struct({
                    targetLocation: Schema.optional(Schema.String),
                    percentile: Schema.optional(Schema.Number),
                    lookbackPeriodInDays: Schema.optional(Schema.Number),
                    strategy: Schema.optional(Schema.String),
                    currency: Schema.optional(Schema.String),
                    discountPercentage: Schema.optional(Schema.Number),
                    costOptions: Schema.optional(
                      Schema.Struct({
                        computeAndStorageCostOption: Schema.optional(
                          Schema.String,
                        ),
                        sqlLicenseCostOption: Schema.optional(Schema.String),
                        windowsLicenseCostOption: Schema.optional(
                          Schema.String,
                        ),
                      }),
                    ),
                  }),
                ),
                serverAssessments: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      appliesToMigrationTargetPlatform: Schema.optional(
                        Schema.String,
                      ),
                      featureId: Schema.optional(Schema.String),
                      impactedObjects: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            impactDetail: Schema.optional(Schema.String),
                            name: Schema.optional(Schema.String),
                            objectType: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                      issueCategory: Schema.optional(Schema.String),
                      moreInformation: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                skuRecommendationResults: Schema.optional(
                  Schema.Struct({
                    azureSqlDatabase: Schema.optional(
                      Schema.Struct({
                        recommendationStatus: Schema.optional(
                          Schema.Literals([
                            "NotReady",
                            "Ready",
                            "ReadyWithConditions",
                            "Unknown",
                          ]),
                        ),
                        numberOfServerBlockerIssues: Schema.optional(
                          Schema.Number,
                        ),
                        monthlyCost: Schema.optional(
                          Schema.Struct({
                            computeCost: Schema.optional(Schema.Number),
                            storageCost: Schema.optional(Schema.Number),
                            iopsCost: Schema.optional(Schema.Number),
                            sqlLicenseCost: Schema.optional(Schema.Number),
                            windowsLicenseCost: Schema.optional(Schema.Number),
                            totalCost: Schema.optional(Schema.Number),
                          }),
                        ),
                        monthlyCostOptions: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              keyName: Schema.optional(Schema.String),
                              keyValue: Schema.optional(
                                Schema.Struct({
                                  computeCost: Schema.optional(Schema.Number),
                                  storageCost: Schema.optional(Schema.Number),
                                  iopsCost: Schema.optional(Schema.Number),
                                }),
                              ),
                            }),
                          ),
                        ),
                        targetSku: Schema.optional(
                          Schema.Struct({
                            category: Schema.optional(
                              Schema.Struct({
                                computeTier: Schema.optional(Schema.String),
                                hardwareType: Schema.optional(Schema.String),
                                sqlPurchasingModel: Schema.optional(
                                  Schema.String,
                                ),
                                sqlServiceTier: Schema.optional(Schema.String),
                                zoneRedundancyAvailable: Schema.optional(
                                  Schema.Boolean,
                                ),
                              }),
                            ),
                            computeSize: Schema.optional(Schema.Number),
                            storageMaxSizeInMb: Schema.optional(Schema.Number),
                            predictedDataSizeInMb: Schema.optional(
                              Schema.Number,
                            ),
                            predictedLogSizeInMb: Schema.optional(
                              Schema.Number,
                            ),
                            maxStorageIops: Schema.optional(Schema.Number),
                            maxThroughputMBps: Schema.optional(Schema.Number),
                          }),
                        ),
                      }),
                    ),
                    azureSqlManagedInstance: Schema.optional(
                      Schema.Struct({
                        recommendationStatus: Schema.optional(
                          Schema.Literals([
                            "NotReady",
                            "Ready",
                            "ReadyWithConditions",
                            "Unknown",
                          ]),
                        ),
                        numberOfServerBlockerIssues: Schema.optional(
                          Schema.Number,
                        ),
                        monthlyCost: Schema.optional(
                          Schema.Struct({
                            computeCost: Schema.optional(Schema.Number),
                            storageCost: Schema.optional(Schema.Number),
                            iopsCost: Schema.optional(Schema.Number),
                            sqlLicenseCost: Schema.optional(Schema.Number),
                            windowsLicenseCost: Schema.optional(Schema.Number),
                            totalCost: Schema.optional(Schema.Number),
                          }),
                        ),
                        monthlyCostOptions: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              keyName: Schema.optional(Schema.String),
                              keyValue: Schema.optional(
                                Schema.Struct({
                                  computeCost: Schema.optional(Schema.Number),
                                  storageCost: Schema.optional(Schema.Number),
                                  iopsCost: Schema.optional(Schema.Number),
                                }),
                              ),
                            }),
                          ),
                        ),
                        targetSku: Schema.optional(
                          Schema.Struct({
                            category: Schema.optional(
                              Schema.Struct({
                                computeTier: Schema.optional(Schema.String),
                                hardwareType: Schema.optional(Schema.String),
                                sqlPurchasingModel: Schema.optional(
                                  Schema.String,
                                ),
                                sqlServiceTier: Schema.optional(Schema.String),
                                zoneRedundancyAvailable: Schema.optional(
                                  Schema.Boolean,
                                ),
                              }),
                            ),
                            computeSize: Schema.optional(Schema.Number),
                            storageMaxSizeInMb: Schema.optional(Schema.Number),
                            predictedDataSizeInMb: Schema.optional(
                              Schema.Number,
                            ),
                            predictedLogSizeInMb: Schema.optional(
                              Schema.Number,
                            ),
                            maxStorageIops: Schema.optional(Schema.Number),
                            maxThroughputMBps: Schema.optional(Schema.Number),
                          }),
                        ),
                      }),
                    ),
                    azureSqlVirtualMachine: Schema.optional(
                      Schema.Struct({
                        recommendationStatus: Schema.optional(
                          Schema.Literals([
                            "NotReady",
                            "Ready",
                            "ReadyWithConditions",
                            "Unknown",
                          ]),
                        ),
                        numberOfServerBlockerIssues: Schema.optional(
                          Schema.Number,
                        ),
                        monthlyCost: Schema.optional(
                          Schema.Struct({
                            computeCost: Schema.optional(Schema.Number),
                            storageCost: Schema.optional(Schema.Number),
                            iopsCost: Schema.optional(Schema.Number),
                            sqlLicenseCost: Schema.optional(Schema.Number),
                            windowsLicenseCost: Schema.optional(Schema.Number),
                            totalCost: Schema.optional(Schema.Number),
                          }),
                        ),
                        monthlyCostOptions: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              keyName: Schema.optional(Schema.String),
                              keyValue: Schema.optional(
                                Schema.Struct({
                                  computeCost: Schema.optional(Schema.Number),
                                  storageCost: Schema.optional(Schema.Number),
                                  iopsCost: Schema.optional(Schema.Number),
                                }),
                              ),
                            }),
                          ),
                        ),
                        targetSku: Schema.optional(
                          Schema.Struct({
                            category: Schema.optional(
                              Schema.Struct({
                                availableVmSkus: Schema.optional(
                                  Schema.Array(Schema.String),
                                ),
                                virtualMachineFamily: Schema.optional(
                                  Schema.String,
                                ),
                              }),
                            ),
                            computeSize: Schema.optional(Schema.Number),
                            predictedDataSizeInMb: Schema.optional(
                              Schema.Number,
                            ),
                            predictedLogSizeInMb: Schema.optional(
                              Schema.Number,
                            ),
                            virtualMachineSize: Schema.optional(
                              Schema.Struct({
                                virtualMachineFamily: Schema.optional(
                                  Schema.String,
                                ),
                                sizeName: Schema.optional(Schema.String),
                                computeSize: Schema.optional(Schema.Number),
                                azureSkuName: Schema.optional(Schema.String),
                                vCPUsAvailable: Schema.optional(Schema.Number),
                                maxNetworkInterfaces: Schema.optional(
                                  Schema.Number,
                                ),
                              }),
                            ),
                            dataDiskSizes: Schema.optional(
                              Schema.Array(
                                Schema.Struct({
                                  diskType: Schema.optional(Schema.String),
                                  redundancy: Schema.optional(Schema.String),
                                  size: Schema.optional(Schema.String),
                                  caching: Schema.optional(Schema.String),
                                  maxSizeInGib: Schema.optional(Schema.Number),
                                  maxThroughputInMbps: Schema.optional(
                                    Schema.Number,
                                  ),
                                  maxIops: Schema.optional(Schema.Number),
                                }),
                              ),
                            ),
                            logDiskSizes: Schema.optional(
                              Schema.Array(
                                Schema.Struct({
                                  diskType: Schema.optional(Schema.String),
                                  redundancy: Schema.optional(Schema.String),
                                  size: Schema.optional(Schema.String),
                                  caching: Schema.optional(Schema.String),
                                  maxSizeInGib: Schema.optional(Schema.Number),
                                  maxThroughputInMbps: Schema.optional(
                                    Schema.Number,
                                  ),
                                  maxIops: Schema.optional(Schema.Number),
                                }),
                              ),
                            ),
                            tempDbDiskSizes: Schema.optional(
                              Schema.Array(
                                Schema.Struct({
                                  diskType: Schema.optional(Schema.String),
                                  redundancy: Schema.optional(Schema.String),
                                  size: Schema.optional(Schema.String),
                                  caching: Schema.optional(Schema.String),
                                  maxSizeInGib: Schema.optional(Schema.Number),
                                  maxThroughputInMbps: Schema.optional(
                                    Schema.Number,
                                  ),
                                  maxIops: Schema.optional(Schema.Number),
                                }),
                              ),
                            ),
                          }),
                        ),
                      }),
                    ),
                  }),
                ),
                impactedObjectsSummary: Schema.optional(
                  Schema.Struct({
                    azureSqlDatabase: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          featureId: Schema.optional(Schema.String),
                          numberImpacted: Schema.optional(Schema.Number),
                          issueCategory: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                    azureSqlManagedInstance: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          featureId: Schema.optional(Schema.String),
                          numberImpacted: Schema.optional(Schema.Number),
                          issueCategory: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                  }),
                ),
              }),
            ),
          }),
        ),
        bestPracticesAssessment: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
            schedule: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
                cronTrigger: Schema.optional(
                  Schema.Struct({
                    startTime: Schema.optional(Schema.String),
                    timeZone: Schema.optional(Schema.String),
                    expression: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
          }),
        ),
        clientConnection: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
          }),
        ),
        serviceType: Schema.optional(
          Schema.Literals(["Engine", "SSRS", "SSAS", "SSIS", "PBIRS"]),
        ),
        authentication: Schema.optional(
          Schema.Struct({
            mode: Schema.optional(
              Schema.Literals(["Mixed", "Windows", "Undefined"]),
            ),
            sqlServerEntraIdentity: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  identityType: Schema.optional(
                    Schema.Literals([
                      "SystemAssignedManagedIdentity",
                      "UserAssignedManagedIdentity",
                    ]),
                  ),
                  clientId: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        databaseMirroringEndpoint: Schema.optional(
          Schema.Struct({
            endpointName: Schema.optional(Schema.String),
            role: Schema.optional(
              Schema.Literals(["NONE", "PARTNER", "WITNESS", "ALL"]),
            ),
            isEncryptionEnabled: Schema.optional(Schema.Boolean),
            encryptionAlgorithm: Schema.optional(
              Schema.Literals([
                "NONE",
                "RC4",
                "AES",
                "NONE, RC4",
                "NONE, AES",
                "RC4, AES",
                "AES, RC4",
                "NONE, RC4, AES",
                "NONE, AES, RC4",
              ]),
            ),
            connectionAuth: Schema.optional(
              Schema.Literals([
                "Windows_NTLM",
                "Windows_Kerberos",
                "Windows_Negotiate",
                "Certificate",
                "Windows_NTLM_Certificate",
                "Windows_Kerberos_Certificate",
                "Windows_Negotiate_Certificate",
                "Certificate_Windows_NTLM",
                "Certificate_Windows_Kerberos",
                "Certificate_Windows_Negotiate",
              ]),
            ),
            port: Schema.optional(Schema.Number),
            isDynamicPort: Schema.optional(Schema.Boolean),
            ipAddress: Schema.optional(Schema.String),
            certificateName: Schema.optional(Schema.String),
            certificateExpiryDate: Schema.optional(Schema.String),
          }),
        ),
        isMicrosoftPkiCertTrustConfigured: Schema.optional(Schema.Boolean),
        isDigiCertPkiCertTrustConfigured: Schema.optional(Schema.Boolean),
        maxServerMemoryMB: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerInstancesUpdateInput>;

// Output Schema
export interface SqlServerInstancesUpdateOutput {
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
export const SqlServerInstancesUpdateOutput =
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
  }) as unknown as Schema.Codec<SqlServerInstancesUpdateOutput>;

// The operation
/**
 * Updates a SQL Server Instance resource
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlServerInstanceName - Name of SQL Server Instance
 * @param api-version - The API version to use for the request
 * @param tags - Resource tags.
 * @param properties - null
 */
export const SqlServerInstancesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: SqlServerInstancesUpdateInput,
  outputSchema: SqlServerInstancesUpdateOutput,
}));
// Input Schema
export interface SqlServerLicensesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerLicenseName: string;
  properties: {
    billingPlan: "PAYG" | "Paid";
    physicalCores: number;
    licenseCategory: "Core";
    activationState: "Activated" | "Deactivated";
    scopeType: "Tenant" | "Subscription" | "ResourceGroup";
    lastActivatedAt?: string;
    lastDeactivatedAt?: string;
    tenantId?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const SqlServerLicensesCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerLicenseName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      billingPlan: Schema.Literals(["PAYG", "Paid"]),
      physicalCores: Schema.Number,
      licenseCategory: Schema.Literals(["Core"]),
      activationState: Schema.Literals(["Activated", "Deactivated"]),
      scopeType: Schema.Literals(["Tenant", "Subscription", "ResourceGroup"]),
      lastActivatedAt: Schema.optional(Schema.String),
      lastDeactivatedAt: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerLicenses/{sqlServerLicenseName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerLicensesCreateInput>;

// Output Schema
export interface SqlServerLicensesCreateOutput {
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
export const SqlServerLicensesCreateOutput =
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
  }) as unknown as Schema.Codec<SqlServerLicensesCreateOutput>;

// The operation
/**
 * Creates or replaces a SQL Server license resource
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlServerLicenseName - Name of SQL Server License
 * @param api-version - The API version to use for the request
 * @param properties - SQL Server license properties
 */
export const SqlServerLicensesCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: SqlServerLicensesCreateInput,
  outputSchema: SqlServerLicensesCreateOutput,
}));
// Input Schema
export interface SqlServerLicensesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerLicenseName: string;
}
export const SqlServerLicensesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerLicenseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerLicenses/{sqlServerLicenseName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerLicensesDeleteInput>;

// Output Schema
export type SqlServerLicensesDeleteOutput = void;
export const SqlServerLicensesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SqlServerLicensesDeleteOutput>;

// The operation
/**
 * Deletes a SQL Server license resource
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlServerLicenseName - Name of SQL Server License
 * @param api-version - The API version to use for the request
 */
export const SqlServerLicensesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: SqlServerLicensesDeleteInput,
  outputSchema: SqlServerLicensesDeleteOutput,
}));
// Input Schema
export interface SqlServerLicensesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerLicenseName: string;
}
export const SqlServerLicensesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerLicenseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerLicenses/{sqlServerLicenseName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerLicensesGetInput>;

// Output Schema
export interface SqlServerLicensesGetOutput {
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
export const SqlServerLicensesGetOutput =
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
  }) as unknown as Schema.Codec<SqlServerLicensesGetOutput>;

// The operation
/**
 * Retrieves a SQL Server license resource
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlServerLicenseName - Name of SQL Server License
 * @param api-version - The API version to use for the request
 */
export const SqlServerLicensesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: SqlServerLicensesGetInput,
  outputSchema: SqlServerLicensesGetOutput,
}));
// Input Schema
export interface SqlServerLicensesListInput {
  subscriptionId: string;
}
export const SqlServerLicensesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureArcData/sqlServerLicenses",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerLicensesListInput>;

// Output Schema
export interface SqlServerLicensesListOutput {
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
  nextLink?: string;
}
export const SqlServerLicensesListOutput =
  /*@__PURE__*/ Schema.Struct({
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlServerLicensesListOutput>;

// The operation
/**
 * List sqlServerLicense resources in the subscription
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param api-version - The API version to use for the request
 */
export const SqlServerLicensesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: SqlServerLicensesListInput,
  outputSchema: SqlServerLicensesListOutput,
}));
// Input Schema
export interface SqlServerLicensesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const SqlServerLicensesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerLicenses",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerLicensesListByResourceGroupInput>;

// Output Schema
export interface SqlServerLicensesListByResourceGroupOutput {
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
  nextLink?: string;
}
export const SqlServerLicensesListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlServerLicensesListByResourceGroupOutput>;

// The operation
/**
 * List sqlServerLicense resources in the resource group
 *
 * Gets all sqlServerLicenses in a resource group.
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param api-version - The API version to use for the request
 */
export const SqlServerLicensesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlServerLicensesListByResourceGroupInput,
    outputSchema: SqlServerLicensesListByResourceGroupOutput,
  }));
// Input Schema
export interface SqlServerLicensesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlServerLicenseName: string;
  tags?: Record<string, string>;
  properties?: {
    billingPlan?: "PAYG" | "Paid";
    physicalCores?: number;
    licenseCategory?: "Core";
    activationState?: "Activated" | "Deactivated";
    scopeType?: "Tenant" | "Subscription" | "ResourceGroup";
    lastActivatedAt?: string;
    lastDeactivatedAt?: string;
    tenantId?: string;
  };
}
export const SqlServerLicensesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlServerLicenseName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        billingPlan: Schema.optional(Schema.Literals(["PAYG", "Paid"])),
        physicalCores: Schema.optional(Schema.Number),
        licenseCategory: Schema.optional(Schema.Literals(["Core"])),
        activationState: Schema.optional(
          Schema.Literals(["Activated", "Deactivated"]),
        ),
        scopeType: Schema.optional(
          Schema.Literals(["Tenant", "Subscription", "ResourceGroup"]),
        ),
        lastActivatedAt: Schema.optional(Schema.String),
        lastDeactivatedAt: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerLicenses/{sqlServerLicenseName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SqlServerLicensesUpdateInput>;

// Output Schema
export interface SqlServerLicensesUpdateOutput {
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
export const SqlServerLicensesUpdateOutput =
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
  }) as unknown as Schema.Codec<SqlServerLicensesUpdateOutput>;

// The operation
/**
 * Updates a SQL Server license resource
 *
 * @param subscriptionId - The ID of the Azure subscription
 * @param resourceGroupName - The name of the Azure resource group
 * @param sqlServerLicenseName - Name of SQL Server License
 * @param api-version - The API version to use for the request
 * @param tags - Resource tags.
 * @param properties - null
 */
export const SqlServerLicensesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: SqlServerLicensesUpdateInput,
  outputSchema: SqlServerLicensesUpdateOutput,
}));
