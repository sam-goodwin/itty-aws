/**
 * Azure Compute API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const ContainerServicesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type ContainerServicesCreateOrUpdateInput =
  typeof ContainerServicesCreateOrUpdateInput.Type;

// Output Schema
export const ContainerServicesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
export type ContainerServicesCreateOrUpdateOutput =
  typeof ContainerServicesCreateOrUpdateOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ContainerServicesCreateOrUpdateInput,
    outputSchema: ContainerServicesCreateOrUpdateOutput,
  }));
// Input Schema
export const ContainerServicesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerServiceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/containerServices/{containerServiceName}",
      apiVersion: "2017-01-31",
    }),
  );
export type ContainerServicesDeleteInput =
  typeof ContainerServicesDeleteInput.Type;

// Output Schema
export const ContainerServicesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ContainerServicesDeleteOutput =
  typeof ContainerServicesDeleteOutput.Type;

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
export const ContainerServicesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ContainerServicesDeleteInput,
    outputSchema: ContainerServicesDeleteOutput,
  }),
);
// Input Schema
export const ContainerServicesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerServiceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/containerServices/{containerServiceName}",
      apiVersion: "2017-01-31",
    }),
  );
export type ContainerServicesGetInput = typeof ContainerServicesGetInput.Type;

// Output Schema
export const ContainerServicesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
export type ContainerServicesGetOutput = typeof ContainerServicesGetOutput.Type;

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
export const ContainerServicesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ContainerServicesGetInput,
    outputSchema: ContainerServicesGetOutput,
  }),
);
// Input Schema
export const ContainerServicesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ContainerService/containerServices",
      apiVersion: "2017-01-31",
    }),
  );
export type ContainerServicesListInput = typeof ContainerServicesListInput.Type;

// Output Schema
export const ContainerServicesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type ContainerServicesListOutput =
  typeof ContainerServicesListOutput.Type;

// The operation
/**
 * Gets a list of container services in the specified subscription.
 *
 * Gets a list of container services in the specified subscription. The operation returns properties of each container service including state, orchestrator, number of masters and agents, and FQDNs of masters and agents.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ContainerServicesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ContainerServicesListInput,
    outputSchema: ContainerServicesListOutput,
  }),
);
// Input Schema
export const ContainerServicesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/containerServices",
      apiVersion: "2017-01-31",
    }),
  );
export type ContainerServicesListByResourceGroupInput =
  typeof ContainerServicesListByResourceGroupInput.Type;

// Output Schema
export const ContainerServicesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type ContainerServicesListByResourceGroupOutput =
  typeof ContainerServicesListByResourceGroupOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ContainerServicesListByResourceGroupInput,
    outputSchema: ContainerServicesListByResourceGroupOutput,
  }));
// Input Schema
export const DiskAccessesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type DiskAccessesCreateOrUpdateInput =
  typeof DiskAccessesCreateOrUpdateInput.Type;

// Output Schema
export const DiskAccessesCreateOrUpdateOutput =
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
  });
export type DiskAccessesCreateOrUpdateOutput =
  typeof DiskAccessesCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a disk access resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskAccessName - The name of the disk access resource that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
 */
export const DiskAccessesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DiskAccessesCreateOrUpdateInput,
    outputSchema: DiskAccessesCreateOrUpdateOutput,
  }),
);
// Input Schema
export const DiskAccessesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    diskAccessName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses/{diskAccessName}",
      apiVersion: "2026-03-02",
    }),
  );
export type DiskAccessesDeleteInput = typeof DiskAccessesDeleteInput.Type;

// Output Schema
export const DiskAccessesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DiskAccessesDeleteOutput = typeof DiskAccessesDeleteOutput.Type;

// The operation
/**
 * Deletes a disk access resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskAccessName - The name of the disk access resource that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
 */
export const DiskAccessesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DiskAccessesDeleteInput,
  outputSchema: DiskAccessesDeleteOutput,
}));
// Input Schema
export const DiskAccessesDeleteAPrivateEndpointConnectionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type DiskAccessesDeleteAPrivateEndpointConnectionInput =
  typeof DiskAccessesDeleteAPrivateEndpointConnectionInput.Type;

// Output Schema
export const DiskAccessesDeleteAPrivateEndpointConnectionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DiskAccessesDeleteAPrivateEndpointConnectionOutput =
  typeof DiskAccessesDeleteAPrivateEndpointConnectionOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DiskAccessesDeleteAPrivateEndpointConnectionInput,
    outputSchema: DiskAccessesDeleteAPrivateEndpointConnectionOutput,
  }));
// Input Schema
export const DiskAccessesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  diskAccessName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses/{diskAccessName}",
    apiVersion: "2026-03-02",
  }),
);
export type DiskAccessesGetInput = typeof DiskAccessesGetInput.Type;

// Output Schema
export const DiskAccessesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type DiskAccessesGetOutput = typeof DiskAccessesGetOutput.Type;

// The operation
/**
 * Gets information about a disk access resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskAccessName - The name of the disk access resource that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
 */
export const DiskAccessesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DiskAccessesGetInput,
  outputSchema: DiskAccessesGetOutput,
}));
// Input Schema
export const DiskAccessesGetAPrivateEndpointConnectionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type DiskAccessesGetAPrivateEndpointConnectionInput =
  typeof DiskAccessesGetAPrivateEndpointConnectionInput.Type;

// Output Schema
export const DiskAccessesGetAPrivateEndpointConnectionOutput =
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
  });
export type DiskAccessesGetAPrivateEndpointConnectionOutput =
  typeof DiskAccessesGetAPrivateEndpointConnectionOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DiskAccessesGetAPrivateEndpointConnectionInput,
    outputSchema: DiskAccessesGetAPrivateEndpointConnectionOutput,
  }));
// Input Schema
export const DiskAccessesGetPrivateLinkResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    diskAccessName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses/{diskAccessName}/privatelinkresources",
      apiVersion: "2026-03-02",
    }),
  );
export type DiskAccessesGetPrivateLinkResourcesInput =
  typeof DiskAccessesGetPrivateLinkResourcesInput.Type;

// Output Schema
export const DiskAccessesGetPrivateLinkResourcesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type DiskAccessesGetPrivateLinkResourcesOutput =
  typeof DiskAccessesGetPrivateLinkResourcesOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DiskAccessesGetPrivateLinkResourcesInput,
    outputSchema: DiskAccessesGetPrivateLinkResourcesOutput,
  }));
// Input Schema
export const DiskAccessesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/diskAccesses",
    apiVersion: "2026-03-02",
  }),
);
export type DiskAccessesListInput = typeof DiskAccessesListInput.Type;

// Output Schema
export const DiskAccessesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
);
export type DiskAccessesListOutput = typeof DiskAccessesListOutput.Type;

// The operation
/**
 * Lists all the disk access resources under a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DiskAccessesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DiskAccessesListInput,
  outputSchema: DiskAccessesListOutput,
}));
// Input Schema
export const DiskAccessesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses",
      apiVersion: "2026-03-02",
    }),
  );
export type DiskAccessesListByResourceGroupInput =
  typeof DiskAccessesListByResourceGroupInput.Type;

// Output Schema
export const DiskAccessesListByResourceGroupOutput =
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
  });
export type DiskAccessesListByResourceGroupOutput =
  typeof DiskAccessesListByResourceGroupOutput.Type;

// The operation
/**
 * Lists all the disk access resources under a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const DiskAccessesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DiskAccessesListByResourceGroupInput,
    outputSchema: DiskAccessesListByResourceGroupOutput,
  }));
// Input Schema
export const DiskAccessesListPrivateEndpointConnectionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    diskAccessName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses/{diskAccessName}/privateEndpointConnections",
      apiVersion: "2026-03-02",
    }),
  );
export type DiskAccessesListPrivateEndpointConnectionsInput =
  typeof DiskAccessesListPrivateEndpointConnectionsInput.Type;

// Output Schema
export const DiskAccessesListPrivateEndpointConnectionsOutput =
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
  });
export type DiskAccessesListPrivateEndpointConnectionsOutput =
  typeof DiskAccessesListPrivateEndpointConnectionsOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DiskAccessesListPrivateEndpointConnectionsInput,
    outputSchema: DiskAccessesListPrivateEndpointConnectionsOutput,
  }));
// Input Schema
export const DiskAccessesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type DiskAccessesUpdateInput = typeof DiskAccessesUpdateInput.Type;

// Output Schema
export const DiskAccessesUpdateOutput =
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
  });
export type DiskAccessesUpdateOutput = typeof DiskAccessesUpdateOutput.Type;

// The operation
/**
 * Updates (patches) a disk access resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskAccessName - The name of the disk access resource that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
 */
export const DiskAccessesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DiskAccessesUpdateInput,
  outputSchema: DiskAccessesUpdateOutput,
}));
// Input Schema
export const DiskAccessesUpdateAPrivateEndpointConnectionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type DiskAccessesUpdateAPrivateEndpointConnectionInput =
  typeof DiskAccessesUpdateAPrivateEndpointConnectionInput.Type;

// Output Schema
export const DiskAccessesUpdateAPrivateEndpointConnectionOutput =
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
  });
export type DiskAccessesUpdateAPrivateEndpointConnectionOutput =
  typeof DiskAccessesUpdateAPrivateEndpointConnectionOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DiskAccessesUpdateAPrivateEndpointConnectionInput,
    outputSchema: DiskAccessesUpdateAPrivateEndpointConnectionOutput,
  }));
// Input Schema
export const DiskEncryptionSetsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type DiskEncryptionSetsCreateOrUpdateInput =
  typeof DiskEncryptionSetsCreateOrUpdateInput.Type;

// Output Schema
export const DiskEncryptionSetsCreateOrUpdateOutput =
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
  });
export type DiskEncryptionSetsCreateOrUpdateOutput =
  typeof DiskEncryptionSetsCreateOrUpdateOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DiskEncryptionSetsCreateOrUpdateInput,
    outputSchema: DiskEncryptionSetsCreateOrUpdateOutput,
  }));
// Input Schema
export const DiskEncryptionSetsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    diskEncryptionSetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{diskEncryptionSetName}",
      apiVersion: "2026-03-02",
    }),
  );
export type DiskEncryptionSetsDeleteInput =
  typeof DiskEncryptionSetsDeleteInput.Type;

// Output Schema
export const DiskEncryptionSetsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DiskEncryptionSetsDeleteOutput =
  typeof DiskEncryptionSetsDeleteOutput.Type;

// The operation
/**
 * Deletes a disk encryption set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskEncryptionSetName - The name of the disk encryption set that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
 */
export const DiskEncryptionSetsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DiskEncryptionSetsDeleteInput,
    outputSchema: DiskEncryptionSetsDeleteOutput,
  }),
);
// Input Schema
export const DiskEncryptionSetsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    diskEncryptionSetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{diskEncryptionSetName}",
      apiVersion: "2026-03-02",
    }),
  );
export type DiskEncryptionSetsGetInput = typeof DiskEncryptionSetsGetInput.Type;

// Output Schema
export const DiskEncryptionSetsGetOutput =
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
  });
export type DiskEncryptionSetsGetOutput =
  typeof DiskEncryptionSetsGetOutput.Type;

// The operation
/**
 * Gets information about a disk encryption set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskEncryptionSetName - The name of the disk encryption set that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
 */
export const DiskEncryptionSetsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DiskEncryptionSetsGetInput,
    outputSchema: DiskEncryptionSetsGetOutput,
  }),
);
// Input Schema
export const DiskEncryptionSetsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/diskEncryptionSets",
      apiVersion: "2026-03-02",
    }),
  );
export type DiskEncryptionSetsListInput =
  typeof DiskEncryptionSetsListInput.Type;

// Output Schema
export const DiskEncryptionSetsListOutput =
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
  });
export type DiskEncryptionSetsListOutput =
  typeof DiskEncryptionSetsListOutput.Type;

// The operation
/**
 * Lists all the disk encryption sets under a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DiskEncryptionSetsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DiskEncryptionSetsListInput,
    outputSchema: DiskEncryptionSetsListOutput,
  }),
);
// Input Schema
export const DiskEncryptionSetsListAssociatedResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    diskEncryptionSetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{diskEncryptionSetName}/associatedResources",
      apiVersion: "2026-03-02",
    }),
  );
export type DiskEncryptionSetsListAssociatedResourcesInput =
  typeof DiskEncryptionSetsListAssociatedResourcesInput.Type;

// Output Schema
export const DiskEncryptionSetsListAssociatedResourcesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.String),
    nextLink: Schema.optional(Schema.String),
  });
export type DiskEncryptionSetsListAssociatedResourcesOutput =
  typeof DiskEncryptionSetsListAssociatedResourcesOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DiskEncryptionSetsListAssociatedResourcesInput,
    outputSchema: DiskEncryptionSetsListAssociatedResourcesOutput,
  }));
// Input Schema
export const DiskEncryptionSetsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets",
      apiVersion: "2026-03-02",
    }),
  );
export type DiskEncryptionSetsListByResourceGroupInput =
  typeof DiskEncryptionSetsListByResourceGroupInput.Type;

// Output Schema
export const DiskEncryptionSetsListByResourceGroupOutput =
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
  });
export type DiskEncryptionSetsListByResourceGroupOutput =
  typeof DiskEncryptionSetsListByResourceGroupOutput.Type;

// The operation
/**
 * Lists all the disk encryption sets under a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const DiskEncryptionSetsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DiskEncryptionSetsListByResourceGroupInput,
    outputSchema: DiskEncryptionSetsListByResourceGroupOutput,
  }));
// Input Schema
export const DiskEncryptionSetsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type DiskEncryptionSetsUpdateInput =
  typeof DiskEncryptionSetsUpdateInput.Type;

// Output Schema
export const DiskEncryptionSetsUpdateOutput =
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
  });
export type DiskEncryptionSetsUpdateOutput =
  typeof DiskEncryptionSetsUpdateOutput.Type;

// The operation
/**
 * Updates (patches) a disk encryption set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskEncryptionSetName - The name of the disk encryption set that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
 */
export const DiskEncryptionSetsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DiskEncryptionSetsUpdateInput,
    outputSchema: DiskEncryptionSetsUpdateOutput,
  }),
);
// Input Schema
export const DiskRestorePointGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type DiskRestorePointGetInput = typeof DiskRestorePointGetInput.Type;

// Output Schema
export const DiskRestorePointGetOutput =
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
  });
export type DiskRestorePointGetOutput = typeof DiskRestorePointGetOutput.Type;

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
export const DiskRestorePointGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DiskRestorePointGetInput,
  outputSchema: DiskRestorePointGetOutput,
}));
// Input Schema
export const DiskRestorePointGrantAccessInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type DiskRestorePointGrantAccessInput =
  typeof DiskRestorePointGrantAccessInput.Type;

// Output Schema
export const DiskRestorePointGrantAccessOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accessSAS: Schema.optional(Schema.String),
    securityDataAccessSAS: Schema.optional(Schema.String),
    securityMetadataAccessSAS: Schema.optional(Schema.String),
  });
export type DiskRestorePointGrantAccessOutput =
  typeof DiskRestorePointGrantAccessOutput.Type;

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
export const DiskRestorePointGrantAccess = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DiskRestorePointGrantAccessInput,
    outputSchema: DiskRestorePointGrantAccessOutput,
  }),
);
// Input Schema
export const DiskRestorePointListByRestorePointInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type DiskRestorePointListByRestorePointInput =
  typeof DiskRestorePointListByRestorePointInput.Type;

// Output Schema
export const DiskRestorePointListByRestorePointOutput =
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
  });
export type DiskRestorePointListByRestorePointOutput =
  typeof DiskRestorePointListByRestorePointOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DiskRestorePointListByRestorePointInput,
    outputSchema: DiskRestorePointListByRestorePointOutput,
  }));
// Input Schema
export const DiskRestorePointRevokeAccessInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type DiskRestorePointRevokeAccessInput =
  typeof DiskRestorePointRevokeAccessInput.Type;

// Output Schema
export const DiskRestorePointRevokeAccessOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DiskRestorePointRevokeAccessOutput =
  typeof DiskRestorePointRevokeAccessOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DiskRestorePointRevokeAccessInput,
    outputSchema: DiskRestorePointRevokeAccessOutput,
  }));
// Input Schema
export const DisksCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type DisksCreateOrUpdateInput = typeof DisksCreateOrUpdateInput.Type;

// Output Schema
export const DisksCreateOrUpdateOutput =
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
  });
export type DisksCreateOrUpdateOutput = typeof DisksCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a disk.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskName - The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
 */
export const DisksCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DisksCreateOrUpdateInput,
  outputSchema: DisksCreateOrUpdateOutput,
}));
// Input Schema
export const DisksDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  diskName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}",
    apiVersion: "2026-03-02",
  }),
);
export type DisksDeleteInput = typeof DisksDeleteInput.Type;

// Output Schema
export const DisksDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DisksDeleteOutput = typeof DisksDeleteOutput.Type;

// The operation
/**
 * Deletes a disk.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskName - The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
 */
export const DisksDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DisksDeleteInput,
  outputSchema: DisksDeleteOutput,
}));
// Input Schema
export const DisksGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  diskName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}",
    apiVersion: "2026-03-02",
  }),
);
export type DisksGetInput = typeof DisksGetInput.Type;

// Output Schema
export const DisksGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type DisksGetOutput = typeof DisksGetOutput.Type;

// The operation
/**
 * Gets information about a disk.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskName - The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
 */
export const DisksGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DisksGetInput,
  outputSchema: DisksGetOutput,
}));
// Input Schema
export const DisksGrantAccessInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
);
export type DisksGrantAccessInput = typeof DisksGrantAccessInput.Type;

// Output Schema
export const DisksGrantAccessOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    accessSAS: Schema.optional(Schema.String),
    securityDataAccessSAS: Schema.optional(Schema.String),
    securityMetadataAccessSAS: Schema.optional(Schema.String),
  },
);
export type DisksGrantAccessOutput = typeof DisksGrantAccessOutput.Type;

// The operation
/**
 * Grants access to a disk.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskName - The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
 */
export const DisksGrantAccess = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DisksGrantAccessInput,
  outputSchema: DisksGrantAccessOutput,
}));
// Input Schema
export const DisksListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/disks",
    apiVersion: "2026-03-02",
  }),
);
export type DisksListInput = typeof DisksListInput.Type;

// Output Schema
export const DisksListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type DisksListOutput = typeof DisksListOutput.Type;

// The operation
/**
 * Lists all the disks under a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DisksList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DisksListInput,
  outputSchema: DisksListOutput,
}));
// Input Schema
export const DisksListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks",
      apiVersion: "2026-03-02",
    }),
  );
export type DisksListByResourceGroupInput =
  typeof DisksListByResourceGroupInput.Type;

// Output Schema
export const DisksListByResourceGroupOutput =
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
  });
export type DisksListByResourceGroupOutput =
  typeof DisksListByResourceGroupOutput.Type;

// The operation
/**
 * Lists all the disks under a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const DisksListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DisksListByResourceGroupInput,
    outputSchema: DisksListByResourceGroupOutput,
  }),
);
// Input Schema
export const DisksRevokeAccessInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    diskName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}/endGetAccess",
    apiVersion: "2026-03-02",
  }),
);
export type DisksRevokeAccessInput = typeof DisksRevokeAccessInput.Type;

// Output Schema
export const DisksRevokeAccessOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DisksRevokeAccessOutput = typeof DisksRevokeAccessOutput.Type;

// The operation
/**
 * Revokes access to a disk.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskName - The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
 */
export const DisksRevokeAccess = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DisksRevokeAccessInput,
  outputSchema: DisksRevokeAccessOutput,
}));
// Input Schema
export const DisksUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
);
export type DisksUpdateInput = typeof DisksUpdateInput.Type;

// Output Schema
export const DisksUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type DisksUpdateOutput = typeof DisksUpdateOutput.Type;

// The operation
/**
 * Updates (patches) a disk.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskName - The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
 */
export const DisksUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DisksUpdateInput,
  outputSchema: DisksUpdateOutput,
}));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Compute/operations",
    apiVersion: "2026-06-06",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export const SnapshotsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type SnapshotsCreateOrUpdateInput =
  typeof SnapshotsCreateOrUpdateInput.Type;

// Output Schema
export const SnapshotsCreateOrUpdateOutput =
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
  });
export type SnapshotsCreateOrUpdateOutput =
  typeof SnapshotsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a snapshot.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param snapshotName - The name of the snapshot that is being created. The name can't be changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The max name length is 80 characters.
 */
export const SnapshotsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SnapshotsCreateOrUpdateInput,
    outputSchema: SnapshotsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const SnapshotsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  snapshotName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/{snapshotName}",
    apiVersion: "2026-03-02",
  }),
);
export type SnapshotsDeleteInput = typeof SnapshotsDeleteInput.Type;

// Output Schema
export const SnapshotsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SnapshotsDeleteOutput = typeof SnapshotsDeleteOutput.Type;

// The operation
/**
 * Deletes a snapshot.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param snapshotName - The name of the snapshot that is being created. The name can't be changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The max name length is 80 characters.
 */
export const SnapshotsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SnapshotsDeleteInput,
  outputSchema: SnapshotsDeleteOutput,
}));
// Input Schema
export const SnapshotsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  snapshotName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/{snapshotName}",
    apiVersion: "2026-03-02",
  }),
);
export type SnapshotsGetInput = typeof SnapshotsGetInput.Type;

// Output Schema
export const SnapshotsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type SnapshotsGetOutput = typeof SnapshotsGetOutput.Type;

// The operation
/**
 * Gets information about a snapshot.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param snapshotName - The name of the snapshot that is being created. The name can't be changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The max name length is 80 characters.
 */
export const SnapshotsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SnapshotsGetInput,
  outputSchema: SnapshotsGetOutput,
}));
// Input Schema
export const SnapshotsGrantAccessInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type SnapshotsGrantAccessInput = typeof SnapshotsGrantAccessInput.Type;

// Output Schema
export const SnapshotsGrantAccessOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accessSAS: Schema.optional(Schema.String),
    securityDataAccessSAS: Schema.optional(Schema.String),
    securityMetadataAccessSAS: Schema.optional(Schema.String),
  });
export type SnapshotsGrantAccessOutput = typeof SnapshotsGrantAccessOutput.Type;

// The operation
/**
 * Grants access to a snapshot.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param snapshotName - The name of the snapshot that is being created. The name can't be changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The max name length is 80 characters.
 */
export const SnapshotsGrantAccess = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SnapshotsGrantAccessInput,
    outputSchema: SnapshotsGrantAccessOutput,
  }),
);
// Input Schema
export const SnapshotsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/snapshots",
    apiVersion: "2026-03-02",
  }),
);
export type SnapshotsListInput = typeof SnapshotsListInput.Type;

// Output Schema
export const SnapshotsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type SnapshotsListOutput = typeof SnapshotsListOutput.Type;

// The operation
/**
 * Lists snapshots under a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const SnapshotsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SnapshotsListInput,
  outputSchema: SnapshotsListOutput,
}));
// Input Schema
export const SnapshotsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots",
      apiVersion: "2026-03-02",
    }),
  );
export type SnapshotsListByResourceGroupInput =
  typeof SnapshotsListByResourceGroupInput.Type;

// Output Schema
export const SnapshotsListByResourceGroupOutput =
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
  });
export type SnapshotsListByResourceGroupOutput =
  typeof SnapshotsListByResourceGroupOutput.Type;

// The operation
/**
 * Lists snapshots under a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const SnapshotsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SnapshotsListByResourceGroupInput,
    outputSchema: SnapshotsListByResourceGroupOutput,
  }));
// Input Schema
export const SnapshotsRevokeAccessInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    snapshotName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/{snapshotName}/endGetAccess",
      apiVersion: "2026-03-02",
    }),
  );
export type SnapshotsRevokeAccessInput = typeof SnapshotsRevokeAccessInput.Type;

// Output Schema
export const SnapshotsRevokeAccessOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SnapshotsRevokeAccessOutput =
  typeof SnapshotsRevokeAccessOutput.Type;

// The operation
/**
 * Revokes access to a snapshot.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param snapshotName - The name of the snapshot that is being created. The name can't be changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The max name length is 80 characters.
 */
export const SnapshotsRevokeAccess = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SnapshotsRevokeAccessInput,
    outputSchema: SnapshotsRevokeAccessOutput,
  }),
);
// Input Schema
export const SnapshotsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
);
export type SnapshotsUpdateInput = typeof SnapshotsUpdateInput.Type;

// Output Schema
export const SnapshotsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type SnapshotsUpdateOutput = typeof SnapshotsUpdateOutput.Type;

// The operation
/**
 * Updates (patches) a snapshot.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param snapshotName - The name of the snapshot that is being created. The name can't be changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The max name length is 80 characters.
 */
export const SnapshotsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SnapshotsUpdateInput,
  outputSchema: SnapshotsUpdateOutput,
}));
// Input Schema
export const SnapshotsUpdateImmutabilityPolicyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type SnapshotsUpdateImmutabilityPolicyInput =
  typeof SnapshotsUpdateImmutabilityPolicyInput.Type;

// Output Schema
export const SnapshotsUpdateImmutabilityPolicyOutput =
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
  });
export type SnapshotsUpdateImmutabilityPolicyOutput =
  typeof SnapshotsUpdateImmutabilityPolicyOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SnapshotsUpdateImmutabilityPolicyInput,
    outputSchema: SnapshotsUpdateImmutabilityPolicyOutput,
  }));
// Input Schema
export const SnapshotsUpdateImmutabilityPolicyLockInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type SnapshotsUpdateImmutabilityPolicyLockInput =
  typeof SnapshotsUpdateImmutabilityPolicyLockInput.Type;

// Output Schema
export const SnapshotsUpdateImmutabilityPolicyLockOutput =
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
  });
export type SnapshotsUpdateImmutabilityPolicyLockOutput =
  typeof SnapshotsUpdateImmutabilityPolicyLockOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SnapshotsUpdateImmutabilityPolicyLockInput,
    outputSchema: SnapshotsUpdateImmutabilityPolicyLockOutput,
  }));
// Input Schema
export const SpotPlacementScoresGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/placementScores/spot",
      apiVersion: "2025-06-05",
    }),
  );
export type SpotPlacementScoresGetInput =
  typeof SpotPlacementScoresGetInput.Type;

// Output Schema
export const SpotPlacementScoresGetOutput =
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
  });
export type SpotPlacementScoresGetOutput =
  typeof SpotPlacementScoresGetOutput.Type;

// The operation
/**
 * Gets Spot Placement Scores metadata.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const SpotPlacementScoresGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SpotPlacementScoresGetInput,
    outputSchema: SpotPlacementScoresGetOutput,
  }),
);
// Input Schema
export const SpotPlacementScoresPostInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type SpotPlacementScoresPostInput =
  typeof SpotPlacementScoresPostInput.Type;

// Output Schema
export const SpotPlacementScoresPostOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type SpotPlacementScoresPostOutput =
  typeof SpotPlacementScoresPostOutput.Type;

// The operation
/**
 * Generates placement scores for Spot VM skus.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const SpotPlacementScoresPost = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SpotPlacementScoresPostInput,
    outputSchema: SpotPlacementScoresPostOutput,
  }),
);
// Input Schema
export const VirtualMachineBulkOperationsBulkCancelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type VirtualMachineBulkOperationsBulkCancelInput =
  typeof VirtualMachineBulkOperationsBulkCancelInput.Type;

// Output Schema
export const VirtualMachineBulkOperationsBulkCancelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type VirtualMachineBulkOperationsBulkCancelOutput =
  typeof VirtualMachineBulkOperationsBulkCancelOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineBulkOperationsBulkCancelInput,
    outputSchema: VirtualMachineBulkOperationsBulkCancelOutput,
  }));
// Input Schema
export const VirtualMachineBulkOperationsBulkDeallocateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type VirtualMachineBulkOperationsBulkDeallocateInput =
  typeof VirtualMachineBulkOperationsBulkDeallocateInput.Type;

// Output Schema
export const VirtualMachineBulkOperationsBulkDeallocateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type VirtualMachineBulkOperationsBulkDeallocateOutput =
  typeof VirtualMachineBulkOperationsBulkDeallocateOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineBulkOperationsBulkDeallocateInput,
    outputSchema: VirtualMachineBulkOperationsBulkDeallocateOutput,
  }));
// Input Schema
export const VirtualMachineBulkOperationsBulkDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type VirtualMachineBulkOperationsBulkDeleteInput =
  typeof VirtualMachineBulkOperationsBulkDeleteInput.Type;

// Output Schema
export const VirtualMachineBulkOperationsBulkDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type VirtualMachineBulkOperationsBulkDeleteOutput =
  typeof VirtualMachineBulkOperationsBulkDeleteOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineBulkOperationsBulkDeleteInput,
    outputSchema: VirtualMachineBulkOperationsBulkDeleteOutput,
  }));
// Input Schema
export const VirtualMachineBulkOperationsBulkGetOperationsStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type VirtualMachineBulkOperationsBulkGetOperationsStatusInput =
  typeof VirtualMachineBulkOperationsBulkGetOperationsStatusInput.Type;

// Output Schema
export const VirtualMachineBulkOperationsBulkGetOperationsStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type VirtualMachineBulkOperationsBulkGetOperationsStatusOutput =
  typeof VirtualMachineBulkOperationsBulkGetOperationsStatusOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineBulkOperationsBulkGetOperationsStatusInput,
    outputSchema: VirtualMachineBulkOperationsBulkGetOperationsStatusOutput,
  }));
// Input Schema
export const VirtualMachineBulkOperationsBulkHibernateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type VirtualMachineBulkOperationsBulkHibernateInput =
  typeof VirtualMachineBulkOperationsBulkHibernateInput.Type;

// Output Schema
export const VirtualMachineBulkOperationsBulkHibernateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type VirtualMachineBulkOperationsBulkHibernateOutput =
  typeof VirtualMachineBulkOperationsBulkHibernateOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineBulkOperationsBulkHibernateInput,
    outputSchema: VirtualMachineBulkOperationsBulkHibernateOutput,
  }));
// Input Schema
export const VirtualMachineBulkOperationsBulkStartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type VirtualMachineBulkOperationsBulkStartInput =
  typeof VirtualMachineBulkOperationsBulkStartInput.Type;

// Output Schema
export const VirtualMachineBulkOperationsBulkStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type VirtualMachineBulkOperationsBulkStartOutput =
  typeof VirtualMachineBulkOperationsBulkStartOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineBulkOperationsBulkStartInput,
    outputSchema: VirtualMachineBulkOperationsBulkStartOutput,
  }));
