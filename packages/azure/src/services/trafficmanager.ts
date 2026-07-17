/**
 * Azure Trafficmanager API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface EndpointsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointType: "AzureEndpoints" | "ExternalEndpoints" | "NestedEndpoints";
  endpointName: string;
  properties?: {
    targetResourceId?: string;
    target?: string;
    endpointStatus?: "Enabled" | "Disabled";
    weight?: number;
    priority?: number;
    endpointLocation?: string;
    endpointMonitorStatus?:
      | "CheckingEndpoint"
      | "Online"
      | "Degraded"
      | "Disabled"
      | "Inactive"
      | "Stopped"
      | "Unmonitored";
    minChildEndpoints?: number;
    minChildEndpointsIPv4?: number;
    minChildEndpointsIPv6?: number;
    geoMapping?: string[];
    subnets?: { first?: string; last?: string; scope?: number }[];
    customHeaders?: { name?: string; value?: string }[];
    alwaysServe?: "Enabled" | "Disabled";
  };
}
export const EndpointsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<EndpointsCreateOrUpdateInput>;

// Output Schema
export interface EndpointsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const EndpointsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EndpointsCreateOrUpdateOutput>;

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
export const EndpointsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: EndpointsCreateOrUpdateInput,
  outputSchema: EndpointsCreateOrUpdateOutput,
}));
// Input Schema
export interface EndpointsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointType: "AzureEndpoints" | "ExternalEndpoints" | "NestedEndpoints";
  endpointName: string;
}
export const EndpointsDeleteInput = /*@__PURE__*/ Schema.Struct({
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
) as unknown as Schema.Codec<EndpointsDeleteInput>;

// Output Schema
export interface EndpointsDeleteOutput {
  boolean?: boolean;
}
export const EndpointsDeleteOutput = /*@__PURE__*/ Schema.Struct({
  boolean: Schema.optional(Schema.Boolean),
}) as unknown as Schema.Codec<EndpointsDeleteOutput>;

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
export const EndpointsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: EndpointsDeleteInput,
  outputSchema: EndpointsDeleteOutput,
}));
// Input Schema
export interface EndpointsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointType: "AzureEndpoints" | "ExternalEndpoints" | "NestedEndpoints";
  endpointName: string;
}
export const EndpointsGetInput = /*@__PURE__*/ Schema.Struct({
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
) as unknown as Schema.Codec<EndpointsGetInput>;

// Output Schema
export interface EndpointsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const EndpointsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<EndpointsGetOutput>;

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
export const EndpointsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: EndpointsGetInput,
  outputSchema: EndpointsGetOutput,
}));
// Input Schema
export interface EndpointsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointType: "AzureEndpoints" | "ExternalEndpoints" | "NestedEndpoints";
  endpointName: string;
  properties?: {
    targetResourceId?: string;
    target?: string;
    endpointStatus?: "Enabled" | "Disabled";
    weight?: number;
    priority?: number;
    endpointLocation?: string;
    endpointMonitorStatus?:
      | "CheckingEndpoint"
      | "Online"
      | "Degraded"
      | "Disabled"
      | "Inactive"
      | "Stopped"
      | "Unmonitored";
    minChildEndpoints?: number;
    minChildEndpointsIPv4?: number;
    minChildEndpointsIPv6?: number;
    geoMapping?: string[];
    subnets?: { first?: string; last?: string; scope?: number }[];
    customHeaders?: { name?: string; value?: string }[];
    alwaysServe?: "Enabled" | "Disabled";
  };
}
export const EndpointsUpdateInput = /*@__PURE__*/ Schema.Struct({
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
) as unknown as Schema.Codec<EndpointsUpdateInput>;

// Output Schema
export interface EndpointsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const EndpointsUpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<EndpointsUpdateOutput>;

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
export const EndpointsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: EndpointsUpdateInput,
  outputSchema: EndpointsUpdateOutput,
}));
// Input Schema
export interface GeographicHierarchiesGetDefaultInput {}
export const GeographicHierarchiesGetDefaultInput =
  /*@__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Network/trafficManagerGeographicHierarchies/default",
      apiVersion: "2022-04-01",
    }),
  ) as unknown as Schema.Codec<GeographicHierarchiesGetDefaultInput>;

// Output Schema
export interface GeographicHierarchiesGetDefaultOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const GeographicHierarchiesGetDefaultOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<GeographicHierarchiesGetDefaultOutput>;

// The operation
/**
 * Gets the default Geographic Hierarchy used by the Geographic traffic routing method.
 *
 * @param api-version - The API version to use for this operation.
 */
export const GeographicHierarchiesGetDefault =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GeographicHierarchiesGetDefaultInput,
    outputSchema: GeographicHierarchiesGetDefaultOutput,
  }));
// Input Schema
export interface HeatMapGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  heatMapType: "default";
  topLeft?: string;
  botRight?: string;
}
export const HeatMapGetInput = /*@__PURE__*/ Schema.Struct({
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
) as unknown as Schema.Codec<HeatMapGetInput>;

// Output Schema
export interface HeatMapGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const HeatMapGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<HeatMapGetOutput>;

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
export const HeatMapGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: HeatMapGetInput,
  outputSchema: HeatMapGetOutput,
}));
// Input Schema
export interface ProfilesCheckTrafficManagerNameAvailabilityV2Input {
  subscriptionId: string;
  name?: string;
  type?: string;
}
export const ProfilesCheckTrafficManagerNameAvailabilityV2Input =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Network/checkTrafficManagerNameAvailabilityV2",
      apiVersion: "2022-04-01",
    }),
  ) as unknown as Schema.Codec<ProfilesCheckTrafficManagerNameAvailabilityV2Input>;

// Output Schema
export interface ProfilesCheckTrafficManagerNameAvailabilityV2Output {
  name?: string;
  type?: string;
  nameAvailable?: boolean;
  reason?: string;
  message?: string;
}
export const ProfilesCheckTrafficManagerNameAvailabilityV2Output =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ProfilesCheckTrafficManagerNameAvailabilityV2Output>;

// The operation
/**
 * Checks the availability of a Traffic Manager Relative DNS name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ProfilesCheckTrafficManagerNameAvailabilityV2 =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProfilesCheckTrafficManagerNameAvailabilityV2Input,
    outputSchema: ProfilesCheckTrafficManagerNameAvailabilityV2Output,
  }));
// Input Schema
export interface ProfilesCheckTrafficManagerRelativeDnsNameAvailabilityInput {
  name?: string;
  type?: string;
}
export const ProfilesCheckTrafficManagerRelativeDnsNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Network/checkTrafficManagerNameAvailability",
      apiVersion: "2022-04-01",
    }),
  ) as unknown as Schema.Codec<ProfilesCheckTrafficManagerRelativeDnsNameAvailabilityInput>;

// Output Schema
export interface ProfilesCheckTrafficManagerRelativeDnsNameAvailabilityOutput {
  name?: string;
  type?: string;
  nameAvailable?: boolean;
  reason?: string;
  message?: string;
}
export const ProfilesCheckTrafficManagerRelativeDnsNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ProfilesCheckTrafficManagerRelativeDnsNameAvailabilityOutput>;

// The operation
/**
 * Checks the availability of a Traffic Manager Relative DNS name.
 *
 * @param api-version - The API version to use for this operation.
 */
export const ProfilesCheckTrafficManagerRelativeDnsNameAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProfilesCheckTrafficManagerRelativeDnsNameAvailabilityInput,
    outputSchema: ProfilesCheckTrafficManagerRelativeDnsNameAvailabilityOutput,
  }));
// Input Schema
export interface ProfilesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  properties?: {
    profileStatus?: "Enabled" | "Disabled";
    trafficRoutingMethod?:
      | "Performance"
      | "Priority"
      | "Weighted"
      | "Geographic"
      | "MultiValue"
      | "Subnet";
    dnsConfig?: { relativeName?: string; fqdn?: string; ttl?: number };
    monitorConfig?: {
      profileMonitorStatus?:
        | "CheckingEndpoints"
        | "Online"
        | "Degraded"
        | "Disabled"
        | "Inactive";
      protocol?: "HTTP" | "HTTPS" | "TCP";
      port?: number;
      path?: string;
      intervalInSeconds?: number;
      timeoutInSeconds?: number;
      toleratedNumberOfFailures?: number;
      customHeaders?: { name?: string; value?: string }[];
      expectedStatusCodeRanges?: { min?: number; max?: number }[];
    };
    endpoints?: { id?: string; name?: string; type?: string }[];
    trafficViewEnrollmentStatus?: "Enabled" | "Disabled";
    allowedEndpointRecordTypes?: (
      | "DomainName"
      | "IPv4Address"
      | "IPv6Address"
      | "Any"
    )[];
    maxReturn?: number;
  };
  tags?: Record<string, string>;
  location?: string;
}
export const ProfilesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<ProfilesCreateOrUpdateInput>;

// Output Schema
export interface ProfilesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ProfilesCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ProfilesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a Traffic Manager profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - The name of the Traffic Manager profile.
 */
export const ProfilesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProfilesCreateOrUpdateInput,
  outputSchema: ProfilesCreateOrUpdateOutput,
}));
// Input Schema
export interface ProfilesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
}
export const ProfilesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficmanagerprofiles/{profileName}",
    apiVersion: "2022-04-01",
  }),
) as unknown as Schema.Codec<ProfilesDeleteInput>;

// Output Schema
export interface ProfilesDeleteOutput {
  boolean?: boolean;
}
export const ProfilesDeleteOutput = /*@__PURE__*/ Schema.Struct({
  boolean: Schema.optional(Schema.Boolean),
}) as unknown as Schema.Codec<ProfilesDeleteOutput>;

// The operation
/**
 * Deletes a Traffic Manager profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - The name of the Traffic Manager profile.
 */
export const ProfilesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProfilesDeleteInput,
  outputSchema: ProfilesDeleteOutput,
}));
// Input Schema
export interface ProfilesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
}
export const ProfilesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficmanagerprofiles/{profileName}",
    apiVersion: "2022-04-01",
  }),
) as unknown as Schema.Codec<ProfilesGetInput>;

// Output Schema
export interface ProfilesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ProfilesGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ProfilesGetOutput>;

// The operation
/**
 * Gets a Traffic Manager profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - The name of the Traffic Manager profile.
 */
export const ProfilesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProfilesGetInput,
  outputSchema: ProfilesGetOutput,
}));
// Input Schema
export interface ProfilesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const ProfilesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficmanagerprofiles",
      apiVersion: "2022-04-01",
    }),
  ) as unknown as Schema.Codec<ProfilesListByResourceGroupInput>;

// Output Schema
export interface ProfilesListByResourceGroupOutput {
  value: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const ProfilesListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ProfilesListByResourceGroupOutput>;

// The operation
/**
 * Lists all Traffic Manager profiles within a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ProfilesListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProfilesListByResourceGroupInput,
  outputSchema: ProfilesListByResourceGroupOutput,
}));
// Input Schema
export interface ProfilesListBySubscriptionInput {
  subscriptionId: string;
}
export const ProfilesListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Network/trafficmanagerprofiles",
      apiVersion: "2022-04-01",
    }),
  ) as unknown as Schema.Codec<ProfilesListBySubscriptionInput>;

// Output Schema
export interface ProfilesListBySubscriptionOutput {
  value: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const ProfilesListBySubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ProfilesListBySubscriptionOutput>;

// The operation
/**
 * Lists all Traffic Manager profiles within a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ProfilesListBySubscription = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProfilesListBySubscriptionInput,
  outputSchema: ProfilesListBySubscriptionOutput,
}));
// Input Schema
export interface ProfilesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  properties?: {
    profileStatus?: "Enabled" | "Disabled";
    trafficRoutingMethod?:
      | "Performance"
      | "Priority"
      | "Weighted"
      | "Geographic"
      | "MultiValue"
      | "Subnet";
    dnsConfig?: { relativeName?: string; fqdn?: string; ttl?: number };
    monitorConfig?: {
      profileMonitorStatus?:
        | "CheckingEndpoints"
        | "Online"
        | "Degraded"
        | "Disabled"
        | "Inactive";
      protocol?: "HTTP" | "HTTPS" | "TCP";
      port?: number;
      path?: string;
      intervalInSeconds?: number;
      timeoutInSeconds?: number;
      toleratedNumberOfFailures?: number;
      customHeaders?: { name?: string; value?: string }[];
      expectedStatusCodeRanges?: { min?: number; max?: number }[];
    };
    endpoints?: { id?: string; name?: string; type?: string }[];
    trafficViewEnrollmentStatus?: "Enabled" | "Disabled";
    allowedEndpointRecordTypes?: (
      | "DomainName"
      | "IPv4Address"
      | "IPv6Address"
      | "Any"
    )[];
    maxReturn?: number;
  };
  tags?: Record<string, string>;
  location?: string;
}
export const ProfilesUpdateInput = /*@__PURE__*/ Schema.Struct({
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
) as unknown as Schema.Codec<ProfilesUpdateInput>;

// Output Schema
export interface ProfilesUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ProfilesUpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ProfilesUpdateOutput>;

// The operation
/**
 * Update a Traffic Manager profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - The name of the Traffic Manager profile.
 */
export const ProfilesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProfilesUpdateInput,
  outputSchema: ProfilesUpdateOutput,
}));
// Input Schema
export interface TrafficManagerUserMetricsKeysCreateOrUpdateInput {
  subscriptionId: string;
}
export const TrafficManagerUserMetricsKeysCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Network/trafficManagerUserMetricsKeys/default",
      apiVersion: "2022-04-01",
    }),
  ) as unknown as Schema.Codec<TrafficManagerUserMetricsKeysCreateOrUpdateInput>;

// Output Schema
export interface TrafficManagerUserMetricsKeysCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const TrafficManagerUserMetricsKeysCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<TrafficManagerUserMetricsKeysCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a subscription-level key used for Real User Metrics collection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const TrafficManagerUserMetricsKeysCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TrafficManagerUserMetricsKeysCreateOrUpdateInput,
    outputSchema: TrafficManagerUserMetricsKeysCreateOrUpdateOutput,
  }));
// Input Schema
export interface TrafficManagerUserMetricsKeysDeleteInput {
  subscriptionId: string;
}
export const TrafficManagerUserMetricsKeysDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Network/trafficManagerUserMetricsKeys/default",
      apiVersion: "2022-04-01",
    }),
  ) as unknown as Schema.Codec<TrafficManagerUserMetricsKeysDeleteInput>;

// Output Schema
export interface TrafficManagerUserMetricsKeysDeleteOutput {
  boolean?: boolean;
}
export const TrafficManagerUserMetricsKeysDeleteOutput =
  /*@__PURE__*/ Schema.Struct({
    boolean: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<TrafficManagerUserMetricsKeysDeleteOutput>;

// The operation
/**
 * Delete a subscription-level key used for Real User Metrics collection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const TrafficManagerUserMetricsKeysDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TrafficManagerUserMetricsKeysDeleteInput,
    outputSchema: TrafficManagerUserMetricsKeysDeleteOutput,
  }));
// Input Schema
export interface TrafficManagerUserMetricsKeysGetInput {
  subscriptionId: string;
}
export const TrafficManagerUserMetricsKeysGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Network/trafficManagerUserMetricsKeys/default",
      apiVersion: "2022-04-01",
    }),
  ) as unknown as Schema.Codec<TrafficManagerUserMetricsKeysGetInput>;

// Output Schema
export interface TrafficManagerUserMetricsKeysGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const TrafficManagerUserMetricsKeysGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<TrafficManagerUserMetricsKeysGetOutput>;

// The operation
/**
 * Get the subscription-level key used for Real User Metrics collection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const TrafficManagerUserMetricsKeysGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TrafficManagerUserMetricsKeysGetInput,
    outputSchema: TrafficManagerUserMetricsKeysGetOutput,
  }));
