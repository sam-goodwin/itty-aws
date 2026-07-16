/**
 * Azure Vmwarecloudsimple API
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
export interface CustomizationPoliciesGetInput {
  subscriptionId: string;
  regionId: string;
  pcName: string;
  customizationPolicyName: string;
}
export const CustomizationPoliciesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    regionId: Schema.String.pipe(T.PathParam()),
    pcName: Schema.String.pipe(T.PathParam()),
    customizationPolicyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/privateClouds/{pcName}/customizationPolicies/{customizationPolicyName}",
      apiVersion: "2019-04-01",
    }),
  ) as unknown as Schema.Codec<CustomizationPoliciesGetInput>;

// Output Schema
export interface CustomizationPoliciesGetOutput {
  id?: string;
  location?: string;
  name?: string;
  properties?: {
    description?: string;
    privateCloudId?: string;
    specification?: {
      identity?: {
        data?: string;
        hostName?: {
          name?: string;
          type?:
            | "USER_DEFINED"
            | "PREFIX_BASED"
            | "FIXED"
            | "VIRTUAL_MACHINE_NAME"
            | "CUSTOM_NAME";
        };
        type?: "WINDOWS_TEXT" | "WINDOWS" | "LINUX";
        userData?: { isPasswordPredefined?: boolean };
      };
      nicSettings?: {
        adapter?: {
          gateway?: string[];
          ip?: {
            argument?: string;
            ipAddress?: string;
            type?: "CUSTOM" | "DHCP_IP" | "FIXED_IP" | "USER_DEFINED";
          };
          subnetMask?: string;
        };
        macAddress?: string;
      }[];
    };
    type?: "LINUX" | "WINDOWS";
    version?: string;
  };
  type?: string;
}
export const CustomizationPoliciesGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        description: Schema.optional(Schema.String),
        privateCloudId: Schema.optional(Schema.String),
        specification: Schema.optional(
          Schema.Struct({
            identity: Schema.optional(
              Schema.Struct({
                data: Schema.optional(Schema.String),
                hostName: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    type: Schema.optional(
                      Schema.Literals([
                        "USER_DEFINED",
                        "PREFIX_BASED",
                        "FIXED",
                        "VIRTUAL_MACHINE_NAME",
                        "CUSTOM_NAME",
                      ]),
                    ),
                  }),
                ),
                type: Schema.optional(
                  Schema.Literals(["WINDOWS_TEXT", "WINDOWS", "LINUX"]),
                ),
                userData: Schema.optional(
                  Schema.Struct({
                    isPasswordPredefined: Schema.optional(Schema.Boolean),
                  }),
                ),
              }),
            ),
            nicSettings: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  adapter: Schema.optional(
                    Schema.Struct({
                      gateway: Schema.optional(Schema.Array(Schema.String)),
                      ip: Schema.optional(
                        Schema.Struct({
                          argument: Schema.optional(Schema.String),
                          ipAddress: Schema.optional(Schema.String),
                          type: Schema.optional(
                            Schema.Literals([
                              "CUSTOM",
                              "DHCP_IP",
                              "FIXED_IP",
                              "USER_DEFINED",
                            ]),
                          ),
                        }),
                      ),
                      subnetMask: Schema.optional(Schema.String),
                    }),
                  ),
                  macAddress: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        type: Schema.optional(Schema.Literals(["LINUX", "WINDOWS"])),
        version: Schema.optional(Schema.String),
      }),
    ),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CustomizationPoliciesGetOutput>;

// The operation
/**
 * Implements get of customization policy
 *
 * Returns customization policy by its name
 *
 * @param api-version - Client API version.
 * @param subscriptionId - The subscription ID.
 * @param regionId - The region Id (westus, eastus)
 * @param pcName - The private cloud name
 * @param customizationPolicyName - customization policy name
 */
export const customizationPoliciesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: CustomizationPoliciesGetInput,
  outputSchema: CustomizationPoliciesGetOutput,
}));
// Input Schema
export interface CustomizationPoliciesListInput {
  subscriptionId: string;
  regionId: string;
  pcName: string;
  $filter?: string;
}
export const CustomizationPoliciesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    regionId: Schema.String.pipe(T.PathParam()),
    pcName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/privateClouds/{pcName}/customizationPolicies",
      apiVersion: "2019-04-01",
    }),
  ) as unknown as Schema.Codec<CustomizationPoliciesListInput>;

// Output Schema
export interface CustomizationPoliciesListOutput {
  nextLink?: string;
  value?: {
    id?: string;
    location?: string;
    name?: string;
    properties?: {
      description?: string;
      privateCloudId?: string;
      specification?: {
        identity?: {
          data?: string;
          hostName?: {
            name?: string;
            type?:
              | "USER_DEFINED"
              | "PREFIX_BASED"
              | "FIXED"
              | "VIRTUAL_MACHINE_NAME"
              | "CUSTOM_NAME";
          };
          type?: "WINDOWS_TEXT" | "WINDOWS" | "LINUX";
          userData?: { isPasswordPredefined?: boolean };
        };
        nicSettings?: {
          adapter?: {
            gateway?: string[];
            ip?: {
              argument?: string;
              ipAddress?: string;
              type?: "CUSTOM" | "DHCP_IP" | "FIXED_IP" | "USER_DEFINED";
            };
            subnetMask?: string;
          };
          macAddress?: string;
        }[];
      };
      type?: "LINUX" | "WINDOWS";
      version?: string;
    };
    type?: string;
  }[];
}
export const CustomizationPoliciesListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              description: Schema.optional(Schema.String),
              privateCloudId: Schema.optional(Schema.String),
              specification: Schema.optional(
                Schema.Struct({
                  identity: Schema.optional(
                    Schema.Struct({
                      data: Schema.optional(Schema.String),
                      hostName: Schema.optional(
                        Schema.Struct({
                          name: Schema.optional(Schema.String),
                          type: Schema.optional(
                            Schema.Literals([
                              "USER_DEFINED",
                              "PREFIX_BASED",
                              "FIXED",
                              "VIRTUAL_MACHINE_NAME",
                              "CUSTOM_NAME",
                            ]),
                          ),
                        }),
                      ),
                      type: Schema.optional(
                        Schema.Literals(["WINDOWS_TEXT", "WINDOWS", "LINUX"]),
                      ),
                      userData: Schema.optional(
                        Schema.Struct({
                          isPasswordPredefined: Schema.optional(Schema.Boolean),
                        }),
                      ),
                    }),
                  ),
                  nicSettings: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        adapter: Schema.optional(
                          Schema.Struct({
                            gateway: Schema.optional(
                              Schema.Array(Schema.String),
                            ),
                            ip: Schema.optional(
                              Schema.Struct({
                                argument: Schema.optional(Schema.String),
                                ipAddress: Schema.optional(Schema.String),
                                type: Schema.optional(
                                  Schema.Literals([
                                    "CUSTOM",
                                    "DHCP_IP",
                                    "FIXED_IP",
                                    "USER_DEFINED",
                                  ]),
                                ),
                              }),
                            ),
                            subnetMask: Schema.optional(Schema.String),
                          }),
                        ),
                        macAddress: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                }),
              ),
              type: Schema.optional(Schema.Literals(["LINUX", "WINDOWS"])),
              version: Schema.optional(Schema.String),
            }),
          ),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<CustomizationPoliciesListOutput>;

// The operation
/**
 * Implements get of customization policies list
 *
 * Returns list of customization policies in region for private cloud
 *
 * @param subscriptionId - The subscription ID.
 * @param regionId - The region Id (westus, eastus)
 * @param pcName - The private cloud name
 * @param api-version - Client API version.
 * @param $filter - The filter to apply on the list operation. only type is allowed here as a filter e.g. $filter=type eq 'xxxx'
 */
export const customizationPoliciesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: CustomizationPoliciesListInput,
  outputSchema: CustomizationPoliciesListOutput,
}));
// Input Schema
export interface DedicatedCloudNodesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  dedicatedCloudNodeName: string;
  id?: string;
  location: string;
  name?: string;
  properties?: {
    availabilityZoneId: string;
    availabilityZoneName?: string;
    cloudRackName?: string;
    created?: string;
    nodesCount: number;
    placementGroupId: string;
    placementGroupName?: string;
    privateCloudId?: string;
    privateCloudName?: string;
    provisioningState?: string;
    purchaseId: string;
    skuDescription?: { id: string; name: string };
    status?: "unused" | "used";
    vmwareClusterName?: string;
  };
  sku?: {
    capacity?: string;
    description?: string;
    family?: string;
    name: string;
    tier?: string;
  };
  tags?: unknown;
  type?: string;
}
export const DedicatedCloudNodesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dedicatedCloudNodeName: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    location: Schema.String,
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        availabilityZoneId: Schema.String,
        availabilityZoneName: Schema.optional(Schema.String),
        cloudRackName: Schema.optional(Schema.String),
        created: Schema.optional(Schema.String),
        nodesCount: Schema.Number,
        placementGroupId: Schema.String,
        placementGroupName: Schema.optional(Schema.String),
        privateCloudId: Schema.optional(Schema.String),
        privateCloudName: Schema.optional(Schema.String),
        provisioningState: Schema.optional(Schema.String),
        purchaseId: Schema.String,
        skuDescription: Schema.optional(
          Schema.Struct({
            id: Schema.String,
            name: Schema.String,
          }),
        ),
        status: Schema.optional(Schema.Literals(["unused", "used"])),
        vmwareClusterName: Schema.optional(Schema.String),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        capacity: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        name: Schema.String,
        tier: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Unknown),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudNodes/{dedicatedCloudNodeName}",
      apiVersion: "2019-04-01",
    }),
  ) as unknown as Schema.Codec<DedicatedCloudNodesCreateOrUpdateInput>;

// Output Schema
export interface DedicatedCloudNodesCreateOrUpdateOutput {
  id?: string;
  location: string;
  name?: string;
  properties?: {
    availabilityZoneId: string;
    availabilityZoneName?: string;
    cloudRackName?: string;
    created?: string;
    nodesCount: number;
    placementGroupId: string;
    placementGroupName?: string;
    privateCloudId?: string;
    privateCloudName?: string;
    provisioningState?: string;
    purchaseId: string;
    skuDescription?: { id: string; name: string };
    status?: "unused" | "used";
    vmwareClusterName?: string;
  };
  sku?: {
    capacity?: string;
    description?: string;
    family?: string;
    name: string;
    tier?: string;
  };
  tags?: unknown;
  type?: string;
}
export const DedicatedCloudNodesCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    location: Schema.String,
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        availabilityZoneId: Schema.String,
        availabilityZoneName: Schema.optional(Schema.String),
        cloudRackName: Schema.optional(Schema.String),
        created: Schema.optional(Schema.String),
        nodesCount: Schema.Number,
        placementGroupId: Schema.String,
        placementGroupName: Schema.optional(Schema.String),
        privateCloudId: Schema.optional(Schema.String),
        privateCloudName: Schema.optional(Schema.String),
        provisioningState: Schema.optional(Schema.String),
        purchaseId: Schema.String,
        skuDescription: Schema.optional(
          Schema.Struct({
            id: Schema.String,
            name: Schema.String,
          }),
        ),
        status: Schema.optional(Schema.Literals(["unused", "used"])),
        vmwareClusterName: Schema.optional(Schema.String),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        capacity: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        name: Schema.String,
        tier: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Unknown),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DedicatedCloudNodesCreateOrUpdateOutput>;

// The operation
/**
 * Implements dedicated cloud node PUT method
 *
 * Returns dedicated cloud node by its name
 *
 * @param subscriptionId - The subscription ID.
 * @param resourceGroupName - The name of the resource group
 * @param Referer - referer url
 * @param dedicatedCloudNodeName - dedicated cloud node name
 * @param api-version - Client API version.
 */
export const DedicatedCloudNodesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DedicatedCloudNodesCreateOrUpdateInput,
    outputSchema: DedicatedCloudNodesCreateOrUpdateOutput,
  }));
// Input Schema
export interface DedicatedCloudNodesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  dedicatedCloudNodeName: string;
}
export const DedicatedCloudNodesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dedicatedCloudNodeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudNodes/{dedicatedCloudNodeName}",
      apiVersion: "2019-04-01",
    }),
  ) as unknown as Schema.Codec<DedicatedCloudNodesDeleteInput>;

// Output Schema
export type DedicatedCloudNodesDeleteOutput = void;
export const DedicatedCloudNodesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DedicatedCloudNodesDeleteOutput>;

// The operation
/**
 * Implements dedicated cloud node DELETE method
 *
 * Delete dedicated cloud node
 *
 * @param subscriptionId - The subscription ID.
 * @param resourceGroupName - The name of the resource group
 * @param dedicatedCloudNodeName - dedicated cloud node name
 * @param api-version - Client API version.
 */
export const DedicatedCloudNodesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: DedicatedCloudNodesDeleteInput,
  outputSchema: DedicatedCloudNodesDeleteOutput,
}));
// Input Schema
export interface DedicatedCloudNodesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  dedicatedCloudNodeName: string;
}
export const DedicatedCloudNodesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dedicatedCloudNodeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudNodes/{dedicatedCloudNodeName}",
      apiVersion: "2019-04-01",
    }),
  ) as unknown as Schema.Codec<DedicatedCloudNodesGetInput>;

// Output Schema
export interface DedicatedCloudNodesGetOutput {
  id?: string;
  location: string;
  name?: string;
  properties?: {
    availabilityZoneId: string;
    availabilityZoneName?: string;
    cloudRackName?: string;
    created?: string;
    nodesCount: number;
    placementGroupId: string;
    placementGroupName?: string;
    privateCloudId?: string;
    privateCloudName?: string;
    provisioningState?: string;
    purchaseId: string;
    skuDescription?: { id: string; name: string };
    status?: "unused" | "used";
    vmwareClusterName?: string;
  };
  sku?: {
    capacity?: string;
    description?: string;
    family?: string;
    name: string;
    tier?: string;
  };
  tags?: unknown;
  type?: string;
}
export const DedicatedCloudNodesGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    location: Schema.String,
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        availabilityZoneId: Schema.String,
        availabilityZoneName: Schema.optional(Schema.String),
        cloudRackName: Schema.optional(Schema.String),
        created: Schema.optional(Schema.String),
        nodesCount: Schema.Number,
        placementGroupId: Schema.String,
        placementGroupName: Schema.optional(Schema.String),
        privateCloudId: Schema.optional(Schema.String),
        privateCloudName: Schema.optional(Schema.String),
        provisioningState: Schema.optional(Schema.String),
        purchaseId: Schema.String,
        skuDescription: Schema.optional(
          Schema.Struct({
            id: Schema.String,
            name: Schema.String,
          }),
        ),
        status: Schema.optional(Schema.Literals(["unused", "used"])),
        vmwareClusterName: Schema.optional(Schema.String),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        capacity: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        name: Schema.String,
        tier: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Unknown),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DedicatedCloudNodesGetOutput>;

// The operation
/**
 * Implements dedicated cloud node GET method
 *
 * Returns dedicated cloud node
 *
 * @param subscriptionId - The subscription ID.
 * @param resourceGroupName - The name of the resource group
 * @param dedicatedCloudNodeName - dedicated cloud node name
 * @param api-version - Client API version.
 */
export const DedicatedCloudNodesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DedicatedCloudNodesGetInput,
  outputSchema: DedicatedCloudNodesGetOutput,
}));
// Input Schema
export interface DedicatedCloudNodesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $filter?: string;
  $top?: number;
  $skipToken?: string;
}
export const DedicatedCloudNodesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudNodes",
      apiVersion: "2019-04-01",
    }),
  ) as unknown as Schema.Codec<DedicatedCloudNodesListByResourceGroupInput>;

// Output Schema
export interface DedicatedCloudNodesListByResourceGroupOutput {
  nextLink?: string;
  value?: {
    id?: string;
    location: string;
    name?: string;
    properties?: {
      availabilityZoneId: string;
      availabilityZoneName?: string;
      cloudRackName?: string;
      created?: string;
      nodesCount: number;
      placementGroupId: string;
      placementGroupName?: string;
      privateCloudId?: string;
      privateCloudName?: string;
      provisioningState?: string;
      purchaseId: string;
      skuDescription?: { id: string; name: string };
      status?: "unused" | "used";
      vmwareClusterName?: string;
    };
    sku?: {
      capacity?: string;
      description?: string;
      family?: string;
      name: string;
      tier?: string;
    };
    tags?: unknown;
    type?: string;
  }[];
}
export const DedicatedCloudNodesListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          location: Schema.String,
          name: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              availabilityZoneId: Schema.String,
              availabilityZoneName: Schema.optional(Schema.String),
              cloudRackName: Schema.optional(Schema.String),
              created: Schema.optional(Schema.String),
              nodesCount: Schema.Number,
              placementGroupId: Schema.String,
              placementGroupName: Schema.optional(Schema.String),
              privateCloudId: Schema.optional(Schema.String),
              privateCloudName: Schema.optional(Schema.String),
              provisioningState: Schema.optional(Schema.String),
              purchaseId: Schema.String,
              skuDescription: Schema.optional(
                Schema.Struct({
                  id: Schema.String,
                  name: Schema.String,
                }),
              ),
              status: Schema.optional(Schema.Literals(["unused", "used"])),
              vmwareClusterName: Schema.optional(Schema.String),
            }),
          ),
          sku: Schema.optional(
            Schema.Struct({
              capacity: Schema.optional(Schema.String),
              description: Schema.optional(Schema.String),
              family: Schema.optional(Schema.String),
              name: Schema.String,
              tier: Schema.optional(Schema.String),
            }),
          ),
          tags: Schema.optional(Schema.Unknown),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<DedicatedCloudNodesListByResourceGroupOutput>;

// The operation
/**
 * Implements list of dedicated cloud nodes within RG method
 *
 * Returns list of dedicate cloud nodes within resource group
 *
 * @param subscriptionId - The subscription ID.
 * @param resourceGroupName - The name of the resource group
 * @param api-version - Client API version.
 * @param $filter - The filter to apply on the list operation
 * @param $top - The maximum number of record sets to return
 * @param $skipToken - to be used by nextLink implementation
 */
export const DedicatedCloudNodesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DedicatedCloudNodesListByResourceGroupInput,
    outputSchema: DedicatedCloudNodesListByResourceGroupOutput,
  }));
// Input Schema
export interface DedicatedCloudNodesListBySubscriptionInput {
  subscriptionId: string;
  $filter?: string;
  $top?: number;
  $skipToken?: string;
}
export const DedicatedCloudNodesListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudNodes",
      apiVersion: "2019-04-01",
    }),
  ) as unknown as Schema.Codec<DedicatedCloudNodesListBySubscriptionInput>;

// Output Schema
export interface DedicatedCloudNodesListBySubscriptionOutput {
  nextLink?: string;
  value?: {
    id?: string;
    location: string;
    name?: string;
    properties?: {
      availabilityZoneId: string;
      availabilityZoneName?: string;
      cloudRackName?: string;
      created?: string;
      nodesCount: number;
      placementGroupId: string;
      placementGroupName?: string;
      privateCloudId?: string;
      privateCloudName?: string;
      provisioningState?: string;
      purchaseId: string;
      skuDescription?: { id: string; name: string };
      status?: "unused" | "used";
      vmwareClusterName?: string;
    };
    sku?: {
      capacity?: string;
      description?: string;
      family?: string;
      name: string;
      tier?: string;
    };
    tags?: unknown;
    type?: string;
  }[];
}
export const DedicatedCloudNodesListBySubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          location: Schema.String,
          name: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              availabilityZoneId: Schema.String,
              availabilityZoneName: Schema.optional(Schema.String),
              cloudRackName: Schema.optional(Schema.String),
              created: Schema.optional(Schema.String),
              nodesCount: Schema.Number,
              placementGroupId: Schema.String,
              placementGroupName: Schema.optional(Schema.String),
              privateCloudId: Schema.optional(Schema.String),
              privateCloudName: Schema.optional(Schema.String),
              provisioningState: Schema.optional(Schema.String),
              purchaseId: Schema.String,
              skuDescription: Schema.optional(
                Schema.Struct({
                  id: Schema.String,
                  name: Schema.String,
                }),
              ),
              status: Schema.optional(Schema.Literals(["unused", "used"])),
              vmwareClusterName: Schema.optional(Schema.String),
            }),
          ),
          sku: Schema.optional(
            Schema.Struct({
              capacity: Schema.optional(Schema.String),
              description: Schema.optional(Schema.String),
              family: Schema.optional(Schema.String),
              name: Schema.String,
              tier: Schema.optional(Schema.String),
            }),
          ),
          tags: Schema.optional(Schema.Unknown),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<DedicatedCloudNodesListBySubscriptionOutput>;

// The operation
/**
 * Implements list of dedicated cloud nodes within subscription method
 *
 * Returns list of dedicate cloud nodes within subscription
 *
 * @param subscriptionId - The subscription ID.
 * @param api-version - Client API version.
 * @param $filter - The filter to apply on the list operation
 * @param $top - The maximum number of record sets to return
 * @param $skipToken - to be used by nextLink implementation
 */
export const DedicatedCloudNodesListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DedicatedCloudNodesListBySubscriptionInput,
    outputSchema: DedicatedCloudNodesListBySubscriptionOutput,
  }));
// Input Schema
export interface DedicatedCloudNodesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  dedicatedCloudNodeName: string;
  tags?: unknown;
}
export const DedicatedCloudNodesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dedicatedCloudNodeName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudNodes/{dedicatedCloudNodeName}",
      apiVersion: "2019-04-01",
    }),
  ) as unknown as Schema.Codec<DedicatedCloudNodesUpdateInput>;

// Output Schema
export interface DedicatedCloudNodesUpdateOutput {
  id?: string;
  location: string;
  name?: string;
  properties?: {
    availabilityZoneId: string;
    availabilityZoneName?: string;
    cloudRackName?: string;
    created?: string;
    nodesCount: number;
    placementGroupId: string;
    placementGroupName?: string;
    privateCloudId?: string;
    privateCloudName?: string;
    provisioningState?: string;
    purchaseId: string;
    skuDescription?: { id: string; name: string };
    status?: "unused" | "used";
    vmwareClusterName?: string;
  };
  sku?: {
    capacity?: string;
    description?: string;
    family?: string;
    name: string;
    tier?: string;
  };
  tags?: unknown;
  type?: string;
}
export const DedicatedCloudNodesUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    location: Schema.String,
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        availabilityZoneId: Schema.String,
        availabilityZoneName: Schema.optional(Schema.String),
        cloudRackName: Schema.optional(Schema.String),
        created: Schema.optional(Schema.String),
        nodesCount: Schema.Number,
        placementGroupId: Schema.String,
        placementGroupName: Schema.optional(Schema.String),
        privateCloudId: Schema.optional(Schema.String),
        privateCloudName: Schema.optional(Schema.String),
        provisioningState: Schema.optional(Schema.String),
        purchaseId: Schema.String,
        skuDescription: Schema.optional(
          Schema.Struct({
            id: Schema.String,
            name: Schema.String,
          }),
        ),
        status: Schema.optional(Schema.Literals(["unused", "used"])),
        vmwareClusterName: Schema.optional(Schema.String),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        capacity: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        name: Schema.String,
        tier: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Unknown),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DedicatedCloudNodesUpdateOutput>;

// The operation
/**
 * Implements dedicated cloud node PATCH method
 *
 * Patches dedicated node properties
 *
 * @param subscriptionId - The subscription ID.
 * @param resourceGroupName - The name of the resource group
 * @param dedicatedCloudNodeName - dedicated cloud node name
 * @param api-version - Client API version.
 */
export const DedicatedCloudNodesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DedicatedCloudNodesUpdateInput,
  outputSchema: DedicatedCloudNodesUpdateOutput,
}));
// Input Schema
export interface DedicatedCloudServicesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  dedicatedCloudServiceName: string;
  id?: string;
  location: string;
  name?: string;
  properties?: {
    gatewaySubnet: string;
    isAccountOnboarded?:
      | "notOnBoarded"
      | "onBoarded"
      | "onBoardingFailed"
      | "onBoarding";
    nodes?: number;
    serviceURL?: string;
  };
  tags?: unknown;
  type?: string;
}
export const DedicatedCloudServicesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dedicatedCloudServiceName: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    location: Schema.String,
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        gatewaySubnet: Schema.String,
        isAccountOnboarded: Schema.optional(
          Schema.Literals([
            "notOnBoarded",
            "onBoarded",
            "onBoardingFailed",
            "onBoarding",
          ]),
        ),
        nodes: Schema.optional(Schema.Number),
        serviceURL: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Unknown),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudServices/{dedicatedCloudServiceName}",
      apiVersion: "2019-04-01",
    }),
  ) as unknown as Schema.Codec<DedicatedCloudServicesCreateOrUpdateInput>;

// Output Schema
export interface DedicatedCloudServicesCreateOrUpdateOutput {
  id?: string;
  location: string;
  name?: string;
  properties?: {
    gatewaySubnet: string;
    isAccountOnboarded?:
      | "notOnBoarded"
      | "onBoarded"
      | "onBoardingFailed"
      | "onBoarding";
    nodes?: number;
    serviceURL?: string;
  };
  tags?: unknown;
  type?: string;
}
export const DedicatedCloudServicesCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    location: Schema.String,
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        gatewaySubnet: Schema.String,
        isAccountOnboarded: Schema.optional(
          Schema.Literals([
            "notOnBoarded",
            "onBoarded",
            "onBoardingFailed",
            "onBoarding",
          ]),
        ),
        nodes: Schema.optional(Schema.Number),
        serviceURL: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Unknown),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DedicatedCloudServicesCreateOrUpdateOutput>;

// The operation
/**
 * Implements dedicated cloud service PUT method
 *
 * Create dedicate cloud service
 *
 * @param subscriptionId - The subscription ID.
 * @param resourceGroupName - The name of the resource group
 * @param dedicatedCloudServiceName - dedicated cloud Service name
 * @param api-version - Client API version.
 */
export const DedicatedCloudServicesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DedicatedCloudServicesCreateOrUpdateInput,
    outputSchema: DedicatedCloudServicesCreateOrUpdateOutput,
  }));
// Input Schema
export interface DedicatedCloudServicesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  dedicatedCloudServiceName: string;
}
export const DedicatedCloudServicesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dedicatedCloudServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudServices/{dedicatedCloudServiceName}",
      apiVersion: "2019-04-01",
    }),
  ) as unknown as Schema.Codec<DedicatedCloudServicesDeleteInput>;

// Output Schema
export type DedicatedCloudServicesDeleteOutput = void;
export const DedicatedCloudServicesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DedicatedCloudServicesDeleteOutput>;

// The operation
/**
 * Implements dedicatedCloudService DELETE method
 *
 * Delete dedicate cloud service
 *
 * @param subscriptionId - The subscription ID.
 * @param resourceGroupName - The name of the resource group
 * @param dedicatedCloudServiceName - dedicated cloud service name
 * @param api-version - Client API version.
 */
export const DedicatedCloudServicesDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DedicatedCloudServicesDeleteInput,
    outputSchema: DedicatedCloudServicesDeleteOutput,
  }));
// Input Schema
export interface DedicatedCloudServicesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  dedicatedCloudServiceName: string;
}
export const DedicatedCloudServicesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dedicatedCloudServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudServices/{dedicatedCloudServiceName}",
      apiVersion: "2019-04-01",
    }),
  ) as unknown as Schema.Codec<DedicatedCloudServicesGetInput>;

// Output Schema
export interface DedicatedCloudServicesGetOutput {
  id?: string;
  location: string;
  name?: string;
  properties?: {
    gatewaySubnet: string;
    isAccountOnboarded?:
      | "notOnBoarded"
      | "onBoarded"
      | "onBoardingFailed"
      | "onBoarding";
    nodes?: number;
    serviceURL?: string;
  };
  tags?: unknown;
  type?: string;
}
export const DedicatedCloudServicesGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    location: Schema.String,
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        gatewaySubnet: Schema.String,
        isAccountOnboarded: Schema.optional(
          Schema.Literals([
            "notOnBoarded",
            "onBoarded",
            "onBoardingFailed",
            "onBoarding",
          ]),
        ),
        nodes: Schema.optional(Schema.Number),
        serviceURL: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Unknown),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DedicatedCloudServicesGetOutput>;

// The operation
/**
 * Implements dedicatedCloudService GET method
 *
 * Returns Dedicate Cloud Service
 *
 * @param subscriptionId - The subscription ID.
 * @param resourceGroupName - The name of the resource group
 * @param dedicatedCloudServiceName - dedicated cloud Service name
 * @param api-version - Client API version.
 */
export const DedicatedCloudServicesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DedicatedCloudServicesGetInput,
  outputSchema: DedicatedCloudServicesGetOutput,
}));
// Input Schema
export interface DedicatedCloudServicesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $filter?: string;
  $top?: number;
  $skipToken?: string;
}
export const DedicatedCloudServicesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudServices",
      apiVersion: "2019-04-01",
    }),
  ) as unknown as Schema.Codec<DedicatedCloudServicesListByResourceGroupInput>;

// Output Schema
export interface DedicatedCloudServicesListByResourceGroupOutput {
  nextLink?: string;
  value?: {
    id?: string;
    location: string;
    name?: string;
    properties?: {
      gatewaySubnet: string;
      isAccountOnboarded?:
        | "notOnBoarded"
        | "onBoarded"
        | "onBoardingFailed"
        | "onBoarding";
      nodes?: number;
      serviceURL?: string;
    };
    tags?: unknown;
    type?: string;
  }[];
}
export const DedicatedCloudServicesListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          location: Schema.String,
          name: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              gatewaySubnet: Schema.String,
              isAccountOnboarded: Schema.optional(
                Schema.Literals([
                  "notOnBoarded",
                  "onBoarded",
                  "onBoardingFailed",
                  "onBoarding",
                ]),
              ),
              nodes: Schema.optional(Schema.Number),
              serviceURL: Schema.optional(Schema.String),
            }),
          ),
          tags: Schema.optional(Schema.Unknown),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<DedicatedCloudServicesListByResourceGroupOutput>;

// The operation
/**
 * Implements list of dedicatedCloudService objects within RG method
 *
 * Returns list of dedicated cloud services within a resource group
 *
 * @param subscriptionId - The subscription ID.
 * @param resourceGroupName - The name of the resource group
 * @param api-version - Client API version.
 * @param $filter - The filter to apply on the list operation
 * @param $top - The maximum number of record sets to return
 * @param $skipToken - to be used by nextLink implementation
 */
export const DedicatedCloudServicesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DedicatedCloudServicesListByResourceGroupInput,
    outputSchema: DedicatedCloudServicesListByResourceGroupOutput,
  }));
// Input Schema
export interface DedicatedCloudServicesListBySubscriptionInput {
  subscriptionId: string;
  $filter?: string;
  $top?: number;
  $skipToken?: string;
}
export const DedicatedCloudServicesListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudServices",
      apiVersion: "2019-04-01",
    }),
  ) as unknown as Schema.Codec<DedicatedCloudServicesListBySubscriptionInput>;

// Output Schema
export interface DedicatedCloudServicesListBySubscriptionOutput {
  nextLink?: string;
  value?: {
    id?: string;
    location: string;
    name?: string;
    properties?: {
      gatewaySubnet: string;
      isAccountOnboarded?:
        | "notOnBoarded"
        | "onBoarded"
        | "onBoardingFailed"
        | "onBoarding";
      nodes?: number;
      serviceURL?: string;
    };
    tags?: unknown;
    type?: string;
  }[];
}
export const DedicatedCloudServicesListBySubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          location: Schema.String,
          name: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              gatewaySubnet: Schema.String,
              isAccountOnboarded: Schema.optional(
                Schema.Literals([
                  "notOnBoarded",
                  "onBoarded",
                  "onBoardingFailed",
                  "onBoarding",
                ]),
              ),
              nodes: Schema.optional(Schema.Number),
              serviceURL: Schema.optional(Schema.String),
            }),
          ),
          tags: Schema.optional(Schema.Unknown),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<DedicatedCloudServicesListBySubscriptionOutput>;

// The operation
/**
 * Implements list of dedicatedCloudService objects within subscription method
 *
 * Returns list of dedicated cloud services within a subscription
 *
 * @param subscriptionId - The subscription ID.
 * @param api-version - Client API version.
 * @param $filter - The filter to apply on the list operation
 * @param $top - The maximum number of record sets to return
 * @param $skipToken - to be used by nextLink implementation
 */
export const DedicatedCloudServicesListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DedicatedCloudServicesListBySubscriptionInput,
    outputSchema: DedicatedCloudServicesListBySubscriptionOutput,
  }));
// Input Schema
export interface DedicatedCloudServicesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  dedicatedCloudServiceName: string;
  tags?: unknown;
}
export const DedicatedCloudServicesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dedicatedCloudServiceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudServices/{dedicatedCloudServiceName}",
      apiVersion: "2019-04-01",
    }),
  ) as unknown as Schema.Codec<DedicatedCloudServicesUpdateInput>;

// Output Schema
export interface DedicatedCloudServicesUpdateOutput {
  id?: string;
  location: string;
  name?: string;
  properties?: {
    gatewaySubnet: string;
    isAccountOnboarded?:
      | "notOnBoarded"
      | "onBoarded"
      | "onBoardingFailed"
      | "onBoarding";
    nodes?: number;
    serviceURL?: string;
  };
  tags?: unknown;
  type?: string;
}
export const DedicatedCloudServicesUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    location: Schema.String,
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        gatewaySubnet: Schema.String,
        isAccountOnboarded: Schema.optional(
          Schema.Literals([
            "notOnBoarded",
            "onBoarded",
            "onBoardingFailed",
            "onBoarding",
          ]),
        ),
        nodes: Schema.optional(Schema.Number),
        serviceURL: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Unknown),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DedicatedCloudServicesUpdateOutput>;

// The operation
/**
 * Implements dedicatedCloudService PATCH method
 *
 * Patch dedicated cloud service's properties
 *
 * @param subscriptionId - The subscription ID.
 * @param resourceGroupName - The name of the resource group
 * @param dedicatedCloudServiceName - dedicated cloud service name
 * @param api-version - Client API version.
 */
export const DedicatedCloudServicesUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DedicatedCloudServicesUpdateInput,
    outputSchema: DedicatedCloudServicesUpdateOutput,
  }));
// Input Schema
export interface OperationsGetInput {
  subscriptionId: string;
  regionId: string;
  operationId: string;
}
export const OperationsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  regionId: Schema.String.pipe(T.PathParam()),
  operationId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/operationResults/{operationId}",
    apiVersion: "2019-04-01",
  }),
) as unknown as Schema.Codec<OperationsGetInput>;

// Output Schema
export interface OperationsGetOutput {
  endTime?: string;
  error?: { code?: string; message?: string };
  id?: string;
  name?: string;
  startTime?: string;
  status?: string;
}
export const OperationsGetOutput = /*@__PURE__*/ Schema.Struct({
  endTime: Schema.optional(Schema.String),
  error: Schema.optional(
    Schema.Struct({
      code: Schema.optional(Schema.String),
      message: Schema.optional(Schema.String),
    }),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  startTime: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsGetOutput>;

// The operation
/**
 * Implements get of async operation
 *
 * Return an async operation
 *
 * @param subscriptionId - The subscription ID.
 * @param api-version - Client API version.
 * @param regionId - The region Id (westus, eastus)
 * @param Referer - referer url
 * @param operationId - operation id
 */
export const OperationsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsGetInput,
  outputSchema: OperationsGetOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.VMwareCloudSimple/operations",
    apiVersion: "2019-04-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  nextLink?: string;
  value?: {
    display?: {
      description?: string;
      operation?: string;
      provider?: string;
      resource?: string;
    };
    isDataAction?: boolean;
    name?: string;
    origin?: "user" | "system" | "user,system";
    properties?: {
      serviceSpecification?: {
        metricSpecifications?: {
          aggregationType: "Average" | "Total";
          displayDescription: string;
          displayName: string;
          name: string;
          unit: string;
        }[];
      };
    };
  }[];
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        display: Schema.optional(
          Schema.Struct({
            description: Schema.optional(Schema.String),
            operation: Schema.optional(Schema.String),
            provider: Schema.optional(Schema.String),
            resource: Schema.optional(Schema.String),
          }),
        ),
        isDataAction: Schema.optional(Schema.Boolean),
        name: Schema.optional(Schema.String),
        origin: Schema.optional(
          Schema.Literals(["user", "system", "user,system"]),
        ),
        properties: Schema.optional(
          Schema.Struct({
            serviceSpecification: Schema.optional(
              Schema.Struct({
                metricSpecifications: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      aggregationType: Schema.Literals(["Average", "Total"]),
                      displayDescription: Schema.String,
                      displayName: Schema.String,
                      name: Schema.String,
                      unit: Schema.String,
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
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Implements list of available operations
 *
 * Return list of operations
 *
 * @param api-version - Client API version.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PrivateCloudsGetInput {
  subscriptionId: string;
  pcName: string;
  regionId: string;
}
export const PrivateCloudsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  pcName: Schema.String.pipe(T.PathParam()),
  regionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/privateClouds/{pcName}",
    apiVersion: "2019-04-01",
  }),
) as unknown as Schema.Codec<PrivateCloudsGetInput>;

// Output Schema
export interface PrivateCloudsGetOutput {
  id?: string;
  location?: string;
  name?: string;
  properties?: {
    availabilityZoneId?: string;
    availabilityZoneName?: string;
    clustersNumber?: number;
    createdBy?: string;
    createdOn?: string;
    dnsServers?: string[];
    expires?: string;
    nsxType?: string;
    placementGroupId?: string;
    placementGroupName?: string;
    privateCloudId?: string;
    resourcePools?: {
      id: string;
      location?: string;
      name?: string;
      privateCloudId?: string;
      properties?: { fullName?: string };
      type?: string;
    }[];
    state?: string;
    totalCpuCores?: number;
    totalNodes?: number;
    totalRam?: number;
    totalStorage?: number;
    type?: string;
    vSphereVersion?: string;
    vcenterFqdn?: string;
    vcenterRefid?: string;
    virtualMachineTemplates?: {
      id?: string;
      location?: string;
      name?: string;
      properties?: {
        amountOfRam?: number;
        controllers?: {
          id?: string;
          name?: string;
          subType?: string;
          type?: string;
        }[];
        description?: string;
        disks?: {
          controllerId: string;
          independenceMode:
            | "persistent"
            | "independent_persistent"
            | "independent_nonpersistent";
          totalSize: number;
          virtualDiskId?: string;
          virtualDiskName?: string;
        }[];
        exposeToGuestVM?: boolean;
        guestOS?: string;
        guestOSType?: string;
        nics?: {
          customization?: {
            allocation?: "static" | "dynamic";
            dnsServers?: string[];
            gateway?: string[];
            ipAddress?: string;
            mask?: string;
            primaryWinsServer?: string;
            secondaryWinsServer?: string;
          };
          ipAddresses?: string[];
          macAddress?: string;
          network: {
            assignable?: boolean;
            id: string;
            location?: string;
            name?: string;
            properties?: { privateCloudId?: string };
            type?: string;
          };
          nicType:
            | "E1000"
            | "E1000E"
            | "PCNET32"
            | "VMXNET"
            | "VMXNET2"
            | "VMXNET3";
          powerOnBoot?: boolean;
          virtualNicId?: string;
          virtualNicName?: string;
        }[];
        numberOfCores?: number;
        path?: string;
        privateCloudId: string;
        vSphereNetworks?: string[];
        vSphereTags?: string[];
        vmwaretools?: string;
      };
      type?: string;
    }[];
    virtualNetworks?: {
      assignable?: boolean;
      id: string;
      location?: string;
      name?: string;
      properties?: { privateCloudId?: string };
      type?: string;
    }[];
    vrOpsEnabled?: boolean;
  };
  type?: "Microsoft.VMwareCloudSimple/privateClouds";
}
export const PrivateCloudsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.Struct({
      availabilityZoneId: Schema.optional(Schema.String),
      availabilityZoneName: Schema.optional(Schema.String),
      clustersNumber: Schema.optional(Schema.Number),
      createdBy: Schema.optional(Schema.String),
      createdOn: Schema.optional(Schema.String),
      dnsServers: Schema.optional(Schema.Array(Schema.String)),
      expires: Schema.optional(Schema.String),
      nsxType: Schema.optional(Schema.String),
      placementGroupId: Schema.optional(Schema.String),
      placementGroupName: Schema.optional(Schema.String),
      privateCloudId: Schema.optional(Schema.String),
      resourcePools: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.String,
            location: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            privateCloudId: Schema.optional(Schema.String),
            properties: Schema.optional(
              Schema.Struct({
                fullName: Schema.optional(Schema.String),
              }),
            ),
            type: Schema.optional(Schema.String),
          }),
        ),
      ),
      state: Schema.optional(Schema.String),
      totalCpuCores: Schema.optional(Schema.Number),
      totalNodes: Schema.optional(Schema.Number),
      totalRam: Schema.optional(Schema.Number),
      totalStorage: Schema.optional(Schema.Number),
      type: Schema.optional(Schema.String),
      vSphereVersion: Schema.optional(Schema.String),
      vcenterFqdn: Schema.optional(Schema.String),
      vcenterRefid: Schema.optional(Schema.String),
      virtualMachineTemplates: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            location: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            properties: Schema.optional(
              Schema.Struct({
                amountOfRam: Schema.optional(Schema.Number),
                controllers: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      id: Schema.optional(Schema.String),
                      name: Schema.optional(Schema.String),
                      subType: Schema.optional(Schema.String),
                      type: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                description: Schema.optional(Schema.String),
                disks: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      controllerId: Schema.String,
                      independenceMode: Schema.Literals([
                        "persistent",
                        "independent_persistent",
                        "independent_nonpersistent",
                      ]),
                      totalSize: Schema.Number,
                      virtualDiskId: Schema.optional(Schema.String),
                      virtualDiskName: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                exposeToGuestVM: Schema.optional(Schema.Boolean),
                guestOS: Schema.optional(Schema.String),
                guestOSType: Schema.optional(Schema.String),
                nics: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      customization: Schema.optional(
                        Schema.Struct({
                          allocation: Schema.optional(
                            Schema.Literals(["static", "dynamic"]),
                          ),
                          dnsServers: Schema.optional(
                            Schema.Array(Schema.String),
                          ),
                          gateway: Schema.optional(Schema.Array(Schema.String)),
                          ipAddress: Schema.optional(Schema.String),
                          mask: Schema.optional(Schema.String),
                          primaryWinsServer: Schema.optional(Schema.String),
                          secondaryWinsServer: Schema.optional(Schema.String),
                        }),
                      ),
                      ipAddresses: Schema.optional(Schema.Array(Schema.String)),
                      macAddress: Schema.optional(Schema.String),
                      network: Schema.Struct({
                        assignable: Schema.optional(Schema.Boolean),
                        id: Schema.String,
                        location: Schema.optional(Schema.String),
                        name: Schema.optional(Schema.String),
                        properties: Schema.optional(
                          Schema.Struct({
                            privateCloudId: Schema.optional(Schema.String),
                          }),
                        ),
                        type: Schema.optional(Schema.String),
                      }),
                      nicType: Schema.Literals([
                        "E1000",
                        "E1000E",
                        "PCNET32",
                        "VMXNET",
                        "VMXNET2",
                        "VMXNET3",
                      ]),
                      powerOnBoot: Schema.optional(Schema.Boolean),
                      virtualNicId: Schema.optional(Schema.String),
                      virtualNicName: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                numberOfCores: Schema.optional(Schema.Number),
                path: Schema.optional(Schema.String),
                privateCloudId: Schema.String,
                vSphereNetworks: Schema.optional(Schema.Array(Schema.String)),
                vSphereTags: Schema.optional(Schema.Array(Schema.String)),
                vmwaretools: Schema.optional(Schema.String),
              }),
            ),
            type: Schema.optional(Schema.String),
          }),
        ),
      ),
      virtualNetworks: Schema.optional(
        Schema.Array(
          Schema.Struct({
            assignable: Schema.optional(Schema.Boolean),
            id: Schema.String,
            location: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            properties: Schema.optional(
              Schema.Struct({
                privateCloudId: Schema.optional(Schema.String),
              }),
            ),
            type: Schema.optional(Schema.String),
          }),
        ),
      ),
      vrOpsEnabled: Schema.optional(Schema.Boolean),
    }),
  ),
  type: Schema.optional(
    Schema.Literals(["Microsoft.VMwareCloudSimple/privateClouds"]),
  ),
}) as unknown as Schema.Codec<PrivateCloudsGetOutput>;

// The operation
/**
 * Implements private cloud GET method
 *
 * Returns private cloud by its name
 *
 * @param subscriptionId - The subscription ID.
 * @param pcName - The private cloud name
 * @param regionId - The region Id (westus, eastus)
 * @param api-version - Client API version.
 */
export const PrivateCloudsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateCloudsGetInput,
  outputSchema: PrivateCloudsGetOutput,
}));
// Input Schema
export interface PrivateCloudsListInput {
  subscriptionId: string;
  regionId: string;
}
export const PrivateCloudsListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  regionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/privateClouds",
    apiVersion: "2019-04-01",
  }),
) as unknown as Schema.Codec<PrivateCloudsListInput>;

// Output Schema
export interface PrivateCloudsListOutput {
  nextLink?: string;
  value?: {
    id?: string;
    location?: string;
    name?: string;
    properties?: {
      availabilityZoneId?: string;
      availabilityZoneName?: string;
      clustersNumber?: number;
      createdBy?: string;
      createdOn?: string;
      dnsServers?: string[];
      expires?: string;
      nsxType?: string;
      placementGroupId?: string;
      placementGroupName?: string;
      privateCloudId?: string;
      resourcePools?: {
        id: string;
        location?: string;
        name?: string;
        privateCloudId?: string;
        properties?: { fullName?: string };
        type?: string;
      }[];
      state?: string;
      totalCpuCores?: number;
      totalNodes?: number;
      totalRam?: number;
      totalStorage?: number;
      type?: string;
      vSphereVersion?: string;
      vcenterFqdn?: string;
      vcenterRefid?: string;
      virtualMachineTemplates?: {
        id?: string;
        location?: string;
        name?: string;
        properties?: {
          amountOfRam?: number;
          controllers?: {
            id?: string;
            name?: string;
            subType?: string;
            type?: string;
          }[];
          description?: string;
          disks?: {
            controllerId: string;
            independenceMode:
              | "persistent"
              | "independent_persistent"
              | "independent_nonpersistent";
            totalSize: number;
            virtualDiskId?: string;
            virtualDiskName?: string;
          }[];
          exposeToGuestVM?: boolean;
          guestOS?: string;
          guestOSType?: string;
          nics?: {
            customization?: {
              allocation?: "static" | "dynamic";
              dnsServers?: string[];
              gateway?: string[];
              ipAddress?: string;
              mask?: string;
              primaryWinsServer?: string;
              secondaryWinsServer?: string;
            };
            ipAddresses?: string[];
            macAddress?: string;
            network: {
              assignable?: boolean;
              id: string;
              location?: string;
              name?: string;
              properties?: { privateCloudId?: string };
              type?: string;
            };
            nicType:
              | "E1000"
              | "E1000E"
              | "PCNET32"
              | "VMXNET"
              | "VMXNET2"
              | "VMXNET3";
            powerOnBoot?: boolean;
            virtualNicId?: string;
            virtualNicName?: string;
          }[];
          numberOfCores?: number;
          path?: string;
          privateCloudId: string;
          vSphereNetworks?: string[];
          vSphereTags?: string[];
          vmwaretools?: string;
        };
        type?: string;
      }[];
      virtualNetworks?: {
        assignable?: boolean;
        id: string;
        location?: string;
        name?: string;
        properties?: { privateCloudId?: string };
        type?: string;
      }[];
      vrOpsEnabled?: boolean;
    };
    type?: "Microsoft.VMwareCloudSimple/privateClouds";
  }[];
}
export const PrivateCloudsListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              availabilityZoneId: Schema.optional(Schema.String),
              availabilityZoneName: Schema.optional(Schema.String),
              clustersNumber: Schema.optional(Schema.Number),
              createdBy: Schema.optional(Schema.String),
              createdOn: Schema.optional(Schema.String),
              dnsServers: Schema.optional(Schema.Array(Schema.String)),
              expires: Schema.optional(Schema.String),
              nsxType: Schema.optional(Schema.String),
              placementGroupId: Schema.optional(Schema.String),
              placementGroupName: Schema.optional(Schema.String),
              privateCloudId: Schema.optional(Schema.String),
              resourcePools: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    id: Schema.String,
                    location: Schema.optional(Schema.String),
                    name: Schema.optional(Schema.String),
                    privateCloudId: Schema.optional(Schema.String),
                    properties: Schema.optional(
                      Schema.Struct({
                        fullName: Schema.optional(Schema.String),
                      }),
                    ),
                    type: Schema.optional(Schema.String),
                  }),
                ),
              ),
              state: Schema.optional(Schema.String),
              totalCpuCores: Schema.optional(Schema.Number),
              totalNodes: Schema.optional(Schema.Number),
              totalRam: Schema.optional(Schema.Number),
              totalStorage: Schema.optional(Schema.Number),
              type: Schema.optional(Schema.String),
              vSphereVersion: Schema.optional(Schema.String),
              vcenterFqdn: Schema.optional(Schema.String),
              vcenterRefid: Schema.optional(Schema.String),
              virtualMachineTemplates: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                    location: Schema.optional(Schema.String),
                    name: Schema.optional(Schema.String),
                    properties: Schema.optional(
                      Schema.Struct({
                        amountOfRam: Schema.optional(Schema.Number),
                        controllers: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              id: Schema.optional(Schema.String),
                              name: Schema.optional(Schema.String),
                              subType: Schema.optional(Schema.String),
                              type: Schema.optional(Schema.String),
                            }),
                          ),
                        ),
                        description: Schema.optional(Schema.String),
                        disks: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              controllerId: Schema.String,
                              independenceMode: Schema.Literals([
                                "persistent",
                                "independent_persistent",
                                "independent_nonpersistent",
                              ]),
                              totalSize: Schema.Number,
                              virtualDiskId: Schema.optional(Schema.String),
                              virtualDiskName: Schema.optional(Schema.String),
                            }),
                          ),
                        ),
                        exposeToGuestVM: Schema.optional(Schema.Boolean),
                        guestOS: Schema.optional(Schema.String),
                        guestOSType: Schema.optional(Schema.String),
                        nics: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              customization: Schema.optional(
                                Schema.Struct({
                                  allocation: Schema.optional(
                                    Schema.Literals(["static", "dynamic"]),
                                  ),
                                  dnsServers: Schema.optional(
                                    Schema.Array(Schema.String),
                                  ),
                                  gateway: Schema.optional(
                                    Schema.Array(Schema.String),
                                  ),
                                  ipAddress: Schema.optional(Schema.String),
                                  mask: Schema.optional(Schema.String),
                                  primaryWinsServer: Schema.optional(
                                    Schema.String,
                                  ),
                                  secondaryWinsServer: Schema.optional(
                                    Schema.String,
                                  ),
                                }),
                              ),
                              ipAddresses: Schema.optional(
                                Schema.Array(Schema.String),
                              ),
                              macAddress: Schema.optional(Schema.String),
                              network: Schema.Struct({
                                assignable: Schema.optional(Schema.Boolean),
                                id: Schema.String,
                                location: Schema.optional(Schema.String),
                                name: Schema.optional(Schema.String),
                                properties: Schema.optional(
                                  Schema.Struct({
                                    privateCloudId: Schema.optional(
                                      Schema.String,
                                    ),
                                  }),
                                ),
                                type: Schema.optional(Schema.String),
                              }),
                              nicType: Schema.Literals([
                                "E1000",
                                "E1000E",
                                "PCNET32",
                                "VMXNET",
                                "VMXNET2",
                                "VMXNET3",
                              ]),
                              powerOnBoot: Schema.optional(Schema.Boolean),
                              virtualNicId: Schema.optional(Schema.String),
                              virtualNicName: Schema.optional(Schema.String),
                            }),
                          ),
                        ),
                        numberOfCores: Schema.optional(Schema.Number),
                        path: Schema.optional(Schema.String),
                        privateCloudId: Schema.String,
                        vSphereNetworks: Schema.optional(
                          Schema.Array(Schema.String),
                        ),
                        vSphereTags: Schema.optional(
                          Schema.Array(Schema.String),
                        ),
                        vmwaretools: Schema.optional(Schema.String),
                      }),
                    ),
                    type: Schema.optional(Schema.String),
                  }),
                ),
              ),
              virtualNetworks: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    assignable: Schema.optional(Schema.Boolean),
                    id: Schema.String,
                    location: Schema.optional(Schema.String),
                    name: Schema.optional(Schema.String),
                    properties: Schema.optional(
                      Schema.Struct({
                        privateCloudId: Schema.optional(Schema.String),
                      }),
                    ),
                    type: Schema.optional(Schema.String),
                  }),
                ),
              ),
              vrOpsEnabled: Schema.optional(Schema.Boolean),
            }),
          ),
          type: Schema.optional(
            Schema.Literals(["Microsoft.VMwareCloudSimple/privateClouds"]),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PrivateCloudsListOutput>;

// The operation
/**
 * Implements private cloud list GET method
 *
 * Returns list of private clouds in particular region
 *
 * @param subscriptionId - The subscription ID.
 * @param regionId - The region Id (westus, eastus)
 * @param api-version - Client API version.
 */
export const PrivateCloudsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateCloudsListInput,
  outputSchema: PrivateCloudsListOutput,
}));
// Input Schema
export interface ResourcePoolsGetInput {
  subscriptionId: string;
  regionId: string;
  pcName: string;
  resourcePoolName: string;
}
export const ResourcePoolsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  regionId: Schema.String.pipe(T.PathParam()),
  pcName: Schema.String.pipe(T.PathParam()),
  resourcePoolName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/privateClouds/{pcName}/resourcePools/{resourcePoolName}",
    apiVersion: "2019-04-01",
  }),
) as unknown as Schema.Codec<ResourcePoolsGetInput>;

// Output Schema
export interface ResourcePoolsGetOutput {
  id: string;
  location?: string;
  name?: string;
  privateCloudId?: string;
  properties?: { fullName?: string };
  type?: string;
}
export const ResourcePoolsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.String,
  location: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  privateCloudId: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.Struct({
      fullName: Schema.optional(Schema.String),
    }),
  ),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ResourcePoolsGetOutput>;

// The operation
/**
 * Implements get of resource pool
 *
 * Returns resource pool templates by its name
 *
 * @param subscriptionId - The subscription ID.
 * @param api-version - Client API version.
 * @param regionId - The region Id (westus, eastus)
 * @param pcName - The private cloud name
 * @param resourcePoolName - resource pool id (vsphereId)
 */
export const ResourcePoolsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ResourcePoolsGetInput,
  outputSchema: ResourcePoolsGetOutput,
}));
// Input Schema
export interface ResourcePoolsListInput {
  subscriptionId: string;
  regionId: string;
  pcName: string;
}
export const ResourcePoolsListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  regionId: Schema.String.pipe(T.PathParam()),
  pcName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/privateClouds/{pcName}/resourcePools",
    apiVersion: "2019-04-01",
  }),
) as unknown as Schema.Codec<ResourcePoolsListInput>;

// Output Schema
export interface ResourcePoolsListOutput {
  nextLink?: string;
  value?: {
    id: string;
    location?: string;
    name?: string;
    privateCloudId?: string;
    properties?: { fullName?: string };
    type?: string;
  }[];
}
export const ResourcePoolsListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.String,
          location: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          privateCloudId: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              fullName: Schema.optional(Schema.String),
            }),
          ),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ResourcePoolsListOutput>;

// The operation
/**
 * Implements get of resource pools list
 *
 * Returns list of resource pools in region for private cloud
 *
 * @param subscriptionId - The subscription ID.
 * @param regionId - The region Id (westus, eastus)
 * @param pcName - The private cloud name
 * @param api-version - Client API version.
 */
export const ResourcePoolsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ResourcePoolsListInput,
  outputSchema: ResourcePoolsListOutput,
}));
// Input Schema
export interface SkusAvailabilityListInput {
  subscriptionId: string;
  regionId: string;
  skuId?: string;
}
export const SkusAvailabilityListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    regionId: Schema.String.pipe(T.PathParam()),
    skuId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/availabilities",
      apiVersion: "2019-04-01",
    }),
  ) as unknown as Schema.Codec<SkusAvailabilityListInput>;

// Output Schema
export interface SkusAvailabilityListOutput {
  nextLink?: string;
  value?: {
    dedicatedAvailabilityZoneId?: string;
    dedicatedAvailabilityZoneName?: string;
    dedicatedPlacementGroupId?: string;
    dedicatedPlacementGroupName?: string;
    limit: number;
    resourceType?: string;
    skuId?: string;
    skuName?: string;
  }[];
}
export const SkusAvailabilityListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          dedicatedAvailabilityZoneId: Schema.optional(Schema.String),
          dedicatedAvailabilityZoneName: Schema.optional(Schema.String),
          dedicatedPlacementGroupId: Schema.optional(Schema.String),
          dedicatedPlacementGroupName: Schema.optional(Schema.String),
          limit: Schema.Number,
          resourceType: Schema.optional(Schema.String),
          skuId: Schema.optional(Schema.String),
          skuName: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<SkusAvailabilityListOutput>;

// The operation
/**
 * Implements SkuAvailability List method
 *
 * Returns list of available resources in region
 *
 * @param subscriptionId - The subscription ID.
 * @param regionId - The region Id (westus, eastus)
 * @param skuId - sku id, if no sku is passed availability for all skus will be returned
 * @param api-version - Client API version.
 */
export const SkusAvailabilityList = /*@__PURE__*/ API.make(() => ({
  inputSchema: SkusAvailabilityListInput,
  outputSchema: SkusAvailabilityListOutput,
}));
// Input Schema
export interface UsagesListInput {
  subscriptionId: string;
  regionId: string;
  $filter?: string;
}
export const UsagesListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  regionId: Schema.String.pipe(T.PathParam()),
  $filter: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/usages",
    apiVersion: "2019-04-01",
  }),
) as unknown as Schema.Codec<UsagesListInput>;

// Output Schema
export interface UsagesListOutput {
  nextLink?: string;
  value?: {
    currentValue: number;
    limit: number;
    name?: { localizedValue?: string; value?: string };
    unit?:
      | "Count"
      | "Bytes"
      | "Seconds"
      | "Percent"
      | "CountPerSecond"
      | "BytesPerSecond";
  }[];
}
export const UsagesListOutput = /*@__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        currentValue: Schema.Number,
        limit: Schema.Number,
        name: Schema.optional(
          Schema.Struct({
            localizedValue: Schema.optional(Schema.String),
            value: Schema.optional(Schema.String),
          }),
        ),
        unit: Schema.optional(
          Schema.Literals([
            "Count",
            "Bytes",
            "Seconds",
            "Percent",
            "CountPerSecond",
            "BytesPerSecond",
          ]),
        ),
      }),
    ),
  ),
}) as unknown as Schema.Codec<UsagesListOutput>;

// The operation
/**
 * Implements Usages List method
 *
 * Returns list of usage in region
 *
 * @param subscriptionId - The subscription ID.
 * @param regionId - The region Id (westus, eastus)
 * @param $filter - The filter to apply on the list operation. only name.value is allowed here as a filter e.g. $filter=name.value eq 'xxxx'
 * @param api-version - Client API version.
 */
export const UsagesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: UsagesListInput,
  outputSchema: UsagesListOutput,
}));
// Input Schema
export interface VirtualMachinesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualMachineName: string;
  id?: string;
  location: string;
  name?: string;
  properties?: {
    amountOfRam: number;
    controllers?: {
      id?: string;
      name?: string;
      subType?: string;
      type?: string;
    }[];
    customization?: {
      dnsServers?: string[];
      hostName?: string;
      password?: string | Redacted.Redacted<string>;
      policyId?: string;
      username?: string;
    };
    disks?: {
      controllerId: string;
      independenceMode:
        | "persistent"
        | "independent_persistent"
        | "independent_nonpersistent";
      totalSize: number;
      virtualDiskId?: string;
      virtualDiskName?: string;
    }[];
    dnsname?: string;
    exposeToGuestVM?: boolean;
    folder?: string;
    guestOS?: string;
    guestOSType?: "linux" | "windows" | "other";
    nics?: {
      customization?: {
        allocation?: "static" | "dynamic";
        dnsServers?: string[];
        gateway?: string[];
        ipAddress?: string;
        mask?: string;
        primaryWinsServer?: string;
        secondaryWinsServer?: string;
      };
      ipAddresses?: string[];
      macAddress?: string;
      network: {
        assignable?: boolean;
        id: string;
        location?: string;
        name?: string;
        properties?: { privateCloudId?: string };
        type?: string;
      };
      nicType:
        | "E1000"
        | "E1000E"
        | "PCNET32"
        | "VMXNET"
        | "VMXNET2"
        | "VMXNET3";
      powerOnBoot?: boolean;
      virtualNicId?: string;
      virtualNicName?: string;
    }[];
    numberOfCores: number;
    password?: string | Redacted.Redacted<string>;
    privateCloudId: string;
    provisioningState?: string;
    publicIP?: string;
    resourcePool?: {
      id: string;
      location?: string;
      name?: string;
      privateCloudId?: string;
      properties?: { fullName?: string };
      type?: string;
    };
    status?:
      | "running"
      | "suspended"
      | "poweredoff"
      | "updating"
      | "deallocating"
      | "deleting";
    templateId?: string;
    username?: string;
    vSphereNetworks?: string[];
    vmId?: string;
    vmwaretools?: string;
  };
  tags?: unknown;
  type?: string;
}
export const VirtualMachinesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    location: Schema.String,
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        amountOfRam: Schema.Number,
        controllers: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              subType: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
        customization: Schema.optional(
          Schema.Struct({
            dnsServers: Schema.optional(Schema.Array(Schema.String)),
            hostName: Schema.optional(Schema.String),
            password: Schema.optional(SensitiveString),
            policyId: Schema.optional(Schema.String),
            username: Schema.optional(Schema.String),
          }),
        ),
        disks: Schema.optional(
          Schema.Array(
            Schema.Struct({
              controllerId: Schema.String,
              independenceMode: Schema.Literals([
                "persistent",
                "independent_persistent",
                "independent_nonpersistent",
              ]),
              totalSize: Schema.Number,
              virtualDiskId: Schema.optional(Schema.String),
              virtualDiskName: Schema.optional(Schema.String),
            }),
          ),
        ),
        dnsname: Schema.optional(Schema.String),
        exposeToGuestVM: Schema.optional(Schema.Boolean),
        folder: Schema.optional(Schema.String),
        guestOS: Schema.optional(Schema.String),
        guestOSType: Schema.optional(
          Schema.Literals(["linux", "windows", "other"]),
        ),
        nics: Schema.optional(
          Schema.Array(
            Schema.Struct({
              customization: Schema.optional(
                Schema.Struct({
                  allocation: Schema.optional(
                    Schema.Literals(["static", "dynamic"]),
                  ),
                  dnsServers: Schema.optional(Schema.Array(Schema.String)),
                  gateway: Schema.optional(Schema.Array(Schema.String)),
                  ipAddress: Schema.optional(Schema.String),
                  mask: Schema.optional(Schema.String),
                  primaryWinsServer: Schema.optional(Schema.String),
                  secondaryWinsServer: Schema.optional(Schema.String),
                }),
              ),
              ipAddresses: Schema.optional(Schema.Array(Schema.String)),
              macAddress: Schema.optional(Schema.String),
              network: Schema.Struct({
                assignable: Schema.optional(Schema.Boolean),
                id: Schema.String,
                location: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                properties: Schema.optional(
                  Schema.Struct({
                    privateCloudId: Schema.optional(Schema.String),
                  }),
                ),
                type: Schema.optional(Schema.String),
              }),
              nicType: Schema.Literals([
                "E1000",
                "E1000E",
                "PCNET32",
                "VMXNET",
                "VMXNET2",
                "VMXNET3",
              ]),
              powerOnBoot: Schema.optional(Schema.Boolean),
              virtualNicId: Schema.optional(Schema.String),
              virtualNicName: Schema.optional(Schema.String),
            }),
          ),
        ),
        numberOfCores: Schema.Number,
        password: Schema.optional(SensitiveString),
        privateCloudId: Schema.String,
        provisioningState: Schema.optional(Schema.String),
        publicIP: Schema.optional(Schema.String),
        resourcePool: Schema.optional(
          Schema.Struct({
            id: Schema.String,
            location: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            privateCloudId: Schema.optional(Schema.String),
            properties: Schema.optional(
              Schema.Struct({
                fullName: Schema.optional(Schema.String),
              }),
            ),
            type: Schema.optional(Schema.String),
          }),
        ),
        status: Schema.optional(
          Schema.Literals([
            "running",
            "suspended",
            "poweredoff",
            "updating",
            "deallocating",
            "deleting",
          ]),
        ),
        templateId: Schema.optional(Schema.String),
        username: Schema.optional(Schema.String),
        vSphereNetworks: Schema.optional(Schema.Array(Schema.String)),
        vmId: Schema.optional(Schema.String),
        vmwaretools: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Unknown),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/virtualMachines/{virtualMachineName}",
      apiVersion: "2019-04-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesCreateOrUpdateInput>;

// Output Schema
export interface VirtualMachinesCreateOrUpdateOutput {
  id?: string;
  location: string;
  name?: string;
  properties?: {
    amountOfRam: number;
    controllers?: {
      id?: string;
      name?: string;
      subType?: string;
      type?: string;
    }[];
    customization?: {
      dnsServers?: string[];
      hostName?: string;
      password?: Redacted.Redacted<string>;
      policyId?: string;
      username?: string;
    };
    disks?: {
      controllerId: string;
      independenceMode:
        | "persistent"
        | "independent_persistent"
        | "independent_nonpersistent";
      totalSize: number;
      virtualDiskId?: string;
      virtualDiskName?: string;
    }[];
    dnsname?: string;
    exposeToGuestVM?: boolean;
    folder?: string;
    guestOS?: string;
    guestOSType?: "linux" | "windows" | "other";
    nics?: {
      customization?: {
        allocation?: "static" | "dynamic";
        dnsServers?: string[];
        gateway?: string[];
        ipAddress?: string;
        mask?: string;
        primaryWinsServer?: string;
        secondaryWinsServer?: string;
      };
      ipAddresses?: string[];
      macAddress?: string;
      network: {
        assignable?: boolean;
        id: string;
        location?: string;
        name?: string;
        properties?: { privateCloudId?: string };
        type?: string;
      };
      nicType:
        | "E1000"
        | "E1000E"
        | "PCNET32"
        | "VMXNET"
        | "VMXNET2"
        | "VMXNET3";
      powerOnBoot?: boolean;
      virtualNicId?: string;
      virtualNicName?: string;
    }[];
    numberOfCores: number;
    password?: Redacted.Redacted<string>;
    privateCloudId: string;
    provisioningState?: string;
    publicIP?: string;
    resourcePool?: {
      id: string;
      location?: string;
      name?: string;
      privateCloudId?: string;
      properties?: { fullName?: string };
      type?: string;
    };
    status?:
      | "running"
      | "suspended"
      | "poweredoff"
      | "updating"
      | "deallocating"
      | "deleting";
    templateId?: string;
    username?: string;
    vSphereNetworks?: string[];
    vmId?: string;
    vmwaretools?: string;
  };
  tags?: unknown;
  type?: string;
}
export const VirtualMachinesCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    location: Schema.String,
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        amountOfRam: Schema.Number,
        controllers: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              subType: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
        customization: Schema.optional(
          Schema.Struct({
            dnsServers: Schema.optional(Schema.Array(Schema.String)),
            hostName: Schema.optional(Schema.String),
            password: Schema.optional(SensitiveOutputString),
            policyId: Schema.optional(Schema.String),
            username: Schema.optional(Schema.String),
          }),
        ),
        disks: Schema.optional(
          Schema.Array(
            Schema.Struct({
              controllerId: Schema.String,
              independenceMode: Schema.Literals([
                "persistent",
                "independent_persistent",
                "independent_nonpersistent",
              ]),
              totalSize: Schema.Number,
              virtualDiskId: Schema.optional(Schema.String),
              virtualDiskName: Schema.optional(Schema.String),
            }),
          ),
        ),
        dnsname: Schema.optional(Schema.String),
        exposeToGuestVM: Schema.optional(Schema.Boolean),
        folder: Schema.optional(Schema.String),
        guestOS: Schema.optional(Schema.String),
        guestOSType: Schema.optional(
          Schema.Literals(["linux", "windows", "other"]),
        ),
        nics: Schema.optional(
          Schema.Array(
            Schema.Struct({
              customization: Schema.optional(
                Schema.Struct({
                  allocation: Schema.optional(
                    Schema.Literals(["static", "dynamic"]),
                  ),
                  dnsServers: Schema.optional(Schema.Array(Schema.String)),
                  gateway: Schema.optional(Schema.Array(Schema.String)),
                  ipAddress: Schema.optional(Schema.String),
                  mask: Schema.optional(Schema.String),
                  primaryWinsServer: Schema.optional(Schema.String),
                  secondaryWinsServer: Schema.optional(Schema.String),
                }),
              ),
              ipAddresses: Schema.optional(Schema.Array(Schema.String)),
              macAddress: Schema.optional(Schema.String),
              network: Schema.Struct({
                assignable: Schema.optional(Schema.Boolean),
                id: Schema.String,
                location: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                properties: Schema.optional(
                  Schema.Struct({
                    privateCloudId: Schema.optional(Schema.String),
                  }),
                ),
                type: Schema.optional(Schema.String),
              }),
              nicType: Schema.Literals([
                "E1000",
                "E1000E",
                "PCNET32",
                "VMXNET",
                "VMXNET2",
                "VMXNET3",
              ]),
              powerOnBoot: Schema.optional(Schema.Boolean),
              virtualNicId: Schema.optional(Schema.String),
              virtualNicName: Schema.optional(Schema.String),
            }),
          ),
        ),
        numberOfCores: Schema.Number,
        password: Schema.optional(SensitiveOutputString),
        privateCloudId: Schema.String,
        provisioningState: Schema.optional(Schema.String),
        publicIP: Schema.optional(Schema.String),
        resourcePool: Schema.optional(
          Schema.Struct({
            id: Schema.String,
            location: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            privateCloudId: Schema.optional(Schema.String),
            properties: Schema.optional(
              Schema.Struct({
                fullName: Schema.optional(Schema.String),
              }),
            ),
            type: Schema.optional(Schema.String),
          }),
        ),
        status: Schema.optional(
          Schema.Literals([
            "running",
            "suspended",
            "poweredoff",
            "updating",
            "deallocating",
            "deleting",
          ]),
        ),
        templateId: Schema.optional(Schema.String),
        username: Schema.optional(Schema.String),
        vSphereNetworks: Schema.optional(Schema.Array(Schema.String)),
        vmId: Schema.optional(Schema.String),
        vmwaretools: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Unknown),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<VirtualMachinesCreateOrUpdateOutput>;

// The operation
/**
 * Implements virtual machine PUT method
 *
 * Create Or Update Virtual Machine
 *
 * @param subscriptionId - The subscription ID.
 * @param resourceGroupName - The name of the resource group
 * @param Referer - referer url
 * @param virtualMachineName - virtual machine name
 * @param api-version - Client API version.
 */
export const VirtualMachinesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachinesCreateOrUpdateInput,
    outputSchema: VirtualMachinesCreateOrUpdateOutput,
  }));
// Input Schema
export interface VirtualMachinesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualMachineName: string;
}
export const VirtualMachinesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/virtualMachines/{virtualMachineName}",
      apiVersion: "2019-04-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesDeleteInput>;

// Output Schema
export type VirtualMachinesDeleteOutput = void;
export const VirtualMachinesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachinesDeleteOutput>;

// The operation
/**
 * Implements virtual machine DELETE method
 *
 * Delete virtual machine
 *
 * @param subscriptionId - The subscription ID.
 * @param resourceGroupName - The name of the resource group
 * @param Referer - referer url
 * @param virtualMachineName - virtual machine name
 * @param api-version - Client API version.
 */
export const VirtualMachinesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualMachinesDeleteInput,
  outputSchema: VirtualMachinesDeleteOutput,
}));
// Input Schema
export interface VirtualMachinesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualMachineName: string;
}
export const VirtualMachinesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/virtualMachines/{virtualMachineName}",
      apiVersion: "2019-04-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesGetInput>;

// Output Schema
export interface VirtualMachinesGetOutput {
  id?: string;
  location: string;
  name?: string;
  properties?: {
    amountOfRam: number;
    controllers?: {
      id?: string;
      name?: string;
      subType?: string;
      type?: string;
    }[];
    customization?: {
      dnsServers?: string[];
      hostName?: string;
      password?: Redacted.Redacted<string>;
      policyId?: string;
      username?: string;
    };
    disks?: {
      controllerId: string;
      independenceMode:
        | "persistent"
        | "independent_persistent"
        | "independent_nonpersistent";
      totalSize: number;
      virtualDiskId?: string;
      virtualDiskName?: string;
    }[];
    dnsname?: string;
    exposeToGuestVM?: boolean;
    folder?: string;
    guestOS?: string;
    guestOSType?: "linux" | "windows" | "other";
    nics?: {
      customization?: {
        allocation?: "static" | "dynamic";
        dnsServers?: string[];
        gateway?: string[];
        ipAddress?: string;
        mask?: string;
        primaryWinsServer?: string;
        secondaryWinsServer?: string;
      };
      ipAddresses?: string[];
      macAddress?: string;
      network: {
        assignable?: boolean;
        id: string;
        location?: string;
        name?: string;
        properties?: { privateCloudId?: string };
        type?: string;
      };
      nicType:
        | "E1000"
        | "E1000E"
        | "PCNET32"
        | "VMXNET"
        | "VMXNET2"
        | "VMXNET3";
      powerOnBoot?: boolean;
      virtualNicId?: string;
      virtualNicName?: string;
    }[];
    numberOfCores: number;
    password?: Redacted.Redacted<string>;
    privateCloudId: string;
    provisioningState?: string;
    publicIP?: string;
    resourcePool?: {
      id: string;
      location?: string;
      name?: string;
      privateCloudId?: string;
      properties?: { fullName?: string };
      type?: string;
    };
    status?:
      | "running"
      | "suspended"
      | "poweredoff"
      | "updating"
      | "deallocating"
      | "deleting";
    templateId?: string;
    username?: string;
    vSphereNetworks?: string[];
    vmId?: string;
    vmwaretools?: string;
  };
  tags?: unknown;
  type?: string;
}
export const VirtualMachinesGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    location: Schema.String,
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        amountOfRam: Schema.Number,
        controllers: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              subType: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
        customization: Schema.optional(
          Schema.Struct({
            dnsServers: Schema.optional(Schema.Array(Schema.String)),
            hostName: Schema.optional(Schema.String),
            password: Schema.optional(SensitiveOutputString),
            policyId: Schema.optional(Schema.String),
            username: Schema.optional(Schema.String),
          }),
        ),
        disks: Schema.optional(
          Schema.Array(
            Schema.Struct({
              controllerId: Schema.String,
              independenceMode: Schema.Literals([
                "persistent",
                "independent_persistent",
                "independent_nonpersistent",
              ]),
              totalSize: Schema.Number,
              virtualDiskId: Schema.optional(Schema.String),
              virtualDiskName: Schema.optional(Schema.String),
            }),
          ),
        ),
        dnsname: Schema.optional(Schema.String),
        exposeToGuestVM: Schema.optional(Schema.Boolean),
        folder: Schema.optional(Schema.String),
        guestOS: Schema.optional(Schema.String),
        guestOSType: Schema.optional(
          Schema.Literals(["linux", "windows", "other"]),
        ),
        nics: Schema.optional(
          Schema.Array(
            Schema.Struct({
              customization: Schema.optional(
                Schema.Struct({
                  allocation: Schema.optional(
                    Schema.Literals(["static", "dynamic"]),
                  ),
                  dnsServers: Schema.optional(Schema.Array(Schema.String)),
                  gateway: Schema.optional(Schema.Array(Schema.String)),
                  ipAddress: Schema.optional(Schema.String),
                  mask: Schema.optional(Schema.String),
                  primaryWinsServer: Schema.optional(Schema.String),
                  secondaryWinsServer: Schema.optional(Schema.String),
                }),
              ),
              ipAddresses: Schema.optional(Schema.Array(Schema.String)),
              macAddress: Schema.optional(Schema.String),
              network: Schema.Struct({
                assignable: Schema.optional(Schema.Boolean),
                id: Schema.String,
                location: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                properties: Schema.optional(
                  Schema.Struct({
                    privateCloudId: Schema.optional(Schema.String),
                  }),
                ),
                type: Schema.optional(Schema.String),
              }),
              nicType: Schema.Literals([
                "E1000",
                "E1000E",
                "PCNET32",
                "VMXNET",
                "VMXNET2",
                "VMXNET3",
              ]),
              powerOnBoot: Schema.optional(Schema.Boolean),
              virtualNicId: Schema.optional(Schema.String),
              virtualNicName: Schema.optional(Schema.String),
            }),
          ),
        ),
        numberOfCores: Schema.Number,
        password: Schema.optional(SensitiveOutputString),
        privateCloudId: Schema.String,
        provisioningState: Schema.optional(Schema.String),
        publicIP: Schema.optional(Schema.String),
        resourcePool: Schema.optional(
          Schema.Struct({
            id: Schema.String,
            location: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            privateCloudId: Schema.optional(Schema.String),
            properties: Schema.optional(
              Schema.Struct({
                fullName: Schema.optional(Schema.String),
              }),
            ),
            type: Schema.optional(Schema.String),
          }),
        ),
        status: Schema.optional(
          Schema.Literals([
            "running",
            "suspended",
            "poweredoff",
            "updating",
            "deallocating",
            "deleting",
          ]),
        ),
        templateId: Schema.optional(Schema.String),
        username: Schema.optional(Schema.String),
        vSphereNetworks: Schema.optional(Schema.Array(Schema.String)),
        vmId: Schema.optional(Schema.String),
        vmwaretools: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Unknown),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<VirtualMachinesGetOutput>;

// The operation
/**
 * Implements virtual machine GET method
 *
 * Get virtual machine
 *
 * @param subscriptionId - The subscription ID.
 * @param resourceGroupName - The name of the resource group
 * @param virtualMachineName - virtual machine name
 * @param api-version - Client API version.
 */
export const VirtualMachinesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualMachinesGetInput,
  outputSchema: VirtualMachinesGetOutput,
}));
// Input Schema
export interface VirtualMachinesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $filter?: string;
  $top?: number;
  $skipToken?: string;
}
export const VirtualMachinesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/virtualMachines",
      apiVersion: "2019-04-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesListByResourceGroupInput>;

// Output Schema
export interface VirtualMachinesListByResourceGroupOutput {
  nextLink?: string;
  value?: {
    id?: string;
    location: string;
    name?: string;
    properties?: {
      amountOfRam: number;
      controllers?: {
        id?: string;
        name?: string;
        subType?: string;
        type?: string;
      }[];
      customization?: {
        dnsServers?: string[];
        hostName?: string;
        password?: Redacted.Redacted<string>;
        policyId?: string;
        username?: string;
      };
      disks?: {
        controllerId: string;
        independenceMode:
          | "persistent"
          | "independent_persistent"
          | "independent_nonpersistent";
        totalSize: number;
        virtualDiskId?: string;
        virtualDiskName?: string;
      }[];
      dnsname?: string;
      exposeToGuestVM?: boolean;
      folder?: string;
      guestOS?: string;
      guestOSType?: "linux" | "windows" | "other";
      nics?: {
        customization?: {
          allocation?: "static" | "dynamic";
          dnsServers?: string[];
          gateway?: string[];
          ipAddress?: string;
          mask?: string;
          primaryWinsServer?: string;
          secondaryWinsServer?: string;
        };
        ipAddresses?: string[];
        macAddress?: string;
        network: {
          assignable?: boolean;
          id: string;
          location?: string;
          name?: string;
          properties?: { privateCloudId?: string };
          type?: string;
        };
        nicType:
          | "E1000"
          | "E1000E"
          | "PCNET32"
          | "VMXNET"
          | "VMXNET2"
          | "VMXNET3";
        powerOnBoot?: boolean;
        virtualNicId?: string;
        virtualNicName?: string;
      }[];
      numberOfCores: number;
      password?: Redacted.Redacted<string>;
      privateCloudId: string;
      provisioningState?: string;
      publicIP?: string;
      resourcePool?: {
        id: string;
        location?: string;
        name?: string;
        privateCloudId?: string;
        properties?: { fullName?: string };
        type?: string;
      };
      status?:
        | "running"
        | "suspended"
        | "poweredoff"
        | "updating"
        | "deallocating"
        | "deleting";
      templateId?: string;
      username?: string;
      vSphereNetworks?: string[];
      vmId?: string;
      vmwaretools?: string;
    };
    tags?: unknown;
    type?: string;
  }[];
}
export const VirtualMachinesListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          location: Schema.String,
          name: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              amountOfRam: Schema.Number,
              controllers: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                    name: Schema.optional(Schema.String),
                    subType: Schema.optional(Schema.String),
                    type: Schema.optional(Schema.String),
                  }),
                ),
              ),
              customization: Schema.optional(
                Schema.Struct({
                  dnsServers: Schema.optional(Schema.Array(Schema.String)),
                  hostName: Schema.optional(Schema.String),
                  password: Schema.optional(SensitiveOutputString),
                  policyId: Schema.optional(Schema.String),
                  username: Schema.optional(Schema.String),
                }),
              ),
              disks: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    controllerId: Schema.String,
                    independenceMode: Schema.Literals([
                      "persistent",
                      "independent_persistent",
                      "independent_nonpersistent",
                    ]),
                    totalSize: Schema.Number,
                    virtualDiskId: Schema.optional(Schema.String),
                    virtualDiskName: Schema.optional(Schema.String),
                  }),
                ),
              ),
              dnsname: Schema.optional(Schema.String),
              exposeToGuestVM: Schema.optional(Schema.Boolean),
              folder: Schema.optional(Schema.String),
              guestOS: Schema.optional(Schema.String),
              guestOSType: Schema.optional(
                Schema.Literals(["linux", "windows", "other"]),
              ),
              nics: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    customization: Schema.optional(
                      Schema.Struct({
                        allocation: Schema.optional(
                          Schema.Literals(["static", "dynamic"]),
                        ),
                        dnsServers: Schema.optional(
                          Schema.Array(Schema.String),
                        ),
                        gateway: Schema.optional(Schema.Array(Schema.String)),
                        ipAddress: Schema.optional(Schema.String),
                        mask: Schema.optional(Schema.String),
                        primaryWinsServer: Schema.optional(Schema.String),
                        secondaryWinsServer: Schema.optional(Schema.String),
                      }),
                    ),
                    ipAddresses: Schema.optional(Schema.Array(Schema.String)),
                    macAddress: Schema.optional(Schema.String),
                    network: Schema.Struct({
                      assignable: Schema.optional(Schema.Boolean),
                      id: Schema.String,
                      location: Schema.optional(Schema.String),
                      name: Schema.optional(Schema.String),
                      properties: Schema.optional(
                        Schema.Struct({
                          privateCloudId: Schema.optional(Schema.String),
                        }),
                      ),
                      type: Schema.optional(Schema.String),
                    }),
                    nicType: Schema.Literals([
                      "E1000",
                      "E1000E",
                      "PCNET32",
                      "VMXNET",
                      "VMXNET2",
                      "VMXNET3",
                    ]),
                    powerOnBoot: Schema.optional(Schema.Boolean),
                    virtualNicId: Schema.optional(Schema.String),
                    virtualNicName: Schema.optional(Schema.String),
                  }),
                ),
              ),
              numberOfCores: Schema.Number,
              password: Schema.optional(SensitiveOutputString),
              privateCloudId: Schema.String,
              provisioningState: Schema.optional(Schema.String),
              publicIP: Schema.optional(Schema.String),
              resourcePool: Schema.optional(
                Schema.Struct({
                  id: Schema.String,
                  location: Schema.optional(Schema.String),
                  name: Schema.optional(Schema.String),
                  privateCloudId: Schema.optional(Schema.String),
                  properties: Schema.optional(
                    Schema.Struct({
                      fullName: Schema.optional(Schema.String),
                    }),
                  ),
                  type: Schema.optional(Schema.String),
                }),
              ),
              status: Schema.optional(
                Schema.Literals([
                  "running",
                  "suspended",
                  "poweredoff",
                  "updating",
                  "deallocating",
                  "deleting",
                ]),
              ),
              templateId: Schema.optional(Schema.String),
              username: Schema.optional(Schema.String),
              vSphereNetworks: Schema.optional(Schema.Array(Schema.String)),
              vmId: Schema.optional(Schema.String),
              vmwaretools: Schema.optional(Schema.String),
            }),
          ),
          tags: Schema.optional(Schema.Unknown),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<VirtualMachinesListByResourceGroupOutput>;

// The operation
/**
 * Implements list virtual machine within RG method
 *
 * Returns list of virtual machine within resource group
 *
 * @param subscriptionId - The subscription ID.
 * @param resourceGroupName - The name of the resource group
 * @param api-version - Client API version.
 * @param $filter - The filter to apply on the list operation
 * @param $top - The maximum number of record sets to return
 * @param $skipToken - to be used by nextLink implementation
 */
export const VirtualMachinesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachinesListByResourceGroupInput,
    outputSchema: VirtualMachinesListByResourceGroupOutput,
  }));
// Input Schema
export interface VirtualMachinesListBySubscriptionInput {
  subscriptionId: string;
  $filter?: string;
  $top?: number;
  $skipToken?: string;
}
export const VirtualMachinesListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/virtualMachines",
      apiVersion: "2019-04-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesListBySubscriptionInput>;

// Output Schema
export interface VirtualMachinesListBySubscriptionOutput {
  nextLink?: string;
  value?: {
    id?: string;
    location: string;
    name?: string;
    properties?: {
      amountOfRam: number;
      controllers?: {
        id?: string;
        name?: string;
        subType?: string;
        type?: string;
      }[];
      customization?: {
        dnsServers?: string[];
        hostName?: string;
        password?: Redacted.Redacted<string>;
        policyId?: string;
        username?: string;
      };
      disks?: {
        controllerId: string;
        independenceMode:
          | "persistent"
          | "independent_persistent"
          | "independent_nonpersistent";
        totalSize: number;
        virtualDiskId?: string;
        virtualDiskName?: string;
      }[];
      dnsname?: string;
      exposeToGuestVM?: boolean;
      folder?: string;
      guestOS?: string;
      guestOSType?: "linux" | "windows" | "other";
      nics?: {
        customization?: {
          allocation?: "static" | "dynamic";
          dnsServers?: string[];
          gateway?: string[];
          ipAddress?: string;
          mask?: string;
          primaryWinsServer?: string;
          secondaryWinsServer?: string;
        };
        ipAddresses?: string[];
        macAddress?: string;
        network: {
          assignable?: boolean;
          id: string;
          location?: string;
          name?: string;
          properties?: { privateCloudId?: string };
          type?: string;
        };
        nicType:
          | "E1000"
          | "E1000E"
          | "PCNET32"
          | "VMXNET"
          | "VMXNET2"
          | "VMXNET3";
        powerOnBoot?: boolean;
        virtualNicId?: string;
        virtualNicName?: string;
      }[];
      numberOfCores: number;
      password?: Redacted.Redacted<string>;
      privateCloudId: string;
      provisioningState?: string;
      publicIP?: string;
      resourcePool?: {
        id: string;
        location?: string;
        name?: string;
        privateCloudId?: string;
        properties?: { fullName?: string };
        type?: string;
      };
      status?:
        | "running"
        | "suspended"
        | "poweredoff"
        | "updating"
        | "deallocating"
        | "deleting";
      templateId?: string;
      username?: string;
      vSphereNetworks?: string[];
      vmId?: string;
      vmwaretools?: string;
    };
    tags?: unknown;
    type?: string;
  }[];
}
export const VirtualMachinesListBySubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          location: Schema.String,
          name: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              amountOfRam: Schema.Number,
              controllers: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                    name: Schema.optional(Schema.String),
                    subType: Schema.optional(Schema.String),
                    type: Schema.optional(Schema.String),
                  }),
                ),
              ),
              customization: Schema.optional(
                Schema.Struct({
                  dnsServers: Schema.optional(Schema.Array(Schema.String)),
                  hostName: Schema.optional(Schema.String),
                  password: Schema.optional(SensitiveOutputString),
                  policyId: Schema.optional(Schema.String),
                  username: Schema.optional(Schema.String),
                }),
              ),
              disks: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    controllerId: Schema.String,
                    independenceMode: Schema.Literals([
                      "persistent",
                      "independent_persistent",
                      "independent_nonpersistent",
                    ]),
                    totalSize: Schema.Number,
                    virtualDiskId: Schema.optional(Schema.String),
                    virtualDiskName: Schema.optional(Schema.String),
                  }),
                ),
              ),
              dnsname: Schema.optional(Schema.String),
              exposeToGuestVM: Schema.optional(Schema.Boolean),
              folder: Schema.optional(Schema.String),
              guestOS: Schema.optional(Schema.String),
              guestOSType: Schema.optional(
                Schema.Literals(["linux", "windows", "other"]),
              ),
              nics: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    customization: Schema.optional(
                      Schema.Struct({
                        allocation: Schema.optional(
                          Schema.Literals(["static", "dynamic"]),
                        ),
                        dnsServers: Schema.optional(
                          Schema.Array(Schema.String),
                        ),
                        gateway: Schema.optional(Schema.Array(Schema.String)),
                        ipAddress: Schema.optional(Schema.String),
                        mask: Schema.optional(Schema.String),
                        primaryWinsServer: Schema.optional(Schema.String),
                        secondaryWinsServer: Schema.optional(Schema.String),
                      }),
                    ),
                    ipAddresses: Schema.optional(Schema.Array(Schema.String)),
                    macAddress: Schema.optional(Schema.String),
                    network: Schema.Struct({
                      assignable: Schema.optional(Schema.Boolean),
                      id: Schema.String,
                      location: Schema.optional(Schema.String),
                      name: Schema.optional(Schema.String),
                      properties: Schema.optional(
                        Schema.Struct({
                          privateCloudId: Schema.optional(Schema.String),
                        }),
                      ),
                      type: Schema.optional(Schema.String),
                    }),
                    nicType: Schema.Literals([
                      "E1000",
                      "E1000E",
                      "PCNET32",
                      "VMXNET",
                      "VMXNET2",
                      "VMXNET3",
                    ]),
                    powerOnBoot: Schema.optional(Schema.Boolean),
                    virtualNicId: Schema.optional(Schema.String),
                    virtualNicName: Schema.optional(Schema.String),
                  }),
                ),
              ),
              numberOfCores: Schema.Number,
              password: Schema.optional(SensitiveOutputString),
              privateCloudId: Schema.String,
              provisioningState: Schema.optional(Schema.String),
              publicIP: Schema.optional(Schema.String),
              resourcePool: Schema.optional(
                Schema.Struct({
                  id: Schema.String,
                  location: Schema.optional(Schema.String),
                  name: Schema.optional(Schema.String),
                  privateCloudId: Schema.optional(Schema.String),
                  properties: Schema.optional(
                    Schema.Struct({
                      fullName: Schema.optional(Schema.String),
                    }),
                  ),
                  type: Schema.optional(Schema.String),
                }),
              ),
              status: Schema.optional(
                Schema.Literals([
                  "running",
                  "suspended",
                  "poweredoff",
                  "updating",
                  "deallocating",
                  "deleting",
                ]),
              ),
              templateId: Schema.optional(Schema.String),
              username: Schema.optional(Schema.String),
              vSphereNetworks: Schema.optional(Schema.Array(Schema.String)),
              vmId: Schema.optional(Schema.String),
              vmwaretools: Schema.optional(Schema.String),
            }),
          ),
          tags: Schema.optional(Schema.Unknown),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<VirtualMachinesListBySubscriptionOutput>;

// The operation
/**
 * Implements list virtual machine within subscription method
 *
 * Returns list virtual machine within subscription
 *
 * @param subscriptionId - The subscription ID.
 * @param api-version - Client API version.
 * @param $filter - The filter to apply on the list operation
 * @param $top - The maximum number of record sets to return
 * @param $skipToken - to be used by nextLink implementation
 */
export const VirtualMachinesListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachinesListBySubscriptionInput,
    outputSchema: VirtualMachinesListBySubscriptionOutput,
  }));
// Input Schema
export interface VirtualMachinesStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualMachineName: string;
}
export const VirtualMachinesStartInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/virtualMachines/{virtualMachineName}/start",
      apiVersion: "2019-04-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesStartInput>;

// Output Schema
export type VirtualMachinesStartOutput = void;
export const VirtualMachinesStartOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachinesStartOutput>;

// The operation
/**
 * Implements a start method for a virtual machine
 *
 * Power on virtual machine
 *
 * @param subscriptionId - The subscription ID.
 * @param resourceGroupName - The name of the resource group
 * @param Referer - referer url
 * @param virtualMachineName - virtual machine name
 * @param api-version - Client API version.
 */
export const VirtualMachinesStart = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualMachinesStartInput,
  outputSchema: VirtualMachinesStartOutput,
}));
// Input Schema
export interface VirtualMachinesStopInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualMachineName: string;
  mode?: "reboot" | "suspend" | "shutdown" | "poweroff";
}
export const VirtualMachinesStopInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
    mode: Schema.optional(
      Schema.Literals(["reboot", "suspend", "shutdown", "poweroff"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/virtualMachines/{virtualMachineName}/stop",
      apiVersion: "2019-04-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesStopInput>;

// Output Schema
export type VirtualMachinesStopOutput = void;
export const VirtualMachinesStopOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachinesStopOutput>;

// The operation
/**
 * Implements shutdown, poweroff, and suspend method for a virtual machine
 *
 * Power off virtual machine, options: shutdown, poweroff, and suspend
 *
 * @param subscriptionId - The subscription ID.
 * @param resourceGroupName - The name of the resource group
 * @param Referer - referer url
 * @param virtualMachineName - virtual machine name
 * @param mode - query stop mode parameter (reboot, shutdown, etc...)
 * @param api-version - Client API version.
 */
export const VirtualMachinesStop = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualMachinesStopInput,
  outputSchema: VirtualMachinesStopOutput,
}));
// Input Schema
export interface VirtualMachinesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualMachineName: string;
  tags?: unknown;
}
export const VirtualMachinesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/virtualMachines/{virtualMachineName}",
      apiVersion: "2019-04-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesUpdateInput>;

// Output Schema
export interface VirtualMachinesUpdateOutput {
  id?: string;
  location: string;
  name?: string;
  properties?: {
    amountOfRam: number;
    controllers?: {
      id?: string;
      name?: string;
      subType?: string;
      type?: string;
    }[];
    customization?: {
      dnsServers?: string[];
      hostName?: string;
      password?: Redacted.Redacted<string>;
      policyId?: string;
      username?: string;
    };
    disks?: {
      controllerId: string;
      independenceMode:
        | "persistent"
        | "independent_persistent"
        | "independent_nonpersistent";
      totalSize: number;
      virtualDiskId?: string;
      virtualDiskName?: string;
    }[];
    dnsname?: string;
    exposeToGuestVM?: boolean;
    folder?: string;
    guestOS?: string;
    guestOSType?: "linux" | "windows" | "other";
    nics?: {
      customization?: {
        allocation?: "static" | "dynamic";
        dnsServers?: string[];
        gateway?: string[];
        ipAddress?: string;
        mask?: string;
        primaryWinsServer?: string;
        secondaryWinsServer?: string;
      };
      ipAddresses?: string[];
      macAddress?: string;
      network: {
        assignable?: boolean;
        id: string;
        location?: string;
        name?: string;
        properties?: { privateCloudId?: string };
        type?: string;
      };
      nicType:
        | "E1000"
        | "E1000E"
        | "PCNET32"
        | "VMXNET"
        | "VMXNET2"
        | "VMXNET3";
      powerOnBoot?: boolean;
      virtualNicId?: string;
      virtualNicName?: string;
    }[];
    numberOfCores: number;
    password?: Redacted.Redacted<string>;
    privateCloudId: string;
    provisioningState?: string;
    publicIP?: string;
    resourcePool?: {
      id: string;
      location?: string;
      name?: string;
      privateCloudId?: string;
      properties?: { fullName?: string };
      type?: string;
    };
    status?:
      | "running"
      | "suspended"
      | "poweredoff"
      | "updating"
      | "deallocating"
      | "deleting";
    templateId?: string;
    username?: string;
    vSphereNetworks?: string[];
    vmId?: string;
    vmwaretools?: string;
  };
  tags?: unknown;
  type?: string;
}
export const VirtualMachinesUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    location: Schema.String,
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        amountOfRam: Schema.Number,
        controllers: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              subType: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
        customization: Schema.optional(
          Schema.Struct({
            dnsServers: Schema.optional(Schema.Array(Schema.String)),
            hostName: Schema.optional(Schema.String),
            password: Schema.optional(SensitiveOutputString),
            policyId: Schema.optional(Schema.String),
            username: Schema.optional(Schema.String),
          }),
        ),
        disks: Schema.optional(
          Schema.Array(
            Schema.Struct({
              controllerId: Schema.String,
              independenceMode: Schema.Literals([
                "persistent",
                "independent_persistent",
                "independent_nonpersistent",
              ]),
              totalSize: Schema.Number,
              virtualDiskId: Schema.optional(Schema.String),
              virtualDiskName: Schema.optional(Schema.String),
            }),
          ),
        ),
        dnsname: Schema.optional(Schema.String),
        exposeToGuestVM: Schema.optional(Schema.Boolean),
        folder: Schema.optional(Schema.String),
        guestOS: Schema.optional(Schema.String),
        guestOSType: Schema.optional(
          Schema.Literals(["linux", "windows", "other"]),
        ),
        nics: Schema.optional(
          Schema.Array(
            Schema.Struct({
              customization: Schema.optional(
                Schema.Struct({
                  allocation: Schema.optional(
                    Schema.Literals(["static", "dynamic"]),
                  ),
                  dnsServers: Schema.optional(Schema.Array(Schema.String)),
                  gateway: Schema.optional(Schema.Array(Schema.String)),
                  ipAddress: Schema.optional(Schema.String),
                  mask: Schema.optional(Schema.String),
                  primaryWinsServer: Schema.optional(Schema.String),
                  secondaryWinsServer: Schema.optional(Schema.String),
                }),
              ),
              ipAddresses: Schema.optional(Schema.Array(Schema.String)),
              macAddress: Schema.optional(Schema.String),
              network: Schema.Struct({
                assignable: Schema.optional(Schema.Boolean),
                id: Schema.String,
                location: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                properties: Schema.optional(
                  Schema.Struct({
                    privateCloudId: Schema.optional(Schema.String),
                  }),
                ),
                type: Schema.optional(Schema.String),
              }),
              nicType: Schema.Literals([
                "E1000",
                "E1000E",
                "PCNET32",
                "VMXNET",
                "VMXNET2",
                "VMXNET3",
              ]),
              powerOnBoot: Schema.optional(Schema.Boolean),
              virtualNicId: Schema.optional(Schema.String),
              virtualNicName: Schema.optional(Schema.String),
            }),
          ),
        ),
        numberOfCores: Schema.Number,
        password: Schema.optional(SensitiveOutputString),
        privateCloudId: Schema.String,
        provisioningState: Schema.optional(Schema.String),
        publicIP: Schema.optional(Schema.String),
        resourcePool: Schema.optional(
          Schema.Struct({
            id: Schema.String,
            location: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            privateCloudId: Schema.optional(Schema.String),
            properties: Schema.optional(
              Schema.Struct({
                fullName: Schema.optional(Schema.String),
              }),
            ),
            type: Schema.optional(Schema.String),
          }),
        ),
        status: Schema.optional(
          Schema.Literals([
            "running",
            "suspended",
            "poweredoff",
            "updating",
            "deallocating",
            "deleting",
          ]),
        ),
        templateId: Schema.optional(Schema.String),
        username: Schema.optional(Schema.String),
        vSphereNetworks: Schema.optional(Schema.Array(Schema.String)),
        vmId: Schema.optional(Schema.String),
        vmwaretools: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Unknown),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<VirtualMachinesUpdateOutput>;

// The operation
/**
 * Implements virtual machine PATCH method
 *
 * Patch virtual machine properties
 *
 * @param subscriptionId - The subscription ID.
 * @param resourceGroupName - The name of the resource group
 * @param virtualMachineName - virtual machine name
 * @param api-version - Client API version.
 */
export const VirtualMachinesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualMachinesUpdateInput,
  outputSchema: VirtualMachinesUpdateOutput,
}));
// Input Schema
export interface VirtualMachineTemplatesGetInput {
  subscriptionId: string;
  regionId: string;
  pcName: string;
  virtualMachineTemplateName: string;
}
export const VirtualMachineTemplatesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    regionId: Schema.String.pipe(T.PathParam()),
    pcName: Schema.String.pipe(T.PathParam()),
    virtualMachineTemplateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/privateClouds/{pcName}/virtualMachineTemplates/{virtualMachineTemplateName}",
      apiVersion: "2019-04-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachineTemplatesGetInput>;

// Output Schema
export interface VirtualMachineTemplatesGetOutput {
  id?: string;
  location?: string;
  name?: string;
  properties?: {
    amountOfRam?: number;
    controllers?: {
      id?: string;
      name?: string;
      subType?: string;
      type?: string;
    }[];
    description?: string;
    disks?: {
      controllerId: string;
      independenceMode:
        | "persistent"
        | "independent_persistent"
        | "independent_nonpersistent";
      totalSize: number;
      virtualDiskId?: string;
      virtualDiskName?: string;
    }[];
    exposeToGuestVM?: boolean;
    guestOS?: string;
    guestOSType?: string;
    nics?: {
      customization?: {
        allocation?: "static" | "dynamic";
        dnsServers?: string[];
        gateway?: string[];
        ipAddress?: string;
        mask?: string;
        primaryWinsServer?: string;
        secondaryWinsServer?: string;
      };
      ipAddresses?: string[];
      macAddress?: string;
      network: {
        assignable?: boolean;
        id: string;
        location?: string;
        name?: string;
        properties?: { privateCloudId?: string };
        type?: string;
      };
      nicType:
        | "E1000"
        | "E1000E"
        | "PCNET32"
        | "VMXNET"
        | "VMXNET2"
        | "VMXNET3";
      powerOnBoot?: boolean;
      virtualNicId?: string;
      virtualNicName?: string;
    }[];
    numberOfCores?: number;
    path?: string;
    privateCloudId: string;
    vSphereNetworks?: string[];
    vSphereTags?: string[];
    vmwaretools?: string;
  };
  type?: string;
}
export const VirtualMachineTemplatesGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        amountOfRam: Schema.optional(Schema.Number),
        controllers: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              subType: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
        description: Schema.optional(Schema.String),
        disks: Schema.optional(
          Schema.Array(
            Schema.Struct({
              controllerId: Schema.String,
              independenceMode: Schema.Literals([
                "persistent",
                "independent_persistent",
                "independent_nonpersistent",
              ]),
              totalSize: Schema.Number,
              virtualDiskId: Schema.optional(Schema.String),
              virtualDiskName: Schema.optional(Schema.String),
            }),
          ),
        ),
        exposeToGuestVM: Schema.optional(Schema.Boolean),
        guestOS: Schema.optional(Schema.String),
        guestOSType: Schema.optional(Schema.String),
        nics: Schema.optional(
          Schema.Array(
            Schema.Struct({
              customization: Schema.optional(
                Schema.Struct({
                  allocation: Schema.optional(
                    Schema.Literals(["static", "dynamic"]),
                  ),
                  dnsServers: Schema.optional(Schema.Array(Schema.String)),
                  gateway: Schema.optional(Schema.Array(Schema.String)),
                  ipAddress: Schema.optional(Schema.String),
                  mask: Schema.optional(Schema.String),
                  primaryWinsServer: Schema.optional(Schema.String),
                  secondaryWinsServer: Schema.optional(Schema.String),
                }),
              ),
              ipAddresses: Schema.optional(Schema.Array(Schema.String)),
              macAddress: Schema.optional(Schema.String),
              network: Schema.Struct({
                assignable: Schema.optional(Schema.Boolean),
                id: Schema.String,
                location: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                properties: Schema.optional(
                  Schema.Struct({
                    privateCloudId: Schema.optional(Schema.String),
                  }),
                ),
                type: Schema.optional(Schema.String),
              }),
              nicType: Schema.Literals([
                "E1000",
                "E1000E",
                "PCNET32",
                "VMXNET",
                "VMXNET2",
                "VMXNET3",
              ]),
              powerOnBoot: Schema.optional(Schema.Boolean),
              virtualNicId: Schema.optional(Schema.String),
              virtualNicName: Schema.optional(Schema.String),
            }),
          ),
        ),
        numberOfCores: Schema.optional(Schema.Number),
        path: Schema.optional(Schema.String),
        privateCloudId: Schema.String,
        vSphereNetworks: Schema.optional(Schema.Array(Schema.String)),
        vSphereTags: Schema.optional(Schema.Array(Schema.String)),
        vmwaretools: Schema.optional(Schema.String),
      }),
    ),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<VirtualMachineTemplatesGetOutput>;

// The operation
/**
 * Implements virtual machine template GET method
 *
 * Returns virtual machine templates by its name
 *
 * @param subscriptionId - The subscription ID.
 * @param regionId - The region Id (westus, eastus)
 * @param pcName - The private cloud name
 * @param virtualMachineTemplateName - virtual machine template id (vsphereId)
 * @param api-version - Client API version.
 */
export const VirtualMachineTemplatesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualMachineTemplatesGetInput,
  outputSchema: VirtualMachineTemplatesGetOutput,
}));
// Input Schema
export interface VirtualMachineTemplatesListInput {
  subscriptionId: string;
  pcName: string;
  regionId: string;
  resourcePoolName: string;
}
export const VirtualMachineTemplatesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    pcName: Schema.String.pipe(T.PathParam()),
    regionId: Schema.String.pipe(T.PathParam()),
    resourcePoolName: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/privateClouds/{pcName}/virtualMachineTemplates",
      apiVersion: "2019-04-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachineTemplatesListInput>;

// Output Schema
export interface VirtualMachineTemplatesListOutput {
  nextLink?: string;
  value?: {
    id?: string;
    location?: string;
    name?: string;
    properties?: {
      amountOfRam?: number;
      controllers?: {
        id?: string;
        name?: string;
        subType?: string;
        type?: string;
      }[];
      description?: string;
      disks?: {
        controllerId: string;
        independenceMode:
          | "persistent"
          | "independent_persistent"
          | "independent_nonpersistent";
        totalSize: number;
        virtualDiskId?: string;
        virtualDiskName?: string;
      }[];
      exposeToGuestVM?: boolean;
      guestOS?: string;
      guestOSType?: string;
      nics?: {
        customization?: {
          allocation?: "static" | "dynamic";
          dnsServers?: string[];
          gateway?: string[];
          ipAddress?: string;
          mask?: string;
          primaryWinsServer?: string;
          secondaryWinsServer?: string;
        };
        ipAddresses?: string[];
        macAddress?: string;
        network: {
          assignable?: boolean;
          id: string;
          location?: string;
          name?: string;
          properties?: { privateCloudId?: string };
          type?: string;
        };
        nicType:
          | "E1000"
          | "E1000E"
          | "PCNET32"
          | "VMXNET"
          | "VMXNET2"
          | "VMXNET3";
        powerOnBoot?: boolean;
        virtualNicId?: string;
        virtualNicName?: string;
      }[];
      numberOfCores?: number;
      path?: string;
      privateCloudId: string;
      vSphereNetworks?: string[];
      vSphereTags?: string[];
      vmwaretools?: string;
    };
    type?: string;
  }[];
}
export const VirtualMachineTemplatesListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              amountOfRam: Schema.optional(Schema.Number),
              controllers: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                    name: Schema.optional(Schema.String),
                    subType: Schema.optional(Schema.String),
                    type: Schema.optional(Schema.String),
                  }),
                ),
              ),
              description: Schema.optional(Schema.String),
              disks: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    controllerId: Schema.String,
                    independenceMode: Schema.Literals([
                      "persistent",
                      "independent_persistent",
                      "independent_nonpersistent",
                    ]),
                    totalSize: Schema.Number,
                    virtualDiskId: Schema.optional(Schema.String),
                    virtualDiskName: Schema.optional(Schema.String),
                  }),
                ),
              ),
              exposeToGuestVM: Schema.optional(Schema.Boolean),
              guestOS: Schema.optional(Schema.String),
              guestOSType: Schema.optional(Schema.String),
              nics: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    customization: Schema.optional(
                      Schema.Struct({
                        allocation: Schema.optional(
                          Schema.Literals(["static", "dynamic"]),
                        ),
                        dnsServers: Schema.optional(
                          Schema.Array(Schema.String),
                        ),
                        gateway: Schema.optional(Schema.Array(Schema.String)),
                        ipAddress: Schema.optional(Schema.String),
                        mask: Schema.optional(Schema.String),
                        primaryWinsServer: Schema.optional(Schema.String),
                        secondaryWinsServer: Schema.optional(Schema.String),
                      }),
                    ),
                    ipAddresses: Schema.optional(Schema.Array(Schema.String)),
                    macAddress: Schema.optional(Schema.String),
                    network: Schema.Struct({
                      assignable: Schema.optional(Schema.Boolean),
                      id: Schema.String,
                      location: Schema.optional(Schema.String),
                      name: Schema.optional(Schema.String),
                      properties: Schema.optional(
                        Schema.Struct({
                          privateCloudId: Schema.optional(Schema.String),
                        }),
                      ),
                      type: Schema.optional(Schema.String),
                    }),
                    nicType: Schema.Literals([
                      "E1000",
                      "E1000E",
                      "PCNET32",
                      "VMXNET",
                      "VMXNET2",
                      "VMXNET3",
                    ]),
                    powerOnBoot: Schema.optional(Schema.Boolean),
                    virtualNicId: Schema.optional(Schema.String),
                    virtualNicName: Schema.optional(Schema.String),
                  }),
                ),
              ),
              numberOfCores: Schema.optional(Schema.Number),
              path: Schema.optional(Schema.String),
              privateCloudId: Schema.String,
              vSphereNetworks: Schema.optional(Schema.Array(Schema.String)),
              vSphereTags: Schema.optional(Schema.Array(Schema.String)),
              vmwaretools: Schema.optional(Schema.String),
            }),
          ),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<VirtualMachineTemplatesListOutput>;

// The operation
/**
 * Implements list of available VM templates
 *
 * Returns list of virtual machine templates in region for private cloud
 *
 * @param subscriptionId - The subscription ID.
 * @param api-version - Client API version.
 * @param pcName - The private cloud name
 * @param regionId - The region Id (westus, eastus)
 * @param resourcePoolName - Resource pool used to derive vSphere cluster which contains VM templates
 */
export const VirtualMachineTemplatesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualMachineTemplatesListInput,
  outputSchema: VirtualMachineTemplatesListOutput,
}));
// Input Schema
export interface VirtualNetworksGetInput {
  subscriptionId: string;
  regionId: string;
  pcName: string;
  virtualNetworkName: string;
}
export const VirtualNetworksGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    regionId: Schema.String.pipe(T.PathParam()),
    pcName: Schema.String.pipe(T.PathParam()),
    virtualNetworkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/privateClouds/{pcName}/virtualNetworks/{virtualNetworkName}",
      apiVersion: "2019-04-01",
    }),
  ) as unknown as Schema.Codec<VirtualNetworksGetInput>;

// Output Schema
export interface VirtualNetworksGetOutput {
  assignable?: boolean;
  id: string;
  location?: string;
  name?: string;
  properties?: { privateCloudId?: string };
  type?: string;
}
export const VirtualNetworksGetOutput =
  /*@__PURE__*/ Schema.Struct({
    assignable: Schema.optional(Schema.Boolean),
    id: Schema.String,
    location: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        privateCloudId: Schema.optional(Schema.String),
      }),
    ),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<VirtualNetworksGetOutput>;

// The operation
/**
 * Implements virtual network GET method
 *
 * Return virtual network by its name
 *
 * @param subscriptionId - The subscription ID.
 * @param regionId - The region Id (westus, eastus)
 * @param pcName - The private cloud name
 * @param virtualNetworkName - virtual network id (vsphereId)
 * @param api-version - Client API version.
 */
export const VirtualNetworksGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualNetworksGetInput,
  outputSchema: VirtualNetworksGetOutput,
}));
// Input Schema
export interface VirtualNetworksListInput {
  subscriptionId: string;
  regionId: string;
  pcName: string;
  resourcePoolName: string;
}
export const VirtualNetworksListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    regionId: Schema.String.pipe(T.PathParam()),
    pcName: Schema.String.pipe(T.PathParam()),
    resourcePoolName: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/privateClouds/{pcName}/virtualNetworks",
      apiVersion: "2019-04-01",
    }),
  ) as unknown as Schema.Codec<VirtualNetworksListInput>;

// Output Schema
export interface VirtualNetworksListOutput {
  nextLink?: string;
  value?: {
    assignable?: boolean;
    id: string;
    location?: string;
    name?: string;
    properties?: { privateCloudId?: string };
    type?: string;
  }[];
}
export const VirtualNetworksListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          assignable: Schema.optional(Schema.Boolean),
          id: Schema.String,
          location: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              privateCloudId: Schema.optional(Schema.String),
            }),
          ),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<VirtualNetworksListOutput>;

// The operation
/**
 * Implements list available virtual networks within a subscription method
 *
 * Return list of virtual networks in location for private cloud
 *
 * @param subscriptionId - The subscription ID.
 * @param regionId - The region Id (westus, eastus)
 * @param pcName - The private cloud name
 * @param api-version - Client API version.
 * @param resourcePoolName - Resource pool used to derive vSphere cluster which contains virtual networks
 */
export const VirtualNetworksList = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualNetworksListInput,
  outputSchema: VirtualNetworksListOutput,
}));
