/**
 * Azure Trafficmanager API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const EndpointsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    endpointType: Schema.Literals([
      "AzureEndpoints",
      "ExternalEndpoints",
      "NestedEndpoints",
    ]).pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        targetResourceId: Schema.optional(Schema.String),
        target: Schema.optional(Schema.String),
        endpointStatus: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
        weight: Schema.optional(Schema.Number),
        priority: Schema.optional(Schema.Number),
        endpointLocation: Schema.optional(Schema.String),
        endpointMonitorStatus: Schema.optional(
          Schema.Literals([
            "CheckingEndpoint",
            "Online",
            "Degraded",
            "Disabled",
            "Inactive",
            "Stopped",
            "Unmonitored",
          ]),
        ),
        minChildEndpoints: Schema.optional(Schema.Number),
        minChildEndpointsIPv4: Schema.optional(Schema.Number),
        minChildEndpointsIPv6: Schema.optional(Schema.Number),
        geoMapping: Schema.optional(Schema.Array(Schema.String)),
        subnets: Schema.optional(
          Schema.Array(
            Schema.Struct({
              first: Schema.optional(Schema.String),
              last: Schema.optional(Schema.String),
              scope: Schema.optional(Schema.Number),
            }),
          ),
        ),
        customHeaders: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              value: Schema.optional(Schema.String),
            }),
          ),
        ),
        alwaysServe: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficmanagerprofiles/{profileName}/{endpointType}/{endpointName}",
      apiVersion: "2022-04-01",
    }),
  );
export type EndpointsCreateOrUpdateInput =
  typeof EndpointsCreateOrUpdateInput.Type;

// Output Schema
export const EndpointsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type EndpointsCreateOrUpdateOutput =
  typeof EndpointsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update a Traffic Manager endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - The name of the Traffic Manager profile.
 * @param endpointType - The type of the Traffic Manager endpoint.
 * @param endpointName - The name of the Traffic Manager endpoint.
 */
export const EndpointsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EndpointsCreateOrUpdateInput,
    outputSchema: EndpointsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const EndpointsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  endpointType: Schema.Literals([
    "AzureEndpoints",
    "ExternalEndpoints",
    "NestedEndpoints",
  ]).pipe(T.PathParam()),
  endpointName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficmanagerprofiles/{profileName}/{endpointType}/{endpointName}",
    apiVersion: "2022-04-01",
  }),
);
export type EndpointsDeleteInput = typeof EndpointsDeleteInput.Type;

// Output Schema
export const EndpointsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  boolean: Schema.optional(Schema.Boolean),
});
export type EndpointsDeleteOutput = typeof EndpointsDeleteOutput.Type;

// The operation
/**
 * Deletes a Traffic Manager endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - The name of the Traffic Manager profile.
 * @param endpointType - The type of the Traffic Manager endpoint.
 * @param endpointName - The name of the Traffic Manager endpoint.
 */
export const EndpointsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EndpointsDeleteInput,
  outputSchema: EndpointsDeleteOutput,
}));
// Input Schema
export const EndpointsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  endpointType: Schema.Literals([
    "AzureEndpoints",
    "ExternalEndpoints",
    "NestedEndpoints",
  ]).pipe(T.PathParam()),
  endpointName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficmanagerprofiles/{profileName}/{endpointType}/{endpointName}",
    apiVersion: "2022-04-01",
  }),
);
export type EndpointsGetInput = typeof EndpointsGetInput.Type;

// Output Schema
export const EndpointsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});
export type EndpointsGetOutput = typeof EndpointsGetOutput.Type;

// The operation
/**
 * Gets a Traffic Manager endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - The name of the Traffic Manager profile.
 * @param endpointType - The type of the Traffic Manager endpoint.
 * @param endpointName - The name of the Traffic Manager endpoint.
 */
export const EndpointsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EndpointsGetInput,
  outputSchema: EndpointsGetOutput,
}));
// Input Schema
export const EndpointsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  endpointType: Schema.Literals([
    "AzureEndpoints",
    "ExternalEndpoints",
    "NestedEndpoints",
  ]).pipe(T.PathParam()),
  endpointName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      targetResourceId: Schema.optional(Schema.String),
      target: Schema.optional(Schema.String),
      endpointStatus: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
      weight: Schema.optional(Schema.Number),
      priority: Schema.optional(Schema.Number),
      endpointLocation: Schema.optional(Schema.String),
      endpointMonitorStatus: Schema.optional(
        Schema.Literals([
          "CheckingEndpoint",
          "Online",
          "Degraded",
          "Disabled",
          "Inactive",
          "Stopped",
          "Unmonitored",
        ]),
      ),
      minChildEndpoints: Schema.optional(Schema.Number),
      minChildEndpointsIPv4: Schema.optional(Schema.Number),
      minChildEndpointsIPv6: Schema.optional(Schema.Number),
      geoMapping: Schema.optional(Schema.Array(Schema.String)),
      subnets: Schema.optional(
        Schema.Array(
          Schema.Struct({
            first: Schema.optional(Schema.String),
            last: Schema.optional(Schema.String),
            scope: Schema.optional(Schema.Number),
          }),
        ),
      ),
      customHeaders: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            value: Schema.optional(Schema.String),
          }),
        ),
      ),
      alwaysServe: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficmanagerprofiles/{profileName}/{endpointType}/{endpointName}",
    apiVersion: "2022-04-01",
  }),
);
export type EndpointsUpdateInput = typeof EndpointsUpdateInput.Type;

// Output Schema
export const EndpointsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});
export type EndpointsUpdateOutput = typeof EndpointsUpdateOutput.Type;

// The operation
/**
 * Update a Traffic Manager endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - The name of the Traffic Manager profile.
 * @param endpointType - The type of the Traffic Manager endpoint.
 * @param endpointName - The name of the Traffic Manager endpoint.
 */
export const EndpointsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EndpointsUpdateInput,
  outputSchema: EndpointsUpdateOutput,
}));
// Input Schema
export const GeographicHierarchiesGetDefaultInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Network/trafficManagerGeographicHierarchies/default",
      apiVersion: "2022-04-01",
    }),
  );
export type GeographicHierarchiesGetDefaultInput =
  typeof GeographicHierarchiesGetDefaultInput.Type;

// Output Schema
export const GeographicHierarchiesGetDefaultOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type GeographicHierarchiesGetDefaultOutput =
  typeof GeographicHierarchiesGetDefaultOutput.Type;

// The operation
/**
 * Gets the default Geographic Hierarchy used by the Geographic traffic routing method.
 *
 * @param api-version - The API version to use for this operation.
 */
export const GeographicHierarchiesGetDefault =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GeographicHierarchiesGetDefaultInput,
    outputSchema: GeographicHierarchiesGetDefaultOutput,
  }));
// Input Schema
export const HeatMapGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  heatMapType: Schema.Literals(["default"]).pipe(T.PathParam()),
  topLeft: Schema.optional(Schema.String),
  botRight: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficmanagerprofiles/{profileName}/heatMaps/{heatMapType}",
    apiVersion: "2022-04-01",
  }),
);
export type HeatMapGetInput = typeof HeatMapGetInput.Type;

// Output Schema
export const HeatMapGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});
export type HeatMapGetOutput = typeof HeatMapGetOutput.Type;

// The operation
/**
 * Gets latest heatmap for Traffic Manager profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - The name of the Traffic Manager profile.
 * @param heatMapType - The type of the heatmap.
 * @param topLeft - The top left latitude,longitude pair of the rectangular viewport to query for.
 * @param botRight - The bottom right latitude,longitude pair of the rectangular viewport to query for.
 */
export const HeatMapGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HeatMapGetInput,
  outputSchema: HeatMapGetOutput,
}));
// Input Schema
export const ProfilesCheckTrafficManagerNameAvailabilityV2Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Network/checkTrafficManagerNameAvailabilityV2",
      apiVersion: "2022-04-01",
    }),
  );
export type ProfilesCheckTrafficManagerNameAvailabilityV2Input =
  typeof ProfilesCheckTrafficManagerNameAvailabilityV2Input.Type;

// Output Schema
export const ProfilesCheckTrafficManagerNameAvailabilityV2Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  });
export type ProfilesCheckTrafficManagerNameAvailabilityV2Output =
  typeof ProfilesCheckTrafficManagerNameAvailabilityV2Output.Type;

// The operation
/**
 * Checks the availability of a Traffic Manager Relative DNS name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ProfilesCheckTrafficManagerNameAvailabilityV2 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProfilesCheckTrafficManagerNameAvailabilityV2Input,
    outputSchema: ProfilesCheckTrafficManagerNameAvailabilityV2Output,
  }));
// Input Schema
export const ProfilesCheckTrafficManagerRelativeDnsNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Network/checkTrafficManagerNameAvailability",
      apiVersion: "2022-04-01",
    }),
  );
export type ProfilesCheckTrafficManagerRelativeDnsNameAvailabilityInput =
  typeof ProfilesCheckTrafficManagerRelativeDnsNameAvailabilityInput.Type;

// Output Schema
export const ProfilesCheckTrafficManagerRelativeDnsNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  });
export type ProfilesCheckTrafficManagerRelativeDnsNameAvailabilityOutput =
  typeof ProfilesCheckTrafficManagerRelativeDnsNameAvailabilityOutput.Type;

// The operation
/**
 * Checks the availability of a Traffic Manager Relative DNS name.
 *
 * @param api-version - The API version to use for this operation.
 */
export const ProfilesCheckTrafficManagerRelativeDnsNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProfilesCheckTrafficManagerRelativeDnsNameAvailabilityInput,
    outputSchema: ProfilesCheckTrafficManagerRelativeDnsNameAvailabilityOutput,
  }));
// Input Schema
export const ProfilesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        profileStatus: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
        trafficRoutingMethod: Schema.optional(
          Schema.Literals([
            "Performance",
            "Priority",
            "Weighted",
            "Geographic",
            "MultiValue",
            "Subnet",
          ]),
        ),
        dnsConfig: Schema.optional(
          Schema.Struct({
            relativeName: Schema.optional(Schema.String),
            fqdn: Schema.optional(Schema.String),
            ttl: Schema.optional(Schema.Number),
          }),
        ),
        monitorConfig: Schema.optional(
          Schema.Struct({
            profileMonitorStatus: Schema.optional(
              Schema.Literals([
                "CheckingEndpoints",
                "Online",
                "Degraded",
                "Disabled",
                "Inactive",
              ]),
            ),
            protocol: Schema.optional(
              Schema.Literals(["HTTP", "HTTPS", "TCP"]),
            ),
            port: Schema.optional(Schema.Number),
            path: Schema.optional(Schema.String),
            intervalInSeconds: Schema.optional(Schema.Number),
            timeoutInSeconds: Schema.optional(Schema.Number),
            toleratedNumberOfFailures: Schema.optional(Schema.Number),
            customHeaders: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  value: Schema.optional(Schema.String),
                }),
              ),
            ),
            expectedStatusCodeRanges: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  min: Schema.optional(Schema.Number),
                  max: Schema.optional(Schema.Number),
                }),
              ),
            ),
          }),
        ),
        endpoints: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
        trafficViewEnrollmentStatus: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
        allowedEndpointRecordTypes: Schema.optional(
          Schema.Array(
            Schema.Literals([
              "DomainName",
              "IPv4Address",
              "IPv6Address",
              "Any",
            ]),
          ),
        ),
        maxReturn: Schema.optional(Schema.Number),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficmanagerprofiles/{profileName}",
      apiVersion: "2022-04-01",
    }),
  );
export type ProfilesCreateOrUpdateInput =
  typeof ProfilesCreateOrUpdateInput.Type;

// Output Schema
export const ProfilesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type ProfilesCreateOrUpdateOutput =
  typeof ProfilesCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update a Traffic Manager profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - The name of the Traffic Manager profile.
 */
export const ProfilesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProfilesCreateOrUpdateInput,
    outputSchema: ProfilesCreateOrUpdateOutput,
  }),
);
// Input Schema
export const ProfilesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficmanagerprofiles/{profileName}",
    apiVersion: "2022-04-01",
  }),
);
export type ProfilesDeleteInput = typeof ProfilesDeleteInput.Type;

// Output Schema
export const ProfilesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  boolean: Schema.optional(Schema.Boolean),
});
export type ProfilesDeleteOutput = typeof ProfilesDeleteOutput.Type;

// The operation
/**
 * Deletes a Traffic Manager profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - The name of the Traffic Manager profile.
 */
export const ProfilesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProfilesDeleteInput,
  outputSchema: ProfilesDeleteOutput,
}));
// Input Schema
export const ProfilesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficmanagerprofiles/{profileName}",
    apiVersion: "2022-04-01",
  }),
);
export type ProfilesGetInput = typeof ProfilesGetInput.Type;

// Output Schema
export const ProfilesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});
export type ProfilesGetOutput = typeof ProfilesGetOutput.Type;

// The operation
/**
 * Gets a Traffic Manager profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - The name of the Traffic Manager profile.
 */
export const ProfilesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProfilesGetInput,
  outputSchema: ProfilesGetOutput,
}));
// Input Schema
export const ProfilesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficmanagerprofiles",
      apiVersion: "2022-04-01",
    }),
  );
export type ProfilesListByResourceGroupInput =
  typeof ProfilesListByResourceGroupInput.Type;

// Output Schema
export const ProfilesListByResourceGroupOutput =
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
export type ProfilesListByResourceGroupOutput =
  typeof ProfilesListByResourceGroupOutput.Type;

// The operation
/**
 * Lists all Traffic Manager profiles within a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ProfilesListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProfilesListByResourceGroupInput,
    outputSchema: ProfilesListByResourceGroupOutput,
  }),
);
// Input Schema
export const ProfilesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Network/trafficmanagerprofiles",
      apiVersion: "2022-04-01",
    }),
  );
export type ProfilesListBySubscriptionInput =
  typeof ProfilesListBySubscriptionInput.Type;

// Output Schema
export const ProfilesListBySubscriptionOutput =
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
export type ProfilesListBySubscriptionOutput =
  typeof ProfilesListBySubscriptionOutput.Type;

// The operation
/**
 * Lists all Traffic Manager profiles within a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ProfilesListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProfilesListBySubscriptionInput,
    outputSchema: ProfilesListBySubscriptionOutput,
  }),
);
// Input Schema
export const ProfilesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      profileStatus: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
      trafficRoutingMethod: Schema.optional(
        Schema.Literals([
          "Performance",
          "Priority",
          "Weighted",
          "Geographic",
          "MultiValue",
          "Subnet",
        ]),
      ),
      dnsConfig: Schema.optional(
        Schema.Struct({
          relativeName: Schema.optional(Schema.String),
          fqdn: Schema.optional(Schema.String),
          ttl: Schema.optional(Schema.Number),
        }),
      ),
      monitorConfig: Schema.optional(
        Schema.Struct({
          profileMonitorStatus: Schema.optional(
            Schema.Literals([
              "CheckingEndpoints",
              "Online",
              "Degraded",
              "Disabled",
              "Inactive",
            ]),
          ),
          protocol: Schema.optional(Schema.Literals(["HTTP", "HTTPS", "TCP"])),
          port: Schema.optional(Schema.Number),
          path: Schema.optional(Schema.String),
          intervalInSeconds: Schema.optional(Schema.Number),
          timeoutInSeconds: Schema.optional(Schema.Number),
          toleratedNumberOfFailures: Schema.optional(Schema.Number),
          customHeaders: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                value: Schema.optional(Schema.String),
              }),
            ),
          ),
          expectedStatusCodeRanges: Schema.optional(
            Schema.Array(
              Schema.Struct({
                min: Schema.optional(Schema.Number),
                max: Schema.optional(Schema.Number),
              }),
            ),
          ),
        }),
      ),
      endpoints: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            type: Schema.optional(Schema.String),
          }),
        ),
      ),
      trafficViewEnrollmentStatus: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      allowedEndpointRecordTypes: Schema.optional(
        Schema.Array(
          Schema.Literals(["DomainName", "IPv4Address", "IPv6Address", "Any"]),
        ),
      ),
      maxReturn: Schema.optional(Schema.Number),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficmanagerprofiles/{profileName}",
    apiVersion: "2022-04-01",
  }),
);
export type ProfilesUpdateInput = typeof ProfilesUpdateInput.Type;

// Output Schema
export const ProfilesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});
export type ProfilesUpdateOutput = typeof ProfilesUpdateOutput.Type;

// The operation
/**
 * Update a Traffic Manager profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - The name of the Traffic Manager profile.
 */
export const ProfilesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProfilesUpdateInput,
  outputSchema: ProfilesUpdateOutput,
}));
// Input Schema
export const TrafficManagerUserMetricsKeysCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Network/trafficManagerUserMetricsKeys/default",
      apiVersion: "2022-04-01",
    }),
  );
export type TrafficManagerUserMetricsKeysCreateOrUpdateInput =
  typeof TrafficManagerUserMetricsKeysCreateOrUpdateInput.Type;

// Output Schema
export const TrafficManagerUserMetricsKeysCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type TrafficManagerUserMetricsKeysCreateOrUpdateOutput =
  typeof TrafficManagerUserMetricsKeysCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update a subscription-level key used for Real User Metrics collection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const TrafficManagerUserMetricsKeysCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TrafficManagerUserMetricsKeysCreateOrUpdateInput,
    outputSchema: TrafficManagerUserMetricsKeysCreateOrUpdateOutput,
  }));
// Input Schema
export const TrafficManagerUserMetricsKeysDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Network/trafficManagerUserMetricsKeys/default",
      apiVersion: "2022-04-01",
    }),
  );
export type TrafficManagerUserMetricsKeysDeleteInput =
  typeof TrafficManagerUserMetricsKeysDeleteInput.Type;

// Output Schema
export const TrafficManagerUserMetricsKeysDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boolean: Schema.optional(Schema.Boolean),
  });
export type TrafficManagerUserMetricsKeysDeleteOutput =
  typeof TrafficManagerUserMetricsKeysDeleteOutput.Type;

// The operation
/**
 * Delete a subscription-level key used for Real User Metrics collection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const TrafficManagerUserMetricsKeysDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TrafficManagerUserMetricsKeysDeleteInput,
    outputSchema: TrafficManagerUserMetricsKeysDeleteOutput,
  }));
// Input Schema
export const TrafficManagerUserMetricsKeysGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Network/trafficManagerUserMetricsKeys/default",
      apiVersion: "2022-04-01",
    }),
  );
export type TrafficManagerUserMetricsKeysGetInput =
  typeof TrafficManagerUserMetricsKeysGetInput.Type;

// Output Schema
export const TrafficManagerUserMetricsKeysGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type TrafficManagerUserMetricsKeysGetOutput =
  typeof TrafficManagerUserMetricsKeysGetOutput.Type;

// The operation
/**
 * Get the subscription-level key used for Real User Metrics collection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const TrafficManagerUserMetricsKeysGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TrafficManagerUserMetricsKeysGetInput,
    outputSchema: TrafficManagerUserMetricsKeysGetOutput,
  }));
