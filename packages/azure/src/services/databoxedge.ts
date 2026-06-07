/**
 * Azure Databoxedge API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString, SensitiveString } from "../sensitive.ts";

// Input Schema
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
  );
export type AddonsCreateOrUpdateInput = typeof AddonsCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type AddonsCreateOrUpdateOutput = typeof AddonsCreateOrUpdateOutput.Type;

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
);
export type AddonsDeleteInput = typeof AddonsDeleteInput.Type;

// Output Schema
export const AddonsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AddonsDeleteOutput = typeof AddonsDeleteOutput.Type;

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
);
export type AddonsGetInput = typeof AddonsGetInput.Type;

// Output Schema
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
});
export type AddonsGetOutput = typeof AddonsGetOutput.Type;

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
);
export type AddonsListByRoleInput = typeof AddonsListByRoleInput.Type;

// Output Schema
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
);
export type AddonsListByRoleOutput = typeof AddonsListByRoleOutput.Type;

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
);
export type AlertsGetInput = typeof AlertsGetInput.Type;

// Output Schema
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
});
export type AlertsGetOutput = typeof AlertsGetOutput.Type;

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
  );
export type AlertsListByDataBoxEdgeDeviceInput =
  typeof AlertsListByDataBoxEdgeDeviceInput.Type;

// Output Schema
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
  });
export type AlertsListByDataBoxEdgeDeviceOutput =
  typeof AlertsListByDataBoxEdgeDeviceOutput.Type;

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
);
export type AvailableSkusListInput = typeof AvailableSkusListInput.Type;

// Output Schema
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
  });
export type AvailableSkusListOutput = typeof AvailableSkusListOutput.Type;

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
  );
export type BandwidthSchedulesCreateOrUpdateInput =
  typeof BandwidthSchedulesCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type BandwidthSchedulesCreateOrUpdateOutput =
  typeof BandwidthSchedulesCreateOrUpdateOutput.Type;

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
  );
export type BandwidthSchedulesDeleteInput =
  typeof BandwidthSchedulesDeleteInput.Type;

// Output Schema
export const BandwidthSchedulesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BandwidthSchedulesDeleteOutput =
  typeof BandwidthSchedulesDeleteOutput.Type;

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
  );
export type BandwidthSchedulesGetInput = typeof BandwidthSchedulesGetInput.Type;

// Output Schema
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
  });
export type BandwidthSchedulesGetOutput =
  typeof BandwidthSchedulesGetOutput.Type;

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
  );
export type BandwidthSchedulesListByDataBoxEdgeDeviceInput =
  typeof BandwidthSchedulesListByDataBoxEdgeDeviceInput.Type;

// Output Schema
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
  });
export type BandwidthSchedulesListByDataBoxEdgeDeviceOutput =
  typeof BandwidthSchedulesListByDataBoxEdgeDeviceOutput.Type;

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
  );
export type ContainersCreateOrUpdateInput =
  typeof ContainersCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type ContainersCreateOrUpdateOutput =
  typeof ContainersCreateOrUpdateOutput.Type;

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
);
export type ContainersDeleteInput = typeof ContainersDeleteInput.Type;

// Output Schema
export const ContainersDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ContainersDeleteOutput = typeof ContainersDeleteOutput.Type;

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
);
export type ContainersGetInput = typeof ContainersGetInput.Type;

// Output Schema
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
});
export type ContainersGetOutput = typeof ContainersGetOutput.Type;

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
  );
export type ContainersListByStorageAccountInput =
  typeof ContainersListByStorageAccountInput.Type;

// Output Schema
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
  });
export type ContainersListByStorageAccountOutput =
  typeof ContainersListByStorageAccountOutput.Type;

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
);
export type ContainersRefreshInput = typeof ContainersRefreshInput.Type;

// Output Schema
export const ContainersRefreshOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ContainersRefreshOutput = typeof ContainersRefreshOutput.Type;

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
  );
export type DeviceCapacityCheckCheckResourceCreationFeasibilityInput =
  typeof DeviceCapacityCheckCheckResourceCreationFeasibilityInput.Type;

// Output Schema
export const DeviceCapacityCheckCheckResourceCreationFeasibilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeviceCapacityCheckCheckResourceCreationFeasibilityOutput =
  typeof DeviceCapacityCheckCheckResourceCreationFeasibilityOutput.Type;

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
  );
export type DeviceCapacityInfoGetDeviceCapacityInfoInput =
  typeof DeviceCapacityInfoGetDeviceCapacityInfoInput.Type;

// Output Schema
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
  });
export type DeviceCapacityInfoGetDeviceCapacityInfoOutput =
  typeof DeviceCapacityInfoGetDeviceCapacityInfoOutput.Type;

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
  );
export type DevicesCreateOrUpdateInput = typeof DevicesCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type DevicesCreateOrUpdateOutput =
  typeof DevicesCreateOrUpdateOutput.Type;

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
  );
export type DevicesCreateOrUpdateSecuritySettingsInput =
  typeof DevicesCreateOrUpdateSecuritySettingsInput.Type;

// Output Schema
export const DevicesCreateOrUpdateSecuritySettingsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DevicesCreateOrUpdateSecuritySettingsOutput =
  typeof DevicesCreateOrUpdateSecuritySettingsOutput.Type;

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
);
export type DevicesDeleteInput = typeof DevicesDeleteInput.Type;

// Output Schema
export const DevicesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DevicesDeleteOutput = typeof DevicesDeleteOutput.Type;

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
  );
export type DevicesDownloadUpdatesInput =
  typeof DevicesDownloadUpdatesInput.Type;

// Output Schema
export const DevicesDownloadUpdatesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DevicesDownloadUpdatesOutput =
  typeof DevicesDownloadUpdatesOutput.Type;

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
  );
export type DevicesGenerateCertificateInput =
  typeof DevicesGenerateCertificateInput.Type;

// Output Schema
export const DevicesGenerateCertificateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    publicKey: Schema.optional(Schema.String),
    privateKey: Schema.optional(SensitiveOutputString),
    expiryTimeInUTC: Schema.optional(Schema.String),
  });
export type DevicesGenerateCertificateOutput =
  typeof DevicesGenerateCertificateOutput.Type;

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
);
export type DevicesGetInput = typeof DevicesGetInput.Type;

// Output Schema
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
});
export type DevicesGetOutput = typeof DevicesGetOutput.Type;

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
  );
export type DevicesGetExtendedInformationInput =
  typeof DevicesGetExtendedInformationInput.Type;

// Output Schema
export const DevicesGetExtendedInformationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type DevicesGetExtendedInformationOutput =
  typeof DevicesGetExtendedInformationOutput.Type;

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
  );
export type DevicesGetNetworkSettingsInput =
  typeof DevicesGetNetworkSettingsInput.Type;

// Output Schema
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
  });
export type DevicesGetNetworkSettingsOutput =
  typeof DevicesGetNetworkSettingsOutput.Type;

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
  );
export type DevicesGetUpdateSummaryInput =
  typeof DevicesGetUpdateSummaryInput.Type;

// Output Schema
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
  });
export type DevicesGetUpdateSummaryOutput =
  typeof DevicesGetUpdateSummaryOutput.Type;

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
  );
export type DevicesInstallUpdatesInput = typeof DevicesInstallUpdatesInput.Type;

// Output Schema
export const DevicesInstallUpdatesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DevicesInstallUpdatesOutput =
  typeof DevicesInstallUpdatesOutput.Type;

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
  );
export type DevicesListByResourceGroupInput =
  typeof DevicesListByResourceGroupInput.Type;

// Output Schema
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
  });
export type DevicesListByResourceGroupOutput =
  typeof DevicesListByResourceGroupOutput.Type;

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
  );
export type DevicesListBySubscriptionInput =
  typeof DevicesListBySubscriptionInput.Type;

// Output Schema
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
  });
export type DevicesListBySubscriptionOutput =
  typeof DevicesListBySubscriptionOutput.Type;

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
  );
export type DevicesScanForUpdatesInput = typeof DevicesScanForUpdatesInput.Type;

// Output Schema
export const DevicesScanForUpdatesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DevicesScanForUpdatesOutput =
  typeof DevicesScanForUpdatesOutput.Type;

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
);
export type DevicesUpdateInput = typeof DevicesUpdateInput.Type;

// Output Schema
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
});
export type DevicesUpdateOutput = typeof DevicesUpdateOutput.Type;

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
  );
export type DevicesUpdateExtendedInformationInput =
  typeof DevicesUpdateExtendedInformationInput.Type;

// Output Schema
export const DevicesUpdateExtendedInformationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type DevicesUpdateExtendedInformationOutput =
  typeof DevicesUpdateExtendedInformationOutput.Type;

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
  );
export type DevicesUploadCertificateInput =
  typeof DevicesUploadCertificateInput.Type;

// Output Schema
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
  });
export type DevicesUploadCertificateOutput =
  typeof DevicesUploadCertificateOutput.Type;

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
  );
export type DiagnosticSettingsGetDiagnosticProactiveLogCollectionSettingsInput =
  typeof DiagnosticSettingsGetDiagnosticProactiveLogCollectionSettingsInput.Type;

// Output Schema
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
  });
export type DiagnosticSettingsGetDiagnosticProactiveLogCollectionSettingsOutput =
  typeof DiagnosticSettingsGetDiagnosticProactiveLogCollectionSettingsOutput.Type;

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
  );
export type DiagnosticSettingsGetDiagnosticRemoteSupportSettingsInput =
  typeof DiagnosticSettingsGetDiagnosticRemoteSupportSettingsInput.Type;

// Output Schema
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
  });
export type DiagnosticSettingsGetDiagnosticRemoteSupportSettingsOutput =
  typeof DiagnosticSettingsGetDiagnosticRemoteSupportSettingsOutput.Type;

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
  );
export type DiagnosticSettingsUpdateDiagnosticProactiveLogCollectionSettingsInput =
  typeof DiagnosticSettingsUpdateDiagnosticProactiveLogCollectionSettingsInput.Type;

// Output Schema
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
  });
export type DiagnosticSettingsUpdateDiagnosticProactiveLogCollectionSettingsOutput =
  typeof DiagnosticSettingsUpdateDiagnosticProactiveLogCollectionSettingsOutput.Type;

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
  );
export type DiagnosticSettingsUpdateDiagnosticRemoteSupportSettingsInput =
  typeof DiagnosticSettingsUpdateDiagnosticRemoteSupportSettingsInput.Type;

// Output Schema
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
  });
export type DiagnosticSettingsUpdateDiagnosticRemoteSupportSettingsOutput =
  typeof DiagnosticSettingsUpdateDiagnosticRemoteSupportSettingsOutput.Type;

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
);
export type JobsGetInput = typeof JobsGetInput.Type;

// Output Schema
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
});
export type JobsGetOutput = typeof JobsGetOutput.Type;

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
  );
export type MonitoringConfigCreateOrUpdateInput =
  typeof MonitoringConfigCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type MonitoringConfigCreateOrUpdateOutput =
  typeof MonitoringConfigCreateOrUpdateOutput.Type;

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
  );
export type MonitoringConfigDeleteInput =
  typeof MonitoringConfigDeleteInput.Type;

// Output Schema
export const MonitoringConfigDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type MonitoringConfigDeleteOutput =
  typeof MonitoringConfigDeleteOutput.Type;

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
  );
export type MonitoringConfigGetInput = typeof MonitoringConfigGetInput.Type;

// Output Schema
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
  });
export type MonitoringConfigGetOutput = typeof MonitoringConfigGetOutput.Type;

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
  );
export type MonitoringConfigListInput = typeof MonitoringConfigListInput.Type;

// Output Schema
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
  });
export type MonitoringConfigListOutput = typeof MonitoringConfigListOutput.Type;

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
  );
export type NodesListByDataBoxEdgeDeviceInput =
  typeof NodesListByDataBoxEdgeDeviceInput.Type;

// Output Schema
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
  });
export type NodesListByDataBoxEdgeDeviceOutput =
  typeof NodesListByDataBoxEdgeDeviceOutput.Type;

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
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.DataBoxEdge/operations",
    apiVersion: "2023-12-01",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
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
});
export type OperationsListOutput = typeof OperationsListOutput.Type;

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
  );
export type OperationsStatusGetInput = typeof OperationsStatusGetInput.Type;

// Output Schema
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
  });
export type OperationsStatusGetOutput = typeof OperationsStatusGetOutput.Type;

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
  );
export type OrdersCreateOrUpdateInput = typeof OrdersCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type OrdersCreateOrUpdateOutput = typeof OrdersCreateOrUpdateOutput.Type;

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
);
export type OrdersDeleteInput = typeof OrdersDeleteInput.Type;

// Output Schema
export const OrdersDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type OrdersDeleteOutput = typeof OrdersDeleteOutput.Type;

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
);
export type OrdersGetInput = typeof OrdersGetInput.Type;

// Output Schema
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
});
export type OrdersGetOutput = typeof OrdersGetOutput.Type;

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
  );
export type OrdersListByDataBoxEdgeDeviceInput =
  typeof OrdersListByDataBoxEdgeDeviceInput.Type;

// Output Schema
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
  });
export type OrdersListByDataBoxEdgeDeviceOutput =
  typeof OrdersListByDataBoxEdgeDeviceOutput.Type;

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
  );
export type OrdersListDCAccessCodeInput =
  typeof OrdersListDCAccessCodeInput.Type;

// Output Schema
export const OrdersListDCAccessCodeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        authCode: Schema.optional(Schema.String),
      }),
    ),
  });
export type OrdersListDCAccessCodeOutput =
  typeof OrdersListDCAccessCodeOutput.Type;

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
  );
export type RolesCreateOrUpdateInput = typeof RolesCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type RolesCreateOrUpdateOutput = typeof RolesCreateOrUpdateOutput.Type;

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
);
export type RolesDeleteInput = typeof RolesDeleteInput.Type;

// Output Schema
export const RolesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RolesDeleteOutput = typeof RolesDeleteOutput.Type;

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
);
export type RolesGetInput = typeof RolesGetInput.Type;

// Output Schema
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
});
export type RolesGetOutput = typeof RolesGetOutput.Type;

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
  );
export type RolesListByDataBoxEdgeDeviceInput =
  typeof RolesListByDataBoxEdgeDeviceInput.Type;

// Output Schema
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
  });
export type RolesListByDataBoxEdgeDeviceOutput =
  typeof RolesListByDataBoxEdgeDeviceOutput.Type;

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
  );
export type SharesCreateOrUpdateInput = typeof SharesCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type SharesCreateOrUpdateOutput = typeof SharesCreateOrUpdateOutput.Type;

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
);
export type SharesDeleteInput = typeof SharesDeleteInput.Type;

// Output Schema
export const SharesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SharesDeleteOutput = typeof SharesDeleteOutput.Type;

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
);
export type SharesGetInput = typeof SharesGetInput.Type;

// Output Schema
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
});
export type SharesGetOutput = typeof SharesGetOutput.Type;

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
  );
export type SharesListByDataBoxEdgeDeviceInput =
  typeof SharesListByDataBoxEdgeDeviceInput.Type;

// Output Schema
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
  });
export type SharesListByDataBoxEdgeDeviceOutput =
  typeof SharesListByDataBoxEdgeDeviceOutput.Type;

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
);
export type SharesRefreshInput = typeof SharesRefreshInput.Type;

// Output Schema
export const SharesRefreshOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SharesRefreshOutput = typeof SharesRefreshOutput.Type;

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
  );
export type StorageAccountCredentialsCreateOrUpdateInput =
  typeof StorageAccountCredentialsCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type StorageAccountCredentialsCreateOrUpdateOutput =
  typeof StorageAccountCredentialsCreateOrUpdateOutput.Type;

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
  );
export type StorageAccountCredentialsDeleteInput =
  typeof StorageAccountCredentialsDeleteInput.Type;

// Output Schema
export const StorageAccountCredentialsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type StorageAccountCredentialsDeleteOutput =
  typeof StorageAccountCredentialsDeleteOutput.Type;

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
  );
export type StorageAccountCredentialsGetInput =
  typeof StorageAccountCredentialsGetInput.Type;

// Output Schema
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
  });
export type StorageAccountCredentialsGetOutput =
  typeof StorageAccountCredentialsGetOutput.Type;

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
  );
export type StorageAccountCredentialsListByDataBoxEdgeDeviceInput =
  typeof StorageAccountCredentialsListByDataBoxEdgeDeviceInput.Type;

// Output Schema
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
  });
export type StorageAccountCredentialsListByDataBoxEdgeDeviceOutput =
  typeof StorageAccountCredentialsListByDataBoxEdgeDeviceOutput.Type;

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
  );
export type StorageAccountsCreateOrUpdateInput =
  typeof StorageAccountsCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type StorageAccountsCreateOrUpdateOutput =
  typeof StorageAccountsCreateOrUpdateOutput.Type;

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
  );
export type StorageAccountsDeleteInput = typeof StorageAccountsDeleteInput.Type;

// Output Schema
export const StorageAccountsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type StorageAccountsDeleteOutput =
  typeof StorageAccountsDeleteOutput.Type;

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
  );
export type StorageAccountsGetInput = typeof StorageAccountsGetInput.Type;

// Output Schema
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
  });
export type StorageAccountsGetOutput = typeof StorageAccountsGetOutput.Type;

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
  );
export type StorageAccountsListByDataBoxEdgeDeviceInput =
  typeof StorageAccountsListByDataBoxEdgeDeviceInput.Type;

// Output Schema
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
  });
export type StorageAccountsListByDataBoxEdgeDeviceOutput =
  typeof StorageAccountsListByDataBoxEdgeDeviceOutput.Type;

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
  );
export type SupportPackagesTriggerSupportPackageInput =
  typeof SupportPackagesTriggerSupportPackageInput.Type;

// Output Schema
export const SupportPackagesTriggerSupportPackageOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SupportPackagesTriggerSupportPackageOutput =
  typeof SupportPackagesTriggerSupportPackageOutput.Type;

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
  );
export type TriggersCreateOrUpdateInput =
  typeof TriggersCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type TriggersCreateOrUpdateOutput =
  typeof TriggersCreateOrUpdateOutput.Type;

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
);
export type TriggersDeleteInput = typeof TriggersDeleteInput.Type;

// Output Schema
export const TriggersDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type TriggersDeleteOutput = typeof TriggersDeleteOutput.Type;

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
);
export type TriggersGetInput = typeof TriggersGetInput.Type;

// Output Schema
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
});
export type TriggersGetOutput = typeof TriggersGetOutput.Type;

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
  );
export type TriggersListByDataBoxEdgeDeviceInput =
  typeof TriggersListByDataBoxEdgeDeviceInput.Type;

// Output Schema
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
  });
export type TriggersListByDataBoxEdgeDeviceOutput =
  typeof TriggersListByDataBoxEdgeDeviceOutput.Type;

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
  );
export type UsersCreateOrUpdateInput = typeof UsersCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type UsersCreateOrUpdateOutput = typeof UsersCreateOrUpdateOutput.Type;

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
);
export type UsersDeleteInput = typeof UsersDeleteInput.Type;

// Output Schema
export const UsersDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UsersDeleteOutput = typeof UsersDeleteOutput.Type;

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
);
export type UsersGetInput = typeof UsersGetInput.Type;

// Output Schema
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
});
export type UsersGetOutput = typeof UsersGetOutput.Type;

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
  );
export type UsersListByDataBoxEdgeDeviceInput =
  typeof UsersListByDataBoxEdgeDeviceInput.Type;

// Output Schema
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
  });
export type UsersListByDataBoxEdgeDeviceOutput =
  typeof UsersListByDataBoxEdgeDeviceOutput.Type;

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
