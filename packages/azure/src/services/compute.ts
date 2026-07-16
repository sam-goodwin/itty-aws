/**
 * Azure Compute API
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
export interface ContainerServicesCreateOrUpdateInput {
  resourceGroupName: string;
  containerServiceName: string;
  subscriptionId: string;
  properties?: {
    provisioningState?: string;
    orchestratorProfile?: {
      orchestratorType: "Swarm" | "DCOS" | "Custom" | "Kubernetes";
    };
    customProfile?: { orchestrator: string };
    servicePrincipalProfile?: {
      clientId: string;
      secret: string | Redacted.Redacted<string>;
    };
    masterProfile: { count?: 1 | 3 | 5; dnsPrefix: string; fqdn?: string };
    agentPoolProfiles: {
      name: string;
      count: number;
      vmSize:
        | "Standard_A0"
        | "Standard_A1"
        | "Standard_A2"
        | "Standard_A3"
        | "Standard_A4"
        | "Standard_A5"
        | "Standard_A6"
        | "Standard_A7"
        | "Standard_A8"
        | "Standard_A9"
        | "Standard_A10"
        | "Standard_A11"
        | "Standard_D1"
        | "Standard_D2"
        | "Standard_D3"
        | "Standard_D4"
        | "Standard_D11"
        | "Standard_D12"
        | "Standard_D13"
        | "Standard_D14"
        | "Standard_D1_v2"
        | "Standard_D2_v2"
        | "Standard_D3_v2"
        | "Standard_D4_v2"
        | "Standard_D5_v2"
        | "Standard_D11_v2"
        | "Standard_D12_v2"
        | "Standard_D13_v2"
        | "Standard_D14_v2"
        | "Standard_G1"
        | "Standard_G2"
        | "Standard_G3"
        | "Standard_G4"
        | "Standard_G5"
        | "Standard_DS1"
        | "Standard_DS2"
        | "Standard_DS3"
        | "Standard_DS4"
        | "Standard_DS11"
        | "Standard_DS12"
        | "Standard_DS13"
        | "Standard_DS14"
        | "Standard_GS1"
        | "Standard_GS2"
        | "Standard_GS3"
        | "Standard_GS4"
        | "Standard_GS5";
      dnsPrefix: string;
      fqdn?: string;
    }[];
    windowsProfile?: {
      adminUsername: string;
      adminPassword: string | Redacted.Redacted<string>;
    };
    linuxProfile: {
      adminUsername: string;
      ssh: { publicKeys: { keyData: string }[] };
    };
    diagnosticsProfile?: {
      vmDiagnostics: { enabled: boolean; storageUri?: string };
    };
  };
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string>;
}
export const ContainerServicesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerServiceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(Schema.String),
        orchestratorProfile: Schema.optional(
          Schema.Struct({
            orchestratorType: Schema.Literals([
              "Swarm",
              "DCOS",
              "Custom",
              "Kubernetes",
            ]),
          }),
        ),
        customProfile: Schema.optional(
          Schema.Struct({
            orchestrator: Schema.String,
          }),
        ),
        servicePrincipalProfile: Schema.optional(
          Schema.Struct({
            clientId: Schema.String,
            secret: SensitiveString,
          }),
        ),
        masterProfile: Schema.Struct({
          count: Schema.optional(Schema.Literals([1, 3, 5])),
          dnsPrefix: Schema.String,
          fqdn: Schema.optional(Schema.String),
        }),
        agentPoolProfiles: Schema.Array(
          Schema.Struct({
            name: Schema.String,
            count: Schema.Number,
            vmSize: Schema.Literals([
              "Standard_A0",
              "Standard_A1",
              "Standard_A2",
              "Standard_A3",
              "Standard_A4",
              "Standard_A5",
              "Standard_A6",
              "Standard_A7",
              "Standard_A8",
              "Standard_A9",
              "Standard_A10",
              "Standard_A11",
              "Standard_D1",
              "Standard_D2",
              "Standard_D3",
              "Standard_D4",
              "Standard_D11",
              "Standard_D12",
              "Standard_D13",
              "Standard_D14",
              "Standard_D1_v2",
              "Standard_D2_v2",
              "Standard_D3_v2",
              "Standard_D4_v2",
              "Standard_D5_v2",
              "Standard_D11_v2",
              "Standard_D12_v2",
              "Standard_D13_v2",
              "Standard_D14_v2",
              "Standard_G1",
              "Standard_G2",
              "Standard_G3",
              "Standard_G4",
              "Standard_G5",
              "Standard_DS1",
              "Standard_DS2",
              "Standard_DS3",
              "Standard_DS4",
              "Standard_DS11",
              "Standard_DS12",
              "Standard_DS13",
              "Standard_DS14",
              "Standard_GS1",
              "Standard_GS2",
              "Standard_GS3",
              "Standard_GS4",
              "Standard_GS5",
            ]),
            dnsPrefix: Schema.String,
            fqdn: Schema.optional(Schema.String),
          }),
        ),
        windowsProfile: Schema.optional(
          Schema.Struct({
            adminUsername: Schema.String,
            adminPassword: SensitiveString,
          }),
        ),
        linuxProfile: Schema.Struct({
          adminUsername: Schema.String,
          ssh: Schema.Struct({
            publicKeys: Schema.Array(
              Schema.Struct({
                keyData: Schema.String,
              }),
            ),
          }),
        }),
        diagnosticsProfile: Schema.optional(
          Schema.Struct({
            vmDiagnostics: Schema.Struct({
              enabled: Schema.Boolean,
              storageUri: Schema.optional(Schema.String),
            }),
          }),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/containerServices/{containerServiceName}",
      apiVersion: "2017-01-31",
    }),
  ) as unknown as Schema.Codec<ContainerServicesCreateOrUpdateInput>;

// Output Schema
export interface ContainerServicesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string>;
}
export const ContainerServicesCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<ContainerServicesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a container service.
 *
 * Creates or updates a container service with the specified configuration of orchestrator, masters, and agents.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param containerServiceName - The name of the container service in the specified subscription and resource group.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ContainerServicesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ContainerServicesCreateOrUpdateInput,
    outputSchema: ContainerServicesCreateOrUpdateOutput,
  }));
// Input Schema
export interface ContainerServicesDeleteInput {
  resourceGroupName: string;
  containerServiceName: string;
  subscriptionId: string;
}
export const ContainerServicesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerServiceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/containerServices/{containerServiceName}",
      apiVersion: "2017-01-31",
    }),
  ) as unknown as Schema.Codec<ContainerServicesDeleteInput>;

// Output Schema
export type ContainerServicesDeleteOutput = void;
export const ContainerServicesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ContainerServicesDeleteOutput>;

// The operation
/**
 * Deletes the specified container service.
 *
 * Deletes the specified container service in the specified subscription and resource group. The operation does not delete other resources created as part of creating a container service, including storage accounts, VMs, and availability sets. All the other resources created with the container service are part of the same resource group and can be deleted individually.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param containerServiceName - The name of the container service in the specified subscription and resource group.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ContainerServicesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ContainerServicesDeleteInput,
  outputSchema: ContainerServicesDeleteOutput,
}));
// Input Schema
export interface ContainerServicesGetInput {
  resourceGroupName: string;
  containerServiceName: string;
  subscriptionId: string;
}
export const ContainerServicesGetInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerServiceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/containerServices/{containerServiceName}",
      apiVersion: "2017-01-31",
    }),
  ) as unknown as Schema.Codec<ContainerServicesGetInput>;

// Output Schema
export interface ContainerServicesGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string>;
}
export const ContainerServicesGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<ContainerServicesGetOutput>;

// The operation
/**
 * Gets the properties of the specified container service.
 *
 * Gets the properties of the specified container service in the specified subscription and resource group. The operation returns the properties including state, orchestrator, number of masters and agents, and FQDNs of masters and agents.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param containerServiceName - The name of the container service in the specified subscription and resource group.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ContainerServicesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ContainerServicesGetInput,
  outputSchema: ContainerServicesGetOutput,
}));
// Input Schema
export interface ContainerServicesListInput {
  subscriptionId: string;
}
export const ContainerServicesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ContainerService/containerServices",
      apiVersion: "2017-01-31",
    }),
  ) as unknown as Schema.Codec<ContainerServicesListInput>;

// Output Schema
export interface ContainerServicesListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const ContainerServicesListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.String,
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ContainerServicesListOutput>;

// The operation
/**
 * Gets a list of container services in the specified subscription.
 *
 * Gets a list of container services in the specified subscription. The operation returns properties of each container service including state, orchestrator, number of masters and agents, and FQDNs of masters and agents.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ContainerServicesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ContainerServicesListInput,
  outputSchema: ContainerServicesListOutput,
}));
// Input Schema
export interface ContainerServicesListByResourceGroupInput {
  resourceGroupName: string;
  subscriptionId: string;
}
export const ContainerServicesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/containerServices",
      apiVersion: "2017-01-31",
    }),
  ) as unknown as Schema.Codec<ContainerServicesListByResourceGroupInput>;

// Output Schema
export interface ContainerServicesListByResourceGroupOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const ContainerServicesListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.String,
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ContainerServicesListByResourceGroupOutput>;

// The operation
/**
 * Gets a list of container services in the specified resource group.
 *
 * Gets a list of container services in the specified subscription and resource group. The operation returns properties of each container service including state, orchestrator, number of masters and agents, and FQDNs of masters and agents.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ContainerServicesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ContainerServicesListByResourceGroupInput,
    outputSchema: ContainerServicesListByResourceGroupOutput,
  }));
// Input Schema
export interface DiskAccessesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  diskAccessName: string;
  properties?: {
    privateEndpointConnections?: {
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
    provisioningState?: string;
    timeCreated?: string;
  };
  extendedLocation?: { name?: string; type?: "EdgeZone" };
  tags?: Record<string, string>;
  location: string;
}
export const DiskAccessesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    diskAccessName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        privateEndpointConnections: Schema.optional(
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
        provisioningState: Schema.optional(Schema.String),
        timeCreated: Schema.optional(Schema.String),
      }),
    ),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["EdgeZone"])),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses/{diskAccessName}",
      apiVersion: "2026-03-02",
    }),
  ) as unknown as Schema.Codec<DiskAccessesCreateOrUpdateInput>;

// Output Schema
export interface DiskAccessesCreateOrUpdateOutput {
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
export const DiskAccessesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DiskAccessesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a disk access resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskAccessName - The name of the disk access resource that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
 */
export const DiskAccessesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DiskAccessesCreateOrUpdateInput,
  outputSchema: DiskAccessesCreateOrUpdateOutput,
}));
// Input Schema
export interface DiskAccessesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  diskAccessName: string;
}
export const DiskAccessesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    diskAccessName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses/{diskAccessName}",
      apiVersion: "2026-03-02",
    }),
  ) as unknown as Schema.Codec<DiskAccessesDeleteInput>;

// Output Schema
export type DiskAccessesDeleteOutput = void;
export const DiskAccessesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DiskAccessesDeleteOutput>;

// The operation
/**
 * Deletes a disk access resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskAccessName - The name of the disk access resource that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
 */
export const DiskAccessesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: DiskAccessesDeleteInput,
  outputSchema: DiskAccessesDeleteOutput,
}));
// Input Schema
export interface DiskAccessesDeleteAPrivateEndpointConnectionInput {
  subscriptionId: string;
  resourceGroupName: string;
  diskAccessName: string;
  privateEndpointConnectionName: string;
}
export const DiskAccessesDeleteAPrivateEndpointConnectionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    diskAccessName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses/{diskAccessName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-03-02",
    }),
  ) as unknown as Schema.Codec<DiskAccessesDeleteAPrivateEndpointConnectionInput>;

// Output Schema
export type DiskAccessesDeleteAPrivateEndpointConnectionOutput = void;
export const DiskAccessesDeleteAPrivateEndpointConnectionOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DiskAccessesDeleteAPrivateEndpointConnectionOutput>;

// The operation
/**
 * Deletes a private endpoint connection under a disk access resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskAccessName - The name of the disk access resource that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
 * @param privateEndpointConnectionName - The name of the private endpoint connection.
 */
export const DiskAccessesDeleteAPrivateEndpointConnection =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DiskAccessesDeleteAPrivateEndpointConnectionInput,
    outputSchema: DiskAccessesDeleteAPrivateEndpointConnectionOutput,
  }));
// Input Schema
export interface DiskAccessesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  diskAccessName: string;
}
export const DiskAccessesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  diskAccessName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses/{diskAccessName}",
    apiVersion: "2026-03-02",
  }),
) as unknown as Schema.Codec<DiskAccessesGetInput>;

// Output Schema
export interface DiskAccessesGetOutput {
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
export const DiskAccessesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DiskAccessesGetOutput>;

// The operation
/**
 * Gets information about a disk access resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskAccessName - The name of the disk access resource that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
 */
export const DiskAccessesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DiskAccessesGetInput,
  outputSchema: DiskAccessesGetOutput,
}));
// Input Schema
export interface DiskAccessesGetAPrivateEndpointConnectionInput {
  subscriptionId: string;
  resourceGroupName: string;
  diskAccessName: string;
  privateEndpointConnectionName: string;
}
export const DiskAccessesGetAPrivateEndpointConnectionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    diskAccessName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses/{diskAccessName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-03-02",
    }),
  ) as unknown as Schema.Codec<DiskAccessesGetAPrivateEndpointConnectionInput>;

// Output Schema
export interface DiskAccessesGetAPrivateEndpointConnectionOutput {
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
export const DiskAccessesGetAPrivateEndpointConnectionOutput =
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
  }) as unknown as Schema.Codec<DiskAccessesGetAPrivateEndpointConnectionOutput>;

// The operation
/**
 * Gets information about a private endpoint connection under a disk access resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskAccessName - The name of the disk access resource that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
 * @param privateEndpointConnectionName - The name of the private endpoint connection.
 */
export const DiskAccessesGetAPrivateEndpointConnection =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DiskAccessesGetAPrivateEndpointConnectionInput,
    outputSchema: DiskAccessesGetAPrivateEndpointConnectionOutput,
  }));
// Input Schema
export interface DiskAccessesGetPrivateLinkResourcesInput {
  subscriptionId: string;
  resourceGroupName: string;
  diskAccessName: string;
}
export const DiskAccessesGetPrivateLinkResourcesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    diskAccessName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses/{diskAccessName}/privatelinkresources",
      apiVersion: "2026-03-02",
    }),
  ) as unknown as Schema.Codec<DiskAccessesGetPrivateLinkResourcesInput>;

// Output Schema
export interface DiskAccessesGetPrivateLinkResourcesOutput {
  value?: {
    properties?: {
      groupId?: string;
      requiredMembers?: string[];
      requiredZoneNames?: string[];
    };
    id?: string;
    name?: string;
    type?: string;
  }[];
}
export const DiskAccessesGetPrivateLinkResourcesOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          properties: Schema.optional(
            Schema.Struct({
              groupId: Schema.optional(Schema.String),
              requiredMembers: Schema.optional(Schema.Array(Schema.String)),
              requiredZoneNames: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<DiskAccessesGetPrivateLinkResourcesOutput>;

// The operation
/**
 * Gets the private link resources possible under disk access resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskAccessName - The name of the disk access resource that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
 */
export const DiskAccessesGetPrivateLinkResources =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DiskAccessesGetPrivateLinkResourcesInput,
    outputSchema: DiskAccessesGetPrivateLinkResourcesOutput,
  }));
// Input Schema
export interface DiskAccessesListInput {
  subscriptionId: string;
}
export const DiskAccessesListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/diskAccesses",
    apiVersion: "2026-03-02",
  }),
) as unknown as Schema.Codec<DiskAccessesListInput>;

// Output Schema
export interface DiskAccessesListOutput {
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
export const DiskAccessesListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DiskAccessesListOutput>;

// The operation
/**
 * Lists all the disk access resources under a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DiskAccessesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: DiskAccessesListInput,
  outputSchema: DiskAccessesListOutput,
}));
// Input Schema
export interface DiskAccessesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const DiskAccessesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses",
      apiVersion: "2026-03-02",
    }),
  ) as unknown as Schema.Codec<DiskAccessesListByResourceGroupInput>;

// Output Schema
export interface DiskAccessesListByResourceGroupOutput {
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
export const DiskAccessesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<DiskAccessesListByResourceGroupOutput>;

// The operation
/**
 * Lists all the disk access resources under a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const DiskAccessesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DiskAccessesListByResourceGroupInput,
    outputSchema: DiskAccessesListByResourceGroupOutput,
  }));
// Input Schema
export interface DiskAccessesListPrivateEndpointConnectionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  diskAccessName: string;
}
export const DiskAccessesListPrivateEndpointConnectionsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    diskAccessName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses/{diskAccessName}/privateEndpointConnections",
      apiVersion: "2026-03-02",
    }),
  ) as unknown as Schema.Codec<DiskAccessesListPrivateEndpointConnectionsInput>;

// Output Schema
export interface DiskAccessesListPrivateEndpointConnectionsOutput {
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
export const DiskAccessesListPrivateEndpointConnectionsOutput =
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
  }) as unknown as Schema.Codec<DiskAccessesListPrivateEndpointConnectionsOutput>;

// The operation
/**
 * List information about private endpoint connections under a disk access resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskAccessName - The name of the disk access resource that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
 */
export const DiskAccessesListPrivateEndpointConnections =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DiskAccessesListPrivateEndpointConnectionsInput,
    outputSchema: DiskAccessesListPrivateEndpointConnectionsOutput,
  }));
// Input Schema
export interface DiskAccessesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  diskAccessName: string;
  tags?: Record<string, string>;
}
export const DiskAccessesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    diskAccessName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses/{diskAccessName}",
      apiVersion: "2026-03-02",
    }),
  ) as unknown as Schema.Codec<DiskAccessesUpdateInput>;

// Output Schema
export interface DiskAccessesUpdateOutput {
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
export const DiskAccessesUpdateOutput =
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
  }) as unknown as Schema.Codec<DiskAccessesUpdateOutput>;

// The operation
/**
 * Updates (patches) a disk access resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskAccessName - The name of the disk access resource that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
 */
export const DiskAccessesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DiskAccessesUpdateInput,
  outputSchema: DiskAccessesUpdateOutput,
}));
// Input Schema
export interface DiskAccessesUpdateAPrivateEndpointConnectionInput {
  subscriptionId: string;
  resourceGroupName: string;
  diskAccessName: string;
  privateEndpointConnectionName: string;
  properties?: {
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState: {
      status?: "Pending" | "Approved" | "Rejected";
      description?: string;
      actionsRequired?: string;
    };
    provisioningState?: "Succeeded" | "Creating" | "Deleting" | "Failed";
  };
}
export const DiskAccessesUpdateAPrivateEndpointConnectionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    diskAccessName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        privateEndpoint: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        privateLinkServiceConnectionState: Schema.Struct({
          status: Schema.optional(
            Schema.Literals(["Pending", "Approved", "Rejected"]),
          ),
          description: Schema.optional(Schema.String),
          actionsRequired: Schema.optional(Schema.String),
        }),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Creating", "Deleting", "Failed"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses/{diskAccessName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-03-02",
    }),
  ) as unknown as Schema.Codec<DiskAccessesUpdateAPrivateEndpointConnectionInput>;

// Output Schema
export interface DiskAccessesUpdateAPrivateEndpointConnectionOutput {
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
export const DiskAccessesUpdateAPrivateEndpointConnectionOutput =
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
  }) as unknown as Schema.Codec<DiskAccessesUpdateAPrivateEndpointConnectionOutput>;

// The operation
/**
 * Approve or reject a private endpoint connection under disk access resource, this can't be used to create a new private endpoint connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskAccessName - The name of the disk access resource that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
 * @param privateEndpointConnectionName - The name of the private endpoint connection.
 */
export const DiskAccessesUpdateAPrivateEndpointConnection =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DiskAccessesUpdateAPrivateEndpointConnectionInput,
    outputSchema: DiskAccessesUpdateAPrivateEndpointConnectionOutput,
  }));
// Input Schema
export interface DiskEncryptionSetsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  diskEncryptionSetName: string;
  properties?: {
    encryptionType?:
      | "EncryptionAtRestWithCustomerKey"
      | "EncryptionAtRestWithPlatformAndCustomerKeys"
      | "ConfidentialVmEncryptedWithCustomerKey";
    activeKey?: { sourceVault?: { id?: string }; keyUrl: string };
    previousKeys?: { sourceVault?: { id?: string }; keyUrl: string }[];
    provisioningState?: string;
    rotationToLatestKeyVersionEnabled?: boolean;
    lastKeyRotationTimestamp?: string;
    autoKeyRotationError?: {
      details?: { code?: string; target?: string; message?: string }[];
      innererror?: { exceptiontype?: string; errordetail?: string };
      code?: string;
      target?: string;
      message?: string;
    };
    federatedClientId?: string;
  };
  identity?: {
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned"
      | "None";
    principalId?: string;
    tenantId?: string;
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  tags?: Record<string, string>;
  location: string;
}
export const DiskEncryptionSetsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    diskEncryptionSetName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        encryptionType: Schema.optional(
          Schema.Literals([
            "EncryptionAtRestWithCustomerKey",
            "EncryptionAtRestWithPlatformAndCustomerKeys",
            "ConfidentialVmEncryptedWithCustomerKey",
          ]),
        ),
        activeKey: Schema.optional(
          Schema.Struct({
            sourceVault: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
              }),
            ),
            keyUrl: Schema.String,
          }),
        ),
        previousKeys: Schema.optional(
          Schema.Array(
            Schema.Struct({
              sourceVault: Schema.optional(
                Schema.Struct({
                  id: Schema.optional(Schema.String),
                }),
              ),
              keyUrl: Schema.String,
            }),
          ),
        ),
        provisioningState: Schema.optional(Schema.String),
        rotationToLatestKeyVersionEnabled: Schema.optional(Schema.Boolean),
        lastKeyRotationTimestamp: Schema.optional(Schema.String),
        autoKeyRotationError: Schema.optional(
          Schema.Struct({
            details: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  code: Schema.optional(Schema.String),
                  target: Schema.optional(Schema.String),
                  message: Schema.optional(Schema.String),
                }),
              ),
            ),
            innererror: Schema.optional(
              Schema.Struct({
                exceptiontype: Schema.optional(Schema.String),
                errordetail: Schema.optional(Schema.String),
              }),
            ),
            code: Schema.optional(Schema.String),
            target: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
          }),
        ),
        federatedClientId: Schema.optional(Schema.String),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned, UserAssigned",
            "None",
          ]),
        ),
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{diskEncryptionSetName}",
      apiVersion: "2026-03-02",
    }),
  ) as unknown as Schema.Codec<DiskEncryptionSetsCreateOrUpdateInput>;

// Output Schema
export interface DiskEncryptionSetsCreateOrUpdateOutput {
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
export const DiskEncryptionSetsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DiskEncryptionSetsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a disk encryption set
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskEncryptionSetName - The name of the disk encryption set that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
 */
export const DiskEncryptionSetsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DiskEncryptionSetsCreateOrUpdateInput,
    outputSchema: DiskEncryptionSetsCreateOrUpdateOutput,
  }));
// Input Schema
export interface DiskEncryptionSetsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  diskEncryptionSetName: string;
}
export const DiskEncryptionSetsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    diskEncryptionSetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{diskEncryptionSetName}",
      apiVersion: "2026-03-02",
    }),
  ) as unknown as Schema.Codec<DiskEncryptionSetsDeleteInput>;

// Output Schema
export type DiskEncryptionSetsDeleteOutput = void;
export const DiskEncryptionSetsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DiskEncryptionSetsDeleteOutput>;

// The operation
/**
 * Deletes a disk encryption set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskEncryptionSetName - The name of the disk encryption set that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
 */
export const DiskEncryptionSetsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: DiskEncryptionSetsDeleteInput,
  outputSchema: DiskEncryptionSetsDeleteOutput,
}));
// Input Schema
export interface DiskEncryptionSetsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  diskEncryptionSetName: string;
}
export const DiskEncryptionSetsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    diskEncryptionSetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{diskEncryptionSetName}",
      apiVersion: "2026-03-02",
    }),
  ) as unknown as Schema.Codec<DiskEncryptionSetsGetInput>;

// Output Schema
export interface DiskEncryptionSetsGetOutput {
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
export const DiskEncryptionSetsGetOutput =
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
  }) as unknown as Schema.Codec<DiskEncryptionSetsGetOutput>;

// The operation
/**
 * Gets information about a disk encryption set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskEncryptionSetName - The name of the disk encryption set that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
 */
export const DiskEncryptionSetsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DiskEncryptionSetsGetInput,
  outputSchema: DiskEncryptionSetsGetOutput,
}));
// Input Schema
export interface DiskEncryptionSetsListInput {
  subscriptionId: string;
}
export const DiskEncryptionSetsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/diskEncryptionSets",
      apiVersion: "2026-03-02",
    }),
  ) as unknown as Schema.Codec<DiskEncryptionSetsListInput>;

// Output Schema
export interface DiskEncryptionSetsListOutput {
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
export const DiskEncryptionSetsListOutput =
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
  }) as unknown as Schema.Codec<DiskEncryptionSetsListOutput>;

// The operation
/**
 * Lists all the disk encryption sets under a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DiskEncryptionSetsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: DiskEncryptionSetsListInput,
  outputSchema: DiskEncryptionSetsListOutput,
}));
// Input Schema
export interface DiskEncryptionSetsListAssociatedResourcesInput {
  subscriptionId: string;
  resourceGroupName: string;
  diskEncryptionSetName: string;
}
export const DiskEncryptionSetsListAssociatedResourcesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    diskEncryptionSetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{diskEncryptionSetName}/associatedResources",
      apiVersion: "2026-03-02",
    }),
  ) as unknown as Schema.Codec<DiskEncryptionSetsListAssociatedResourcesInput>;

// Output Schema
export interface DiskEncryptionSetsListAssociatedResourcesOutput {
  value: string[];
  nextLink?: string;
}
export const DiskEncryptionSetsListAssociatedResourcesOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.String),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DiskEncryptionSetsListAssociatedResourcesOutput>;

// The operation
/**
 * Lists all resources that are encrypted with this disk encryption set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskEncryptionSetName - The name of the disk encryption set that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
 */
export const DiskEncryptionSetsListAssociatedResources =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DiskEncryptionSetsListAssociatedResourcesInput,
    outputSchema: DiskEncryptionSetsListAssociatedResourcesOutput,
  }));
// Input Schema
export interface DiskEncryptionSetsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const DiskEncryptionSetsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets",
      apiVersion: "2026-03-02",
    }),
  ) as unknown as Schema.Codec<DiskEncryptionSetsListByResourceGroupInput>;

// Output Schema
export interface DiskEncryptionSetsListByResourceGroupOutput {
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
export const DiskEncryptionSetsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<DiskEncryptionSetsListByResourceGroupOutput>;

// The operation
/**
 * Lists all the disk encryption sets under a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const DiskEncryptionSetsListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DiskEncryptionSetsListByResourceGroupInput,
    outputSchema: DiskEncryptionSetsListByResourceGroupOutput,
  }));
// Input Schema
export interface DiskEncryptionSetsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  diskEncryptionSetName: string;
  properties?: {
    encryptionType?:
      | "EncryptionAtRestWithCustomerKey"
      | "EncryptionAtRestWithPlatformAndCustomerKeys"
      | "ConfidentialVmEncryptedWithCustomerKey";
    activeKey?: { sourceVault?: { id?: string }; keyUrl: string };
    rotationToLatestKeyVersionEnabled?: boolean;
    federatedClientId?: string;
  };
  tags?: Record<string, string>;
  identity?: {
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned"
      | "None";
    principalId?: string;
    tenantId?: string;
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const DiskEncryptionSetsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    diskEncryptionSetName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        encryptionType: Schema.optional(
          Schema.Literals([
            "EncryptionAtRestWithCustomerKey",
            "EncryptionAtRestWithPlatformAndCustomerKeys",
            "ConfidentialVmEncryptedWithCustomerKey",
          ]),
        ),
        activeKey: Schema.optional(
          Schema.Struct({
            sourceVault: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
              }),
            ),
            keyUrl: Schema.String,
          }),
        ),
        rotationToLatestKeyVersionEnabled: Schema.optional(Schema.Boolean),
        federatedClientId: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned, UserAssigned",
            "None",
          ]),
        ),
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{diskEncryptionSetName}",
      apiVersion: "2026-03-02",
    }),
  ) as unknown as Schema.Codec<DiskEncryptionSetsUpdateInput>;

// Output Schema
export interface DiskEncryptionSetsUpdateOutput {
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
export const DiskEncryptionSetsUpdateOutput =
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
  }) as unknown as Schema.Codec<DiskEncryptionSetsUpdateOutput>;

// The operation
/**
 * Updates (patches) a disk encryption set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskEncryptionSetName - The name of the disk encryption set that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
 */
export const DiskEncryptionSetsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DiskEncryptionSetsUpdateInput,
  outputSchema: DiskEncryptionSetsUpdateOutput,
}));
// Input Schema
export interface DiskRestorePointGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  restorePointCollectionName: string;
  vmRestorePointName: string;
  diskRestorePointName: string;
}
export const DiskRestorePointGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    restorePointCollectionName: Schema.String.pipe(T.PathParam()),
    vmRestorePointName: Schema.String.pipe(T.PathParam()),
    diskRestorePointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections/{restorePointCollectionName}/restorePoints/{vmRestorePointName}/diskRestorePoints/{diskRestorePointName}",
      apiVersion: "2026-03-02",
    }),
  ) as unknown as Schema.Codec<DiskRestorePointGetInput>;

// Output Schema
export interface DiskRestorePointGetOutput {
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
export const DiskRestorePointGetOutput =
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
  }) as unknown as Schema.Codec<DiskRestorePointGetOutput>;

// The operation
/**
 * Get disk restorePoint resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param restorePointCollectionName - The name of the restore point collection that the disk restore point belongs.
 * @param vmRestorePointName - The name of the vm restore point that the disk disk restore point belongs.
 * @param diskRestorePointName - The name of the DiskRestorePoint
 */
export const DiskRestorePointGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DiskRestorePointGetInput,
  outputSchema: DiskRestorePointGetOutput,
}));
// Input Schema
export interface DiskRestorePointGrantAccessInput {
  subscriptionId: string;
  resourceGroupName: string;
  restorePointCollectionName: string;
  vmRestorePointName: string;
  diskRestorePointName: string;
  access: "None" | "Read" | "Write";
  durationInSeconds: number;
  getSecureVMGuestStateSAS?: boolean;
  fileFormat?: "VHD" | "VHDX";
}
export const DiskRestorePointGrantAccessInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    restorePointCollectionName: Schema.String.pipe(T.PathParam()),
    vmRestorePointName: Schema.String.pipe(T.PathParam()),
    diskRestorePointName: Schema.String.pipe(T.PathParam()),
    access: Schema.Literals(["None", "Read", "Write"]),
    durationInSeconds: Schema.Number,
    getSecureVMGuestStateSAS: Schema.optional(Schema.Boolean),
    fileFormat: Schema.optional(Schema.Literals(["VHD", "VHDX"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections/{restorePointCollectionName}/restorePoints/{vmRestorePointName}/diskRestorePoints/{diskRestorePointName}/beginGetAccess",
      apiVersion: "2026-03-02",
    }),
  ) as unknown as Schema.Codec<DiskRestorePointGrantAccessInput>;

// Output Schema
export interface DiskRestorePointGrantAccessOutput {
  accessSAS?: string;
  securityDataAccessSAS?: string;
  securityMetadataAccessSAS?: string;
}
export const DiskRestorePointGrantAccessOutput =
  /*@__PURE__*/ Schema.Struct({
    accessSAS: Schema.optional(Schema.String),
    securityDataAccessSAS: Schema.optional(Schema.String),
    securityMetadataAccessSAS: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DiskRestorePointGrantAccessOutput>;

// The operation
/**
 * Grants access to a diskRestorePoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param restorePointCollectionName - The name of the restore point collection that the disk restore point belongs.
 * @param vmRestorePointName - The name of the vm restore point that the disk disk restore point belongs.
 * @param diskRestorePointName - The name of the DiskRestorePoint
 */
export const DiskRestorePointGrantAccess = /*@__PURE__*/ API.make(() => ({
  inputSchema: DiskRestorePointGrantAccessInput,
  outputSchema: DiskRestorePointGrantAccessOutput,
}));
// Input Schema
export interface DiskRestorePointListByRestorePointInput {
  subscriptionId: string;
  resourceGroupName: string;
  restorePointCollectionName: string;
  vmRestorePointName: string;
}
export const DiskRestorePointListByRestorePointInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    restorePointCollectionName: Schema.String.pipe(T.PathParam()),
    vmRestorePointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections/{restorePointCollectionName}/restorePoints/{vmRestorePointName}/diskRestorePoints",
      apiVersion: "2026-03-02",
    }),
  ) as unknown as Schema.Codec<DiskRestorePointListByRestorePointInput>;

// Output Schema
export interface DiskRestorePointListByRestorePointOutput {
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
export const DiskRestorePointListByRestorePointOutput =
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
  }) as unknown as Schema.Codec<DiskRestorePointListByRestorePointOutput>;

// The operation
/**
 * Lists diskRestorePoints under a vmRestorePoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param restorePointCollectionName - The name of the restore point collection that the disk restore point belongs.
 * @param vmRestorePointName - The name of the vm restore point that the disk disk restore point belongs.
 */
export const DiskRestorePointListByRestorePoint =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DiskRestorePointListByRestorePointInput,
    outputSchema: DiskRestorePointListByRestorePointOutput,
  }));
// Input Schema
export interface DiskRestorePointRevokeAccessInput {
  subscriptionId: string;
  resourceGroupName: string;
  restorePointCollectionName: string;
  vmRestorePointName: string;
  diskRestorePointName: string;
}
export const DiskRestorePointRevokeAccessInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    restorePointCollectionName: Schema.String.pipe(T.PathParam()),
    vmRestorePointName: Schema.String.pipe(T.PathParam()),
    diskRestorePointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections/{restorePointCollectionName}/restorePoints/{vmRestorePointName}/diskRestorePoints/{diskRestorePointName}/endGetAccess",
      apiVersion: "2026-03-02",
    }),
  ) as unknown as Schema.Codec<DiskRestorePointRevokeAccessInput>;

// Output Schema
export type DiskRestorePointRevokeAccessOutput = void;
export const DiskRestorePointRevokeAccessOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DiskRestorePointRevokeAccessOutput>;

// The operation
/**
 * Revokes access to a diskRestorePoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param restorePointCollectionName - The name of the restore point collection that the disk restore point belongs.
 * @param vmRestorePointName - The name of the vm restore point that the disk disk restore point belongs.
 * @param diskRestorePointName - The name of the DiskRestorePoint
 */
export const DiskRestorePointRevokeAccess =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DiskRestorePointRevokeAccessInput,
    outputSchema: DiskRestorePointRevokeAccessOutput,
  }));
// Input Schema
export interface DisksCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  diskName: string;
  properties?: {
    timeCreated?: string;
    osType?: "Windows" | "Linux";
    hyperVGeneration?: "V1" | "V2";
    purchasePlan?: {
      name: string;
      publisher: string;
      product: string;
      promotionCode?: string;
    };
    supportedCapabilities?: {
      diskControllerTypes?: string;
      acceleratedNetwork?: boolean;
      architecture?: "x64" | "Arm64";
      supportedSecurityOption?:
        | "TrustedLaunchSupported"
        | "TrustedLaunchAndConfidentialVMSupported";
    };
    creationData: {
      createOption:
        | "Empty"
        | "Attach"
        | "FromImage"
        | "Import"
        | "Copy"
        | "Restore"
        | "Upload"
        | "CopyStart"
        | "ImportSecure"
        | "UploadPreparedSecure"
        | "CopyFromSanSnapshot";
      storageAccountId?: string;
      imageReference?: {
        id?: string;
        sharedGalleryImageId?: string;
        communityGalleryImageId?: string;
        lun?: number;
      };
      galleryImageReference?: {
        id?: string;
        sharedGalleryImageId?: string;
        communityGalleryImageId?: string;
        lun?: number;
      };
      sourceUri?: string;
      sourceResourceId?: string;
      sourceUniqueId?: string;
      uploadSizeBytes?: number;
      logicalSectorSize?: number;
      securityDataUri?: string;
      securityMetadataUri?: string;
      performancePlus?: boolean;
      elasticSanResourceId?: string;
      provisionedBandwidthCopySpeed?: "None" | "Enhanced";
      instantAccessDurationMinutes?: number;
    };
    diskSizeGB?: number;
    diskSizeBytes?: number;
    uniqueId?: string;
    encryptionSettingsCollection?: {
      enabled: boolean;
      encryptionSettings?: {
        diskEncryptionKey?: { sourceVault: { id?: string }; secretUrl: string };
        keyEncryptionKey?: { sourceVault: { id?: string }; keyUrl: string };
      }[];
      encryptionSettingsVersion?: string;
    };
    provisioningState?: string;
    diskIOPSReadWrite?: number;
    diskMBpsReadWrite?: number;
    diskIOPSReadOnly?: number;
    diskMBpsReadOnly?: number;
    diskState?:
      | "Unattached"
      | "Attached"
      | "Reserved"
      | "Frozen"
      | "ActiveSAS"
      | "ActiveSASFrozen"
      | "ReadyToUpload"
      | "ActiveUpload";
    encryption?: {
      diskEncryptionSetId?: string;
      type?:
        | "EncryptionAtRestWithPlatformKey"
        | "EncryptionAtRestWithCustomerKey"
        | "EncryptionAtRestWithPlatformAndCustomerKeys";
    };
    maxShares?: number;
    shareInfo?: { vmUri?: string }[];
    networkAccessPolicy?: "AllowAll" | "AllowPrivate" | "DenyAll";
    diskAccessId?: string;
    burstingEnabledTime?: string;
    tier?: string;
    burstingEnabled?: boolean;
    propertyUpdatesInProgress?: { targetTier?: string };
    supportsHibernation?: boolean;
    securityProfile?: {
      securityType?:
        | "TrustedLaunch"
        | "ConfidentialVM_VMGuestStateOnlyEncryptedWithPlatformKey"
        | "ConfidentialVM_DiskEncryptedWithPlatformKey"
        | "ConfidentialVM_DiskEncryptedWithCustomerKey"
        | "ConfidentialVM_NonPersistedTPM";
      secureVMDiskEncryptionSetId?: string;
      confidentialVMVersion?: "V1" | "V2";
    };
    completionPercent?: number;
    publicNetworkAccess?: "Enabled" | "Disabled";
    dataAccessAuthMode?: "AzureActiveDirectory" | "None";
    optimizedForFrequentAttach?: boolean;
    LastOwnershipUpdateTime?: string;
    availabilityPolicy?: { actionOnDiskDelay?: "None" | "AutomaticReattach" };
  };
  managedBy?: string;
  managedByExtended?: string[];
  sku?: {
    name?:
      | "Standard_LRS"
      | "Premium_LRS"
      | "StandardSSD_LRS"
      | "UltraSSD_LRS"
      | "Premium_ZRS"
      | "StandardSSD_ZRS"
      | "PremiumV2_LRS";
    tier?: string;
  };
  zones?: string[];
  extendedLocation?: { name?: string; type?: "EdgeZone" };
  tags?: Record<string, string>;
  location: string;
}
export const DisksCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    diskName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        timeCreated: Schema.optional(Schema.String),
        osType: Schema.optional(Schema.Literals(["Windows", "Linux"])),
        hyperVGeneration: Schema.optional(Schema.Literals(["V1", "V2"])),
        purchasePlan: Schema.optional(
          Schema.Struct({
            name: Schema.String,
            publisher: Schema.String,
            product: Schema.String,
            promotionCode: Schema.optional(Schema.String),
          }),
        ),
        supportedCapabilities: Schema.optional(
          Schema.Struct({
            diskControllerTypes: Schema.optional(Schema.String),
            acceleratedNetwork: Schema.optional(Schema.Boolean),
            architecture: Schema.optional(Schema.Literals(["x64", "Arm64"])),
            supportedSecurityOption: Schema.optional(
              Schema.Literals([
                "TrustedLaunchSupported",
                "TrustedLaunchAndConfidentialVMSupported",
              ]),
            ),
          }),
        ),
        creationData: Schema.Struct({
          createOption: Schema.Literals([
            "Empty",
            "Attach",
            "FromImage",
            "Import",
            "Copy",
            "Restore",
            "Upload",
            "CopyStart",
            "ImportSecure",
            "UploadPreparedSecure",
            "CopyFromSanSnapshot",
          ]),
          storageAccountId: Schema.optional(Schema.String),
          imageReference: Schema.optional(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              sharedGalleryImageId: Schema.optional(Schema.String),
              communityGalleryImageId: Schema.optional(Schema.String),
              lun: Schema.optional(Schema.Number),
            }),
          ),
          galleryImageReference: Schema.optional(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              sharedGalleryImageId: Schema.optional(Schema.String),
              communityGalleryImageId: Schema.optional(Schema.String),
              lun: Schema.optional(Schema.Number),
            }),
          ),
          sourceUri: Schema.optional(Schema.String),
          sourceResourceId: Schema.optional(Schema.String),
          sourceUniqueId: Schema.optional(Schema.String),
          uploadSizeBytes: Schema.optional(Schema.Number),
          logicalSectorSize: Schema.optional(Schema.Number),
          securityDataUri: Schema.optional(Schema.String),
          securityMetadataUri: Schema.optional(Schema.String),
          performancePlus: Schema.optional(Schema.Boolean),
          elasticSanResourceId: Schema.optional(Schema.String),
          provisionedBandwidthCopySpeed: Schema.optional(
            Schema.Literals(["None", "Enhanced"]),
          ),
          instantAccessDurationMinutes: Schema.optional(Schema.Number),
        }),
        diskSizeGB: Schema.optional(Schema.Number),
        diskSizeBytes: Schema.optional(Schema.Number),
        uniqueId: Schema.optional(Schema.String),
        encryptionSettingsCollection: Schema.optional(
          Schema.Struct({
            enabled: Schema.Boolean,
            encryptionSettings: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  diskEncryptionKey: Schema.optional(
                    Schema.Struct({
                      sourceVault: Schema.Struct({
                        id: Schema.optional(Schema.String),
                      }),
                      secretUrl: Schema.String,
                    }),
                  ),
                  keyEncryptionKey: Schema.optional(
                    Schema.Struct({
                      sourceVault: Schema.Struct({
                        id: Schema.optional(Schema.String),
                      }),
                      keyUrl: Schema.String,
                    }),
                  ),
                }),
              ),
            ),
            encryptionSettingsVersion: Schema.optional(Schema.String),
          }),
        ),
        provisioningState: Schema.optional(Schema.String),
        diskIOPSReadWrite: Schema.optional(Schema.Number),
        diskMBpsReadWrite: Schema.optional(Schema.Number),
        diskIOPSReadOnly: Schema.optional(Schema.Number),
        diskMBpsReadOnly: Schema.optional(Schema.Number),
        diskState: Schema.optional(
          Schema.Literals([
            "Unattached",
            "Attached",
            "Reserved",
            "Frozen",
            "ActiveSAS",
            "ActiveSASFrozen",
            "ReadyToUpload",
            "ActiveUpload",
          ]),
        ),
        encryption: Schema.optional(
          Schema.Struct({
            diskEncryptionSetId: Schema.optional(Schema.String),
            type: Schema.optional(
              Schema.Literals([
                "EncryptionAtRestWithPlatformKey",
                "EncryptionAtRestWithCustomerKey",
                "EncryptionAtRestWithPlatformAndCustomerKeys",
              ]),
            ),
          }),
        ),
        maxShares: Schema.optional(Schema.Number),
        shareInfo: Schema.optional(
          Schema.Array(
            Schema.Struct({
              vmUri: Schema.optional(Schema.String),
            }),
          ),
        ),
        networkAccessPolicy: Schema.optional(
          Schema.Literals(["AllowAll", "AllowPrivate", "DenyAll"]),
        ),
        diskAccessId: Schema.optional(Schema.String),
        burstingEnabledTime: Schema.optional(Schema.String),
        tier: Schema.optional(Schema.String),
        burstingEnabled: Schema.optional(Schema.Boolean),
        propertyUpdatesInProgress: Schema.optional(
          Schema.Struct({
            targetTier: Schema.optional(Schema.String),
          }),
        ),
        supportsHibernation: Schema.optional(Schema.Boolean),
        securityProfile: Schema.optional(
          Schema.Struct({
            securityType: Schema.optional(
              Schema.Literals([
                "TrustedLaunch",
                "ConfidentialVM_VMGuestStateOnlyEncryptedWithPlatformKey",
                "ConfidentialVM_DiskEncryptedWithPlatformKey",
                "ConfidentialVM_DiskEncryptedWithCustomerKey",
                "ConfidentialVM_NonPersistedTPM",
              ]),
            ),
            secureVMDiskEncryptionSetId: Schema.optional(Schema.String),
            confidentialVMVersion: Schema.optional(
              Schema.Literals(["V1", "V2"]),
            ),
          }),
        ),
        completionPercent: Schema.optional(Schema.Number),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
        dataAccessAuthMode: Schema.optional(
          Schema.Literals(["AzureActiveDirectory", "None"]),
        ),
        optimizedForFrequentAttach: Schema.optional(Schema.Boolean),
        LastOwnershipUpdateTime: Schema.optional(Schema.String),
        availabilityPolicy: Schema.optional(
          Schema.Struct({
            actionOnDiskDelay: Schema.optional(
              Schema.Literals(["None", "AutomaticReattach"]),
            ),
          }),
        ),
      }),
    ),
    managedBy: Schema.optional(Schema.String),
    managedByExtended: Schema.optional(Schema.Array(Schema.String)),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(
          Schema.Literals([
            "Standard_LRS",
            "Premium_LRS",
            "StandardSSD_LRS",
            "UltraSSD_LRS",
            "Premium_ZRS",
            "StandardSSD_ZRS",
            "PremiumV2_LRS",
          ]),
        ),
        tier: Schema.optional(Schema.String),
      }),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["EdgeZone"])),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}",
      apiVersion: "2026-03-02",
    }),
  ) as unknown as Schema.Codec<DisksCreateOrUpdateInput>;

// Output Schema
export interface DisksCreateOrUpdateOutput {
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
export const DisksCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DisksCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a disk.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskName - The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
 */
export const DisksCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DisksCreateOrUpdateInput,
  outputSchema: DisksCreateOrUpdateOutput,
}));
// Input Schema
export interface DisksDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  diskName: string;
}
export const DisksDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  diskName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}",
    apiVersion: "2026-03-02",
  }),
) as unknown as Schema.Codec<DisksDeleteInput>;

// Output Schema
export type DisksDeleteOutput = void;
export const DisksDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DisksDeleteOutput>;

// The operation
/**
 * Deletes a disk.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskName - The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
 */
export const DisksDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: DisksDeleteInput,
  outputSchema: DisksDeleteOutput,
}));
// Input Schema
export interface DisksGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  diskName: string;
}
export const DisksGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  diskName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}",
    apiVersion: "2026-03-02",
  }),
) as unknown as Schema.Codec<DisksGetInput>;

// Output Schema
export interface DisksGetOutput {
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
export const DisksGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DisksGetOutput>;

// The operation
/**
 * Gets information about a disk.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskName - The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
 */
export const DisksGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DisksGetInput,
  outputSchema: DisksGetOutput,
}));
// Input Schema
export interface DisksGrantAccessInput {
  subscriptionId: string;
  resourceGroupName: string;
  diskName: string;
  access: "None" | "Read" | "Write";
  durationInSeconds: number;
  getSecureVMGuestStateSAS?: boolean;
  fileFormat?: "VHD" | "VHDX";
}
export const DisksGrantAccessInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  diskName: Schema.String.pipe(T.PathParam()),
  access: Schema.Literals(["None", "Read", "Write"]),
  durationInSeconds: Schema.Number,
  getSecureVMGuestStateSAS: Schema.optional(Schema.Boolean),
  fileFormat: Schema.optional(Schema.Literals(["VHD", "VHDX"])),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}/beginGetAccess",
    apiVersion: "2026-03-02",
  }),
) as unknown as Schema.Codec<DisksGrantAccessInput>;

// Output Schema
export interface DisksGrantAccessOutput {
  accessSAS?: string;
  securityDataAccessSAS?: string;
  securityMetadataAccessSAS?: string;
}
export const DisksGrantAccessOutput = /*@__PURE__*/ Schema.Struct({
  accessSAS: Schema.optional(Schema.String),
  securityDataAccessSAS: Schema.optional(Schema.String),
  securityMetadataAccessSAS: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<DisksGrantAccessOutput>;

// The operation
/**
 * Grants access to a disk.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskName - The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
 */
export const DisksGrantAccess = /*@__PURE__*/ API.make(() => ({
  inputSchema: DisksGrantAccessInput,
  outputSchema: DisksGrantAccessOutput,
}));
// Input Schema
export interface DisksListInput {
  subscriptionId: string;
}
export const DisksListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/disks",
    apiVersion: "2026-03-02",
  }),
) as unknown as Schema.Codec<DisksListInput>;

// Output Schema
export interface DisksListOutput {
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
export const DisksListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DisksListOutput>;

// The operation
/**
 * Lists all the disks under a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DisksList = /*@__PURE__*/ API.make(() => ({
  inputSchema: DisksListInput,
  outputSchema: DisksListOutput,
}));
// Input Schema
export interface DisksListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const DisksListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks",
      apiVersion: "2026-03-02",
    }),
  ) as unknown as Schema.Codec<DisksListByResourceGroupInput>;

// Output Schema
export interface DisksListByResourceGroupOutput {
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
export const DisksListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<DisksListByResourceGroupOutput>;

// The operation
/**
 * Lists all the disks under a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const DisksListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: DisksListByResourceGroupInput,
  outputSchema: DisksListByResourceGroupOutput,
}));
// Input Schema
export interface DisksRevokeAccessInput {
  subscriptionId: string;
  resourceGroupName: string;
  diskName: string;
}
export const DisksRevokeAccessInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  diskName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}/endGetAccess",
    apiVersion: "2026-03-02",
  }),
) as unknown as Schema.Codec<DisksRevokeAccessInput>;

// Output Schema
export type DisksRevokeAccessOutput = void;
export const DisksRevokeAccessOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DisksRevokeAccessOutput>;

// The operation
/**
 * Revokes access to a disk.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskName - The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
 */
export const DisksRevokeAccess = /*@__PURE__*/ API.make(() => ({
  inputSchema: DisksRevokeAccessInput,
  outputSchema: DisksRevokeAccessOutput,
}));
// Input Schema
export interface DisksUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  diskName: string;
  properties?: {
    osType?: "Windows" | "Linux";
    diskSizeGB?: number;
    encryptionSettingsCollection?: {
      enabled: boolean;
      encryptionSettings?: {
        diskEncryptionKey?: { sourceVault: { id?: string }; secretUrl: string };
        keyEncryptionKey?: { sourceVault: { id?: string }; keyUrl: string };
      }[];
      encryptionSettingsVersion?: string;
    };
    diskIOPSReadWrite?: number;
    diskMBpsReadWrite?: number;
    diskIOPSReadOnly?: number;
    diskMBpsReadOnly?: number;
    maxShares?: number;
    encryption?: {
      diskEncryptionSetId?: string;
      type?:
        | "EncryptionAtRestWithPlatformKey"
        | "EncryptionAtRestWithCustomerKey"
        | "EncryptionAtRestWithPlatformAndCustomerKeys";
    };
    networkAccessPolicy?: "AllowAll" | "AllowPrivate" | "DenyAll";
    diskAccessId?: string;
    tier?: string;
    burstingEnabled?: boolean;
    purchasePlan?: {
      name: string;
      publisher: string;
      product: string;
      promotionCode?: string;
    };
    supportedCapabilities?: {
      diskControllerTypes?: string;
      acceleratedNetwork?: boolean;
      architecture?: "x64" | "Arm64";
      supportedSecurityOption?:
        | "TrustedLaunchSupported"
        | "TrustedLaunchAndConfidentialVMSupported";
    };
    propertyUpdatesInProgress?: { targetTier?: string };
    supportsHibernation?: boolean;
    publicNetworkAccess?: "Enabled" | "Disabled";
    dataAccessAuthMode?: "AzureActiveDirectory" | "None";
    optimizedForFrequentAttach?: boolean;
    availabilityPolicy?: { actionOnDiskDelay?: "None" | "AutomaticReattach" };
  };
  tags?: Record<string, string>;
  sku?: {
    name?:
      | "Standard_LRS"
      | "Premium_LRS"
      | "StandardSSD_LRS"
      | "UltraSSD_LRS"
      | "Premium_ZRS"
      | "StandardSSD_ZRS"
      | "PremiumV2_LRS";
    tier?: string;
  };
}
export const DisksUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  diskName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      osType: Schema.optional(Schema.Literals(["Windows", "Linux"])),
      diskSizeGB: Schema.optional(Schema.Number),
      encryptionSettingsCollection: Schema.optional(
        Schema.Struct({
          enabled: Schema.Boolean,
          encryptionSettings: Schema.optional(
            Schema.Array(
              Schema.Struct({
                diskEncryptionKey: Schema.optional(
                  Schema.Struct({
                    sourceVault: Schema.Struct({
                      id: Schema.optional(Schema.String),
                    }),
                    secretUrl: Schema.String,
                  }),
                ),
                keyEncryptionKey: Schema.optional(
                  Schema.Struct({
                    sourceVault: Schema.Struct({
                      id: Schema.optional(Schema.String),
                    }),
                    keyUrl: Schema.String,
                  }),
                ),
              }),
            ),
          ),
          encryptionSettingsVersion: Schema.optional(Schema.String),
        }),
      ),
      diskIOPSReadWrite: Schema.optional(Schema.Number),
      diskMBpsReadWrite: Schema.optional(Schema.Number),
      diskIOPSReadOnly: Schema.optional(Schema.Number),
      diskMBpsReadOnly: Schema.optional(Schema.Number),
      maxShares: Schema.optional(Schema.Number),
      encryption: Schema.optional(
        Schema.Struct({
          diskEncryptionSetId: Schema.optional(Schema.String),
          type: Schema.optional(
            Schema.Literals([
              "EncryptionAtRestWithPlatformKey",
              "EncryptionAtRestWithCustomerKey",
              "EncryptionAtRestWithPlatformAndCustomerKeys",
            ]),
          ),
        }),
      ),
      networkAccessPolicy: Schema.optional(
        Schema.Literals(["AllowAll", "AllowPrivate", "DenyAll"]),
      ),
      diskAccessId: Schema.optional(Schema.String),
      tier: Schema.optional(Schema.String),
      burstingEnabled: Schema.optional(Schema.Boolean),
      purchasePlan: Schema.optional(
        Schema.Struct({
          name: Schema.String,
          publisher: Schema.String,
          product: Schema.String,
          promotionCode: Schema.optional(Schema.String),
        }),
      ),
      supportedCapabilities: Schema.optional(
        Schema.Struct({
          diskControllerTypes: Schema.optional(Schema.String),
          acceleratedNetwork: Schema.optional(Schema.Boolean),
          architecture: Schema.optional(Schema.Literals(["x64", "Arm64"])),
          supportedSecurityOption: Schema.optional(
            Schema.Literals([
              "TrustedLaunchSupported",
              "TrustedLaunchAndConfidentialVMSupported",
            ]),
          ),
        }),
      ),
      propertyUpdatesInProgress: Schema.optional(
        Schema.Struct({
          targetTier: Schema.optional(Schema.String),
        }),
      ),
      supportsHibernation: Schema.optional(Schema.Boolean),
      publicNetworkAccess: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      dataAccessAuthMode: Schema.optional(
        Schema.Literals(["AzureActiveDirectory", "None"]),
      ),
      optimizedForFrequentAttach: Schema.optional(Schema.Boolean),
      availabilityPolicy: Schema.optional(
        Schema.Struct({
          actionOnDiskDelay: Schema.optional(
            Schema.Literals(["None", "AutomaticReattach"]),
          ),
        }),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.optional(
        Schema.Literals([
          "Standard_LRS",
          "Premium_LRS",
          "StandardSSD_LRS",
          "UltraSSD_LRS",
          "Premium_ZRS",
          "StandardSSD_ZRS",
          "PremiumV2_LRS",
        ]),
      ),
      tier: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}",
    apiVersion: "2026-03-02",
  }),
) as unknown as Schema.Codec<DisksUpdateInput>;

// Output Schema
export interface DisksUpdateOutput {
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
export const DisksUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DisksUpdateOutput>;

// The operation
/**
 * Updates (patches) a disk.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskName - The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
 */
export const DisksUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DisksUpdateInput,
  outputSchema: DisksUpdateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Compute/operations",
    apiVersion: "2026-06-06",
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
 * List the operations for the provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface SnapshotsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  snapshotName: string;
  properties?: {
    timeCreated?: string;
    osType?: "Windows" | "Linux";
    hyperVGeneration?: "V1" | "V2";
    purchasePlan?: {
      name: string;
      publisher: string;
      product: string;
      promotionCode?: string;
    };
    supportedCapabilities?: {
      diskControllerTypes?: string;
      acceleratedNetwork?: boolean;
      architecture?: "x64" | "Arm64";
      supportedSecurityOption?:
        | "TrustedLaunchSupported"
        | "TrustedLaunchAndConfidentialVMSupported";
    };
    creationData: {
      createOption:
        | "Empty"
        | "Attach"
        | "FromImage"
        | "Import"
        | "Copy"
        | "Restore"
        | "Upload"
        | "CopyStart"
        | "ImportSecure"
        | "UploadPreparedSecure"
        | "CopyFromSanSnapshot";
      storageAccountId?: string;
      imageReference?: {
        id?: string;
        sharedGalleryImageId?: string;
        communityGalleryImageId?: string;
        lun?: number;
      };
      galleryImageReference?: {
        id?: string;
        sharedGalleryImageId?: string;
        communityGalleryImageId?: string;
        lun?: number;
      };
      sourceUri?: string;
      sourceResourceId?: string;
      sourceUniqueId?: string;
      uploadSizeBytes?: number;
      logicalSectorSize?: number;
      securityDataUri?: string;
      securityMetadataUri?: string;
      performancePlus?: boolean;
      elasticSanResourceId?: string;
      provisionedBandwidthCopySpeed?: "None" | "Enhanced";
      instantAccessDurationMinutes?: number;
    };
    diskSizeGB?: number;
    diskSizeBytes?: number;
    diskState?:
      | "Unattached"
      | "Attached"
      | "Reserved"
      | "Frozen"
      | "ActiveSAS"
      | "ActiveSASFrozen"
      | "ReadyToUpload"
      | "ActiveUpload";
    uniqueId?: string;
    encryptionSettingsCollection?: {
      enabled: boolean;
      encryptionSettings?: {
        diskEncryptionKey?: { sourceVault: { id?: string }; secretUrl: string };
        keyEncryptionKey?: { sourceVault: { id?: string }; keyUrl: string };
      }[];
      encryptionSettingsVersion?: string;
    };
    provisioningState?: string;
    incremental?: boolean;
    incrementalSnapshotFamilyId?: string;
    encryption?: {
      diskEncryptionSetId?: string;
      type?:
        | "EncryptionAtRestWithPlatformKey"
        | "EncryptionAtRestWithCustomerKey"
        | "EncryptionAtRestWithPlatformAndCustomerKeys";
    };
    networkAccessPolicy?: "AllowAll" | "AllowPrivate" | "DenyAll";
    diskAccessId?: string;
    securityProfile?: {
      securityType?:
        | "TrustedLaunch"
        | "ConfidentialVM_VMGuestStateOnlyEncryptedWithPlatformKey"
        | "ConfidentialVM_DiskEncryptedWithPlatformKey"
        | "ConfidentialVM_DiskEncryptedWithCustomerKey"
        | "ConfidentialVM_NonPersistedTPM";
      secureVMDiskEncryptionSetId?: string;
      confidentialVMVersion?: "V1" | "V2";
    };
    supportsHibernation?: boolean;
    publicNetworkAccess?: "Enabled" | "Disabled";
    completionPercent?: number;
    copyCompletionError?: {
      errorCode: "CopySourceNotFound";
      errorMessage: string;
    };
    dataAccessAuthMode?: "AzureActiveDirectory" | "None";
    snapshotAccessState?:
      | "Unknown"
      | "Pending"
      | "Available"
      | "InstantAccess"
      | "AvailableWithInstantAccess";
    immutabilityPolicy?: {
      immutabilityDurationDays?: number;
      type?: "Unlocked" | "Locked";
      policyStartTime?: string;
      policyExpirationTime?: string;
      isPolicyExpired?: boolean;
    };
  };
  managedBy?: string;
  sku?: {
    name?: "Standard_LRS" | "Premium_LRS" | "Standard_ZRS";
    tier?: string;
  };
  extendedLocation?: { name?: string; type?: "EdgeZone" };
  tags?: Record<string, string>;
  location: string;
}
export const SnapshotsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    snapshotName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        timeCreated: Schema.optional(Schema.String),
        osType: Schema.optional(Schema.Literals(["Windows", "Linux"])),
        hyperVGeneration: Schema.optional(Schema.Literals(["V1", "V2"])),
        purchasePlan: Schema.optional(
          Schema.Struct({
            name: Schema.String,
            publisher: Schema.String,
            product: Schema.String,
            promotionCode: Schema.optional(Schema.String),
          }),
        ),
        supportedCapabilities: Schema.optional(
          Schema.Struct({
            diskControllerTypes: Schema.optional(Schema.String),
            acceleratedNetwork: Schema.optional(Schema.Boolean),
            architecture: Schema.optional(Schema.Literals(["x64", "Arm64"])),
            supportedSecurityOption: Schema.optional(
              Schema.Literals([
                "TrustedLaunchSupported",
                "TrustedLaunchAndConfidentialVMSupported",
              ]),
            ),
          }),
        ),
        creationData: Schema.Struct({
          createOption: Schema.Literals([
            "Empty",
            "Attach",
            "FromImage",
            "Import",
            "Copy",
            "Restore",
            "Upload",
            "CopyStart",
            "ImportSecure",
            "UploadPreparedSecure",
            "CopyFromSanSnapshot",
          ]),
          storageAccountId: Schema.optional(Schema.String),
          imageReference: Schema.optional(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              sharedGalleryImageId: Schema.optional(Schema.String),
              communityGalleryImageId: Schema.optional(Schema.String),
              lun: Schema.optional(Schema.Number),
            }),
          ),
          galleryImageReference: Schema.optional(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              sharedGalleryImageId: Schema.optional(Schema.String),
              communityGalleryImageId: Schema.optional(Schema.String),
              lun: Schema.optional(Schema.Number),
            }),
          ),
          sourceUri: Schema.optional(Schema.String),
          sourceResourceId: Schema.optional(Schema.String),
          sourceUniqueId: Schema.optional(Schema.String),
          uploadSizeBytes: Schema.optional(Schema.Number),
          logicalSectorSize: Schema.optional(Schema.Number),
          securityDataUri: Schema.optional(Schema.String),
          securityMetadataUri: Schema.optional(Schema.String),
          performancePlus: Schema.optional(Schema.Boolean),
          elasticSanResourceId: Schema.optional(Schema.String),
          provisionedBandwidthCopySpeed: Schema.optional(
            Schema.Literals(["None", "Enhanced"]),
          ),
          instantAccessDurationMinutes: Schema.optional(Schema.Number),
        }),
        diskSizeGB: Schema.optional(Schema.Number),
        diskSizeBytes: Schema.optional(Schema.Number),
        diskState: Schema.optional(
          Schema.Literals([
            "Unattached",
            "Attached",
            "Reserved",
            "Frozen",
            "ActiveSAS",
            "ActiveSASFrozen",
            "ReadyToUpload",
            "ActiveUpload",
          ]),
        ),
        uniqueId: Schema.optional(Schema.String),
        encryptionSettingsCollection: Schema.optional(
          Schema.Struct({
            enabled: Schema.Boolean,
            encryptionSettings: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  diskEncryptionKey: Schema.optional(
                    Schema.Struct({
                      sourceVault: Schema.Struct({
                        id: Schema.optional(Schema.String),
                      }),
                      secretUrl: Schema.String,
                    }),
                  ),
                  keyEncryptionKey: Schema.optional(
                    Schema.Struct({
                      sourceVault: Schema.Struct({
                        id: Schema.optional(Schema.String),
                      }),
                      keyUrl: Schema.String,
                    }),
                  ),
                }),
              ),
            ),
            encryptionSettingsVersion: Schema.optional(Schema.String),
          }),
        ),
        provisioningState: Schema.optional(Schema.String),
        incremental: Schema.optional(Schema.Boolean),
        incrementalSnapshotFamilyId: Schema.optional(Schema.String),
        encryption: Schema.optional(
          Schema.Struct({
            diskEncryptionSetId: Schema.optional(Schema.String),
            type: Schema.optional(
              Schema.Literals([
                "EncryptionAtRestWithPlatformKey",
                "EncryptionAtRestWithCustomerKey",
                "EncryptionAtRestWithPlatformAndCustomerKeys",
              ]),
            ),
          }),
        ),
        networkAccessPolicy: Schema.optional(
          Schema.Literals(["AllowAll", "AllowPrivate", "DenyAll"]),
        ),
        diskAccessId: Schema.optional(Schema.String),
        securityProfile: Schema.optional(
          Schema.Struct({
            securityType: Schema.optional(
              Schema.Literals([
                "TrustedLaunch",
                "ConfidentialVM_VMGuestStateOnlyEncryptedWithPlatformKey",
                "ConfidentialVM_DiskEncryptedWithPlatformKey",
                "ConfidentialVM_DiskEncryptedWithCustomerKey",
                "ConfidentialVM_NonPersistedTPM",
              ]),
            ),
            secureVMDiskEncryptionSetId: Schema.optional(Schema.String),
            confidentialVMVersion: Schema.optional(
              Schema.Literals(["V1", "V2"]),
            ),
          }),
        ),
        supportsHibernation: Schema.optional(Schema.Boolean),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
        completionPercent: Schema.optional(Schema.Number),
        copyCompletionError: Schema.optional(
          Schema.Struct({
            errorCode: Schema.Literals(["CopySourceNotFound"]),
            errorMessage: Schema.String,
          }),
        ),
        dataAccessAuthMode: Schema.optional(
          Schema.Literals(["AzureActiveDirectory", "None"]),
        ),
        snapshotAccessState: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Pending",
            "Available",
            "InstantAccess",
            "AvailableWithInstantAccess",
          ]),
        ),
        immutabilityPolicy: Schema.optional(
          Schema.Struct({
            immutabilityDurationDays: Schema.optional(Schema.Number),
            type: Schema.optional(Schema.Literals(["Unlocked", "Locked"])),
            policyStartTime: Schema.optional(Schema.String),
            policyExpirationTime: Schema.optional(Schema.String),
            isPolicyExpired: Schema.optional(Schema.Boolean),
          }),
        ),
      }),
    ),
    managedBy: Schema.optional(Schema.String),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(
          Schema.Literals(["Standard_LRS", "Premium_LRS", "Standard_ZRS"]),
        ),
        tier: Schema.optional(Schema.String),
      }),
    ),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["EdgeZone"])),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/{snapshotName}",
      apiVersion: "2026-03-02",
    }),
  ) as unknown as Schema.Codec<SnapshotsCreateOrUpdateInput>;

// Output Schema
export interface SnapshotsCreateOrUpdateOutput {
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
export const SnapshotsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SnapshotsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a snapshot.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param snapshotName - The name of the snapshot that is being created. The name can't be changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The max name length is 80 characters.
 */
export const SnapshotsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: SnapshotsCreateOrUpdateInput,
  outputSchema: SnapshotsCreateOrUpdateOutput,
}));
// Input Schema
export interface SnapshotsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  snapshotName: string;
}
export const SnapshotsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  snapshotName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/{snapshotName}",
    apiVersion: "2026-03-02",
  }),
) as unknown as Schema.Codec<SnapshotsDeleteInput>;

// Output Schema
export type SnapshotsDeleteOutput = void;
export const SnapshotsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SnapshotsDeleteOutput>;

// The operation
/**
 * Deletes a snapshot.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param snapshotName - The name of the snapshot that is being created. The name can't be changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The max name length is 80 characters.
 */
export const SnapshotsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: SnapshotsDeleteInput,
  outputSchema: SnapshotsDeleteOutput,
}));
// Input Schema
export interface SnapshotsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  snapshotName: string;
}
export const SnapshotsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  snapshotName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/{snapshotName}",
    apiVersion: "2026-03-02",
  }),
) as unknown as Schema.Codec<SnapshotsGetInput>;

// Output Schema
export interface SnapshotsGetOutput {
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
export const SnapshotsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SnapshotsGetOutput>;

// The operation
/**
 * Gets information about a snapshot.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param snapshotName - The name of the snapshot that is being created. The name can't be changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The max name length is 80 characters.
 */
export const SnapshotsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: SnapshotsGetInput,
  outputSchema: SnapshotsGetOutput,
}));
// Input Schema
export interface SnapshotsGrantAccessInput {
  subscriptionId: string;
  resourceGroupName: string;
  snapshotName: string;
  access: "None" | "Read" | "Write";
  durationInSeconds: number;
  getSecureVMGuestStateSAS?: boolean;
  fileFormat?: "VHD" | "VHDX";
}
export const SnapshotsGrantAccessInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    snapshotName: Schema.String.pipe(T.PathParam()),
    access: Schema.Literals(["None", "Read", "Write"]),
    durationInSeconds: Schema.Number,
    getSecureVMGuestStateSAS: Schema.optional(Schema.Boolean),
    fileFormat: Schema.optional(Schema.Literals(["VHD", "VHDX"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/{snapshotName}/beginGetAccess",
      apiVersion: "2026-03-02",
    }),
  ) as unknown as Schema.Codec<SnapshotsGrantAccessInput>;

// Output Schema
export interface SnapshotsGrantAccessOutput {
  accessSAS?: string;
  securityDataAccessSAS?: string;
  securityMetadataAccessSAS?: string;
}
export const SnapshotsGrantAccessOutput =
  /*@__PURE__*/ Schema.Struct({
    accessSAS: Schema.optional(Schema.String),
    securityDataAccessSAS: Schema.optional(Schema.String),
    securityMetadataAccessSAS: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SnapshotsGrantAccessOutput>;

// The operation
/**
 * Grants access to a snapshot.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param snapshotName - The name of the snapshot that is being created. The name can't be changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The max name length is 80 characters.
 */
export const SnapshotsGrantAccess = /*@__PURE__*/ API.make(() => ({
  inputSchema: SnapshotsGrantAccessInput,
  outputSchema: SnapshotsGrantAccessOutput,
}));
// Input Schema
export interface SnapshotsListInput {
  subscriptionId: string;
}
export const SnapshotsListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/snapshots",
    apiVersion: "2026-03-02",
  }),
) as unknown as Schema.Codec<SnapshotsListInput>;

// Output Schema
export interface SnapshotsListOutput {
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
export const SnapshotsListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SnapshotsListOutput>;

// The operation
/**
 * Lists snapshots under a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const SnapshotsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: SnapshotsListInput,
  outputSchema: SnapshotsListOutput,
}));
// Input Schema
export interface SnapshotsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const SnapshotsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots",
      apiVersion: "2026-03-02",
    }),
  ) as unknown as Schema.Codec<SnapshotsListByResourceGroupInput>;

// Output Schema
export interface SnapshotsListByResourceGroupOutput {
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
export const SnapshotsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<SnapshotsListByResourceGroupOutput>;

// The operation
/**
 * Lists snapshots under a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const SnapshotsListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SnapshotsListByResourceGroupInput,
    outputSchema: SnapshotsListByResourceGroupOutput,
  }));
// Input Schema
export interface SnapshotsRevokeAccessInput {
  subscriptionId: string;
  resourceGroupName: string;
  snapshotName: string;
}
export const SnapshotsRevokeAccessInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    snapshotName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/{snapshotName}/endGetAccess",
      apiVersion: "2026-03-02",
    }),
  ) as unknown as Schema.Codec<SnapshotsRevokeAccessInput>;

// Output Schema
export type SnapshotsRevokeAccessOutput = void;
export const SnapshotsRevokeAccessOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SnapshotsRevokeAccessOutput>;

// The operation
/**
 * Revokes access to a snapshot.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param snapshotName - The name of the snapshot that is being created. The name can't be changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The max name length is 80 characters.
 */
export const SnapshotsRevokeAccess = /*@__PURE__*/ API.make(() => ({
  inputSchema: SnapshotsRevokeAccessInput,
  outputSchema: SnapshotsRevokeAccessOutput,
}));
// Input Schema
export interface SnapshotsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  snapshotName: string;
  properties?: {
    osType?: "Windows" | "Linux";
    diskSizeGB?: number;
    encryptionSettingsCollection?: {
      enabled: boolean;
      encryptionSettings?: {
        diskEncryptionKey?: { sourceVault: { id?: string }; secretUrl: string };
        keyEncryptionKey?: { sourceVault: { id?: string }; keyUrl: string };
      }[];
      encryptionSettingsVersion?: string;
    };
    encryption?: {
      diskEncryptionSetId?: string;
      type?:
        | "EncryptionAtRestWithPlatformKey"
        | "EncryptionAtRestWithCustomerKey"
        | "EncryptionAtRestWithPlatformAndCustomerKeys";
    };
    networkAccessPolicy?: "AllowAll" | "AllowPrivate" | "DenyAll";
    diskAccessId?: string;
    supportsHibernation?: boolean;
    publicNetworkAccess?: "Enabled" | "Disabled";
    dataAccessAuthMode?: "AzureActiveDirectory" | "None";
    supportedCapabilities?: {
      diskControllerTypes?: string;
      acceleratedNetwork?: boolean;
      architecture?: "x64" | "Arm64";
      supportedSecurityOption?:
        | "TrustedLaunchSupported"
        | "TrustedLaunchAndConfidentialVMSupported";
    };
    snapshotAccessState?:
      | "Unknown"
      | "Pending"
      | "Available"
      | "InstantAccess"
      | "AvailableWithInstantAccess";
  };
  tags?: Record<string, string>;
  sku?: {
    name?: "Standard_LRS" | "Premium_LRS" | "Standard_ZRS";
    tier?: string;
  };
}
export const SnapshotsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  snapshotName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      osType: Schema.optional(Schema.Literals(["Windows", "Linux"])),
      diskSizeGB: Schema.optional(Schema.Number),
      encryptionSettingsCollection: Schema.optional(
        Schema.Struct({
          enabled: Schema.Boolean,
          encryptionSettings: Schema.optional(
            Schema.Array(
              Schema.Struct({
                diskEncryptionKey: Schema.optional(
                  Schema.Struct({
                    sourceVault: Schema.Struct({
                      id: Schema.optional(Schema.String),
                    }),
                    secretUrl: Schema.String,
                  }),
                ),
                keyEncryptionKey: Schema.optional(
                  Schema.Struct({
                    sourceVault: Schema.Struct({
                      id: Schema.optional(Schema.String),
                    }),
                    keyUrl: Schema.String,
                  }),
                ),
              }),
            ),
          ),
          encryptionSettingsVersion: Schema.optional(Schema.String),
        }),
      ),
      encryption: Schema.optional(
        Schema.Struct({
          diskEncryptionSetId: Schema.optional(Schema.String),
          type: Schema.optional(
            Schema.Literals([
              "EncryptionAtRestWithPlatformKey",
              "EncryptionAtRestWithCustomerKey",
              "EncryptionAtRestWithPlatformAndCustomerKeys",
            ]),
          ),
        }),
      ),
      networkAccessPolicy: Schema.optional(
        Schema.Literals(["AllowAll", "AllowPrivate", "DenyAll"]),
      ),
      diskAccessId: Schema.optional(Schema.String),
      supportsHibernation: Schema.optional(Schema.Boolean),
      publicNetworkAccess: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      dataAccessAuthMode: Schema.optional(
        Schema.Literals(["AzureActiveDirectory", "None"]),
      ),
      supportedCapabilities: Schema.optional(
        Schema.Struct({
          diskControllerTypes: Schema.optional(Schema.String),
          acceleratedNetwork: Schema.optional(Schema.Boolean),
          architecture: Schema.optional(Schema.Literals(["x64", "Arm64"])),
          supportedSecurityOption: Schema.optional(
            Schema.Literals([
              "TrustedLaunchSupported",
              "TrustedLaunchAndConfidentialVMSupported",
            ]),
          ),
        }),
      ),
      snapshotAccessState: Schema.optional(
        Schema.Literals([
          "Unknown",
          "Pending",
          "Available",
          "InstantAccess",
          "AvailableWithInstantAccess",
        ]),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.optional(
        Schema.Literals(["Standard_LRS", "Premium_LRS", "Standard_ZRS"]),
      ),
      tier: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/{snapshotName}",
    apiVersion: "2026-03-02",
  }),
) as unknown as Schema.Codec<SnapshotsUpdateInput>;

// Output Schema
export interface SnapshotsUpdateOutput {
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
export const SnapshotsUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SnapshotsUpdateOutput>;

// The operation
/**
 * Updates (patches) a snapshot.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param snapshotName - The name of the snapshot that is being created. The name can't be changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The max name length is 80 characters.
 */
export const SnapshotsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: SnapshotsUpdateInput,
  outputSchema: SnapshotsUpdateOutput,
}));
// Input Schema
export interface SnapshotsUpdateImmutabilityPolicyInput {
  subscriptionId: string;
  resourceGroupName: string;
  snapshotName: string;
  immutabilityDurationDays: number;
  type: "Unlocked" | "Locked";
}
export const SnapshotsUpdateImmutabilityPolicyInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    snapshotName: Schema.String.pipe(T.PathParam()),
    immutabilityDurationDays: Schema.Number,
    type: Schema.Literals(["Unlocked", "Locked"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/{snapshotName}/updateImmutabilityPolicy",
      apiVersion: "2026-03-02",
    }),
  ) as unknown as Schema.Codec<SnapshotsUpdateImmutabilityPolicyInput>;

// Output Schema
export interface SnapshotsUpdateImmutabilityPolicyOutput {
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
export const SnapshotsUpdateImmutabilityPolicyOutput =
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
  }) as unknown as Schema.Codec<SnapshotsUpdateImmutabilityPolicyOutput>;

// The operation
/**
 * Updates the immutability policy of a snapshot. Sets or extends an unlocked immutability policy with the specified duration and type. If the snapshot already has a locked policy, the request will be rejected. Use updateImmutabilityPolicyLock to lock an immutability policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param snapshotName - The name of the snapshot that is being created. The name can't be changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The max name length is 80 characters.
 */
export const SnapshotsUpdateImmutabilityPolicy =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SnapshotsUpdateImmutabilityPolicyInput,
    outputSchema: SnapshotsUpdateImmutabilityPolicyOutput,
  }));
// Input Schema
export interface SnapshotsUpdateImmutabilityPolicyLockInput {
  subscriptionId: string;
  resourceGroupName: string;
  snapshotName: string;
  immutabilityDurationDays: number;
  type: "Unlocked" | "Locked";
}
export const SnapshotsUpdateImmutabilityPolicyLockInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    snapshotName: Schema.String.pipe(T.PathParam()),
    immutabilityDurationDays: Schema.Number,
    type: Schema.Literals(["Unlocked", "Locked"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/{snapshotName}/updateImmutabilityPolicyLock",
      apiVersion: "2026-03-02",
    }),
  ) as unknown as Schema.Codec<SnapshotsUpdateImmutabilityPolicyLockInput>;

// Output Schema
export interface SnapshotsUpdateImmutabilityPolicyLockOutput {
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
export const SnapshotsUpdateImmutabilityPolicyLockOutput =
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
  }) as unknown as Schema.Codec<SnapshotsUpdateImmutabilityPolicyLockOutput>;

// The operation
/**
 * Locks the immutability policy of a snapshot. Once locked, the policy cannot be reduced or removed until the lock period expires.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param snapshotName - The name of the snapshot that is being created. The name can't be changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The max name length is 80 characters.
 */
export const SnapshotsUpdateImmutabilityPolicyLock =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SnapshotsUpdateImmutabilityPolicyLockInput,
    outputSchema: SnapshotsUpdateImmutabilityPolicyLockOutput,
  }));
// Input Schema
export interface SpotPlacementScoresGetInput {
  subscriptionId: string;
  location: string;
}
export const SpotPlacementScoresGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/placementScores/spot",
      apiVersion: "2025-06-05",
    }),
  ) as unknown as Schema.Codec<SpotPlacementScoresGetInput>;

// Output Schema
export interface SpotPlacementScoresGetOutput {
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
export const SpotPlacementScoresGetOutput =
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
  }) as unknown as Schema.Codec<SpotPlacementScoresGetOutput>;

// The operation
/**
 * Gets Spot Placement Scores metadata.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const SpotPlacementScoresGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: SpotPlacementScoresGetInput,
  outputSchema: SpotPlacementScoresGetOutput,
}));
// Input Schema
export interface SpotPlacementScoresPostInput {
  subscriptionId: string;
  location: string;
  desiredLocations?: string[];
  desiredSizes?: { sku?: string }[];
  desiredCount?: number;
  availabilityZones?: boolean;
}
export const SpotPlacementScoresPostInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    desiredLocations: Schema.optional(Schema.Array(Schema.String)),
    desiredSizes: Schema.optional(
      Schema.Array(
        Schema.Struct({
          sku: Schema.optional(Schema.String),
        }),
      ),
    ),
    desiredCount: Schema.optional(Schema.Number),
    availabilityZones: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/placementScores/spot/generate",
      apiVersion: "2025-06-05",
    }),
  ) as unknown as Schema.Codec<SpotPlacementScoresPostInput>;

// Output Schema
export interface SpotPlacementScoresPostOutput {
  desiredLocations?: string[];
  desiredSizes?: { sku?: string }[];
  desiredCount?: number;
  availabilityZones?: boolean;
  placementScores?: {
    sku?: string;
    region?: string;
    availabilityZone?: string;
    score?: string;
    isQuotaAvailable?: boolean;
  }[];
}
export const SpotPlacementScoresPostOutput =
  /*@__PURE__*/ Schema.Struct({
    desiredLocations: Schema.optional(Schema.Array(Schema.String)),
    desiredSizes: Schema.optional(
      Schema.Array(
        Schema.Struct({
          sku: Schema.optional(Schema.String),
        }),
      ),
    ),
    desiredCount: Schema.optional(Schema.Number),
    availabilityZones: Schema.optional(Schema.Boolean),
    placementScores: Schema.optional(
      Schema.Array(
        Schema.Struct({
          sku: Schema.optional(Schema.String),
          region: Schema.optional(Schema.String),
          availabilityZone: Schema.optional(Schema.String),
          score: Schema.optional(Schema.String),
          isQuotaAvailable: Schema.optional(Schema.Boolean),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<SpotPlacementScoresPostOutput>;

// The operation
/**
 * Generates placement scores for Spot VM skus.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const SpotPlacementScoresPost = /*@__PURE__*/ API.make(() => ({
  inputSchema: SpotPlacementScoresPostInput,
  outputSchema: SpotPlacementScoresPostOutput,
}));
// Input Schema
export interface VirtualMachineBulkOperationsBulkCancelInput {
  subscriptionId: string;
  resourceGroupName: string;
  location: string;
  operationIds: string[];
}
export const VirtualMachineBulkOperationsBulkCancelInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    operationIds: Schema.Array(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/locations/{location}/virtualMachinesBulkCancel",
      apiVersion: "2026-06-06",
    }),
  ) as unknown as Schema.Codec<VirtualMachineBulkOperationsBulkCancelInput>;

// Output Schema
export interface VirtualMachineBulkOperationsBulkCancelOutput {
  results: {
    resourceId?: string;
    errorCode?: string;
    errorDetails?: string;
    operation?: {
      operationId: string;
      resourceId?: string;
      opType?:
        | "Unknown"
        | "Start"
        | "Deallocate"
        | "Hibernate"
        | "Create"
        | "Delete";
      subscriptionId?: string;
      deadline?: string;
      deadlineType?: "Unknown" | "InitiateAt" | "CompleteBy";
      state?:
        | "Unknown"
        | "PendingScheduling"
        | "Scheduled"
        | "PendingExecution"
        | "Executing"
        | "Succeeded"
        | "Failed"
        | "Cancelled"
        | "Blocked";
      timezone?: string;
      resourceOperationError?: { errorCode: string; errorDetails: string };
      fallbackOperationInfo?: {
        lastOpType:
          | "Unknown"
          | "Start"
          | "Deallocate"
          | "Hibernate"
          | "Create"
          | "Delete";
        status: string;
        error?: { errorCode: string; errorDetails: string };
      };
      completedAt?: string;
      retryPolicy?: {
        retryCount?: number;
        retryWindowInMinutes?: number;
        onFailureAction?:
          | "Unknown"
          | "Start"
          | "Deallocate"
          | "Hibernate"
          | "Create"
          | "Delete";
      };
    };
  }[];
}
export const VirtualMachineBulkOperationsBulkCancelOutput =
  /*@__PURE__*/ Schema.Struct({
    results: Schema.Array(
      Schema.Struct({
        resourceId: Schema.optional(Schema.String),
        errorCode: Schema.optional(Schema.String),
        errorDetails: Schema.optional(Schema.String),
        operation: Schema.optional(
          Schema.Struct({
            operationId: Schema.String,
            resourceId: Schema.optional(Schema.String),
            opType: Schema.optional(
              Schema.Literals([
                "Unknown",
                "Start",
                "Deallocate",
                "Hibernate",
                "Create",
                "Delete",
              ]),
            ),
            subscriptionId: Schema.optional(Schema.String),
            deadline: Schema.optional(Schema.String),
            deadlineType: Schema.optional(
              Schema.Literals(["Unknown", "InitiateAt", "CompleteBy"]),
            ),
            state: Schema.optional(
              Schema.Literals([
                "Unknown",
                "PendingScheduling",
                "Scheduled",
                "PendingExecution",
                "Executing",
                "Succeeded",
                "Failed",
                "Cancelled",
                "Blocked",
              ]),
            ),
            timezone: Schema.optional(Schema.String),
            resourceOperationError: Schema.optional(
              Schema.Struct({
                errorCode: Schema.String,
                errorDetails: Schema.String,
              }),
            ),
            fallbackOperationInfo: Schema.optional(
              Schema.Struct({
                lastOpType: Schema.Literals([
                  "Unknown",
                  "Start",
                  "Deallocate",
                  "Hibernate",
                  "Create",
                  "Delete",
                ]),
                status: Schema.String,
                error: Schema.optional(
                  Schema.Struct({
                    errorCode: Schema.String,
                    errorDetails: Schema.String,
                  }),
                ),
              }),
            ),
            completedAt: Schema.optional(Schema.String),
            retryPolicy: Schema.optional(
              Schema.Struct({
                retryCount: Schema.optional(Schema.Number),
                retryWindowInMinutes: Schema.optional(Schema.Number),
                onFailureAction: Schema.optional(
                  Schema.Literals([
                    "Unknown",
                    "Start",
                    "Deallocate",
                    "Hibernate",
                    "Create",
                    "Delete",
                  ]),
                ),
              }),
            ),
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<VirtualMachineBulkOperationsBulkCancelOutput>;

// The operation
/**
 * BulkCancelOperations: Cancel a previously submitted (start/deallocate/hibernate) request
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The location name.
 */
export const VirtualMachineBulkOperationsBulkCancel =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineBulkOperationsBulkCancelInput,
    outputSchema: VirtualMachineBulkOperationsBulkCancelOutput,
  }));
// Input Schema
export interface VirtualMachineBulkOperationsBulkDeallocateInput {
  subscriptionId: string;
  resourceGroupName: string;
  location: string;
  executionParameters: {
    retryPolicy?: {
      retryCount?: number;
      retryWindowInMinutes?: number;
      onFailureAction?:
        | "Unknown"
        | "Start"
        | "Deallocate"
        | "Hibernate"
        | "Create"
        | "Delete";
    };
  };
  resources: { ids: string[] };
}
export const VirtualMachineBulkOperationsBulkDeallocateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    executionParameters: Schema.Struct({
      retryPolicy: Schema.optional(
        Schema.Struct({
          retryCount: Schema.optional(Schema.Number),
          retryWindowInMinutes: Schema.optional(Schema.Number),
          onFailureAction: Schema.optional(
            Schema.Literals([
              "Unknown",
              "Start",
              "Deallocate",
              "Hibernate",
              "Create",
              "Delete",
            ]),
          ),
        }),
      ),
    }),
    resources: Schema.Struct({
      ids: Schema.Array(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/locations/{location}/virtualMachinesBulkDeallocate",
      apiVersion: "2026-06-06",
    }),
  ) as unknown as Schema.Codec<VirtualMachineBulkOperationsBulkDeallocateInput>;

// Output Schema
export interface VirtualMachineBulkOperationsBulkDeallocateOutput {
  description: string;
  type: string;
  location: string;
  results?: {
    resourceId?: string;
    errorCode?: string;
    errorDetails?: string;
    operation?: {
      operationId: string;
      resourceId?: string;
      opType?:
        | "Unknown"
        | "Start"
        | "Deallocate"
        | "Hibernate"
        | "Create"
        | "Delete";
      subscriptionId?: string;
      deadline?: string;
      deadlineType?: "Unknown" | "InitiateAt" | "CompleteBy";
      state?:
        | "Unknown"
        | "PendingScheduling"
        | "Scheduled"
        | "PendingExecution"
        | "Executing"
        | "Succeeded"
        | "Failed"
        | "Cancelled"
        | "Blocked";
      timezone?: string;
      resourceOperationError?: { errorCode: string; errorDetails: string };
      fallbackOperationInfo?: {
        lastOpType:
          | "Unknown"
          | "Start"
          | "Deallocate"
          | "Hibernate"
          | "Create"
          | "Delete";
        status: string;
        error?: { errorCode: string; errorDetails: string };
      };
      completedAt?: string;
      retryPolicy?: {
        retryCount?: number;
        retryWindowInMinutes?: number;
        onFailureAction?:
          | "Unknown"
          | "Start"
          | "Deallocate"
          | "Hibernate"
          | "Create"
          | "Delete";
      };
    };
  }[];
}
export const VirtualMachineBulkOperationsBulkDeallocateOutput =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.String,
    type: Schema.String,
    location: Schema.String,
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          resourceId: Schema.optional(Schema.String),
          errorCode: Schema.optional(Schema.String),
          errorDetails: Schema.optional(Schema.String),
          operation: Schema.optional(
            Schema.Struct({
              operationId: Schema.String,
              resourceId: Schema.optional(Schema.String),
              opType: Schema.optional(
                Schema.Literals([
                  "Unknown",
                  "Start",
                  "Deallocate",
                  "Hibernate",
                  "Create",
                  "Delete",
                ]),
              ),
              subscriptionId: Schema.optional(Schema.String),
              deadline: Schema.optional(Schema.String),
              deadlineType: Schema.optional(
                Schema.Literals(["Unknown", "InitiateAt", "CompleteBy"]),
              ),
              state: Schema.optional(
                Schema.Literals([
                  "Unknown",
                  "PendingScheduling",
                  "Scheduled",
                  "PendingExecution",
                  "Executing",
                  "Succeeded",
                  "Failed",
                  "Cancelled",
                  "Blocked",
                ]),
              ),
              timezone: Schema.optional(Schema.String),
              resourceOperationError: Schema.optional(
                Schema.Struct({
                  errorCode: Schema.String,
                  errorDetails: Schema.String,
                }),
              ),
              fallbackOperationInfo: Schema.optional(
                Schema.Struct({
                  lastOpType: Schema.Literals([
                    "Unknown",
                    "Start",
                    "Deallocate",
                    "Hibernate",
                    "Create",
                    "Delete",
                  ]),
                  status: Schema.String,
                  error: Schema.optional(
                    Schema.Struct({
                      errorCode: Schema.String,
                      errorDetails: Schema.String,
                    }),
                  ),
                }),
              ),
              completedAt: Schema.optional(Schema.String),
              retryPolicy: Schema.optional(
                Schema.Struct({
                  retryCount: Schema.optional(Schema.Number),
                  retryWindowInMinutes: Schema.optional(Schema.Number),
                  onFailureAction: Schema.optional(
                    Schema.Literals([
                      "Unknown",
                      "Start",
                      "Deallocate",
                      "Hibernate",
                      "Create",
                      "Delete",
                    ]),
                  ),
                }),
              ),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<VirtualMachineBulkOperationsBulkDeallocateOutput>;

// The operation
/**
 * BulkDeallocate: Execute deallocate operation for a batch of virtual machines, this operation is triggered as soon as Computeschedule receives it.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The location name.
 */
export const VirtualMachineBulkOperationsBulkDeallocate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineBulkOperationsBulkDeallocateInput,
    outputSchema: VirtualMachineBulkOperationsBulkDeallocateOutput,
  }));
// Input Schema
export interface VirtualMachineBulkOperationsBulkDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  location: string;
  executionParameters: {
    retryPolicy?: {
      retryCount?: number;
      retryWindowInMinutes?: number;
      onFailureAction?:
        | "Unknown"
        | "Start"
        | "Deallocate"
        | "Hibernate"
        | "Create"
        | "Delete";
    };
  };
  resources: { ids: string[] };
  forceDeletion?: boolean;
}
export const VirtualMachineBulkOperationsBulkDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    executionParameters: Schema.Struct({
      retryPolicy: Schema.optional(
        Schema.Struct({
          retryCount: Schema.optional(Schema.Number),
          retryWindowInMinutes: Schema.optional(Schema.Number),
          onFailureAction: Schema.optional(
            Schema.Literals([
              "Unknown",
              "Start",
              "Deallocate",
              "Hibernate",
              "Create",
              "Delete",
            ]),
          ),
        }),
      ),
    }),
    resources: Schema.Struct({
      ids: Schema.Array(Schema.String),
    }),
    forceDeletion: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/locations/{location}/virtualMachinesBulkDelete",
      apiVersion: "2026-06-06",
    }),
  ) as unknown as Schema.Codec<VirtualMachineBulkOperationsBulkDeleteInput>;

// Output Schema
export interface VirtualMachineBulkOperationsBulkDeleteOutput {
  description: string;
  type: string;
  location: string;
  results?: {
    resourceId?: string;
    errorCode?: string;
    errorDetails?: string;
    operation?: {
      operationId: string;
      resourceId?: string;
      opType?:
        | "Unknown"
        | "Start"
        | "Deallocate"
        | "Hibernate"
        | "Create"
        | "Delete";
      subscriptionId?: string;
      deadline?: string;
      deadlineType?: "Unknown" | "InitiateAt" | "CompleteBy";
      state?:
        | "Unknown"
        | "PendingScheduling"
        | "Scheduled"
        | "PendingExecution"
        | "Executing"
        | "Succeeded"
        | "Failed"
        | "Cancelled"
        | "Blocked";
      timezone?: string;
      resourceOperationError?: { errorCode: string; errorDetails: string };
      fallbackOperationInfo?: {
        lastOpType:
          | "Unknown"
          | "Start"
          | "Deallocate"
          | "Hibernate"
          | "Create"
          | "Delete";
        status: string;
        error?: { errorCode: string; errorDetails: string };
      };
      completedAt?: string;
      retryPolicy?: {
        retryCount?: number;
        retryWindowInMinutes?: number;
        onFailureAction?:
          | "Unknown"
          | "Start"
          | "Deallocate"
          | "Hibernate"
          | "Create"
          | "Delete";
      };
    };
  }[];
}
export const VirtualMachineBulkOperationsBulkDeleteOutput =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.String,
    type: Schema.String,
    location: Schema.String,
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          resourceId: Schema.optional(Schema.String),
          errorCode: Schema.optional(Schema.String),
          errorDetails: Schema.optional(Schema.String),
          operation: Schema.optional(
            Schema.Struct({
              operationId: Schema.String,
              resourceId: Schema.optional(Schema.String),
              opType: Schema.optional(
                Schema.Literals([
                  "Unknown",
                  "Start",
                  "Deallocate",
                  "Hibernate",
                  "Create",
                  "Delete",
                ]),
              ),
              subscriptionId: Schema.optional(Schema.String),
              deadline: Schema.optional(Schema.String),
              deadlineType: Schema.optional(
                Schema.Literals(["Unknown", "InitiateAt", "CompleteBy"]),
              ),
              state: Schema.optional(
                Schema.Literals([
                  "Unknown",
                  "PendingScheduling",
                  "Scheduled",
                  "PendingExecution",
                  "Executing",
                  "Succeeded",
                  "Failed",
                  "Cancelled",
                  "Blocked",
                ]),
              ),
              timezone: Schema.optional(Schema.String),
              resourceOperationError: Schema.optional(
                Schema.Struct({
                  errorCode: Schema.String,
                  errorDetails: Schema.String,
                }),
              ),
              fallbackOperationInfo: Schema.optional(
                Schema.Struct({
                  lastOpType: Schema.Literals([
                    "Unknown",
                    "Start",
                    "Deallocate",
                    "Hibernate",
                    "Create",
                    "Delete",
                  ]),
                  status: Schema.String,
                  error: Schema.optional(
                    Schema.Struct({
                      errorCode: Schema.String,
                      errorDetails: Schema.String,
                    }),
                  ),
                }),
              ),
              completedAt: Schema.optional(Schema.String),
              retryPolicy: Schema.optional(
                Schema.Struct({
                  retryCount: Schema.optional(Schema.Number),
                  retryWindowInMinutes: Schema.optional(Schema.Number),
                  onFailureAction: Schema.optional(
                    Schema.Literals([
                      "Unknown",
                      "Start",
                      "Deallocate",
                      "Hibernate",
                      "Create",
                      "Delete",
                    ]),
                  ),
                }),
              ),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<VirtualMachineBulkOperationsBulkDeleteOutput>;

// The operation
/**
 * BulkDelete: Execute delete operation for a batch of virtual machines, this operation is triggered as soon as Computeschedule receives it.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The location name.
 */
export const VirtualMachineBulkOperationsBulkDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineBulkOperationsBulkDeleteInput,
    outputSchema: VirtualMachineBulkOperationsBulkDeleteOutput,
  }));
// Input Schema
export interface VirtualMachineBulkOperationsBulkGetOperationsStatusInput {
  subscriptionId: string;
  resourceGroupName: string;
  location: string;
  operationIds: string[];
}
export const VirtualMachineBulkOperationsBulkGetOperationsStatusInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    operationIds: Schema.Array(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/locations/{location}/virtualMachinesBulkGetOperationStatus",
      apiVersion: "2026-06-06",
    }),
  ) as unknown as Schema.Codec<VirtualMachineBulkOperationsBulkGetOperationsStatusInput>;

// Output Schema
export interface VirtualMachineBulkOperationsBulkGetOperationsStatusOutput {
  results: {
    resourceId?: string;
    errorCode?: string;
    errorDetails?: string;
    operation?: {
      operationId: string;
      resourceId?: string;
      opType?:
        | "Unknown"
        | "Start"
        | "Deallocate"
        | "Hibernate"
        | "Create"
        | "Delete";
      subscriptionId?: string;
      deadline?: string;
      deadlineType?: "Unknown" | "InitiateAt" | "CompleteBy";
      state?:
        | "Unknown"
        | "PendingScheduling"
        | "Scheduled"
        | "PendingExecution"
        | "Executing"
        | "Succeeded"
        | "Failed"
        | "Cancelled"
        | "Blocked";
      timezone?: string;
      resourceOperationError?: { errorCode: string; errorDetails: string };
      fallbackOperationInfo?: {
        lastOpType:
          | "Unknown"
          | "Start"
          | "Deallocate"
          | "Hibernate"
          | "Create"
          | "Delete";
        status: string;
        error?: { errorCode: string; errorDetails: string };
      };
      completedAt?: string;
      retryPolicy?: {
        retryCount?: number;
        retryWindowInMinutes?: number;
        onFailureAction?:
          | "Unknown"
          | "Start"
          | "Deallocate"
          | "Hibernate"
          | "Create"
          | "Delete";
      };
    };
  }[];
}
export const VirtualMachineBulkOperationsBulkGetOperationsStatusOutput =
  /*@__PURE__*/ Schema.Struct({
    results: Schema.Array(
      Schema.Struct({
        resourceId: Schema.optional(Schema.String),
        errorCode: Schema.optional(Schema.String),
        errorDetails: Schema.optional(Schema.String),
        operation: Schema.optional(
          Schema.Struct({
            operationId: Schema.String,
            resourceId: Schema.optional(Schema.String),
            opType: Schema.optional(
              Schema.Literals([
                "Unknown",
                "Start",
                "Deallocate",
                "Hibernate",
                "Create",
                "Delete",
              ]),
            ),
            subscriptionId: Schema.optional(Schema.String),
            deadline: Schema.optional(Schema.String),
            deadlineType: Schema.optional(
              Schema.Literals(["Unknown", "InitiateAt", "CompleteBy"]),
            ),
            state: Schema.optional(
              Schema.Literals([
                "Unknown",
                "PendingScheduling",
                "Scheduled",
                "PendingExecution",
                "Executing",
                "Succeeded",
                "Failed",
                "Cancelled",
                "Blocked",
              ]),
            ),
            timezone: Schema.optional(Schema.String),
            resourceOperationError: Schema.optional(
              Schema.Struct({
                errorCode: Schema.String,
                errorDetails: Schema.String,
              }),
            ),
            fallbackOperationInfo: Schema.optional(
              Schema.Struct({
                lastOpType: Schema.Literals([
                  "Unknown",
                  "Start",
                  "Deallocate",
                  "Hibernate",
                  "Create",
                  "Delete",
                ]),
                status: Schema.String,
                error: Schema.optional(
                  Schema.Struct({
                    errorCode: Schema.String,
                    errorDetails: Schema.String,
                  }),
                ),
              }),
            ),
            completedAt: Schema.optional(Schema.String),
            retryPolicy: Schema.optional(
              Schema.Struct({
                retryCount: Schema.optional(Schema.Number),
                retryWindowInMinutes: Schema.optional(Schema.Number),
                onFailureAction: Schema.optional(
                  Schema.Literals([
                    "Unknown",
                    "Start",
                    "Deallocate",
                    "Hibernate",
                    "Create",
                    "Delete",
                  ]),
                ),
              }),
            ),
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<VirtualMachineBulkOperationsBulkGetOperationsStatusOutput>;

// The operation
/**
 * BulkGetOperationsStatus: Polling endpoint to read status of operations performed on virtual machines
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The location name.
 */
export const VirtualMachineBulkOperationsBulkGetOperationsStatus =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineBulkOperationsBulkGetOperationsStatusInput,
    outputSchema: VirtualMachineBulkOperationsBulkGetOperationsStatusOutput,
  }));
// Input Schema
export interface VirtualMachineBulkOperationsBulkHibernateInput {
  subscriptionId: string;
  resourceGroupName: string;
  location: string;
  executionParameters: {
    retryPolicy?: {
      retryCount?: number;
      retryWindowInMinutes?: number;
      onFailureAction?:
        | "Unknown"
        | "Start"
        | "Deallocate"
        | "Hibernate"
        | "Create"
        | "Delete";
    };
  };
  resources: { ids: string[] };
}
export const VirtualMachineBulkOperationsBulkHibernateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    executionParameters: Schema.Struct({
      retryPolicy: Schema.optional(
        Schema.Struct({
          retryCount: Schema.optional(Schema.Number),
          retryWindowInMinutes: Schema.optional(Schema.Number),
          onFailureAction: Schema.optional(
            Schema.Literals([
              "Unknown",
              "Start",
              "Deallocate",
              "Hibernate",
              "Create",
              "Delete",
            ]),
          ),
        }),
      ),
    }),
    resources: Schema.Struct({
      ids: Schema.Array(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/locations/{location}/virtualMachinesBulkHibernate",
      apiVersion: "2026-06-06",
    }),
  ) as unknown as Schema.Codec<VirtualMachineBulkOperationsBulkHibernateInput>;

// Output Schema
export interface VirtualMachineBulkOperationsBulkHibernateOutput {
  description: string;
  type: string;
  location: string;
  results?: {
    resourceId?: string;
    errorCode?: string;
    errorDetails?: string;
    operation?: {
      operationId: string;
      resourceId?: string;
      opType?:
        | "Unknown"
        | "Start"
        | "Deallocate"
        | "Hibernate"
        | "Create"
        | "Delete";
      subscriptionId?: string;
      deadline?: string;
      deadlineType?: "Unknown" | "InitiateAt" | "CompleteBy";
      state?:
        | "Unknown"
        | "PendingScheduling"
        | "Scheduled"
        | "PendingExecution"
        | "Executing"
        | "Succeeded"
        | "Failed"
        | "Cancelled"
        | "Blocked";
      timezone?: string;
      resourceOperationError?: { errorCode: string; errorDetails: string };
      fallbackOperationInfo?: {
        lastOpType:
          | "Unknown"
          | "Start"
          | "Deallocate"
          | "Hibernate"
          | "Create"
          | "Delete";
        status: string;
        error?: { errorCode: string; errorDetails: string };
      };
      completedAt?: string;
      retryPolicy?: {
        retryCount?: number;
        retryWindowInMinutes?: number;
        onFailureAction?:
          | "Unknown"
          | "Start"
          | "Deallocate"
          | "Hibernate"
          | "Create"
          | "Delete";
      };
    };
  }[];
}
export const VirtualMachineBulkOperationsBulkHibernateOutput =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.String,
    type: Schema.String,
    location: Schema.String,
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          resourceId: Schema.optional(Schema.String),
          errorCode: Schema.optional(Schema.String),
          errorDetails: Schema.optional(Schema.String),
          operation: Schema.optional(
            Schema.Struct({
              operationId: Schema.String,
              resourceId: Schema.optional(Schema.String),
              opType: Schema.optional(
                Schema.Literals([
                  "Unknown",
                  "Start",
                  "Deallocate",
                  "Hibernate",
                  "Create",
                  "Delete",
                ]),
              ),
              subscriptionId: Schema.optional(Schema.String),
              deadline: Schema.optional(Schema.String),
              deadlineType: Schema.optional(
                Schema.Literals(["Unknown", "InitiateAt", "CompleteBy"]),
              ),
              state: Schema.optional(
                Schema.Literals([
                  "Unknown",
                  "PendingScheduling",
                  "Scheduled",
                  "PendingExecution",
                  "Executing",
                  "Succeeded",
                  "Failed",
                  "Cancelled",
                  "Blocked",
                ]),
              ),
              timezone: Schema.optional(Schema.String),
              resourceOperationError: Schema.optional(
                Schema.Struct({
                  errorCode: Schema.String,
                  errorDetails: Schema.String,
                }),
              ),
              fallbackOperationInfo: Schema.optional(
                Schema.Struct({
                  lastOpType: Schema.Literals([
                    "Unknown",
                    "Start",
                    "Deallocate",
                    "Hibernate",
                    "Create",
                    "Delete",
                  ]),
                  status: Schema.String,
                  error: Schema.optional(
                    Schema.Struct({
                      errorCode: Schema.String,
                      errorDetails: Schema.String,
                    }),
                  ),
                }),
              ),
              completedAt: Schema.optional(Schema.String),
              retryPolicy: Schema.optional(
                Schema.Struct({
                  retryCount: Schema.optional(Schema.Number),
                  retryWindowInMinutes: Schema.optional(Schema.Number),
                  onFailureAction: Schema.optional(
                    Schema.Literals([
                      "Unknown",
                      "Start",
                      "Deallocate",
                      "Hibernate",
                      "Create",
                      "Delete",
                    ]),
                  ),
                }),
              ),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<VirtualMachineBulkOperationsBulkHibernateOutput>;

// The operation
/**
 * BulkHibernate: Execute hibernate operation for a batch of virtual machines, this operation is triggered as soon as Computeschedule receives it.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The location name.
 */
export const VirtualMachineBulkOperationsBulkHibernate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineBulkOperationsBulkHibernateInput,
    outputSchema: VirtualMachineBulkOperationsBulkHibernateOutput,
  }));
// Input Schema
export interface VirtualMachineBulkOperationsBulkStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  location: string;
  executionParameters: {
    retryPolicy?: {
      retryCount?: number;
      retryWindowInMinutes?: number;
      onFailureAction?:
        | "Unknown"
        | "Start"
        | "Deallocate"
        | "Hibernate"
        | "Create"
        | "Delete";
    };
  };
  resources: { ids: string[] };
}
export const VirtualMachineBulkOperationsBulkStartInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    executionParameters: Schema.Struct({
      retryPolicy: Schema.optional(
        Schema.Struct({
          retryCount: Schema.optional(Schema.Number),
          retryWindowInMinutes: Schema.optional(Schema.Number),
          onFailureAction: Schema.optional(
            Schema.Literals([
              "Unknown",
              "Start",
              "Deallocate",
              "Hibernate",
              "Create",
              "Delete",
            ]),
          ),
        }),
      ),
    }),
    resources: Schema.Struct({
      ids: Schema.Array(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/locations/{location}/virtualMachinesBulkStart",
      apiVersion: "2026-06-06",
    }),
  ) as unknown as Schema.Codec<VirtualMachineBulkOperationsBulkStartInput>;

// Output Schema
export interface VirtualMachineBulkOperationsBulkStartOutput {
  description: string;
  type: string;
  location: string;
  results?: {
    resourceId?: string;
    errorCode?: string;
    errorDetails?: string;
    operation?: {
      operationId: string;
      resourceId?: string;
      opType?:
        | "Unknown"
        | "Start"
        | "Deallocate"
        | "Hibernate"
        | "Create"
        | "Delete";
      subscriptionId?: string;
      deadline?: string;
      deadlineType?: "Unknown" | "InitiateAt" | "CompleteBy";
      state?:
        | "Unknown"
        | "PendingScheduling"
        | "Scheduled"
        | "PendingExecution"
        | "Executing"
        | "Succeeded"
        | "Failed"
        | "Cancelled"
        | "Blocked";
      timezone?: string;
      resourceOperationError?: { errorCode: string; errorDetails: string };
      fallbackOperationInfo?: {
        lastOpType:
          | "Unknown"
          | "Start"
          | "Deallocate"
          | "Hibernate"
          | "Create"
          | "Delete";
        status: string;
        error?: { errorCode: string; errorDetails: string };
      };
      completedAt?: string;
      retryPolicy?: {
        retryCount?: number;
        retryWindowInMinutes?: number;
        onFailureAction?:
          | "Unknown"
          | "Start"
          | "Deallocate"
          | "Hibernate"
          | "Create"
          | "Delete";
      };
    };
  }[];
}
export const VirtualMachineBulkOperationsBulkStartOutput =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.String,
    type: Schema.String,
    location: Schema.String,
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          resourceId: Schema.optional(Schema.String),
          errorCode: Schema.optional(Schema.String),
          errorDetails: Schema.optional(Schema.String),
          operation: Schema.optional(
            Schema.Struct({
              operationId: Schema.String,
              resourceId: Schema.optional(Schema.String),
              opType: Schema.optional(
                Schema.Literals([
                  "Unknown",
                  "Start",
                  "Deallocate",
                  "Hibernate",
                  "Create",
                  "Delete",
                ]),
              ),
              subscriptionId: Schema.optional(Schema.String),
              deadline: Schema.optional(Schema.String),
              deadlineType: Schema.optional(
                Schema.Literals(["Unknown", "InitiateAt", "CompleteBy"]),
              ),
              state: Schema.optional(
                Schema.Literals([
                  "Unknown",
                  "PendingScheduling",
                  "Scheduled",
                  "PendingExecution",
                  "Executing",
                  "Succeeded",
                  "Failed",
                  "Cancelled",
                  "Blocked",
                ]),
              ),
              timezone: Schema.optional(Schema.String),
              resourceOperationError: Schema.optional(
                Schema.Struct({
                  errorCode: Schema.String,
                  errorDetails: Schema.String,
                }),
              ),
              fallbackOperationInfo: Schema.optional(
                Schema.Struct({
                  lastOpType: Schema.Literals([
                    "Unknown",
                    "Start",
                    "Deallocate",
                    "Hibernate",
                    "Create",
                    "Delete",
                  ]),
                  status: Schema.String,
                  error: Schema.optional(
                    Schema.Struct({
                      errorCode: Schema.String,
                      errorDetails: Schema.String,
                    }),
                  ),
                }),
              ),
              completedAt: Schema.optional(Schema.String),
              retryPolicy: Schema.optional(
                Schema.Struct({
                  retryCount: Schema.optional(Schema.Number),
                  retryWindowInMinutes: Schema.optional(Schema.Number),
                  onFailureAction: Schema.optional(
                    Schema.Literals([
                      "Unknown",
                      "Start",
                      "Deallocate",
                      "Hibernate",
                      "Create",
                      "Delete",
                    ]),
                  ),
                }),
              ),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<VirtualMachineBulkOperationsBulkStartOutput>;

// The operation
/**
 * BulkStart: Execute start operation for a batch of virtual machines, this operation is triggered as soon as Computeschedule receives it.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The location name.
 */
export const VirtualMachineBulkOperationsBulkStart =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineBulkOperationsBulkStartInput,
    outputSchema: VirtualMachineBulkOperationsBulkStartOutput,
  }));
