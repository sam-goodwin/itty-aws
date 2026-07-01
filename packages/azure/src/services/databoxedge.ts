/**
 * Azure Databoxedge API
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
export interface AddonsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  roleName: string;
  addonName: string;
  kind: "IotEdge" | "ArcForKubernetes";
}
export const AddonsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    roleName: Schema.String.pipe(T.PathParam()),
    addonName: Schema.String.pipe(T.PathParam()),
    kind: Schema.Literals(["IotEdge", "ArcForKubernetes"]),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/roles/{roleName}/addons/{addonName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<AddonsCreateOrUpdateInput>;

// Output Schema
export interface AddonsCreateOrUpdateOutput {
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
export const AddonsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<AddonsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a addon.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The name of the device.
 * @param roleName - The name of the role.
 * @param addonName - The name of the addon.
 */
export const AddonsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AddonsCreateOrUpdateInput,
    outputSchema: AddonsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface AddonsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  roleName: string;
  addonName: string;
}
export const AddonsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  deviceName: Schema.String.pipe(T.PathParam()),
  roleName: Schema.String.pipe(T.PathParam()),
  addonName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/roles/{roleName}/addons/{addonName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<AddonsDeleteInput>;

// Output Schema
export type AddonsDeleteOutput = void;
export const AddonsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AddonsDeleteOutput>;

// The operation
/**
 * Deletes the addon on the device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The name of the device.
 * @param roleName - The name of the role.
 * @param addonName - The name of the addon.
 */
export const AddonsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AddonsDeleteInput,
  outputSchema: AddonsDeleteOutput,
}));
// Input Schema
export interface AddonsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  roleName: string;
  addonName: string;
}
export const AddonsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  deviceName: Schema.String.pipe(T.PathParam()),
  roleName: Schema.String.pipe(T.PathParam()),
  addonName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/roles/{roleName}/addons/{addonName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<AddonsGetInput>;

// Output Schema
export interface AddonsGetOutput {
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
export const AddonsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AddonsGetOutput>;

// The operation
/**
 * Gets a specific addon by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The name of the device.
 * @param roleName - The name of the role.
 * @param addonName - The name of the addon.
 */
export const AddonsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AddonsGetInput,
  outputSchema: AddonsGetOutput,
}));
// Input Schema
export interface AddonsListByRoleInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  roleName: string;
}
export const AddonsListByRoleInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  deviceName: Schema.String.pipe(T.PathParam()),
  roleName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/roles/{roleName}/addons",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<AddonsListByRoleInput>;

// Output Schema
export interface AddonsListByRoleOutput {
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
export const AddonsListByRoleOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
) as unknown as Schema.Codec<AddonsListByRoleOutput>;

// The operation
/**
 * Lists all the addons configured in the role.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The name of the device.
 * @param roleName - The name of the role.
 */
export const AddonsListByRole = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AddonsListByRoleInput,
  outputSchema: AddonsListByRoleOutput,
}));
// Input Schema
export interface AlertsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  name: string;
}
export const AlertsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  deviceName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/alerts/{name}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<AlertsGetInput>;

// Output Schema
export interface AlertsGetOutput {
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
export const AlertsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AlertsGetOutput>;

// The operation
/**
 * Gets an alert by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 * @param name - The alert name.
 */
export const AlertsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AlertsGetInput,
  outputSchema: AlertsGetOutput,
}));
// Input Schema
export interface AlertsListByDataBoxEdgeDeviceInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
}
export const AlertsListByDataBoxEdgeDeviceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/alerts",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<AlertsListByDataBoxEdgeDeviceInput>;

// Output Schema
export interface AlertsListByDataBoxEdgeDeviceOutput {
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
export const AlertsListByDataBoxEdgeDeviceOutput =
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
  }) as unknown as Schema.Codec<AlertsListByDataBoxEdgeDeviceOutput>;

// The operation
/**
 * Gets all the alerts for a Data Box Edge/Data Box Gateway device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 */
export const AlertsListByDataBoxEdgeDevice =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AlertsListByDataBoxEdgeDeviceInput,
    outputSchema: AlertsListByDataBoxEdgeDeviceOutput,
  }));
// Input Schema
export interface AvailableSkusListInput {
  subscriptionId: string;
}
export const AvailableSkusListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataBoxEdge/availableSkus",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<AvailableSkusListInput>;

// Output Schema
export interface AvailableSkusListOutput {
  value: {
    resourceType?: string;
    name?:
      | "Gateway"
      | "Edge"
      | "TEA_1Node"
      | "TEA_1Node_UPS"
      | "TEA_1Node_Heater"
      | "TEA_1Node_UPS_Heater"
      | "TEA_4Node_Heater"
      | "TEA_4Node_UPS_Heater"
      | "TMA"
      | "TDC"
      | "TCA_Small"
      | "GPU"
      | "TCA_Large"
      | "EdgeP_Base"
      | "EdgeP_High"
      | "EdgePR_Base"
      | "EdgePR_Base_UPS"
      | "EP2_64_1VPU_W"
      | "EP2_128_1T4_Mx1_W"
      | "EP2_256_2T4_W"
      | "EdgeMR_Mini"
      | "RCA_Small"
      | "RCA_Large"
      | "RDC"
      | "Management"
      | "EP2_64_Mx1_W"
      | "EP2_128_GPU1_Mx1_W"
      | "EP2_256_GPU2_Mx1"
      | "EdgeMR_TCP";
    kind?: string;
    tier?: "Standard";
    size?: string;
    family?: string;
    locations?: string[];
    apiVersions?: string[];
    locationInfo?: { location?: string; zones?: string[]; sites?: string[] }[];
    costs?: { meterId?: string; quantity?: number; extendedUnit?: string }[];
    signupOption?: "None" | "Available";
    version?: "Stable" | "Preview";
    availability?: "Available" | "Unavailable";
    shipmentTypes?: ("NotApplicable" | "ShippedToCustomer" | "SelfPickup")[];
    capabilities?: { name?: string; value?: string }[];
  }[];
  nextLink?: string;
}
export const AvailableSkusListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        resourceType: Schema.optional(Schema.String),
        name: Schema.optional(
          Schema.Literals([
            "Gateway",
            "Edge",
            "TEA_1Node",
            "TEA_1Node_UPS",
            "TEA_1Node_Heater",
            "TEA_1Node_UPS_Heater",
            "TEA_4Node_Heater",
            "TEA_4Node_UPS_Heater",
            "TMA",
            "TDC",
            "TCA_Small",
            "GPU",
            "TCA_Large",
            "EdgeP_Base",
            "EdgeP_High",
            "EdgePR_Base",
            "EdgePR_Base_UPS",
            "EP2_64_1VPU_W",
            "EP2_128_1T4_Mx1_W",
            "EP2_256_2T4_W",
            "EdgeMR_Mini",
            "RCA_Small",
            "RCA_Large",
            "RDC",
            "Management",
            "EP2_64_Mx1_W",
            "EP2_128_GPU1_Mx1_W",
            "EP2_256_GPU2_Mx1",
            "EdgeMR_TCP",
          ]),
        ),
        kind: Schema.optional(Schema.String),
        tier: Schema.optional(Schema.Literals(["Standard"])),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        locations: Schema.optional(Schema.Array(Schema.String)),
        apiVersions: Schema.optional(Schema.Array(Schema.String)),
        locationInfo: Schema.optional(
          Schema.Array(
            Schema.Struct({
              location: Schema.optional(Schema.String),
              zones: Schema.optional(Schema.Array(Schema.String)),
              sites: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
        costs: Schema.optional(
          Schema.Array(
            Schema.Struct({
              meterId: Schema.optional(Schema.String),
              quantity: Schema.optional(Schema.Number),
              extendedUnit: Schema.optional(Schema.String),
            }),
          ),
        ),
        signupOption: Schema.optional(Schema.Literals(["None", "Available"])),
        version: Schema.optional(Schema.Literals(["Stable", "Preview"])),
        availability: Schema.optional(
          Schema.Literals(["Available", "Unavailable"]),
        ),
        shipmentTypes: Schema.optional(
          Schema.Array(
            Schema.Literals([
              "NotApplicable",
              "ShippedToCustomer",
              "SelfPickup",
            ]),
          ),
        ),
        capabilities: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              value: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AvailableSkusListOutput>;

// The operation
/**
 * List all the available Skus and information related to them.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const AvailableSkusList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AvailableSkusListInput,
  outputSchema: AvailableSkusListOutput,
}));
// Input Schema
export interface BandwidthSchedulesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  name: string;
  properties: {
    start: string;
    stop: string;
    rateInMbps: number;
    days: (
      | "Sunday"
      | "Monday"
      | "Tuesday"
      | "Wednesday"
      | "Thursday"
      | "Friday"
      | "Saturday"
    )[];
  };
}
export const BandwidthSchedulesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      start: Schema.String,
      stop: Schema.String,
      rateInMbps: Schema.Number,
      days: Schema.Array(
        Schema.Literals([
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ]),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/bandwidthSchedules/{name}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<BandwidthSchedulesCreateOrUpdateInput>;

// Output Schema
export interface BandwidthSchedulesCreateOrUpdateOutput {
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
export const BandwidthSchedulesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<BandwidthSchedulesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a bandwidth schedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 * @param name - The bandwidth schedule name.
 */
export const BandwidthSchedulesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BandwidthSchedulesCreateOrUpdateInput,
    outputSchema: BandwidthSchedulesCreateOrUpdateOutput,
  }));
// Input Schema
export interface BandwidthSchedulesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  name: string;
}
export const BandwidthSchedulesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/bandwidthSchedules/{name}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<BandwidthSchedulesDeleteInput>;

// Output Schema
export type BandwidthSchedulesDeleteOutput = void;
export const BandwidthSchedulesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<BandwidthSchedulesDeleteOutput>;

// The operation
/**
 * Deletes the specified bandwidth schedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 * @param name - The bandwidth schedule name.
 */
export const BandwidthSchedulesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BandwidthSchedulesDeleteInput,
    outputSchema: BandwidthSchedulesDeleteOutput,
  }),
);
// Input Schema
export interface BandwidthSchedulesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  name: string;
}
export const BandwidthSchedulesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/bandwidthSchedules/{name}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<BandwidthSchedulesGetInput>;

// Output Schema
export interface BandwidthSchedulesGetOutput {
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
export const BandwidthSchedulesGetOutput =
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
  }) as unknown as Schema.Codec<BandwidthSchedulesGetOutput>;

// The operation
/**
 * Gets the properties of the specified bandwidth schedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 * @param name - The bandwidth schedule name.
 */
export const BandwidthSchedulesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BandwidthSchedulesGetInput,
    outputSchema: BandwidthSchedulesGetOutput,
  }),
);
// Input Schema
export interface BandwidthSchedulesListByDataBoxEdgeDeviceInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
}
export const BandwidthSchedulesListByDataBoxEdgeDeviceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/bandwidthSchedules",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<BandwidthSchedulesListByDataBoxEdgeDeviceInput>;

// Output Schema
export interface BandwidthSchedulesListByDataBoxEdgeDeviceOutput {
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
export const BandwidthSchedulesListByDataBoxEdgeDeviceOutput =
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
  }) as unknown as Schema.Codec<BandwidthSchedulesListByDataBoxEdgeDeviceOutput>;

// The operation
/**
 * Gets all the bandwidth schedules for a Data Box Edge/Data Box Gateway device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 */
export const BandwidthSchedulesListByDataBoxEdgeDevice =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BandwidthSchedulesListByDataBoxEdgeDeviceInput,
    outputSchema: BandwidthSchedulesListByDataBoxEdgeDeviceOutput,
  }));
// Input Schema
export interface ContainersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  storageAccountName: string;
  containerName: string;
  properties: {
    containerStatus?:
      | "OK"
      | "Offline"
      | "Unknown"
      | "Updating"
      | "NeedsAttention";
    dataFormat: "BlockBlob" | "PageBlob" | "AzureFile";
    refreshDetails?: {
      inProgressRefreshJobId?: string;
      lastCompletedRefreshJobTimeInUTC?: string;
      errorManifestFile?: string;
      lastJob?: string;
    };
    createdDateTime?: string;
  };
}
export const ContainersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    storageAccountName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      containerStatus: Schema.optional(
        Schema.Literals([
          "OK",
          "Offline",
          "Unknown",
          "Updating",
          "NeedsAttention",
        ]),
      ),
      dataFormat: Schema.Literals(["BlockBlob", "PageBlob", "AzureFile"]),
      refreshDetails: Schema.optional(
        Schema.Struct({
          inProgressRefreshJobId: Schema.optional(Schema.String),
          lastCompletedRefreshJobTimeInUTC: Schema.optional(Schema.String),
          errorManifestFile: Schema.optional(Schema.String),
          lastJob: Schema.optional(Schema.String),
        }),
      ),
      createdDateTime: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccounts/{storageAccountName}/containers/{containerName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ContainersCreateOrUpdateInput>;

// Output Schema
export interface ContainersCreateOrUpdateOutput {
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
export const ContainersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ContainersCreateOrUpdateOutput>;

// The operation
/**
 * Creates a new container or updates an existing container on the device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 * @param storageAccountName - The storage account name.
 * @param containerName - The container Name
 */
export const ContainersCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ContainersCreateOrUpdateInput,
    outputSchema: ContainersCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface ContainersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  storageAccountName: string;
  containerName: string;
}
export const ContainersDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  deviceName: Schema.String.pipe(T.PathParam()),
  storageAccountName: Schema.String.pipe(T.PathParam()),
  containerName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccounts/{storageAccountName}/containers/{containerName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<ContainersDeleteInput>;

// Output Schema
export type ContainersDeleteOutput = void;
export const ContainersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ContainersDeleteOutput>;

// The operation
/**
 * Deletes the container on the Data Box Edge/Data Box Gateway device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 * @param storageAccountName - The storage account name.
 * @param containerName - The container Name
 */
export const ContainersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ContainersDeleteInput,
  outputSchema: ContainersDeleteOutput,
}));
// Input Schema
export interface ContainersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  storageAccountName: string;
  containerName: string;
}
export const ContainersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  deviceName: Schema.String.pipe(T.PathParam()),
  storageAccountName: Schema.String.pipe(T.PathParam()),
  containerName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccounts/{storageAccountName}/containers/{containerName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<ContainersGetInput>;

// Output Schema
export interface ContainersGetOutput {
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
export const ContainersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ContainersGetOutput>;

// The operation
/**
 * Gets a container by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 * @param storageAccountName - The storage account name.
 * @param containerName - The container Name
 */
export const ContainersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ContainersGetInput,
  outputSchema: ContainersGetOutput,
}));
// Input Schema
export interface ContainersListByStorageAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  storageAccountName: string;
}
export const ContainersListByStorageAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    storageAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccounts/{storageAccountName}/containers",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ContainersListByStorageAccountInput>;

// Output Schema
export interface ContainersListByStorageAccountOutput {
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
export const ContainersListByStorageAccountOutput =
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
  }) as unknown as Schema.Codec<ContainersListByStorageAccountOutput>;

// The operation
/**
 * Lists all the containers of a storage Account in a Data Box Edge/Data Box Gateway device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 * @param storageAccountName - The storage account name.
 */
export const ContainersListByStorageAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ContainersListByStorageAccountInput,
    outputSchema: ContainersListByStorageAccountOutput,
  }));
// Input Schema
export interface ContainersRefreshInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  storageAccountName: string;
  containerName: string;
}
export const ContainersRefreshInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    storageAccountName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccounts/{storageAccountName}/containers/{containerName}/refresh",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<ContainersRefreshInput>;

// Output Schema
export type ContainersRefreshOutput = void;
export const ContainersRefreshOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ContainersRefreshOutput>;

// The operation
/**
 * Refreshes the container metadata with the data from the cloud.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 * @param storageAccountName - The storage account name.
 * @param containerName - The container Name
 */
export const ContainersRefresh = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ContainersRefreshInput,
  outputSchema: ContainersRefreshOutput,
}));
// Input Schema
export interface DeviceCapacityCheckCheckResourceCreationFeasibilityInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  capacityName?: string;
  properties: {
    vmPlacementQuery: string[][];
    vmPlacementResults?: {
      vmSize?: string[];
      isFeasible?: boolean;
      messageCode?: string;
      message?: string;
    }[];
  };
}
export const DeviceCapacityCheckCheckResourceCreationFeasibilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    capacityName: Schema.optional(Schema.String),
    properties: Schema.Struct({
      vmPlacementQuery: Schema.Array(Schema.Array(Schema.String)),
      vmPlacementResults: Schema.optional(
        Schema.Array(
          Schema.Struct({
            vmSize: Schema.optional(Schema.Array(Schema.String)),
            isFeasible: Schema.optional(Schema.Boolean),
            messageCode: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/deviceCapacityCheck",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<DeviceCapacityCheckCheckResourceCreationFeasibilityInput>;

// Output Schema
export type DeviceCapacityCheckCheckResourceCreationFeasibilityOutput = void;
export const DeviceCapacityCheckCheckResourceCreationFeasibilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DeviceCapacityCheckCheckResourceCreationFeasibilityOutput>;

// The operation
/**
 * Posts the device capacity request info to check feasibility.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 * @param capacityName - The capacity name.
 */
export const DeviceCapacityCheckCheckResourceCreationFeasibility =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeviceCapacityCheckCheckResourceCreationFeasibilityInput,
    outputSchema: DeviceCapacityCheckCheckResourceCreationFeasibilityOutput,
  }));
// Input Schema
export interface DeviceCapacityInfoGetDeviceCapacityInfoInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
}
export const DeviceCapacityInfoGetDeviceCapacityInfoInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/deviceCapacityInfo/default",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<DeviceCapacityInfoGetDeviceCapacityInfoInput>;

// Output Schema
export interface DeviceCapacityInfoGetDeviceCapacityInfoOutput {
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
export const DeviceCapacityInfoGetDeviceCapacityInfoOutput =
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
  }) as unknown as Schema.Codec<DeviceCapacityInfoGetDeviceCapacityInfoOutput>;

// The operation
/**
 * Gets the properties of the specified device capacity info.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 */
export const DeviceCapacityInfoGetDeviceCapacityInfo =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeviceCapacityInfoGetDeviceCapacityInfoInput,
    outputSchema: DeviceCapacityInfoGetDeviceCapacityInfoOutput,
  }));
// Input Schema
export interface DevicesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  properties?: {
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
    dataBoxEdgeDeviceStatus?:
      | "ReadyToSetup"
      | "Online"
      | "Offline"
      | "NeedsAttention"
      | "Disconnected"
      | "PartiallyDisconnected"
      | "Maintenance";
    serialNumber?: string;
    description?: string;
    modelDescription?: string;
    deviceType?: "DataBoxEdgeDevice";
    friendlyName?: string;
    culture?: string;
    deviceModel?: string;
    deviceSoftwareVersion?: string;
    deviceLocalCapacity?: number;
    timeZone?: string;
    deviceHcsVersion?: string;
    configuredRoleTypes?: (
      | "IOT"
      | "ASA"
      | "Functions"
      | "Cognitive"
      | "MEC"
      | "CloudEdgeManagement"
      | "Kubernetes"
    )[];
    nodeCount?: number;
    resourceMoveDetails?: {
      operationInProgress?:
        | "None"
        | "ResourceMoveInProgress"
        | "ResourceMoveFailed";
      operationInProgressLockTimeoutInUTC?: string;
    };
    edgeProfile?: {
      subscription?: {
        registrationId?: string;
        id?: string;
        state?:
          | "Registered"
          | "Warned"
          | "Suspended"
          | "Deleted"
          | "Unregistered";
        registrationDate?: string;
        subscriptionId?: string;
        properties?: {
          tenantId?: string;
          locationPlacementId?: string;
          quotaId?: string;
          serializedDetails?: string;
          registeredFeatures?: { name?: string; state?: string }[];
        };
      };
    };
    dataResidency?: { type?: "GeoZoneReplication" | "ZoneReplication" };
    kubernetesWorkloadProfile?: string;
  };
  sku?: {
    name?:
      | "Gateway"
      | "Edge"
      | "TEA_1Node"
      | "TEA_1Node_UPS"
      | "TEA_1Node_Heater"
      | "TEA_1Node_UPS_Heater"
      | "TEA_4Node_Heater"
      | "TEA_4Node_UPS_Heater"
      | "TMA"
      | "TDC"
      | "TCA_Small"
      | "GPU"
      | "TCA_Large"
      | "EdgeP_Base"
      | "EdgeP_High"
      | "EdgePR_Base"
      | "EdgePR_Base_UPS"
      | "EP2_64_1VPU_W"
      | "EP2_128_1T4_Mx1_W"
      | "EP2_256_2T4_W"
      | "EdgeMR_Mini"
      | "RCA_Small"
      | "RCA_Large"
      | "RDC"
      | "Management"
      | "EP2_64_Mx1_W"
      | "EP2_128_GPU1_Mx1_W"
      | "EP2_256_GPU2_Mx1"
      | "EdgeMR_TCP";
    tier?: "Standard";
  };
  etag?: string;
  identity?: {
    type?: "None" | "SystemAssigned" | "UserAssigned";
    principalId?: string;
    tenantId?: string;
  };
  kind?:
    | "AzureDataBoxGateway"
    | "AzureStackEdge"
    | "AzureStackHub"
    | "AzureModularDataCentre";
  tags?: Record<string, string>;
  location: string;
}
export const DevicesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
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
        dataBoxEdgeDeviceStatus: Schema.optional(
          Schema.Literals([
            "ReadyToSetup",
            "Online",
            "Offline",
            "NeedsAttention",
            "Disconnected",
            "PartiallyDisconnected",
            "Maintenance",
          ]),
        ),
        serialNumber: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        modelDescription: Schema.optional(Schema.String),
        deviceType: Schema.optional(Schema.Literals(["DataBoxEdgeDevice"])),
        friendlyName: Schema.optional(Schema.String),
        culture: Schema.optional(Schema.String),
        deviceModel: Schema.optional(Schema.String),
        deviceSoftwareVersion: Schema.optional(Schema.String),
        deviceLocalCapacity: Schema.optional(Schema.Number),
        timeZone: Schema.optional(Schema.String),
        deviceHcsVersion: Schema.optional(Schema.String),
        configuredRoleTypes: Schema.optional(
          Schema.Array(
            Schema.Literals([
              "IOT",
              "ASA",
              "Functions",
              "Cognitive",
              "MEC",
              "CloudEdgeManagement",
              "Kubernetes",
            ]),
          ),
        ),
        nodeCount: Schema.optional(Schema.Number),
        resourceMoveDetails: Schema.optional(
          Schema.Struct({
            operationInProgress: Schema.optional(
              Schema.Literals([
                "None",
                "ResourceMoveInProgress",
                "ResourceMoveFailed",
              ]),
            ),
            operationInProgressLockTimeoutInUTC: Schema.optional(Schema.String),
          }),
        ),
        edgeProfile: Schema.optional(
          Schema.Struct({
            subscription: Schema.optional(
              Schema.Struct({
                registrationId: Schema.optional(Schema.String),
                id: Schema.optional(Schema.String),
                state: Schema.optional(
                  Schema.Literals([
                    "Registered",
                    "Warned",
                    "Suspended",
                    "Deleted",
                    "Unregistered",
                  ]),
                ),
                registrationDate: Schema.optional(Schema.String),
                subscriptionId: Schema.optional(Schema.String),
                properties: Schema.optional(
                  Schema.Struct({
                    tenantId: Schema.optional(Schema.String),
                    locationPlacementId: Schema.optional(Schema.String),
                    quotaId: Schema.optional(Schema.String),
                    serializedDetails: Schema.optional(Schema.String),
                    registeredFeatures: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          name: Schema.optional(Schema.String),
                          state: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                  }),
                ),
              }),
            ),
          }),
        ),
        dataResidency: Schema.optional(
          Schema.Struct({
            type: Schema.optional(
              Schema.Literals(["GeoZoneReplication", "ZoneReplication"]),
            ),
          }),
        ),
        kubernetesWorkloadProfile: Schema.optional(Schema.String),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(
          Schema.Literals([
            "Gateway",
            "Edge",
            "TEA_1Node",
            "TEA_1Node_UPS",
            "TEA_1Node_Heater",
            "TEA_1Node_UPS_Heater",
            "TEA_4Node_Heater",
            "TEA_4Node_UPS_Heater",
            "TMA",
            "TDC",
            "TCA_Small",
            "GPU",
            "TCA_Large",
            "EdgeP_Base",
            "EdgeP_High",
            "EdgePR_Base",
            "EdgePR_Base_UPS",
            "EP2_64_1VPU_W",
            "EP2_128_1T4_Mx1_W",
            "EP2_256_2T4_W",
            "EdgeMR_Mini",
            "RCA_Small",
            "RCA_Large",
            "RDC",
            "Management",
            "EP2_64_Mx1_W",
            "EP2_128_GPU1_Mx1_W",
            "EP2_256_GPU2_Mx1",
            "EdgeMR_TCP",
          ]),
        ),
        tier: Schema.optional(Schema.Literals(["Standard"])),
      }),
    ),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.optional(
          Schema.Literals(["None", "SystemAssigned", "UserAssigned"]),
        ),
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
      }),
    ),
    kind: Schema.optional(
      Schema.Literals([
        "AzureDataBoxGateway",
        "AzureStackEdge",
        "AzureStackHub",
        "AzureModularDataCentre",
      ]),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<DevicesCreateOrUpdateInput>;

// Output Schema
export interface DevicesCreateOrUpdateOutput {
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
export const DevicesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DevicesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a Data Box Edge/Data Box Gateway resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 */
export const DevicesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DevicesCreateOrUpdateInput,
    outputSchema: DevicesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface DevicesCreateOrUpdateSecuritySettingsInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  properties: {
    deviceAdminPassword: {
      value: string;
      encryptionCertThumbprint?: string;
      encryptionAlgorithm: "None" | "AES256" | "RSAES_PKCS1_v_1_5";
    };
  };
  id?: string;
  name?: string;
  type?: string;
}
export const DevicesCreateOrUpdateSecuritySettingsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      deviceAdminPassword: Schema.Struct({
        value: Schema.String,
        encryptionCertThumbprint: Schema.optional(Schema.String),
        encryptionAlgorithm: Schema.Literals([
          "None",
          "AES256",
          "RSAES_PKCS1_v_1_5",
        ]),
      }),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/securitySettings/default/update",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<DevicesCreateOrUpdateSecuritySettingsInput>;

// Output Schema
export type DevicesCreateOrUpdateSecuritySettingsOutput = void;
export const DevicesCreateOrUpdateSecuritySettingsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DevicesCreateOrUpdateSecuritySettingsOutput>;

// The operation
/**
 * Updates the security settings on a Data Box Edge/Data Box Gateway device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 */
export const DevicesCreateOrUpdateSecuritySettings =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DevicesCreateOrUpdateSecuritySettingsInput,
    outputSchema: DevicesCreateOrUpdateSecuritySettingsOutput,
  }));
// Input Schema
export interface DevicesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
}
export const DevicesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  deviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<DevicesDeleteInput>;

// Output Schema
export type DevicesDeleteOutput = void;
export const DevicesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DevicesDeleteOutput>;

// The operation
/**
 * Deletes the Data Box Edge/Data Box Gateway device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 */
export const DevicesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DevicesDeleteInput,
  outputSchema: DevicesDeleteOutput,
}));
// Input Schema
export interface DevicesDownloadUpdatesInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
}
export const DevicesDownloadUpdatesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/downloadUpdates",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<DevicesDownloadUpdatesInput>;

// Output Schema
export type DevicesDownloadUpdatesOutput = void;
export const DevicesDownloadUpdatesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DevicesDownloadUpdatesOutput>;

// The operation
/**
 * Downloads the updates on a Data Box Edge/Data Box Gateway device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 */
export const DevicesDownloadUpdates = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DevicesDownloadUpdatesInput,
    outputSchema: DevicesDownloadUpdatesOutput,
  }),
);
// Input Schema
export interface DevicesGenerateCertificateInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
}
export const DevicesGenerateCertificateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/generateCertificate",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<DevicesGenerateCertificateInput>;

// Output Schema
export interface DevicesGenerateCertificateOutput {
  publicKey?: string;
  privateKey?: Redacted.Redacted<string>;
  expiryTimeInUTC?: string;
}
export const DevicesGenerateCertificateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    publicKey: Schema.optional(Schema.String),
    privateKey: Schema.optional(SensitiveOutputString),
    expiryTimeInUTC: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DevicesGenerateCertificateOutput>;

// The operation
/**
 * Generates certificate for activation key.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 */
export const DevicesGenerateCertificate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DevicesGenerateCertificateInput,
    outputSchema: DevicesGenerateCertificateOutput,
  }),
);
// Input Schema
export interface DevicesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
}
export const DevicesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  deviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<DevicesGetInput>;

// Output Schema
export interface DevicesGetOutput {
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
export const DevicesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DevicesGetOutput>;

// The operation
/**
 * Gets the properties of the Data Box Edge/Data Box Gateway device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 */
export const DevicesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DevicesGetInput,
  outputSchema: DevicesGetOutput,
}));
// Input Schema
export interface DevicesGetExtendedInformationInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
}
export const DevicesGetExtendedInformationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/getExtendedInformation",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<DevicesGetExtendedInformationInput>;

// Output Schema
export interface DevicesGetExtendedInformationOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const DevicesGetExtendedInformationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DevicesGetExtendedInformationOutput>;

// The operation
/**
 * Gets additional information for the specified Azure Stack Edge/Data Box Gateway device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 */
export const DevicesGetExtendedInformation =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DevicesGetExtendedInformationInput,
    outputSchema: DevicesGetExtendedInformationOutput,
  }));
// Input Schema
export interface DevicesGetNetworkSettingsInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
}
export const DevicesGetNetworkSettingsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/networkSettings/default",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<DevicesGetNetworkSettingsInput>;

// Output Schema
export interface DevicesGetNetworkSettingsOutput {
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
export const DevicesGetNetworkSettingsOutput =
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
  }) as unknown as Schema.Codec<DevicesGetNetworkSettingsOutput>;

// The operation
/**
 * Gets the network settings of the specified Data Box Edge/Data Box Gateway device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 */
export const DevicesGetNetworkSettings = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DevicesGetNetworkSettingsInput,
    outputSchema: DevicesGetNetworkSettingsOutput,
  }),
);
// Input Schema
export interface DevicesGetUpdateSummaryInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
}
export const DevicesGetUpdateSummaryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/updateSummary/default",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<DevicesGetUpdateSummaryInput>;

// Output Schema
export interface DevicesGetUpdateSummaryOutput {
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
export const DevicesGetUpdateSummaryOutput =
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
  }) as unknown as Schema.Codec<DevicesGetUpdateSummaryOutput>;

// The operation
/**
 * Gets information about the availability of updates based on the last scan of the device. It also gets information about any ongoing download or install jobs on the device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 */
export const DevicesGetUpdateSummary = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DevicesGetUpdateSummaryInput,
    outputSchema: DevicesGetUpdateSummaryOutput,
  }),
);
// Input Schema
export interface DevicesInstallUpdatesInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
}
export const DevicesInstallUpdatesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/installUpdates",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<DevicesInstallUpdatesInput>;

// Output Schema
export type DevicesInstallUpdatesOutput = void;
export const DevicesInstallUpdatesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DevicesInstallUpdatesOutput>;

// The operation
/**
 * Installs the updates on the Data Box Edge/Data Box Gateway device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 */
export const DevicesInstallUpdates = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DevicesInstallUpdatesInput,
    outputSchema: DevicesInstallUpdatesOutput,
  }),
);
// Input Schema
export interface DevicesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $expand?: string;
}
export const DevicesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<DevicesListByResourceGroupInput>;

// Output Schema
export interface DevicesListByResourceGroupOutput {
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
export const DevicesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<DevicesListByResourceGroupOutput>;

// The operation
/**
 * Gets all the Data Box Edge/Data Box Gateway devices in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $expand - Specify $expand=details to populate additional fields related to the resource or Specify $skipToken=<token> to populate the next page in the list.
 */
export const DevicesListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DevicesListByResourceGroupInput,
    outputSchema: DevicesListByResourceGroupOutput,
  }),
);
// Input Schema
export interface DevicesListBySubscriptionInput {
  subscriptionId: string;
  $expand?: string;
}
export const DevicesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<DevicesListBySubscriptionInput>;

// Output Schema
export interface DevicesListBySubscriptionOutput {
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
export const DevicesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<DevicesListBySubscriptionOutput>;

// The operation
/**
 * Gets all the Data Box Edge/Data Box Gateway devices in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param $expand - Specify $expand=details to populate additional fields related to the resource or Specify $skipToken=<token> to populate the next page in the list.
 */
export const DevicesListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DevicesListBySubscriptionInput,
    outputSchema: DevicesListBySubscriptionOutput,
  }),
);
// Input Schema
export interface DevicesScanForUpdatesInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
}
export const DevicesScanForUpdatesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/scanForUpdates",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<DevicesScanForUpdatesInput>;

// Output Schema
export type DevicesScanForUpdatesOutput = void;
export const DevicesScanForUpdatesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DevicesScanForUpdatesOutput>;

// The operation
/**
 * Scans for updates on a Data Box Edge/Data Box Gateway device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 */
export const DevicesScanForUpdates = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DevicesScanForUpdatesInput,
    outputSchema: DevicesScanForUpdatesOutput,
  }),
);
// Input Schema
export interface DevicesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  tags?: Record<string, string>;
  identity?: {
    type?: "None" | "SystemAssigned" | "UserAssigned";
    principalId?: string;
    tenantId?: string;
  };
  properties?: { edgeProfile?: { subscription?: { id?: string } } };
}
export const DevicesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  deviceName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  identity: Schema.optional(
    Schema.Struct({
      type: Schema.optional(
        Schema.Literals(["None", "SystemAssigned", "UserAssigned"]),
      ),
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
    }),
  ),
  properties: Schema.optional(
    Schema.Struct({
      edgeProfile: Schema.optional(
        Schema.Struct({
          subscription: Schema.optional(
            Schema.Struct({
              id: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<DevicesUpdateInput>;

// Output Schema
export interface DevicesUpdateOutput {
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
export const DevicesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DevicesUpdateOutput>;

// The operation
/**
 * Modifies a Data Box Edge/Data Box Gateway resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 */
export const DevicesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DevicesUpdateInput,
  outputSchema: DevicesUpdateOutput,
}));
// Input Schema
export interface DevicesUpdateExtendedInformationInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  clientSecretStoreId?: string;
  clientSecretStoreUrl?: string;
  channelIntegrityKeyName?: string;
  channelIntegrityKeyVersion?: string;
  syncStatus?:
    | "KeyVaultSynced"
    | "KeyVaultSyncFailed"
    | "KeyVaultNotConfigured"
    | "KeyVaultSyncPending"
    | "KeyVaultSyncing"
    | "KeyVaultNotSynced";
}
export const DevicesUpdateExtendedInformationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    clientSecretStoreId: Schema.optional(Schema.String),
    clientSecretStoreUrl: Schema.optional(Schema.String),
    channelIntegrityKeyName: Schema.optional(Schema.String),
    channelIntegrityKeyVersion: Schema.optional(Schema.String),
    syncStatus: Schema.optional(
      Schema.Literals([
        "KeyVaultSynced",
        "KeyVaultSyncFailed",
        "KeyVaultNotConfigured",
        "KeyVaultSyncPending",
        "KeyVaultSyncing",
        "KeyVaultNotSynced",
      ]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/updateExtendedInformation",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<DevicesUpdateExtendedInformationInput>;

// Output Schema
export interface DevicesUpdateExtendedInformationOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const DevicesUpdateExtendedInformationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DevicesUpdateExtendedInformationOutput>;

// The operation
/**
 * Gets additional information for the specified Data Box Edge/Data Box Gateway device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 */
export const DevicesUpdateExtendedInformation =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DevicesUpdateExtendedInformationInput,
    outputSchema: DevicesUpdateExtendedInformationOutput,
  }));
// Input Schema
export interface DevicesUploadCertificateInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  properties: {
    authenticationType?: "Invalid" | "AzureActiveDirectory";
    certificate: string;
  };
}
export const DevicesUploadCertificateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      authenticationType: Schema.optional(
        Schema.Literals(["Invalid", "AzureActiveDirectory"]),
      ),
      certificate: Schema.String,
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/uploadCertificate",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<DevicesUploadCertificateInput>;

// Output Schema
export interface DevicesUploadCertificateOutput {
  authType?: "Invalid" | "AzureActiveDirectory";
  resourceId?: string;
  aadAuthority?: string;
  aadTenantId?: string;
  servicePrincipalClientId?: string;
  servicePrincipalObjectId?: string;
  azureManagementEndpointAudience?: string;
  aadAudience?: string;
}
export const DevicesUploadCertificateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authType: Schema.optional(
      Schema.Literals(["Invalid", "AzureActiveDirectory"]),
    ),
    resourceId: Schema.optional(Schema.String),
    aadAuthority: Schema.optional(Schema.String),
    aadTenantId: Schema.optional(Schema.String),
    servicePrincipalClientId: Schema.optional(Schema.String),
    servicePrincipalObjectId: Schema.optional(Schema.String),
    azureManagementEndpointAudience: Schema.optional(Schema.String),
    aadAudience: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DevicesUploadCertificateOutput>;

// The operation
/**
 * Uploads registration certificate for the device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 */
export const DevicesUploadCertificate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DevicesUploadCertificateInput,
    outputSchema: DevicesUploadCertificateOutput,
  }),
);
// Input Schema
export interface DiagnosticSettingsGetDiagnosticProactiveLogCollectionSettingsInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
}
export const DiagnosticSettingsGetDiagnosticProactiveLogCollectionSettingsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/diagnosticProactiveLogCollectionSettings/default",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<DiagnosticSettingsGetDiagnosticProactiveLogCollectionSettingsInput>;

// Output Schema
export interface DiagnosticSettingsGetDiagnosticProactiveLogCollectionSettingsOutput {
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
export const DiagnosticSettingsGetDiagnosticProactiveLogCollectionSettingsOutput =
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
  }) as unknown as Schema.Codec<DiagnosticSettingsGetDiagnosticProactiveLogCollectionSettingsOutput>;

// The operation
/**
 * Gets the proactive log collection settings of the specified Data Box Edge/Data Box Gateway device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 */
export const DiagnosticSettingsGetDiagnosticProactiveLogCollectionSettings =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      DiagnosticSettingsGetDiagnosticProactiveLogCollectionSettingsInput,
    outputSchema:
      DiagnosticSettingsGetDiagnosticProactiveLogCollectionSettingsOutput,
  }));
// Input Schema
export interface DiagnosticSettingsGetDiagnosticRemoteSupportSettingsInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
}
export const DiagnosticSettingsGetDiagnosticRemoteSupportSettingsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/diagnosticRemoteSupportSettings/default",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<DiagnosticSettingsGetDiagnosticRemoteSupportSettingsInput>;

// Output Schema
export interface DiagnosticSettingsGetDiagnosticRemoteSupportSettingsOutput {
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
export const DiagnosticSettingsGetDiagnosticRemoteSupportSettingsOutput =
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
  }) as unknown as Schema.Codec<DiagnosticSettingsGetDiagnosticRemoteSupportSettingsOutput>;

// The operation
/**
 * Gets the diagnostic remote support settings of the specified Data Box Edge/Data Box Gateway device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 */
export const DiagnosticSettingsGetDiagnosticRemoteSupportSettings =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DiagnosticSettingsGetDiagnosticRemoteSupportSettingsInput,
    outputSchema: DiagnosticSettingsGetDiagnosticRemoteSupportSettingsOutput,
  }));
// Input Schema
export interface DiagnosticSettingsUpdateDiagnosticProactiveLogCollectionSettingsInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  properties: { userConsent: "Enabled" | "Disabled" };
}
export const DiagnosticSettingsUpdateDiagnosticProactiveLogCollectionSettingsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      userConsent: Schema.Literals(["Enabled", "Disabled"]),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/diagnosticProactiveLogCollectionSettings/default",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<DiagnosticSettingsUpdateDiagnosticProactiveLogCollectionSettingsInput>;

// Output Schema
export interface DiagnosticSettingsUpdateDiagnosticProactiveLogCollectionSettingsOutput {
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
export const DiagnosticSettingsUpdateDiagnosticProactiveLogCollectionSettingsOutput =
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
  }) as unknown as Schema.Codec<DiagnosticSettingsUpdateDiagnosticProactiveLogCollectionSettingsOutput>;

// The operation
/**
 * Updates the proactive log collection settings on a Data Box Edge/Data Box Gateway device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 */
export const DiagnosticSettingsUpdateDiagnosticProactiveLogCollectionSettings =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      DiagnosticSettingsUpdateDiagnosticProactiveLogCollectionSettingsInput,
    outputSchema:
      DiagnosticSettingsUpdateDiagnosticProactiveLogCollectionSettingsOutput,
  }));
// Input Schema
export interface DiagnosticSettingsUpdateDiagnosticRemoteSupportSettingsInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  properties: {
    remoteSupportSettingsList?: {
      remoteApplicationType?:
        | "Powershell"
        | "WAC"
        | "LocalUI"
        | "AllApplications";
      accessLevel?: "None" | "ReadOnly" | "ReadWrite" | "FullAccess";
      expirationTimeStampInUTC?: string;
    }[];
  };
}
export const DiagnosticSettingsUpdateDiagnosticRemoteSupportSettingsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      remoteSupportSettingsList: Schema.optional(
        Schema.Array(
          Schema.Struct({
            remoteApplicationType: Schema.optional(
              Schema.Literals([
                "Powershell",
                "WAC",
                "LocalUI",
                "AllApplications",
              ]),
            ),
            accessLevel: Schema.optional(
              Schema.Literals(["None", "ReadOnly", "ReadWrite", "FullAccess"]),
            ),
            expirationTimeStampInUTC: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/diagnosticRemoteSupportSettings/default",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<DiagnosticSettingsUpdateDiagnosticRemoteSupportSettingsInput>;

// Output Schema
export interface DiagnosticSettingsUpdateDiagnosticRemoteSupportSettingsOutput {
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
export const DiagnosticSettingsUpdateDiagnosticRemoteSupportSettingsOutput =
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
  }) as unknown as Schema.Codec<DiagnosticSettingsUpdateDiagnosticRemoteSupportSettingsOutput>;

// The operation
/**
 * Updates the diagnostic remote support settings on a Data Box Edge/Data Box Gateway device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 */
export const DiagnosticSettingsUpdateDiagnosticRemoteSupportSettings =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DiagnosticSettingsUpdateDiagnosticRemoteSupportSettingsInput,
    outputSchema: DiagnosticSettingsUpdateDiagnosticRemoteSupportSettingsOutput,
  }));
// Input Schema
export interface JobsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  name: string;
}
export const JobsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  deviceName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/jobs/{name}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<JobsGetInput>;

// Output Schema
export interface JobsGetOutput {
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
export const JobsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<JobsGetOutput>;

// The operation
/**
 * Gets the details of a specified job on a Data Box Edge/Data Box Gateway device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 * @param name - The job name.
 */
export const JobsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JobsGetInput,
  outputSchema: JobsGetOutput,
}));
// Input Schema
export interface MonitoringConfigCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  roleName: string;
  properties: {
    metricConfigurations: {
      resourceId: string;
      mdmAccount?: string;
      metricNameSpace?: string;
      counterSets: {
        counters: {
          name: string;
          instance?: string;
          dimensionFilter?: { sourceType: string; sourceName: string }[];
          additionalDimensions?: { sourceType: string; sourceName: string }[];
        }[];
      }[];
    }[];
  };
}
export const MonitoringConfigCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    roleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      metricConfigurations: Schema.Array(
        Schema.Struct({
          resourceId: Schema.String,
          mdmAccount: Schema.optional(Schema.String),
          metricNameSpace: Schema.optional(Schema.String),
          counterSets: Schema.Array(
            Schema.Struct({
              counters: Schema.Array(
                Schema.Struct({
                  name: Schema.String,
                  instance: Schema.optional(Schema.String),
                  dimensionFilter: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        sourceType: Schema.String,
                        sourceName: Schema.String,
                      }),
                    ),
                  ),
                  additionalDimensions: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        sourceType: Schema.String,
                        sourceName: Schema.String,
                      }),
                    ),
                  ),
                }),
              ),
            }),
          ),
        }),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/roles/{roleName}/monitoringConfig/default",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<MonitoringConfigCreateOrUpdateInput>;

// Output Schema
export interface MonitoringConfigCreateOrUpdateOutput {
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
export const MonitoringConfigCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<MonitoringConfigCreateOrUpdateOutput>;

// The operation
/**
 * Creates a new metric configuration or updates an existing one for a role.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The name of the device.
 * @param roleName - The name of the role.
 */
export const MonitoringConfigCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MonitoringConfigCreateOrUpdateInput,
    outputSchema: MonitoringConfigCreateOrUpdateOutput,
  }));
// Input Schema
export interface MonitoringConfigDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  roleName: string;
}
export const MonitoringConfigDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    roleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/roles/{roleName}/monitoringConfig/default",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<MonitoringConfigDeleteInput>;

// Output Schema
export type MonitoringConfigDeleteOutput = void;
export const MonitoringConfigDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<MonitoringConfigDeleteOutput>;

// The operation
/**
 * deletes a new metric configuration for a role.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The name of the device.
 * @param roleName - The name of the role.
 */
export const MonitoringConfigDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MonitoringConfigDeleteInput,
    outputSchema: MonitoringConfigDeleteOutput,
  }),
);
// Input Schema
export interface MonitoringConfigGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  roleName: string;
}
export const MonitoringConfigGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    roleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/roles/{roleName}/monitoringConfig/default",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<MonitoringConfigGetInput>;

// Output Schema
export interface MonitoringConfigGetOutput {
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
export const MonitoringConfigGetOutput =
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
  }) as unknown as Schema.Codec<MonitoringConfigGetOutput>;

// The operation
/**
 * Gets a  metric configuration of a role.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The name of the device.
 * @param roleName - The name of the role.
 */
export const MonitoringConfigGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MonitoringConfigGetInput,
  outputSchema: MonitoringConfigGetOutput,
}));
// Input Schema
export interface MonitoringConfigListInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  roleName: string;
}
export const MonitoringConfigListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    roleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/roles/{roleName}/monitoringConfig",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<MonitoringConfigListInput>;

// Output Schema
export interface MonitoringConfigListOutput {
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
export const MonitoringConfigListOutput =
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
  }) as unknown as Schema.Codec<MonitoringConfigListOutput>;

// The operation
/**
 * Lists metric configurations in a role.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The name of the device.
 * @param roleName - The name of the role.
 */
export const MonitoringConfigList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MonitoringConfigListInput,
    outputSchema: MonitoringConfigListOutput,
  }),
);
// Input Schema
export interface NodesListByDataBoxEdgeDeviceInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
}
export const NodesListByDataBoxEdgeDeviceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/nodes",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<NodesListByDataBoxEdgeDeviceInput>;

// Output Schema
export interface NodesListByDataBoxEdgeDeviceOutput {
  value: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const NodesListByDataBoxEdgeDeviceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NodesListByDataBoxEdgeDeviceOutput>;

// The operation
/**
 * Gets all the nodes currently configured under this Data Box Edge device
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 */
export const NodesListByDataBoxEdgeDevice =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NodesListByDataBoxEdgeDeviceInput,
    outputSchema: NodesListByDataBoxEdgeDeviceOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.DataBoxEdge/operations",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value: {
    name?: string;
    isDataAction?: boolean;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
    origin?: string;
    properties?: {
      serviceSpecification?: {
        metricSpecifications?: {
          name?: string;
          displayName?: string;
          displayDescription?: string;
          unit?:
            | "NotSpecified"
            | "Percent"
            | "Count"
            | "Seconds"
            | "Milliseconds"
            | "Bytes"
            | "BytesPerSecond"
            | "CountPerSecond";
          aggregationType?:
            | "NotSpecified"
            | "None"
            | "Average"
            | "Minimum"
            | "Maximum"
            | "Total"
            | "Count";
          dimensions?: {
            name?: string;
            displayName?: string;
            toBeExportedForShoebox?: boolean;
          }[];
          fillGapWithZero?: boolean;
          category?: "Capacity" | "Transaction";
          resourceIdDimensionNameOverride?: string;
          supportedTimeGrainTypes?: (
            | "PT1M"
            | "PT5M"
            | "PT15M"
            | "PT30M"
            | "PT1H"
            | "PT6H"
            | "PT12H"
            | "PT1D"
          )[];
          supportedAggregationTypes?: (
            | "NotSpecified"
            | "None"
            | "Average"
            | "Minimum"
            | "Maximum"
            | "Total"
            | "Count"
          )[];
        }[];
      };
    };
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(
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
      origin: Schema.optional(Schema.String),
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
                    unit: Schema.optional(
                      Schema.Literals([
                        "NotSpecified",
                        "Percent",
                        "Count",
                        "Seconds",
                        "Milliseconds",
                        "Bytes",
                        "BytesPerSecond",
                        "CountPerSecond",
                      ]),
                    ),
                    aggregationType: Schema.optional(
                      Schema.Literals([
                        "NotSpecified",
                        "None",
                        "Average",
                        "Minimum",
                        "Maximum",
                        "Total",
                        "Count",
                      ]),
                    ),
                    dimensions: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          name: Schema.optional(Schema.String),
                          displayName: Schema.optional(Schema.String),
                          toBeExportedForShoebox: Schema.optional(
                            Schema.Boolean,
                          ),
                        }),
                      ),
                    ),
                    fillGapWithZero: Schema.optional(Schema.Boolean),
                    category: Schema.optional(
                      Schema.Literals(["Capacity", "Transaction"]),
                    ),
                    resourceIdDimensionNameOverride: Schema.optional(
                      Schema.String,
                    ),
                    supportedTimeGrainTypes: Schema.optional(
                      Schema.Array(
                        Schema.Literals([
                          "PT1M",
                          "PT5M",
                          "PT15M",
                          "PT30M",
                          "PT1H",
                          "PT6H",
                          "PT12H",
                          "PT1D",
                        ]),
                      ),
                    ),
                    supportedAggregationTypes: Schema.optional(
                      Schema.Array(
                        Schema.Literals([
                          "NotSpecified",
                          "None",
                          "Average",
                          "Minimum",
                          "Maximum",
                          "Total",
                          "Count",
                        ]),
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
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * List all the supported operations.
 *
 * List the operations for the provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface OperationsStatusGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  name: string;
}
export const OperationsStatusGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/operationsStatus/{name}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<OperationsStatusGetInput>;

// Output Schema
export interface OperationsStatusGetOutput {
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
export const OperationsStatusGetOutput =
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
  }) as unknown as Schema.Codec<OperationsStatusGetOutput>;

// The operation
/**
 * Gets the details of a specified job on a Data Box Edge/Data Box Gateway device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 * @param name - The job name.
 */
export const OperationsStatusGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsStatusGetInput,
  outputSchema: OperationsStatusGetOutput,
}));
// Input Schema
export interface OrdersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  properties?: {
    orderId?: string;
    contactInformation: {
      contactPerson: string;
      companyName: string;
      phone: string;
      emailList: string[];
    };
    shippingAddress?: {
      addressLine1?: string;
      addressLine2?: string;
      addressLine3?: string;
      postalCode?: string;
      city?: string;
      state?: string;
      country: string;
    };
    currentStatus?: {
      status:
        | "Untracked"
        | "AwaitingFulfillment"
        | "AwaitingPreparation"
        | "AwaitingShipment"
        | "Shipped"
        | "Arriving"
        | "Delivered"
        | "ReplacementRequested"
        | "LostDevice"
        | "Declined"
        | "ReturnInitiated"
        | "AwaitingReturnShipment"
        | "ShippedBack"
        | "CollectedAtMicrosoft"
        | "AwaitingPickup"
        | "PickupCompleted"
        | "AwaitingDrop";
      updateDateTime?: string;
      comments?: string;
      trackingInformation?: {
        serialNumber?: string;
        carrierName?: string;
        trackingId?: string;
        trackingUrl?: string;
      };
      additionalOrderDetails?: Record<string, string>;
    };
    orderHistory?: {
      status:
        | "Untracked"
        | "AwaitingFulfillment"
        | "AwaitingPreparation"
        | "AwaitingShipment"
        | "Shipped"
        | "Arriving"
        | "Delivered"
        | "ReplacementRequested"
        | "LostDevice"
        | "Declined"
        | "ReturnInitiated"
        | "AwaitingReturnShipment"
        | "ShippedBack"
        | "CollectedAtMicrosoft"
        | "AwaitingPickup"
        | "PickupCompleted"
        | "AwaitingDrop";
      updateDateTime?: string;
      comments?: string;
      trackingInformation?: {
        serialNumber?: string;
        carrierName?: string;
        trackingId?: string;
        trackingUrl?: string;
      };
      additionalOrderDetails?: Record<string, string>;
    }[];
    serialNumber?: string;
    deliveryTrackingInfo?: {
      serialNumber?: string;
      carrierName?: string;
      trackingId?: string;
      trackingUrl?: string;
    }[];
    returnTrackingInfo?: {
      serialNumber?: string;
      carrierName?: string;
      trackingId?: string;
      trackingUrl?: string;
    }[];
    shipmentType?: "NotApplicable" | "ShippedToCustomer" | "SelfPickup";
  };
  kind?: string;
}
export const OrdersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        orderId: Schema.optional(Schema.String),
        contactInformation: Schema.Struct({
          contactPerson: Schema.String,
          companyName: Schema.String,
          phone: Schema.String,
          emailList: Schema.Array(Schema.String),
        }),
        shippingAddress: Schema.optional(
          Schema.Struct({
            addressLine1: Schema.optional(Schema.String),
            addressLine2: Schema.optional(Schema.String),
            addressLine3: Schema.optional(Schema.String),
            postalCode: Schema.optional(Schema.String),
            city: Schema.optional(Schema.String),
            state: Schema.optional(Schema.String),
            country: Schema.String,
          }),
        ),
        currentStatus: Schema.optional(
          Schema.Struct({
            status: Schema.Literals([
              "Untracked",
              "AwaitingFulfillment",
              "AwaitingPreparation",
              "AwaitingShipment",
              "Shipped",
              "Arriving",
              "Delivered",
              "ReplacementRequested",
              "LostDevice",
              "Declined",
              "ReturnInitiated",
              "AwaitingReturnShipment",
              "ShippedBack",
              "CollectedAtMicrosoft",
              "AwaitingPickup",
              "PickupCompleted",
              "AwaitingDrop",
            ]),
            updateDateTime: Schema.optional(Schema.String),
            comments: Schema.optional(Schema.String),
            trackingInformation: Schema.optional(
              Schema.Struct({
                serialNumber: Schema.optional(Schema.String),
                carrierName: Schema.optional(Schema.String),
                trackingId: Schema.optional(Schema.String),
                trackingUrl: Schema.optional(Schema.String),
              }),
            ),
            additionalOrderDetails: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
          }),
        ),
        orderHistory: Schema.optional(
          Schema.Array(
            Schema.Struct({
              status: Schema.Literals([
                "Untracked",
                "AwaitingFulfillment",
                "AwaitingPreparation",
                "AwaitingShipment",
                "Shipped",
                "Arriving",
                "Delivered",
                "ReplacementRequested",
                "LostDevice",
                "Declined",
                "ReturnInitiated",
                "AwaitingReturnShipment",
                "ShippedBack",
                "CollectedAtMicrosoft",
                "AwaitingPickup",
                "PickupCompleted",
                "AwaitingDrop",
              ]),
              updateDateTime: Schema.optional(Schema.String),
              comments: Schema.optional(Schema.String),
              trackingInformation: Schema.optional(
                Schema.Struct({
                  serialNumber: Schema.optional(Schema.String),
                  carrierName: Schema.optional(Schema.String),
                  trackingId: Schema.optional(Schema.String),
                  trackingUrl: Schema.optional(Schema.String),
                }),
              ),
              additionalOrderDetails: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
            }),
          ),
        ),
        serialNumber: Schema.optional(Schema.String),
        deliveryTrackingInfo: Schema.optional(
          Schema.Array(
            Schema.Struct({
              serialNumber: Schema.optional(Schema.String),
              carrierName: Schema.optional(Schema.String),
              trackingId: Schema.optional(Schema.String),
              trackingUrl: Schema.optional(Schema.String),
            }),
          ),
        ),
        returnTrackingInfo: Schema.optional(
          Schema.Array(
            Schema.Struct({
              serialNumber: Schema.optional(Schema.String),
              carrierName: Schema.optional(Schema.String),
              trackingId: Schema.optional(Schema.String),
              trackingUrl: Schema.optional(Schema.String),
            }),
          ),
        ),
        shipmentType: Schema.optional(
          Schema.Literals(["NotApplicable", "ShippedToCustomer", "SelfPickup"]),
        ),
      }),
    ),
    kind: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/orders/default",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<OrdersCreateOrUpdateInput>;

// Output Schema
export interface OrdersCreateOrUpdateOutput {
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
export const OrdersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<OrdersCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an order.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 */
export const OrdersCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: OrdersCreateOrUpdateInput,
    outputSchema: OrdersCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface OrdersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
}
export const OrdersDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  deviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/orders/default",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<OrdersDeleteInput>;

// Output Schema
export type OrdersDeleteOutput = void;
export const OrdersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<OrdersDeleteOutput>;

// The operation
/**
 * Deletes the order related to the device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 */
export const OrdersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OrdersDeleteInput,
  outputSchema: OrdersDeleteOutput,
}));
// Input Schema
export interface OrdersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
}
export const OrdersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  deviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/orders/default",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<OrdersGetInput>;

// Output Schema
export interface OrdersGetOutput {
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
export const OrdersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<OrdersGetOutput>;

// The operation
/**
 * Gets a specific order by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 */
export const OrdersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OrdersGetInput,
  outputSchema: OrdersGetOutput,
}));
// Input Schema
export interface OrdersListByDataBoxEdgeDeviceInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
}
export const OrdersListByDataBoxEdgeDeviceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/orders",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<OrdersListByDataBoxEdgeDeviceInput>;

// Output Schema
export interface OrdersListByDataBoxEdgeDeviceOutput {
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
export const OrdersListByDataBoxEdgeDeviceOutput =
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
  }) as unknown as Schema.Codec<OrdersListByDataBoxEdgeDeviceOutput>;

// The operation
/**
 * Lists all the orders related to a Data Box Edge/Data Box Gateway device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 */
export const OrdersListByDataBoxEdgeDevice =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OrdersListByDataBoxEdgeDeviceInput,
    outputSchema: OrdersListByDataBoxEdgeDeviceOutput,
  }));
// Input Schema
export interface OrdersListDCAccessCodeInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
}
export const OrdersListDCAccessCodeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/orders/default/listDCAccessCode",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<OrdersListDCAccessCodeInput>;

// Output Schema
export interface OrdersListDCAccessCodeOutput {
  properties?: { authCode?: string };
}
export const OrdersListDCAccessCodeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        authCode: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<OrdersListDCAccessCodeOutput>;

// The operation
/**
 * Gets the DCAccess Code
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 */
export const OrdersListDCAccessCode = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: OrdersListDCAccessCodeInput,
    outputSchema: OrdersListDCAccessCodeOutput,
  }),
);
// Input Schema
export interface RolesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  name: string;
  kind:
    | "IOT"
    | "ASA"
    | "Functions"
    | "Cognitive"
    | "MEC"
    | "CloudEdgeManagement"
    | "Kubernetes";
}
export const RolesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    kind: Schema.Literals([
      "IOT",
      "ASA",
      "Functions",
      "Cognitive",
      "MEC",
      "CloudEdgeManagement",
      "Kubernetes",
    ]),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/roles/{name}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<RolesCreateOrUpdateInput>;

// Output Schema
export interface RolesCreateOrUpdateOutput {
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
export const RolesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<RolesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a role.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 * @param name - The role name.
 */
export const RolesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RolesCreateOrUpdateInput,
  outputSchema: RolesCreateOrUpdateOutput,
}));
// Input Schema
export interface RolesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  name: string;
}
export const RolesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  deviceName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/roles/{name}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<RolesDeleteInput>;

// Output Schema
export type RolesDeleteOutput = void;
export const RolesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<RolesDeleteOutput>;

// The operation
/**
 * Deletes the role on the device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 * @param name - The role name.
 */
export const RolesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RolesDeleteInput,
  outputSchema: RolesDeleteOutput,
}));
// Input Schema
export interface RolesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  name: string;
}
export const RolesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  deviceName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/roles/{name}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<RolesGetInput>;

// Output Schema
export interface RolesGetOutput {
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
export const RolesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<RolesGetOutput>;

// The operation
/**
 * Gets a specific role by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 * @param name - The role name.
 */
export const RolesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RolesGetInput,
  outputSchema: RolesGetOutput,
}));
// Input Schema
export interface RolesListByDataBoxEdgeDeviceInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
}
export const RolesListByDataBoxEdgeDeviceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/roles",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<RolesListByDataBoxEdgeDeviceInput>;

// Output Schema
export interface RolesListByDataBoxEdgeDeviceOutput {
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
export const RolesListByDataBoxEdgeDeviceOutput =
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
  }) as unknown as Schema.Codec<RolesListByDataBoxEdgeDeviceOutput>;

// The operation
/**
 * Lists all the roles configured in a Data Box Edge/Data Box Gateway device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 */
export const RolesListByDataBoxEdgeDevice =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RolesListByDataBoxEdgeDeviceInput,
    outputSchema: RolesListByDataBoxEdgeDeviceOutput,
  }));
// Input Schema
export interface SharesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  name: string;
  properties: {
    description?: string;
    shareStatus: "Offline" | "Unknown" | "OK" | "Updating" | "NeedsAttention";
    monitoringStatus: "Enabled" | "Disabled";
    azureContainerInfo?: {
      storageAccountCredentialId: string;
      containerName: string;
      dataFormat: "BlockBlob" | "PageBlob" | "AzureFile";
    };
    accessProtocol: "SMB" | "NFS";
    userAccessRights?: {
      userId: string;
      accessType: "Change" | "Read" | "Custom";
    }[];
    clientAccessRights?: {
      client: string;
      accessPermission: "NoAccess" | "ReadOnly" | "ReadWrite";
    }[];
    refreshDetails?: {
      inProgressRefreshJobId?: string;
      lastCompletedRefreshJobTimeInUTC?: string;
      errorManifestFile?: string;
      lastJob?: string;
    };
    shareMappings?: {
      shareId: string;
      roleId?: string;
      mountPoint?: string;
      mountType?: "Volume" | "HostPath";
      roleType?:
        | "IOT"
        | "ASA"
        | "Functions"
        | "Cognitive"
        | "MEC"
        | "CloudEdgeManagement"
        | "Kubernetes";
    }[];
    dataPolicy?: "Cloud" | "Local";
  };
}
export const SharesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.String),
      shareStatus: Schema.Literals([
        "Offline",
        "Unknown",
        "OK",
        "Updating",
        "NeedsAttention",
      ]),
      monitoringStatus: Schema.Literals(["Enabled", "Disabled"]),
      azureContainerInfo: Schema.optional(
        Schema.Struct({
          storageAccountCredentialId: Schema.String,
          containerName: Schema.String,
          dataFormat: Schema.Literals(["BlockBlob", "PageBlob", "AzureFile"]),
        }),
      ),
      accessProtocol: Schema.Literals(["SMB", "NFS"]),
      userAccessRights: Schema.optional(
        Schema.Array(
          Schema.Struct({
            userId: Schema.String,
            accessType: Schema.Literals(["Change", "Read", "Custom"]),
          }),
        ),
      ),
      clientAccessRights: Schema.optional(
        Schema.Array(
          Schema.Struct({
            client: Schema.String,
            accessPermission: Schema.Literals([
              "NoAccess",
              "ReadOnly",
              "ReadWrite",
            ]),
          }),
        ),
      ),
      refreshDetails: Schema.optional(
        Schema.Struct({
          inProgressRefreshJobId: Schema.optional(Schema.String),
          lastCompletedRefreshJobTimeInUTC: Schema.optional(Schema.String),
          errorManifestFile: Schema.optional(Schema.String),
          lastJob: Schema.optional(Schema.String),
        }),
      ),
      shareMappings: Schema.optional(
        Schema.Array(
          Schema.Struct({
            shareId: Schema.String,
            roleId: Schema.optional(Schema.String),
            mountPoint: Schema.optional(Schema.String),
            mountType: Schema.optional(Schema.Literals(["Volume", "HostPath"])),
            roleType: Schema.optional(
              Schema.Literals([
                "IOT",
                "ASA",
                "Functions",
                "Cognitive",
                "MEC",
                "CloudEdgeManagement",
                "Kubernetes",
              ]),
            ),
          }),
        ),
      ),
      dataPolicy: Schema.optional(Schema.Literals(["Cloud", "Local"])),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/shares/{name}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<SharesCreateOrUpdateInput>;

// Output Schema
export interface SharesCreateOrUpdateOutput {
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
export const SharesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SharesCreateOrUpdateOutput>;

// The operation
/**
 * Creates a new share or updates an existing share on the device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 * @param name - The share name.
 */
export const SharesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SharesCreateOrUpdateInput,
    outputSchema: SharesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface SharesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  name: string;
}
export const SharesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  deviceName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/shares/{name}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<SharesDeleteInput>;

// Output Schema
export type SharesDeleteOutput = void;
export const SharesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SharesDeleteOutput>;

// The operation
/**
 * Deletes the share on the Data Box Edge/Data Box Gateway device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 * @param name - The share name.
 */
export const SharesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SharesDeleteInput,
  outputSchema: SharesDeleteOutput,
}));
// Input Schema
export interface SharesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  name: string;
}
export const SharesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  deviceName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/shares/{name}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<SharesGetInput>;

// Output Schema
export interface SharesGetOutput {
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
export const SharesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SharesGetOutput>;

// The operation
/**
 * Gets a share by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 * @param name - The share name.
 */
export const SharesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SharesGetInput,
  outputSchema: SharesGetOutput,
}));
// Input Schema
export interface SharesListByDataBoxEdgeDeviceInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
}
export const SharesListByDataBoxEdgeDeviceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/shares",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<SharesListByDataBoxEdgeDeviceInput>;

// Output Schema
export interface SharesListByDataBoxEdgeDeviceOutput {
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
export const SharesListByDataBoxEdgeDeviceOutput =
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
  }) as unknown as Schema.Codec<SharesListByDataBoxEdgeDeviceOutput>;

// The operation
/**
 * Lists all the shares in a Data Box Edge/Data Box Gateway device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 */
export const SharesListByDataBoxEdgeDevice =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SharesListByDataBoxEdgeDeviceInput,
    outputSchema: SharesListByDataBoxEdgeDeviceOutput,
  }));
// Input Schema
export interface SharesRefreshInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  name: string;
}
export const SharesRefreshInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  deviceName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/shares/{name}/refresh",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<SharesRefreshInput>;

// Output Schema
export type SharesRefreshOutput = void;
export const SharesRefreshOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SharesRefreshOutput>;

// The operation
/**
 * Refreshes the share metadata with the data from the cloud.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 * @param name - The share name.
 */
export const SharesRefresh = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SharesRefreshInput,
  outputSchema: SharesRefreshOutput,
}));
// Input Schema
export interface StorageAccountCredentialsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  name: string;
  properties: {
    alias: string;
    userName?: string;
    accountKey?: {
      value: string;
      encryptionCertThumbprint?: string;
      encryptionAlgorithm: "None" | "AES256" | "RSAES_PKCS1_v_1_5";
    };
    connectionString?: string | Redacted.Redacted<string>;
    sslStatus: "Enabled" | "Disabled";
    blobDomainName?: string;
    accountType: "GeneralPurposeStorage" | "BlobStorage";
    storageAccountId?: string;
  };
}
export const StorageAccountCredentialsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      alias: Schema.String,
      userName: Schema.optional(Schema.String),
      accountKey: Schema.optional(
        Schema.Struct({
          value: Schema.String,
          encryptionCertThumbprint: Schema.optional(Schema.String),
          encryptionAlgorithm: Schema.Literals([
            "None",
            "AES256",
            "RSAES_PKCS1_v_1_5",
          ]),
        }),
      ),
      connectionString: Schema.optional(SensitiveString),
      sslStatus: Schema.Literals(["Enabled", "Disabled"]),
      blobDomainName: Schema.optional(Schema.String),
      accountType: Schema.Literals(["GeneralPurposeStorage", "BlobStorage"]),
      storageAccountId: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccountCredentials/{name}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<StorageAccountCredentialsCreateOrUpdateInput>;

// Output Schema
export interface StorageAccountCredentialsCreateOrUpdateOutput {
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
export const StorageAccountCredentialsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<StorageAccountCredentialsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates the storage account credential.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 * @param name - The storage account credential name.
 */
export const StorageAccountCredentialsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageAccountCredentialsCreateOrUpdateInput,
    outputSchema: StorageAccountCredentialsCreateOrUpdateOutput,
  }));
// Input Schema
export interface StorageAccountCredentialsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  name: string;
}
export const StorageAccountCredentialsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccountCredentials/{name}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<StorageAccountCredentialsDeleteInput>;

// Output Schema
export type StorageAccountCredentialsDeleteOutput = void;
export const StorageAccountCredentialsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<StorageAccountCredentialsDeleteOutput>;

// The operation
/**
 * Deletes the storage account credential.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 * @param name - The storage account credential name.
 */
export const StorageAccountCredentialsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageAccountCredentialsDeleteInput,
    outputSchema: StorageAccountCredentialsDeleteOutput,
  }));
// Input Schema
export interface StorageAccountCredentialsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  name: string;
}
export const StorageAccountCredentialsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccountCredentials/{name}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<StorageAccountCredentialsGetInput>;

// Output Schema
export interface StorageAccountCredentialsGetOutput {
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
export const StorageAccountCredentialsGetOutput =
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
  }) as unknown as Schema.Codec<StorageAccountCredentialsGetOutput>;

// The operation
/**
 * Gets the properties of the specified storage account credential.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 * @param name - The storage account credential name.
 */
export const StorageAccountCredentialsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageAccountCredentialsGetInput,
    outputSchema: StorageAccountCredentialsGetOutput,
  }));
// Input Schema
export interface StorageAccountCredentialsListByDataBoxEdgeDeviceInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
}
export const StorageAccountCredentialsListByDataBoxEdgeDeviceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccountCredentials",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<StorageAccountCredentialsListByDataBoxEdgeDeviceInput>;

// Output Schema
export interface StorageAccountCredentialsListByDataBoxEdgeDeviceOutput {
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
export const StorageAccountCredentialsListByDataBoxEdgeDeviceOutput =
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
  }) as unknown as Schema.Codec<StorageAccountCredentialsListByDataBoxEdgeDeviceOutput>;

// The operation
/**
 * Gets all the storage account credentials in a Data Box Edge/Data Box Gateway device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 */
export const StorageAccountCredentialsListByDataBoxEdgeDevice =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageAccountCredentialsListByDataBoxEdgeDeviceInput,
    outputSchema: StorageAccountCredentialsListByDataBoxEdgeDeviceOutput,
  }));
// Input Schema
export interface StorageAccountsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  storageAccountName: string;
  properties: {
    description?: string;
    storageAccountStatus?:
      | "OK"
      | "Offline"
      | "Unknown"
      | "Updating"
      | "NeedsAttention";
    dataPolicy: "Cloud" | "Local";
    storageAccountCredentialId?: string;
    blobEndpoint?: string;
    containerCount?: number;
  };
}
export const StorageAccountsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    storageAccountName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.String),
      storageAccountStatus: Schema.optional(
        Schema.Literals([
          "OK",
          "Offline",
          "Unknown",
          "Updating",
          "NeedsAttention",
        ]),
      ),
      dataPolicy: Schema.Literals(["Cloud", "Local"]),
      storageAccountCredentialId: Schema.optional(Schema.String),
      blobEndpoint: Schema.optional(Schema.String),
      containerCount: Schema.optional(Schema.Number),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccounts/{storageAccountName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<StorageAccountsCreateOrUpdateInput>;

// Output Schema
export interface StorageAccountsCreateOrUpdateOutput {
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
export const StorageAccountsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<StorageAccountsCreateOrUpdateOutput>;

// The operation
/**
 * Creates a new StorageAccount or updates an existing StorageAccount on the device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 * @param storageAccountName - The storage account name.
 */
export const StorageAccountsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageAccountsCreateOrUpdateInput,
    outputSchema: StorageAccountsCreateOrUpdateOutput,
  }));
// Input Schema
export interface StorageAccountsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  storageAccountName: string;
}
export const StorageAccountsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    storageAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccounts/{storageAccountName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<StorageAccountsDeleteInput>;

// Output Schema
export type StorageAccountsDeleteOutput = void;
export const StorageAccountsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<StorageAccountsDeleteOutput>;

// The operation
/**
 * Deletes the StorageAccount on the Data Box Edge/Data Box Gateway device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 * @param storageAccountName - The storage account name.
 */
export const StorageAccountsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: StorageAccountsDeleteInput,
    outputSchema: StorageAccountsDeleteOutput,
  }),
);
// Input Schema
export interface StorageAccountsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  storageAccountName: string;
}
export const StorageAccountsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    storageAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccounts/{storageAccountName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<StorageAccountsGetInput>;

// Output Schema
export interface StorageAccountsGetOutput {
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
export const StorageAccountsGetOutput =
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
  }) as unknown as Schema.Codec<StorageAccountsGetOutput>;

// The operation
/**
 * Gets a StorageAccount by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 * @param storageAccountName - The storage account name.
 */
export const StorageAccountsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: StorageAccountsGetInput,
  outputSchema: StorageAccountsGetOutput,
}));
// Input Schema
export interface StorageAccountsListByDataBoxEdgeDeviceInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
}
export const StorageAccountsListByDataBoxEdgeDeviceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccounts",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<StorageAccountsListByDataBoxEdgeDeviceInput>;

// Output Schema
export interface StorageAccountsListByDataBoxEdgeDeviceOutput {
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
export const StorageAccountsListByDataBoxEdgeDeviceOutput =
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
  }) as unknown as Schema.Codec<StorageAccountsListByDataBoxEdgeDeviceOutput>;

// The operation
/**
 * Lists all the StorageAccounts in a Data Box Edge/Data Box Gateway device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 */
export const StorageAccountsListByDataBoxEdgeDevice =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageAccountsListByDataBoxEdgeDeviceInput,
    outputSchema: StorageAccountsListByDataBoxEdgeDeviceOutput,
  }));
// Input Schema
export interface SupportPackagesTriggerSupportPackageInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  properties: {
    minimumTimeStamp?: string;
    maximumTimeStamp?: string;
    include?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const SupportPackagesTriggerSupportPackageInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      minimumTimeStamp: Schema.optional(Schema.String),
      maximumTimeStamp: Schema.optional(Schema.String),
      include: Schema.optional(Schema.String),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/triggerSupportPackage",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<SupportPackagesTriggerSupportPackageInput>;

// Output Schema
export type SupportPackagesTriggerSupportPackageOutput = void;
export const SupportPackagesTriggerSupportPackageOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SupportPackagesTriggerSupportPackageOutput>;

// The operation
/**
 * Triggers support package on the device
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 */
export const SupportPackagesTriggerSupportPackage =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SupportPackagesTriggerSupportPackageInput,
    outputSchema: SupportPackagesTriggerSupportPackageOutput,
  }));
// Input Schema
export interface TriggersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  name: string;
  kind: "FileEvent" | "PeriodicTimerEvent";
}
export const TriggersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    kind: Schema.Literals(["FileEvent", "PeriodicTimerEvent"]),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/triggers/{name}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<TriggersCreateOrUpdateInput>;

// Output Schema
export interface TriggersCreateOrUpdateOutput {
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
export const TriggersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<TriggersCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a trigger.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 * @param name - The trigger name.
 */
export const TriggersCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TriggersCreateOrUpdateInput,
    outputSchema: TriggersCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface TriggersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  name: string;
}
export const TriggersDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  deviceName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/triggers/{name}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<TriggersDeleteInput>;

// Output Schema
export type TriggersDeleteOutput = void;
export const TriggersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<TriggersDeleteOutput>;

// The operation
/**
 * Deletes the trigger on the gateway device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 * @param name - The trigger name.
 */
export const TriggersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TriggersDeleteInput,
  outputSchema: TriggersDeleteOutput,
}));
// Input Schema
export interface TriggersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  name: string;
}
export const TriggersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  deviceName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/triggers/{name}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<TriggersGetInput>;

// Output Schema
export interface TriggersGetOutput {
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
export const TriggersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<TriggersGetOutput>;

// The operation
/**
 * Get a specific trigger by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 * @param name - The trigger name.
 */
export const TriggersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TriggersGetInput,
  outputSchema: TriggersGetOutput,
}));
// Input Schema
export interface TriggersListByDataBoxEdgeDeviceInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  $filter?: string;
}
export const TriggersListByDataBoxEdgeDeviceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/triggers",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<TriggersListByDataBoxEdgeDeviceInput>;

// Output Schema
export interface TriggersListByDataBoxEdgeDeviceOutput {
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
export const TriggersListByDataBoxEdgeDeviceOutput =
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
  }) as unknown as Schema.Codec<TriggersListByDataBoxEdgeDeviceOutput>;

// The operation
/**
 * Lists all the triggers configured in the device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 * @param $filter - Specify $filter='CustomContextTag eq <tag>' to filter on custom context tag property
 */
export const TriggersListByDataBoxEdgeDevice =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TriggersListByDataBoxEdgeDeviceInput,
    outputSchema: TriggersListByDataBoxEdgeDeviceOutput,
  }));
// Input Schema
export interface UsersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  name: string;
  properties: {
    encryptedPassword?: {
      value: string;
      encryptionCertThumbprint?: string;
      encryptionAlgorithm: "None" | "AES256" | "RSAES_PKCS1_v_1_5";
    };
    shareAccessRights?: {
      shareId: string;
      accessType: "Change" | "Read" | "Custom";
    }[];
    userType: "Share" | "LocalManagement" | "ARM";
  };
}
export const UsersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      encryptedPassword: Schema.optional(
        Schema.Struct({
          value: Schema.String,
          encryptionCertThumbprint: Schema.optional(Schema.String),
          encryptionAlgorithm: Schema.Literals([
            "None",
            "AES256",
            "RSAES_PKCS1_v_1_5",
          ]),
        }),
      ),
      shareAccessRights: Schema.optional(
        Schema.Array(
          Schema.Struct({
            shareId: Schema.String,
            accessType: Schema.Literals(["Change", "Read", "Custom"]),
          }),
        ),
      ),
      userType: Schema.Literals(["Share", "LocalManagement", "ARM"]),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/users/{name}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<UsersCreateOrUpdateInput>;

// Output Schema
export interface UsersCreateOrUpdateOutput {
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
export const UsersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<UsersCreateOrUpdateOutput>;

// The operation
/**
 * Creates a new user or updates an existing user's information on a Data Box Edge/Data Box Gateway device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 * @param name - The user name.
 */
export const UsersCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UsersCreateOrUpdateInput,
  outputSchema: UsersCreateOrUpdateOutput,
}));
// Input Schema
export interface UsersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  name: string;
}
export const UsersDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  deviceName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/users/{name}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<UsersDeleteInput>;

// Output Schema
export type UsersDeleteOutput = void;
export const UsersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<UsersDeleteOutput>;

// The operation
/**
 * Deletes the user on a databox edge/gateway device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 * @param name - The user name.
 */
export const UsersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UsersDeleteInput,
  outputSchema: UsersDeleteOutput,
}));
// Input Schema
export interface UsersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  name: string;
}
export const UsersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  deviceName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/users/{name}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<UsersGetInput>;

// Output Schema
export interface UsersGetOutput {
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
export const UsersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<UsersGetOutput>;

// The operation
/**
 * Gets the properties of the specified user.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 * @param name - The user name.
 */
export const UsersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UsersGetInput,
  outputSchema: UsersGetOutput,
}));
// Input Schema
export interface UsersListByDataBoxEdgeDeviceInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  $filter?: string;
}
export const UsersListByDataBoxEdgeDeviceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/users",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<UsersListByDataBoxEdgeDeviceInput>;

// Output Schema
export interface UsersListByDataBoxEdgeDeviceOutput {
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
export const UsersListByDataBoxEdgeDeviceOutput =
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
  }) as unknown as Schema.Codec<UsersListByDataBoxEdgeDeviceOutput>;

// The operation
/**
 * Gets all the users registered on a Data Box Edge/Data Box Gateway device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deviceName - The device name.
 * @param $filter - Specify $filter='Type eq <type>' to filter on user type property
 */
export const UsersListByDataBoxEdgeDevice =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UsersListByDataBoxEdgeDeviceInput,
    outputSchema: UsersListByDataBoxEdgeDeviceOutput,
  }));
