/**
 * Azure Redhatopenshift API
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
export interface OpenShiftClustersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  properties?: {
    provisioningState?:
      | "AdminUpdating"
      | "Canceled"
      | "Creating"
      | "Deleting"
      | "Failed"
      | "Succeeded"
      | "Updating";
    clusterProfile?: {
      pullSecret?: string;
      domain?: string;
      version?: string;
      resourceGroupId?: string;
      fipsValidatedModules?: "Disabled" | "Enabled";
      oidcIssuer?: string;
    };
    consoleProfile?: { url?: string };
    servicePrincipalProfile?: {
      clientId?: string;
      clientSecret?: string | Redacted.Redacted<string>;
    };
    platformWorkloadIdentityProfile?: {
      upgradeableTo?: string;
      platformWorkloadIdentities?: Record<
        string,
        { resourceId?: string; clientId?: string; objectId?: string }
      >;
    };
    networkProfile?: {
      podCidr?: string;
      serviceCidr?: string;
      outboundType?: "Loadbalancer" | "UserDefinedRouting";
      loadBalancerProfile?: {
        managedOutboundIps?: { count?: number };
        effectiveOutboundIps?: { id?: string }[];
      };
      preconfiguredNSG?: "Disabled" | "Enabled";
    };
    masterProfile?: {
      vmSize?: string;
      subnetId?: string;
      encryptionAtHost?: "Disabled" | "Enabled";
      diskEncryptionSetId?: string;
    };
    workerProfiles?: {
      name?: string;
      vmSize?: string;
      diskSizeGB?: number;
      subnetId?: string;
      count?: number;
      encryptionAtHost?: "Disabled" | "Enabled";
      diskEncryptionSetId?: string;
    }[];
    workerProfilesStatus?: {
      name?: string;
      vmSize?: string;
      diskSizeGB?: number;
      subnetId?: string;
      count?: number;
      encryptionAtHost?: "Disabled" | "Enabled";
      diskEncryptionSetId?: string;
    }[];
    apiserverProfile?: {
      visibility?: "Private" | "Public";
      url?: string;
      ip?: string;
    };
    ingressProfiles?: {
      name?: string;
      visibility?: "Private" | "Public";
      ip?: string;
    }[];
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  tags?: Record<string, string>;
  location: string;
}
export const OpenShiftClustersCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "AdminUpdating",
            "Canceled",
            "Creating",
            "Deleting",
            "Failed",
            "Succeeded",
            "Updating",
          ]),
        ),
        clusterProfile: Schema.optional(
          Schema.Struct({
            pullSecret: Schema.optional(Schema.String),
            domain: Schema.optional(Schema.String),
            version: Schema.optional(Schema.String),
            resourceGroupId: Schema.optional(Schema.String),
            fipsValidatedModules: Schema.optional(
              Schema.Literals(["Disabled", "Enabled"]),
            ),
            oidcIssuer: Schema.optional(Schema.String),
          }),
        ),
        consoleProfile: Schema.optional(
          Schema.Struct({
            url: Schema.optional(Schema.String),
          }),
        ),
        servicePrincipalProfile: Schema.optional(
          Schema.Struct({
            clientId: Schema.optional(Schema.String),
            clientSecret: Schema.optional(SensitiveString),
          }),
        ),
        platformWorkloadIdentityProfile: Schema.optional(
          Schema.Struct({
            upgradeableTo: Schema.optional(Schema.String),
            platformWorkloadIdentities: Schema.optional(
              Schema.Record(
                Schema.String,
                Schema.Struct({
                  resourceId: Schema.optional(Schema.String),
                  clientId: Schema.optional(Schema.String),
                  objectId: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        networkProfile: Schema.optional(
          Schema.Struct({
            podCidr: Schema.optional(Schema.String),
            serviceCidr: Schema.optional(Schema.String),
            outboundType: Schema.optional(
              Schema.Literals(["Loadbalancer", "UserDefinedRouting"]),
            ),
            loadBalancerProfile: Schema.optional(
              Schema.Struct({
                managedOutboundIps: Schema.optional(
                  Schema.Struct({
                    count: Schema.optional(Schema.Number),
                  }),
                ),
                effectiveOutboundIps: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      id: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
            preconfiguredNSG: Schema.optional(
              Schema.Literals(["Disabled", "Enabled"]),
            ),
          }),
        ),
        masterProfile: Schema.optional(
          Schema.Struct({
            vmSize: Schema.optional(Schema.String),
            subnetId: Schema.optional(Schema.String),
            encryptionAtHost: Schema.optional(
              Schema.Literals(["Disabled", "Enabled"]),
            ),
            diskEncryptionSetId: Schema.optional(Schema.String),
          }),
        ),
        workerProfiles: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              vmSize: Schema.optional(Schema.String),
              diskSizeGB: Schema.optional(Schema.Number),
              subnetId: Schema.optional(Schema.String),
              count: Schema.optional(Schema.Number),
              encryptionAtHost: Schema.optional(
                Schema.Literals(["Disabled", "Enabled"]),
              ),
              diskEncryptionSetId: Schema.optional(Schema.String),
            }),
          ),
        ),
        workerProfilesStatus: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              vmSize: Schema.optional(Schema.String),
              diskSizeGB: Schema.optional(Schema.Number),
              subnetId: Schema.optional(Schema.String),
              count: Schema.optional(Schema.Number),
              encryptionAtHost: Schema.optional(
                Schema.Literals(["Disabled", "Enabled"]),
              ),
              diskEncryptionSetId: Schema.optional(Schema.String),
            }),
          ),
        ),
        apiserverProfile: Schema.optional(
          Schema.Struct({
            visibility: Schema.optional(Schema.Literals(["Private", "Public"])),
            url: Schema.optional(Schema.String),
            ip: Schema.optional(Schema.String),
          }),
        ),
        ingressProfiles: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              visibility: Schema.optional(
                Schema.Literals(["Private", "Public"]),
              ),
              ip: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
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
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RedHatOpenShift/openShiftClusters/{resourceName}",
      apiVersion: "2025-07-25",
    }),
  ) as unknown as Schema.Codec<OpenShiftClustersCreateOrUpdateInput>;

// Output Schema
export interface OpenShiftClustersCreateOrUpdateOutput {
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
export const OpenShiftClustersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<OpenShiftClustersCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a OpenShift cluster with the specified subscription, resource group and resource name.
 *
 * The operation returns properties of a OpenShift cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the OpenShift cluster resource.
 */
export const OpenShiftClustersCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: OpenShiftClustersCreateOrUpdateInput,
    outputSchema: OpenShiftClustersCreateOrUpdateOutput,
  }));
// Input Schema
export interface OpenShiftClustersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const OpenShiftClustersDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RedHatOpenShift/openShiftClusters/{resourceName}",
      apiVersion: "2025-07-25",
    }),
  ) as unknown as Schema.Codec<OpenShiftClustersDeleteInput>;

// Output Schema
export type OpenShiftClustersDeleteOutput = void;
export const OpenShiftClustersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<OpenShiftClustersDeleteOutput>;

// The operation
/**
 * Deletes a OpenShift cluster with the specified subscription, resource group and resource name.
 *
 * The operation returns nothing.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the OpenShift cluster resource.
 */
export const OpenShiftClustersDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: OpenShiftClustersDeleteInput,
  outputSchema: OpenShiftClustersDeleteOutput,
}));
// Input Schema
export interface OpenShiftClustersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const OpenShiftClustersGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RedHatOpenShift/openShiftClusters/{resourceName}",
      apiVersion: "2025-07-25",
    }),
  ) as unknown as Schema.Codec<OpenShiftClustersGetInput>;

// Output Schema
export interface OpenShiftClustersGetOutput {
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
export const OpenShiftClustersGetOutput =
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
  }) as unknown as Schema.Codec<OpenShiftClustersGetOutput>;

// The operation
/**
 * Gets a OpenShift cluster with the specified subscription, resource group and resource name.
 *
 * The operation returns properties of a OpenShift cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the OpenShift cluster resource.
 */
export const OpenShiftClustersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: OpenShiftClustersGetInput,
  outputSchema: OpenShiftClustersGetOutput,
}));
// Input Schema
export interface OpenShiftClustersListInput {
  subscriptionId: string;
}
export const OpenShiftClustersListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.RedHatOpenShift/openShiftClusters",
      apiVersion: "2025-07-25",
    }),
  ) as unknown as Schema.Codec<OpenShiftClustersListInput>;

// Output Schema
export interface OpenShiftClustersListOutput {
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
export const OpenShiftClustersListOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<OpenShiftClustersListOutput>;

// The operation
/**
 * Lists OpenShift clusters in the specified subscription.
 *
 * The operation returns properties of each OpenShift cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const OpenShiftClustersList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OpenShiftClustersListInput,
  outputSchema: OpenShiftClustersListOutput,
}));
// Input Schema
export interface OpenShiftClustersListAdminCredentialsInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const OpenShiftClustersListAdminCredentialsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RedHatOpenShift/openShiftClusters/{resourceName}/listAdminCredentials",
      apiVersion: "2025-07-25",
    }),
  ) as unknown as Schema.Codec<OpenShiftClustersListAdminCredentialsInput>;

// Output Schema
export interface OpenShiftClustersListAdminCredentialsOutput {
  kubeconfig?: string;
}
export const OpenShiftClustersListAdminCredentialsOutput =
  /*@__PURE__*/ Schema.Struct({
    kubeconfig: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<OpenShiftClustersListAdminCredentialsOutput>;

// The operation
/**
 * Lists admin kubeconfig of an OpenShift cluster with the specified subscription, resource group and resource name.
 *
 * The operation returns the admin kubeconfig.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the OpenShift cluster resource.
 */
export const OpenShiftClustersListAdminCredentials =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: OpenShiftClustersListAdminCredentialsInput,
    outputSchema: OpenShiftClustersListAdminCredentialsOutput,
  }));
// Input Schema
export interface OpenShiftClustersListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const OpenShiftClustersListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RedHatOpenShift/openShiftClusters",
      apiVersion: "2025-07-25",
    }),
  ) as unknown as Schema.Codec<OpenShiftClustersListByResourceGroupInput>;

// Output Schema
export interface OpenShiftClustersListByResourceGroupOutput {
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
export const OpenShiftClustersListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<OpenShiftClustersListByResourceGroupOutput>;

// The operation
/**
 * Lists OpenShift clusters in the specified subscription and resource group.
 *
 * The operation returns properties of each OpenShift cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const OpenShiftClustersListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: OpenShiftClustersListByResourceGroupInput,
    outputSchema: OpenShiftClustersListByResourceGroupOutput,
  }));
// Input Schema
export interface OpenShiftClustersListCredentialsInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const OpenShiftClustersListCredentialsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RedHatOpenShift/openShiftClusters/{resourceName}/listCredentials",
      apiVersion: "2025-07-25",
    }),
  ) as unknown as Schema.Codec<OpenShiftClustersListCredentialsInput>;

// Output Schema
export interface OpenShiftClustersListCredentialsOutput {
  kubeadminUsername?: string;
  kubeadminPassword?: Redacted.Redacted<string>;
}
export const OpenShiftClustersListCredentialsOutput =
  /*@__PURE__*/ Schema.Struct({
    kubeadminUsername: Schema.optional(Schema.String),
    kubeadminPassword: Schema.optional(SensitiveOutputString),
  }) as unknown as Schema.Codec<OpenShiftClustersListCredentialsOutput>;

// The operation
/**
 * Lists credentials of an OpenShift cluster with the specified subscription, resource group and resource name.
 *
 * The operation returns the credentials.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the OpenShift cluster resource.
 */
export const OpenShiftClustersListCredentials =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: OpenShiftClustersListCredentialsInput,
    outputSchema: OpenShiftClustersListCredentialsOutput,
  }));
// Input Schema
export interface OpenShiftClustersUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  tags?: Record<string, string>;
  properties?: {
    provisioningState?:
      | "AdminUpdating"
      | "Canceled"
      | "Creating"
      | "Deleting"
      | "Failed"
      | "Succeeded"
      | "Updating";
    clusterProfile?: {
      pullSecret?: string;
      domain?: string;
      version?: string;
      resourceGroupId?: string;
      fipsValidatedModules?: "Disabled" | "Enabled";
      oidcIssuer?: string;
    };
    consoleProfile?: { url?: string };
    servicePrincipalProfile?: {
      clientId?: string;
      clientSecret?: string | Redacted.Redacted<string>;
    };
    platformWorkloadIdentityProfile?: {
      upgradeableTo?: string;
      platformWorkloadIdentities?: Record<
        string,
        { resourceId?: string; clientId?: string; objectId?: string }
      >;
    };
    networkProfile?: {
      podCidr?: string;
      serviceCidr?: string;
      outboundType?: "Loadbalancer" | "UserDefinedRouting";
      loadBalancerProfile?: {
        managedOutboundIps?: { count?: number };
        effectiveOutboundIps?: { id?: string }[];
      };
      preconfiguredNSG?: "Disabled" | "Enabled";
    };
    masterProfile?: {
      vmSize?: string;
      subnetId?: string;
      encryptionAtHost?: "Disabled" | "Enabled";
      diskEncryptionSetId?: string;
    };
    workerProfiles?: {
      name?: string;
      vmSize?: string;
      diskSizeGB?: number;
      subnetId?: string;
      count?: number;
      encryptionAtHost?: "Disabled" | "Enabled";
      diskEncryptionSetId?: string;
    }[];
    workerProfilesStatus?: {
      name?: string;
      vmSize?: string;
      diskSizeGB?: number;
      subnetId?: string;
      count?: number;
      encryptionAtHost?: "Disabled" | "Enabled";
      diskEncryptionSetId?: string;
    }[];
    apiserverProfile?: {
      visibility?: "Private" | "Public";
      url?: string;
      ip?: string;
    };
    ingressProfiles?: {
      name?: string;
      visibility?: "Private" | "Public";
      ip?: string;
    }[];
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const OpenShiftClustersUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "AdminUpdating",
            "Canceled",
            "Creating",
            "Deleting",
            "Failed",
            "Succeeded",
            "Updating",
          ]),
        ),
        clusterProfile: Schema.optional(
          Schema.Struct({
            pullSecret: Schema.optional(Schema.String),
            domain: Schema.optional(Schema.String),
            version: Schema.optional(Schema.String),
            resourceGroupId: Schema.optional(Schema.String),
            fipsValidatedModules: Schema.optional(
              Schema.Literals(["Disabled", "Enabled"]),
            ),
            oidcIssuer: Schema.optional(Schema.String),
          }),
        ),
        consoleProfile: Schema.optional(
          Schema.Struct({
            url: Schema.optional(Schema.String),
          }),
        ),
        servicePrincipalProfile: Schema.optional(
          Schema.Struct({
            clientId: Schema.optional(Schema.String),
            clientSecret: Schema.optional(SensitiveString),
          }),
        ),
        platformWorkloadIdentityProfile: Schema.optional(
          Schema.Struct({
            upgradeableTo: Schema.optional(Schema.String),
            platformWorkloadIdentities: Schema.optional(
              Schema.Record(
                Schema.String,
                Schema.Struct({
                  resourceId: Schema.optional(Schema.String),
                  clientId: Schema.optional(Schema.String),
                  objectId: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        networkProfile: Schema.optional(
          Schema.Struct({
            podCidr: Schema.optional(Schema.String),
            serviceCidr: Schema.optional(Schema.String),
            outboundType: Schema.optional(
              Schema.Literals(["Loadbalancer", "UserDefinedRouting"]),
            ),
            loadBalancerProfile: Schema.optional(
              Schema.Struct({
                managedOutboundIps: Schema.optional(
                  Schema.Struct({
                    count: Schema.optional(Schema.Number),
                  }),
                ),
                effectiveOutboundIps: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      id: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
            preconfiguredNSG: Schema.optional(
              Schema.Literals(["Disabled", "Enabled"]),
            ),
          }),
        ),
        masterProfile: Schema.optional(
          Schema.Struct({
            vmSize: Schema.optional(Schema.String),
            subnetId: Schema.optional(Schema.String),
            encryptionAtHost: Schema.optional(
              Schema.Literals(["Disabled", "Enabled"]),
            ),
            diskEncryptionSetId: Schema.optional(Schema.String),
          }),
        ),
        workerProfiles: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              vmSize: Schema.optional(Schema.String),
              diskSizeGB: Schema.optional(Schema.Number),
              subnetId: Schema.optional(Schema.String),
              count: Schema.optional(Schema.Number),
              encryptionAtHost: Schema.optional(
                Schema.Literals(["Disabled", "Enabled"]),
              ),
              diskEncryptionSetId: Schema.optional(Schema.String),
            }),
          ),
        ),
        workerProfilesStatus: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              vmSize: Schema.optional(Schema.String),
              diskSizeGB: Schema.optional(Schema.Number),
              subnetId: Schema.optional(Schema.String),
              count: Schema.optional(Schema.Number),
              encryptionAtHost: Schema.optional(
                Schema.Literals(["Disabled", "Enabled"]),
              ),
              diskEncryptionSetId: Schema.optional(Schema.String),
            }),
          ),
        ),
        apiserverProfile: Schema.optional(
          Schema.Struct({
            visibility: Schema.optional(Schema.Literals(["Private", "Public"])),
            url: Schema.optional(Schema.String),
            ip: Schema.optional(Schema.String),
          }),
        ),
        ingressProfiles: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              visibility: Schema.optional(
                Schema.Literals(["Private", "Public"]),
              ),
              ip: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
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
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RedHatOpenShift/openShiftClusters/{resourceName}",
      apiVersion: "2025-07-25",
    }),
  ) as unknown as Schema.Codec<OpenShiftClustersUpdateInput>;

// Output Schema
export interface OpenShiftClustersUpdateOutput {
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
export const OpenShiftClustersUpdateOutput =
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
  }) as unknown as Schema.Codec<OpenShiftClustersUpdateOutput>;

// The operation
/**
 * Creates or updates a OpenShift cluster with the specified subscription, resource group and resource name.
 *
 * The operation returns properties of a OpenShift cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the OpenShift cluster resource.
 */
export const OpenShiftClustersUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: OpenShiftClustersUpdateInput,
  outputSchema: OpenShiftClustersUpdateOutput,
}));
// Input Schema
export interface OpenShiftVersionsGetInput {
  subscriptionId: string;
  location: string;
  openShiftVersion: string;
}
export const OpenShiftVersionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    openShiftVersion: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.RedHatOpenShift/locations/{location}/openShiftVersions/{openShiftVersion}",
      apiVersion: "2025-07-25",
    }),
  ) as unknown as Schema.Codec<OpenShiftVersionsGetInput>;

// Output Schema
export interface OpenShiftVersionsGetOutput {
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
export const OpenShiftVersionsGetOutput =
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
  }) as unknown as Schema.Codec<OpenShiftVersionsGetOutput>;

// The operation
/**
 * Gets an available OpenShift version to install in the specified location.
 *
 * This operation returns installable OpenShift version as a string.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param openShiftVersion - The desired version value of the OpenShiftVersion resource.
 */
export const OpenShiftVersionsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: OpenShiftVersionsGetInput,
  outputSchema: OpenShiftVersionsGetOutput,
}));
// Input Schema
export interface OpenShiftVersionsListInput {
  subscriptionId: string;
  location: string;
}
export const OpenShiftVersionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.RedHatOpenShift/locations/{location}/openShiftVersions",
      apiVersion: "2025-07-25",
    }),
  ) as unknown as Schema.Codec<OpenShiftVersionsListInput>;

// Output Schema
export interface OpenShiftVersionsListOutput {
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
export const OpenShiftVersionsListOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<OpenShiftVersionsListOutput>;

// The operation
/**
 * Lists all OpenShift versions available to install in the specified location.
 *
 * The operation returns the installable OpenShift versions as a string.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const OpenShiftVersionsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OpenShiftVersionsListInput,
  outputSchema: OpenShiftVersionsListOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.RedHatOpenShift/operations",
    apiVersion: "2025-07-25",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value: {
    name?: string;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
    origin?: string;
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.Array(
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
      origin: Schema.optional(Schema.String),
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
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PlatformWorkloadIdentityRoleSetGetInput {
  subscriptionId: string;
  location: string;
  openShiftMinorVersion: string;
}
export const PlatformWorkloadIdentityRoleSetGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    openShiftMinorVersion: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.RedHatOpenShift/locations/{location}/platformWorkloadIdentityRoleSets/{openShiftMinorVersion}",
      apiVersion: "2025-07-25",
    }),
  ) as unknown as Schema.Codec<PlatformWorkloadIdentityRoleSetGetInput>;

// Output Schema
export interface PlatformWorkloadIdentityRoleSetGetOutput {
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
export const PlatformWorkloadIdentityRoleSetGetOutput =
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
  }) as unknown as Schema.Codec<PlatformWorkloadIdentityRoleSetGetOutput>;

// The operation
/**
 * Gets a mapping of an OpenShift version to identity requirements, which includes operatorName, roleDefinitionName, roleDefinitionId, and serviceAccounts.
 *
 * This operation returns Platform Workload Identity Role Set as a string
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param openShiftMinorVersion - The desired version value of the PlatformWorkloadIdentityRoleSet resource.
 */
export const PlatformWorkloadIdentityRoleSetGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PlatformWorkloadIdentityRoleSetGetInput,
    outputSchema: PlatformWorkloadIdentityRoleSetGetOutput,
  }));
// Input Schema
export interface PlatformWorkloadIdentityRoleSetsListInput {
  subscriptionId: string;
  location: string;
}
export const PlatformWorkloadIdentityRoleSetsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.RedHatOpenShift/locations/{location}/platformWorkloadIdentityRoleSets",
      apiVersion: "2025-07-25",
    }),
  ) as unknown as Schema.Codec<PlatformWorkloadIdentityRoleSetsListInput>;

// Output Schema
export interface PlatformWorkloadIdentityRoleSetsListOutput {
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
export const PlatformWorkloadIdentityRoleSetsListOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PlatformWorkloadIdentityRoleSetsListOutput>;

// The operation
/**
 * Lists a mapping of OpenShift versions to identity requirements, which include operatorName, roleDefinitionName, roleDefinitionId, and serviceAccounts.
 *
 * This operation returns a list of Platform Workload Identity Role Sets as a string
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const PlatformWorkloadIdentityRoleSetsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PlatformWorkloadIdentityRoleSetsListInput,
    outputSchema: PlatformWorkloadIdentityRoleSetsListOutput,
  }));
